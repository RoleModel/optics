# Navbar

[Source Code](https://github.com/RoleModel/optics/blob/main/src/components/navbar.css)

Navbar classes provide simple styling for a navigation header.

For instructions on how to integrate a navbar into your applications layout, see [Layout With Navbar](recipes-layout.md)

`.navbar` is the main component that everything is contained within.

Any [Button](components-button.md#default) style can be used for the links.

## Playground

```html
<div class="app-body" style="height: 40rem">
  <div class="app__header">
    <div class="navbar">
      <a class="navbar__brand" href="/">
        <img src="./public/rms-logo.svg" alt="RoleModel Software Logo" />
      </a>

      <nav class="navbar__content navbar__content--justify-start">
        <button class="btn btn--no-border btn--active">
          <span class="material-symbols-outlined icon">inbox</span>Inbox
        </button>
        <button class="btn btn--no-border">
          <span class="material-symbols-outlined icon">send</span>Outbox
        </button>
        <button class="btn btn--no-border">
          <span class="material-symbols-outlined icon">favorite</span>Favorite
        </button>
        <button class="btn btn--no-border">
          <span class="material-symbols-outlined icon">blur_on</span>Something
        </button>
      </nav>

      <div class="navbar__content">
        <a href="/?path=/docs/components-avatar--docs" class="avatar avatar--medium"
          ><img src="https://picsum.photos/id/1/400/400" alt="Avatar"
        /></a>
      </div>
    </div>
  </div>
</div>
```
| Arg | Default | Options | Description |
| --- | --- | --- | --- |
| `style` | `"default"` | `default`, `primary` |  |
| `brand` |  |  |  |
| `justify` |  | `start`, `center`, `end` |  |
| `activeLink` |  | `Inbox`, `Outbox`, `Favorite`, `Something` |  |

### Selective Imports

Navbar can be used as a standalone component, however, it does have a few dependencies. To see a full dependency list, see [Dependency Graph](overview-selective-imports.md#dependencies)

```css
/* Depends on */
@import '@rolemodel/optics/dist/css/core/fonts';
@import '@rolemodel/optics/dist/css/core/tokens';
@import '@rolemodel/optics/dist/css/core/base';
@import '@rolemodel/optics/dist/css/components/icon';
@import '@rolemodel/optics/dist/css/components/button';

/* Component */
@import '@rolemodel/optics/dist/css/components/navbar';
```

## Variations

### Default

`.navbar` Provides a neutral colored navbar. This uses the neutral color defined in your theme.

```html
<div class="app-body" style="height: 40rem">
  <div class="app__header">
    <div class="navbar">
      <a class="navbar__brand" href="/">
        <img src="./public/rms-logo.svg" alt="RoleModel Software Logo" />
      </a>

      <nav class="navbar__content navbar__content--justify-start">
        <button class="btn btn--no-border btn--active">
          <span class="material-symbols-outlined icon">inbox</span>Inbox
        </button>
        <button class="btn btn--no-border">
          <span class="material-symbols-outlined icon">send</span>Outbox
        </button>
        <button class="btn btn--no-border">
          <span class="material-symbols-outlined icon">favorite</span>Favorite
        </button>
        <button class="btn btn--no-border">
          <span class="material-symbols-outlined icon">blur_on</span>Something
        </button>
      </nav>

      <div class="navbar__content">
        <a href="/?path=/docs/components-avatar--docs" class="avatar avatar--medium"
          ><img src="https://picsum.photos/id/1/400/400" alt="Avatar"
        /></a>
      </div>
    </div>
  </div>
</div>
```

### Primary

`.navbar.navbar--primary` Provides a primary colored navbar. This uses the primary color defined in your theme.

```html
<div class="app-body" style="height: 40rem">
  <div class="app__header">
    <div class="navbar navbar--primary">
      <a class="navbar__brand" href="/">
        <img src="./public/rms-logo.svg" alt="RoleModel Software Logo" />
      </a>

      <nav class="navbar__content navbar__content--justify-start">
        <button class="btn btn--no-border btn--active">
          <span class="material-symbols-outlined icon">inbox</span>Inbox
        </button>
        <button class="btn btn--no-border">
          <span class="material-symbols-outlined icon">send</span>Outbox
        </button>
        <button class="btn btn--no-border">
          <span class="material-symbols-outlined icon">favorite</span>Favorite
        </button>
        <button class="btn btn--no-border">
          <span class="material-symbols-outlined icon">blur_on</span>Something
        </button>
      </nav>

      <div class="navbar__content">
        <a href="/?path=/docs/components-avatar--docs" class="avatar avatar--medium"
          ><img src="https://picsum.photos/id/1/400/400" alt="Avatar"
        /></a>
      </div>
    </div>
  </div>
</div>
```

### Brand

`.navbar__brand` can be used with an image tag inside. This can be used to display your applications branding or logo.

The brand is not required and the navbar content will adjust itself accordingly.

```html
<div class="app-body" style="height: 40rem">
  <div class="app__header">
    <div class="navbar">
      <nav class="navbar__content navbar__content--justify-start">
        <button class="btn btn--no-border btn--active">
          <span class="material-symbols-outlined icon">inbox</span>Inbox
        </button>
        <button class="btn btn--no-border">
          <span class="material-symbols-outlined icon">send</span>Outbox
        </button>
        <button class="btn btn--no-border">
          <span class="material-symbols-outlined icon">favorite</span>Favorite
        </button>
        <button class="btn btn--no-border">
          <span class="material-symbols-outlined icon">blur_on</span>Something
        </button>
      </nav>

      <div class="navbar__content">
        <a href="/?path=/docs/components-avatar--docs" class="avatar avatar--medium"
          ><img src="https://picsum.photos/id/1/400/400" alt="Avatar"
        /></a>
      </div>
    </div>
  </div>
</div>
```

### Content

`.navbar__content` defines the container that the buttons should be placed in. If you are putting navigation links within a content section, you should use the `nav` element for that section. It can be justified by using modifier classes.

`.navbar__content--justify-start`, `.navbar__content--justify-center`, `.navbar__content--justify-end` with start being the default.

```html
<div class="app-body" style="height: 40rem">
  <div class="app__header">
    <div class="navbar">
      <a class="navbar__brand" href="/">
        <img src="./public/rms-logo.svg" alt="RoleModel Software Logo" />
      </a>

      <nav class="navbar__content navbar__content--justify-center">
        <button class="btn btn--no-border btn--active">
          <span class="material-symbols-outlined icon">inbox</span>Inbox
        </button>
        <button class="btn btn--no-border">
          <span class="material-symbols-outlined icon">send</span>Outbox
        </button>
        <button class="btn btn--no-border">
          <span class="material-symbols-outlined icon">favorite</span>Favorite
        </button>
        <button class="btn btn--no-border">
          <span class="material-symbols-outlined icon">blur_on</span>Something
        </button>
      </nav>

      <div class="navbar__content">
        <a href="/?path=/docs/components-avatar--docs" class="avatar avatar--medium"
          ><img src="https://picsum.photos/id/1/400/400" alt="Avatar"
        /></a>
      </div>
    </div>
  </div>
</div>
```

```html
<div class="app-body" style="height: 40rem">
  <div class="app__header">
    <div class="navbar">
      <a class="navbar__brand" href="/">
        <img src="./public/rms-logo.svg" alt="RoleModel Software Logo" />
      </a>

      <nav class="navbar__content navbar__content--justify-end">
        <button class="btn btn--no-border btn--active">
          <span class="material-symbols-outlined icon">inbox</span>Inbox
        </button>
        <button class="btn btn--no-border">
          <span class="material-symbols-outlined icon">send</span>Outbox
        </button>
        <button class="btn btn--no-border">
          <span class="material-symbols-outlined icon">favorite</span>Favorite
        </button>
        <button class="btn btn--no-border">
          <span class="material-symbols-outlined icon">blur_on</span>Something
        </button>
      </nav>

      <div class="navbar__content">
        <a href="/?path=/docs/components-avatar--docs" class="avatar avatar--medium"
          ><img src="https://picsum.photos/id/1/400/400" alt="Avatar"
        /></a>
      </div>
    </div>
  </div>
</div>
```

## Navbar API

Color and hover styles are built on CSS variables scoped to the navbar.

Here are the variables that can be customized.

```css
/* Public API */
/* Normal */
--_op-navbar-background-color
--_op-navbar-text-color
--_op-navbar-border-color

/* Height */
--_op-navbar-brand-height

/* Spacing */
--_op-navbar-horizontal-spacing
--_op-navbar-content-spacing
--_op-navbar-content-item-spacing
```

## Customizing Navbar styles

> **Important!:** These patterns represent how to customize the style of the navbar for your project.

The navbar classes are structured using the [BEM methodology](https://getbem.com/naming).

This allows us to define core styles on a main [block](https://getbem.com/naming/#block) class, and use [modifiers](https://getbem.com/naming/#modifier) to encapsulate variant styles. You can modify all navbar behavior by overriding the `.navbar` selector and setting any properties:

```css
.navbar {
  --_op-navbar-background-color: pink;
  --_op-navbar-text-color: blue;
}
```

If you need to override the behavior of a particular navbar style, you can open the respective class and set or change properties

```css
.navbar--modifier {
  --_op-navbar-brand-height: 5.4rem;
  --_op-navbar-horizontal-spacing: var(--op-space-small);
  --_op-navbar-content-item-spacing: var(--op-space-x-small);
}
```

## New Navbar Variations

> **Important!:** These patterns represent how to create new variations of the Navbar for your project.

Your application may need a custom navbar. To add one, just follow this template:

```css
.navbar--{name} {
}
```
