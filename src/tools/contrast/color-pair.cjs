// Only base and the plus/minus steps, so derived tokens like -on-base-alpha-40 aren't paired.
const STEP = 'base|(?:plus|minus)-(?:one|two|three|four|five|six|seven|eight|max)'
const ON_TOKEN = new RegExp(`^--op-color-([a-z0-9-]+?)-on-(${STEP})(-alt)?$`)

// A scale step and a text color meant to sit on it:
// --op-color-primary-plus-five with --op-color-primary-on-plus-five (or -on-plus-five-alt).
class ColorPair {
  #isAlt

  // Every `on` and `on-alt` token in the theme whose scale step is also in the theme.
  static findAll(theme) {
    return theme.names().flatMap((text) => {
      const match = text.match(ON_TOKEN)
      if (!match) return []

      const [, color, step, alt] = match
      const background = `--op-color-${color}-${step}`
      // has(), not the value's truthiness, so an empty override reaches color validation instead of dropping the pair.
      return theme.has(background) ? [new ColorPair(background, text, Boolean(alt))] : []
    })
  }

  constructor(background, text, isAlt) {
    this.background = background
    this.text = text
    this.#isAlt = isAlt
  }

  // `on-alt` text has its own minimum, so a theme can allow AA large text there.
  minimum({ min, altMin }) {
    return this.#isAlt ? altMin : min
  }
}

module.exports = ColorPair
