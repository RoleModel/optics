const fs = require('node:fs')
const path = require('node:path')
const CheckError = require('./check-error.cjs')
const { findClosingParen } = require('./css-syntax.cjs')

// All custom properties, not just --op-*, so theme vars like var(--brand-hue) resolve.
const DECLARATION = /(--[\w-]+)\s*:\s*([^;}]*)/g
const IMPORTANT = /\s*!\s*important$/i
// Blocks that change whether or how much a declaration applies, which the cascade here doesn't follow.
const SCOPED_RULE = /^@(media|supports|container|layer)\b/i
// Optics itself is already loaded, and a remote URL (https:, data:, or //host) is usually a font, not a theme.
const SKIPPED_IMPORT = /^(?:[a-z][a-z0-9+.-]*:|\/\/)|(^|\/)@rolemodel\/optics(\/|@|$)/i

// The text of one or more CSS files, with their imports and without comments. Selectors are ignored.
class Stylesheet {
  #css

  // Reads the files in order, as if they were one file.
  static read(paths) {
    const missing = paths.find((file) => !fs.existsSync(file))
    if (missing) throw new CheckError(`File not found: ${missing}`)
    return new Stylesheet(paths.map((file) => readWithImports(file, [path.resolve(file)])).join('\n'))
  }

  // Comments are stripped first, so commented-out tokens can't sway build detection or the cascade.
  constructor(css) {
    this.#css = stripComments(css)
  }

  get isEmpty() {
    return this.#css === ''
  }

  mentions(pattern) {
    return pattern.test(this.#css)
  }

  // Every custom property declaration, in source order, with duplicates. `rule` is the innermost
  // @media, @supports, @container or @layer rule around it, if any.
  *declarations() {
    const scopedBlocks = this.#scopedBlocks()
    for (const match of this.#css.matchAll(DECLARATION)) {
      const [, name, rawValue] = match
      const block = scopedBlocks.find(({ start, end }) => match.index > start && match.index < end)
      const value = rawValue.trim()
      yield { name, value: value.replace(IMPORTANT, ''), important: IMPORTANT.test(value), rule: block?.rule }
    }
  }

  // The start and end of each scoped block, innermost first, with its rule, like "@media (prefers-color-scheme: dark)".
  #scopedBlocks() {
    const blocks = []
    const open = []
    let ruleStart = 0
    for (let index = 0; index < this.#css.length; index++) {
      const char = this.#css[index]
      if (char === '{') {
        const rule = this.#css.slice(ruleStart, index).trim()
        open.push(SCOPED_RULE.test(rule) ? { rule, start: index } : undefined)
      } else if (char === '}') {
        const block = open.pop()
        if (block) blocks.push({ ...block, end: index })
      }
      if (char === '{' || char === '}' || char === ';') ruleStart = index + 1
    }
    // A block left open runs to the end of the file, as in CSS.
    for (const block of open) if (block) blocks.push({ ...block, end: this.#css.length })
    return blocks
  }
}

// Replaces each @import with the imported file, found relative to the importing file, as CSS does.
// An import that can't be read or found stops the check, because the theme would be checked without its tokens.
function readWithImports(file, chain) {
  const css = stripComments(fs.readFileSync(file, 'utf8'))
  const where = path.relative('.', file)
  let output = ''
  let index = 0
  for (const { index: start } of css.matchAll(/@import\b/gi)) {
    if (start < index) continue
    const statement = parseImport(css, start)
    if (!statement) throw new CheckError(`Can't read an @import in ${where}. Pass your compiled CSS instead.`)
    output += css.slice(index, start) + importedCss(statement, file, where, chain)
    index = statement.end
  }
  return output + css.slice(index)
}

function importedCss({ url, conditions }, file, where, chain) {
  if (SKIPPED_IMPORT.test(url)) return ''

  const imported = [url, `${url}.css`]
    .map((candidate) => path.resolve(path.dirname(file), candidate))
    .find((candidate) => fs.existsSync(candidate) && fs.statSync(candidate).isFile())
  if (!imported)
    throw new CheckError(`Can't find @import '${url}' in ${where}. Fix the path, or pass your compiled CSS instead.`)
  // CSS skips an import that would loop back to a file already being read.
  if (chain.includes(imported)) return ''
  return withConditions(readWithImports(imported, [...chain, imported]), conditions)
}

// Reads `@import "url" conditions;`, `@import 'url' ...;` or `@import url(...) ...;` starting at `start`.
// Quoted URLs can hold spaces and semicolons. Returns undefined when the statement can't be read.
function parseImport(css, start) {
  let index = start + '@import'.length
  const skipSpaces = () => {
    while (/\s/.test(css[index] ?? '')) index++
  }

  skipSpaces()
  const isUrlFunction = css.slice(index, index + 4).toLowerCase() === 'url('
  if (isUrlFunction) {
    index += 4
    skipSpaces()
  }

  let url
  const quote = css[index]
  if (quote === '"' || quote === "'") {
    const close = css.indexOf(quote, index + 1)
    if (close === -1) return undefined
    url = css.slice(index + 1, close)
    index = close + 1
  } else if (isUrlFunction) {
    const close = css.indexOf(')', index)
    if (close === -1) return undefined
    url = css.slice(index, close).trim()
    index = close
  } else {
    return undefined
  }

  if (isUrlFunction) {
    skipSpaces()
    if (css[index] !== ')') return undefined
    index++
  }

  // The last statement in a file may end without a semicolon.
  const semicolon = css.indexOf(';', index)
  const end = semicolon === -1 ? css.length : semicolon
  return { url, conditions: css.slice(index, end).trim(), end: end + 1 }
}

// Wraps imported CSS in the import's media, supports() and layer() parts, so its tokens count as scoped.
function withConditions(css, conditions) {
  let rest = conditions
  let layer
  const layerMatch = rest.match(/^layer(?:\(([^)]*)\))?\s*/i)
  if (layerMatch) {
    layer = layerMatch[1]?.trim() ?? ''
    rest = rest.slice(layerMatch[0].length)
  }

  let supports
  if (/^supports\(/i.test(rest)) {
    const end = findClosingParen(rest, 'supports'.length)
    if (end !== -1) {
      supports = rest.slice('supports('.length, end)
      rest = rest.slice(end + 1).trim()
    }
  }

  let wrapped = css
  if (layer !== undefined) wrapped = `@layer ${layer} {\n${wrapped}\n}`
  if (supports !== undefined) wrapped = `@supports (${supports}) {\n${wrapped}\n}`
  return rest ? `@media ${rest} {\n${wrapped}\n}` : wrapped
}

function stripComments(css) {
  return css.replace(/\/\*[\s\S]*?\*\//g, '')
}

module.exports = Stylesheet
