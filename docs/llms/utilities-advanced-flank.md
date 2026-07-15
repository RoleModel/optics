# Flank

[Source Code](https://github.com/RoleModel/optics/blob/main/src/core/utilities.css)

The flank utility provides a simple way to create a horizontal row with an item flanked by another large item. It
works with all of the gap and other flex utilities.

See [Utility Introduction](utilities-introduction.md#higher-order-utilities-vs-components) for more information.

See [Utility Layout](recipes-layout.md#utility) for an example of how flanks
can be used to create more readable flex layouts.

Note: This utility uses the `op` prefix to avoid potential naming conflicts with other CSS frameworks.
This is a pattern we hope to move towards for all utilities in the future.

## Playground

```html
<div class="op-flank">
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
| `flank` | `true` |  |  |
| `end` |  |  |  |
| `gap` |  | `none`, `xxs`, `xs`, `sm`, `md`, `lg`, `xl` |  |
| `example` |  |  |  |

## Without

A normal `div` without the flank utility

```html
<div class="">
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

## Flank Property

`.op-flank` Creates a flex row with an item flanked by another large item.

```html
<div class="op-flank">
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

## Flank End

`.op-flank.op-flank--end` Flips which side of the container the item is flanked to.

```html
<div class="op-flank op-flank--end">
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

## Example Flank

`.op-flank` with an avatar and text pair to demonstrate a common use case.

```html
<div style="padding: var(--op-space-large">
  <!-- Padding is for demo only, don't write inline styles -->
  <div class="op-flank">
    <div class="avatar avatar--large">
      <img src="https://avatars.githubusercontent.com/u/5957102?v=4" alt="Avatar" />
    </div>
    <div class="text-pair">
      <span class="text-pair__title">Jeremy Walton</span>
      <span class="text-pair__subtitle">RoleModel Software</span>
    </div>
  </div>
</div>
```

`.op-flank.op-flank--end` to show an alternate example.

```html
<div style="padding: var(--op-space-large">
  <!-- Padding is for demo only, don't write inline styles -->
  <div class="op-flank op-flank--end">
    <div class="text-pair text-right">
      <span class="text-pair__title">Jeremy Walton</span>
      <span class="text-pair__subtitle">RoleModel Software</span>
    </div>
    <div class="avatar avatar--large">
      <img src="https://avatars.githubusercontent.com/u/5957102?v=4" alt="Avatar" />
    </div>
  </div>
</div>
```
