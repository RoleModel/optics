# Pagination

[Source Code](https://github.com/RoleModel/optics/blob/main/src/components/pagination.css)

Pagination is used to navigate through a series of pages, typically when dealing with tabular data.
A few classes are used in combination with the button component to achieve this.

An example of using this component with the Table component can be found in [Table With Pagination](components-table.md#with-pagination).

## Note on Implementation

This is just a styling pattern and does not implement the paging functionality. That is up to the projects needs.

A commonly used tool for Ruby on Rails projects is [Kaminari](https://github.com/kaminari/kaminari). It allows you to copy its templates and customize them. To apply these patterns to those templates, just edit the files it generates and use the classes in these examples.

[RoleModel Rails Kaminari Generator](https://github.com/RoleModel/rolemodel_rails/tree/master/lib/generators/rolemodel/kaminari) provides a generator to install and configure Kaminari with Optics classes applied.

## Playground

```html
<nav class="pagination">
  <a class="btn btn--small btn--no-border btn--icon" href="#">
    <span class="material-symbols-outlined">first_page</span>
  </a>
  <a class="btn btn--small btn--no-border" href="#">
    <span class="material-symbols-outlined">chevron_left</span>
    Prev
  </a>
  <a href="#" class="btn btn--no-border btn--active btn--small">1</a>
  <a href="#" class="btn btn--no-border btn--small">2</a>
  <a href="#" class="btn btn--no-border btn--small">3</a>

  <div class="pagination__divider">...</div>

  <a href="#" class="btn btn--no-border btn--small">10</a>
  <a href="#" class="btn btn--no-border btn--small">11</a>
  <a href="#" class="btn btn--no-border btn--small">12</a>
  <a class="btn btn--small btn--no-border" href="#">
    Next
    <span class="material-symbols-outlined">chevron_right</span>
  </a>
  <a class="btn btn--small btn--no-border btn--icon" href="#">
    <span class="material-symbols-outlined">last_page</span>
  </a>
</nav>
```
| Arg | Default | Options | Description |
| --- | --- | --- | --- |
| `activePage` |  | `1`, `2`, `3`, `10`, `11`, `12` |  |
| `includeShowing` |  |  |  |

### Selective Imports

Pagination can be used as a standalone component, however, it does have a few dependencies. To see a full dependency list, see [Dependency Graph](overview-selective-imports.md#dependencies)

```css
/* Depends on */
@import '@rolemodel/optics/dist/css/core/fonts';
@import '@rolemodel/optics/dist/css/core/tokens';
@import '@rolemodel/optics/dist/css/core/base';
@import '@rolemodel/optics/dist/css/core/button';
@import '@rolemodel/optics/dist/css/core/form';

/* Component */
@import '@rolemodel/optics/dist/css/components/pagination';
```

## Variations

### Default

`.pagination` Is the main class. It can be placed on a `nav` element and wraps a collection of [buttons](components-button.md) to create a pagination component.

The buttons within can use any of the button classes, but form a default look, use the `.btn .btn--no-border .btn--small` classes.

For the first and last page buttons, `.btn--icon` can be added for ensure a square button.

For the currently active page, `.btn--active` can be used.

`.pagination__divider` can be used on a div with contents of `...` to indicate a break in the pagination.
This pattern is commonly used (and recommended to be used) when there are more that six pages of content. It prevents the pagination from becoming too long.

```html
<nav class="pagination">
  <a class="btn btn--small btn--no-border btn--icon" href="#">
    <span class="material-symbols-outlined">first_page</span>
  </a>
  <a class="btn btn--small btn--no-border" href="#">
    <span class="material-symbols-outlined">chevron_left</span>
    Prev
  </a>
  <a href="#" class="btn btn--no-border btn--active btn--small">1</a>
  <a href="#" class="btn btn--no-border btn--small">2</a>
  <a href="#" class="btn btn--no-border btn--small">3</a>

  <div class="pagination__divider">...</div>

  <a href="#" class="btn btn--no-border btn--small">10</a>
  <a href="#" class="btn btn--no-border btn--small">11</a>
  <a href="#" class="btn btn--no-border btn--small">12</a>
  <a class="btn btn--small btn--no-border" href="#">
    Next
    <span class="material-symbols-outlined">chevron_right</span>
  </a>
  <a class="btn btn--small btn--no-border btn--icon" href="#">
    <span class="material-symbols-outlined">last_page</span>
  </a>
</nav>
```

### With Showing Select

Another common pattern is to allow users to change how many items are shown per page. The visuals of this can be achieved by using a form group with a select component. The pagination styling will handle making the form label inline.

```html
<nav class="pagination">
  <div class="form-group">
    <label class="form-label" for="showing-input">Showing</label>
    <select id="showing-input" class="form-control form-control--no-border form-control--small">
      <option value="10">10</option>
      <option value="20">20</option>
      <option value="50">50</option>
      <option value="100">100</option>
    </select>
  </div>

  <a class="btn btn--small btn--no-border btn--icon" href="#">
    <span class="material-symbols-outlined">first_page</span>
  </a>
  <a class="btn btn--small btn--no-border" href="#">
    <span class="material-symbols-outlined">chevron_left</span>
    Prev
  </a>
  <a href="#" class="btn btn--no-border btn--active btn--small">1</a>
  <a href="#" class="btn btn--no-border btn--small">2</a>
  <a href="#" class="btn btn--no-border btn--small">3</a>

  <div class="pagination__divider">...</div>

  <a href="#" class="btn btn--no-border btn--small">10</a>
  <a href="#" class="btn btn--no-border btn--small">11</a>
  <a href="#" class="btn btn--no-border btn--small">12</a>
  <a class="btn btn--small btn--no-border" href="#">
    Next
    <span class="material-symbols-outlined">chevron_right</span>
  </a>
  <a class="btn btn--small btn--no-border btn--icon" href="#">
    <span class="material-symbols-outlined">last_page</span>
  </a>
</nav>
```

## Customizing Pagination styles

> **Important!:** These patterns represent how to customize the style of the pagination for your project.

The pagination classes are structured using the [BEM methodology](https://getbem.com/naming).

This allows us to define core styles on a main [block](https://getbem.com/naming/#block) class, and use [modifiers](https://getbem.com/naming/#modifier) to encapsulate variant styles. You can modify all pagination behavior by overriding the `%pagination-global` selector and setting any properties:

```css
.pagination {
}
```

## New Pagination Variations

> **Important!:** These patterns represent how to create new variations of the pagination for your project.

Your application may need a custom pagination. To add one, just follow this template:

```css
.pagination--{name} {
}
```
