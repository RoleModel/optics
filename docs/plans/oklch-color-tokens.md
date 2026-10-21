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
| Gamut        | P3 allowed. Browsers gamut-map on sRGB screens.                                                                   |
| Defaults     | Convert today's primary, neutral, and alert HSL values to OKLCH.                                                  |
| Contrast     | A script checks every step vs its `on` and `on-alt` color for WCAG AA. Runs in `yarn sanity-check`.               |
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

### Phase 3: Generate OKLCH token files — Done

- Add a generator in `tools/` that writes `src/core/tokens/oklch/scale_color_tokens.css` from the L table and factors. Commit the generated file.
- Write `src/core/tokens/oklch/base_color_tokens.css` and `src/core/tokens/oklch/index.css`.
- Keep the same token names, `@tokens` comments, dark-mode blocks, and `data-theme-mode` overrides.
- Result: `yarn oklch-tokens` runs `tools/build-oklch-tokens.mjs`. It rewrites both HSL color files into `src/core/tokens/oklch/`, and it fails if any `hsl(` or `-s` is left. `index.css` is hand-written.
- Storybook's token addon scanned every CSS file, so the OKLCH tokens would have shown up twice in the token tables. `.storybook/main.js` now sets `designTokenGlob: 'src/core/tokens/*.css'`.
- Checks: the HSL and OKLCH sets have the same 504 token names (with `-s` renamed to `-c`). All 354 color tokens compute to valid colors in Chrome in light and dark mode. Generated files pass prettier and stylelint. `yarn sanity-check` passes.
- Note: every color now uses the neutral L steps. Brand dark-mode steps shift the most, because the HSL brand scales used different dark steps than neutral (e.g. `plus-five` dark is HSL 24% for primary but 18% for neutral). In OKLCH, both use neutral's step (29.9%).

### Phase 4: Entry files

- Add `src/optics-oklch.css` and one `optics-oklch+<icons>.css` per existing icon entry.
- Each one is a copy of its HSL entry, with the tokens import set to `core/tokens/oklch/index.css`.

### Phase 5: Contrast check

- Add `tools/check-contrast.mjs`. It checks each step vs `on` (AA 4.5:1) and `on-alt` (target TBD) in light and dark mode.
- Compute contrast on the sRGB gamut-mapped color (worst case screen).
- Add it to `yarn sanity-check`.
- Tune L values or taper factors until it passes.

### Phase 6: Storybook toggle

- Add a `colorSpace` global (HSL / OKLCH) in `.storybook/preview.js`.
- A decorator swaps the loaded stylesheet.

### Phase 7: Docs

- `src/stories/Overview/Themes.mdx`: OKLCH theme override example.
- `src/stories/Overview/ScaleOverriding.mdx`: OKLCH scale override example.
- `src/stories/Tokens/Color/ColorWithAlpha.mdx`: `oklch(... / 40%)` example.
- `src/stories/Overview/SelectiveImports.mdx`: `core/tokens/oklch` import.
- Migration note: HSL hue numbers do not equal OKLCH hue numbers (HSL 216 is about OKLCH 258). Give a conversion table for the defaults and a link to a converter.
- `README.md` and `CHANGELOG.md`.

## Out of scope

- `src/recipes/16six-sidebar.css` keeps its hard-coded HSL values.
- Component CSS.
- OKLCH tokens JSON.

## Open questions

- Contrast target for `on-alt` text (AA 4.5:1 or AA large 3:1)?
- ~~Generator script vs hand-written OKLCH scale file?~~ Generator (Phase 3).
