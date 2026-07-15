# Line Height

Line height tokens can be used to change the line height of text.

## Usage

These tokens can be applied like:

```css
line-height: var(--op-line-height-dense);
```

## Available tokens and their definitions

| Token | Value |
| --- | --- |
| `--op-line-height-none` | `0` |
| `--op-line-height-densest` | `1` |
| `--op-line-height-denser` | `1.15` |
| `--op-line-height-dense` | `1.3` |
| `--op-line-height-base` | `1.5` |
| `--op-line-height-loose` | `1.6` |
| `--op-line-height-looser` | `1.7` |
| `--op-line-height-loosest` | `1.8` |

## Custom Font

**Note** When using a [custom font](tokens-typography-font-family.md#custom-font)

Not all fonts have the same baseline line height. This can cause alignment issues in your text that may require you to adjust the default line height tokens. You can do that by overriding these tokens

```css
:root {
  --op-line-height-looser: 3;
}
```
