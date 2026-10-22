const CheckError = require('../check-error.cjs')
const Color = require('./color.cjs')

// A color written as a CSS function, like oklch(l c h / alpha) or the legacy hsl(h, s, l, alpha).
// Translucent colors are rejected, because translucent text depends on what is behind it.
class FunctionColor extends Color {
  #channels

  constructor(args, value) {
    super()
    const [channelText, slashAlpha] = args.split('/')
    this.#channels = channelText.trim().split(/[\s,]+/)

    const alpha = slashAlpha?.trim() ?? (channelText.includes(',') ? this.#channels[3] : undefined)
    if (alpha === undefined) return
    const opacity = fraction(alpha, 1)
    // NaN < 1 is false, so an unresolved alpha would otherwise count as opaque.
    if (!Number.isFinite(opacity)) throw new CheckError(`Can't measure alpha: ${value}`)
    if (opacity < 1) throw new CheckError(`Can't check translucent color: ${value}`)
  }

  number(index) {
    return parseFloat(this.#channels[index])
  }

  // The channel as a number, or as a percentage of `whole`.
  fraction(index, whole) {
    return fraction(this.#channels[index], whole)
  }

  // The channel as a hue in degrees from 0 to 360, from any CSS angle unit (deg is the default).
  hue(index) {
    const angle = this.#channels[index] ?? ''
    const value = parseFloat(angle)
    const unit = angle.match(/[a-z]+$/i)?.[0].toLowerCase()
    const degrees = { rad: (value * 180) / Math.PI, grad: value * 0.9, turn: value * 360 }[unit] ?? value
    return ((degrees % 360) + 360) % 360
  }
}

function fraction(channel, whole) {
  const number = parseFloat(channel)
  return channel?.endsWith('%') ? (number / 100) * whole : number
}

module.exports = FunctionColor
