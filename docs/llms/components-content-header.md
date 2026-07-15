# Content Header

[Source Code](https://github.com/RoleModel/optics/blob/main/src/components/content-header.css)

Content Header classes can be used to denote a page or content section header of an application. They provide simple styles to provide context and actions for a page or section within your interface.

## Playground

```html
<header class="content-header">
  <div class="content-header__details">
    <span class="content-header__context">Context Label</span>
    <h1 class="content-header__title">Content Header</h1>
    <span class="content-header__subline">Subline Label</span>
  </div>
  <div class="content-header__aside">
    <button class="btn">Action 1</button>
    <button class="btn">Action 2</button>
  </div>
</header>
```
| Arg | Default | Options | Description |
| --- | --- | --- | --- |
| `title` | `"Content Header"` |  |  |
| `showContext` | `true` |  |  |
| `contextLabel` | `"Context Label"` |  |  |
| `showSubline` | `true` |  |  |
| `sublineLabel` | `"Subline Label"` |  |  |
| `showAside` | `true` |  |  |
| `asideExample` | `"actions"` | `actions`, `text` |  |

### Selective Imports

Content Header can be used as a standalone component, however, it does have a few dependencies. To see a full dependency list, see [Dependency Graph](overview-selective-imports.md#dependencies)

```css
/* Depends on */
@import '@rolemodel/optics/dist/css/core/fonts';
@import '@rolemodel/optics/dist/css/core/tokens';
@import '@rolemodel/optics/dist/css/core/base';

/* Component */
@import '@rolemodel/optics/dist/css/components/content-header';
```

## Variations

### Default

`.content-header` Provides basic content header styles.

`.context-header__details` provides a section for the title, context, and subline.

```html
<header class="content-header">
  <div class="content-header__details">
    <span class="content-header__context">Context Label</span>
    <h1 class="content-header__title">Content Header</h1>
    <span class="content-header__subline">Subline Label</span>
  </div>
  <div class="content-header__aside">
    <button class="btn">Action 1</button>
    <button class="btn">Action 2</button>
  </div>
</header>
```

### With Context

`.context-header__context` provides a context label above the title.

```html
<header class="content-header">
  <div class="content-header__details">
    <span class="content-header__context">Context Label</span>
    <h1 class="content-header__title">Content Header</h1>
  </div>
</header>
```

### With Subline

`.context-header__subline` provides a subline below the title.

```html
<header class="content-header">
  <div class="content-header__details">
    <h1 class="content-header__title">Content Header</h1>
    <span class="content-header__subline">Subline Label</span>
  </div>
</header>
```

### With Aside

`.context-header__aside` provides an aside section additional information or actions. It can hold anything you want, but is often used for page specific actions.

```html
<header class="content-header">
  <div class="content-header__details">
    <h1 class="content-header__title">Content Header</h1>
  </div>
  <div class="content-header__aside">
    <button class="btn">Action 1</button>
    <button class="btn">Action 2</button>
  </div>
</header>
```

### Simple

The title is really the only required part of a content header, though only really meaningful when used with actions, context, or subline.

```html
<header class="content-header">
  <div class="content-header__details">
    <h1 class="content-header__title">Only a Title</h1>
  </div>
  <div class="content-header__aside">
    <button class="btn">Action 1</button>
    <button class="btn">Action 2</button>
  </div>
</header>
```

### GitHub Example

This example demonstrates a content header with minimal customization achieving a similar look to what might be found on a GitHub pull request page.

```html
<style>
  .content-header.content-header--github-example {
    .content-header__subline {
      display: flex;
      align-items: center;
      gap: var(--op-space-2x-small);
      font-size: var(--op-font-x-small);
    }

    .content-header__title-number {
      color: var(--op-color-on-background-alt);
    }
  }
</style>
<header class="content-header content-header--github-example">
  <div class="content-header__details">
    <h1 class="content-header__title">
      Add details to sidebar documentation
      <span class="content-header__title-number">#265</span>
    </h1>
    <div class="content-header__subline">
      <span class="badge badge--primary badge--pill">
        <span class="material-symbols-outlined icon">graph_1</span>
        Merged
      </span>
      <strong>Jeremy-Walton</strong>
      <span>merged 1 commit into</span>
      <div class="badge">main</div>
      <span>from</span>
      <div class="badge">responsive-snippet</div>
      <a class="btn btn--no-border btn--icon btn--small" href="#">
        <span class="material-symbols-outlined icon">content_copy</span>
      </a>
      <span>on Jan 31</span>
    </div>
  </div>
  <div class="content-header__aside">
    <a class="btn btn--small" href="#">Edit</a>
    <a class="btn btn--small" href="#">
      <span class="material-symbols-outlined icon">code</span>
      Code
      <span class="material-symbols-outlined icon">arrow_drop_down</span>
    </a>
  </div>
</header>
```

## Customizing Content Header styles

> **Important!:** These patterns represent how to customize the style of the content header for your project.

The content header classes are structured using the [BEM methodology](https://getbem.com/naming).

This allows us to define core styles on a main [block](https://getbem.com/naming/#block) class, and use [modifiers](https://getbem.com/naming/#modifier) to encapsulate variant styles. You can modify all content header behavior by overriding the `.content-header` class and setting any properties:

```css
.content-header {
  padding-block: var(--op-space-3x-large);
}
```

If you need to override the behavior of the header, you can open the class and set or change properties

```css
.content-header--modifier {
  padding-block: var(--op-space-2x-large);
}
```

## New Content Header Variations

> **Important!:** These patterns represent how to create new variations of the content header for your project.

Your application may need a variation. To add one, just follow this template. Note the double hyphen, indicating that this is a [modifier](https://getbem.com/naming/#modifier):

```css
.content-header--{name} {
  background-color: var(--op-color-primary-on-plus-four);

  .content-header__context {
    color: var(--op-color-primary-on-plus-four-alt);
  }

  .content-header__title {
    color: var(--op-color-primary-on-plus-four);
  }

  .content-header__subline {
    color: var(--op-color-primary-on-plus-four-alt);
  }
}
```
