# Grid

[Source Code](https://github.com/RoleModel/optics/blob/main/src/core/utilities.css)

The grid utility provides a simple way to create a dynamic grid layout. It is primarily intended for simple layouts with a minimum column size, or evenly divided columns from 2 to 6.

See [Utility Introduction](utilities-introduction.md#higher-order-utilities-vs-components) for more information.

Note: This utility uses the `op` prefix to avoid potential naming conflicts with other CSS frameworks.
This is a pattern we hope to move towards for all utilities in the future.

## Playground

```html
<div style="height: 10rem" class="op-grid">
  <div
    style="
      min-width: var(--op-space-x-large);
      min-height: var(--op-space-x-large);
      background-color: var(--op-color-primary-original);
    "
  ></div>
  <div
    style="
      min-width: var(--op-space-x-large);
      min-height: var(--op-space-x-large);
      background-color: var(--op-color-primary-original);
    "
  ></div>
  <div
    style="
      min-width: var(--op-space-x-large);
      min-height: var(--op-space-x-large);
      background-color: var(--op-color-primary-original);
    "
  ></div>
  <div
    style="
      min-width: var(--op-space-x-large);
      min-height: var(--op-space-x-large);
      background-color: var(--op-color-primary-original);
    "
  ></div>
  <div
    style="
      min-width: var(--op-space-x-large);
      min-height: var(--op-space-x-large);
      background-color: var(--op-color-primary-original);
    "
  ></div>
  <div
    style="
      min-width: var(--op-space-x-large);
      min-height: var(--op-space-x-large);
      background-color: var(--op-color-primary-original);
    "
  ></div>
  <div
    style="
      min-width: var(--op-space-x-large);
      min-height: var(--op-space-x-large);
      background-color: var(--op-color-primary-original);
    "
  ></div>
  <div
    style="
      min-width: var(--op-space-x-large);
      min-height: var(--op-space-x-large);
      background-color: var(--op-color-primary-original);
    "
  ></div>
  <div
    style="
      min-width: var(--op-space-x-large);
      min-height: var(--op-space-x-large);
      background-color: var(--op-color-primary-original);
    "
  ></div>
  <div
    style="
      min-width: var(--op-space-x-large);
      min-height: var(--op-space-x-large);
      background-color: var(--op-color-primary-original);
    "
  ></div>
</div>
```
| Arg | Default | Options | Description |
| --- | --- | --- | --- |
| `grid` | `true` |  |  |
| `gap` |  | `none`, `xxs`, `xs`, `sm`, `md`, `lg`, `xl` |  |
| `columns` |  |  |  |

## Without

A normal `div` without the grid utility

```html
<div style="height: 10rem" class="">
  <div
    style="
      min-width: var(--op-space-x-large);
      min-height: var(--op-space-x-large);
      background-color: var(--op-color-primary-original);
    "
  ></div>
  <div
    style="
      min-width: var(--op-space-x-large);
      min-height: var(--op-space-x-large);
      background-color: var(--op-color-primary-original);
    "
  ></div>
  <div
    style="
      min-width: var(--op-space-x-large);
      min-height: var(--op-space-x-large);
      background-color: var(--op-color-primary-original);
    "
  ></div>
  <div
    style="
      min-width: var(--op-space-x-large);
      min-height: var(--op-space-x-large);
      background-color: var(--op-color-primary-original);
    "
  ></div>
  <div
    style="
      min-width: var(--op-space-x-large);
      min-height: var(--op-space-x-large);
      background-color: var(--op-color-primary-original);
    "
  ></div>
  <div
    style="
      min-width: var(--op-space-x-large);
      min-height: var(--op-space-x-large);
      background-color: var(--op-color-primary-original);
    "
  ></div>
  <div
    style="
      min-width: var(--op-space-x-large);
      min-height: var(--op-space-x-large);
      background-color: var(--op-color-primary-original);
    "
  ></div>
  <div
    style="
      min-width: var(--op-space-x-large);
      min-height: var(--op-space-x-large);
      background-color: var(--op-color-primary-original);
    "
  ></div>
  <div
    style="
      min-width: var(--op-space-x-large);
      min-height: var(--op-space-x-large);
      background-color: var(--op-color-primary-original);
    "
  ></div>
  <div
    style="
      min-width: var(--op-space-x-large);
      min-height: var(--op-space-x-large);
      background-color: var(--op-color-primary-original);
    "
  ></div>
</div>
```

## Two columns

```html
<div style="height: 10rem" class="op-grid op-grid--2-column">
  <div
    style="
      min-width: var(--op-space-x-large);
      min-height: var(--op-space-x-large);
      background-color: var(--op-color-primary-original);
    "
  ></div>
  <div
    style="
      min-width: var(--op-space-x-large);
      min-height: var(--op-space-x-large);
      background-color: var(--op-color-primary-original);
    "
  ></div>
  <div
    style="
      min-width: var(--op-space-x-large);
      min-height: var(--op-space-x-large);
      background-color: var(--op-color-primary-original);
    "
  ></div>
  <div
    style="
      min-width: var(--op-space-x-large);
      min-height: var(--op-space-x-large);
      background-color: var(--op-color-primary-original);
    "
  ></div>
  <div
    style="
      min-width: var(--op-space-x-large);
      min-height: var(--op-space-x-large);
      background-color: var(--op-color-primary-original);
    "
  ></div>
  <div
    style="
      min-width: var(--op-space-x-large);
      min-height: var(--op-space-x-large);
      background-color: var(--op-color-primary-original);
    "
  ></div>
  <div
    style="
      min-width: var(--op-space-x-large);
      min-height: var(--op-space-x-large);
      background-color: var(--op-color-primary-original);
    "
  ></div>
  <div
    style="
      min-width: var(--op-space-x-large);
      min-height: var(--op-space-x-large);
      background-color: var(--op-color-primary-original);
    "
  ></div>
  <div
    style="
      min-width: var(--op-space-x-large);
      min-height: var(--op-space-x-large);
      background-color: var(--op-color-primary-original);
    "
  ></div>
  <div
    style="
      min-width: var(--op-space-x-large);
      min-height: var(--op-space-x-large);
      background-color: var(--op-color-primary-original);
    "
  ></div>
</div>
```

## Six columns

```html
<div style="height: 10rem" class="op-grid op-grid--6-column">
  <div
    style="
      min-width: var(--op-space-x-large);
      min-height: var(--op-space-x-large);
      background-color: var(--op-color-primary-original);
    "
  ></div>
  <div
    style="
      min-width: var(--op-space-x-large);
      min-height: var(--op-space-x-large);
      background-color: var(--op-color-primary-original);
    "
  ></div>
  <div
    style="
      min-width: var(--op-space-x-large);
      min-height: var(--op-space-x-large);
      background-color: var(--op-color-primary-original);
    "
  ></div>
  <div
    style="
      min-width: var(--op-space-x-large);
      min-height: var(--op-space-x-large);
      background-color: var(--op-color-primary-original);
    "
  ></div>
  <div
    style="
      min-width: var(--op-space-x-large);
      min-height: var(--op-space-x-large);
      background-color: var(--op-color-primary-original);
    "
  ></div>
  <div
    style="
      min-width: var(--op-space-x-large);
      min-height: var(--op-space-x-large);
      background-color: var(--op-color-primary-original);
    "
  ></div>
  <div
    style="
      min-width: var(--op-space-x-large);
      min-height: var(--op-space-x-large);
      background-color: var(--op-color-primary-original);
    "
  ></div>
  <div
    style="
      min-width: var(--op-space-x-large);
      min-height: var(--op-space-x-large);
      background-color: var(--op-color-primary-original);
    "
  ></div>
  <div
    style="
      min-width: var(--op-space-x-large);
      min-height: var(--op-space-x-large);
      background-color: var(--op-color-primary-original);
    "
  ></div>
  <div
    style="
      min-width: var(--op-space-x-large);
      min-height: var(--op-space-x-large);
      background-color: var(--op-color-primary-original);
    "
  ></div>
</div>
```
