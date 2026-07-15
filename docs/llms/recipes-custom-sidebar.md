# Custom Sidebar

[Source Code](https://github.com/RoleModel/optics/blob/main/src/recipes/16six-sidebar.css)
[Source Code](https://github.com/RoleModel/optics/blob/main/src/recipes/domains-sidebar.css)

Your app may want to customize the sidebar to change the look and feel. Here are a few examples to help you get started:

## Playground

```html

<div class='app-with-sidebar' style="height: 80rem;"> <!-- This class should be on body. Height is for demo purposed -->
  
<nav class="sidebar sidebar--16six sidebar--padded sidebar--drawer">
  <a class="sidebar__brand" href="/">
    <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" rx="8" fill="#FFFFFF"/></rect>
    </svg>
    <div class='sidebar__brand-label'>
      <span>16Six</span>
      <span>RoleModel Software</span>
    </div>
  </a>
  <div class="sidebar__content sidebar__content--start">
    <a class="btn btn--no-border btn--active" href="/">
      <span class="material-symbols-outlined">home</span>
      Home
    </a>
    <a class="btn btn--no-border" href="/">
      <span class="material-symbols-outlined">edit_document</span>
      Check-ins
    </a>
    <a class="btn btn--no-border" href="/">
      <span class="material-symbols-outlined">chat</span>
      1-on-1s
    </a>
    <a class="btn btn--no-border" href="/">
      <span class="material-symbols-outlined">hand_gesture</span>
      High Fives
    </a>
    <a class="btn btn--no-border" href="/">
      <span class="material-symbols-outlined">track_changes</span>
      Objectives
    </a>
    <a class="btn btn--no-border" href="/">
      <span class="material-symbols-outlined">explore</span>
      Career Hub
    </a>
    <a class="btn btn--no-border" href="/">
      <span class="material-symbols-outlined">summarize</span>
      Mentoring Reviews
    </a>
    <a class="btn btn--no-border" href="/">
      <span class="material-symbols-outlined icon--rotated-135">join</span>
      Engagement
    </a>
    <a class="btn btn--no-border" href="/">
      <span class="material-symbols-outlined">insert_chart</span>
      Reporting
    </a>
  </div>

  <div class="sidebar__content sidebar__content--end">
    <a class="btn btn--no-border" href="/">
      <span class="material-symbols-outlined icon--rotated-90">expand_circle_down</span>
      Collapse
    </a>
  </div>
</nav>

  <div class='app-body'>
    <div class='app__header background-primary-plus-seven'>Header</div>
    <div class='app__content'>
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
    <div class='app__footer background-primary-plus-seven'>Footer</div>
  </div>
</div>

```
| Arg | Default | Options | Description |
| --- | --- | --- | --- |
| `example` | `"16six"` | `domains`, `16six` |  |
| `style` | `"drawer"` | `drawer`, `rail` |  |

## Domain Registrar Example

```css
/* Domains Sidebar Example */
.sidebar {
  &.sidebar--domains {
    --_op-sidebar-drawer-width: 28rem;
    --_op-sidebar-content-spacing: 0;
    --_op-sidebar-content-item-spacing: 0;

    box-shadow: none;

    .btn {
      border-radius: 0;

      &.btn--no-border {
        box-shadow: none;

        &.btn--active {
          background-color: var(--op-color-primary-plus-five);
          color: var(--op-color-primary-on-plus-five);
        }

        &:hover:not(.btn--active) {
          background-color: var(--op-color-neutral-plus-six);
          box-shadow: none;
          color: var(--op-color-neutral-on-plus-six);
        }
      }

      &.btn--pill-right {
        border-radius: 0 var(--op-radius-pill) var(--op-radius-pill) 0;
      }
    }

    .sidebar__footer {
      display: flex;
      align-items: center;
      gap: var(--op-space-small);
      padding-inline-start: var(--op-space-large);
    }
  }
}
```

```html
<div class="app-with-sidebar" style="height: 80rem">
  <!-- This class should be on body. Height is for demo purposed -->

  <nav class="sidebar sidebar--domains sidebar--padded sidebar--drawer">
    <a class="sidebar__brand" href="/">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Globe_icon.svg/2048px-Globe_icon.svg.png"
      />
    </a>
    <div class="sidebar__content sidebar__content--start">
      <a class="btn btn--no-border btn--pill-right btn--active" href="/">
        <span class="material-symbols-outlined">search</span>
        Get a new Domain
      </a>
      <a class="btn btn--no-border btn--pill-right" href="/">
        <span class="material-symbols-outlined">list</span>
        My domains
      </a>
      <a class="btn btn--no-border btn--pill-right" href="/">
        <span class="material-symbols-outlined">swap_horizontal_circle</span>
        Transfer
      </a>
      <a class="btn btn--no-border btn--pill-right" href="/">
        <span class="material-symbols-outlined">credit_card</span>
        Billing
      </a>
      <a class="btn btn--no-border btn--pill-right" href="/">
        <span class="material-symbols-outlined">perm_identity</span>
        Account
      </a>

      <div class="divider divider--spacing-medium"></div>

      <a class="btn btn--no-border" href="/">
        <span class="material-symbols-outlined">feedback</span>
        Send Feedback
      </a>
      <a class="btn btn--no-border" href="/">
        <span class="material-symbols-outlined">help</span>
        Help and Support
      </a>
      <a class="btn btn--no-border" href="/">
        <span class="material-symbols-outlined">flag</span>
        United States (US $)
      </a>
    </div>

    <div class="sidebar__content sidebar__content--end">
      <div class="sidebar__footer">
        <a href="/">Privacy</a>
        <a href="/">Terms</a>
      </div>
    </div>
  </nav>

  <div class="app-body">
    <div class="app__header background-primary-plus-seven">Header</div>
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
    <div class="app__footer background-primary-plus-seven">Footer</div>
  </div>
</div>
```

## Performance Management Software Example

```css
/* 16Six Sidebar Example */

.icon--rotated-135 {
  rotate: 135deg;
}

.icon--rotated-90 {
  rotate: 90deg;
}

.sidebar {
  .sidebar__brand {
    justify-content: center;

    .sidebar__brand-label {
      display: none;
    }
  }

  &.sidebar--16six {
    --_op-sidebar-background-color: hsl(256deg 66% 15%);
    --_op-sidebar-text-color: hsl(26deg 100% 95%);
    --_op-sidebar-border-color: hsl(26deg 100% 95%);
    --_op-sidebar-rail-width: 6.4rem;
    --_op-sidebar-drawer-width: 22.4rem;
    --_op-sidebar-drawer-brand-width: calc(var(--op-space-3x-large) + (2 * var(--op-space-medium)));
    --_op-sidebar-brand-spacing: var(--op-space-medium) var(--op-space-x-small);
    --_op-sidebar-content-item-spacing: var(--op-space-x-small);
    --_op-sidebar-spacing: 0 0 var(--op-space-x-small);

    .sidebar__brand {
      display: flex;
      margin: 0;
      color: inherit;
      gap: var(--op-space-medium);
      text-decoration: none;

      svg {
        inline-size: var(--op-space-3x-large);
        block-size: var(--op-space-3x-large);
      }

      .sidebar__brand-label {
        display: flex;
        flex-direction: column;
        font-size: var(--op-font-small);
      }
    }

    .btn {
      &.btn--no-border {
        background-color: transparent;
        box-shadow: none;
        color: var(--_op-sidebar-text-color);

        &.btn--active,
        &:hover {
          background-color: hsl(256deg 23% 32%);
        }
      }
    }
  }
}
```

```html

<div class='app-with-sidebar' style="height: 80rem;"> <!-- This class should be on body. Height is for demo purposed -->
  
<nav class="sidebar sidebar--16six sidebar--padded sidebar--drawer">
  <a class="sidebar__brand" href="/">
    <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" rx="8" fill="#FFFFFF"/></rect>
    </svg>
    <div class='sidebar__brand-label'>
      <span>16Six</span>
      <span>RoleModel Software</span>
    </div>
  </a>
  <div class="sidebar__content sidebar__content--start">
    <a class="btn btn--no-border btn--active" href="/">
      <span class="material-symbols-outlined">home</span>
      Home
    </a>
    <a class="btn btn--no-border" href="/">
      <span class="material-symbols-outlined">edit_document</span>
      Check-ins
    </a>
    <a class="btn btn--no-border" href="/">
      <span class="material-symbols-outlined">chat</span>
      1-on-1s
    </a>
    <a class="btn btn--no-border" href="/">
      <span class="material-symbols-outlined">hand_gesture</span>
      High Fives
    </a>
    <a class="btn btn--no-border" href="/">
      <span class="material-symbols-outlined">track_changes</span>
      Objectives
    </a>
    <a class="btn btn--no-border" href="/">
      <span class="material-symbols-outlined">explore</span>
      Career Hub
    </a>
    <a class="btn btn--no-border" href="/">
      <span class="material-symbols-outlined">summarize</span>
      Mentoring Reviews
    </a>
    <a class="btn btn--no-border" href="/">
      <span class="material-symbols-outlined icon--rotated-135">join</span>
      Engagement
    </a>
    <a class="btn btn--no-border" href="/">
      <span class="material-symbols-outlined">insert_chart</span>
      Reporting
    </a>
  </div>

  <div class="sidebar__content sidebar__content--end">
    <a class="btn btn--no-border" href="/">
      <span class="material-symbols-outlined icon--rotated-90">expand_circle_down</span>
      Collapse
    </a>
  </div>
</nav>

  <div class='app-body'>
    <div class='app__header background-primary-plus-seven'>Header</div>
    <div class='app__content'>
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
    <div class='app__footer background-primary-plus-seven'>Footer</div>
  </div>
</div>

```
