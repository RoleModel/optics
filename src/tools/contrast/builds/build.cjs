const path = require('node:path')
const CheckError = require('../check-error.cjs')
const Stylesheet = require('../stylesheet.cjs')

const TOKENS_DIR = path.join(__dirname, '../../../css/core/tokens')
const AMBIGUOUS = 'Could not tell if your theme is HSL or OKLCH. Pass --hsl or --oklch.'

// An Optics build (optics.css or optics-oklch.css). Each subclass names its color token folder
// and the CSS that marks a theme as written for it.
class Build {
  // Optics channel vars (-c or -s) decide first; color functions only when neither is set,
  // so an unrelated oklch() or hsl() elsewhere in the CSS can't pick the wrong build.
  static for({ buildName }, stylesheet) {
    const builds = all()
    if (buildName) return builds.find((build) => build.name === buildName)

    const byChannel = builds.filter((build) => stylesheet.mentions(build.channelVariable))
    if (byChannel.length > 1) throw new CheckError(AMBIGUOUS)
    if (byChannel.length === 1) return byChannel[0]

    const byFunction = builds.find((build) => stylesheet.mentions(build.colorFunction))
    if (byFunction) return byFunction
    if (stylesheet.isEmpty) return builds[0]
    throw new CheckError(AMBIGUOUS)
  }

  stylesheet() {
    const colorDir = path.join(TOKENS_DIR, this.colorFolder)
    return Stylesheet.read([
      // Used by both builds, and defines aliases like --op-color-border.
      path.join(TOKENS_DIR, 'shared_tokens.css'),
      path.join(colorDir, 'base_color_tokens.css'),
      path.join(colorDir, 'scale_color_tokens.css'),
    ])
  }
}

// OKLCH comes first: it is the default with no theme, and a theme that uses both oklch() and hsl() is checked as OKLCH.
// Required on first use, not at the top, because each subclass requires this file to extend Build.
function all() {
  return [new (require('./oklch-build.cjs'))(), new (require('./hsl-build.cjs'))()]
}

module.exports = Build
