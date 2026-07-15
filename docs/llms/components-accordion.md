# Accordion

[Source Code](https://github.com/RoleModel/optics/blob/main/src/components/accordion.css)

Accordion classes are built on the `details` and `summary` html elements. They provide consistent and composable styling for disclosure widgets.

## Playground

```html
<details class="accordion">
  <summary>
    <span class="material-symbols-outlined icon accordion__marker">arrow_right</span>
    <span class="accordion__label">Header Label</span>
  </summary>
  Something small enough to escape casual notice.
</details>
```
| Arg | Default | Options | Description |
| --- | --- | --- | --- |
| `headerLabel` |  |  |  |
| `marker` |  |  |  |
| `additionalHeaderContent` |  |  |  |
| `flipHeaderAndMarker` |  |  |  |
| `disableAnimation` |  |  |  |
| `content` |  |  |  |

### Selective Imports

Accordion can be used as a standalone component, however, it does have a few dependencies. To see a full dependency list, see [Dependency Graph](overview-selective-imports.md#dependencies)

```css
/* Depends on */
@import '@rolemodel/optics/dist/css/core/fonts';
@import '@rolemodel/optics/dist/css/core/tokens';
@import '@rolemodel/optics/dist/css/core/base';
@import '@rolemodel/optics/dist/css/components/icon';

/* Component */
@import '@rolemodel/optics/dist/css/components/accordion';
```

## Features

### Exclusive [open]

Setting the `name` attribute on the `<details>` element will make the accordion exclusive. This attribute enables multiple `<details>` elements to be connected, with only one open at a time.

See more about the `name` attribute on the [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details#name).

```html
<details class="accordion" name="accordion-group">...</details>
<details class="accordion" name="accordion-group">...</details>
<details class="accordion" name="accordion-group">...</details>
```

## Variations

### Default

`.accordion` used on a `details` element with a `summary` element as the first child will create an accordion component.
Within the `summary`, a span with the class `accordion__label` will be used as the title of the accordion and `accordion__marker` will be used as the icon.

Other content can be placed within the summary, but the `accordion__label` and `accordion__marker` classes must be used for the accordion to work properly.

```html
<details class="accordion">
  <summary>
    <span class="material-symbols-outlined icon accordion__marker">arrow_right</span>
    <span class="accordion__label">Header Label</span>
  </summary>
  Something small enough to escape casual notice.
</details>
```

### Swapped Label and Marker

Positioning the marker after the label inside of the summary will result in the marker being on the right side of the accordion.

```html
<details class="accordion">
  <summary>
    <span class="accordion__label">Header Label</span>
    <span class="material-symbols-outlined icon accordion__marker">arrow_right</span>
  </summary>
  Something small enough to escape casual notice.
</details>
```

### Disable Animation

If you prefer the accordion to not animate, you can disable the transition on the icon and content by using this modifier `.accordion--disable-animation`.

```html
<details class="accordion accordion--disable-animation">
  <summary>
    <span class="material-symbols-outlined icon accordion__marker">arrow_right</span>
    <span class="accordion__label">Header Label</span>
  </summary>
  Something small enough to escape casual notice.
</details>
```

### Additional Header Content

Additional content can be included within the `summary` element in any order. Anything not within the `.accordion__label` or `.accordion__marker` classes will be rendered wherever you place it in the `summary`. Note: Content placed between the label and the marker will fill the width between them. If placing a button there, you may want to wrap it in a div so the button doesn't stretch the whole space.

```html
<details class="accordion">
  <summary>
    <span class="material-symbols-outlined icon accordion__marker">arrow_right</span>
    <span class="accordion__label">Header Label</span>
    <button class="btn btn--primary">Button</button>
  </summary>
  Something small enough to escape casual notice.
</details>
```

## Accordion API

Styles are built on CSS variables scoped to the accordion.

Here are the variables that can be customized:

```css
--_op-accordion-summary-min-height
```

## Customizing Accordion styles

> **Important!:** These patterns represent how to customize the style of the accordion for your project.

The accordion classes are structured using the [BEM methodology](https://getbem.com/naming).

This allows us to define core styles on a main [block](https://getbem.com/naming/#block) class, and use [modifiers](https://getbem.com/naming/#modifier) to encapsulate variant styles. You can modify all accordion behavior by overriding the `.accordion` selector and setting any properties:

```css
.accordion {
}
```

## New Accordion Variations

> **Important!:** These patterns represent how to create new variations of the accordion for your project.

Your application may need a variation. To add one, just follow this template. Note the double hyphen, indicating that this is a [modifier](https://getbem.com/naming/#modifier):

```css
.accordion--{name} {
  --_op-accordion-summary-min-height: var(--op-font-small);
}
```
