# Spacing Size

[Source Code](https://github.com/RoleModel/optics/blob/main/src/core/tokens/base_tokens.css)

The Spacing Size tokens enable creating scalable spaces for your application. They can be used for margin, padding, gap, and anything else that is intended for spacing.

## Usage

These tokens can be applied like:

```css
margin-inline-start: var(--op-space-small);
/* Or */
padding-block-start: var(--op-space-medium);
/* Or */
gap: var(--op-space-large);
```

## Available tokens and their definitions

| Token | Value |
| --- | --- |
| `--op-space-scale-unit` | `1rem` |
| `--op-space-3x-small` | `calc(var(--op-space-scale-unit) * 0.2)` |
| `--op-space-2x-small` | `calc(var(--op-space-scale-unit) * 0.4)` |
| `--op-space-x-small` | `calc(var(--op-space-scale-unit) * 0.8)` |
| `--op-space-small` | `calc(var(--op-space-scale-unit) * 1.2)` |
| `--op-space-medium` | `calc(var(--op-space-scale-unit) * 1.6)` |
| `--op-space-large` | `calc(var(--op-space-scale-unit) * 2)` |
| `--op-space-x-large` | `calc(var(--op-space-scale-unit) * 2.4)` |
| `--op-space-2x-large` | `calc(var(--op-space-scale-unit) * 2.8)` |
| `--op-space-3x-large` | `calc(var(--op-space-scale-unit) * 4)` |
| `--op-space-4x-large` | `calc(var(--op-space-scale-unit) * 8)` |

The scale unit is also defined and can be used for [scale overriding](overview-scale-overriding.md#unit-scale-overriding)
