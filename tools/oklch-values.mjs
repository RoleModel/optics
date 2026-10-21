/**
 * Computes the values the OKLCH token set is built from, and writes them to
 * tools/oklch-values.json:
 *
 *   defaults — each HSL theme color (-h/-s/-l) converted to OKLCH l/c/h.
 *   steps    — for every scale step (main, on, on-alt), in light and dark mode:
 *              l     the OKLCH lightness of today's neutral step, shared by every color
 *              taper the multiplier applied to a color's -c at that step
 *
 * The taper is the geometric mean of two curves, measured across the default
 * colors: today's HSL chroma curve (keeps the current look) and the largest
 * chroma that stays inside P3 (avoids clipping). One curve can't fit every hue,
 * because yellow only reaches high chroma when light and blue only when dark.
 */
import fs from 'node:fs'
import Color from 'colorjs.io'

const TOKENS_DIR = 'src/core/tokens'
const OUTPUT = 'tools/oklch-values.json'

const baseColorTokens = fs.readFileSync(`${TOKENS_DIR}/base_color_tokens.css`, 'utf8')
const scaleColorTokens = fs.readFileSync(`${TOKENS_DIR}/scale_color_tokens.css`, 'utf8')

const COLOR_NAMES = ['primary', 'neutral', 'alerts-warning', 'alerts-danger', 'alerts-info', 'alerts-notice']

function readHsl(name) {
  const read = (part) => {
    const value = baseColorTokens.match(new RegExp(`--op-color-${name}-${part}: ([^;]+);`))[1]
    const reference = value.match(/var\(--op-color-([a-z-]+)-[hsl]\)/)
    return reference ? readHsl(reference[1])[part] : parseFloat(value)
  }
  return { h: read('h'), s: read('s'), l: read('l') }
}

const toOklch = ({ h, s, l }) => new Color('hsl', [h, s, l]).to('oklch').coords.map(Number)

const hslColors = Object.fromEntries(COLOR_NAMES.map((name) => [name, readHsl(name)]))
// Info shares primary's HSL values; dedupe so blue doesn't count twice in the taper averages.
const chromatic = [
  ...new Map(
    Object.entries(hslColors)
      .filter(([name]) => name !== 'neutral')
      .map(([name, color]) => [`${color.h} ${color.s} ${color.l}`, [name, color]])
  ).values(),
]

const neutral = hslColors.neutral
const stepPattern =
  /--op-color-neutral-([a-z-]+): light-dark\(\s*hsl\([^)]*\) var\([^)]*\) (\d+)%\),\s*hsl\([^)]*\) var\([^)]*\) (\d+)%\)/g
const hslSteps = [...scaleColorTokens.matchAll(stepPattern)].map(([, name, light, dark]) => ({
  name,
  light: Number(light),
  dark: Number(dark),
}))

function hslChromaRatio(hslLightness) {
  const ratios = chromatic.map(([, color]) => toOklch({ ...color, l: hslLightness })[1] / toOklch(color)[1])
  return ratios.reduce((sum, ratio) => sum + ratio, 0) / ratios.length
}

function maxP3Chroma(lightness, hue) {
  let low = 0
  let high = 0.5
  for (let i = 0; i < 30; i++) {
    const mid = (low + high) / 2
    new Color('oklch', [lightness, mid, hue]).inGamut('p3') ? (low = mid) : (high = mid)
  }
  return low
}

function p3ChromaRatio(lightness) {
  const ratios = chromatic.map(([, color]) => {
    const [, chroma, hue] = toOklch(color)
    return maxP3Chroma(lightness, hue) / chroma
  })
  return Math.min(1, ...ratios)
}

const round = (value, places) => Number(value.toFixed(places))

function stepValues(hslLightness) {
  const lightness = toOklch({ ...neutral, l: hslLightness })[0]
  const taper = Math.sqrt(hslChromaRatio(hslLightness) * p3ChromaRatio(lightness))
  return { l: round(lightness * 100, 1), taper: round(taper, 2) }
}

const defaults = Object.fromEntries(
  Object.entries(hslColors).map(([name, color]) => {
    const [l, c, h] = toOklch(color)
    return [name, { l: round(l * 100, 1), c: round(c, 3), h: round(h, 1) }]
  })
)

const steps = Object.fromEntries(
  hslSteps.map(({ name, light, dark }) => [name, { light: stepValues(light), dark: stepValues(dark) }])
)

fs.writeFileSync(OUTPUT, `${JSON.stringify({ defaults, steps }, null, 2)}\n`)
console.log(`Wrote ${Object.keys(steps).length} steps and ${Object.keys(defaults).length} defaults to ${OUTPUT}`)
