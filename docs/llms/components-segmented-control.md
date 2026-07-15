# Segmented Control

[Source Code](https://github.com/RoleModel/optics/blob/main/src/components/segmented-control.css)

Segmented Control classes can be used to create a stylized radio select group.

Segmented Control component is similar to the Button Group component, however it has a different semantic purpose. Segmented Control is intended to be used for form option selection and submission where Button Group is intended to be used for grouping related actions or navigational buttons. See [Button Group](components-buttongroup.md) for details on its usage.

## Note on Implementation

This is just a styling pattern that builds on standard radio inputs and labels. Your project may need some tooling to generate this easily.

A commonly used tool for Ruby on Rails projects is [SimpleForm](https://github.com/heartcombo/simple_form). It allows you to build forms with pre-made inputs and allows you to make custom input types.

[RoleModel Rails SimpleForm Generator](https://github.com/RoleModel/rolemodel_rails/tree/master/lib/generators/rolemodel/simple_form) provides a generator to install a custom segmented control input that can be used with SimpleForm with Optics classes applied.

## Playground

```html
<div role="radiogroup" class="segmented-control segmented-control--medium">
  <input
    class="segmented-control__input"
    type="radio"
    id="option-1"
    value="value 1"
    name="example-segmented-control"
  />
  <label class="segmented-control__label" for="option-1"> Option 1 </label>
  <input
    class="segmented-control__input"
    type="radio"
    id="option-2"
    value="value 2"
    name="example-segmented-control"
  />
  <label class="segmented-control__label" for="option-2"> Option 2 </label>
  <input
    class="segmented-control__input"
    type="radio"
    id="option-3"
    value="value 3"
    name="example-segmented-control"
  />
  <label class="segmented-control__label" for="option-3"> Option 3 </label>
</div>
```
| Arg | Default | Options | Description |
| --- | --- | --- | --- |
| `size` | `"medium"` | `small`, `medium`, `large` |  |
| `options` | `3` |  |  |
| `fullWidth` |  |  |  |
| `showPrefixIcon` | `false` |  | This is not a class. It just provides an example of using icons within the options |
| `showSuffixIcon` | `false` |  | This is not a class. It just provides an example of using icons within the options |

### Selective Imports

SegmentedControl can be used as a standalone component, however, it does have a few dependencies. To see a full dependency list, see [Dependency Graph](overview-selective-imports.md#dependencies)

```css
/* Depends on */
@import '@rolemodel/optics/dist/css/core/fonts';
@import '@rolemodel/optics/dist/css/core/tokens';
@import '@rolemodel/optics/dist/css/core/base';
@import '@rolemodel/optics/dist/css/components/icon';

/* Component */
@import '@rolemodel/optics/dist/css/components/segmented-control';
```

## Variations

### Default

`.segmented-control` Provides styled radio select group.

```html
<div role="radiogroup" class="segmented-control segmented-control--medium">
  <input
    class="segmented-control__input"
    type="radio"
    id="option-1"
    value="value 1"
    name="example-segmented-control"
  />
  <label class="segmented-control__label" for="option-1"> Option 1 </label>
  <input
    class="segmented-control__input"
    type="radio"
    id="option-2"
    value="value 2"
    name="example-segmented-control"
  />
  <label class="segmented-control__label" for="option-2"> Option 2 </label>
  <input
    class="segmented-control__input"
    type="radio"
    id="option-3"
    value="value 3"
    name="example-segmented-control"
  />
  <label class="segmented-control__label" for="option-3"> Option 3 </label>
</div>
```

### Input

`.segmented-control__input` can be used on the radio inputs.

### Label

`.segmented-control__label` can be used on the radio labels.

The [Icon](components-icon.md) component can be used within the label as a prefix or suffix and will follow the sizing appropriately.

```html
<div role="radiogroup" class="segmented-control">
  <input
    class="segmented-control__input"
    type="radio"
    id="option-1"
    value="value 1"
    name="example-segmented-control"
  />
  <label class="segmented-control__label" for="option-1">
    Option 1
    <span class="material-symbols-outlined icon">info</span>
  </label>
  <input
    class="segmented-control__input"
    type="radio"
    id="option-2"
    value="value 2"
    name="example-segmented-control"
  />
  <label class="segmented-control__label" for="option-2">
    Option 2
    <span class="material-symbols-outlined icon">info</span>
  </label>
  <input
    class="segmented-control__input"
    type="radio"
    id="option-3"
    value="value 3"
    name="example-segmented-control"
  />
  <label class="segmented-control__label" for="option-3">
    Option 3
    <span class="material-symbols-outlined icon">info</span>
  </label>
</div>
```

### Size

`.segmented-control--small`, `.segmented-control--medium`, `.segmented-control--large` (with large being the default) modify the size of any other segmented control class by changing the font, padding, and height to be smaller or larger.

```html
<div role="radiogroup" class="segmented-control segmented-control--small">
  <input
    class="segmented-control__input"
    type="radio"
    id="option-1"
    value="value 1"
    name="example-segmented-control"
  />
  <label class="segmented-control__label" for="option-1"> Option 1 </label>
  <input
    class="segmented-control__input"
    type="radio"
    id="option-2"
    value="value 2"
    name="example-segmented-control"
  />
  <label class="segmented-control__label" for="option-2"> Option 2 </label>
  <input
    class="segmented-control__input"
    type="radio"
    id="option-3"
    value="value 3"
    name="example-segmented-control"
  />
  <label class="segmented-control__label" for="option-3"> Option 3 </label>
</div>
```

### Full Width

`.segmented-control--full-width` can be used to make the segmented control take up the full width of its container.

```html
<div role="radiogroup" class="segmented-control segmented-control--full-width">
  <input
    class="segmented-control__input"
    type="radio"
    id="option-1"
    value="value 1"
    name="example-segmented-control"
  />
  <label class="segmented-control__label" for="option-1"> Option 1 </label>
  <input
    class="segmented-control__input"
    type="radio"
    id="option-2"
    value="value 2"
    name="example-segmented-control"
  />
  <label class="segmented-control__label" for="option-2"> Option 2 </label>
  <input
    class="segmented-control__input"
    type="radio"
    id="option-3"
    value="value 3"
    name="example-segmented-control"
  />
  <label class="segmented-control__label" for="option-3"> Option 3 </label>
</div>
```

## SegmentedControl API

Styles are built on css variables scoped to the segmented control.

Here are the variables that can be customized.

```css
/* Some global tokens are overridden within this component */
--op-input-inner-focus
--op-input-focus-primary

/* Public API (customizable component options) */
--_op-segmented-control-height-small
--_op-segmented-control-height-medium
--_op-segmented-control-height-large

--_op-segmented-control-font-small
--_op-segmented-control-font-medium
--_op-segmented-control-font-large

--_op-segmented-control-label-padding-small
--_op-segmented-control-label-padding-medium
--_op-segmented-control-label-padding-large

--_op-segmented-control-label-gap-small
--_op-segmented-control-label-gap-medium
--_op-segmented-control-label-gap-large

--_op-segmented-control-color-icon-default
--_op-segmented-control-color-icon-active
```

## Customizing Segmented Control styles

> **Important!:** These patterns represent how to customize the style of the segmentedcontrol for your project.

The segmented control classes are structured using the [BEM methodology](https://getbem.com/naming).

This allows us to define core styles on a main [block](https://getbem.com/naming/#block) class, and use [modifiers](https://getbem.com/naming/#modifier) to encapsulate variant styles. You can modify all segmented control behavior by overriding the `.segmented-control` class and setting any properties:

```css
.segmented-control {
  color: red;
}
```

If you need to override the behavior of a particular segmented control modifier, you can open the respective class and set or change properties

```css
.segmented-control--small {
  color: red;
}
```

## New Segmented Control Variations

> **Important!:** These patterns represent how to create new variations of the SegmentedControl for your project.

Your application may need a variation. To add one, just follow this template. Note the double hyphen, indicating that this is a [modifier](https://getbem.com/naming/#modifier):

```css
.segmented-control--{name} {
  background-color: white;
  color: purple;

  &.segmented-control--small {
    color: red;
  }

  &.segmented-control--medium {
    color: green;
  }

  &.segmented-control--large {
    color: blue;
  }
}
```
