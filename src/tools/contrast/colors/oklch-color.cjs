const FunctionColor = require('./function-color.cjs')

// In CSS, 100% chroma is 0.4.
const FULL_CHROMA = 0.4

class OklchColor extends FunctionColor {
  static pattern = /^oklch\((.*)\)$/s

  // OKLCH -> OKLab -> LMS -> linear sRGB (https://bottosson.github.io/posts/oklab/)
  // CSS clamps out-of-range lightness and chroma.
  linearRgb() {
    const lightness = Math.min(1, Math.max(0, this.fraction(0, 1)))
    const chroma = Math.max(0, this.fraction(1, FULL_CHROMA))
    const hue = (this.hue(2) * Math.PI) / 180

    const a = chroma * Math.cos(hue)
    const b = chroma * Math.sin(hue)
    const l = (lightness + 0.3963377774 * a + 0.2158037573 * b) ** 3
    const m = (lightness - 0.1055613458 * a - 0.0638541728 * b) ** 3
    const s = (lightness - 0.0894841775 * a - 1.291485548 * b) ** 3
    return [
      4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s,
      -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s,
      -0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s,
    ]
  }
}

module.exports = OklchColor
