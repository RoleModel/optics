# Stack

[Source Code](https://github.com/RoleModel/optics/blob/main/src/core/utilities.css)

The stack utility provides a simple way to create a vertical stack of spaced items. It
works with all of the gap and other flex utilities. It is effectively equivalent to using
`.flex .flex-col .gap-md` together. See [Utility Introduction](utilities-introduction.md#higher-order-utilities-vs-components) for more information.

See [Utility Layout](recipes-layout.md#utility) for an example of how stacks
can be used to create more readable flex layouts.

Note: This utility uses the `op` prefix to avoid potential naming conflicts with other CSS frameworks.
This is a pattern we hope to move towards for all utilities in the future.

## Playground

```html
<div class="op-stack">
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
| `stack` | `true` |  |  |
| `alignItems` |  | `stretch`, `start`, `center`, `end`, `baseline` |  |
| `gap` |  | `none`, `xxs`, `xs`, `sm`, `md`, `lg`, `xl` |  |

## Without

A normal `div` without the stack utility

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

## Stack Property

`.op-stack` Creates a flex stack.

```html
<div class="op-stack">
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

## Align Items Stretch

`.items-stretch` Stretches each item across the cross axis. This is the default alignment and doesn't need to be applied unless you are overriding something set differently.

```html
<div class="op-stack items-stretch">
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

## Align Items Start

`.items-start` places each item at the start of the cross axis.

```html
<div class="op-stack items-start">
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

## Align Items Center

`.items-center` places each item at the center of the cross axis.

```html
<div class="op-stack items-center">
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

## Align Items End

`.items-end` places each item at the end of the cross axis.

```html
<div class="op-stack items-end">
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

## Align Items Baseline

`.items-baseline` places each item at the text baseline of the cross axis.

```html
<div class="op-stack items-baseline">
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
