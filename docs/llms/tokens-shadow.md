# Shadow

[Source Code](https://github.com/RoleModel/optics/blob/main/src/core/tokens/base_tokens.css)

Shadow tokens can be used to create an elevation effect on any element. There are also [Card classes](components-card.md#shadow) to create an elevated card effect.

## Usage

These tokens can be applied as box shadows.

```css
box-shadow: var(--op-shadow-x-small);
/* or */
box-shadow: var(--op-shadow-x-large);
```

## Available tokens and their definitions

### Light Mode

| Token | Value |
| --- | --- |
| `--op-shadow-x-small` | `0 1px 2px hsl(0deg 0% 0% / 3%), 0 1px 3px hsl(0deg 0% 0% / 15%)` |
| `--op-shadow-small` | `0 1px 2px hsl(0deg 0% 0% / 3%), 0 2px 6px hsl(0deg 0% 0% / 15%)` |
| `--op-shadow-medium` | `0 4px 8px hsl(0deg 0% 0% / 15%), 0 1px 3px hsl(0deg 0% 0% / 3%)` |
| `--op-shadow-large` | `0 6px 10px hsl(0deg 0% 0% / 15%), 0 2px 3px hsl(0deg 0% 0% / 3%)` |
| `--op-shadow-x-large` | `0 8px 12px hsl(0deg 0% 0% / 15%), 0 4px 4px hsl(0deg 0% 0% / 3%)` |

### Dark Mode

| Token | Value |
| --- | --- |
| `--op-color-background` | `var(--op-color-neutral-plus-eight)` |
| `--op-color-on-background` | `var(--op-color-neutral-on-plus-eight)` |
| `--op-color-on-background-alt` | `var(--op-color-neutral-on-plus-eight-alt)` |
| `--op-shadow-x-small` | `0 1px 3px hsl(0deg 0% 0% / 15%), 0 1px 2px hsl(0deg 0% 0% / 30%)` |
| `--op-shadow-small` | `0 2px 6px hsl(0deg 0% 0% / 15%), 0 1px 2px hsl(0deg 0% 0% / 30%)` |
| `--op-shadow-medium` | `0 4px 8px hsl(0deg 0% 0% / 15%), 0 1px 3px hsl(0deg 0% 0% / 30%)` |
| `--op-shadow-large` | `0 6px 10px hsl(0deg 0% 0% / 15%), 0 2px 3px hsl(0deg 0% 0% / 30%)` |
| `--op-shadow-x-large` | `0 8px 12px hsl(0deg 0% 0% / 15%), 0 4px 4px hsl(0deg 0% 0% / 30%)` |
| `--op-shadow-x-small` | `0 1px 3px hsl(0deg 0% 0% / 15%), 0 1px 2px hsl(0deg 0% 0% / 30%)` |
| `--op-shadow-small` | `0 2px 6px hsl(0deg 0% 0% / 15%), 0 1px 2px hsl(0deg 0% 0% / 30%)` |
| `--op-shadow-medium` | `0 4px 8px hsl(0deg 0% 0% / 15%), 0 1px 3px hsl(0deg 0% 0% / 30%)` |
| `--op-shadow-large` | `0 6px 10px hsl(0deg 0% 0% / 15%), 0 2px 3px hsl(0deg 0% 0% / 30%)` |
| `--op-shadow-x-large` | `0 8px 12px hsl(0deg 0% 0% / 15%), 0 4px 4px hsl(0deg 0% 0% / 30%)` |
