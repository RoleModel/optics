# Optics — Agent Instructions

Optics is a CSS-only design system by RoleModel Software. It ships as an npm package consumed by Rails and other web apps. There is no JavaScript, no build framework for components — just CSS custom properties, BEM-style component classes, and Storybook for documentation.

## Project layout

```
src/
  core/
    tokens/
      base_tokens.css        # Primitive tokens: spacing, typography, borders, transitions
      scale_color_tokens.css # Color scale (plus/minus luminosity steps, light-dark())
    base.css
    layout.css
    utilities.css
  components/                # One file per component (BEM classes)
  addons/                    # Optional add-on stylesheets
dist/                        # Build output (do not edit by hand)
generated-docs/              # Generated design token docs (DESIGN.md, design-tokens.json)
plans/                       # Planning and reference docs (not enforced in code)
tools/                       # Node scripts for code generation
src/stories/                 # Storybook stories and documentation
```

## CSS conventions

### Token naming

- `--op-*` — Public design tokens. Available globally. Use these in component CSS and consumer apps.
- `--_op-*` — Component public API. Defined at the top of a component rule with defaults. Consumers can override these on a parent selector to customize an instance.
- `--__op-*` — Component private implementation. Derived from `--_op-*`; used internally. Never set from outside the component.

### Color system

Colors follow a luminosity scale borrowed from photography f-stops:

```
plus-max · plus-eight → plus-one · base · minus-one → minus-eight · minus-max
```

- `plus-*` = lighter, `minus-*` = darker
- Every step has a paired `-on-*` color guaranteed readable as text on that background
- An `-alt` variant exists for secondary/muted text
- Light/dark mode is handled automatically via CSS `light-dark()` — no class toggling needed
- Palettes: `primary`, `neutral`, `alerts-warning`, `alerts-danger`, `alerts-info`, `alerts-notice`

### Borders

Borders are rendered with `box-shadow` (not `border:`) so they don't affect layout or element dimensions:

```css
box-shadow: var(--op-border-all) var(--op-color-border);
box-shadow: inset var(--op-border-all) var(--op-color-neutral-plus-four);
```

Direction tokens: `--op-border-all`, `--op-border-top`, `--op-border-right`, `--op-border-bottom`, `--op-border-left`, `--op-border-x`, `--op-border-y`, `--op-border-none`

### Component structure (BEM)

```css
.component-name {
  /* --_op- public API vars first */
  /* --__op- private resolved vars next */
  /* base styles */

  .component-name__element { }

  &.component-name--modifier { }
  &.component-name--variant { }
}
```

Modifiers nest inside the root rule using `&.component-name--variant`. See `src/components/button.css` or `src/components/badge.css` for reference.

## Common tasks

### Adding a component

Follow `NEW_COMPONENT.md`. Create `src/components/{name}.css` and add it to `src/components/index.css`. Add a Storybook story under `src/stories/Components/`.

### Updating design tokens

Run `/generate_design_md` (Claude Code skill) or manually:

```sh
yarn design-tokens        # regenerates generated-docs/DESIGN.md
yarn design-tokens:lint   # validates the output
```

### Building

```sh
yarn build          # full build to dist/
yarn lint           # JS + CSS lint
yarn storybook      # local Storybook dev server
```

### Storybook token docs

Tag CSS token groups for Storybook with:

```css
/**
 * @tokens Group Name
 * @presenter Color   /* or: Spacing, FontSize, FontWeight, Shadow, etc. */
 */
```

## Key constraints

- No JavaScript in components. Interactivity is handled by consumers.
- Do not edit files in `dist/` or `generated-docs/` by hand — they are generated.
- CSS is written in modern CSS (nesting, `light-dark()`, logical properties like `padding-block`).
- `src/addons/` contains optional stylesheets that consumers opt into separately; keep them independent of core.
