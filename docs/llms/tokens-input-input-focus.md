# Input Focus

Input Focus tokens are used to define a button or form controls focus state.

## Usage

These tokens can be applied to anything that uses a box shadow.

```css
box-shadow: var(--op-input-focus-primary);
```

## Available tokens and their definitions

| Token | Value |
| --- | --- |
| `--op-input-inner-focus` | `inset 0 0 0 var(--op-border-width-large)` |
| `--op-input-outer-focus` | `0 0 0 var(--op-border-width-x-large)` |
| `--op-input-focus-primary` | `var(--op-input-inner-focus) var(--op-color-primary-plus-two), var(--op-input-outer-focus) var(--op-color-primary-plus-five)` |
| `--op-input-focus-neutral` | `var(--op-input-inner-focus) var(--op-color-neutral-plus-two), var(--op-input-outer-focus) var(--op-color-neutral-plus-five)` |
| `--op-input-focus-danger` | `var(--op-input-inner-focus) var(--op-color-alerts-danger-plus-two), var(--op-input-outer-focus) var(--op-color-alerts-danger-plus-five)` |
| `--op-input-focus-warning` | `var(--op-input-inner-focus) var(--op-color-alerts-warning-plus-two), var(--op-input-outer-focus) var(--op-color-alerts-warning-plus-five)` |
| `--op-input-focus-info` | `var(--op-input-inner-focus) var(--op-color-alerts-info-plus-two), var(--op-input-outer-focus) var(--op-color-alerts-info-plus-five)` |
| `--op-input-focus-notice` | `var(--op-input-inner-focus) var(--op-color-alerts-notice-plus-two), var(--op-input-outer-focus) var(--op-color-alerts-notice-plus-five)` |
