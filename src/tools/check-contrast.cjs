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
const Build = require('./contrast/builds/build.cjs')
const CheckError = require('./contrast/check-error.cjs')
const ContrastCheck = require('./contrast/contrast-check.cjs')
const ContrastReporter = require('./contrast/contrast-reporter.cjs')
const Stylesheet = require('./contrast/stylesheet.cjs')
const Theme = require('./contrast/theme.cjs')
const ToolOptions = require('./contrast/tool-options.cjs')

try {
  const options = ToolOptions.parse(process.argv.slice(2))
  const userCss = Stylesheet.read(options.files)
  const build = Build.for(options, userCss)
  const theme = Theme.cascade(build.stylesheet(), userCss)
  const check = new ContrastCheck(theme, options)
  const reporter = new ContrastReporter(process.stdout, build, options)

  for (const result of check.results()) reporter.record(result)
  process.exitCode = reporter.finish()
} catch (error) {
  if (!(error instanceof CheckError)) throw error
  console.error(`optics-check-contrast: ${error.message}`)
  process.exit(2)
}
