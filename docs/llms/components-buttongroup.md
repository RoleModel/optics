# Button Group

[Source Code](https://github.com/RoleModel/optics/blob/main/src/components/button_group.css)

`.btn-group` is a class that can be added on a container around a collection of buttons. It provides grouping styles for any button conbination and variation that exists in the [Button Component](components-button.md)

Button Group is similar to the Segmented Control component, however it has a different semantic purpose. Button Group is intended to be used for grouping related actions or navigational buttons where Segmented Control is intended to be used for form option selection and submission. See [Segmented Control](components-segmented-control.md) for details on its usage.

## Playground

```html
<div class="btn-group">
  <button class="btn">Left</button><button class="btn">Middle</button><button class="btn">Right</button>
</div>
```
| Arg | Default | Options | Description |
| --- | --- | --- | --- |
| `variant` | `"default"` | `default`, `primary`, `destructive`, `warning` |  |
| `noBorder` |  |  |  |
| `active` |  |  |  |
| `pill` |  |  |  |
| `size` |  | `small`, `medium`, `large` |  |
| `segmentedPreview` |  |  | This is not a class. It just provides an example of creating a segmented control showing the currently active piece. |

### Selective Imports

Button Group can be used as a standalone component, however, it does have a few dependencies. To see a full dependency list, see [Dependency Graph](overview-selective-imports.md#dependencies)

```css
/* Depends on */
@import '@rolemodel/optics/dist/css/core/fonts';
@import '@rolemodel/optics/dist/css/core/tokens';
@import '@rolemodel/optics/dist/css/core/base';
@import '@rolemodel/optics/dist/css/components/icon';
@import '@rolemodel/optics/dist/css/components/button';

/* Component */
@import '@rolemodel/optics/dist/css/components/button_group';
```

## Variations

### Default

```html
<div class="btn-group">
  <button class="btn">Left</button><button class="btn">Middle</button><button class="btn">Right</button>
</div>
```

### Button Group Toolbar

`.btn-group-toolbar` can be used around a collection of `.btn-group` containers to allow connected groups that wrap. A gap utility can be used to provide spacing between the groups.

```html
<div class="btn-group-toolbar gap-xs">
  <div class="btn-group">
    <button class="btn">
      <span class="material-symbols-outlined">format_bold</span>
    </button>
    <button class="btn">
      <span class="material-symbols-outlined">format_italic</span>
    </button>
    <button class="btn">
      <span class="material-symbols-outlined">format_strikethrough</span>
    </button>
    <button class="btn">
      <span class="material-symbols-outlined">format_underlined</span>
    </button>
    <button class="btn">
      <span class="material-symbols-outlined">link</span>
    </button>
  </div>
  <div class="btn-group">
    <button class="btn">
      <span class="material-symbols-outlined">text_fields</span>
    </button>
    <button class="btn">
      <span class="material-symbols-outlined">format_quote</span>
    </button>
    <button class="btn">
      <span class="material-symbols-outlined">code</span>
    </button>
    <button class="btn">
      <span class="material-symbols-outlined">format_list_bulleted</span>
    </button>
    <button class="btn">
      <span class="material-symbols-outlined">format_list_numbered</span>
    </button>
    <button class="btn">
      <span class="material-symbols-outlined">format_align_left</span>
    </button>
    <button class="btn">
      <span class="material-symbols-outlined">format_align_center</span>
    </button>
    <button class="btn">
      <span class="material-symbols-outlined">format_align_right</span>
    </button>
  </div>
  <div class="btn-group">
    <button class="btn">
      <span class="material-symbols-outlined">attachment</span>
    </button>
  </div>
  <div class="btn-group">
    <button class="btn">
      <span class="material-symbols-outlined">undo</span>
    </button>
    <button class="btn">
      <span class="material-symbols-outlined">redo</span>
    </button>
  </div>
</div>
```

### Primary

```html
<div class="btn-group">
  <button class="btn btn--primary">Left</button><button class="btn btn--primary">Middle</button
  ><button class="btn btn--primary">Right</button>
</div>
```

### Destructive

```html
<div class="btn-group">
  <button class="btn btn--destructive">Left</button><button class="btn btn--destructive">Middle</button
  ><button class="btn btn--destructive">Right</button>
</div>
```

### Warning

```html
<div class="btn-group">
  <button class="btn btn--warning">Left</button><button class="btn btn--warning">Middle</button
  ><button class="btn btn--warning">Right</button>
</div>
```

### Active

```html
<div class="btn-group">
  <button class="btn btn--destructive btn--active">Left</button
  ><button class="btn btn--destructive btn--active">Middle</button
  ><button class="btn btn--destructive btn--active">Right</button>
</div>
```

### No Border

```html
<div class="btn-group">
  <button class="btn btn--primary btn--no-border">Left</button
  ><button class="btn btn--primary btn--no-border">Middle</button
  ><button class="btn btn--primary btn--no-border">Right</button>
</div>
```

### Disabled

```html
<div class="btn-group">
  <a class="btn btn--primary btn--disabled">Left</a><a class="btn btn--primary btn--disabled">Middle</a
  ><a class="btn btn--primary btn--disabled">Right</a>
</div>
```

### Pill

```html
<div class="btn-group">
  <button class="btn btn--pill">Left</button><button class="btn btn--pill">Middle</button
  ><button class="btn btn--pill">Right</button>
</div>
```

### Size

```html
<div class="btn-group">
  <button class="btn btn--primary btn--small">Left</button
  ><button class="btn btn--primary btn--small">Middle</button
  ><button class="btn btn--primary btn--small">Right</button>
</div>
```

## Button Group API

Styles are built on CSS variables scoped to the button group.

Here are the variables that can be customized:

```css
--op-btn-group-hover-z-index
--op-btn-group-active-z-index
--op-btn-group-focus-z-index
```
