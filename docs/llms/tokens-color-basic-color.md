# Basic Color

[Source Code](https://github.com/RoleModel/optics/blob/main/src/core/tokens/base_tokens.css)

Basic color tokens can be used to define exact colors.

The background colors use the color scale and will adjust in dark mode.

## Usage

These tokens can be applied to anything that supports color.

```css
body {
  background-color: var(--op-color-background);
  color: var(--op-color-on-background);
}
/* or */
color: var(--op-color-white);
```

## Available tokens and their definitions

| Token | Value |
| --- | --- |
| `--op-color-white` | `hsl(0deg 100% 100%)` |
| `--op-color-black` | `hsl(0deg 0% 0%)` |
