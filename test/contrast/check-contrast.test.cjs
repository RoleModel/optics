// Runs the contrast checker bin on small themes, and checks its exit code and the lines it prints.
const assert = require('node:assert')
const fs = require('node:fs')
const os = require('node:os')
const path = require('node:path')
const { spawnSync } = require('node:child_process')
const { after, before, describe, test } = require('node:test')

const ROOT = path.join(__dirname, '../..')

const HSL_THEME = ':root { --op-color-primary-h: 210; --op-color-primary-s: 80%; --op-color-primary-l: 50%; }'
const OKLCH_THEME = ':root { --op-color-primary-h: 210; --op-color-primary-c: 0.15; --op-color-primary-l: 0.6; }'
const UNKNOWN_THEME = ':root { --brand: red; }'
const AMBIGUOUS = 'Could not tell if your theme is HSL or OKLCH. Pass --hsl or --oklch.'

// Sets --op-color-primary-on-base, and a channel var so the build is detected.
const onBase = (color, channel = '--op-color-primary-c: 0.1;') =>
  `:root { --op-color-primary-on-base: ${color}; ${channel} }`
const HSL_CHANNEL = '--op-color-primary-s: 1%;'

// Each case gives `css` (theme files to pass, as theme-0.css and on), `files` (other files it can @import)
// and `args`, then either the `error` it must stop with (exit 2), or the `exit` code and the lines it must print.
const CASES = [
  // Results and flags
  {
    name: 'passes the Optics defaults with no files',
    exit: 0,
    prints: 'Optics oklch contrast: 456/456 pairs pass (on >= 4.5, on-alt >= 4.5)',
  },
  {
    name: 'fails an HSL theme with low contrast',
    css: HSL_THEME,
    exit: 1,
    prints: [
      'Optics hsl contrast: 440/456 pairs pass (on >= 4.5, on-alt >= 4.5)',
      '  --op-color-primary-on-plus-one (dark): 4.21 < 4.5',
    ],
  },
  {
    name: 'fails an OKLCH theme with low contrast',
    css: OKLCH_THEME,
    exit: 1,
    prints: [
      'Optics oklch contrast: 445/456 pairs pass (on >= 4.5, on-alt >= 4.5)',
      '  --op-color-primary-on-plus-one (dark): 4.26 < 4.5',
    ],
  },
  {
    name: 'fails a pair only in dark mode',
    css: ':root { --op-color-primary-h: 60; --op-color-primary-c: 0.2; --op-color-primary-l: 0.9; }',
    exit: 1,
    prints: '  --op-color-primary-on-minus-four (dark): 4.40 < 4.5',
  },
  {
    name: 'lists every pair with --report, and does not fail',
    css: OKLCH_THEME,
    args: ['--report'],
    exit: 0,
    prints: [
      'pass   5.98  light  --op-color-primary-on-base',
      'Optics oklch contrast: 445/456 pairs pass (on >= 4.5, on-alt >= 4.5)',
    ],
  },
  {
    name: 'uses --min for on text',
    css: OKLCH_THEME,
    args: ['--min=7'],
    exit: 1,
    prints: [
      'Optics oklch contrast: 369/456 pairs pass (on >= 7, on-alt >= 4.5)',
      '  --op-color-primary-on-plus-five (dark): 5.17 < 7',
    ],
  },
  {
    name: 'uses --alt-min for on-alt text',
    css: HSL_THEME,
    args: ['--alt-min=3', '--min=4.5'],
    exit: 1,
    prints: 'Optics hsl contrast: 453/456 pairs pass (on >= 4.5, on-alt >= 3)',
  },
  ...['--min', '--min=', '--alt-min=abc'].map((flag) => ({
    name: `rejects ${flag}`,
    css: OKLCH_THEME,
    args: [flag],
    error: '--min and --alt-min must be numbers, like 4.5',
  })),
  { name: 'rejects a missing file', args: ['nope.css'], error: 'File not found: nope.css' },

  // Build detection
  {
    name: 'ignores tokens in comments when detecting the build',
    css: '/* --op-color-primary-s: 50%; hsl( */\n:root { --op-color-primary-c: 0.12; }',
    exit: 0,
    prints: 'Optics oklch contrast: 456/456 pairs pass (on >= 4.5, on-alt >= 4.5)',
  },
  ...[
    ['both -c and -s', ':root { --op-color-primary-c: 0.1; --op-color-alerts-warning-s: 50%; }'],
    ['no color tokens', UNKNOWN_THEME],
    ['two files that disagree', [HSL_THEME, OKLCH_THEME]],
  ].map(([reason, css]) => ({ name: `can't tell the build from ${reason}`, css, error: AMBIGUOUS })),
  {
    name: '--hsl picks the HSL build',
    css: UNKNOWN_THEME,
    args: ['--hsl'],
    exit: 1,
    prints: 'Optics hsl contrast: 450/456 pairs pass (on >= 4.5, on-alt >= 4.5)',
  },
  {
    name: '--oklch picks the OKLCH build',
    css: UNKNOWN_THEME,
    args: ['--oklch'],
    exit: 0,
    prints: 'Optics oklch contrast: 456/456 pairs pass (on >= 4.5, on-alt >= 4.5)',
  },

  // Cascade and var()
  {
    name: 'keeps an !important value over a later normal one',
    css: ':root { --op-color-primary-on-base: oklch(0.99 0 0) !important; }\n.x { --op-color-primary-on-base: oklch(0.1 0 0); }',
    args: ['--report'],
    exit: 0,
    prints: 'pass   6.62  light  --op-color-primary-on-base',
  },
  {
    name: 'stops on a color token inside @media',
    css: ':root { --op-color-primary-on-base: #fff; --op-color-primary-c: 0.1; }\n@media (prefers-color-scheme: dark) { :root { --op-color-primary-on-base: #000; } }',
    error:
      "Can't check --op-color-primary-on-base: it is set inside @media (prefers-color-scheme: dark). Set mode colors with light-dark(), or check that theme in its own file.",
  },
  {
    name: 'stops on a color that uses a var() set inside @media',
    css: ':root { --brand-text: #fff; --op-color-primary-base: #fff; --op-color-primary-on-base: var(--brand-text); --op-color-primary-c: 0.1; }\n@media (prefers-color-scheme: dark) { :root { --brand-text: #000; } }',
    error:
      "Can't check --op-color-primary-on-base: it uses --brand-text, which is set inside @media (prefers-color-scheme: dark). Set mode colors with light-dark(), or check that theme in its own file.",
  },
  {
    name: 'allows other tokens inside @media',
    css: ':root { --op-color-primary-c: 0.12; }\n@media (prefers-color-scheme: dark) { :root { --op-font-family: serif; } }',
    exit: 0,
    prints: 'Optics oklch contrast: 456/456 pairs pass (on >= 4.5, on-alt >= 4.5)',
  },
  // @import
  {
    name: 'follows an @import of a local file',
    css: "@import './brand';\n:root { --op-color-primary-c: 0.1; }",
    files: { 'brand.css': ':root { --op-color-primary-base: #fff; --op-color-primary-on-base: #fff; }' },
    args: ['--report'],
    exit: 0,
    prints: 'FAIL   1.00  light  --op-color-primary-on-base',
  },
  {
    name: 'stops on an @import it cannot find',
    css: "@import 'missing.css';",
    error: "Can't find @import 'missing.css' in theme-0.css. Fix the path, or pass your compiled CSS instead.",
  },
  {
    name: 'skips an @import of Optics or a remote URL',
    css: "@import '@rolemodel/optics';\n@import url('https://fonts.googleapis.com/css2?family=Inter');\n:root { --op-color-primary-c: 0.12; }",
    exit: 0,
    prints: 'Optics oklch contrast: 456/456 pairs pass (on >= 4.5, on-alt >= 4.5)',
  },
  {
    name: 'skips an @import that loops back',
    css: "@import 'loop.css';\n:root { --op-color-primary-c: 0.12; }",
    files: { 'loop.css': "@import 'theme-0.css';" },
    exit: 0,
    prints: 'Optics oklch contrast: 456/456 pairs pass (on >= 4.5, on-alt >= 4.5)',
  },
  {
    name: 'stops on a color from an @import with a media condition',
    css: "@import 'light.css';\n@import 'dark.css' (prefers-color-scheme: dark);",
    files: {
      'light.css':
        ':root { --op-color-primary-base: #fff; --op-color-primary-on-base: #fff; --op-color-primary-c: 0.1; }',
      'dark.css': ':root { --op-color-primary-on-base: #000; }',
    },
    error:
      "Can't check --op-color-primary-on-base: it is set inside @media (prefers-color-scheme: dark). Set mode colors with light-dark(), or check that theme in its own file.",
  },
  {
    name: 'uses nested var() fallbacks',
    css: onBase('var(--nope, var(--also-nope, oklch(0.1 0 0)))'),
    args: ['--report'],
    exit: 0,
    prints: 'FAIL   3.04  light  --op-color-primary-on-base',
  },
  ...[
    ['a circular var()', 'var(--a); --a: var(--b); --b: var(--a)', 'Circular reference: --a -> --b -> --a'],
    ['an undefined var()', 'var(--nope)', '--nope is not defined'],
    ['an unclosed var()', 'var(--a, oklch(0 0 0)', "Can't resolve: var(--a, oklch(0 0 0)"],
    ['a var() without --', 'var(nope)', "Can't resolve: var(nope)"],
  ].map(([reason, color, error]) => ({ name: `stops on ${reason}`, css: onBase(color), error })),

  // calc()
  {
    name: 'works out a calc() across lines',
    css: onBase('oklch(calc(\n  0.1 +\n  0.05) 0.1 200)'),
    args: ['--report'],
    exit: 0,
    prints: 'FAIL   2.79  light  --op-color-primary-on-base',
  },
  {
    name: 'reads calc() numbers with a leading zero as decimals',
    css: onBase('hsl(200 calc(070 * 1)% 20%)', HSL_CHANNEL),
    args: ['--report'],
    exit: 0,
    prints: 'FAIL   1.95  light  --op-color-primary-on-base',
  },
  {
    name: 'stops on a calc() with units',
    css: onBase('hsl(200 calc(50% + 5%) 20%)', HSL_CHANNEL),
    error: "Can't measure --op-color-primary-on-base (light) against --op-color-primary-base",
  },

  // Colors
  {
    name: 'reads hex colors',
    css: onBase('#fff; --op-color-primary-on-base-alt: #000000'),
    args: ['--report'],
    exit: 0,
    prints: 'pass   6.76  light  --op-color-primary-on-base',
  },
  {
    name: 'reads light-dark() as one color per mode',
    css: onBase('light-dark(oklch(0.1 0 0), hsl(0 0% 100%))'),
    args: ['--report'],
    exit: 0,
    prints: ['FAIL   3.04  light  --op-color-primary-on-base', 'pass   7.24  dark   --op-color-primary-on-base'],
  },
  {
    name: 'reads percentages and angle units',
    css: onBase('oklch(20% 25% 0.5turn); --op-color-primary-on-base-alt: oklch(0.9 0.1 1.2rad)'),
    args: ['--report'],
    exit: 0,
    prints: 'FAIL   2.50  light  --op-color-primary-on-base',
  },
  {
    name: 'reads OKLCH 100% lightness as white, whatever the chroma',
    css: ':root { --op-color-primary-base: #666; --op-color-primary-on-base: oklch(100% 0.2 0); --op-color-primary-c: 0.1; }',
    args: ['--report'],
    exit: 0,
    prints: 'pass   5.74  light  --op-color-primary-on-base',
  },
  {
    name: 'reads OKLCH 0% lightness as black, whatever the chroma',
    css: ':root { --op-color-primary-base: #000; --op-color-primary-on-base: oklch(0% 1 90); --op-color-primary-c: 0.1; }',
    args: ['--report'],
    exit: 0,
    prints: 'FAIL   1.00  light  --op-color-primary-on-base',
  },
  {
    name: 'stops on an OKLCH endpoint with a channel it cannot read',
    css: onBase('oklch(100% nope 0)'),
    error: "Can't measure --op-color-primary-on-base (light) against --op-color-primary-base",
  },
  {
    name: 'clamps out-of-range channels',
    css: onBase('hsl(240 200% 75%); --op-color-primary-on-base-alt: oklch(1.5 -0.2 -30grad)', HSL_CHANNEL),
    args: ['--report'],
    exit: 0,
    prints: 'FAIL   1.76  light  --op-color-primary-on-base',
  },
  ...[
    ['oklch(0.2 0.1 200 / 0.5)', undefined],
    ['hsla(200, 50%, 20%, 0.5)', HSL_CHANNEL],
  ].map(([color, channel]) => ({
    name: `stops on translucent ${color}`,
    css: onBase(color, channel),
    error: `Can't check translucent color: ${color}`,
  })),
  {
    name: 'stops on an alpha it cannot read',
    css: onBase('oklch(0.2 0.1 200 / var(--x, nope))'),
    error: "Can't measure alpha: oklch(0.2 0.1 200 / nope)",
  },
  { name: 'stops on an unsupported color', css: onBase('rgb(0 0 0)'), error: "Can't check color: rgb(0 0 0)" },
  ...[
    ['an empty text color', onBase(' ')],
    ['an empty background with no space', ':root { --op-color-primary-base:; --op-color-primary-c: 0.1; }'],
    ['an empty background before }', ':root { --op-color-primary-base:}'],
  ].map(([reason, css]) => ({
    name: `stops on ${reason}`,
    css,
    args: ['--oklch'],
    error: "Can't check color: (empty value)",
  })),
]

describe('optics-check-contrast', { concurrency: true }, () => {
  let bin
  let tempDir

  // The bin reads tokens from ../css/core/tokens, as laid out in dist/, so copy the sources into that shape.
  before(() => {
    tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'optics-contrast-'))
    fs.cpSync(path.join(ROOT, 'src/tools'), path.join(tempDir, 'tools'), { recursive: true })
    fs.cpSync(path.join(ROOT, 'src/core/tokens'), path.join(tempDir, 'css/core/tokens'), {
      recursive: true,
      dereference: true,
    })
    fs.mkdirSync(path.join(tempDir, 'themes'))
    bin = path.join(tempDir, 'tools/check-contrast.cjs')
  })

  after(() => fs.rmSync(tempDir, { recursive: true, force: true }))

  CASES.forEach(({ name, css = [], files = {}, args = [], error, exit = 2, prints = [] }, index) => {
    test(name, () => {
      const dir = path.join(tempDir, 'themes', `case-${index}`)
      fs.mkdirSync(dir)
      for (const [file, text] of Object.entries(files)) fs.writeFileSync(path.join(dir, file), text)
      const themes = [css].flat().map((text, part) => {
        const file = `theme-${part}.css`
        fs.writeFileSync(path.join(dir, file), text)
        return file
      })
      const { status, stdout, stderr } = spawnSync(process.execPath, [bin, ...themes, ...args], {
        cwd: dir,
        encoding: 'utf8',
      })
      const output = `${stderr}${stdout}`
      const lines = output.split('\n')

      assert.strictEqual(status, exit, output)
      for (const line of error ? [`optics-check-contrast: ${error}`] : [prints].flat())
        assert.ok(lines.includes(line), `Missing line: ${line}\n\n${output}`)
    })
  })
})
