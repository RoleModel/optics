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

## Step 4: Add usage documentation to generated-docs/DESIGN.md

Read `generated-docs/DESIGN.md`. The file structure is:
1. YAML frontmatter (between the opening and closing `---`)
2. Markdown body (after the closing `---`) — includes a `## Shapes` section with content

**Never modify the YAML block or any existing markdown content.**

The [DESIGN.md spec](https://github.com/google-labs-code/design.md) defines a required section order:

1. Overview
2. Colors
3. Typography
4. Layout
5. Elevation & Depth
6. Shapes ← already present in generated file
7. Components
8. Do's and Don'ts

Sections 1–5 must be **inserted before `## Shapes`** to maintain spec order. Sections 7–8 and any Optics-specific sections must be **appended after the very last line of the file**.

After all edits, ensure the file ends with a single trailing newline.

---

### Sections to insert BEFORE `## Shapes`

Insert these immediately before the `## Shapes` heading, drawing on what you found in the CSS:

#### Section: Overview

A concise description of the Optics design system's personality and purpose: a CSS-only, utility-forward system built on semantic color scales, logical spacing, and component-scoped customization. Mention light/dark mode is automatic via `light-dark()`.

#### Section: Colors

Explain the semantic luminosity scale used across all palettes:

- Scale runs from `plus-max` (lightest) → `plus-eight` through `plus-one` → `base` → `minus-one` through `minus-eight` → `minus-max` (darkest)
- `plus-*` steps are lighter; `minus-*` steps are darker
- Every step has a paired `-on-*` color guaranteed readable as text on that background
- An `-alt` variant of each `-on-*` color provides a secondary/muted text option
- Palettes: `primary`, `neutral`, `alerts-warning`, `alerts-danger`, `alerts-info`, `alerts-notice`
- Light/dark mode is automatic — all scale colors use `light-dark()`, no class toggling needed

Include a concrete example:

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

#### Section: Typography

Document every non-color token in this group with a reference table. Include:
- Font size scale (`--op-font-2x-small` through `--op-font-6x-large`) — pixel values and common use
- Font weight tokens (`--op-font-weight-thin` through `--op-font-weight-black`) — numeric values
- Font family tokens (`--op-font-family`, `--op-font-family-alt`) — family names
- Line height tokens (`--op-line-height-none` through `--op-line-height-loosest`) — numeric values
- Letter spacing tokens (`--op-letter-spacing-navigation`, `--op-letter-spacing-label`) — values and use

Show a composition example demonstrating how the tokens work together.

#### Section: Layout

Document every non-color token in this group with a reference table. Include:
- Full spacing scale (`--op-space-3x-small` through `--op-space-4x-large`) — pixel values
- `--op-size-unit` (4px) — for icon sizing and fine-grained layout
- Breakpoint tokens (`--op-breakpoint-x-small` through `--op-breakpoint-x-large`) — pixel values and viewport descriptions

Note that breakpoints are reference values only — CSS does not support custom properties in `@media` queries.

Show a usage example for padding and gap.

#### Section: Elevation & Depth

Document every non-color token in this group with a reference table. Include:
- Shadow scale (`--op-shadow-x-small` through `--op-shadow-x-large`) — use cases
- Opacity tokens (`--op-opacity-none` through `--op-opacity-full`) — values and use cases
- Input height tokens (`--op-input-height-small` through `--op-input-height-x-large`) — pixel values
- Input focus ring tokens (`--op-input-focus-primary` through `--op-input-focus-notice`) — note these are pre-composed `box-shadow` values applied directly on `:focus-visible`
- Z-index layers (`--op-z-index-header` through `--op-z-index-tooltip`) — values and layer descriptions

Note that elevation in Optics is expressed through shadows rather than color shifts.

---

### Sections to append AFTER `## Shapes` (after its content, at end of file)

#### Section: Components

Show the pattern for customizing a component instance using its public API vars (`--_op-*`), and explain that these overrides are scoped — they only affect components inside the selector:

```css
/* Make buttons taller in a specific form */
.my-form .btn {
  --_op-btn-height-medium: 44px;
}
```

Remind the reader that `--__op-` vars (double underscore) are internal and should never be set directly from outside the component. To know what a component exposes, check its CSS file for `--_op-` declarations at the top of the root rule.

#### Section: Do's and Don'ts

Practical guardrails drawn from real component patterns in the CSS source:

- Do pair every background color step with its matching `-on-*` text color
- Do use `box-shadow` for borders — never the `border` property — to preserve layout dimensions
- Do use the named transition tokens (`--op-transition-input`, `--op-transition-modal`, etc.) rather than writing raw durations
- Don't set `--__op-*` (double underscore) vars from outside a component
- Don't hardcode pixel values for spacing or font sizes — use the token scale
- Don't toggle a class to switch color schemes; `light-dark()` handles it automatically

#### Section: CSS Custom Property Conventions

Explain the three-tier naming system (Optics-specific, not in the spec):

- `--op-*` — Public design tokens. Use in any CSS to tap into the system.
- `--_op-*` — Component public API. Override on a parent selector to customize an instance.
- `--__op-*` — Component private implementation. Derived from `--_op-*`; never set externally.

#### Section: Borders

Explain that Optics renders borders via `box-shadow` instead of `border`. This preserves layout — box-shadow does not affect element dimensions or document flow.

Show usage examples (outline, inset, multiple borders).

Document every non-color token in this group with a reference table. Include:
- Border direction tokens (`--op-border-all`, `--op-border-top`, etc.) — directions, noting that `--op-border-x` and `--op-border-y` are pre-composed with `var(--op-color-border)`
- Border width tokens (`--op-border-width`, `--op-border-width-large`, `--op-border-width-x-large`) — pixel values and typical use (default, focus inner ring, focus outer ring)
- Border radius tokens (`--op-radius-small` through `--op-radius-pill`) — pixel values and use cases

#### Section: Transitions and Animation

List named transitions and their intended contexts:

- `--op-transition-input` — hover/focus changes on interactive controls (120ms, fast/snappy)
- `--op-transition-accordion` — rotation of disclosure markers (120ms)
- `--op-transition-accordion-content` — accordion panel open/close (300ms, height + content-visibility)
- `--op-transition-modal` — modal appear/disappear (300ms)
- `--op-transition-sidebar` — sidebar slide in/out (200ms)
- `--op-transition-panel` — side panel entry from right (400ms)
- `--op-transition-tooltip` — tooltip delayed reveal (300ms + 300ms delay)

---

## Format and tone

- Write for a developer who knows CSS but is new to Optics
- Use `##` for top-level sections, `###` for subsections
- Code examples for every pattern — prefer one-liners where sufficient, multi-line when structure matters
- Keep prose tight — let examples carry the explanation
- Do not duplicate values already in the YAML frontmatter (the token values are there; this section is about _how to use_ them)
- If the CSS source reveals any surprising patterns or workarounds not covered above, document them too
