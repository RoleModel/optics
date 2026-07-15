# Badge

[Source Code](https://github.com/RoleModel/optics/blob/main/src/components/badge.css)

The Badge component is similar to the Tag component, however it has a different semantic purpose. Badge is intended to be used for notification and information where Tag is intended to be used for interaction and input. See [Tag](components-tag.md) for details on its usage.

## Playground

```html
<div class="badge">Default</div>
```
| Arg | Default | Options | Description |
| --- | --- | --- | --- |
| `label` | `"Default"` |  |  |
| `style` | `"default"` | `default`, `primary`, `warning`, `danger`, `info`, `notice` |  |
| `pill` |  |  |  |
| `inButton` |  | `no`, `right`, `left` |  |
| `showPrefixIcon` |  |  | This is not a class. It just provides an example of using icons within a badge |
| `showSuffixIcon` |  |  | This is not a class. It just provides an example of using icons within a badge |

### Selective Imports

Badge can be used as a standalone component, however, it does have a few dependencies. To see a full dependency list, see [Dependency Graph](overview-selective-imports.md#dependencies)

```css
/* Depends on */
@import '@rolemodel/optics/dist/css/core/fonts';
@import '@rolemodel/optics/dist/css/core/tokens';
@import '@rolemodel/optics/dist/css/core/base';
@import '@rolemodel/optics/dist/css/components/icon';

/* Component */
@import '@rolemodel/optics/dist/css/components/badge';
```

## Variations

### Default

`.badge` Provides a default neutral colored badge.

```html
<div class="badge">Default</div>
```

### Primary

`.badge--primary` Provides a primary badge. This uses the primary color defined in your theme.

```html
<div class="badge badge--primary">Primary</div>
```

### Warning

`.badge--warning` Provides a Warning badge. This uses the warning alert color.

```html
<div class="badge badge--warning">Warning</div>
```

### Danger

`.badge--danger` Provides a Danger badge. This uses the danger alert color.

```html
<div class="badge badge--danger">Danger</div>
```

### Info

`.badge--info` Provides a Info badge. This uses the Info alert color.

```html
<div class="badge badge--info">Info</div>
```

### Notice

`.badge--notice` Provides a Notice badge. This uses the Notice alert color.

```html
<div class="badge badge--notice">Notice</div>
```

### Pill

`.badge--pill` Modifies the shape of any other badge by adding a radius to the left and right.

```html
<div class="badge badge--pill">Pill</div>
```

### Notification Button

`.badge--notification-right` and `.badge--notification-left` can be used inside of a button with the `.btn--with-badge` class to achieve a button notification style.

```html
<button class="btn btn--primary btn--with-badge">
  Notifications
  <div class="badge badge--danger badge--pill badge--notification-right">5</div>
</button>
```

## Customizing Badge styles

> **Important!:** These patterns represent how to customize the style of the badge for your project.

The badge classes are structured using the [BEM methodology](https://getbem.com/naming).

This allows us to define core styles on a main [block](https://getbem.com/naming/#block) class, and use [modifiers](https://getbem.com/naming/#modifier) to encapsulate variant styles. You can modify all badge behavior by overriding the `.badge` selector and setting any properties:

```css
.badge {
  font-size: var(--op-font-2x-large);
}
```

If you need to override the behavior of a particular badge style, you can open the respective class and set or change properties

```css
/* This will only affect the primary badge, but not default, secondary, notice, etc. */
.badge--primary {
  background-color: red;
  color: white;
}
```

## New Badge Variations

> **Important!:** These patterns represent how to create new variations of the badge for your project.

Your application may need a variation. To add one, just follow this template. Note the double hyphen, indicating that this is a [modifier](https://getbem.com/naming/#modifier):

```css
.badge--{name} {
  background-color:
  color:
}
```

```css
.badge--purple {
  background-color: purple;
  color: white;
}
```
