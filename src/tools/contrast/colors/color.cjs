const CheckError = require('../check-error.cjs')

// A CSS color. Each subclass reads one format and gives its channels in linear sRGB.
class Color {
  // Picks the subclass whose `pattern` matches, and passes it the text inside the match.
  static parse(text) {
    const value = text.trim()
    for (const Format of formats()) {
      const match = value.match(Format.pattern)
      if (match) return new Format(match[1], value)
    }
    throw new CheckError(`Can't check color: ${value || '(empty value)'}`)
  }

  // Converts a gamma-encoded sRGB channel (0 to 1) to linear light.
  static linearize(channel) {
    return channel <= 0.04045 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4
  }

  linearRgb() {
    throw new Error(`${this.constructor.name} must implement linearRgb()`)
  }

  // WCAG relative luminance, from 0 to 1. Channels outside sRGB are clipped, as browsers do on most screens.
  get luminance() {
    const [r, g, b] = this.linearRgb().map((channel) => Math.min(1, Math.max(0, channel)))
    return 0.2126 * r + 0.7152 * g + 0.0722 * b
  }

  contrastWith(other) {
    const [first, second] = [this.luminance, other.luminance]
    return (Math.max(first, second) + 0.05) / (Math.min(first, second) + 0.05)
  }
}

// Required on first use, not at the top, because each subclass requires this file to extend Color.
function formats() {
  return [require('./hex-color.cjs'), require('./oklch-color.cjs'), require('./hsl-color.cjs')]
}

module.exports = Color
