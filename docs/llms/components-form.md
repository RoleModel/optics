# Form

[Source Code](https://github.com/RoleModel/optics/blob/main/src/components/form.css)

Form classes can be used on a variety of `inputs` or `select` HTML elements.
They provide consistent and composable styling that should address most applications basic needs.

## Playground

```html
<div class="form-group">
  <label class="form-label" for="random">A Label</label
  ><input type="Text" placeholder="Text" id="random" class="form-control form-control--large" />
</div>
```
| Arg | Default | Options | Description |
| --- | --- | --- | --- |
| `label` | `"A Label"` |  |  |
| `type` | `"Text"` | `Text`, `Number`, `Email`, `Password`, `Tel`, `Checkbox`, `Radio`, `Color`, `Date`, `File` |  |
| `size` |  | `small`, `medium`, `large` |  |
| `noBorder` |  |  |  |
| `readonly` |  |  |  |
| `disabled` |  |  |  |
| `indeterminate` |  |  |  |
| `inline` |  |  |  |
| `error` |  |  |  |
| `hint` |  |  |  |

### Selective Imports

Form Controls can be used as standalone components, however, they do have a few dependencies. To see a full dependency list, see [Dependency Graph](overview-selective-imports.md#dependencies)

```css
/* Depends on */
@import '@rolemodel/optics/dist/css/core/fonts';
@import '@rolemodel/optics/dist/css/core/tokens';
@import '@rolemodel/optics/dist/css/core/base';

/* Component */
@import '@rolemodel/optics/dist/css/components/form';
```

## Variations

### Label

`.form-label` Provides basic input label styles.

```html
<label class="form-label" for="random">A Label</label>
```

### Input

`.form-control` Provides basic input styles. This can be used on `input` HTML elements. It works across a variety of types such as `text`, `number`, `password`, `email`, `phone`, `color`, `radio`, and `checkbox`.

```html
<input type="Text" placeholder="Text" id="random" class="form-control" />
```

### Form Group

`.form-group` Composes an input and label together as a pair. It provides padding between input + label pairs in a form.

```html
<div class="form-group">
  <label class="form-label" for="random">A Label</label
  ><input type="Text" placeholder="Text" id="random" class="form-control form-control--large" />
</div>
```

### Form Group Inline

`.form-group--inline` can be added to a `.form-group` to display the label and input on the same line.

```html
<div class="form-group form-group--inline">
  <label class="form-label" for="random">A Label</label
  ><input type="Text" placeholder="Text" id="random" class="form-control form-control--large" />
</div>
```

### Textarea

`textarea.form-control` Provides basic text area styles. This can be used on `textarea` HTML elements.

```html
<textarea placeholder="Textarea" class="form-control"></textarea>
```
| Arg | Default | Options | Description |
| --- | --- | --- | --- |
| `readonly` |  |  |  |

### Dropdown

`select.form-control` Provides basic `select` element styles.

```html
<select class="form-control form-control--large">
  <option>Option 1</option>
</select>
```
| Arg | Default | Options | Description |
| --- | --- | --- | --- |
| `options` | `1` |  |  |
| `readonly` |  |  |  |
| `multiple` | `false` |  |  |

### Color

`<input type='color' class='form-control'>` Provides basic color input styles. This can be used on `input` HTML elements with a type of `color`.

```html
<input type="color" placeholder="color" id="random" class="form-control" />
```

### Radio

`<input type='radio' class='form-control'>` Provides basic input of type `radio` styles.

```html
<div class="form-group">
  <input type="radio" id="random" class="form-control form-control--large" /><label
    class="form-label"
    for="random"
    >A Label</label
  >
</div>
```

### Checkbox

`<input type='checkbox' class='form-control'>` Provides basic input of type `radio` styles.

```html
<div class="form-group">
  <input type="checkbox" id="random" class="form-control form-control--large" /><label
    class="form-label"
    for="random"
    >A Label</label
  >
</div>
```

### Error Summary

`.form-error-summary` Is an error section, usually displayed above the form with a list of errors.

```html
<div class="form-error-summary">
  <h2>2 errors prohibited this from being saved</h2>
  <ul>
    <li>Tags rank is not a number</li>
    <li>Title can't be blank</li>
  </ul>
</div>
```
| Arg | Default | Options | Description |
| --- | --- | --- | --- |
| `label` | `"2 errors prohibited this from being saved"` |  |  |

### Input Error

`.form-group.form-group--error` and `.form-error` are typically used on combination when there is a validation error on an input. They highlight the input in error along with the message provided.

```html
<div class="form-group form-group--error">
  <label class="form-label" for="random">A Label</label
  ><input type="Text" placeholder="Text" id="random" class="form-control form-control--large" /><span
    class="form-error"
    >Can't be blank</span
  >
</div>
```

### Input Hint

`.form-hint` can be used inside of a `.form-group` to provide help text for an input.

```html
<div class="form-group">
  <label class="form-label" for="random">A Label</label
  ><input type="Text" placeholder="Text" id="random" class="form-control form-control--large" />
  <div class="form-hint">Very helpful hint</div>
</div>
```

### No Border

`.form-control.form-control--no-border` can be used to create a borderless input or select. When used in a form group with `.form-control.form-group--error`, the input will get a red bottom border and highlight.

```html
<div class="form-group">
  <label class="form-label" for="random">A Label</label
  ><input
    type="Text"
    placeholder="Text"
    id="random"
    class="form-control form-control--large form-control--no-border"
  />
</div>
```

### Size

`.form.form-control--small`, `.form.form-control--medium`, `.form.form-control--large` (with large being the default) modify the size of any element by changing the font and height to be smaller or larger.

```html
<div class="form-group">
  <label class="form-label" for="random">A Label</label
  ><input type="Text" placeholder="Text" id="random" class="form-control form-control--small" />
</div>
```

### Read Only

The `read-only` data attribute on any input with `.form-control` can be used to display values in a form-like way.

```html
<div class="form-group">
  <label class="form-label" for="random">A Label</label
  ><input
    type="Text"
    placeholder="Text"
    id="random"
    readonly="true"
    class="form-control form-control--large"
  />
</div>
```

### Indeterminate Checkbox

Checkboxes that use the indeterminate psuedo-class with be displayed with a `-` inside the checkmark.
See [MDN's documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/:indeterminate) for further information.

```html
<div class="form-group">
  <input type="checkbox" id="random" class="form-control form-control--large" /><label
    class="form-label"
    for="random"
    >A Label</label
  >
</div>
```

## Form API

Styles are built on CSS variables scoped to the form elements.

Here are the variables that can be customized.

```css
/* .form-control */
--_op-form-control-height-small
--_op-form-control-height-medium
--_op-form-control-height-large
--_op-form-control-font-small
--_op-form-control-font-medium
--_op-form-control-font-large

/* .form-control:not([type='radio'], [type='checkbox']) */
--_op-form-control-opacity-disabled

/* .form-control:is([type='radio'], [type='checkbox']) */
--_op-form-control-height-small
--_op-form-control-height-medium
--_op-form-control-height-large
```

## Customizing Form styles

> **Important!:** These patterns represent how to customize the style of the form for your project.

The form classes are structured using the [BEM methodology](https://getbem.com/naming).

This allows multiple classes to share the same behavior.

`.form-control` is the class that is used to style all form controls.

`.form-control:not([type='radio'], [type='checkbox'])` is the selector that is used to style form controls based on the input like color, date, text, number, etc.

`.form-control:is([type='radio'], [type='checkbox'])` is the selector that is used to style checkboxes and radio buttons.

You can open them up like so to modify the styles:

```css
.form-control {
}
```
