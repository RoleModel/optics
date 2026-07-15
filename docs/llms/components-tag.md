# Tag

[Source Code](https://github.com/RoleModel/optics/blob/main/src/components/tag.css)

The tag component can be applied to an element with a button within it. The Tag component is similar to the Badge component, however it has a different semantic purpose. Tag is intended to be used for interaction and input where Badge is intended to be used for Notification and Information. See [Badge](components-badge.md) for details on its usage.

The tag will typically have a button within it. The button can be used to remove the tag from the UI. For Example, managing catgories or metadata tags on a data record.

## Playground

```html
<div class="tag tag--readonly"><span class="tag__label">Readonly</span></div>
```
| Arg | Default | Options | Description |
| --- | --- | --- | --- |
| `label` | `"Readonly"` |  |  |
| `type` | `"readonly"` | `readonly`, `primary`, `danger`, `warning`, `info`, `notice` |  |
| `iconLeft` |  |  |  |
| `iconRight` |  |  |  |

### Selective Imports

Tag can be used as a standalone component, however, it does have a few dependencies. To see a full dependency list, see [Dependency Graph](overview-selective-imports.md#dependencies)

```css
/* Depends on */
@import '@rolemodel/optics/dist/css/core/fonts';
@import '@rolemodel/optics/dist/css/core/tokens';
@import '@rolemodel/optics/dist/css/core/base';
@import '@rolemodel/optics/dist/css/components/icon';

/* Component */
@import '@rolemodel/optics/dist/css/components/tag';
```

## Variations

### Readonly

`.tag--readonly` Provides a Readonly tag. This is useful for displaying tags that cannot be removed.

```html
<div class="tag tag--readonly"><span class="tag__label">Readonly</span></div>
```

### Primary

`.tag--primary` Provides a Primary tag. This uses the primary color.

```html
<div class="tag tag--primary"><span class="tag__label">Primary</span></div>
```

### Danger

`.tag--danger` Provides a Danger tag. This uses the danger alert color.

```html
<div class="tag tag--danger"><span class="tag__label">Danger</span></div>
```

### Warning

`.tag--warning` Provides a Warning tag. This uses the warning alert color.

```html
<div class="tag tag--warning"><span class="tag__label">Warning</span></div>
```

### Info

`.tag--info` Provides a Info tag. This uses the info alert color.

```html
<div class="tag tag--info"><span class="tag__label">Info</span></div>
```

### Notice

`.tag--notice` Provides a Notice tag. This uses the notice alert color.

```html
<div class="tag tag--notice"><span class="tag__label">Notice</span></div>
```

## Customizing Tag styles

> **Important!:** These patterns represent how to customize the style of the tag for your project.

The tag classes are structured using the [BEM methodology](https://getbem.com/naming).

This allows us to define core styles on a main [block](https://getbem.com/naming/#block) class, and use [modifiers](https://getbem.com/naming/#modifier) to encapsulate variant styles. You can modify all tag behavior by overriding the `.tag` class and setting any properties:

```css
.tag {
  background-color: var(--op-color-alerts-danger-base);
}
```

If you need to override the behavior of a particular tag style, you can open the respective class and set or change properties

```css
.tag--danger {
  background-color: var(--op-color-alerts-danger-base);
}
```

## New Tag Variations

> **Important!:** These patterns represent how to create new variations of the Tag for your project.

Your application may need a variation. To add one, just follow this template. Note the double hyphen, indicating that this is a [modifier](https://getbem.com/naming/#modifier):

```css
.tag--{name} {
  background-color:
  color:
}
```
