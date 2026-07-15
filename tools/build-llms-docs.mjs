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

// The story render functions build real DOM nodes.
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

const warnings = []
const warn = (file, message) => warnings.push(`${path.relative(ROOT, file)}: ${message}`)

// ---------------------------------------------------------------------------
// Design tokens, parsed from the `@tokens <Category>` annotations in the CSS
// ---------------------------------------------------------------------------

const parseTokenCategories = () => {
  const categories = {}
  for (const file of fs.readdirSync(TOKENS_DIR)) {
    if (!file.endsWith('.css')) continue
    const css = fs.readFileSync(path.join(TOKENS_DIR, file), 'utf8')
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
      categories[name] = (categories[name] || []).concat(tokens)
    }
  }
  return categories
}

const tokenCategories = parseTokenCategories()

const escapeCell = (text) => text.replaceAll('|', '\\|')

const tokenTable = (categoryName, file) => {
  const tokens = tokenCategories[categoryName]
  if (!tokens || tokens.length === 0) {
    warn(file, `no tokens found for category "${categoryName}"`)
    return `_No tokens found for category "${categoryName}"._`
  }
  const rows = tokens.map((token) => `| \`${token.name}\` | \`${escapeCell(token.value)}\` |`)
  return ['| Token | Value |', '| --- | --- |', ...rows].join('\n')
}

// ---------------------------------------------------------------------------
// Story rendering
// ---------------------------------------------------------------------------

const renderStory = async (storiesModule, storyName, file) => {
  const meta = storiesModule.default || {}
  const story = storiesModule[storyName]
  if (!story) {
    warn(file, `story "${storyName}" not found`)
    return null
  }
  const render = story.render || meta.render
  if (!render) {
    warn(file, `story "${storyName}" has no render function`)
    return null
  }
  const args = { ...meta.args, ...story.args }
  let result
  try {
    result = render(args, { args })
  } catch (error) {
    warn(file, `story "${storyName}" failed to render: ${error.message}`)
    return null
  }
  let html = typeof result === 'string' ? result : result?.outerHTML
  // A few stories interpolate optional args into class names (e.g.
  // `form-control--undefined`); drop those so they don't read as real classes.
  html = html?.replace(/ ?[\w-]+--undefined/g, '')
  if (!html) {
    warn(file, `story "${storyName}" rendered nothing`)
    return null
  }
  try {
    return (await prettier.format(html, { parser: 'html', printWidth: 110 })).trimEnd()
  } catch {
    return html
  }
}

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
  return ['| Arg | Default | Options | Description |', '| --- | --- | --- | --- |', ...rows].join('\n')
}

// ---------------------------------------------------------------------------
// MDX -> markdown
// ---------------------------------------------------------------------------

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

const convertMdx = async (file) => {
  let text = fs.readFileSync(file, 'utf8')

  // Story module namespace imports (`import * as FooStories from './Foo.stories'`)
  const storyModules = {}
  for (const match of text.matchAll(/^import \* as (\w+) from '([^']+)'/gm)) {
    let modulePath = path.resolve(path.dirname(file), match[2])
    if (!fs.existsSync(modulePath)) modulePath += '.js'
    storyModules[match[1]] = await import(pathToFileURL(modulePath).href)
  }

  // Page title: from `<Meta title="..." />` or the story module's meta
  let title = text.match(/<Meta\s+title="([^"]+)"/)?.[1]
  if (!title) {
    const metaOf = text.match(/<Meta\s+of=\{(\w+)\}/)?.[1]
    title = storyModules[metaOf]?.default?.title
  }
  if (!title) {
    warn(file, 'could not determine title; skipped')
    return null
  }

  // Strip imports, Meta, and MDX comments
  text = text.replace(/^import .*\n/gm, '')
  text = text.replace(/<Meta[\s\S]*?\/>\n?/g, '')
  text = text.replace(/\{\/\*[\s\S]*?\*\/\}\n?/g, '')

  // Source-code breadcrumb helper -> plain link
  text = text.replace(
    /<div\s+dangerouslySetInnerHTML=\{\{\s*__html:\s*createSourceCodeLink\(\{[^}]*link:\s*'([^']+)'[^}]*\}\)[\s\S]*?<\/div>/g,
    (_, link) => `[Source Code](${SOURCE_URL}/${link})`
  )

  // Alert helper -> blockquote. The argument is a plain object literal;
  // evaluate it to cope with any key order, template literals, or HTML in
  // the description.
  text = text.replace(
    /<div\s+dangerouslySetInnerHTML=\{\{\s*__html:\s*createAlert\((\{[\s\S]*?\})\)\.outerHTML,?[\s\S]*?<\/div>/g,
    (whole, argsText) => {
      let alertArgs
      try {
        alertArgs = new Function(`return (${argsText})`)()
      } catch (error) {
        warn(file, `could not parse createAlert args: ${error.message}`)
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

  // <Canvas of={FooStories.Bar} /> -> rendered HTML
  text = await replaceAsync(text, /<Canvas\s+of=\{(\w+)\.(\w+)\}[^/]*\/>/g, async (whole, ns, storyName) => {
    const storiesModule = storyModules[ns]
    if (!storiesModule) {
      warn(file, `unknown story module "${ns}"`)
      return ''
    }
    const html = await renderStory(storiesModule, storyName, file)
    return html ? `\`\`\`html\n${html}\n\`\`\`` : ''
  })

  // <Controls of={FooStories.Bar} /> -> args table
  text = text.replace(/<Controls\s+of=\{(\w+)\.(\w+)\}[^/]*\/>/g, (whole, ns, storyName) => {
    const storiesModule = storyModules[ns]
    if (!storiesModule) return ''
    return controlsTable(storiesModule, storyName) || ''
  })

  // <DesignTokenDocBlock categoryName="X" /> -> token table
  text = text.replace(/<DesignTokenDocBlock\s+categoryName="([^"]+)"[^/]*\/>/g, (_, category) =>
    tokenTable(category, file)
  )

  // Color palette blocks (ColorScale.mdx) render swatches from JS at runtime;
  // point readers at the token source instead.
  text = text.replace(
    /<ColorPalette>[\s\S]*?<\/ColorPalette>/g,
    `_Full scale definitions: [scale_color_tokens.css](${SOURCE_URL}/core/tokens/scale_color_tokens.css)_`
  )

  // Storybook links (`(?path=/docs/<page-slug>--docs#anchor)`) -> markdown page links
  text = text.replace(/\(\?path=\/docs\/([a-z0-9-]+?)--[a-z0-9-]+(#[^)]*)?\)/g, '($1.md$2)')

  // Inline JSX demos -> plain HTML
  text = text.replace(/className=/g, 'class=')

  // Leftover JSX we do not handle: drop and warn
  text = text.replace(/^\s*<[A-Z][\s\S]*?\/>\n?/gm, (block) => {
    warn(file, `dropped unhandled JSX: ${block.trim().split('\n')[0]}`)
    return ''
  })
  if (/dangerouslySetInnerHTML/.test(text)) {
    warn(file, 'unhandled dangerouslySetInnerHTML block left in output')
  }

  text = text.replace(/\n{3,}/g, '\n\n').trim()

  // First prose paragraph after the H1 = page description for the index
  const isProse = (line) => line && !/^[#[>`|<{\-*_]/.test(line)
  const lines = text.split('\n').map((line) => line.trim())
  const firstProseIndex = lines.findIndex(isProse)
  let description = ''
  if (firstProseIndex !== -1) {
    const paragraph = []
    for (let i = firstProseIndex; i < lines.length && isProse(lines[i]); i++) paragraph.push(lines[i])
    description = paragraph.join(' ')
  }

  return { file, title, slug: storybookSlug(title), description, markdown: `${text}\n` }
}

// ---------------------------------------------------------------------------
// Build
// ---------------------------------------------------------------------------

const pages = []
for (const file of walk(STORIES_DIR).sort()) {
  const page = await convertMdx(file)
  if (page) pages.push(page)
}

const SECTION_ORDER = ['Introduction', 'Overview', 'Tokens', 'Utilities', 'Components', 'Recipes']
const sectionOf = (page) => {
  const section = page.title.split('/')[0]
  return SECTION_ORDER.includes(section) ? section : 'Other'
}
const sectionRank = (name) => {
  const index = SECTION_ORDER.indexOf(name)
  return index === -1 ? SECTION_ORDER.length : index
}
pages.sort((a, b) => sectionRank(sectionOf(a)) - sectionRank(sectionOf(b)) || a.title.localeCompare(b.title))

fs.rmSync(OUT_DIR, { recursive: true, force: true })
fs.mkdirSync(path.join(OUT_DIR, 'llms'), { recursive: true })

for (const page of pages) {
  fs.writeFileSync(path.join(OUT_DIR, 'llms', `${page.slug}.md`), page.markdown)
}

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
  const section = sectionOf(page)
  if (section !== currentSection) {
    indexLines.push('', `## ${section}`, '')
    currentSection = section
  }
  const shortDescription = page.description.length > 160 ? `${page.description.slice(0, 157)}...` : page.description
  indexLines.push(
    `- [${page.title}](${SITE_URL}/llms/${page.slug}.md)${shortDescription ? `: ${shortDescription}` : ''}`
  )
}
fs.writeFileSync(path.join(OUT_DIR, 'llms.txt'), `${indexLines.join('\n')}\n`)

const fullDoc = pages
  .map((page) => `<!-- Page: ${page.title} (${page.slug}.md) -->\n\n${page.markdown}`)
  .join('\n---\n\n')
fs.writeFileSync(path.join(OUT_DIR, 'llms-full.txt'), `${indexLines.join('\n')}\n\n---\n\n${fullDoc}`)

console.log(`llms-docs: wrote ${pages.length} pages to ${path.relative(ROOT, OUT_DIR)}/`)
if (warnings.length > 0) {
  console.log(`llms-docs: ${warnings.length} warnings`)
  for (const warning of warnings) console.log(`  - ${warning}`)
}
