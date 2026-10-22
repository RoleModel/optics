const Build = require('./build.cjs')

// optics-oklch.css.
class OklchBuild extends Build {
  name = 'oklch'
  colorFolder = 'oklch'
  channelVariable = /--op-color-[a-z0-9-]+-c\s*:/
  colorFunction = /oklch\(/
}

module.exports = OklchBuild
