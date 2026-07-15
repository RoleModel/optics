# Tab

[Source Code](https://github.com/RoleModel/optics/blob/main/src/components/tab.css)

Tab classes provide simple styling for a tab group navigation.

## Playground

```html
<div class="tab-group">
  <a href="/?path=/docs/components-tab--docs" class="tab tab--active">USA</a>
  <a href="/?path=/docs/components-tab--docs" class="tab">Mexico</a>
  <a href="/?path=/docs/components-tab--docs" class="tab tab--disabled" tabindex="-1">Canada</a>
  <a href="/?path=/docs/components-tab--docs" class="tab">England</a>
  <a href="/?path=/docs/components-tab--docs" class="tab">Germany</a>
  <a href="/?path=/docs/components-tab--docs" class="tab">Spain</a>
  <a href="/?path=/docs/components-tab--docs" class="tab">Austria</a>
  <a href="/?path=/docs/components-tab--docs" class="tab">Australia</a>
</div>
```
| Arg | Default | Options | Description |
| --- | --- | --- | --- |
| `size` |  | `small`, `large` |  |
| `activeTab` |  | `USA`, `Mexico`, `Canada`, `England`, `Germany`, `Spain`, `Austria`, `Australia` |  |
| `disabledTab` |  | `USA`, `Mexico`, `Canada`, `England`, `Germany`, `Spain`, `Austria`, `Australia` |  |

### Selective Imports

Tab can be used as a standalone component, however, it does have a few dependencies. To see a full dependency list, see [Dependency Graph](overview-selective-imports.md#dependencies)

```css
/* Depends on */
@import '@rolemodel/optics/dist/css/core/fonts';
@import '@rolemodel/optics/dist/css/core/tokens';
@import '@rolemodel/optics/dist/css/core/base';

/* Component */
@import '@rolemodel/optics/dist/css/components/tab';
```

## Variations

### Default

`.tab-group` Provides the grouping around a collection of links or buttons that have the `.tab` class.

Each item should use `.tab` and also supports `.tab--active` and `.tab--disabled`.

When using `.tab--disabled` the tabindex attributes should also be set to `-1` to skip the tab during keyboard navigation.

```html
<div class="tab-group">
  <a href="/?path=/docs/components-tab--docs" class="tab tab--active">USA</a>
  <a href="/?path=/docs/components-tab--docs" class="tab">Mexico</a>
  <a href="/?path=/docs/components-tab--docs" class="tab tab--disabled" tabindex="-1">Canada</a>
  <a href="/?path=/docs/components-tab--docs" class="tab">England</a>
  <a href="/?path=/docs/components-tab--docs" class="tab">Germany</a>
  <a href="/?path=/docs/components-tab--docs" class="tab">Spain</a>
  <a href="/?path=/docs/components-tab--docs" class="tab">Austria</a>
  <a href="/?path=/docs/components-tab--docs" class="tab">Australia</a>
</div>
```

### Small

A tab supports `.tab--small` or `.tab--large` with large being the default.

```html
<div class="tab-group">
  <a href="/?path=/docs/components-tab--docs" class="tab tab--small tab--active">USA</a>
  <a href="/?path=/docs/components-tab--docs" class="tab tab--small">Mexico</a>
  <a href="/?path=/docs/components-tab--docs" class="tab tab--small tab--disabled" tabindex="-1">Canada</a>
  <a href="/?path=/docs/components-tab--docs" class="tab tab--small">England</a>
  <a href="/?path=/docs/components-tab--docs" class="tab tab--small">Germany</a>
  <a href="/?path=/docs/components-tab--docs" class="tab tab--small">Spain</a>
  <a href="/?path=/docs/components-tab--docs" class="tab tab--small">Austria</a>
  <a href="/?path=/docs/components-tab--docs" class="tab tab--small">Australia</a>
</div>
```

## Tab API

Styles are built on CSS variables scoped to the tab.

Here are the variables that can be customized:

```css
--_op-tab-font-small
--_op-tab-font-large
--_op-tab-padding-small
--_op-tab-padding-large
--_op-tab-indicator-width-small
--_op-tab-indicator-width-large
--_op-tab-disabled-opacity
```

## Customizing Tab styles

> **Important!:** These patterns represent how to customize the style of the tab for your project.

The tab classes are structured using the [BEM methodology](https://getbem.com/naming).

This allows us to define core styles on a main [block](https://getbem.com/naming/#block) class, and use [modifiers](https://getbem.com/naming/#modifier) to encapsulate variant styles. You can modify all tab behavior by overriding the `.tab` selector and setting any properties:

```css
.tab {
  --_op-tab-font-small: var(--op-font-2x-small);
  --_op-tab-padding-small: var(--op-space-3x-small) var(--op-space-small);
}
```

## New Tab Variations

> **Important!:** These patterns represent how to create new variations of the Tab for your project.

Your application may need a variation. To add one, just follow this template. Note the double hyphen, indicating that this is a [modifier](https://getbem.com/naming/#modifier):

```css
.tab--{name} {
  background-color: var(--op-color-primary-plus-two);
  color: var(--op-color-primary-on-plus-two);
}
```
