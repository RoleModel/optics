# SidePanel

[Source Code](https://github.com/RoleModel/optics/blob/main/src/components/side_panel.css)

Side Panel classes provide simple styling for a panel of sections with a scrollable body.

`.side-panel` is the main component that everything is contained within.

> **Note:** The wrapping div with a height in the code snippets is just for demonstration purposes in this documentation. It is not necessary for use in your application.

## Playground

```html
<div style="height: 40rem">
  <div class="side-panel">
    <div class="side-panel__header">This is a header</div>
    <div class="side-panel__body">
      <div class="side-panel__section">This is a section</div>
    </div>
    <div class="side-panel__footer">This is a footer</div>
  </div>
</div>
```
| Arg | Default | Options | Description |
| --- | --- | --- | --- |
| `border` |  | `none`, `left`, `right`, `both` |  |
| `headerPadding` |  | `none`, `x`, `y`, `all` |  |
| `bodyPadding` |  | `none`, `x`, `y`, `all` |  |
| `footerPadding` |  | `none`, `x`, `y`, `all` |  |
| `sections` |  |  |  |
| `sectionPadding` |  | `none`, `x`, `y`, `all` |  |
| `showDividers` |  |  |  |

### Selective Imports

Side Panel can be used as a standalone component, however, it does have a few dependencies. To see a full dependency list, see [Dependency Graph](overview-selective-imports.md#dependencies)

```css
/* Depends on */
@import '@rolemodel/optics/dist/css/core/fonts';
@import '@rolemodel/optics/dist/css/core/tokens';
@import '@rolemodel/optics/dist/css/core/base';

/* Component */
@import '@rolemodel/optics/dist/css/components/side_panel';
```

## Variations

### Default

`.side-panel` provides the basic shell for your sidebar.

`.side-panel__header`, `.side-panel__body`, and `.side-panel__footer` are used to denote areas of the panel with body taking up as much height as available and adding a scrollbar for any content overflow.

```html
<div style="height: 40rem">
  <div class="side-panel">
    <div class="side-panel__header">This is a header</div>
    <div class="side-panel__body">
      <div class="side-panel__section">This is a section</div>
    </div>
    <div class="side-panel__footer">This is a footer</div>
  </div>
</div>
```

### Bordered

`.side-panel--border-left` or `.side-panel--border-right` provide a border on either side (or both if both used) of the panel.

```html
<div style="height: 40rem">
  <div class="side-panel side-panel--border-left side-panel--border-right">
    <div class="side-panel__header">This is a header</div>
    <div class="side-panel__body">
      <div class="side-panel__section">This is a section</div>
    </div>
    <div class="side-panel__footer">This is a footer</div>
  </div>
</div>
```

### Padded Header

`.side-panel__header--padded` Provides padding on the whole header area.

`.side-panel__header--padded-x` Provides padding on the left and right sides of the header area.

`.side-panel__header--padded-y` Provides padding on the top and bottom sides of the header area.

```html
<div style="height: 40rem">
  <div class="side-panel">
    <div class="side-panel__header side-panel__header--padded">This is a header</div>
    <div class="side-panel__body">
      <div class="side-panel__section">This is a section</div>
    </div>
    <div class="side-panel__footer">This is a footer</div>
  </div>
</div>
```

### Padded Body

`.side-panel__body--padded` Provides padding on the whole body area.

`.side-panel__body--padded-x` Provides padding on the left and right sides of the body area.

`.side-panel__body--padded-y` Provides padding on the top and bottom sides of the body area.

```html
<div style="height: 40rem">
  <div class="side-panel">
    <div class="side-panel__header">This is a header</div>
    <div class="side-panel__body side-panel__body--padded">
      <div class="side-panel__section">This is a section</div>
    </div>
    <div class="side-panel__footer">This is a footer</div>
  </div>
</div>
```

### Padded Footer

`.side-panel__footer--padded` Provides padding on the whole footer area.

`.side-panel__footer--padded-x` Provides padding on the left and right sides of the footer area.

`.side-panel__footer--padded-y` Provides padding on the top and bottom sides of the footer area.

```html
<div style="height: 40rem">
  <div class="side-panel">
    <div class="side-panel__header">This is a header</div>
    <div class="side-panel__body">
      <div class="side-panel__section">This is a section</div>
    </div>
    <div class="side-panel__footer side-panel__footer--padded">This is a footer</div>
  </div>
</div>
```

### Sections

`.side-panel__section` can be used within any of the other areas of the side panel and provide separation of content within it.

In this example, we are putting dividers between each section to show the separation.

```html
<div style="height: 40rem">
  <div class="side-panel">
    <div class="side-panel__header">This is a header</div>
    <div class="side-panel__body">
      <div class="side-panel__section">This is a section</div>
      <div class="divider"></div>
      <div class="side-panel__section">This is a section</div>
      <div class="divider"></div>
      <div class="side-panel__section">This is a section</div>
      <div class="divider"></div>
      <div class="side-panel__section">This is a section</div>
      <div class="divider"></div>
      <div class="side-panel__section">This is a section</div>
      <div class="divider"></div>
      <div class="side-panel__section">This is a section</div>
      <div class="divider"></div>
      <div class="side-panel__section">This is a section</div>
      <div class="divider"></div>
      <div class="side-panel__section">This is a section</div>
      <div class="divider"></div>
      <div class="side-panel__section">This is a section</div>
      <div class="divider"></div>
      <div class="side-panel__section">This is a section</div>
      <div class="divider"></div>
      <div class="side-panel__section">This is a section</div>
      <div class="divider"></div>
      <div class="side-panel__section">This is a section</div>
      <div class="divider"></div>
      <div class="side-panel__section">This is a section</div>
      <div class="divider"></div>
      <div class="side-panel__section">This is a section</div>
      <div class="divider"></div>
      <div class="side-panel__section">This is a section</div>
      <div class="divider"></div>
      <div class="side-panel__section">This is a section</div>
      <div class="divider"></div>
      <div class="side-panel__section">This is a section</div>
      <div class="divider"></div>
      <div class="side-panel__section">This is a section</div>
      <div class="divider"></div>
      <div class="side-panel__section">This is a section</div>
      <div class="divider"></div>
      <div class="side-panel__section">This is a section</div>
      <div class="divider"></div>
    </div>
    <div class="side-panel__footer">This is a footer</div>
  </div>
</div>
```

### Padded Sections

One of the benefits is that each section supports the padding classes so individual sections can be padded as needed instead of the whole area.

`.side-panel__section--padded` Provides padding on the whole section.

`.side-panel__section--padded-x` Provides padding on the left and right sides of the section.

`.side-panel__section--padded-y` Provides padding on the top and bottom sides of the section.

```html
<div style="height: 40rem">
  <div class="side-panel">
    <div class="side-panel__header">This is a header</div>
    <div class="side-panel__body">
      <div class="side-panel__section side-panel__section--padded">This is a section</div>
      <div class="divider"></div>
      <div class="side-panel__section side-panel__section--padded">This is a section</div>
      <div class="divider"></div>
      <div class="side-panel__section side-panel__section--padded">This is a section</div>
      <div class="divider"></div>
    </div>
    <div class="side-panel__footer">This is a footer</div>
  </div>
</div>
```

## SidePanel API

Styles are built on CSS variables scoped to the SidePanel.

Here are the variables that can be customized:

```css
--_op-side-panel-width
--_op-side-panel-header-padding
--_op-side-panel-body-padding
--_op-side-panel-footer-padding
--_op-side-panel-section-padding
```

## Customizing SidePanel styles

> **Important!:** These patterns represent how to customize the style of the SidePanel for your project.

The SidePanel classes are structured using the [BEM methodology](https://getbem.com/naming).

This allows us to define core styles on a main [block](https://getbem.com/naming/#block) class, and use [modifiers](https://getbem.com/naming/#modifier) to encapsulate variant styles. You can modify all SidePanel behavior by overriding the `.side-panel` selector and setting any properties:

```css
.side-panel {
  background-color: var(--op-color-primary-plus-six);
  color: var(--op-color-primary-on-plus-six);
}
```

## New SidePanel Variations

> **Important!:** These patterns represent how to create new variations of the SidePanel for your project.

Your application may need a variation. To add one, just follow this template. Note the double hyphen, indicating that this is a [modifier](https://getbem.com/naming/#modifier):

```css
.sidepanel--{name} {
  --_op-side-panel-width: calc(108 * var(--op-size-unit)); /* 432px */
  --_op-side-panel-header-padding: var(--op-space-large);
  --_op-side-panel-body-padding: var(--op-space-large);
  --_op-side-panel-footer-padding: var(--op-space-large);
  --_op-side-panel-section-padding: var(--op-space-small);
}
```
