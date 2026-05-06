---
name: generate-design-md
description: Regenerate the Optics DESIGN.md design token file and enrich it with CSS usage documentation. Use this skill when asked to update design tokens, regenerate DESIGN.md, run `yarn design-tokens`, sync token docs, or add context and usage examples to the token file. Always use this skill before suggesting CSS variable changes to a consumer of the Optics design system.
allowed-tools: Bash(yarn design-tokens) Bash(yarn design-tokens:lint)
compatibility: Designed for Claude Code (or similar products)
metadata:
  author: rolemodel
  version: "1.0"
  triggers: "Generate DESIGN.md, build a design file, build a DESIGN.md, generate a design file"
license: MIT
---

# Design Tokens Skill

Regenerate `dist/DESIGN.md` from CSS source, verify it passes the linter, then append human-readable usage documentation to help developers — and AI coding agents — work with the Optics design system correctly.

## Step 1: Regenerate

```bash
yarn design-tokens
```

If this fails, report the error and stop — do not proceed to lint or append.

## Step 2: Lint

```bash
yarn design-tokens:lint
```

If lint fails, report the errors and stop. The DESIGN.md is not valid until lint passes.

## Step 3: Read CSS source for context

Read these files before writing any documentation:

- `src/core/tokens/base_tokens.css` — all primitive token declarations with inline comments
- `src/core/tokens/scale_color_tokens.css` — the color scale structure and light/dark mode patterns
- Every `.css` file in `src/components/` except `index.css` — real component usage patterns

As you read, note:
- Every `var(--op-...)` usage — these are the tokens in practice
- The box-shadow border technique (borders avoid `border:` property; they use `box-shadow` so borders don't affect layout)
- How components expose a public customization API with `--_op-` prefixed vars at the top of their rule
- How components use `--__op-` vars internally (private, derived from the public `--_op-` vars)
- Color naming — the `plus`/`minus` luminosity scale and how `on-` variants pair with backgrounds
- Any inline comments that explain why a pattern exists (especially workarounds or surprises)

## Step 4: Append usage documentation to generated-docs/DESIGN.md

Read `generated-docs/DESIGN.md`. The file structure is:
1. YAML frontmatter (between the opening and closing `---`)
2. Markdown body (after the closing `---`) — includes a `## Shapes` section with content

**Important:** The `## Shapes` section has content below its heading — do not inject between the heading and its body. Append all new sections after the very last line of the file (after the Shapes section content). Never modify the YAML block or any existing markdown content.

After appending, ensure the file ends with a single trailing newline.

Write the following sections, drawing on what you actually found in the CSS:

---

### Section: CSS Custom Property Conventions

Explain the three-tier naming system:

- `--op-*` — Public design tokens. Use these in any CSS to tap into the system.
- `--_op-*` — Component public API. Override these on a parent to customize a component instance without touching its internals.
- `--__op-*` — Component private implementation. These are internal defaults derived from the public API; do not reference them from outside the component.

### Section: Color System

Explain the semantic luminosity scale:

- Colors are organized in a lightness scale: `plus-max`, `plus-eight` → `plus-one`, `base`, `minus-one` → `minus-eight`, `minus-max`
- `plus-*` steps are lighter (toward white); `minus-*` steps are darker (toward black)
- Every step has a paired `-on-*` color that is guaranteed to be readable as text on that step's background (e.g. `--op-color-primary-on-base` for text on `--op-color-primary-base`)
- An `-alt` variant exists for each `-on-*` color as a secondary text option
- Color palettes available: `primary`, `neutral`, `alerts-warning`, `alerts-danger`, `alerts-info`, `alerts-notice`
- Light/dark mode is handled automatically via CSS `light-dark()` — no class toggling needed

Include a concrete example showing a background + text pair and an interactive state:

```css
.my-card {
  background-color: var(--op-color-primary-plus-eight);
  color: var(--op-color-primary-on-plus-eight);
}
.my-card:hover {
  background-color: var(--op-color-primary-plus-seven);
  color: var(--op-color-primary-on-plus-seven);
}
```

### Section: Borders

Explain that Optics renders borders via `box-shadow` instead of the `border` CSS property. This preserves layout — box-shadow does not affect element dimensions or document flow.

Pattern:
```css
/* Outline border (doesn't affect layout) */
box-shadow: var(--op-border-all) var(--op-color-border);

/* Inset border (common inside components) */
box-shadow: inset var(--op-border-all) var(--op-color-neutral-plus-four);

/* Multiple borders */
box-shadow: var(--op-border-top) var(--op-color-border), var(--op-border-bottom) var(--op-color-border);
```

Available direction tokens: `--op-border-all`, `--op-border-top`, `--op-border-right`, `--op-border-bottom`, `--op-border-left`, `--op-border-x` (left+right), `--op-border-y` (top+bottom), `--op-border-none`

### Section: Spacing

Explain the scale unit (`--op-space-scale-unit: 1rem` = 10px at root `font-size: 62.5%`) and list the scale with pixel values. Show a typical usage example for padding and gap.

### Section: Typography

Cover the font-size scale (same 10px scale unit), font-weight named tokens (thin through black), and font-family tokens (default Noto Sans, alt Noto Serif). Show how they compose:

```css
.my-label {
  font-size: var(--op-font-small);       /* 14px */
  font-weight: var(--op-font-weight-medium);
  letter-spacing: var(--op-letter-spacing-label);
  line-height: var(--op-line-height-dense);
}
```

### Section: Elevation

Explain z-index naming (what each layer is for: `header`, `footer`, `sidebar`, `dialog`, `dropdown`, `tooltip`) and the shadow scale (`x-small` through `x-large`).

### Section: Transitions and Animation

List the named transitions and their intended contexts:
- `--op-transition-input` — hover/focus state changes on interactive controls (fast: 120ms)
- `--op-transition-accordion` — rotation of disclosure markers
- `--op-transition-accordion-content` — accordion panel open/close
- `--op-transition-modal` — modal appear/disappear (300ms)
- `--op-transition-sidebar` — sidebar slide in/out
- `--op-transition-panel` — side panel entry
- `--op-transition-tooltip` — tooltip delayed reveal

### Section: Component Customization

Show the pattern for customizing a component instance using its public API vars, and explain that these overrides are scoped — they only affect components inside the selector:

```css
/* Make buttons taller in a specific form */
.my-form .btn {
  --_op-btn-height-medium: 44px;
}

/* Use the customization pattern when available on a component;
   check the component's CSS for --_op- vars to know what's customizable */
```

Remind the reader that `--__op-` vars (double underscore) are internal and should never be set directly from outside the component.

---

## Format and tone

- Write for a developer who knows CSS but is new to Optics
- Use `##` for top-level sections, `###` for subsections
- Code examples for every pattern — prefer one-liners where sufficient, multi-line when structure matters
- Keep prose tight — let examples carry the explanation
- Do not duplicate values already in the YAML frontmatter (the token values are there; this section is about _how to use_ them)
- If the CSS source reveals any surprising patterns or workarounds not covered above, document them too
