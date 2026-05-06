# DTCG Token Generation Plan

## Goal

Generate a `dist/design-tokens.json` file from the Optics CSS token source files that conforms to the [Design Tokens Community Group (DTCG) spec](https://tr.designtokens.org/format/).

Run with:
```
yarn dtcg-tokens
```

Script lives at `tools/generate-dtcg-tokens.js`.

---

## Source Files

| File | Contains |
|------|----------|
| `src/core/tokens/base_tokens.css` | Space, radius, font, border-width, breakpoint, input-height, z-index, letter-spacing, line-height, and HSL component variables for colors |
| `src/core/tokens/scale_color_tokens.css` | All color scale tokens using `light-dark()` |

---

## Output Structure

```
dist/design-tokens.json
└── op-space           (dimension) — WIDTH_HEIGHT, GAP, PARAGRAPH_SPACING, PARAGRAPH_INDENT
└── op-radius          (dimension) — CORNER_RADIUS
└── op-breakpoint      (dimension) — WIDTH_HEIGHT
└── op-input-height    (dimension) — WIDTH_HEIGHT
└── op-border
│   └── width          (dimension) — STROKE_FLOAT, EFFECT_FLOAT
└── op-font
│   ├── scale-unit / size tokens  (dimension) — FONT_SIZE
│   ├── weight         (number)    — FONT_WEIGHT
│   └── family         (fontFamily) — FONT_FAMILY
└── op-line-height     (number)    — LINE_HEIGHT
└── op-letter-spacing  (dimension) — LETTER_SPACING
└── op-z-index         (number)    — (no scopes)
└── op-color
    ├── white / black  (color)
    ├── primary        (color scale)
    ├── neutral        (color scale)
    ├── alerts-warning (color scale)
    ├── alerts-danger  (color scale)
    ├── alerts-info    (color scale)
    ├── alerts-notice  (color scale)
    ├── border         (color alias)
    ├── background     (color alias)
    ├── on-background  (color alias)
    └── on-background-alt (color alias)
```

---

## Key Design Decisions

### Generic token groups (`GROUPS` array)

Each group entry in the `GROUPS` array supports:

| Option | Purpose |
|--------|---------|
| `prefix` | CSS variable prefix to match (e.g. `op-space`) |
| `type` | DTCG type: `dimension`, `number`, `fontFamily` |
| `group` | Top-level output key (if different from prefix) |
| `subgroup` | Nesting under the group key |
| `scaleUnitVar` | Enables `calc()` resolution for scaled tokens |
| `defaultName` | Token name when the variable has no suffix (e.g. `--op-border-width` → `default`) |
| `exclude` | Array of name prefixes to skip (used to prevent `op-font` matching `weight`/`family`) |
| `scopes` | Figma scopes array — omitted from output when empty |

### `com.figma.scopes` omission

When `scopes` is an empty array, `com.figma.scopes` is omitted from `$extensions` entirely (see `op-z-index`).

### Font sizes live directly under `op-font`

Font sizes (`--op-font-small`, etc.) are siblings to `weight` and `family` subgroups rather than nested under a `size` subgroup, because `size` doesn't appear in the CSS variable names.

### `op-border` nesting

`--op-border-width`, `--op-border-width-large`, `--op-border-width-x-large` are nested as:
```
op-border.width.default
op-border.width.large
op-border.width.x-large
```
`defaultName: 'default'` handles the no-suffix base token.

### Color parsing (dedicated `parseColors()` function)

Colors are not handled by the generic `GROUPS` mechanism because:
- Values are multiline `light-dark(lightVal, darkVal)` — only light mode is used
- HSL values use `var()` references to component variables (`-h`, `-s`, `-l`) that need resolving
- Alias tokens (e.g. `var(--op-color-neutral-plus-eight)`) become DTCG references (`{op-color.neutral.plus-eight}`)
- Output format uses `colorSpace: "srgb"` with `components: {r, g, b}` (0–1 floats) rather than hex

Color scales are segmented by `COLOR_SUBGROUPS` (longest-first to avoid partial matches):
`alerts-warning`, `alerts-danger`, `alerts-info`, `alerts-notice`, `neutral`, `primary`

---

## Not Yet Covered

The following CSS tokens exist in the source but are not yet included in the output:

- **Shadows** (`--op-shadow-*`) — composite values, not a standard DTCG type
- **Transitions** (`--op-transition-*`) — check if these exist
- **Opacity** (`--op-opacity-*`) — check if these exist
- **Encoded images** (`--op-encoded-images-*`) — likely out of scope

---

## Figma Scopes Reference

| Scope | Used for |
|-------|----------|
| `WIDTH_HEIGHT` | Space, breakpoints, input heights |
| `GAP` | Space |
| `PARAGRAPH_SPACING`, `PARAGRAPH_INDENT` | Space |
| `CORNER_RADIUS` | Radius |
| `STROKE_FLOAT`, `EFFECT_FLOAT` | Border widths |
| `FONT_SIZE` | Font size scale |
| `FONT_WEIGHT` | Font weights |
| `FONT_FAMILY` | Font families |
| `LINE_HEIGHT` | Line heights |
| `LETTER_SPACING` | Letter spacing |
| `ALL_SCOPES` | Colors |
