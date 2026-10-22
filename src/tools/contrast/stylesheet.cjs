const fs = require('node:fs')
const CheckError = require('./check-error.cjs')

// All custom properties, not just --op-*, so theme vars like var(--brand-hue) resolve.
const DECLARATION = /(--[\w-]+)\s*:\s*([^;}]*)/g
const IMPORTANT = /\s*!\s*important$/i

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
  *declarations() {
    for (const [, name, rawValue] of this.#css.matchAll(DECLARATION)) {
      const value = rawValue.trim()
      yield { name, value: value.replace(IMPORTANT, ''), important: IMPORTANT.test(value) }
    }
  }
}

module.exports = Stylesheet
