# OKLCH Color Tokens (opt-in)

Ship an alternate build of Optics where every color token uses `oklch()` instead of `hsl()`. Existing projects keep the HSL build with no change. OKLCH becomes the default in v3.

## Decisions

| Topic        | Decision                                                                                                          |
| ------------ | ----------------------------------------------------------------------------------------------------------------- |
| Opt-in       | New entry files: `src/optics-oklch.css` + one per icon set (`optics-oklch+lucide_icons.css`, etc.)                |
| Scope        | Color tokens only. Components, base, layout, utilities stay the same.                                             |
| Override API | `--op-color-{name}-l`, `-c`, `-h` (matches `oklch(L C H)` order)                                                  |
| Lightness    | Every color uses the same L per step. L values come from today's neutral scale, converted to OKLCH.               |
| Chroma       | Tapered: `calc(var(--op-color-{name}-c) * <factor>)`. Factor is lower at the light and dark ends.                 |
| Gamut        | P3 allowed. Browsers clip to sRGB on sRGB screens.                                                                |
| Defaults     | Convert today's primary, neutral, and alert HSL values to OKLCH.                                                  |
| Contrast     | `optics-check-contrast` ships in `dist/tools` for apps to run on their own theme in CI. No dependencies.          |
| Token source | `src/core/tokens/oklch/` is hand-maintained. The one-time conversion scripts were removed after Phase 5.          |
| File layout  | Split color vars out of `base_tokens.css`. OKLCH folder reuses the shared non-color tokens.                       |
| Storybook    | Toolbar toggle to switch HSL / OKLCH.                                                                             |
| Tokens JSON  | No OKLCH JSON. `build:tokens` reads only top-level files in `src/core/tokens`, so the `oklch/` folder is skipped. |
| Long term    | v3 makes OKLCH the default and drops HSL.                                                                         |

## Target file layout

```
src/
  optics.css                      # unchanged (HSL)
  optics-oklch.css                # new
  optics-oklch+<icons>.css        # new, one per existing icon entry
  core/tokens/
    index.css                     # imports base_tokens, base_color_tokens, scale_color_tokens
    base_tokens.css               # non-color tokens only
    base_color_tokens.css         # new: HSL white/black, -h/-s/-l, shadows
    scale_color_tokens.css        # HSL scales (unchanged)
    oklch/
      index.css                   # imports ../base_tokens.css + the two files below
      base_color_tokens.css       # OKLCH white/black, -l/-c/-h, shadows
      scale_color_tokens.css      # OKLCH scales
```

`build:css` globs `src/optics*.css`, so the new entry files build with no script change. `build:files` copies `src/core`, so `core/tokens/oklch/` ships for selective imports.

## Scale formula

```css
--op-color-primary-plus-five: light-dark(
  oklch(<L-light> calc(var(--op-color-primary-c) * <factor-light>) var(--op-color-primary-h)),
  oklch(<L-dark> calc(var(--op-color-primary-c) * <factor-dark>) var(--op-color-primary-h))
);
```

`-l` is used only by `--op-color-{name}-original`, same as `-l` in HSL today.

## Phases

### Phase 1: Split color out of `base_tokens.css` (no visual change) — Done

- Move white/black, the `-h/-s/-l` vars, and shadows into `src/core/tokens/base_color_tokens.css`.
- Import it in `src/core/tokens/index.css`.
- Check: compiled `dist/css/optics.css` has the same custom property values as before. Run `yarn sanity-check`.
- Result: compiled CSS has the same 2193 declarations, and `tokens.json` is the same. `--op-color-border` and the input focus rings stay in `base_tokens.css`, because they only reference scale vars and both builds share them. Source links in `BasicColor.mdx` and `Shadow.mdx` now point to `base_color_tokens.css`.

### Phase 2: Compute OKLCH values — Done

- Add a devDependency for color math (`colorjs.io` or `culori`).
- Script converts each light and dark step of today's neutral scale to OKLCH L.
- Script converts default primary, neutral, and alert colors to OKLCH `l c h`.
- Pick taper factors per step. Start near 1.0 in the middle, near 0.1 at `plus-max` / `minus-max`.
- Result: added `colorjs.io`. `yarn oklch-values` runs `tools/oklch-values.mjs` and writes `tools/oklch-values.json` (6 defaults, 57 steps with light/dark `l` and `taper`).
- Taper: one curve can't fit every hue (yellow is only vivid when light, blue only when dark). Three curves were compared: A matches today's HSL chroma, B is the most chroma that keeps every default color inside P3, C is the geometric mean of A and B. Picked C. A clips yellow/green mid steps; B makes blue and red dull.
- Defaults: primary/info `53.9% 0.146 258.5`, neutral `c 0.01` (h and l stay linked to primary), warning `88.2% 0.166 92.3`, danger `75.2% 0.148 21.2`, notice `80.4% 0.166 147.4`.
- Later removed: the colors don't change in Optics once generated, so `tools/oklch-values.mjs`, its JSON, and `colorjs.io` were deleted (see Phase 5).

### Phase 3: Generate OKLCH token files — Done

- Add a generator in `tools/` that writes `src/core/tokens/oklch/scale_color_tokens.css` from the L table and factors. Commit the generated file.
- Write `src/core/tokens/oklch/base_color_tokens.css` and `src/core/tokens/oklch/index.css`.
- Keep the same token names, `@tokens` comments, dark-mode blocks, and `data-theme-mode` overrides.
- Result: `yarn oklch-tokens` runs `tools/build-oklch-tokens.mjs`. It rewrites both HSL color files into `src/core/tokens/oklch/`, and it fails if any `hsl(` or `-s` is left. `index.css` is hand-written.
- Storybook's token addon scanned every CSS file, so the OKLCH tokens would have shown up twice in the token tables. `.storybook/main.js` now sets `designTokenGlob: 'src/core/tokens/*.css'`.
- Checks: the HSL and OKLCH sets have the same 504 token names (with `-s` renamed to `-c`). All 354 color tokens compute to valid colors in Chrome in light and dark mode. Generated files pass prettier and stylelint. `yarn sanity-check` passes.
- Later removed: `tools/build-oklch-tokens.mjs` was deleted with the other conversion scripts. The OKLCH token files are now edited by hand, like the HSL ones.
- Note: every color now uses the neutral L steps. Brand dark-mode steps shift the most, because the HSL brand scales used different dark steps than neutral (e.g. `plus-five` dark is HSL 24% for primary but 18% for neutral). In OKLCH, both use neutral's step (29.9%).

### Phase 4: Entry files — Done

- Add `src/optics-oklch.css` and one `optics-oklch+<icons>.css` per existing icon entry.
- Each one is a copy of its HSL entry, with the tokens import set to `core/tokens/oklch/index.css`.
- Result: 7 entry files, hand-copied like the existing HSL entries. `yarn build` outputs each one plus a `.min.css`, with no build script change.
- Checks: each compiled OKLCH file has the same non-color declarations as its HSL twin (0 differences), and no `hsl(`. Minified output keeps `oklch(... calc(...) ...)` intact. `yarn sanity-check` passes.
- Apps opt in with `@import '@rolemodel/optics/dist/css/optics-oklch';` (or an `optics-oklch+<icons>` variant).

### Phase 5: Contrast check — Done

- Add `tools/check-contrast.mjs`. It checks each step vs `on` (AA 4.5:1) and `on-alt` (target TBD) in light and dark mode.
- Compute contrast on the sRGB gamut-mapped color (worst case screen).
- Add it to `yarn sanity-check`.
- Tune L values or taper factors until it passes.
- Result: `yarn check-contrast` reads the generated token CSS, resolves the default theme vars, and checks 456 pairs (6 colors × 38 `on` tokens × 2 modes). `on-alt` target is AA 4.5:1, the same as `on`. `--source=src/core/tokens` checks the HSL set; `--report` lists every pair.
- Baseline before tuning: HSL 450/456 (worst 2.27:1, warning `on-minus-one-alt` dark); OKLCH 439/456 (worst 4.06:1). At the same OKLCH L, WCAG sees green and yellow as brighter than blue, so some pairs fell just short.
- Tuning is automatic: `tools/oklch-values.mjs` nudges each `on` step's L away from its background by 0.1 until every default color passes. 7 steps moved, by 2.7 at most (e.g. `on-plus-one-alt` light 96.1 → 98.2). Now 456/456 pass.
- Trade-off: some `-alt` steps are now close to their main `on` step (e.g. `on-plus-one-alt` light is 98.2 vs 100).
- Limit: the check uses the default theme colors. An app that sets its own `-c`/`-h` is not checked.

#### Phase 5b: Ship the checker to apps — Done

Checking Optics' own defaults has little value, because they don't change. The value is for apps that customize their theme. So the checker moved into the package and the conversion scripts were removed.

- `src/tools/check-contrast.cjs` is copied to `dist/tools/` by `build:files`, and published as the `optics-check-contrast` bin.
- No dependencies. OKLCH → sRGB is Björn Ottosson's OKLab matrices, plus HSL and hex → sRGB, plus WCAG luminance. Out-of-range colors are clipped per channel, like browsers do. Results match the colorjs.io version within 0.02 on all 912 pairs.
- CommonJS, not ESM: Yarn Plug'n'Play can't load an ES module bin from inside its zip cache.
- Input: any CSS files (theme overrides or a compiled bundle). Optics' tokens are loaded from `dist/css/core/tokens` first, then the app's `--op-*` values on top, last one wins. Selectors are ignored.
- Color set: detected from the files (`-c`/`oklch(` → OKLCH, `-s`/`hsl(var(--op-color` → HSL), or forced with `--hsl` / `--oklch`. Ambiguous → exit 2 with a message.
- Flags: `--min` (default 4.5), `--alt-min` (default 4.5), `--report`. Exit 1 on failures, 2 on unreadable input.
- App usage: `"check-contrast": "optics-check-contrast app/assets/stylesheets/theme.css"` in `package.json` scripts, then `yarn check-contrast` in CI.
- Optics' `sanity-check` runs `yarn check-contrast` after `yarn build` as a smoke test of the shipped tool (default OKLCH theme, 456/456).
- Tested from a packed tarball in a scratch app with npm and with Yarn 4 PnP: theme files, a minified bundle, HSL and OKLCH, flags, and error cases.

### Phase 6: Storybook toggle — Done

- Add a `colorSpace` global (HSL / OKLCH) in `.storybook/preview.js`.
- A decorator swaps the loaded stylesheet.
- Result: a "Color space" toolbar menu (HSL default, OKLCH). `.storybook/useColorSpace.js` imports `src/core/tokens/oklch/index.css?inline` and, when OKLCH is picked, appends it as a `<style>` at the end of `<head>`. The token names are the same, so it overrides every HSL color token; picking HSL removes it. Works with the light/dark toggle and in URLs (`&globals=colorSpace:oklch`).
- Checks: in the dev server, `--op-color-primary-base` resolves to `oklch(...)` with OKLCH and back to HSL after switching; a dark-mode warning alert changes background as expected; docs pages with stories switch too. No console errors. `yarn sanity-check` passes (the static build compiles; not opened in a browser).
- Limits: like the light/dark toggle, it applies when a story renders, so MDX pages with no stories don't switch. The token tables (storybook-design-token) still list the HSL values.

### Phase 7: Docs

- `src/stories/Overview/Themes.mdx`: OKLCH theme override example.
- `src/stories/Overview/ScaleOverriding.mdx`: OKLCH scale override example.
- `src/stories/Tokens/Color/ColorWithAlpha.mdx`: `oklch(... / 40%)` example.
- `src/stories/Overview/SelectiveImports.mdx`: `core/tokens/oklch` import.
- Migration note: HSL hue numbers do not equal OKLCH hue numbers (HSL 216 is about OKLCH 258). Give a conversion table for the defaults and a link to a converter.
- ~~Contrast checker page~~ Done: "Checking Contrast" section at the end of `src/stories/Overview/Themes.mdx` (what it checks, the CI script, flags, and the "selectors are ignored" limit).
- `README.md` and `CHANGELOG.md`.

## Out of scope

- `src/recipes/16six-sidebar.css` keeps its hard-coded HSL values.
- Component CSS.
- OKLCH tokens JSON.

## Open questions

- ~~Contrast target for `on-alt` text (AA 4.5:1 or AA large 3:1)?~~ AA 4.5:1 (Phase 5).
- ~~Generator script vs hand-written OKLCH scale file?~~ Generator for the one-time build (Phase 3), then removed. Files are hand-maintained now.
