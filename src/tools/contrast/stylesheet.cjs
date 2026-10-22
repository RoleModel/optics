const fs = require('node:fs')
const CheckError = require('./check-error.cjs')

// All custom properties, not just --op-*, so theme vars like var(--brand-hue) resolve.
const DECLARATION = /(--[\w-]+)\s*:\s*([^;}]*)/g
const IMPORTANT = /\s*!\s*important$/i
const CONDITIONAL_RULE = /^@(media|supports|container)\b/i

// The text of one or more CSS files, without comments. Selectors are ignored.
class Stylesheet {
  #css

  // Reads the files in order, as if they were one file.
  static read(paths) {
    const missing = paths.find((file) => !fs.existsSync(file))
    if (missing) throw new CheckError(`File not found: ${missing}`)
    return new Stylesheet(paths.map((file) => fs.readFileSync(file, 'utf8')).join('\n'))
  }

  // Comments are stripped first, so commented-out tokens can't sway build detection or the cascade.
  constructor(css) {
    this.#css = css.replace(/\/\*[\s\S]*?\*\//g, '')
  }

  get isEmpty() {
    return this.#css === ''
  }

  mentions(pattern) {
    return pattern.test(this.#css)
  }

  // Every custom property declaration, in source order, with duplicates.
  // A color token inside @media, @supports or @container stops the check: it applies only under that
  // condition, but the cascade would apply it everywhere and could pass a theme that fails.
  *declarations() {
    const conditionalBlocks = this.#conditionalBlocks()
    for (const match of this.#css.matchAll(DECLARATION)) {
      const [, name, rawValue] = match
      const block = conditionalBlocks.find(({ start, end }) => match.index > start && match.index < end)
      if (block && name.startsWith('--op-color-'))
        throw new CheckError(
          `Can't check ${name} inside ${block.rule}. Set mode colors with light-dark(), or check that theme in its own file.`
        )

      const value = rawValue.trim()
      yield { name, value: value.replace(IMPORTANT, ''), important: IMPORTANT.test(value) }
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

module.exports = Stylesheet
