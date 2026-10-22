const CheckError = require('./check-error.cjs')

const DEFAULT_MIN = 4.5
const FLAG = /^--([a-z-]+)(?:=(.*))?$/

// The command-line arguments: optics-check-contrast [files...] [--hsl | --oklch] [--min=4.5] [--alt-min=4.5] [--report]
class ToolOptions {
  static parse(args) {
    const flags = {}
    const files = []
    for (const arg of args) {
      const flag = arg.match(FLAG)
      if (flag) flags[flag[1]] = flag[2] ?? true
      else files.push(arg)
    }
    return new ToolOptions(files, flags)
  }

  constructor(files, flags) {
    this.files = files
    this.buildName = forcedBuildName(flags)
    this.min = threshold(flags.min)
    this.altMin = threshold(flags['alt-min'])
    this.report = Boolean(flags.report)
  }
}

function forcedBuildName(flags) {
  if (flags.hsl) return 'hsl'
  if (flags.oklch) return 'oklch'
  return undefined
}

function threshold(value) {
  if (value === undefined) return DEFAULT_MIN
  // A bare --min (true) or empty --min= ('') would become 1 or 0 with Number(), so require a numeric string.
  const number = typeof value === 'string' && value.trim() !== '' ? Number(value) : NaN
  // A NaN threshold would make every ratio < min check false, so every pair would pass.
  if (!Number.isFinite(number)) throw new CheckError('--min and --alt-min must be numbers, like 4.5')
  return number
}

module.exports = ToolOptions
