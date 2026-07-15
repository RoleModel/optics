# Sidebar

[Source Code](https://github.com/RoleModel/optics/blob/main/src/components/sidebar.css)

Sidebar classes provide simple styling for a navigation sidebar drawer, compact, or rail.

For instructions on how to integrate a sidebar into your applications layout, see [Layout With Sidebar](recipes-layout.md)

`.sidebar` is the main component that everything is contained within.

`.sidebar--drawer`, `.sidebar--compact`, and `.sidebar--rail` are used to denote which style of sidebar you would like to use.

```html
<div class="sidebar sidebar--drawer">...</div>
```

Any [Button](components-button.md#default) style can be used for the links.

- Drawer will use the normal button style, but left aligned
- Compact will use the `.icon-with-label` style
- Rail will use the `.btn--icon` style and hide the label

## Responsive Sidebar

The sidebar can be made responsive with a little snippet of Javascript. This allows for the sidebar to change from the larger state (compact or drawer) to the rail when the screen is smaller. e.g.

```js
const sidebarStyleOptions = {
  drawer: 'sidebar--drawer',
  compact: 'sidebar--compact',
  rail: 'sidebar--rail',
}

const getSidebarStyle = (width) => {
  let newStyle = sidebarStyleOptions['drawer']

  if (window.innerWidth <= 1024) {
    newStyle = sidebarStyleOptions['compact']
  }

  if (window.innerWidth <= 768) {
    newStyle = sidebarStyleOptions['rail']
  }

  return newStyle
}

const applySidebarStyle = (newStyle) => {
  const sidebar = document.getElementById('sidebar')
  sidebar.classList.remove(sidebarStyleOptions['drawer'])
  sidebar.classList.remove(sidebarStyleOptions['compact'])
  sidebar.classList.remove(sidebarStyleOptions['rail'])
  sidebar.classList.add(newStyle)
}

// Initial Page Load
applySidebarStyle(getSidebarStyle(window.innerWidth))

// Window Resize
window.addEventListener('resize', (event) => {
  applySidebarStyle(getSidebarStyle(window.innerWidth))
})
```

## Playground

```html
<div class="app-with-sidebar" style="height: 80rem">
  <nav class="sidebar sidebar--drawer">
    <a class="sidebar__brand" href="/">
      <img src="./public/rms-logo.svg" alt="RoleModel Software Logo" />
    </a>

    <div class="sidebar__content sidebar__content--start">
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
        <span class="material-symbols-outlined icon">delete</span>Trash
      </button>
      <button class="btn btn--no-border">
        <span class="material-symbols-outlined icon">circle</span>Circle
      </button>
      <button class="btn btn--no-border">
        <span class="material-symbols-outlined icon">change_history</span>Triangle
      </button>
      <button class="btn btn--no-border">
        <span class="material-symbols-outlined icon">square</span>Square
      </button>
      <button class="btn btn--no-border">
        <span class="material-symbols-outlined icon">blur_on</span>Something
      </button>
    </div>
  </nav>
  <div></div>
</div>
```
| Arg | Default | Options | Description |
| --- | --- | --- | --- |
| `size` | `"drawer"` | `drawer`, `compact`, `rail` |  |
| `padded` |  |  |  |
| `style` | `"default"` | `default`, `primary` |  |
| `brand` |  |  |  |
| `position` |  | `start`, `center`, `end` |  |
| `activeLink` |  | `Inbox`, `Outbox`, `Favorite`, `Trash`, `Circle`, `Triangle`, `Square`, `Different` |  |

### Selective Imports

Sidebar can be used as a standalone component, however, it does have a few dependencies. To see a full dependency list, see [Dependency Graph](overview-selective-imports.md#dependencies)

```css
/* Depends on */
@import '@rolemodel/optics/dist/css/core/fonts';
@import '@rolemodel/optics/dist/css/core/tokens';
@import '@rolemodel/optics/dist/css/core/base';
@import '@rolemodel/optics/dist/css/components/icon';
@import '@rolemodel/optics/dist/css/components/button';

/* Component */
@import '@rolemodel/optics/dist/css/components/sidebar';
```

## Variations

### Default

`.sidebar` Provides a neutral colored sidebar. This uses the neutral color defined in your theme.

<div class="flex gap-sm">
  <div>
    ```html
<div class="app-with-sidebar" style="height: 80rem">
  <nav class="sidebar sidebar--drawer">
    <a class="sidebar__brand" href="/">
      <img src="./public/rms-logo.svg" alt="RoleModel Software Logo" />
    </a>

    <div class="sidebar__content sidebar__content--start">
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
        <span class="material-symbols-outlined icon">delete</span>Trash
      </button>
      <button class="btn btn--no-border">
        <span class="material-symbols-outlined icon">circle</span>Circle
      </button>
      <button class="btn btn--no-border">
        <span class="material-symbols-outlined icon">change_history</span>Triangle
      </button>
      <button class="btn btn--no-border">
        <span class="material-symbols-outlined icon">square</span>Square
      </button>
      <button class="btn btn--no-border">
        <span class="material-symbols-outlined icon">blur_on</span>Something
      </button>
    </div>
  </nav>
  <div></div>
</div>
```
  </div>
  <div>
    ```html
<div class="app-with-sidebar" style="height: 80rem">
  <nav class="sidebar sidebar--compact">
    <a class="sidebar__brand" href="/">
      <img src="./public/rms-logo.svg" alt="RoleModel Software Logo" />
    </a>

    <div class="sidebar__content sidebar__content--start">
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
        <span class="material-symbols-outlined icon">delete</span>Trash
      </button>
      <button class="btn btn--no-border">
        <span class="material-symbols-outlined icon">circle</span>Circle
      </button>
      <button class="btn btn--no-border">
        <span class="material-symbols-outlined icon">change_history</span>Triangle
      </button>
      <button class="btn btn--no-border">
        <span class="material-symbols-outlined icon">square</span>Square
      </button>
      <button class="btn btn--no-border">
        <span class="material-symbols-outlined icon">blur_on</span>Something
      </button>
    </div>
  </nav>
  <div></div>
</div>
```
  </div>
  <div>
    ```html
<div class="app-with-sidebar" style="height: 80rem">
  <nav class="sidebar sidebar--rail">
    <a class="sidebar__brand" href="/">
      <img src="./public/rms-logo.svg" alt="RoleModel Software Logo" />
    </a>

    <div class="sidebar__content sidebar__content--start">
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
        <span class="material-symbols-outlined icon">delete</span>Trash
      </button>
      <button class="btn btn--no-border">
        <span class="material-symbols-outlined icon">circle</span>Circle
      </button>
      <button class="btn btn--no-border">
        <span class="material-symbols-outlined icon">change_history</span>Triangle
      </button>
      <button class="btn btn--no-border">
        <span class="material-symbols-outlined icon">square</span>Square
      </button>
      <button class="btn btn--no-border">
        <span class="material-symbols-outlined icon">blur_on</span>Something
      </button>
    </div>
  </nav>
  <div></div>
</div>
```
  </div>
</div>

### Primary

`.sidebar--primary` Provides a primary colored sidebar. This uses the primary color defined in your theme.

<div class="flex gap-sm">
  <div>
    ```html
<div class="app-with-sidebar" style="height: 80rem">
  <nav class="sidebar sidebar--primary sidebar--drawer">
    <a class="sidebar__brand" href="/">
      <img src="./public/rms-logo.svg" alt="RoleModel Software Logo" />
    </a>

    <div class="sidebar__content sidebar__content--start">
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
        <span class="material-symbols-outlined icon">delete</span>Trash
      </button>
      <button class="btn btn--no-border">
        <span class="material-symbols-outlined icon">circle</span>Circle
      </button>
      <button class="btn btn--no-border">
        <span class="material-symbols-outlined icon">change_history</span>Triangle
      </button>
      <button class="btn btn--no-border">
        <span class="material-symbols-outlined icon">square</span>Square
      </button>
      <button class="btn btn--no-border">
        <span class="material-symbols-outlined icon">blur_on</span>Something
      </button>
    </div>
  </nav>
  <div></div>
</div>
```
  </div>
  <div>
    ```html
<div class="app-with-sidebar" style="height: 80rem">
  <nav class="sidebar sidebar--primary sidebar--compact">
    <a class="sidebar__brand" href="/">
      <img src="./public/rms-logo.svg" alt="RoleModel Software Logo" />
    </a>

    <div class="sidebar__content sidebar__content--start">
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
        <span class="material-symbols-outlined icon">delete</span>Trash
      </button>
      <button class="btn btn--no-border">
        <span class="material-symbols-outlined icon">circle</span>Circle
      </button>
      <button class="btn btn--no-border">
        <span class="material-symbols-outlined icon">change_history</span>Triangle
      </button>
      <button class="btn btn--no-border">
        <span class="material-symbols-outlined icon">square</span>Square
      </button>
      <button class="btn btn--no-border">
        <span class="material-symbols-outlined icon">blur_on</span>Something
      </button>
    </div>
  </nav>
  <div></div>
</div>
```
  </div>
  <div>
    ```html
<div class="app-with-sidebar" style="height: 80rem">
  <nav class="sidebar sidebar--primary sidebar--rail">
    <a class="sidebar__brand" href="/">
      <img src="./public/rms-logo.svg" alt="RoleModel Software Logo" />
    </a>

    <div class="sidebar__content sidebar__content--start">
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
        <span class="material-symbols-outlined icon">delete</span>Trash
      </button>
      <button class="btn btn--no-border">
        <span class="material-symbols-outlined icon">circle</span>Circle
      </button>
      <button class="btn btn--no-border">
        <span class="material-symbols-outlined icon">change_history</span>Triangle
      </button>
      <button class="btn btn--no-border">
        <span class="material-symbols-outlined icon">square</span>Square
      </button>
      <button class="btn btn--no-border">
        <span class="material-symbols-outlined icon">blur_on</span>Something
      </button>
    </div>
  </nav>
  <div></div>
</div>
```
  </div>
</div>

### Padded

`.sidebar--padded` Adds a top and bottom padding to the sidebar.

<div class="flex gap-sm">
  <div>
    ```html
<div class="app-with-sidebar" style="height: 80rem">
  <nav class="sidebar sidebar--drawer sidebar--padded">
    <a class="sidebar__brand" href="/">
      <img src="./public/rms-logo.svg" alt="RoleModel Software Logo" />
    </a>

    <div class="sidebar__content sidebar__content--start">
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
        <span class="material-symbols-outlined icon">delete</span>Trash
      </button>
      <button class="btn btn--no-border">
        <span class="material-symbols-outlined icon">circle</span>Circle
      </button>
      <button class="btn btn--no-border">
        <span class="material-symbols-outlined icon">change_history</span>Triangle
      </button>
      <button class="btn btn--no-border">
        <span class="material-symbols-outlined icon">square</span>Square
      </button>
      <button class="btn btn--no-border">
        <span class="material-symbols-outlined icon">blur_on</span>Something
      </button>
    </div>
  </nav>
  <div></div>
</div>
```
  </div>
  <div>
    ```html
<div class="app-with-sidebar" style="height: 80rem">
  <nav class="sidebar sidebar--compact sidebar--padded">
    <a class="sidebar__brand" href="/">
      <img src="./public/rms-logo.svg" alt="RoleModel Software Logo" />
    </a>

    <div class="sidebar__content sidebar__content--start">
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
        <span class="material-symbols-outlined icon">delete</span>Trash
      </button>
      <button class="btn btn--no-border">
        <span class="material-symbols-outlined icon">circle</span>Circle
      </button>
      <button class="btn btn--no-border">
        <span class="material-symbols-outlined icon">change_history</span>Triangle
      </button>
      <button class="btn btn--no-border">
        <span class="material-symbols-outlined icon">square</span>Square
      </button>
      <button class="btn btn--no-border">
        <span class="material-symbols-outlined icon">blur_on</span>Something
      </button>
    </div>
  </nav>
  <div></div>
</div>
```
  </div>
  <div>
    ```html
<div class="app-with-sidebar" style="height: 80rem">
  <nav class="sidebar sidebar--rail sidebar--padded">
    <a class="sidebar__brand" href="/">
      <img src="./public/rms-logo.svg" alt="RoleModel Software Logo" />
    </a>

    <div class="sidebar__content sidebar__content--start">
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
        <span class="material-symbols-outlined icon">delete</span>Trash
      </button>
      <button class="btn btn--no-border">
        <span class="material-symbols-outlined icon">circle</span>Circle
      </button>
      <button class="btn btn--no-border">
        <span class="material-symbols-outlined icon">change_history</span>Triangle
      </button>
      <button class="btn btn--no-border">
        <span class="material-symbols-outlined icon">square</span>Square
      </button>
      <button class="btn btn--no-border">
        <span class="material-symbols-outlined icon">blur_on</span>Something
      </button>
    </div>
  </nav>
  <div></div>
</div>
```
  </div>
</div>

### Brand

`.sidebar__brand` can be used with an image tag inside. This can be used to display your applications branding or logo.

The brand is not required and the sidebar content will adjust itself accordingly.

<div class="flex gap-sm">
  <div>
    ```html
<div class="app-with-sidebar" style="height: 80rem">
  <nav class="sidebar sidebar--drawer">
    <div class="sidebar__content sidebar__content--start">
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
        <span class="material-symbols-outlined icon">delete</span>Trash
      </button>
      <button class="btn btn--no-border">
        <span class="material-symbols-outlined icon">circle</span>Circle
      </button>
      <button class="btn btn--no-border">
        <span class="material-symbols-outlined icon">change_history</span>Triangle
      </button>
      <button class="btn btn--no-border">
        <span class="material-symbols-outlined icon">square</span>Square
      </button>
      <button class="btn btn--no-border">
        <span class="material-symbols-outlined icon">blur_on</span>Something
      </button>
    </div>
  </nav>
  <div></div>
</div>
```
  </div>
  <div>
    ```html
<div class="app-with-sidebar" style="height: 80rem">
  <nav class="sidebar sidebar--compact">
    <div class="sidebar__content sidebar__content--start">
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
        <span class="material-symbols-outlined icon">delete</span>Trash
      </button>
      <button class="btn btn--no-border">
        <span class="material-symbols-outlined icon">circle</span>Circle
      </button>
      <button class="btn btn--no-border">
        <span class="material-symbols-outlined icon">change_history</span>Triangle
      </button>
      <button class="btn btn--no-border">
        <span class="material-symbols-outlined icon">square</span>Square
      </button>
      <button class="btn btn--no-border">
        <span class="material-symbols-outlined icon">blur_on</span>Something
      </button>
    </div>
  </nav>
  <div></div>
</div>
```
  </div>
  <div>
    ```html
<div class="app-with-sidebar" style="height: 80rem">
  <nav class="sidebar sidebar--rail">
    <div class="sidebar__content sidebar__content--start">
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
        <span class="material-symbols-outlined icon">delete</span>Trash
      </button>
      <button class="btn btn--no-border">
        <span class="material-symbols-outlined icon">circle</span>Circle
      </button>
      <button class="btn btn--no-border">
        <span class="material-symbols-outlined icon">change_history</span>Triangle
      </button>
      <button class="btn btn--no-border">
        <span class="material-symbols-outlined icon">square</span>Square
      </button>
      <button class="btn btn--no-border">
        <span class="material-symbols-outlined icon">blur_on</span>Something
      </button>
    </div>
  </nav>
  <div></div>
</div>
```
  </div>
</div>

### Content

`.sidebar__content` defines the container that the buttons should be placed in. It can be positioned by using modifier classes.

`.sidebar__content--start`, `.sidebar__content--center`, `.sidebar__content--end` with start being the default.

<div class="flex gap-sm">
  <div>
    ```html
<div class="app-with-sidebar" style="height: 80rem">
  <nav class="sidebar sidebar--drawer">
    <a class="sidebar__brand" href="/">
      <img src="./public/rms-logo.svg" alt="RoleModel Software Logo" />
    </a>

    <div class="sidebar__content sidebar__content--center">
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
        <span class="material-symbols-outlined icon">delete</span>Trash
      </button>
      <button class="btn btn--no-border">
        <span class="material-symbols-outlined icon">circle</span>Circle
      </button>
      <button class="btn btn--no-border">
        <span class="material-symbols-outlined icon">change_history</span>Triangle
      </button>
      <button class="btn btn--no-border">
        <span class="material-symbols-outlined icon">square</span>Square
      </button>
      <button class="btn btn--no-border">
        <span class="material-symbols-outlined icon">blur_on</span>Something
      </button>
    </div>
  </nav>
  <div></div>
</div>
```
  </div>
  <div>
    ```html
<div class="app-with-sidebar" style="height: 80rem">
  <nav class="sidebar sidebar--compact">
    <a class="sidebar__brand" href="/">
      <img src="./public/rms-logo.svg" alt="RoleModel Software Logo" />
    </a>

    <div class="sidebar__content sidebar__content--center">
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
        <span class="material-symbols-outlined icon">delete</span>Trash
      </button>
      <button class="btn btn--no-border">
        <span class="material-symbols-outlined icon">circle</span>Circle
      </button>
      <button class="btn btn--no-border">
        <span class="material-symbols-outlined icon">change_history</span>Triangle
      </button>
      <button class="btn btn--no-border">
        <span class="material-symbols-outlined icon">square</span>Square
      </button>
      <button class="btn btn--no-border">
        <span class="material-symbols-outlined icon">blur_on</span>Something
      </button>
    </div>
  </nav>
  <div></div>
</div>
```
  </div>
  <div>
    ```html
<div class="app-with-sidebar" style="height: 80rem">
  <nav class="sidebar sidebar--rail">
    <a class="sidebar__brand" href="/">
      <img src="./public/rms-logo.svg" alt="RoleModel Software Logo" />
    </a>

    <div class="sidebar__content sidebar__content--center">
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
        <span class="material-symbols-outlined icon">delete</span>Trash
      </button>
      <button class="btn btn--no-border">
        <span class="material-symbols-outlined icon">circle</span>Circle
      </button>
      <button class="btn btn--no-border">
        <span class="material-symbols-outlined icon">change_history</span>Triangle
      </button>
      <button class="btn btn--no-border">
        <span class="material-symbols-outlined icon">square</span>Square
      </button>
      <button class="btn btn--no-border">
        <span class="material-symbols-outlined icon">blur_on</span>Something
      </button>
    </div>
  </nav>
  <div></div>
</div>
```
  </div>
</div>

<div class="flex gap-sm">
  <div>
    ```html
<div class="app-with-sidebar" style="height: 80rem">
  <nav class="sidebar sidebar--drawer">
    <a class="sidebar__brand" href="/">
      <img src="./public/rms-logo.svg" alt="RoleModel Software Logo" />
    </a>

    <div class="sidebar__content sidebar__content--end">
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
        <span class="material-symbols-outlined icon">delete</span>Trash
      </button>
      <button class="btn btn--no-border">
        <span class="material-symbols-outlined icon">circle</span>Circle
      </button>
      <button class="btn btn--no-border">
        <span class="material-symbols-outlined icon">change_history</span>Triangle
      </button>
      <button class="btn btn--no-border">
        <span class="material-symbols-outlined icon">square</span>Square
      </button>
      <button class="btn btn--no-border">
        <span class="material-symbols-outlined icon">blur_on</span>Something
      </button>
    </div>
  </nav>
  <div></div>
</div>
```
  </div>
  <div>
    ```html
<div class="app-with-sidebar" style="height: 80rem">
  <nav class="sidebar sidebar--compact">
    <a class="sidebar__brand" href="/">
      <img src="./public/rms-logo.svg" alt="RoleModel Software Logo" />
    </a>

    <div class="sidebar__content sidebar__content--end">
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
        <span class="material-symbols-outlined icon">delete</span>Trash
      </button>
      <button class="btn btn--no-border">
        <span class="material-symbols-outlined icon">circle</span>Circle
      </button>
      <button class="btn btn--no-border">
        <span class="material-symbols-outlined icon">change_history</span>Triangle
      </button>
      <button class="btn btn--no-border">
        <span class="material-symbols-outlined icon">square</span>Square
      </button>
      <button class="btn btn--no-border">
        <span class="material-symbols-outlined icon">blur_on</span>Something
      </button>
    </div>
  </nav>
  <div></div>
</div>
```
  </div>
  <div>
    ```html
<div class="app-with-sidebar" style="height: 80rem">
  <nav class="sidebar sidebar--rail">
    <a class="sidebar__brand" href="/">
      <img src="./public/rms-logo.svg" alt="RoleModel Software Logo" />
    </a>

    <div class="sidebar__content sidebar__content--end">
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
        <span class="material-symbols-outlined icon">delete</span>Trash
      </button>
      <button class="btn btn--no-border">
        <span class="material-symbols-outlined icon">circle</span>Circle
      </button>
      <button class="btn btn--no-border">
        <span class="material-symbols-outlined icon">change_history</span>Triangle
      </button>
      <button class="btn btn--no-border">
        <span class="material-symbols-outlined icon">square</span>Square
      </button>
      <button class="btn btn--no-border">
        <span class="material-symbols-outlined icon">blur_on</span>Something
      </button>
    </div>
  </nav>
  <div></div>
</div>
```
  </div>
</div>

<div class="flex gap-sm">
  <div>
    ```html
<div class="app-with-sidebar" style="height: 80rem">
  <nav class="sidebar sidebar--drawer">
    <a class="sidebar__brand" href="/">
      <img src="./public/rms-logo.svg" alt="RoleModel Software Logo" />
    </a>

    <div class="sidebar__content sidebar__content--start">
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
        <span class="material-symbols-outlined icon">delete</span>Trash
      </button>
      <button class="btn btn--no-border">
        <span class="material-symbols-outlined icon">circle</span>Circle
      </button>
      <button class="btn btn--no-border">
        <span class="material-symbols-outlined icon">change_history</span>Triangle
      </button>
      <button class="btn btn--no-border">
        <span class="material-symbols-outlined icon">square</span>Square
      </button>
      <button class="btn btn--no-border">
        <span class="material-symbols-outlined icon">blur_on</span>Something
      </button>
    </div>

    <div class="sidebar__content sidebar__content--end">
      <button class="btn btn--no-border">
        <span class="material-symbols-outlined icon">logout</span>Logout
      </button>
    </div>
  </nav>
  <div></div>
</div>
```
  </div>
  <div>
    ```html
<div class="app-with-sidebar" style="height: 80rem">
  <nav class="sidebar sidebar--compact">
    <a class="sidebar__brand" href="/">
      <img src="./public/rms-logo.svg" alt="RoleModel Software Logo" />
    </a>

    <div class="sidebar__content sidebar__content--start">
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
        <span class="material-symbols-outlined icon">delete</span>Trash
      </button>
      <button class="btn btn--no-border">
        <span class="material-symbols-outlined icon">circle</span>Circle
      </button>
      <button class="btn btn--no-border">
        <span class="material-symbols-outlined icon">change_history</span>Triangle
      </button>
      <button class="btn btn--no-border">
        <span class="material-symbols-outlined icon">square</span>Square
      </button>
      <button class="btn btn--no-border">
        <span class="material-symbols-outlined icon">blur_on</span>Something
      </button>
    </div>

    <div class="sidebar__content sidebar__content--end">
      <button class="btn btn--no-border">
        <span class="material-symbols-outlined icon">logout</span>Logout
      </button>
    </div>
  </nav>
  <div></div>
</div>
```
  </div>
  <div>
    ```html
<div class="app-with-sidebar" style="height: 80rem">
  <nav class="sidebar sidebar--rail">
    <a class="sidebar__brand" href="/">
      <img src="./public/rms-logo.svg" alt="RoleModel Software Logo" />
    </a>

    <div class="sidebar__content sidebar__content--start">
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
        <span class="material-symbols-outlined icon">delete</span>Trash
      </button>
      <button class="btn btn--no-border">
        <span class="material-symbols-outlined icon">circle</span>Circle
      </button>
      <button class="btn btn--no-border">
        <span class="material-symbols-outlined icon">change_history</span>Triangle
      </button>
      <button class="btn btn--no-border">
        <span class="material-symbols-outlined icon">square</span>Square
      </button>
      <button class="btn btn--no-border">
        <span class="material-symbols-outlined icon">blur_on</span>Something
      </button>
    </div>

    <div class="sidebar__content sidebar__content--end">
      <button class="btn btn--no-border">
        <span class="material-symbols-outlined icon">logout</span>Logout
      </button>
    </div>
  </nav>
  <div></div>
</div>
```
  </div>
</div>

## Sidebar API

Color and hover styles are built on CSS variables scoped to the sidebar.

Here are the variables used:

```css
/* Public API */
/* Normal */
--_op-sidebar-background-color
--_op-sidebar-text-color
--_op-sidebar-border-color

/* Width */
--_op-sidebar-rail-width
--_op-sidebar-compact-width
--_op-sidebar-drawer-width
--_op-sidebar-rail-brand-width
--_op-sidebar-compact-brand-width
--_op-sidebar-drawer-brand-width

/* Spacing */
--_op-sidebar-spacing
--_op-sidebar-brand-spacing
--_op-sidebar-content-spacing
--_op-sidebar-content-item-spacing

/* Animation */
--_op-sidebar-transition
```

## Customizing Sidebar styles

> **Important!:** These patterns represent how to customize the style of the sidebar for your project.

The sidebar classes are structured using the [BEM methodology](https://getbem.com/naming).

This allows us to define core styles on a main [block](https://getbem.com/naming/#block) class, and use [modifiers](https://getbem.com/naming/#modifier) to encapsulate variant styles. You can modify all sidebar behavior by overriding the `.sidebar` selector and setting any properties:

```css
.sidebar {
  --_op-sidebar-rail-width: 10rem;
  --_op-sidebar-compact-width: 20rem;
  --_op-sidebar-drawer-width: 30rem;
}
```

There are also styles for the rail and drawer specific styles. They can be overridden like:

```css
.sidebar {
  .sidebar__content {
    align-items: flex-end;
  }
}

.sidebar {
  .sidebar__content {
    > * {
      font-weight: var(--op-font-weight-black);
    }
  }
}
```

If you need to override the color of a particular sidebar style, you can open the respective class and change the variables documented above

```css
/* This will only affect the primary sidebar, but not default */
.sidebar--primary {
  --_op-sidebar-background-color: purple;
  --_op-sidebar-text-color: purple;
}
```

## New Sidebar Variations

> **Important!:** These patterns represent how to create new variations of the sidebar for your project.

Your application may need a variation. To add one, just follow this template. Note the double hyphen, indicating that this is a [modifier](https://getbem.com/naming/#modifier):

```css
.sidebar--{name} {
}
```
