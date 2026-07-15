# Frame

[Source Code](https://github.com/RoleModel/optics/blob/main/src/core/utilities.css)

The frame utility provides a simple way to constrain content to a consistent aspect ratio. It centers its content
and clips any overflow, so whatever it wraps fills a fixed shape regardless of its intrinsic dimensions.

While it's a natural fit for media like images and videos, the frame isn't limited to them — its primary job is
enforcing the aspect ratio, so it works just as well for cards, map embeds, charts, or any element that should hold
a fixed shape.

See [Utility Introduction](utilities-introduction.md#higher-order-utilities-vs-components) for more information.

See [Card Grid Layout](recipes-layout.md#card-grid) for an example of how frames
can be used to keep media at a consistent aspect ratio within a card grid.

Note: This utility uses the `op` prefix to avoid potential naming conflicts with other CSS frameworks.
This is a pattern we hope to move towards for all utilities in the future.

## Playground

```html
<div style="max-inline-size: 20rem; padding: var(--op-space-large)">
  <!-- Sizing is for demo only, don't write inline styles -->
  <div class="op-frame">
    <img
      src="https://images.unsplash.com/photo-1517849845537-4d257902454a?w=800&q=80"
      alt="A dog looking at the camera"
    />
  </div>
</div>
```
| Arg | Default | Options | Description |
| --- | --- | --- | --- |
| `frame` | `true` |  |  |
| `aspect` |  | `square`, `landscape`, `portrait`, `4-3`, `3-4`, `3-2`, `2-3` |  |
| `inlineSize` |  |  |  |

## Without

A normal `div` without the frame utility

```html
<div style="max-inline-size: 20rem; padding: var(--op-space-large)">
  <!-- Sizing is for demo only, don't write inline styles -->
  <div class="">
    <img
      src="https://images.unsplash.com/photo-1517849845537-4d257902454a?w=800&q=80"
      alt="A dog looking at the camera"
    />
  </div>
</div>
```

## Square

`.op-frame.op-frame--square` Crops media to a 1:1 aspect ratio. This is also the default when no aspect modifier is applied.

```html
<div style="max-inline-size: 20rem; padding: var(--op-space-large)">
  <!-- Sizing is for demo only, don't write inline styles -->
  <div class="op-frame op-frame--square">
    <img
      src="https://images.unsplash.com/photo-1517849845537-4d257902454a?w=800&q=80"
      alt="A dog looking at the camera"
    />
  </div>
</div>
```

## Landscape

`.op-frame.op-frame--landscape` Crops media to a 16:9 aspect ratio.

```html
<div style="max-inline-size: 20rem; padding: var(--op-space-large)">
  <!-- Sizing is for demo only, don't write inline styles -->
  <div class="op-frame op-frame--landscape">
    <img
      src="https://images.unsplash.com/photo-1517849845537-4d257902454a?w=800&q=80"
      alt="A dog looking at the camera"
    />
  </div>
</div>
```

## Portrait

`.op-frame.op-frame--portrait` Crops media to a 9:16 aspect ratio.

```html
<div style="max-inline-size: 20rem; padding: var(--op-space-large)">
  <!-- Sizing is for demo only, don't write inline styles -->
  <div class="op-frame op-frame--portrait">
    <img
      src="https://images.unsplash.com/photo-1517849845537-4d257902454a?w=800&q=80"
      alt="A dog looking at the camera"
    />
  </div>
</div>
```

## 4:3

`.op-frame.op-frame--4-3` Crops media to a 4:3 aspect ratio.

```html
<div style="max-inline-size: 20rem; padding: var(--op-space-large)">
  <!-- Sizing is for demo only, don't write inline styles -->
  <div class="op-frame op-frame--4-3">
    <img
      src="https://images.unsplash.com/photo-1517849845537-4d257902454a?w=800&q=80"
      alt="A dog looking at the camera"
    />
  </div>
</div>
```

## 3:4

`.op-frame.op-frame--3-4` Crops media to a 3:4 (inverse of 4:3) aspect ratio.

```html
<div style="max-inline-size: 20rem; padding: var(--op-space-large)">
  <!-- Sizing is for demo only, don't write inline styles -->
  <div class="op-frame op-frame--3-4">
    <img
      src="https://images.unsplash.com/photo-1517849845537-4d257902454a?w=800&q=80"
      alt="A dog looking at the camera"
    />
  </div>
</div>
```

## 3:2

`.op-frame.op-frame--3-2` Crops media to a 3:2 aspect ratio.

```html
<div style="max-inline-size: 20rem; padding: var(--op-space-large)">
  <!-- Sizing is for demo only, don't write inline styles -->
  <div class="op-frame op-frame--3-2">
    <img
      src="https://images.unsplash.com/photo-1517849845537-4d257902454a?w=800&q=80"
      alt="A dog looking at the camera"
    />
  </div>
</div>
```

## 2:3

`.op-frame.op-frame--2-3` Crops media to a 2:3 (inverse of 3:2) aspect ratio.

```html
<div style="max-inline-size: 20rem; padding: var(--op-space-large)">
  <!-- Sizing is for demo only, don't write inline styles -->
  <div class="op-frame op-frame--2-3">
    <img
      src="https://images.unsplash.com/photo-1517849845537-4d257902454a?w=800&q=80"
      alt="A dog looking at the camera"
    />
  </div>
</div>
```

## Custom Inline Size

The `--_op-frame-inline-size` custom property controls the frame's `max-inline-size` (defaults to `100%`).
Set it inline to constrain the frame to a smaller width while preserving its aspect ratio.

```html
<div style="max-inline-size: 20rem; padding: var(--op-space-large)">
  <!-- Sizing is for demo only, don't write inline styles -->
  <div class="op-frame op-frame--square" style="--_op-frame-inline-size: 50%">
    <img
      src="https://images.unsplash.com/photo-1517849845537-4d257902454a?w=800&q=80"
      alt="A dog looking at the camera"
    />
  </div>
</div>
```
