const CheckError = require('../check-error.cjs')
const Color = require('./color.cjs')
const { splitAtFirstComma } = require('../css-syntax.cjs')

const LIGHT_DARK = /^light-dark\((.*)\)$/s

// A token's color in light and dark mode.
class ThemedColor {
  static MODES = ['light', 'dark']

  #light
  #dark

  // light-dark(a, b) gives a in light mode and b in dark mode. Any other color is the same in both.
  static parse(value) {
    const inner = value.match(LIGHT_DARK)?.[1]
    if (inner === undefined) {
      const color = Color.parse(value)
      return new ThemedColor(color, color)
    }

    const colors = splitAtFirstComma(inner)
    if (colors.length !== 2) throw new CheckError(`Can't check color: ${value}`)
    return new ThemedColor(Color.parse(colors[0]), Color.parse(colors[1]))
  }

  constructor(light, dark) {
    this.#light = light
    this.#dark = dark
  }

  in(mode) {
    return mode === 'light' ? this.#light : this.#dark
  }
}

module.exports = ThemedColor
