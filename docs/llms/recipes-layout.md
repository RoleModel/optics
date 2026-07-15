# Layout

Optics provides two patterns for application layout. The basic (legacy) version is maintained for backwards compatibility, but all new projects should use the `op-page` pattern.

[Source Code](https://github.com/RoleModel/optics/blob/main/src/core/layout.css)

## OP Page

### Playground

Since the `op-page` layout utilizes the whole window, the playground is best experienced as a full page example.

<a href="/public/example-layout.html" target="_blank" rel="noopener noreferrer">Click here to open the playground</a>

### Classes

Within the `op-page` layout, the sidebar on either side is completely optional, as is the header and footer within the main content area.

The full structure looks like the following:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Example layout for the Optics design system" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@rolemodel/optics/dist/css/optics.min.css" />
    <title>Optics Example Layout</title>
  </head>
  <body class="op-page">
    <div class="op-page__sidebar"></div>
    <div class="op-page__main">
      <header class="op-page__main-header"></header>
      <main class="op-page__main-content"></main>
      <footer class="op-page__main-footer"></footer>
    </div>
    <div class="op-page__sidebar op-page__sidebar--right"></div>
  </body>
</html>
```

#### `.op-page`

Is meant to be used on the body of your application to create a full window layout with optional areas.

#### `.op-page__sidebar`, `.op-page__sidebar--right`

Is meant to be used within the `.op-page` on either side of the the main content to create sidebar or panel areas on the or right side of the application. Add the modifier class `.op-page__sidebar--right` when using on the right side.

#### `.op-page__main`

Is meant to be used within the `.op-page` to wrap the main content area of your application. This contains the optional header, content, and optional footer areas.

#### `.op-page__main-header`

Is meant to be used on a header element within the `.op-page__main` to create a fixed header for your page. Often, the navbar component is used within here.

#### `.op-page__main-content`

Is meant to be used on a main element within the `.op-page__main` to create the container for your page content.

#### `.op-page__main-footer`

### Fullscreen Spinner

If you need a fullscreen spinner, use the following layout playground:

<a href="/public/spinner-layout.html" target="_blank" rel="noopener noreferrer">Click here to open the playground</a>

### Login

If you need a login page, use the following layout playground:

<a href="/public/login-layout.html" target="_blank" rel="noopener noreferrer">Click here to open the playground</a>

## Legacy Layout

This is the legacy layout that is maintained for backwards compatibility. New projects should not use these classes and instead, should use the `op-page` layout above.

### Playground

```html
<div class="app-body" style="height: 80rem">
  <!-- This class should be on body. Inline styles are for demo purposes -->
  <!-- Alert Flash message here -->
  <!-- Confirm here -->
  <!-- Modal here -->
  <!-- Panel here -->
  <div class="app__header">Header</div>
  <div class="app__content">Content</div>
  <div class="app__footer">Footer</div>
</div>
```
| Arg | Default | Options | Description |
| --- | --- | --- | --- |
| `style` | `"basic"` | `basic`, `sidebar`, `navbar`, `spinner`, `sidepanel`, `login`, `utility`, `card-grid` |  |
| `rightSidebar` |  |  |  |

### Classes

#### `.app-with-sidebar`

Is meant to be used on the body of your application when using a sidebar. See the examples below.

#### `.app-body`

Is meant to be used on the body of your application when not using a sidebar, or as a `div` under the body when using a sidebar. See the examples below.

#### `.app__header`

Is meant to be used within the `.app-body` to achieve a fixed header for your application. This can container a navbar component. See the examples below.

#### `.app__content`

Is meant to be used within the `.app-body` to wrap your main page content. It would be a sibling element between `.app__header` and `.app-footer` if you are using those. See the examples below.

#### `.app__content-no-margin`

Is an alternate to `.app__content` that does not constrain the width of the content within. This can be used if you need a side panel in your app. You can wrap your content in `.container` to still achieve the width constraint. See the examples below.

#### `.app__footer`

Is meant to be used within the `.app-body` to achieve a fixed footer for your application. See the examples below.

### Basic

The basic layout that this design system expects looks like the following:

```html
<!doctype html>
<html>
  <head>
    <title>Sample Layout</title>
    <meta content="width=device-width, initial-scale=1" name="viewport" />
  </head>
  <body class="app-body">
    <!-- Alert Flash message here -->
    <!-- Confirm here -->
    <!-- Modal here -->
    <!-- Panel here -->
    <!--
      If your app has a top header, use
      <div class='app__header'></div>
    -->
    <div class="app__content"></div>
    <!--
      If your app has a bottom footer, use
      <div class='app__footer'></div>
    -->
  </body>
</html>
```

```html
<div class="app-body" style="height: 80rem">
  <!-- This class should be on body. Inline styles are for demo purposes -->
  <!-- Alert Flash message here -->
  <!-- Confirm here -->
  <!-- Modal here -->
  <!-- Panel here -->
  <div class="app__header">Header</div>
  <div class="app__content">Content</div>
  <div class="app__footer">Footer</div>
</div>
```

The header and footer are sticky and can be used with `app__header` and `app__footer`.

### Fullscreen Spinner

If you need a fullscreen spinner, use a layout like this:

```html
<!doctype html>
<html>
  <head>
    <title>Sample Layout</title>
    <meta content="width=device-width, initial-scale=1" name="viewport" />
  </head>
  <body class="app-body items-center justify-center">
    <div class="spinner spinner--large">
      <span class="sr-only">Loading</span>
    </div>
  </body>
</html>
```

```html
<div class="app-body items-center justify-center" style="height: 80rem">
  <!-- These classes should be on body. Inline styles are for demo purposes -->
  <div class="spinner spinner--large" role="status"><span class="sr-only">Loading</span></div>
</div>
```

### With Sidebar

For instructions on the sidebar itself, see [Sidebar Component](components-sidebar.md)

A layout with a sidebar looks like the following:

```html
<!doctype html>
<html>
  <head>
    <title>Sample Layout</title>
    <meta content="width=device-width, initial-scale=1" name="viewport" />
  </head>
  <body class="app-with-sidebar">
    <!-- Alert Flash message here -->
    <!-- Confirm here -->
    <!-- Modal here -->
    <!-- Panel here -->
    <div class="sidebar sidebar--{rail or drawer}">...</div>
    <div class="app-body">
      <!--
        If your app has a top header, use
        <div class='app__header'></div>
      -->
      <div class="app__content"></div>
      <!--
        If your app has a bottom footer, use
        <div class='app__footer'></div>
      -->
    </div>
    <!-- You could put the sidebar or some other drawer here as well -->
  </body>
</html>
```

```html
<div class="app-with-sidebar" style="height: 40rem">
  <!-- This class should be on body. Inline styles are for demo purposes -->
  <!-- Alert Flash message here -->
  <!-- Confirm here -->
  <!-- Modal here -->
  <!-- Panel here -->

  <nav class="sidebar sidebar--drawer">
    <a class="sidebar__brand" href="/">
      <img src="./public/rms-logo.svg" alt="RoleModel Software Logo" />
    </a>

    <div class="sidebar__content sidebar__content--start">
      <button class="btn btn--no-border">
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

  <div class="app-body">
    <div class="app__header">Header</div>
    <div class="app__content">
      <p>Some content</p>
      <p>Some content</p>
      <p>Some content</p>
      <p>Some content</p>
      <p>Some content</p>
      <p>Some content</p>
      <p>Some content</p>
      <p>Some content</p>
      <p>Some content</p>
      <p>Some content</p>
      <p>Some content</p>
      <p>Some content</p>
      <p>Some content</p>
      <p>Some content</p>
      <p>Some content</p>
      <p>Some content</p>
    </div>
    <div class="app__footer">Footer</div>
  </div>
</div>
```

### With Navbar

For instructions on the navbar itself, see [Navbar Component](components-navbar.md)

A layout with a navbar looks like the following:

```html
<!doctype html>
<html>
  <head>
    <title>Sample Layout</title>
    <meta content="width=device-width, initial-scale=1" name="viewport" />
  </head>
  <body class="app-body">
    <!-- Alert Flash message here -->
    <!-- Confirm here -->
    <!-- Modal here -->
    <!-- Panel here -->
    <div class="app__header">
      <div class="navbar">...</div>
    </div>
    <div class="app__content"></div>
    <div class="app__footer"></div>
  </body>
</html>
```

```html
<div class="app-body" style="height: 40rem">
  <!-- This class should be on body. Inline styles are for demo purposes -->
  <!-- Alert Flash message here -->
  <!-- Confirm here -->
  <!-- Modal here -->
  <!-- Panel here -->

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

  <div class="app__content">Content</div>
  <div class="app__footer">Footer</div>
</div>
```

### Sidebar with Navbar and Side Panel

For instructions on the side panel itself, see [Side Panel Component](components-sidepanel.md)

A layout with a side panel looks like the following:

```html
<style>
  /* This class is not included by Optics, but you can create it easily. */
  .app__content-wrapper {
    display: flex;
    flex-grow: 1;
    overflow: auto;
  }
</style>
<div class="app-with-sidebar" style="height: 60rem">
  <!-- This class should be on body. Inline styles are for demo purposes -->
  <!-- Alert Flash message here -->
  <!-- Confirm here -->
  <!-- Modal here -->
  <!-- Panel here -->

  <nav class="sidebar sidebar--drawer">
    <a class="sidebar__brand" href="/">
      <img src="./public/rms-logo.svg" alt="RoleModel Software Logo" />
    </a>

    <div class="sidebar__content sidebar__content--start">
      <button class="btn btn--no-border">
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

  <div class="app-body">
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

    <div class="app__content-wrapper">
      <!-- See style block above -->
      <div class="app__content-no-margin">
        <p>Some content</p>
        <p>Some content</p>
        <p>Some content</p>
        <p>Some content</p>
        <p>Some content</p>
        <p>Some content</p>
        <p>Some content</p>
        <p>Some content</p>
        <p>Some content</p>
        <p>Some content</p>
        <p>Some content</p>
        <p>Some content</p>
        <p>Some content</p>
        <p>Some content</p>
        <p>Some content</p>
        <p>Some content</p>
      </div>
      <div>
        <div class="side-panel side-panel--border-left side-panel--border-right">
          <div class="side-panel__header">This is a header</div>
          <div class="side-panel__body">
            <div class="side-panel__section side-panel__section--padded">This is a section</div>
            <div class="divider"></div>
            <div class="side-panel__section side-panel__section--padded">This is a section</div>
            <div class="divider"></div>
            <div class="side-panel__section side-panel__section--padded">This is a section</div>
            <div class="divider"></div>
            <div class="side-panel__section side-panel__section--padded">This is a section</div>
            <div class="divider"></div>
            <div class="side-panel__section side-panel__section--padded">This is a section</div>
            <div class="divider"></div>
            <div class="side-panel__section side-panel__section--padded">This is a section</div>
            <div class="divider"></div>
            <div class="side-panel__section side-panel__section--padded">This is a section</div>
            <div class="divider"></div>
            <div class="side-panel__section side-panel__section--padded">This is a section</div>
            <div class="divider"></div>
            <div class="side-panel__section side-panel__section--padded">This is a section</div>
            <div class="divider"></div>
            <div class="side-panel__section side-panel__section--padded">This is a section</div>
            <div class="divider"></div>
            <div class="side-panel__section side-panel__section--padded">This is a section</div>
            <div class="divider"></div>
            <div class="side-panel__section side-panel__section--padded">This is a section</div>
            <div class="divider"></div>
            <div class="side-panel__section side-panel__section--padded">This is a section</div>
            <div class="divider"></div>
            <div class="side-panel__section side-panel__section--padded">This is a section</div>
            <div class="divider"></div>
            <div class="side-panel__section side-panel__section--padded">This is a section</div>
            <div class="divider"></div>
            <div class="side-panel__section side-panel__section--padded">This is a section</div>
            <div class="divider"></div>
            <div class="side-panel__section side-panel__section--padded">This is a section</div>
            <div class="divider"></div>
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
    </div>
    <div class="app__footer">Footer</div>
  </div>
</div>
```

### Login

A layout for a login page could look like the following:

```html
<style>
  /* These classes are not included by Optics, but you can create them easily. */
  .app__login {
    margin-block-start: calc(2 * var(--op-space-4x-large));
    margin-inline: auto;
    padding-inline: var(--op-space-large);
    inline-size: 100%;
    max-inline-size: calc(116 * var(--op-size-unit));
  }

  /* This could also be its own card variant */
  .card--login {
    .card__header {
      display: flex;
      justify-content: center;
    }

    .card__header img {
      inline-size: calc(23 * var(--op-size-unit));
    }

    .card__body {
      padding-block: 0;
    }

    .card__footer {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: var(--op-space-x-small);
    }
  }
</style>
<div class="app-body" style="height: 80rem">
  <!-- This class should be on body. Inline styles are for demo purposes -->
  <!-- Alert Flash message here -->
  <!-- Confirm here -->
  <!-- Modal here -->
  <!-- Panel here -->

  <div class="app__header">
    <div class="navbar">
      <a class="navbar__brand" href="/">
        <img src="./public/rms-logo.svg" alt="RoleModel Software Logo" />
      </a>

      <nav class="navbar__content navbar__content--justify-start"></nav>
    </div>
  </div>

  <div class="app__login">
    <!-- See style block above -->
    <form class="card card--login">
      <!-- See style block above -->
      <div class="card__header">
        <img src="./public/rms-logo.svg" alt="RoleModel Software Logo" />
      </div>
      <div class="card__body">
        <div class="form-group">
          <label class="form-label" for="email">Email Address</label>
          <input type="email" class="form-control" id="email" placeholder="Enter your email address" />
        </div>
        <div class="form-group">
          <label class="form-label" for="password">Password</label>
          <input type="password" class="form-control" id="password" placeholder="Enter your password" />
        </div>
      </div>
      <div class="card__footer">
        <a href="#" class="btn btn--primary btn--no-border">Forgot Password?</a>
        <button type="submit" class="btn btn--primary">
          <span class="material-symbols-outlined">logout</span>
          Sign In
        </button>
      </div>
    </form>
  </div>
</div>
```

### Utility

A layout explaining how the stack, split, cluster, and flank utilities can be used to make flex layouts more readable.

```html
<div class="app-body" style="height: 80rem">
  <!-- This class should be on body. Inline styles are for demo purposes -->
  <!-- Alert Flash message here -->
  <!-- Confirm here -->
  <!-- Modal here -->
  <!-- Panel here -->
  <div class="app__content" style="padding: var(--op-space-large)">
    <!-- Padding is for demo only, don't write inline styles -->
    <div class="op-stack">
      <h3>Timeline with Icons</h3>
      <div class="op-stack">
        <div class="op-split gap-sm">
          <div class="op-flank">
            <div class="avatar avatar--medium">
              <img src="https://images.unsplash.com/photo-1542382689-217623cad37c" alt="Squirrel" />
            </div>
            <div class="text-pair gap-xxs">
              <span class="text-pair__title">Squirrel</span>
              <span class="text-pair__subtitle">Animal</span>
            </div>
          </div>
          <span class="text-right">Mar 31</span>
        </div>
        <div class="divider"></div>
        <div class="op-split gap-sm">
          <div class="op-cluster">
            <span class="material-symbols-outlined icon icon--x-large">eco</span>
            <span>
              Germinated in
              <strong>nutrient-rich soil</strong>
            </span>
          </div>
          <span class="text-right">May 28</span>
        </div>
        <div class="divider"></div>
        <div class="op-split gap-sm">
          <div class="op-cluster">
            <span class="material-symbols-outlined icon icon--x-large">forest</span>
            <span>
              Matured by
              <strong>water</strong>
              and
              <strong>sunlight</strong>
            </span>
          </div>
          <span class="text-right">Sep 14</span>
        </div>
      </div>
    </div>

    <div class="divider divider--spacing-large"></div>

    <!-- Without the stack, cluster, split, and flank utilities, this would look like: -->
    <div class="flex flex-col gap-md">
      <h3>Timeline with Icons</h3>
      <div class="flex justify-between gap-sm">
        <div class="flex flex-wrap gap-md">
          <div class="avatar avatar--medium">
            <img src="https://images.unsplash.com/photo-1542382689-217623cad37c" alt="Squirrel" />
          </div>
          <div class="flex-grow-1">
            <div class="text-pair gap-xxs">
              <span class="text-pair__title">Squirrel</span>
              <span class="text-pair__subtitle">Animal</span>
            </div>
          </div>
        </div>
        <span class="text-right">Mar 31</span>
      </div>
      <div class="divider"></div>
      <div class="flex justify-between gap-sm">
        <div class="flex flex-wrap gap-sm">
          <span class="material-symbols-outlined icon icon--x-large">eco</span>
          <span>
            Germinated in
            <strong>nutrient-rich soil</strong>
          </span>
        </div>
        <span class="text-right">May 28</span>
      </div>
      <div class="divider"></div>
      <div class="flex justify-between gap-sm">
        <div class="flex flex-wrap gap-sm">
          <span class="material-symbols-outlined icon icon--x-large">forest</span>
          <span>
            Matured by
            <strong>water</strong>
            and
            <strong>sunlight</strong>
          </span>
        </div>
        <span class="text-right">Sep 14</span>
      </div>
    </div>
  </div>
</div>
```

### Card Grid

A responsive card grid built with the `op-grid` and `op-frame` utilities. The `op-frame` utility keeps each card's
media at a consistent aspect ratio regardless of the source image dimensions, and it isn't limited to media — the
"Coming soon" card frames a text placeholder to hold the same shape.

```html
<div class="app-body" style="height: 80rem">
  <!-- This class should be on body. Inline styles are for demo purposes -->
  <!-- Alert Flash message here -->
  <!-- Confirm here -->
  <!-- Modal here -->
  <!-- Panel here -->
  <div class="app__content" style="padding: var(--op-space-large)">
    <!-- Padding is for demo only, don't write inline styles -->
    <div class="op-grid op-grid--2-column">
      <div class="card">
        <div class="op-frame op-frame--landscape">
          <img src="https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9" alt="Clint" />
        </div>
        <div class="card__header">
          <div class="text-pair">
            <span class="text-pair__title">Clint</span>
            <span class="text-pair__subtitle">Dog · Male</span>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="op-frame op-frame--landscape">
          <div class="text-pair items-center">
            <span class="text-pair__title">
              <span class="material-symbols-outlined icon">photo</span>
            </span>
            <span class="text-pair__subtitle">Coming soon</span>
          </div>
        </div>
        <div class="card__header">
          <div class="text-pair">
            <span class="text-pair__title">Daisy</span>
            <span class="text-pair__subtitle">Dog · Female</span>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="op-frame op-frame--landscape">
          <img src="https://images.unsplash.com/photo-1510771463146-e89e6e86560e" alt="June" />
        </div>
        <div class="card__header">
          <div class="text-pair">
            <span class="text-pair__title">June</span>
            <span class="text-pair__subtitle">Dog · Female</span>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="op-frame op-frame--landscape">
          <img
            src="https://images.unsplash.com/photo-1505628346881-b72b27e84530?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Wallace"
          />
        </div>
        <div class="card__header">
          <div class="text-pair">
            <span class="text-pair__title">Wallace</span>
            <span class="text-pair__subtitle">Dog · Male</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```
