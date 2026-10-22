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
 * clipped, as browsers do. Exits with 1 if any pair fails, and 2 if the theme can't be read
 * or a color can't be measured (translucent colors, or calc() that isn't plain numbers).
 */
// CommonJS, because Yarn Plug'n'Play can't load an ES module bin from inside its zip cache.
const fs = require('node:fs')
const path = require('node:path')

const { files, flags } = parseArgs(process.argv.slice(2))
const min = Number(flags.min ?? 4.5)
const altMin = Number(flags['alt-min'] ?? 4.5)
// A NaN threshold would make every ratio < min check false, so every pair would pass.
if (!Number.isFinite(min) || !Number.isFinite(altMin)) exitWithError('--min and --alt-min must be numbers, like 4.5')

const missing = files.find((file) => !fs.existsSync(file))
if (missing) exitWithError(`File not found: ${missing}`)
// Comments are stripped first, so commented-out tokens can't sway build detection.
const userCss = stripComments(files.map((file) => fs.readFileSync(file, 'utf8')).join('\n'))
const colorSet = flags.hsl ? 'hsl' : flags.oklch ? 'oklch' : detectColorSet(userCss)
const tokensDir = path.join(__dirname, '../css/core/tokens')
const colorDir = path.join(tokensDir, colorSet === 'oklch' ? 'oklch' : '')
// base_tokens.css is shared by both builds and defines aliases like --op-color-border.
const opticsCss = [
  path.join(tokensDir, 'base_tokens.css'),
  path.join(colorDir, 'base_color_tokens.css'),
  path.join(colorDir, 'scale_color_tokens.css'),
]
  .map((file) => fs.readFileSync(file, 'utf8'))
  .join('\n')

const tokens = readTokens(`${opticsCss}\n${userCss}`)
// Only base and the plus/minus steps, so derived tokens like -on-base-alpha-40 aren't paired.
const step = 'base|(?:plus|minus)-(?:one|two|three|four|five|six|seven|eight|max)'
const pairs = Object.keys(tokens)
  .map((name) => name.match(new RegExp(`^--op-color-([a-z0-9-]+?)-on-(${step})(-alt)?$`)))
  // `in`, not truthiness, so an empty override reaches color validation instead of dropping the pair.
  .filter((match) => match && `--op-color-${match[1]}-${match[2]}` in tokens)
  .map(([text, color, step, alt]) => ({ background: `--op-color-${color}-${step}`, text, min: alt ? altMin : min }))

const failures = []
for (const { background, text, min } of pairs) {
  const backgroundColor = lightDark(tokens[background])
  const textColor = lightDark(tokens[text])
  for (const mode of ['light', 'dark']) {
    const ratio = contrast(backgroundColor[mode], textColor[mode])
    // NaN < min is false, so an unmeasurable pair would otherwise pass.
    if (!Number.isFinite(ratio)) exitWithError(`Can't measure ${text} (${mode}) against ${background}`)
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

// Optics channel vars (-c or -s) decide first; color functions only when neither is set,
// so an unrelated oklch() or hsl() elsewhere in the CSS can't pick the wrong build.
function detectColorSet(css) {
  const ambiguous = 'Could not tell if your theme is HSL or OKLCH. Pass --hsl or --oklch.'
  const chroma = /--op-color-[a-z0-9-]+-c\s*:/.test(css)
  const saturation = /--op-color-[a-z0-9-]+-s\s*:/.test(css)
  if (chroma && saturation) exitWithError(ambiguous)
  if (chroma) return 'oklch'
  if (saturation) return 'hsl'

  if (/oklch\(/.test(css)) return 'oklch'
  if (/hsla?\(/.test(css)) return 'hsl'
  if (!css) return 'oklch'
  exitWithError(ambiguous)
}

function exitWithError(message) {
  console.error(`optics-check-contrast: ${message}`)
  process.exit(2)
}

function stripComments(css) {
  return css.replace(/\/\*[\s\S]*?\*\//g, '')
}

function readTokens(css) {
  // All custom properties, not just --op-*, so theme vars like var(--brand-hue) resolve.
  const declarations = stripComments(css).matchAll(/(--[\w-]+)\s*:\s*([^;}]+)/g)
  // !important is declaration priority, not part of the value.
  return Object.fromEntries(
    [...declarations].map(([, name, value]) => [name, value.trim().replace(/\s*!\s*important$/i, '')])
  )
}

function resolve(value) {
  // Innermost calc() first, until none are left that are plain numbers.
  let resolved = resolveVars(value, [])
  for (let previous; previous !== resolved;) {
    previous = resolved
    resolved = resolved.replace(/calc\(([\d.\s*/+-]+)\)/g, (_match, math) => String(Function(`return ${math}`)()))
  }
  return resolved
}

// Walks each var() with balanced parentheses, so fallbacks can hold their own var(),
// and a fallback is only resolved when its variable is not defined.
function resolveVars(value, seen) {
  let output = ''
  let index = 0
  for (let start; (start = value.indexOf('var(', index)) !== -1;) {
    output += value.slice(index, start)
    let depth = 0
    let comma = -1
    let end = start + 3
    for (; end < value.length; end++) {
      const char = value[end]
      if (char === '(') depth++
      else if (char === ')' && --depth === 0) break
      else if (char === ',' && depth === 1 && comma === -1) comma = end
    }
    if (depth !== 0) exitWithError(`Can't resolve: ${value}`)

    const name = value.slice(start + 4, comma === -1 ? end : comma).trim()
    const fallback = comma === -1 ? undefined : value.slice(comma + 1, end).trim()
    if (!/^--[\w-]+$/.test(name)) exitWithError(`Can't resolve: ${value}`)
    if (seen.includes(name)) exitWithError(`Circular reference: ${[...seen, name].join(' -> ')}`)
    if (name in tokens) output += resolveVars(tokens[name], [...seen, name])
    else if (fallback !== undefined) output += resolveVars(fallback, seen)
    else exitWithError(`${name} is not defined`)
    index = end + 1
  }
  return output + value.slice(index)
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
  if (!space) exitWithError(`Can't check color: ${value || '(empty value)'}`)
  const [channels, slashAlpha] = args.split('/')
  const parts = channels.trim().split(/[\s,]+/)
  const [a, b, c] = parts.map(parseFloat)
  // Alpha comes after "/", or fourth in the legacy comma syntax. Translucent text depends on what is behind it.
  const alpha = slashAlpha?.trim() ?? (channels.includes(',') ? parts[3] : undefined)
  if (alpha !== undefined) {
    const opacity = alpha.endsWith('%') ? parseFloat(alpha) / 100 : parseFloat(alpha)
    // NaN < 1 is false, so an unresolved alpha would otherwise count as opaque.
    if (!Number.isFinite(opacity)) exitWithError(`Can't measure alpha: ${value}`)
    if (opacity < 1) exitWithError(`Can't check translucent color: ${value}`)
  }

  // CSS clamps out-of-range channels (e.g. hsl(240 200% 75%) is drawn at 100% saturation).
  if (space === 'oklch') {
    // In CSS, 100% chroma is 0.4.
    const chroma = parts[1]?.endsWith('%') ? (b / 100) * 0.4 : b
    const lightness = parts[0].endsWith('%') ? a / 100 : a
    return luminance(oklchToLinearSrgb(clamp(lightness, 0, 1), Math.max(0, chroma), toDegrees(parts[2])))
  }
  return luminance(hslToSrgb(toDegrees(parts[0]), clamp(b / 100, 0, 1), clamp(c / 100, 0, 1)).map(linearize))
}

function clamp(value, low, high) {
  return Math.min(high, Math.max(low, value))
}

// Hue in degrees from 0 to 360, from any CSS angle unit (deg is the default).
function toDegrees(angle = '') {
  const value = parseFloat(angle)
  const unit = angle.match(/[a-z]+$/i)?.[0].toLowerCase()
  const degrees = { rad: (value * 180) / Math.PI, grad: value * 0.9, turn: value * 360 }[unit] ?? value
  return ((degrees % 360) + 360) % 360
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
