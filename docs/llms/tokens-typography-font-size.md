# Font Size

Font Size tokens can be used to change the size of text.

## Usage

These tokens can be applied like:

```css
font-size: var(--op-font-large);
```

## Available tokens and their definitions

| Token | Value |
| --- | --- |
| `--op-font-scale-unit` | `1rem` |
| `--op-font-2x-small` | `calc(var(--op-font-scale-unit) * 1)` |
| `--op-font-x-small` | `calc(var(--op-font-scale-unit) * 1.2)` |
| `--op-font-small` | `calc(var(--op-font-scale-unit) * 1.4)` |
| `--op-font-medium` | `calc(var(--op-font-scale-unit) * 1.6)` |
| `--op-font-large` | `calc(var(--op-font-scale-unit) * 1.8)` |
| `--op-font-x-large` | `calc(var(--op-font-scale-unit) * 2)` |
| `--op-font-2x-large` | `calc(var(--op-font-scale-unit) * 2.4)` |
| `--op-font-3x-large` | `calc(var(--op-font-scale-unit) * 2.8)` |
| `--op-font-4x-large` | `calc(var(--op-font-scale-unit) * 3.2)` |
| `--op-font-5x-large` | `calc(var(--op-font-scale-unit) * 3.6)` |
| `--op-font-6x-large` | `calc(var(--op-font-scale-unit) * 4.8)` |

The scale unit is also defined and can be used for [scale overriding](overview-scale-overriding.md#unit-scale-overriding)
