# Container

[Source Code](https://github.com/RoleModel/optics/blob/main/src/core/utilities.css)

Container utility classes are used to create a centered content area for your application.

You may need to zoom the demos out depending on your screen size to see the full effect.

## Playground

```html
<div style="background-color: var(--op-color-alerts-warning-base); height: 30rem">
  <div style="background-color: var(--op-color-alerts-notice-base); height: 100%" class="container">
    <div style="background-color: var(--op-color-primary-base); height: 100%"></div>
  </div>
</div>
```
| Arg | Default | Options | Description |
| --- | --- | --- | --- |
| `size` |  | ``, `sm`, `xs` |  |
| `padding` |  | ``, `sm`, `md` |  |

## Default

`.container` Create a container area set to be the size of `--op-breakpoint-medium` with a padding of `--op-space-large`

```html
<div style="background-color: var(--op-color-alerts-warning-base); height: 30rem">
  <div style="background-color: var(--op-color-alerts-notice-base); height: 100%" class="container">
    <div style="background-color: var(--op-color-primary-base); height: 100%"></div>
  </div>
</div>
```

## Small Size

`.container--sm` Change the container size to `--op-breakpoint-small`

```html
<div style="background-color: var(--op-color-alerts-warning-base); height: 30rem">
  <div
    style="background-color: var(--op-color-alerts-notice-base); height: 100%"
    class="container container--sm"
  >
    <div style="background-color: var(--op-color-primary-base); height: 100%"></div>
  </div>
</div>
```

## Extra Small Size

`.container--xs` Change the container size to `--op-breakpoint-x-small`

```html
<div style="background-color: var(--op-color-alerts-warning-base); height: 30rem">
  <div
    style="background-color: var(--op-color-alerts-notice-base); height: 100%"
    class="container container--xs"
  >
    <div style="background-color: var(--op-color-primary-base); height: 100%"></div>
  </div>
</div>
```

## Small Padding

`.container--sm-padding` Change the padding of the container to use the `--op-space-small` token

```html
<div style="background-color: var(--op-color-alerts-warning-base); height: 30rem">
  <div
    style="background-color: var(--op-color-alerts-notice-base); height: 100%"
    class="container container--sm-padding"
  >
    <div style="background-color: var(--op-color-primary-base); height: 100%"></div>
  </div>
</div>
```

## Medium Padding

`.container--md-padding` Change the padding of the container to use the `--op-space-medium` token

```html
<div style="background-color: var(--op-color-alerts-warning-base); height: 30rem">
  <div
    style="background-color: var(--op-color-alerts-notice-base); height: 100%"
    class="container container--md-padding"
  >
    <div style="background-color: var(--op-color-primary-base); height: 100%"></div>
  </div>
</div>
```
