#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

// --- Configuration ---

const SRC_DIR = path.resolve(__dirname, '../src')
const OUTPUT_FILE = path.resolve(__dirname, '../dist/DESIGN.md')

const EXCLUDED_DIRS = ['addons']

// Active token groups — comment out any group to exclude it from output.
// `subsection` is optional: when set, tokens nest one level deeper in the YAML
// (e.g. section: 'layout', subsection: 'spacing' → layout.spacing.*)
// `filter` is optional: a function (key) => boolean to include only matching tokens
const TOKEN_GROUPS = [
  { prefix: '--op-space-', section: 'spacing' },
  {
    prefix: '--op-font-',
    section: 'typography',
    subsection: 'font-size',
    filter: (key) => !key.startsWith('weight-') && !key.startsWith('family'),
  },
  // { prefix: '--op-color-',        section: 'colors' },
  // { prefix: '--op-shadow-',       section: 'elevation' },
  { prefix: '--op-z-index-', section: 'elevation' },
  // { prefix: '--op-radius-',       section: 'shapes' },
  // { prefix: '--op-border-',       section: 'layout' },
  // { prefix: '--op-breakpoint-',   section: 'layout' },
  // { prefix: '--op-transition-',   section: 'animation' },
  // { prefix: '--op-input-',        section: 'components' },
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

function matchTokenGroup(name) {
  return TOKEN_GROUPS.find(({ prefix }) => name.startsWith(prefix)) ?? null
}

function tokenKey(name, prefix) {
  return name.slice(prefix.length)
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
      return `${parseFloat(result.toFixed(4))}${unit}`
    }
  )
}

function formatValue(value, prefix, section, subsection) {
  return convertReferences(normalizeWhitespace(value), prefix, section, subsection)
}

// --- DESIGN.md Generation ---

function buildDesignMd(tokensBySectionAndKey) {
  const lines = ['---']

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
        lines.push(`${indent}${key}: ${value}`)
      }
    }
  }

  lines.push('---')
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

  // Group tokens by section+subsection, preserving declaration order
  const groupMap = new Map()
  for (const { name, value } of rawDeclarations) {
    const group = matchTokenGroup(name)
    if (!group) continue

    const key = tokenKey(name, group.prefix)
    if (group.filter && !group.filter(key)) continue

    const groupKey = `${group.section}::${group.subsection ?? ''}`
    if (!groupMap.has(groupKey)) groupMap.set(groupKey, { ...group, tokens: [] })
    const formattedValue = formatValue(value, group.prefix, group.section, group.subsection)
    groupMap.get(groupKey).tokens.push([key, formattedValue])
  }

  // Build a flat key→value map for reference resolution, then resolve calc()
  const resolvedTokens = new Map(
    Array.from(groupMap.values()).flatMap(({ tokens }) => tokens)
  )
  for (const group of groupMap.values()) {
    group.tokens = group.tokens.map(([key, value]) => [
      key,
      resolveCalc(value, resolvedTokens),
    ])
  }

  const tokensBySectionAndKey = Array.from(groupMap.values())

  console.log(
    `Extracted ${tokensBySectionAndKey.reduce((n, g) => n + g.tokens.length, 0)} tokens across ${tokensBySectionAndKey.length} section(s)`
  )

  const output = buildDesignMd(tokensBySectionAndKey)
  fs.mkdirSync(path.dirname(OUTPUT_FILE), { recursive: true })
  fs.writeFileSync(OUTPUT_FILE, output, 'utf8')
  console.log(`Written to ${OUTPUT_FILE}`)
}

generateDesignTokens()
