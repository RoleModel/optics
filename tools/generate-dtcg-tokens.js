const fs = require('fs')
const path = require('node:path')

const SOURCE = 'src/core/tokens/base_tokens.css'
const OUTPUT = 'dist/design-tokens.json'

const css = fs.readFileSync(path.resolve(SOURCE), 'utf8')

const GROUPS = [
  {
    prefix: 'op-space',
    type: 'dimension',
    scaleUnitVar: '--op-space-scale-unit',
    scopes: ['WIDTH_HEIGHT', 'GAP', 'PARAGRAPH_SPACING', 'PARAGRAPH_INDENT'],
  },
  {
    prefix: 'op-radius',
    type: 'dimension',
    scopes: ['CORNER_RADIUS'],
  },
  {
    prefix: 'op-breakpoint',
    type: 'dimension',
    scopes: ['WIDTH_HEIGHT'],
  },
  {
    prefix: 'op-input-height',
    type: 'dimension',
    scopes: ['WIDTH_HEIGHT'],
  },
  {
    prefix: 'op-border-width',
    group: 'op-border',
    subgroup: 'width',
    type: 'dimension',
    defaultName: 'default',
    scopes: ['STROKE_FLOAT', 'EFFECT_FLOAT'],
  },
  {
    prefix: 'op-font',
    group: 'op-font',
    type: 'dimension',
    scaleUnitVar: '--op-font-scale-unit',
    exclude: ['weight', 'family'],
    scopes: ['FONT_SIZE'],
  },
  {
    prefix: 'op-font-weight',
    group: 'op-font',
    subgroup: 'weight',
    type: 'number',
    scopes: ['FONT_WEIGHT'],
  },
  {
    prefix: 'op-font-family',
    group: 'op-font',
    subgroup: 'family',
    type: 'fontFamily',
    defaultName: 'default',
    scopes: ['FONT_FAMILY'],
  },
  {
    prefix: 'op-line-height',
    type: 'number',
    scopes: ['LINE_HEIGHT'],
  },
  {
    prefix: 'op-letter-spacing',
    type: 'dimension',
    scopes: ['LETTER_SPACING'],
  },
  {
    prefix: 'op-z-index',
    type: 'number',
    scopes: [],
  },
]

function coerceValue(value, type) {
  if (type === 'number') return parseFloat(value)
  return value
}

function parseGroup({ prefix, group, subgroup, type, scaleUnitVar, exclude, defaultName, scopes }) {
  const pattern = new RegExp(`--${prefix}(?:-([\\w-]+))?:\\s*([^;]+);(?:[^\\S\\n]*\\/\\*\\s*([^*]+?)\\s*\\*\\/)?`, 'g')
  let scaleUnit = null
  const tokens = {}
  let match

  while ((match = pattern.exec(css)) !== null) {
    const [, rawName, rawValue, comment] = match
    const name = rawName ?? defaultName
    if (!name) continue
    if (exclude && exclude.some((ex) => name.startsWith(ex))) continue

    const cssVar = rawName ? `var(--${prefix}-${name})` : `var(--${prefix})`
    const value = rawValue.trim()
    const description = comment ? comment.trim().replace(/;$/, '') : undefined

    const extensions = {
      ...(scopes.length > 0 && { 'com.figma.scopes': scopes }),
      'com.figma.codeSyntax': { WEB: cssVar },
    }

    if (scaleUnitVar && name === 'scale-unit') {
      scaleUnit = value
      tokens[name] = { $value: coerceValue(value, type), ...(description && { $description: description }), $extensions: extensions }
      continue
    }

    const calcMatch = scaleUnitVar && value.match(new RegExp(`calc\\(var\\(${scaleUnitVar}\\)\\s*\\*\\s*([\\d.]+)\\)`))
    if (calcMatch && scaleUnit) {
      const multiplier = parseFloat(calcMatch[1])
      const unitMatch = scaleUnit.match(/^([\d.]+)(.+)$/)
      const resolved = `${parseFloat((parseFloat(unitMatch[1]) * multiplier).toPrecision(10))}${unitMatch[2]}`
      tokens[name] = { $value: resolved, ...(description && { $description: description }), $extensions: extensions }
    } else {
      tokens[name] = { $value: coerceValue(value, type), ...(description && { $description: description }), $extensions: extensions }
    }
  }

  const tokenGroup = { $type: type, ...tokens }
  if (group && subgroup) return { [group]: { [subgroup]: tokenGroup } }
  if (group) return { [group]: tokenGroup }
  return { [prefix]: tokenGroup }
}

function deepMerge(target, source) {
  for (const key of Object.keys(source)) {
    if (key in target && typeof target[key] === 'object' && !Array.isArray(target[key])) {
      deepMerge(target[key], source[key])
    } else {
      target[key] = source[key]
    }
  }
  return target
}

// ─── Color parsing ───────────────────────────────────────────────────────────

const COLOR_SOURCES = ['src/core/tokens/base_tokens.css', 'src/core/tokens/scale_color_tokens.css']
const COLOR_SUBGROUPS = ['alerts-warning', 'alerts-danger', 'alerts-info', 'alerts-notice', 'neutral', 'primary']

function hslToSrgb(h, s, l) {
  h = ((h % 360) + 360) % 360
  s /= 100
  l /= 100
  const a = s * Math.min(l, 1 - l)
  const channel = (n) => {
    const k = (n + h / 30) % 12
    return l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1)
  }
  const round = (v) => Math.round(v * 10000) / 10000
  return { r: round(channel(0)), g: round(channel(8)), b: round(channel(4)) }
}

function resolveHslVars(combinedCss) {
  const vars = {}
  const pattern = /--op-color-([\w-]+)-(h|s|l):\s*([^;]+);/g
  let match
  while ((match = pattern.exec(combinedCss)) !== null) {
    vars[`--op-color-${match[1]}-${match[2]}`] = match[3].trim()
  }
  function resolve(value, seen = new Set()) {
    const m = value.match(/^var\((--[^)]+)\)$/)
    if (m && vars[m[1]] && !seen.has(m[1])) return resolve(vars[m[1]], new Set([...seen, m[1]]))
    return value
  }
  return Object.fromEntries(Object.entries(vars).map(([k, v]) => [k, resolve(v)]))
}

function extractLightValue(value) {
  const m = value.match(/light-dark\(([\s\S]+)\)\s*$/)
  if (!m) return value.trim()
  const inner = m[1]
  let depth = 0
  for (let i = 0; i < inner.length; i++) {
    if (inner[i] === '(') depth++
    else if (inner[i] === ')') depth--
    else if (inner[i] === ',' && depth === 0) return inner.slice(0, i).trim()
  }
  return inner.trim()
}

function hslStringToColorValue(hslStr, hslVars) {
  const inner = hslStr.match(/hsl\(([\s\S]+)\)/)?.[1]?.trim()
  if (!inner) return null
  const parts = inner.split(/\s+/)
  const rv = (v) => { const m = v.match(/^var\((--[^)]+)\)$/); return m && hslVars[m[1]] ? hslVars[m[1]] : v }
  const h = parseFloat(rv(parts[0]))
  const s = parseFloat(rv(parts[1]))
  const l = parseFloat(rv(parts[2]))
  if (isNaN(h) || isNaN(s) || isNaN(l)) return null
  const { r, g, b } = hslToSrgb(h, s, l)
  return { colorSpace: 'srgb', components: { r, g, b }, alpha: 1 }
}

function cssVarToRef(cssVar) {
  const after = cssVar.replace('--op-color-', '')
  const sg = COLOR_SUBGROUPS.find((s) => after.startsWith(s + '-'))
  return sg ? `{op-color.${sg}.${after.slice(sg.length + 1)}}` : `{op-color.${after}}`
}

function parseColors() {
  const combinedCss = COLOR_SOURCES.map((s) => fs.readFileSync(path.resolve(s), 'utf8')).join('\n')
  const hslVars = resolveHslVars(combinedCss)
  const pattern = /--op-color-([\w-]+):\s*([\s\S]+?)(?=;)/g
  const result = {}
  let match

  while ((match = pattern.exec(combinedCss)) !== null) {
    const name = match[1]
    const rawValue = match[2].trim()

    if (/-(h|s|l)$/.test(name)) continue

    const aliasMatch = rawValue.match(/^var\((--op-color-[\w-]+)\)$/)
    let dtcgValue
    if (aliasMatch) {
      dtcgValue = cssVarToRef(aliasMatch[1])
    } else {
      dtcgValue = hslStringToColorValue(extractLightValue(rawValue), hslVars)
      if (!dtcgValue) continue
    }

    const sg = COLOR_SUBGROUPS.find((s) => name.startsWith(s + '-'))
    const tokenName = sg ? name.slice(sg.length + 1) : name
    const token = {
      $type: 'color',
      $value: dtcgValue,
      $extensions: {
        'com.figma.scopes': ['ALL_SCOPES'],
        'com.figma.codeSyntax': { WEB: `var(--op-color-${name})` },
      },
    }

    if (sg) {
      result[sg] = result[sg] ?? {}
      result[sg][tokenName] = token
    } else {
      result[tokenName] = token
    }
  }

  return { 'op-color': result }
}

const output = deepMerge(GROUPS.map(parseGroup).reduce(deepMerge, {}), parseColors())
fs.mkdirSync(path.dirname(path.resolve(OUTPUT)), { recursive: true })
fs.writeFileSync(path.resolve(OUTPUT), JSON.stringify(output, null, 2))
console.log(`Written to ${OUTPUT}`)
