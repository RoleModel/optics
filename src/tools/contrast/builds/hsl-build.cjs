const Build = require('./build.cjs')

// optics.css. Its color tokens are in the top-level tokens folder.
class HslBuild extends Build {
  name = 'hsl'
  colorFolder = ''
  channelVariable = /--op-color-[a-z0-9-]+-s\s*:/
  colorFunction = /hsla?\(/
}

module.exports = HslBuild
