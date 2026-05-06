#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

// --- Configuration ---

const SRC_DIR = path.resolve(__dirname, '../src')
const SRC_COMPONENTS_DIR = path.resolve(__dirname, '../src/components')
const OUTPUT_FILE = path.resolve(__dirname, '../dist/DESIGN.md')

const EXCLUDED_DIRS = ['addons']

// Active token groups — comment out any group to exclude it from output.
// `subsection` is optional: when set, tokens nest one level deeper in the YAML
// (e.g. section: 'layout', subsection: 'spacing' → layout.spacing.*)
// `filter` is optional: a function (key) => boolean to include only matching tokens
const REM_TO_PX = 10

const METADATA = {
  version: 'alpha',
  name: 'Optics',
  description: "RoleModel Software's Optics design system.",
}

const COMPONENTS = {
  'color-border': { color: '{colors.neutral-plus-five}' },
}

const TOKEN_GROUPS = [
  { prefix: '--op-space-', section: 'spacing', filter: (key) => key !== 'scale-unit' },
  {
    prefix: '--op-font-',
    section: 'typography',
    subsection: 'font-size',
    filter: (key) => !key.startsWith('weight-') && !key.startsWith('family') && key !== 'scale-unit',
  },
  {
    prefix: '--op-font-',
    section: 'typography',
    subsection: 'font-weight',
    filter: (key) => key.startsWith('weight-'),
    stripKeyPrefix: 'weight-',
  },
  {
    prefix: '--op-font-',
    section: 'typography',
    subsection: 'font-family',
    filter: (key) => key === 'family' || key.startsWith('family-'),
    keyTransform: (key) => (key === 'family' ? 'default' : key.replace(/^family-/, '')),
  },
  { prefix: '--op-line-height-', section: 'typography', subsection: 'line-height' },
  { prefix: '--op-letter-spacing-', section: 'typography', subsection: 'letter-spacing' },
  {
    prefix: '--op-color-',
    section: 'colors',
    useColorTransform: true,
    filter: (key) =>
      !key.endsWith('-h') && !key.endsWith('-s') && !key.endsWith('-l') && key !== 'border',
    keyTransform: (key) => key.replace(/-original$/, ''),
  },
  { prefix: '--op-shadow-', section: 'elevation' },
  { prefix: '--op-z-index-', section: 'elevation', subsection: 'z-index' },
  { prefix: '--op-opacity-', section: 'opacity' },
  { prefix: '--op-radius-', section: 'rounded', filter: (key) => key !== 'circle' },
  { prefix: '--op-breakpoint-', section: 'layout', subsection: 'breakpoints' },
  {
    prefix: '--op-border-',
    section: 'layout',
    subsection: 'border-width',
    filter: (key) => key === 'width' || key.startsWith('width-'),
    stripKeyPrefix: 'width-',
    keyTransform: (key) => key === 'width' ? 'default' : key,
  },
  {
    prefix: '--op-border-',
    section: 'layout',
    subsection: 'border',
    filter: (key) => key !== 'width' && !key.startsWith('width-'),
  },
  { prefix: '--op-input-height-', section: 'inputs', subsection: 'height' },
  // { prefix: '--op-input-', section: 'inputs', subsection: 'focus' },
  { prefix: '--op-transition-', section: 'animation' },
  { prefix: '--op-encoded-images-', section: 'assets', filter: (key) => key !== 'dropdown-arrow-width' },
]

// --- File Discovery ---

function findCssFiles(dir) {
  const results = []
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      if (EXCLUDED_DIRS.includes(entry.name)) continue
      results.push(...findCssFiles(fullPath))
    } else if (entry.isFile() && entry.name.endsWith('.css')) {
      results.push(fullPath)
    }
  }
  return results.sort()
}

// --- CSS Parsing ---

function extractVariableDeclarations(cssText) {
  const declarations = []
  const declarationPattern = /(--[\w-]+)\s*:\s*/g
  let match

  while ((match = declarationPattern.exec(cssText)) !== null) {
    const name = match[1]
    const valueStart = match.index + match[0].length
    const rawValue = extractValueAtPosition(cssText, valueStart)
    if (rawValue === null) continue

    const value = normalizeWhitespace(rawValue)
    declarations.push({ name, value })

    declarationPattern.lastIndex = valueStart + rawValue.length
  }

  return declarations
}

function extractValueAtPosition(cssText, startIndex) {
  let depth = 0
  let i = startIndex

  while (i < cssText.length) {
    const ch = cssText[i]
    if (ch === '(') depth++
    else if (ch === ')') depth--
    else if (ch === ';' && depth === 0) return cssText.slice(startIndex, i)
    else if (ch === '{' && depth === 0) return null
    i++
  }
  return null
}

function normalizeWhitespace(value) {
  return value.replace(/\/\*.*?\*\//gs, '').trim().replace(/\s+/g, ' ')
}

// --- Token Processing ---

function matchTokenGroups(name) {
  return TOKEN_GROUPS.filter(({ prefix }) => name.startsWith(prefix))
}

function tokenKey(name, prefix, stripKeyPrefix, keyTransform) {
  const key = name.slice(prefix.length)
  const stripped = stripKeyPrefix && key.startsWith(stripKeyPrefix) ? key.slice(stripKeyPrefix.length) : key
  return keyTransform ? keyTransform(stripped) : stripped
}

function tokenPath(section, subsection, key) {
  return subsection ? `${section}.${subsection}.${key}` : `${section}.${key}`
}

function convertReferences(value, prefix, section, subsection) {
  const escaped = prefix.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  return value.replace(new RegExp(`var\\((${escaped}([\\w-]+))\\)`, 'g'), (_, _full, key) => {
    return `{${tokenPath(section, subsection, key)}}`
  })
}

function resolveCalc(value, resolvedTokens) {
  // Substitute known token values into {section.key} references, then
  // simplify calc(Nunit * M) → (N*M)unit so the exporter sees plain dimensions.
  const substituted = value.replace(/\{([\w.-]+)\}/g, (match, path) => {
    const key = path.split('.').pop()
    return resolvedTokens.get(key) ?? match
  })

  return substituted.replace(
    /calc\(\s*([\d.]+)(rem|em|px)\s*\*\s*([\d.]+)\s*\)/g,
    (_, n, unit, multiplier) => {
      const result = parseFloat(n) * parseFloat(multiplier)
      if (unit === 'rem') return `${parseFloat((result * REM_TO_PX).toFixed(4))}px`
      return `${parseFloat(result.toFixed(4))}${unit}`
    }
  ).replace(/^([\d.]+)rem$/, (_, n) => `${parseFloat((parseFloat(n) * REM_TO_PX).toFixed(4))}px`)
}

function formatValue(value, prefix, section, subsection) {
  return convertReferences(normalizeWhitespace(value), prefix, section, subsection)
}

// --- Color Processing ---

function buildBaseColorVars(declarations) {
  const raw = new Map()
  for (const { name, value } of declarations) {
    if (/^--op-color-[\w-]+-(h|s|l)$/.test(name)) raw.set(name, value.trim())
  }
  // Resolve one level of var() references (e.g. neutral-h → primary-h)
  const resolved = new Map()
  for (const [name, value] of raw) {
    resolved.set(name, value.replace(/var\((--[\w-]+)\)/g, (_, ref) => raw.get(ref) ?? ref))
  }
  return resolved
}

function hslToHex(h, s, l) {
  s /= 100
  l /= 100
  const a = s * Math.min(l, 1 - l)
  const f = (n) => {
    const k = (n + h / 30) % 12
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1)
    return Math.round(255 * color).toString(16).padStart(2, '0')
  }
  return `#${f(0)}${f(8)}${f(4)}`
}

function colorValueToHex(rawValue, baseColorVars) {
  // Extract light-mode value from light-dark(light, dark)
  const ldMatch = rawValue.match(/light-dark\(\s*(hsl\([^)]+\))\s*,/)
  const hslStr = ldMatch ? ldMatch[1] : rawValue

  // Resolve var() references to their numeric values
  const resolved = hslStr.replace(/var\((--[\w-]+)\)/g, (_, ref) => baseColorVars.get(ref) ?? ref)

  // Parse hsl(H S% L%) — modern space-separated syntax, optional "deg" suffix
  const m = resolved.match(/hsl\(\s*([\d.]+)(?:deg)?\s+([\d.]+)%\s+([\d.]+)%\s*\)/)
  if (!m) return null

  return hslToHex(parseFloat(m[1]), parseFloat(m[2]), parseFloat(m[3]))
}

// --- Component Parsing ---

const COMPONENT_PROP_MAP = {
  'background-color': 'backgroundColor',
  'color': 'textColor',
  'border-radius': 'rounded',
  'padding': 'padding',
  'padding-block': 'padding',
  'padding-inline': 'padding',
  'min-block-size': 'height',
  'block-size': 'height',
  'inline-size': 'width',
}

function buildVarToRef(groupMap) {
  const map = new Map()
  for (const { section, subsection, tokens } of groupMap.values()) {
    for (const [key, , originalName] of tokens) {
      if (!originalName || map.has(originalName)) continue
      const p = subsection ? `${section}.${subsection}.${key}` : `${section}.${key}`
      map.set(originalName, `{${p}}`)
    }
  }
  return map
}

function extractDirectDeclarations(blockText) {
  const result = {}
  let depth = 0
  let buf = ''
  for (const ch of blockText) {
    if (ch === '{') { depth++; buf = '' }
    else if (ch === '}') depth--
    else if (ch === ';' && depth === 0) {
      const cleaned = buf.trim()
      const idx = cleaned.indexOf(':')
      if (idx > 0) result[cleaned.slice(0, idx).trim()] = cleaned.slice(idx + 1).trim()
      buf = ''
    } else if (depth === 0) buf += ch
  }
  return result
}

function extractNestedBlocks(blockText) {
  const blocks = []
  let depth = 0
  let i = 0
  let buf = ''
  while (i < blockText.length) {
    const ch = blockText[i]
    if (ch === '{' && depth === 0) {
      const contentStart = i + 1
      depth = 1
      i++
      while (i < blockText.length && depth > 0) {
        if (blockText[i] === '{') depth++
        else if (blockText[i] === '}') depth--
        i++
      }
      if (buf.trim()) blocks.push({ selector: buf.trim(), content: blockText.slice(contentStart, i - 1) })
      buf = ''
      continue
    }
    if (depth === 0) buf += ch
    i++
  }
  return blocks
}

function declarationsToDesignTokens(declarations, varToRef) {
  const result = {}
  for (const [prop, value] of Object.entries(declarations)) {
    const designProp = COMPONENT_PROP_MAP[prop]
    if (!designProp || result[designProp]) continue
    const m = value.match(/^var\((--op-[\w-]+)\)$/)
    if (!m) continue
    const ref = varToRef.get(m[1])
    if (ref) result[designProp] = ref
  }
  return result
}

function parseComponentFiles(varToRef) {
  const components = {}
  const files = fs
    .readdirSync(SRC_COMPONENTS_DIR)
    .filter((f) => f.endsWith('.css') && f !== 'index.css')
    .map((f) => path.join(SRC_COMPONENTS_DIR, f))

  for (const filePath of files) {
    const raw = fs.readFileSync(filePath, 'utf8').replace(/\/\*[\s\S]*?\*\//g, '')
    const componentName = path.basename(filePath, '.css').replace(/_/g, '-')

    const firstBrace = raw.indexOf('{')
    if (firstBrace === -1) continue

    let depth = 1
    let i = firstBrace + 1
    while (i < raw.length && depth > 0) {
      if (raw[i] === '{') depth++
      else if (raw[i] === '}') depth--
      i++
    }
    const rootContent = raw.slice(firstBrace + 1, i - 1)

    const rootTokens = declarationsToDesignTokens(extractDirectDeclarations(rootContent), varToRef)
    if (Object.keys(rootTokens).length > 0) components[componentName] = rootTokens

    for (const { selector, content } of extractNestedBlocks(rootContent)) {
      const m = selector.match(/&\.[a-z][\w-]*--([a-z][\w-]*)/)
      if (!m) continue
      const variantTokens = declarationsToDesignTokens(extractDirectDeclarations(content), varToRef)
      if (Object.keys(variantTokens).length > 0) components[`${componentName}-${m[1]}`] = variantTokens
    }
  }

  return components
}

// --- DESIGN.md Generation ---

function buildDesignMd(tokensBySectionAndKey, allComponents) {
  const lines = ['---']

  for (const [key, value] of Object.entries(METADATA)) {
    lines.push(`${key}: ${value}`)
  }

  // Group by top-level section so multiple groups can share one YAML section block
  const bySection = new Map()
  for (const group of tokensBySectionAndKey) {
    if (!bySection.has(group.section)) bySection.set(group.section, [])
    bySection.get(group.section).push(group)
  }

  for (const [section, groups] of bySection) {
    lines.push(`${section}:`)
    for (const { subsection, tokens } of groups) {
      if (subsection) lines.push(`  ${subsection}:`)
      for (const [key, value] of tokens) {
        const indent = subsection ? '    ' : '  '
        const needsQuotes = value.includes(',') || value.startsWith('#') || value.includes("'")
        const formatted = needsQuotes ? `"${value}"` : value
        lines.push(`${indent}${key}: ${formatted}`)
      }
    }
  }

  if (Object.keys(allComponents).length > 0) {
    lines.push('components:')
    for (const [component, props] of Object.entries(allComponents)) {
      lines.push(`  ${component}:`)
      for (const [prop, val] of Object.entries(props)) {
        const formatted = val.startsWith('{') ? `"${val}"` : val
        lines.push(`    ${prop}: ${formatted}`)
      }
    }
  }

  lines.push('---')

  lines.push('')
  lines.push('## Shapes')
  lines.push('')
  lines.push(
    'To render a fully circular element, apply `border-radius: 50%` directly. ' +
      'This is a layout instruction rather than a fixed dimension, so it is not included in the `rounded` token scale above.'
  )

  return lines.join('\n')
}

// --- Main ---

function generateDesignTokens() {
  const cssFiles = findCssFiles(SRC_DIR)
  console.log(`Found ${cssFiles.length} CSS files in ${SRC_DIR}`)

  const seen = new Set()
  const rawDeclarations = []

  for (const filePath of cssFiles) {
    const cssText = fs.readFileSync(filePath, 'utf8')
    for (const decl of extractVariableDeclarations(cssText)) {
      if (!seen.has(decl.name)) {
        seen.add(decl.name)
        rawDeclarations.push(decl)
      }
    }
  }

  const baseColorVars = buildBaseColorVars(rawDeclarations)

  // First pass: collect all matching tokens (no filter) for calc() resolution
  const resolvedTokens = new Map()
  for (const { name, value } of rawDeclarations) {
    for (const group of matchTokenGroups(name)) {
      const key = tokenKey(name, group.prefix, group.stripKeyPrefix, group.keyTransform)
      const formattedValue = formatValue(value, group.prefix, group.section, group.subsection)
      resolvedTokens.set(key, formattedValue)
    }
  }

  // Second pass: build output groups, applying filters and resolving calc()
  const groupMap = new Map()
  for (const { name, value } of rawDeclarations) {
    for (const group of matchTokenGroups(name)) {
      const rawKey = tokenKey(name, group.prefix)
      if (group.filter && !group.filter(rawKey)) continue

      const key = tokenKey(name, group.prefix, group.stripKeyPrefix, group.keyTransform)
      const groupKey = `${group.section}::${group.subsection ?? ''}`
      if (!groupMap.has(groupKey)) groupMap.set(groupKey, { ...group, tokens: [] })
      let finalValue
      if (group.useColorTransform) {
        finalValue = colorValueToHex(value, baseColorVars)
        if (!finalValue) continue
      } else {
        finalValue = resolveCalc(formatValue(value, group.prefix, group.section, group.subsection), resolvedTokens)
      }
      groupMap.get(groupKey).tokens.push([key, finalValue, name])
    }
  }

  const tokensBySectionAndKey = Array.from(groupMap.values())

  console.log(
    `Extracted ${tokensBySectionAndKey.reduce((n, g) => n + g.tokens.length, 0)} tokens across ${tokensBySectionAndKey.length} section(s)`
  )

  const varToRef = buildVarToRef(groupMap)
  const parsedComponents = parseComponentFiles(varToRef)
  const allComponents = { ...parsedComponents, ...COMPONENTS }
  console.log(`Parsed ${Object.keys(allComponents).length} components`)

  const output = buildDesignMd(tokensBySectionAndKey, allComponents)
  fs.mkdirSync(path.dirname(OUTPUT_FILE), { recursive: true })
  fs.writeFileSync(OUTPUT_FILE, output, 'utf8')
  console.log(`Written to ${OUTPUT_FILE}`)
}

generateDesignTokens()
