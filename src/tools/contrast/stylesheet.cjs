const fs = require('node:fs')
const path = require('node:path')
const CheckError = require('./check-error.cjs')
const { findClosingParen } = require('./css-syntax.cjs')

// All custom properties, not just --op-*, so theme vars like var(--brand-hue) resolve.
const DECLARATION = /(--[\w-]+)\s*:\s*([^;}]*)/g
const IMPORTANT = /\s*!\s*important$/i
const CONDITIONAL_RULE = /^@(media|supports|container)\b/i
// @import 'file.css' conditions; or @import url(file.css) conditions;
const IMPORT = /@import\s+(?:url\(\s*)?(['"]?)([^'")\s;]+)\1\s*\)?([^;]*);/gi
// Optics itself is already loaded, and a remote URL (http:, data:) is usually a font, not a theme.
const SKIPPED_IMPORT = /^[a-z][a-z0-9+.-]*:|(^|\/)@rolemodel\/optics(\/|@|$)/i

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

  // Every custom property declaration, in source order, with duplicates. `condition` is the innermost
  // @media, @supports or @container rule around it, if any.
  *declarations() {
    const conditionalBlocks = this.#conditionalBlocks()
    for (const match of this.#css.matchAll(DECLARATION)) {
      const [, name, rawValue] = match
      const block = conditionalBlocks.find(({ start, end }) => match.index > start && match.index < end)
      const value = rawValue.trim()
      yield { name, value: value.replace(IMPORTANT, ''), important: IMPORTANT.test(value), condition: block?.rule }
    }
  }

  // The start and end of each conditional block, innermost first, with its rule, like "@media (prefers-color-scheme: dark)".
  #conditionalBlocks() {
    const blocks = []
    const open = []
    let ruleStart = 0
    for (let index = 0; index < this.#css.length; index++) {
      const char = this.#css[index]
      if (char === '{') {
        const rule = this.#css.slice(ruleStart, index).trim()
        open.push(CONDITIONAL_RULE.test(rule) ? { rule, start: index } : undefined)
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
// An import that can't be found stops the check, because the theme would be checked without its tokens.
function readWithImports(file, chain) {
  return stripComments(fs.readFileSync(file, 'utf8')).replace(IMPORT, (rule, quote, url, conditions) => {
    if (SKIPPED_IMPORT.test(url)) return ''

    const imported = [url, `${url}.css`]
      .map((candidate) => path.resolve(path.dirname(file), candidate))
      .find((candidate) => fs.existsSync(candidate) && fs.statSync(candidate).isFile())
    if (!imported)
      throw new CheckError(
        `Can't find @import '${url}' in ${path.relative('.', file)}. Fix the path, or pass your compiled CSS instead.`
      )
    // CSS skips an import that would loop back to a file already being read.
    if (chain.includes(imported)) return ''
    return withConditions(readWithImports(imported, [...chain, imported]), conditions.trim())
  })
}

// Wraps imported CSS in the import's supports() and media conditions, so its tokens count as conditional.
function withConditions(css, conditions) {
  let media = conditions.replace(/^layer(\([^)]*\))?\s*/i, '')
  let wrapped = css
  if (/^supports\(/i.test(media)) {
    const end = findClosingParen(media, 'supports'.length)
    if (end !== -1) {
      wrapped = `@supports (${media.slice('supports('.length, end)}) {\n${wrapped}\n}`
      media = media.slice(end + 1).trim()
    }
  }
  return media ? `@media ${media} {\n${wrapped}\n}` : wrapped
}

function stripComments(css) {
  return css.replace(/\/\*[\s\S]*?\*\//g, '')
}

module.exports = Stylesheet
