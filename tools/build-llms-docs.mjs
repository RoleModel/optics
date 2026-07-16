/**
 * Generates AI-friendly documentation (llms.txt + per-page markdown) from the
 * Storybook MDX docs. Each `<Canvas of={Story} />` is replaced with the
 * story's actual rendered HTML, and each `<DesignTokenDocBlock />` with a
 * table of the tokens parsed from the token CSS files.
 *
 * Output (served from the root of the docs site via a Storybook staticDir):
 *   llms-docs/llms.txt        — index of all pages
 *   llms-docs/llms-full.txt   — every page concatenated
 *   llms-docs/llms/<slug>.md  — one markdown file per docs page
 *
 * For example, Button.mdx becomes llms/components-button.md, which starts:
 *
 *   # Button
 *
 *   [Source Code](https://github.com/RoleModel/optics/blob/main/src/components/button.css)
 *
 *   Button classes can be used on `button` or `a` html elements. ...
 *
 *   ## Playground
 *
 *   ```html
 *   <button class="btn">Primary</button>
 *   ```
 */
import fs from 'node:fs'
import path from 'node:path'
import { register } from 'node:module'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { JSDOM } from 'jsdom'
import prettier from 'prettier'
import { sanitize } from 'storybook/internal/csf'

register('./llms-resolve-hooks.mjs', import.meta.url)

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const STORIES_DIR = path.join(ROOT, 'src/stories')
const TOKENS_DIR = path.join(ROOT, 'src/core/tokens')
const OUT_DIR = path.join(ROOT, 'llms-docs')
const SITE_URL = 'https://docs.optics.rolemodel.design'
const SOURCE_URL = 'https://github.com/RoleModel/optics/blob/main/src'

/**
 * A `*.stories.js` module namespace: the `default` export is the Storybook
 * meta (title, args, argTypes, render), every other export is a story.
 *
 * @typedef {Object<string, any>} StoriesModule
 */

/**
 * Collects warnings from every stage of the build so they can be reported
 * together at the end, in the order they occurred.
 */
class WarningCollector {
  /** @type {string[]} */
  list = []

  /**
   * @param {string} file - absolute path of the MDX page the warning is about
   * @param {string} message
   */
  add(file, message) {
    this.list.push(`${path.relative(ROOT, file)}: ${message}`)
  }

  report() {
    if (this.list.length === 0) return
    console.log(`llms-docs: ${this.list.length} warnings`)
    for (const warning of this.list) console.log(`  - ${warning}`)
  }
}

// ---------------------------------------------------------------------------
// Design tokens, parsed from the `@tokens <Category>` annotations in the CSS
// ---------------------------------------------------------------------------

/**
 * `|` would break out of a markdown table cell
 *
 * @param {string} text
 * @returns {string}
 */
const escapeCell = (text) => text.replaceAll('|', '\\|')

/**
 * @param {string[]} headers
 * @param {string[]} rows - preformatted `| a | b |` lines
 * @returns {string}
 */
const markdownTable = (headers, rows) =>
  [`| ${headers.join(' | ')} |`, `| ${headers.map(() => '---').join(' | ')} |`, ...rows].join('\n')

class Token {
  /**
   * E.G. * `--op-radius-small: 0.125rem;`
   * @param {string} name - the custom property name, e.g. `--op-radius-small`
   * @param {string} value - the raw declaration value (may span multiple
   *   lines in the source CSS; collapsed to single-spaced text)
   */
  constructor(name, value) {
    this.name = name
    this.value = value.replace(/\s+/g, ' ').trim()
  }

  /**
   * @returns {string} a markdown table row, e.g. `` | `--op-radius-small` | `0.125rem` | ``
   */
  markdownRow() {
    return `| \`${this.name}\` | \`${escapeCell(this.value)}\` |`
  }
}

/**
 * Scans every CSS file in the tokens directory for `@tokens <Category>` doc
 * comments — the same annotations storybook-design-token builds its doc
 * blocks from — and exposes each category's tokens as a markdown table:
 *
 *   \/**
 *    * Border Radius
 *    * @tokens Border Radius
 *    * @presenter BorderRadius
 *    *\/
 *   --op-radius-small: 0.125rem;
 *   --op-radius-medium: 0.25rem;
 */
class TokenCatalog {
  static DOC_COMMENT_OPENER = /\/\*\*/
  static TOKEN_CATEGORY_ANNOTATION = /@tokens\s+([^\n*]+)/
  static CUSTOM_PROPERTY_DECLARATION = /(--[\w-]+)\s*:\s*([^;]+);/g

  /** @type {Object<string, Token[]>} */
  categories = {}

  constructor() {
    for (const file of fs.readdirSync(TOKENS_DIR)) {
      if (!file.endsWith('.css')) continue
      this.parseTokenCss(fs.readFileSync(path.join(TOKENS_DIR, file), 'utf8'))
    }
  }

  /**
   * A `@tokens` doc comment owns every custom property that follows it, up to
   * the next doc comment.
   *
   * @param {string} css - one token CSS file's source
   */
  parseTokenCss(css) {
    for (const segment of css.split(TokenCatalog.DOC_COMMENT_OPENER)) {
      const categoryMatch = segment.match(TokenCatalog.TOKEN_CATEGORY_ANNOTATION)
      if (!categoryMatch) continue
      const declarations = segment.slice(segment.indexOf('*/') + 2)
      this.addTokens(categoryMatch[1].trim(), declarations)
    }
  }

  /**
   * A category may span several doc comments (even across files); later
   * declarations append to it.
   *
   * @param {string} category
   * @param {string} declarations - the raw CSS following a `@tokens` doc comment
   */
  addTokens(category, declarations) {
    const tokens = [...declarations.matchAll(TokenCatalog.CUSTOM_PROPERTY_DECLARATION)].map(
      ([, name, value]) => new Token(name, value)
    )
    this.categories[category] = (this.categories[category] || []).concat(tokens)
  }

  /**
   * @param {string} categoryName
   * @returns {string | null} the category as a markdown table, or null for an
   *   unknown/empty category. table('Border Radius') gives:
   *
   *   | Token | Value |
   *   | --- | --- |
   *   | `--op-radius-small` | `0.125rem` |
   *   | `--op-radius-medium` | `0.25rem` |
   */
  table(categoryName) {
    const tokens = this.categories[categoryName]
    if (!tokens || tokens.length === 0) return null

    return markdownTable(
      ['Token', 'Value'],
      tokens.map((token) => token.markdownRow())
    )
  }
}

// ---------------------------------------------------------------------------
// Story rendering
// ---------------------------------------------------------------------------

/**
 * A story module's meta, one named story, and the story's resolved args —
 * story args override meta args, the same resolution Storybook applies.
 *
 * @param {StoriesModule} storiesModule
 * @param {string} storyName
 * @returns {{ meta: Object, story: Object | undefined, args: Object }}
 */
const resolveStory = (storiesModule, storyName) => {
  const meta = storiesModule.default || {}
  const story = storiesModule[storyName]
  return { meta, story, args: { ...meta.args, ...story?.args } }
}

class StoryRenderer {
  /**
   * A few stories interpolate optional args into class names (e.g.
   * `form-control--undefined`); drop those so they don't read as real classes.
   */
  static UNDEFINED_MODIFIER_CLASS = / ?[\w-]+--undefined/g
  static PRETTIER_HTML = { parser: 'html', printWidth: 110 }

  /**
   * The story render functions build real DOM nodes via browser globals at
   * import time, so this must run before any story module is dynamically
   * imported (DocsBuilder#run calls it before converting the first page).
   */
  installDomGlobals() {
    const dom = new JSDOM('<!doctype html><html><body></body></html>')
    this.document = dom.window.document
    for (const key of ['window', 'document', 'HTMLElement', 'Node', 'CustomEvent', 'DocumentFragment']) {
      global[key] = dom.window[key]
    }
    this.shimInnerText(dom.window)
  }

  /**
   * jsdom does not implement innerText, which the story render functions use
   *
   * @param {Window} window - the JSDOM window
   */
  shimInnerText(window) {
    Object.defineProperty(window.HTMLElement.prototype, 'innerText', {
      get() {
        return this.textContent
      },
      set(value) {
        this.textContent = value
      },
    })
  }

  /**
   * Calls a story's render function (the same one Storybook calls) with its
   * resolved args. For example the Button `Primary` story's html is:
   *
   *   <button class="btn btn--primary">Primary</button>
   *
   * @param {StoriesModule} storiesModule
   * @param {string} storyName
   * @returns {Promise<{ html?: string, failure?: string }>} the rendered
   *   markup, pretty-printed — or, when the story can't be rendered, the
   *   reason, for the caller to record
   */
  async render(storiesModule, storyName) {
    const { meta, story, args } = resolveStory(storiesModule, storyName)
    if (!story) return { failure: `story "${storyName}" not found` }
    const render = story.render || meta.render
    if (!render) return { failure: `story "${storyName}" has no render function` }
    let result
    try {
      result = render(args, { args })
    } catch (error) {
      return { failure: `story "${storyName}" failed to render: ${error.message}` }
    }
    let html = typeof result === 'string' ? result : result?.outerHTML
    html = html?.replace(StoryRenderer.UNDEFINED_MODIFIER_CLASS, '')
    if (!html) return { failure: `story "${storyName}" rendered nothing` }
    return { html: await this.prettyPrint(html) }
  }

  /**
   * Prettier can choke on unusual fragments; fall back to the raw markup
   *
   * @param {string} html
   * @returns {Promise<string>}
   */
  async prettyPrint(html) {
    try {
      return (await prettier.format(html, StoryRenderer.PRETTIER_HTML)).trimEnd()
    } catch {
      return html
    }
  }
}

/**
 * Markdown stand-in for Storybook's <Controls /> panel, built from the story
 * meta's argTypes and default args. For the Button story it renders:
 *
 *   | Arg | Default | Options | Description |
 *   | --- | --- | --- | --- |
 *   | `label` | `"Primary"` |  |  |
 *   | `variant` | `"default"` | `default`, `primary`, `destructive`, `warning` |  |
 *
 * @param {StoriesModule} storiesModule
 * @param {string} storyName
 * @returns {string | null} the args table, or null when there are no args
 */
const controlsTable = (storiesModule, storyName) => {
  const { meta, args } = resolveStory(storiesModule, storyName)
  const argTypes = meta.argTypes || {}
  const names = [...new Set([...Object.keys(argTypes), ...Object.keys(args)])]
  if (names.length === 0) return null
  const formatValue = (value) => (value === undefined ? '' : `\`${escapeCell(JSON.stringify(value))}\``)
  const rows = names.map((name) => {
    const argType = argTypes[name] || {}
    const options = (argType.options || argType.control?.options || []).map((option) => `\`${option}\``).join(', ')
    const description = escapeCell(argType.description || '').replace(/\s+/g, ' ')
    return `| \`${name}\` | ${formatValue(args[name])} | ${escapeCell(options)} | ${description} |`
  })
  return markdownTable(['Arg', 'Default', 'Options', 'Description'], rows)
}

// ---------------------------------------------------------------------------
// MDX -> markdown
// ---------------------------------------------------------------------------

/**
 * @param {string} dir
 * @returns {string[]} absolute paths of every `.mdx` file under dir, recursively
 */
const mdxFiles = (dir) =>
  fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) return mdxFiles(full)
    return entry.name.endsWith('.mdx') ? [full] : []
  })

/**
 * String.replace with an async replacer (needed because rendering a story is async)
 *
 * @param {string} text
 * @param {RegExp} regex - must have the `g` flag
 * @param {function(...string): (string | Promise<string>)} replacer - receives
 *   the same arguments as a String.replace callback
 * @returns {Promise<string>}
 */
const replaceAsync = async (text, regex, replacer) => {
  const parts = []
  let lastIndex = 0
  for (const match of text.matchAll(regex)) {
    parts.push(text.slice(lastIndex, match.index), await replacer(...match))
    lastIndex = match.index + match[0].length
  }
  parts.push(text.slice(lastIndex))
  return parts.join('')
}

/**
 * First prose paragraph after the H1 = page description for the index
 *
 * @param {string} text - the page's converted markdown
 * @returns {string} the paragraph joined to one line, or '' if none found
 */
const extractDescription = (text) => {
  const isProse = (line) => line && !/^[#[>`|<{\-*_]/.test(line)
  const lines = text.split('\n').map((line) => line.trim())
  const firstProseIndex = lines.findIndex(isProse)
  if (firstProseIndex === -1) return ''
  const paragraph = []
  for (let i = firstProseIndex; i < lines.length && isProse(lines[i]); i++) paragraph.push(lines[i])
  return paragraph.join(' ')
}

/**
 * Converts one MDX docs page to plain markdown by replacing each JSX/Storybook
 * construct with a static markdown equivalent (see each transform method below).
 */
class MdxPageConverter {
  // The JSX/Storybook constructs recognized in the MDX source, one per
  // transform method below
  static STORY_MODULE_IMPORT = /^import \* as (\w+) from '([^']+)'/gm
  static IMPORT_LINE = /^import .*\n/gm
  static META_BLOCK = /<Meta[\s\S]*?\/>\n?/g
  static MDX_COMMENT = /\{\/\*[\s\S]*?\*\/\}\n?/g
  static META_TITLE_ATTRIBUTE = /<Meta\s+title="([^"]+)"/
  static META_OF_ATTRIBUTE = /<Meta\s+of=\{(\w+)\}/
  static SOURCE_CODE_LINK_BLOCK =
    /<div\s+dangerouslySetInnerHTML=\{\{\s*__html:\s*createSourceCodeLink\(\{[^}]*link:\s*'([^']+)'[^}]*\}\)[\s\S]*?<\/div>/g
  static ALERT_BLOCK =
    /<div\s+dangerouslySetInnerHTML=\{\{\s*__html:\s*createAlert\((\{[\s\S]*?\})\)\.outerHTML,?[\s\S]*?<\/div>/g
  static CANVAS_BLOCK = /<Canvas\s+of=\{(\w+)\.(\w+)\}[^/]*\/>/g
  static CONTROLS_BLOCK = /<Controls\s+of=\{(\w+)\.(\w+)\}[^/]*\/>/g
  static TOKEN_DOC_BLOCK = /<DesignTokenDocBlock\s+categoryName="([^"]+)"[^/]*\/>/g
  static COLOR_PALETTE_BLOCK = /<ColorPalette>[\s\S]*?<\/ColorPalette>/g
  static STORYBOOK_DOC_LINK = /\(\?path=\/docs\/([a-z0-9-]+?)--[a-z0-9-]+(#[^)]*)?\)/g
  static CLASSNAME_ATTRIBUTE = /className=/g
  static UNHANDLED_JSX_BLOCK = /^\s*<[A-Z][\s\S]*?\/>\n?/gm
  static EXCESS_BLANK_LINES = /\n{3,}/g

  /**
   * @param {string} file - absolute path of the `.mdx` page
   * @param {TokenCatalog} tokenCatalog
   * @param {StoryRenderer} storyRenderer
   * @param {WarningCollector} warnings
   */
  constructor(file, tokenCatalog, storyRenderer, warnings) {
    this.file = file
    this.tokenCatalog = tokenCatalog
    this.storyRenderer = storyRenderer
    this.warnings = warnings
  }

  /**
   * @returns {Promise<Page | null>} the converted page, or null when no title
   *   could be determined
   */
  async convert() {
    this.text = fs.readFileSync(this.file, 'utf8')
    this.storyModules = await this.loadStoryModules()
    this.title = this.findTitle()
    if (!this.title) {
      this.warnings.add(this.file, 'could not determine title; skipped')
      return null
    }

    this.stripImportsAndMeta()
    this.replaceSourceCodeLink()
    this.replaceAlertBlocks()
    await this.replaceCanvasBlocks()
    this.replaceControlsBlocks()
    this.replaceTokenDocBlocks()
    this.replaceColorPalette()
    this.rewriteStorybookLinks()
    this.replaceClassNameAttr()
    this.dropLeftoverJsx()

    return this.toPage()
  }

  /**
   * Story module namespace imports (`import * as FooStories from './Foo.stories'`),
   * loaded concurrently since each is an independent file with no shared state.
   * Extensionless paths are resolved by the registered llms-resolve-hooks.mjs.
   *
   * @returns {Promise<Object<string, StoriesModule>>} keyed by namespace name
   */
  async loadStoryModules() {
    const imports = [...this.text.matchAll(MdxPageConverter.STORY_MODULE_IMPORT)]
    const modules = await Promise.all(
      imports.map(async ([, name, importPath]) => {
        const modulePath = path.resolve(path.dirname(this.file), importPath)
        return [name, await import(pathToFileURL(modulePath).href)]
      })
    )
    return Object.fromEntries(modules)
  }

  /**
   * @returns {string | undefined} the page title, from `<Meta title="..." />`
   *   or the story module's meta
   */
  findTitle() {
    const explicitTitle = this.text.match(MdxPageConverter.META_TITLE_ATTRIBUTE)?.[1]
    if (explicitTitle) return explicitTitle
    const metaOf = this.text.match(MdxPageConverter.META_OF_ATTRIBUTE)?.[1]
    return this.storyModules[metaOf]?.default?.title
  }

  /** Strip imports, Meta, and MDX comments */
  stripImportsAndMeta() {
    this.text = this.text
      .replace(MdxPageConverter.IMPORT_LINE, '')
      .replace(MdxPageConverter.META_BLOCK, '')
      .replace(MdxPageConverter.MDX_COMMENT, '')
  }

  /**
   * Source-code breadcrumb helper -> plain link. The MDX pages embed
   * `createSourceCodeLink({ link: 'components/button.css' })` in a div;
   * it becomes:
   *
   *   [Source Code](https://github.com/RoleModel/optics/blob/main/src/components/button.css)
   */
  replaceSourceCodeLink() {
    this.text = this.text.replace(
      MdxPageConverter.SOURCE_CODE_LINK_BLOCK,
      (_, link) => `[Source Code](${SOURCE_URL}/${link})`
    )
  }

  /** Alert helper -> blockquote (see alertBlockquote below) */
  replaceAlertBlocks() {
    this.text = this.text.replace(MdxPageConverter.ALERT_BLOCK, (_, argsText) => this.alertBlockquote(argsText))
  }

  /**
   * The createAlert argument is a plain object literal; evaluate it to cope
   * with any key order, template literals, or HTML in the description.
   * `createAlert({ title: 'Note', description: 'Some <strong>info</strong>.' })`
   * becomes:
   *
   *   > **Note:** Some info.
   *
   * @param {string} argsText - the object-literal source captured from the MDX
   * @returns {string} the blockquote, or '' when the args can't be evaluated
   */
  alertBlockquote(argsText) {
    let alertArgs
    try {
      alertArgs = new Function(`return (${argsText})`)()
    } catch (error) {
      this.warnings.add(this.file, `could not parse createAlert args: ${error.message}`)
      return ''
    }
    return `> **${alertArgs.title || 'Note'}:** ${this.blockquoteText(alertArgs.description || '')}`
  }

  /**
   * Reduce the description's HTML to plain text; block breaks (`</div>`)
   * become continuation lines of the blockquote
   *
   * @param {string} html
   * @returns {string}
   */
  blockquoteText(html) {
    const scratch = this.storyRenderer.document.createElement('div')
    scratch.innerHTML = html.replaceAll('</div>', '</div>\n')
    return scratch.textContent
      .split('\n')
      .map((line) => line.replace(/\s+/g, ' ').trim())
      .filter(Boolean)
      .join('\n> ')
  }

  /** <Canvas of={FooStories.Bar} /> -> fenced HTML code block (see canvasCodeBlock below) */
  async replaceCanvasBlocks() {
    this.text = await replaceAsync(this.text, MdxPageConverter.CANVAS_BLOCK, (_, moduleName, storyName) =>
      this.canvasCodeBlock(moduleName, storyName)
    )
  }

  /**
   * The story's rendered HTML in a fenced code block.
   * `<Canvas of={ButtonStories.Primary} />` becomes:
   *
   *   ```html
   *   <button class="btn btn--primary">Primary</button>
   *   ```
   *
   * @param {string} moduleName - the story module's namespace name in the MDX
   * @param {string} storyName
   * @returns {Promise<string>} the code block, or '' when the module is
   *   unknown or the story fails to render
   */
  async canvasCodeBlock(moduleName, storyName) {
    const storiesModule = this.storyModules[moduleName]
    if (!storiesModule) {
      this.warnings.add(this.file, `unknown story module "${moduleName}"`)
      return ''
    }
    const { html, failure } = await this.storyRenderer.render(storiesModule, storyName)
    if (failure) {
      this.warnings.add(this.file, failure)
      return ''
    }
    return html ? `\`\`\`html\n${html}\n\`\`\`` : ''
  }

  /** <Controls of={FooStories.Bar} /> -> markdown args table (see controlsTable above) */
  replaceControlsBlocks() {
    this.text = this.text.replace(MdxPageConverter.CONTROLS_BLOCK, (_, moduleName, storyName) => {
      const storiesModule = this.storyModules[moduleName]
      if (!storiesModule) return ''
      return controlsTable(storiesModule, storyName) || ''
    })
  }

  /** <DesignTokenDocBlock categoryName="X" /> -> markdown token table (see TokenCatalog#table above) */
  replaceTokenDocBlocks() {
    this.text = this.text.replace(MdxPageConverter.TOKEN_DOC_BLOCK, (_, category) => {
      const table = this.tokenCatalog.table(category)
      if (table) return table
      this.warnings.add(this.file, `no tokens found for category "${category}"`)
      return `_No tokens found for category "${category}"._`
    })
  }

  /**
   * Color palette blocks (ColorScale.mdx) render swatches from JS at runtime;
   * point readers at the token source instead.
   */
  replaceColorPalette() {
    this.text = this.text.replace(
      MdxPageConverter.COLOR_PALETTE_BLOCK,
      `_Full scale definitions: [scale_color_tokens.css](${SOURCE_URL}/core/tokens/scale_color_tokens.css)_`
    )
  }

  /**
   * Storybook links -> relative markdown page links, so cross-references stay
   * navigable inside the llms docs. `(?path=/docs/components-button--docs#usage)`
   * becomes `(components-button.md#usage)`.
   */
  rewriteStorybookLinks() {
    this.text = this.text.replace(MdxPageConverter.STORYBOOK_DOC_LINK, '($1.md$2)')
  }

  /** Inline JSX demos -> plain HTML */
  replaceClassNameAttr() {
    this.text = this.text.replace(MdxPageConverter.CLASSNAME_ATTRIBUTE, 'class=')
  }

  /** Leftover JSX we do not handle: drop and warn */
  dropLeftoverJsx() {
    this.text = this.text.replace(MdxPageConverter.UNHANDLED_JSX_BLOCK, (block) => {
      this.warnings.add(this.file, `dropped unhandled JSX: ${block.trim().split('\n')[0]}`)
      return ''
    })
    if (/dangerouslySetInnerHTML/.test(this.text)) {
      this.warnings.add(this.file, 'unhandled dangerouslySetInnerHTML block left in output')
    }
  }

  /** @returns {Page} */
  toPage() {
    const markdown = this.text.replace(MdxPageConverter.EXCESS_BLANK_LINES, '\n\n').trim()
    return new Page(this.title, `${markdown}\n`)
  }
}

// ---------------------------------------------------------------------------
// Build
// ---------------------------------------------------------------------------

/**
 * Group pages by the first segment of their Storybook title (e.g.
 * 'Components/Button' is in 'Components'), in the same order the docs
 * site's sidebar uses.
 */
const SECTION_ORDER = ['Introduction', 'Overview', 'Tokens', 'Utilities', 'Components', 'Recipes']

/**
 * @param {string} title
 * @returns {string} the title's section, or 'Other' when not in SECTION_ORDER
 */
const sectionOf = (title) => {
  const section = title.split('/')[0]
  return SECTION_ORDER.includes(section) ? section : 'Other'
}

/**
 * @param {string} name
 * @returns {number} the section's sort position; unknown sections sort last
 */
const sectionRank = (name) => {
  const index = SECTION_ORDER.indexOf(name)
  return index === -1 ? SECTION_ORDER.length : index
}

/** @returns {string} */
const packageVersion = () => JSON.parse(fs.readFileSync(path.join(ROOT, 'package.json'), 'utf8')).version

/**
 * One finished docs page. Knows where it belongs (slug, section) and how to
 * present itself in the index and the full doc.
 */
class Page {
  /**
   * @param {string} title - the Storybook page title, e.g. 'Components/Button'
   * @param {string} markdown - the page's final converted markdown
   */
  constructor(title, markdown) {
    this.title = title
    // sanitize is Storybook's own title->slug function, so page filenames
    // match the docs site's URL slugs ('Components/Button Group' becomes
    // 'components-button-group')
    this.slug = sanitize(title)
    this.section = sectionOf(title)
    this.description = extractDescription(markdown)
    this.markdown = markdown
  }

  /**
   * @returns {string} the page's llms.txt line, e.g.
   *   `- [Components/Button](https://docs.optics.rolemodel.design/llms/components-button.md): Button classes can be used on ...`
   */
  indexEntry() {
    const description = this.description.length > 160 ? `${this.description.slice(0, 157)}...` : this.description
    return `- [${this.title}](${SITE_URL}/llms/${this.slug}.md)${description ? `: ${description}` : ''}`
  }

  /**
   * @returns {string} the page's markdown introduced by an HTML comment
   *   marker, e.g. `<!-- Page: Components/Button (components-button.md) -->`
   */
  fullDocEntry() {
    return `<!-- Page: ${this.title} (${this.slug}.md) -->\n\n${this.markdown}`
  }
}

class DocsBuilder {
  constructor() {
    this.storyRenderer = new StoryRenderer()
    this.tokenCatalog = new TokenCatalog()
    this.warnings = new WarningCollector()
  }

  async run() {
    // Story modules build DOM nodes at import time, so the globals must exist
    // before the first page conversion dynamically imports one.
    this.storyRenderer.installDomGlobals()
    const pages = await this.renderPages()
    this.sortBySection(pages)
    this.writePages(pages)
    const indexLines = this.buildIndexLines(pages)
    this.writeIndex(indexLines)
    this.writeFullDoc(indexLines, pages)
    this.report(pages)
  }

  /** @returns {Promise<Page[]>} one Page per convertible MDX file, in sorted file order */
  async renderPages() {
    const pages = []
    for (const file of mdxFiles(STORIES_DIR).sort()) {
      const converter = new MdxPageConverter(file, this.tokenCatalog, this.storyRenderer, this.warnings)
      const page = await converter.convert()
      if (page) pages.push(page)
    }
    return pages
  }

  /** @param {Page[]} pages - sorted in place by section, then title */
  sortBySection(pages) {
    pages.sort((a, b) => sectionRank(a.section) - sectionRank(b.section) || a.title.localeCompare(b.title))
  }

  /** @param {Page[]} pages */
  writePages(pages) {
    fs.rmSync(OUT_DIR, { recursive: true, force: true })
    fs.mkdirSync(path.join(OUT_DIR, 'llms'), { recursive: true })
    for (const page of pages) {
      fs.writeFileSync(path.join(OUT_DIR, 'llms', `${page.slug}.md`), page.markdown)
    }
  }

  /**
   * llms.txt index, following the llms.txt convention (https://llmstxt.org):
   * an H1, a blockquote summary, then sections of page links (see Page#indexEntry)
   *
   * @param {Page[]} pages
   * @returns {string[]}
   */
  buildIndexLines(pages) {
    const indexLines = this.indexHeader()
    let currentSection = null
    for (const page of pages) {
      if (page.section !== currentSection) {
        indexLines.push('', `## ${page.section}`, '')
        currentSection = page.section
      }
      indexLines.push(page.indexEntry())
    }
    return indexLines
  }

  /** @returns {string[]} */
  indexHeader() {
    return [
      '# Optics Design System',
      '',
      `> Optics is a pure-CSS design system by RoleModel Software (npm: \`@rolemodel/optics\`, v${packageVersion()}). It provides design tokens (CSS custom properties prefixed \`--op-\`), base styles, utilities, and BEM-style components (\`.btn\`, \`.card\`, ...) that are customized per project via token overrides.`,
      '',
      `Every page below is plain markdown. Component pages include the actual HTML markup for each variant, the component's CSS variable API, and customization patterns. The full documentation in one file: [llms-full.txt](${SITE_URL}/llms-full.txt). All design tokens as JSON: https://unpkg.com/@rolemodel/optics/dist/tokens/tokens.json`,
    ]
  }

  /** @param {string[]} indexLines */
  writeIndex(indexLines) {
    fs.writeFileSync(path.join(OUT_DIR, 'llms.txt'), `${indexLines.join('\n')}\n`)
  }

  /**
   * llms-full.txt: the index followed by every page (see Page#fullDocEntry),
   * separated by horizontal rules.
   *
   * @param {string[]} indexLines
   * @param {Page[]} pages
   */
  writeFullDoc(indexLines, pages) {
    const fullDoc = pages.map((page) => page.fullDocEntry()).join('\n---\n\n')
    fs.writeFileSync(path.join(OUT_DIR, 'llms-full.txt'), `${indexLines.join('\n')}\n\n---\n\n${fullDoc}`)
  }

  /** @param {Page[]} pages */
  report(pages) {
    console.log(`llms-docs: wrote ${pages.length} pages to ${path.relative(ROOT, OUT_DIR)}/`)
    this.warnings.report()
  }
}

await new DocsBuilder().run()
