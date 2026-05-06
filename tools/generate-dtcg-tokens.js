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

const output = GROUPS.map(parseGroup).reduce(deepMerge, {})
fs.mkdirSync(path.dirname(path.resolve(OUTPUT)), { recursive: true })
fs.writeFileSync(path.resolve(OUTPUT), JSON.stringify(output, null, 2))
console.log(`Written to ${OUTPUT}`)
