# Size

[Source Code](https://github.com/RoleModel/optics/blob/main/src/core/tokens/base_tokens.css)

The Size token enables creating scalable widths (inline-size) and heights (block-size) for your application. It is meant to be used in a `calc` expression with whole numbers. This ensures any sizes you create will be a multiple of 4px.

## Usage

These tokens can be applied like:

```css
block-size: calc(11 * var(--op-size-unit)); /* 44px */
/* Or */
inline-size: calc(54 * var(--op-size-unit)); /* 216px */
```

## Available tokens and their definitions

| Token | Value |
| --- | --- |
| `--op-size-unit` | `0.4rem` |

The size unit can be overridden if you want to change the scale or size basis. See [scale overriding](overview-scale-overriding.md#unit-scale-overriding)
