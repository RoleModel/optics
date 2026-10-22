const Color = require('./color.cjs')

// #rgb or #rrggbb.
class HexColor extends Color {
  static pattern = /^#([0-9a-f]{3}|[0-9a-f]{6})$/i

  #digits

  constructor(digits) {
    super()
    this.#digits = digits.length === 3 ? [...digits].map((digit) => digit + digit).join('') : digits
  }

  linearRgb() {
    return this.#digits.match(/../g).map((pair) => Color.linearize(parseInt(pair, 16) / 255))
  }
}

module.exports = HexColor
