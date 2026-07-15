# Tooltip

[Source Code](https://github.com/RoleModel/optics/blob/main/src/components/tooltip.css)

Tooltips are build using data attributes on any element. Setting these will show text on hover.

`data-tooltip-text` can be set to any string and will be displayed as the contents of the tooltip.
`data-tooltip-position` can be set to `top`, `bottom`, `left`, or `right`(with top being used if nothing is set) and will position the tooltip relative to the element.

## Note on Implementation

This is a simple CSS only implementation of tooltips. As such, they will not automatically handle overflow clipping or container edge detection. You will need to handle that yourself or use a package.
Here are some commonly used JavaScript packages that can address those issues:

- [Floating UI](https://floating-ui.com)
- [Shoelace Tooltip](https://shoelace.style/components/tooltip)
- [TippyJS](https://atomiks.github.io/tippyjs/)

## Playground

```html
<div style="margin: var(--op-space-4x-large)"><p data-tooltip-text="A basic tooltip">A Text Example</p></div>
```
| Arg | Default | Options | Description |
| --- | --- | --- | --- |
| `text` | `"A basic tooltip"` |  | Note: The wrapping div with margin is not required. It is only used to create space around the tooltip for this example. |
| `position` | `"none"` | `none`, `top`, `right`, `bottom`, `left` |  |
| `example` | `"text"` | `text`, `button`, `icon` |  |

### Selective Imports

Tooltip can be used as a standalone component, however, it does have a few dependencies. To see a full dependency list, see [Dependency Graph](overview-selective-imports.md#dependencies)

```css
/* Depends on */
@import '@rolemodel/optics/dist/css/core/fonts';
@import '@rolemodel/optics/dist/css/core/tokens';
@import '@rolemodel/optics/dist/css/core/base';

/* Component */
@import '@rolemodel/optics/dist/css/components/tooltip';
```

## Note on usage with Button

There are cases when you might want to put a tooltip on a disabled [Button](components-button.md). Unfortunately due to the implementation of button which prioritizes simpler and easier to customize code, the hover is blocked which causes the tooltip to not show up.
The workaround for this is to wrap your disabled button in a span and put the tooltip on the span instead.

<span class="sb-button-fix" data-tooltip-text="This is a tooltip">
  <button class="btn" disabled>
    Disabled Button
  </button>
</span>

```html
<span data-tooltip-text="This is a tooltip">
  <button class="btn" disabled>Disabled Button</button>
</span>
```

## Variations

### Default

```html
<div style="margin: var(--op-space-4x-large)"><p data-tooltip-text="A basic tooltip">A Text Example</p></div>
```

### Top

```html
<div style="margin: var(--op-space-4x-large)">
  <p data-tooltip-text="A basic top tooltip" data-tooltip-position="top">A Text Example</p>
</div>
```

### Right

```html
<div style="margin: var(--op-space-4x-large)">
  <p data-tooltip-text="A basic right tooltip" data-tooltip-position="right">A Text Example</p>
</div>
```

### Bottom

```html
<div style="margin: var(--op-space-4x-large)">
  <p data-tooltip-text="A basic bottom tooltip" data-tooltip-position="bottom">A Text Example</p>
</div>
```

### Left

```html
<div style="margin: var(--op-space-4x-large)">
  <p data-tooltip-text="A basic left tooltip" data-tooltip-position="left">A Text Example</p>
</div>
```

### Button

Tooltips can be place on any element. Here is an example of a tooltip on a button.

```html
<div style="margin: var(--op-space-4x-large)">
  <button class="btn btn--primary" data-tooltip-text="A button tooltip">A Button Example</button>
</div>
```

### Icon

Here is an example of a tooltip on an information icon.

```html
<div style="margin: var(--op-space-4x-large)">
  <span class="material-symbols-outlined icon" data-tooltip-text="An icon tooltip">info</span>
</div>
```

### Lots of Text

Tooltips have a maximum width and will wrap text if it is too long.

```html
<div style="margin: var(--op-space-4x-large)">
  <p data-tooltip-text="An example of a tooltip with a lot of content that will wrap">A Text Example</p>
</div>
```

## Tooltip API

Styles are built on CSS variables scoped to the tooltip.

Here are the variables that can be customized:

```css
--_op-tooltip-max-width
--_op-tooltip-padding
--_op-tooltip-background-color
--_op-tooltip-text-color
--_op-tooltip-arrow-size
--_op-tooltip-tooltip-offset
--_op-tooltip-tooltip-radius
--_op-tooltip-tooltip-font-size
```

## Customizing Tooltip styles

> **Important!:** These patterns represent how to customize the style of the tooltip for your project.

The tooltip using a data-attribute, not a class.

You can modify all tooltip behavior by overriding the `[data-tooltip-text]` selector and setting any properties:

```css
[data-tooltip-text] {
}
```

## New Tooltip Variations

> **Important!:** These patterns represent how to create new variations of the tooltip for your project.

Your application may need a variation. To add one, just follow this template. Note the double hyphen, indicating that this is a [modifier](https://getbem.com/naming/#modifier):

```css
[data-special-tooltip-text] {
  /* Add your custom styles here */
}
```
