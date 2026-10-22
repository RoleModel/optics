const Color = require('./color.cjs')
const FunctionColor = require('./function-color.cjs')

// hsl() or hsla(), in the modern or the legacy comma syntax.
class HslColor extends FunctionColor {
  static pattern = /^hsla?\((.*)\)$/s

  // CSS clamps out-of-range channels (e.g. hsl(240 200% 75%) is drawn at 100% saturation).
  linearRgb() {
    const hue = this.hue(0)
    const saturation = this.#percent(1)
    const lightness = this.#percent(2)
    const channel = (n) => {
      const k = (n + hue / 30) % 12
      return lightness - saturation * Math.min(lightness, 1 - lightness) * Math.max(-1, Math.min(k - 3, 9 - k, 1))
    }
    return [channel(0), channel(8), channel(4)].map(Color.linearize)
  }

  #percent(index) {
    return Math.min(1, Math.max(0, this.number(index) / 100))
  }
}

module.exports = HslColor
