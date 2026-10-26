# Icon

An icon from the app's icon pack, or an inline SVG. For props, modifiers, and variables, see [icon.spec.json](./icon.spec.json).

## Load it

An app uses one icon pack. The default is Material Symbols.

### 1. CSS: the icon and one pack

Import `icon.css` and one pack file from [packs/](./packs). The pack file loads the font. `icon.css` loads no font.

```css
@import './icon.css';
@import './packs/material-symbols.css';
```

| Pack               | Import                                                | Supports                                    |
| ------------------ | ----------------------------------------------------- | ------------------------------------------- |
| `material-symbols` | `packs/material-symbols.css` (smaller)                | Size and weight                             |
| `material-symbols` | `packs/material-symbols-variable.css` (larger)        | Size, weight, fill, and emphasis            |
| `phosphor`         | `packs/phosphor.css`, plus one file per style you use | Size, and the styles you import (see below) |
| `tabler`           | `packs/tabler.css`                                    | Size and fill                               |
| `feather`          | `packs/feather.css`                                   | Size                                        |
| `lucide`           | `packs/lucide.css`                                    | Size                                        |

Each Phosphor style is its own font. Import only the ones you use:

| Usage            | Import                       |
| ---------------- | ---------------------------- |
| `weight="thin"`  | `packs/phosphor-thin.css`    |
| `weight="light"` | `packs/phosphor-light.css`   |
| `weight="bold"`  | `packs/phosphor-bold.css`    |
| `filled`         | `packs/phosphor-fill.css`    |
| `duotone`        | `packs/phosphor-duotone.css` |

An icon that uses a style you did not import is blank.

### 2. JS: the component and the pack

Import the web component, the React component, or both.

```js
import './icon.js' // <op-icon>
import { Icon } from './Icon.jsx' // <Icon>
```

For a pack other than Material Symbols, call `setIconPack()` once, at startup, before icons render. Use the same pack as the CSS import, or icons are blank.

```js
import { setIconPack } from './glyph.js'

setIconPack('lucide')
```

## Use it

<!-- prettier-ignore -->
```html
<op-icon name="settings" size="large"></op-icon>
<op-icon name="delete" label="Delete"></op-icon>
```

```jsx
<Icon name="settings" size="large" />
<Icon name="delete" label="Delete" />
```

The name is the icon's name in the app's pack, like `settings` in Material Symbols or `banana` in Lucide. With no `label`, the icon is hidden from screen readers.

### SVG icons

Leave out `name` and put an inline `<svg>` inside. It needs no pack. The SVG fills the icon and uses `currentColor`.

```html
<op-icon size="large">
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">…</svg>
</op-icon>
```

### Plain HTML

With no JS, write the classes and ARIA attributes yourself. Material Symbols draws the name as text. Other packs draw the icon from their classes.

```html
<span class="icon icon--large" aria-hidden="true">settings</span>
<span class="icon icon--large li li-banana" aria-hidden="true"></span>
```

## Demo

Run `yarn next:demo`, then open `icon.html` for Material Symbols, or `icon-packs.html?pack=lucide` for one of the other packs.
