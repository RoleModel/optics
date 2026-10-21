#!/usr/bin/env node
/**
 * Checks WCAG 2.1 contrast between every Optics scale step and its `on` text
 * colors, in light and dark mode, for your theme:
 *
 *   --op-color-primary-plus-five  vs  --op-color-primary-on-plus-five      (needs --min)
 *   --op-color-primary-plus-five  vs  --op-color-primary-on-plus-five-alt  (needs --alt-min)
 *
 * Usage:
 *   optics-check-contrast [files...] [--hsl | --oklch] [--min=4.5] [--alt-min=4.5] [--report]
 *
 *   files      CSS with your --op-* overrides: theme files, or your compiled CSS bundle.
 *              They are applied on top of the Optics tokens, the last value of each token wins.
 *   --hsl      Check against the HSL tokens (optics.css). Detected from -s / hsl() in your files.
 *   --oklch    Check against the OKLCH tokens (optics-oklch.css). Detected from -c / oklch().
 *   --report   List every pair, and don't fail.
 *
 * Tokens are read without their selectors, so overrides scoped to a class or
 * attribute are treated as if they were on :root. Colors outside sRGB are
 * clipped, as browsers do. Exits with 1 if any pair fails, and 2 if the theme can't be read.
 */
// CommonJS, because Yarn Plug'n'Play can't load an ES module bin from inside its zip cache.
const fs = require('node:fs')
const path = require('node:path')

const { files, flags } = parseArgs(process.argv.slice(2))
const min = Number(flags.min ?? 4.5)
const altMin = Number(flags['alt-min'] ?? 4.5)

const missing = files.find((file) => !fs.existsSync(file))
if (missing) exitWithError(`File not found: ${missing}`)
const userCss = files.map((file) => fs.readFileSync(file, 'utf8')).join('\n')
const colorSet = flags.hsl ? 'hsl' : flags.oklch ? 'oklch' : detectColorSet(userCss)
const tokensDir = path.join(__dirname, '../css/core/tokens', colorSet === 'oklch' ? 'oklch' : '')
const opticsCss = ['base_color_tokens.css', 'scale_color_tokens.css']
  .map((file) => fs.readFileSync(path.join(tokensDir, file), 'utf8'))
  .join('\n')

const tokens = readTokens(`${opticsCss}\n${userCss}`)
const pairs = Object.keys(tokens)
  .map((name) => name.match(/^--op-color-([a-z0-9-]+?)-on-([a-z0-9-]+?)(-alt)?$/))
  .filter((match) => match && tokens[`--op-color-${match[1]}-${match[2]}`])
  .map(([text, color, step, alt]) => ({ background: `--op-color-${color}-${step}`, text, min: alt ? altMin : min }))

const failures = []
for (const { background, text, min } of pairs) {
  const backgroundColor = lightDark(tokens[background])
  const textColor = lightDark(tokens[text])
  for (const mode of ['light', 'dark']) {
    const ratio = contrast(backgroundColor[mode], textColor[mode])
    if (ratio < min) failures.push({ text, mode, ratio, min })
    if (flags.report)
      console.log(`${ratio < min ? 'FAIL' : 'pass'}  ${ratio.toFixed(2).padStart(5)}  ${mode.padEnd(5)}  ${text}`)
  }
}

const total = pairs.length * 2
console.log(
  `Optics ${colorSet} contrast: ${total - failures.length}/${total} pairs pass (on >= ${min}, on-alt >= ${altMin})`
)
if (!flags.report && failures.length) {
  for (const { text, mode, ratio, min } of failures) console.log(`  ${text} (${mode}): ${ratio.toFixed(2)} < ${min}`)
  process.exit(1)
}

function parseArgs(args) {
  const flags = {}
  const files = []
  for (const arg of args) {
    const flag = arg.match(/^--([a-z-]+)(?:=(.*))?$/)
    flag ? (flags[flag[1]] = flag[2] ?? true) : files.push(arg)
  }
  return { files, flags }
}

function detectColorSet(css) {
  if (/--op-color-[a-z0-9-]+-c\s*:|oklch\(/.test(css)) return 'oklch'
  if (/--op-color-[a-z0-9-]+-s\s*:|hsl\(var\(--op-color/.test(css)) return 'hsl'
  if (!css) return 'oklch'
  exitWithError('Could not tell if your theme is HSL or OKLCH. Pass --hsl or --oklch.')
}

function exitWithError(message) {
  console.error(`optics-check-contrast: ${message}`)
  process.exit(2)
}

function readTokens(css) {
  const declarations = css.replace(/\/\*[\s\S]*?\*\//g, '').matchAll(/(--op-[a-z0-9-]+)\s*:\s*([^;}]+)/g)
  return Object.fromEntries([...declarations].map(([, name, value]) => [name, value.trim()]))
}

function resolve(value) {
  let resolved = value
  while (resolved.includes('var(')) {
    resolved = resolved.replace(/var\((--[a-z0-9-]+)\s*(?:,\s*([^()]*))?\)/g, (_match, name, fallback) => {
      if (name in tokens) return tokens[name]
      if (fallback !== undefined) return fallback
      exitWithError(`${name} is not defined`)
    })
  }
  return resolved.replace(/calc\(([\d.\s*/+-]+)\)/g, (_match, math) => String(Function(`return ${math}`)()))
}

function lightDark(value) {
  const resolved = resolve(value)
  const inner = resolved.match(/^light-dark\((.*)\)$/s)?.[1]
  if (!inner) return { light: toLuminance(resolved), dark: toLuminance(resolved) }

  let depth = 0
  const comma = [...inner].findIndex(
    (char) => (depth += char === '(' ? 1 : char === ')' ? -1 : 0) === 0 && char === ','
  )
  return { light: toLuminance(inner.slice(0, comma)), dark: toLuminance(inner.slice(comma + 1)) }
}

// Returns WCAG relative luminance (0 to 1) for an oklch(), hsl(), or hex color.
function toLuminance(color) {
  const value = color.trim()
  const hex = value.match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i)?.[1]
  if (hex) {
    const full = hex.length === 3 ? [...hex].map((digit) => digit + digit).join('') : hex
    return luminance(full.match(/../g).map((pair) => linearize(parseInt(pair, 16) / 255)))
  }

  const [, space, args] = value.match(/^(oklch|hsla?)\((.*)\)$/s) ?? []
  if (!space) exitWithError(`Can't check color: ${value}`)
  const parts = args.trim().split(/[\s,/]+/)
  const [a, b, c] = parts.map(parseFloat)

  if (space === 'oklch') return luminance(oklchToLinearSrgb(parts[0].endsWith('%') ? a / 100 : a, b, c))
  return luminance(hslToSrgb(a, b / 100, c / 100).map(linearize))
}

// OKLCH -> OKLab -> LMS -> linear sRGB (https://bottosson.github.io/posts/oklab/)
function oklchToLinearSrgb(lightness, chroma, hue) {
  const a = chroma * Math.cos((hue * Math.PI) / 180)
  const b = chroma * Math.sin((hue * Math.PI) / 180)
  const l = (lightness + 0.3963377774 * a + 0.2158037573 * b) ** 3
  const m = (lightness - 0.1055613458 * a - 0.0638541728 * b) ** 3
  const s = (lightness - 0.0894841775 * a - 1.291485548 * b) ** 3
  return [
    4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s,
    -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s,
    -0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s,
  ]
}

function hslToSrgb(hue, saturation, lightness) {
  const channel = (n) => {
    const k = (n + hue / 30) % 12
    return lightness - saturation * Math.min(lightness, 1 - lightness) * Math.max(-1, Math.min(k - 3, 9 - k, 1))
  }
  return [channel(0), channel(8), channel(4)]
}

function linearize(channel) {
  return channel <= 0.04045 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4
}

function luminance(linearRgb) {
  const [r, g, b] = linearRgb.map((channel) => Math.min(1, Math.max(0, channel)))
  return 0.2126 * r + 0.7152 * g + 0.0722 * b
}

function contrast(first, second) {
  return (Math.max(first, second) + 0.05) / (Math.min(first, second) + 0.05)
}
