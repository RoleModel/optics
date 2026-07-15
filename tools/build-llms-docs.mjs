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

register('./llms-resolve-hooks.mjs', import.meta.url)

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const STORIES_DIR = path.join(ROOT, 'src/stories')
const TOKENS_DIR = path.join(ROOT, 'src/core/tokens')
const OUT_DIR = path.join(ROOT, 'llms-docs')
const SITE_URL = 'https://docs.optics.rolemodel.design'
const SOURCE_URL = 'https://github.com/RoleModel/optics/blob/main/src'

// Collects warnings from every stage of the build so they can be reported
// together at the end, in the order they occurred.
class WarningCollector {
  list = []

  add(file, message) {
    this.list.push(`${path.relative(ROOT, file)}: ${message}`)
  }
}

// ---------------------------------------------------------------------------
// Design tokens, parsed from the `@tokens <Category>` annotations in the CSS
// ---------------------------------------------------------------------------

// `|` would break out of a markdown table cell
const escapeCell = (text) => text.replaceAll('|', '\\|')

const markdownTable = (headers, rows) =>
  [`| ${headers.join(' | ')} |`, `| ${headers.map(() => '---').join(' | ')} |`, ...rows].join('\n')

// Scans every CSS file in a tokens directory for doc comments like:
//
//   /**
//    * Border Radius
//    * @tokens Border Radius
//    * @presenter BorderRadius
//    */
//   --op-radius-small: 0.125rem;
//   --op-radius-medium: 0.25rem;
//
// and exposes { 'Border Radius': [{ name: '--op-radius-small', value: '0.125rem' }, ...], ... }
// as markdown tables. These are the same annotations storybook-design-token uses to build
// its doc blocks.
class TokenCatalog {
  constructor(tokensDir) {
    this.categories = {}
    for (const file of fs.readdirSync(tokensDir)) {
      if (!file.endsWith('.css')) continue
      const css = fs.readFileSync(path.join(tokensDir, file), 'utf8')
      // Split on doc comments; a `@tokens` comment owns the tokens that follow it.
      const segments = css.split(/\/\*\*/)
      for (const segment of segments) {
        const categoryMatch = segment.match(/@tokens\s+([^\n*]+)/)
        if (!categoryMatch) continue
        const name = categoryMatch[1].trim()
        const body = segment.slice(segment.indexOf('*/') + 2)
        const tokens = []
        for (const tokenMatch of body.matchAll(/(--[\w-]+)\s*:\s*([^;]+);/g)) {
          tokens.push({ name: tokenMatch[1], value: tokenMatch[2].replace(/\s+/g, ' ').trim() })
        }
        this.categories[name] = (this.categories[name] || []).concat(tokens)
      }
    }
  }

  // Renders one category as a markdown table, e.g. table('Border Radius', ...):
  //
  //   | Token | Value |
  //   | --- | --- |
  //   | `--op-radius-small` | `0.125rem` |
  //   | `--op-radius-medium` | `0.25rem` |
  table(categoryName, file, warnings) {
    const tokens = this.categories[categoryName]
    if (!tokens || tokens.length === 0) {
      warnings.add(file, `no tokens found for category "${categoryName}"`)
      return `_No tokens found for category "${categoryName}"._`
    }
    const rows = tokens.map((token) => `| \`${token.name}\` | \`${escapeCell(token.value)}\` |`)
    return markdownTable(['Token', 'Value'], rows)
  }
}

// ---------------------------------------------------------------------------
// Story rendering
// ---------------------------------------------------------------------------

class StoryRenderer {
  // The story render functions build real DOM nodes. This must run before any
  // story module is dynamically imported (they call these globals at import time).
  constructor() {
    const dom = new JSDOM('<!doctype html><html><body></body></html>')
    global.window = dom.window
    global.document = dom.window.document
    for (const key of ['HTMLElement', 'Node', 'CustomEvent', 'DocumentFragment']) {
      global[key] = dom.window[key]
    }
    // jsdom does not implement innerText, which the story render functions use
    Object.defineProperty(dom.window.HTMLElement.prototype, 'innerText', {
      get() {
        return this.textContent
      },
      set(value) {
        this.textContent = value
      },
    })
  }

  // Calls a story's render function (the same one Storybook calls) with its
  // resolved args and returns the resulting markup, pretty-printed. For example
  // the Button `Primary` story returns:
  //
  //   <button class="btn btn--primary">Primary</button>
  async render(storiesModule, storyName, file, warnings) {
    const meta = storiesModule.default || {}
    const story = storiesModule[storyName]
    if (!story) {
      warnings.add(file, `story "${storyName}" not found`)
      return null
    }
    const render = story.render || meta.render
    if (!render) {
      warnings.add(file, `story "${storyName}" has no render function`)
      return null
    }
    const args = { ...meta.args, ...story.args }
    let result
    try {
      result = render(args, { args })
    } catch (error) {
      warnings.add(file, `story "${storyName}" failed to render: ${error.message}`)
      return null
    }
    let html = typeof result === 'string' ? result : result?.outerHTML
    // A few stories interpolate optional args into class names (e.g.
    // `form-control--undefined`); drop those so they don't read as real classes.
    html = html?.replace(/ ?[\w-]+--undefined/g, '')
    if (!html) {
      warnings.add(file, `story "${storyName}" rendered nothing`)
      return null
    }
    try {
      return (await prettier.format(html, { parser: 'html', printWidth: 110 })).trimEnd()
    } catch {
      return html
    }
  }
}

// Markdown stand-in for Storybook's <Controls /> panel, built from the story
// meta's argTypes and default args. For the Button story it renders:
//
//   | Arg | Default | Options | Description |
//   | --- | --- | --- | --- |
//   | `label` | `"Primary"` |  |  |
//   | `variant` | `"default"` | `default`, `primary`, `destructive`, `warning` |  |
const controlsTable = (storiesModule, storyName) => {
  const meta = storiesModule.default || {}
  const story = storiesModule[storyName] || {}
  const argTypes = meta.argTypes || {}
  const args = { ...meta.args, ...story.args }
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

// Mirrors Storybook's own URL slugs so page links stay stable, e.g.
// 'Components/Button Group' becomes 'components-button-group'
const storybookSlug = (title) =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')

const walk = (dir) =>
  fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) return walk(full)
    return entry.name.endsWith('.mdx') ? [full] : []
  })

// String.replace with an async replacer (needed because rendering a story is async)
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

// First prose paragraph after the H1 = page description for the index
const extractDescription = (text) => {
  const isProse = (line) => line && !/^[#[>`|<{\-*_]/.test(line)
  const lines = text.split('\n').map((line) => line.trim())
  const firstProseIndex = lines.findIndex(isProse)
  if (firstProseIndex === -1) return ''
  const paragraph = []
  for (let i = firstProseIndex; i < lines.length && isProse(lines[i]); i++) paragraph.push(lines[i])
  return paragraph.join(' ')
}

// Converts one MDX docs page to plain markdown by replacing each JSX/Storybook
// construct with a static markdown equivalent (see each transform method below).
class MdxPageConverter {
  constructor(file, tokenCatalog, storyRenderer, warnings) {
    this.file = file
    this.tokenCatalog = tokenCatalog
    this.storyRenderer = storyRenderer
    this.warnings = warnings
  }

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

  // Story module namespace imports (`import * as FooStories from './Foo.stories'`),
  // loaded concurrently since each is an independent file with no shared state.
  async loadStoryModules() {
    const imports = [...this.text.matchAll(/^import \* as (\w+) from '([^']+)'/gm)]
    const modules = await Promise.all(
      imports.map(async ([, name, importPath]) => {
        let modulePath = path.resolve(path.dirname(this.file), importPath)
        if (!fs.existsSync(modulePath)) modulePath += '.js'
        return [name, await import(pathToFileURL(modulePath).href)]
      })
    )
    return Object.fromEntries(modules)
  }

  // Page title: from `<Meta title="..." />` or the story module's meta
  findTitle() {
    const explicitTitle = this.text.match(/<Meta\s+title="([^"]+)"/)?.[1]
    if (explicitTitle) return explicitTitle
    const metaOf = this.text.match(/<Meta\s+of=\{(\w+)\}/)?.[1]
    return this.storyModules[metaOf]?.default?.title
  }

  // Strip imports, Meta, and MDX comments
  stripImportsAndMeta() {
    this.text = this.text
      .replace(/^import .*\n/gm, '')
      .replace(/<Meta[\s\S]*?\/>\n?/g, '')
      .replace(/\{\/\*[\s\S]*?\*\/\}\n?/g, '')
  }

  // Source-code breadcrumb helper -> plain link. The MDX pages embed
  // `createSourceCodeLink({ link: 'components/button.css' })` in a div;
  // it becomes:
  //
  //   [Source Code](https://github.com/RoleModel/optics/blob/main/src/components/button.css)
  replaceSourceCodeLink() {
    this.text = this.text.replace(
      /<div\s+dangerouslySetInnerHTML=\{\{\s*__html:\s*createSourceCodeLink\(\{[^}]*link:\s*'([^']+)'[^}]*\}\)[\s\S]*?<\/div>/g,
      (_, link) => `[Source Code](${SOURCE_URL}/${link})`
    )
  }

  // Alert helper -> blockquote. The argument is a plain object literal;
  // evaluate it to cope with any key order, template literals, or HTML in
  // the description. `createAlert({ title: 'Note', description: 'Some <strong>info</strong>.' })`
  // becomes:
  //
  //   > **Note:** Some info.
  replaceAlertBlocks() {
    this.text = this.text.replace(
      /<div\s+dangerouslySetInnerHTML=\{\{\s*__html:\s*createAlert\((\{[\s\S]*?\})\)\.outerHTML,?[\s\S]*?<\/div>/g,
      (whole, argsText) => {
        let alertArgs
        try {
          alertArgs = new Function(`return (${argsText})`)()
        } catch (error) {
          this.warnings.add(this.file, `could not parse createAlert args: ${error.message}`)
          return ''
        }
        const scratch = document.createElement('div')
        scratch.innerHTML = (alertArgs.description || '').replaceAll('</div>', '</div>\n')
        const description = scratch.textContent
          .split('\n')
          .map((line) => line.replace(/\s+/g, ' ').trim())
          .filter(Boolean)
          .join('\n> ')
        return `> **${alertArgs.title || 'Note'}:** ${description}`
      }
    )
  }

  // <Canvas of={FooStories.Bar} /> -> the story's rendered HTML in a fenced
  // code block. `<Canvas of={ButtonStories.Primary} />` becomes:
  //
  //   ```html
  //   <button class="btn btn--primary">Primary</button>
  //   ```
  async replaceCanvasBlocks() {
    this.text = await replaceAsync(this.text, /<Canvas\s+of=\{(\w+)\.(\w+)\}[^/]*\/>/g, async (whole, ns, storyName) => {
      const storiesModule = this.storyModules[ns]
      if (!storiesModule) {
        this.warnings.add(this.file, `unknown story module "${ns}"`)
        return ''
      }
      const html = await this.storyRenderer.render(storiesModule, storyName, this.file, this.warnings)
      return html ? `\`\`\`html\n${html}\n\`\`\`` : ''
    })
  }

  // <Controls of={FooStories.Bar} /> -> markdown args table (see controlsTable above)
  replaceControlsBlocks() {
    this.text = this.text.replace(/<Controls\s+of=\{(\w+)\.(\w+)\}[^/]*\/>/g, (whole, ns, storyName) => {
      const storiesModule = this.storyModules[ns]
      if (!storiesModule) return ''
      return controlsTable(storiesModule, storyName) || ''
    })
  }

  // <DesignTokenDocBlock categoryName="X" /> -> markdown token table (see TokenCatalog#table above)
  replaceTokenDocBlocks() {
    this.text = this.text.replace(/<DesignTokenDocBlock\s+categoryName="([^"]+)"[^/]*\/>/g, (_, category) =>
      this.tokenCatalog.table(category, this.file, this.warnings)
    )
  }

  // Color palette blocks (ColorScale.mdx) render swatches from JS at runtime;
  // point readers at the token source instead.
  replaceColorPalette() {
    this.text = this.text.replace(
      /<ColorPalette>[\s\S]*?<\/ColorPalette>/g,
      `_Full scale definitions: [scale_color_tokens.css](${SOURCE_URL}/core/tokens/scale_color_tokens.css)_`
    )
  }

  // Storybook links -> relative markdown page links, so cross-references stay
  // navigable inside the llms docs. `(?path=/docs/components-button--docs#usage)`
  // becomes `(components-button.md#usage)`.
  rewriteStorybookLinks() {
    this.text = this.text.replace(/\(\?path=\/docs\/([a-z0-9-]+?)--[a-z0-9-]+(#[^)]*)?\)/g, '($1.md$2)')
  }

  // Inline JSX demos -> plain HTML
  replaceClassNameAttr() {
    this.text = this.text.replace(/className=/g, 'class=')
  }

  // Leftover JSX we do not handle: drop and warn
  dropLeftoverJsx() {
    this.text = this.text.replace(/^\s*<[A-Z][\s\S]*?\/>\n?/gm, (block) => {
      this.warnings.add(this.file, `dropped unhandled JSX: ${block.trim().split('\n')[0]}`)
      return ''
    })
    if (/dangerouslySetInnerHTML/.test(this.text)) {
      this.warnings.add(this.file, 'unhandled dangerouslySetInnerHTML block left in output')
    }
  }

  toPage() {
    this.text = this.text.replace(/\n{3,}/g, '\n\n').trim()
    return {
      file: this.file,
      title: this.title,
      slug: storybookSlug(this.title),
      description: extractDescription(this.text),
      markdown: `${this.text}\n`,
    }
  }
}

// ---------------------------------------------------------------------------
// Build
// ---------------------------------------------------------------------------

// Group pages by the first segment of their Storybook title (e.g.
// 'Components/Button' is in 'Components'), in the same order the docs
// site's sidebar uses.
const SECTION_ORDER = ['Introduction', 'Overview', 'Tokens', 'Utilities', 'Components', 'Recipes']
const sectionOf = (title) => {
  const section = title.split('/')[0]
  return SECTION_ORDER.includes(section) ? section : 'Other'
}
const sectionRank = (name) => {
  const index = SECTION_ORDER.indexOf(name)
  return index === -1 ? SECTION_ORDER.length : index
}

class DocsBuilder {
  constructor() {
    this.storiesDir = STORIES_DIR
    this.outDir = OUT_DIR
    // Must be constructed before any MdxPageConverter, since converting a page
    // dynamically imports its story modules (see StoryRenderer's constructor).
    this.storyRenderer = new StoryRenderer()
    this.tokenCatalog = new TokenCatalog(TOKENS_DIR)
    this.warnings = new WarningCollector()
  }

  async run() {
    const pages = await this.renderPages()
    this.sortBySection(pages)
    this.writePages(pages)
    const indexLines = this.buildIndexLines(pages)
    this.writeIndex(indexLines)
    this.writeFullDoc(indexLines, pages)
    this.report(pages)
  }

  async renderPages() {
    const pages = []
    for (const file of walk(this.storiesDir).sort()) {
      const converter = new MdxPageConverter(file, this.tokenCatalog, this.storyRenderer, this.warnings)
      const page = await converter.convert()
      if (page) pages.push(page)
    }
    return pages
  }

  sortBySection(pages) {
    for (const page of pages) page.section = sectionOf(page.title)
    pages.sort((a, b) => sectionRank(a.section) - sectionRank(b.section) || a.title.localeCompare(b.title))
    return pages
  }

  writePages(pages) {
    fs.rmSync(this.outDir, { recursive: true, force: true })
    fs.mkdirSync(path.join(this.outDir, 'llms'), { recursive: true })
    for (const page of pages) {
      fs.writeFileSync(path.join(this.outDir, 'llms', `${page.slug}.md`), page.markdown)
    }
  }

  // llms.txt index, following the llms.txt convention (https://llmstxt.org):
  // an H1, a blockquote summary, then sections of page links. Each entry looks like:
  //
  //   - [Components/Button](https://docs.optics.rolemodel.design/llms/components-button.md): Button classes can be used on `button` or `a` html elements. ...
  buildIndexLines(pages) {
    const version = JSON.parse(fs.readFileSync(path.join(ROOT, 'package.json'), 'utf8')).version
    const indexLines = [
      '# Optics Design System',
      '',
      `> Optics is a pure-CSS design system by RoleModel Software (npm: \`@rolemodel/optics\`, v${version}). It provides design tokens (CSS custom properties prefixed \`--op-\`), base styles, utilities, and BEM-style components (\`.btn\`, \`.card\`, ...) that are customized per project via token overrides.`,
      '',
      `Every page below is plain markdown. Component pages include the actual HTML markup for each variant, the component's CSS variable API, and customization patterns. The full documentation in one file: [llms-full.txt](${SITE_URL}/llms-full.txt). All design tokens as JSON: https://unpkg.com/@rolemodel/optics/dist/tokens/tokens.json`,
    ]

    let currentSection = null
    for (const page of pages) {
      if (page.section !== currentSection) {
        indexLines.push('', `## ${page.section}`, '')
        currentSection = page.section
      }
      const shortDescription = page.description.length > 160 ? `${page.description.slice(0, 157)}...` : page.description
      indexLines.push(
        `- [${page.title}](${SITE_URL}/llms/${page.slug}.md)${shortDescription ? `: ${shortDescription}` : ''}`
      )
    }
    return indexLines
  }

  writeIndex(indexLines) {
    fs.writeFileSync(path.join(this.outDir, 'llms.txt'), `${indexLines.join('\n')}\n`)
  }

  // llms-full.txt: the index followed by every page, each introduced by an
  // HTML comment marker (`<!-- Page: Components/Button (components-button.md) -->`)
  // and separated by a horizontal rule.
  writeFullDoc(indexLines, pages) {
    const fullDoc = pages
      .map((page) => `<!-- Page: ${page.title} (${page.slug}.md) -->\n\n${page.markdown}`)
      .join('\n---\n\n')
    fs.writeFileSync(path.join(this.outDir, 'llms-full.txt'), `${indexLines.join('\n')}\n\n---\n\n${fullDoc}`)
  }

  report(pages) {
    console.log(`llms-docs: wrote ${pages.length} pages to ${path.relative(ROOT, this.outDir)}/`)
    if (this.warnings.list.length > 0) {
      console.log(`llms-docs: ${this.warnings.list.length} warnings`)
      for (const warning of this.warnings.list) console.log(`  - ${warning}`)
    }
  }
}

await new DocsBuilder().run()
