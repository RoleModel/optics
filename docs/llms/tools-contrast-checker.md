# Contrast Checker

[Source Code](https://github.com/RoleModel/optics/blob/main/src/tools/check-contrast.cjs)

Optics ships a contrast checker you can run in CI after customizing your theme.
It checks every color scale step against its `on` and `on-alt` text colors, in light and dark mode, and fails if any pair is below WCAG AA (4.5:1).

It works with both the HSL build (`optics.css`) and the [OKLCH build](overview-oklch-colors.md) (`optics-oklch.css`), and it has no dependencies.

## Usage

The checker is installed with Optics as the `optics-check-contrast` command. Add a script to your `package.json`:

```json
{
  "scripts": {
    "check-contrast": "optics-check-contrast app/assets/stylesheets/theme.css"
  }
}
```

Then run `yarn check-contrast` (or `npm run check-contrast`) in CI.

Pass your theme files or your compiled CSS. Your `--op-*` values are applied on top of the Optics tokens, and the last value of each token wins.

## Options

- `--hsl` or `--oklch`: the build to check against. Default: detected from your files (`-s` or `hsl()` means HSL, `-c` or `oklch()` means OKLCH).
- `--mode=light` or `--mode=dark`: check only one color mode. Use it if your app forces one mode, such as with `data-theme-mode="light"`. Default: both modes.
- `--min`: the ratio `on` text needs. Default: `4.5`.
- `--alt-min`: the ratio `on-alt` text needs. Use `--alt-min=3` to allow AA large text. Default: `4.5`.
- `--report`: list every pair and its ratio, without failing. Default: off, so only failures are listed.

It exits with `1` if any pair fails, and `2` if it can't read your theme.

## Limits

- Selectors are ignored, so check each [dynamic theme](overview-themes.md#dynamic-themes) file on its own.
- Colors outside sRGB are clipped, as browsers do on most screens. OKLCH colors at 0% or 100% lightness are black or white, whatever their chroma.
- A checked color that is set inside `@media`, `@supports`, `@container`, or `@layer`, or that uses a variable set there, stops the check with exit code `2`. Conditions change when it applies, and layers change which value wins. Set dark mode colors with `light-dark()` instead. Other variables, such as fonts, are fine there.
- `@import` rules are followed, relative to the importing file. Imports of Optics itself and of remote URLs (such as fonts) are skipped. An import that can't be read or found stops the check with exit code `2`, so pass your compiled CSS if your imports need a bundler to resolve.
- Translucent colors, and `calc()` that mixes units (such as `calc(50% + 5%)`), can't be measured, so the check stops with exit code `2`.
- Only the scale steps and their `on` colors are checked, not your own color pairs.
