# Divider

[Source Code](https://github.com/RoleModel/optics/blob/main/src/components/divider.css)

Divider classes can be used to create horizontal or vertical visual divides between content.

## Playground

```html
<div class="divider"></div>
```
| Arg | Default | Options | Description |
| --- | --- | --- | --- |
| `vertical` |  |  |  |
| `size` |  | `small`, `medium`, `large` |  |
| `spacing` |  | `none`, `small`, `medium`, `large` |  |

### Selective Imports

Divider can be used as a standalone component, however, it does have a few dependencies. To see a full dependency list, see [Dependency Graph](overview-selective-imports.md#dependencies)

```css
/* Depends on */
@import '@rolemodel/optics/dist/css/core/fonts';
@import '@rolemodel/optics/dist/css/core/tokens';
@import '@rolemodel/optics/dist/css/core/base';

/* Component */
@import '@rolemodel/optics/dist/css/components/divider';
```

## Variations

### Default

`.divider` Provides a basic horizontal divider.

```html
<div class="divider"></div>
```

### Vertical

`.divider.divider--vertical` Provides a basic vertical divider.

```html
<div class="divider divider--vertical"></div>
```

### Size

`.divider--small`, `.divider--medium`, `.divider--large` (with small being the default) modify the size of any divider class by changing the width of the divider.

```html
<div class="divider divider--large"></div>
```

### Spacing

`.divider--spacing-small`, `.divider--spacing-medium`, `.divider--spacing-large` (with none being the default) modify the padding around the divider.

```html
<div class="divider divider--spacing-large"></div>
```

## Divider API

The size and spacing styles are built on CSS variables scoped to the divider.

Here are the variables that can be customized:

```css
--_op-divider-vertical-min-height
--_op-divider-height-small
--_op-divider-height-medium
--_op-divider-height-large
--_op-divider-padding-small
--_op-divider-padding-medium
--_op-divider-padding-large
```

## Customizing Divider styles

> **Important!:** These patterns represent how to customize the style of the divider for your project.

The divider classes are structured using the [BEM methodology](https://getbem.com/naming).

This allows us to define core styles on a main [block](https://getbem.com/naming/#block) class, and use [modifiers](https://getbem.com/naming/#modifier) to encapsulate variant styles. You can modify all divider behavior by overriding the `.divider` selector and setting any properties:

```css
.divider {
}
```

If you need to override the behavior of a particular divider style, you can open the respective class and set or change properties

```css
.divider--modifier {
}
```

## New Divider Variations

> **Important!:** These patterns represent how to create new variations of the divider for your project.

Your application may need a custom divider. To add one, just follow this template:

```css
.divider--{name} {
}
```
