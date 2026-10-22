const CheckError = require('./check-error.cjs')
const ColorPair = require('./color-pair.cjs')
const ContrastResult = require('./contrast-result.cjs')
const ThemedColor = require('./colors/themed-color.cjs')

// Measures every scale step against its `on` and `on-alt` text colors, in light and dark mode, or just --mode.
class ContrastCheck {
  #theme
  #options

  constructor(theme, options) {
    this.#theme = theme
    this.#options = options
  }

  // Yields one result per pair and mode, so a report can print each one as it is measured.
  *results() {
    const modes = this.#options.mode ? [this.#options.mode] : ThemedColor.MODES
    for (const pair of ColorPair.findAll(this.#theme)) {
      const background = this.#colorOf(pair.background)
      const text = this.#colorOf(pair.text)
      for (const mode of modes) {
        const ratio = background.in(mode).contrastWith(text.in(mode))
        // NaN < min is false, so an unmeasurable pair would otherwise pass.
        if (!Number.isFinite(ratio))
          throw new CheckError(`Can't measure ${pair.text} (${mode}) against ${pair.background}`)
        yield new ContrastResult(pair, mode, ratio, pair.minimum(this.#options))
      }
    }
  }

  #colorOf(token) {
    return ThemedColor.parse(this.#theme.resolve(token))
  }
}

module.exports = ContrastCheck
