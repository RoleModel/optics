# Breadcrumbs

[Source Code](https://github.com/RoleModel/optics/blob/main/src/components/breadcrumbs.css)

The breadcrumbs component is used to show the user's current location in a hierarchy of pages.

It can be applied to a `nav` element with a collection of links and separators within it.

## Playground

```html
<nav class="breadcrumbs">
  <a class="breadcrumbs__link" href="#">USA</a>
  <div class="breadcrumbs__separator">
    <span class="material-symbols-outlined icon">arrow_right</span>
  </div>
  <a class="breadcrumbs__link" href="#">Mexico</a>
  <div class="breadcrumbs__separator">
    <span class="material-symbols-outlined icon">arrow_right</span>
  </div>
  <a class="breadcrumbs__link" href="#">Canada</a>
  <div class="breadcrumbs__separator">
    <span class="material-symbols-outlined icon">arrow_right</span>
  </div>
  <span class="breadcrumbs__text">England</span>
</nav>
```
| Arg | Default | Options | Description |
| --- | --- | --- | --- |
| `size` |  | `small`, `large` |  |
| `separator` |  |  |  |

### Selective Imports

Breadcrumbs can be used as a standalone component, however, it does have a few dependencies. To see a full dependency list, see [Dependency Graph](overview-selective-imports.md#dependencies)

```css
/* Depends on */
@import '@rolemodel/optics/dist/css/core/fonts';
@import '@rolemodel/optics/dist/css/core/tokens';
@import '@rolemodel/optics/dist/css/core/base';

/* Component */
@import '@rolemodel/optics/dist/css/components/breadcrumbs';
```

## Variations

### Default

`.breadcrumbs` should be used on a `nav` element. Within it, links with `.breadcrumbs__link`, separators with `.breadcrumbs__separator`, and the last item span with `.breadcrumbs__text` should be used.

```html
<nav class="breadcrumbs">
  <a class="breadcrumbs__link" href="#">USA</a>
  <div class="breadcrumbs__separator">
    <span class="material-symbols-outlined icon">arrow_right</span>
  </div>
  <a class="breadcrumbs__link" href="#">Mexico</a>
  <div class="breadcrumbs__separator">
    <span class="material-symbols-outlined icon">arrow_right</span>
  </div>
  <a class="breadcrumbs__link" href="#">Canada</a>
  <div class="breadcrumbs__separator">
    <span class="material-symbols-outlined icon">arrow_right</span>
  </div>
  <span class="breadcrumbs__text">England</span>
</nav>
```

### Size

`.breadcrumbs--small`, `.breadcrumbs--large` (with small being the default) modify the font size of the breadcrumb links and text.

```html
<nav class="breadcrumbs breadcrumbs--large">
  <a class="breadcrumbs__link" href="#">USA</a>
  <div class="breadcrumbs__separator">
    <span class="material-symbols-outlined icon">arrow_right</span>
  </div>
  <a class="breadcrumbs__link" href="#">Mexico</a>
  <div class="breadcrumbs__separator">
    <span class="material-symbols-outlined icon">arrow_right</span>
  </div>
  <a class="breadcrumbs__link" href="#">Canada</a>
  <div class="breadcrumbs__separator">
    <span class="material-symbols-outlined icon">arrow_right</span>
  </div>
  <span class="breadcrumbs__text">England</span>
</nav>
```

### Separator

`.breadcrumbs__separator` is used to separate the links in the breadcrumbs. It is a div that anything can be put within, however typically would be used with an [Icon](components-icon.md).

```html
<nav class="breadcrumbs">
  <a class="breadcrumbs__link" href="#">USA</a>
  <div class="breadcrumbs__separator">
    <span class="material-symbols-outlined icon">folder</span>
  </div>
  <a class="breadcrumbs__link" href="#">Mexico</a>
  <div class="breadcrumbs__separator">
    <span class="material-symbols-outlined icon">folder</span>
  </div>
  <a class="breadcrumbs__link" href="#">Canada</a>
  <div class="breadcrumbs__separator">
    <span class="material-symbols-outlined icon">folder</span>
  </div>
  <span class="breadcrumbs__text">England</span>
</nav>
```

## Breadcrumb API

Styles are built on CSS variables scoped to the breadcrumbs.

Here are the variables that can be customized:

```css
--_op-breadcrumbs-font-size-small:
--_op-breadcrumbs-font-size-large:
```

## Customizing Breadcrumbs styles

> **Important!:** These patterns represent how to customize the style of the breadcrumbs for your project.

The breadcrumbs classes are structured using the [BEM methodology](https://getbem.com/naming).

This allows us to define core styles on a main [block](https://getbem.com/naming/#block) class, and use [modifiers](https://getbem.com/naming/#modifier) to encapsulate variant styles. You can modify all breadcrumbs behavior by overriding the `.breadcrumbs` selector and setting any properties:

```css
.breadcrumbs {
  align-items: start;
}
```

If you want to override how the size modifier behaves, you can use the API described above to change which font size each size uses.

```css
.breadcrumbs {
  --_op-breadcrumbs-font-size-small: var(--op-font-4x-large);
  --_op-breadcrumbs-font-size-large: var(--op-font-6x-large);
}
```

## New Breadcrumbs Variations

> **Important!:** These patterns represent how to create new variations of the Breadcrumbs for your project.

Your application may need a variation. To add one, just follow this template. Note the double hyphen, indicating that this is a [modifier](https://getbem.com/naming/#modifier):

```css
.breadcrumbs--{name} {
  background-color:
  color:
}
```
