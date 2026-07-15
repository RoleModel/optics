# Animation

[Source Code](https://github.com/RoleModel/optics/blob/main/src/core/tokens/base_tokens.css)

Animation and Transition tokens can be used for element transitions or animations.

## Playground

```html
<div class="transition-demo transition-demo--input (120ms)">input (120ms) Hover Me!</div>
```
| Arg | Default | Options | Description |
| --- | --- | --- | --- |
| `speed` | `"input (120ms)"` | `accordion (120ms)`, `accordion_content (300ms)`, `input (120ms)`, `sidebar (200ms)`, `modal (300ms)`, `panel (400ms)` |  |

## Usage

These tokens can be applied as a transition.

```css
transition: var(--op-transition-input);
/* or */
animation: var(--op-animation-flash);
```

## Available tokens and their definitions

| Token | Value |
| --- | --- |
| `--op-transition-accordion` | `rotate 120ms ease-in` |
| `--op-transition-accordion-content` | `height 300ms ease, content-visibility 300ms ease allow-discrete` |
| `--op-transition-input` | `all 120ms ease-in` |
| `--op-transition-sidebar` | `all 200ms ease-in-out` |
| `--op-transition-modal-time` | `300ms` |
| `--op-transition-modal` | `all var(--op-transition-modal-time) ease-in` |
| `--op-transition-panel` | `right 400ms ease-in` |
| `--op-transition-tooltip` | `all 300ms ease-in 300ms` |

| Token | Value |
| --- | --- |
| `--op-animation-flash` | `rm-slide-in-out-flash 5s normal forwards` |
