# Confirm Dialog

[Source Code](https://github.com/RoleModel/optics/blob/main/src/components/confirm-dialog.css)

The Confirm Dialog classes can be used for styling a custom alert or confirm dialog. This can be used alongside [Turbo Confirm](https://github.com/RoleModel/turbo-confirm) to achieve custom Confirm Dialogs using Turbo

### Selective Imports

Confirm Dialog can be used as a standalone component, however, it does have a few dependencies. To see a full dependency list, see [Dependency Graph](overview-selective-imports.md#dependencies)

```css
/* Depends on */
@import '@rolemodel/optics/dist/css/core/fonts';
@import '@rolemodel/optics/dist/css/core/tokens';
@import '@rolemodel/optics/dist/css/core/base';

/* Component */
@import '@rolemodel/optics/dist/css/components/confirm-dialog';
```

## Variations

### Default

`.confirm-dialog-wrapper` Wraps the entire dialog.

`.confirm-dialog-wrapper--active` Allows the dialog to live on your page always, but only show if the class is present.

`.confirm-dialog-wrapper__backdrop` Provides the dark background to help focus on the dialog.

`.confirm-dialog` Provides the actual Dialog styling which is constructed similar to the card component.

- `.confirm-dialog__header`
- `.confirm-dialog__body`
- `.confirm-dialog__footer`

```html
<div class="confirm-dialog-wrapper confirm-dialog-wrapper--active confirm-dialog-wrapper--demo">
  <div class="confirm-dialog-wrapper__backdrop"></div>
  <div class="confirm-dialog">
    <div class="confirm-dialog__header">Confirm Title</div>
    <div class="confirm-dialog__body">Are you sure you want to delete this?</div>
    <div class="confirm-dialog__footer">
      <button class="btn">Cancel</button>
      <button class="btn btn--destructive">Yes, I'm Sure</button>
    </div>
  </div>
</div>
```

## Confirm Dialog API

Styles are built on CSS variables scoped to the confirm dialog.

Here are the variables that can be customized:

```css
--_op-confirm-dialog-width
```

## Customizing Confirm Dialog styles

> **Important!:** These patterns represent how to customize the style of the confirm dialog for your project.

The classes are structured using the [BEM methodology](https://getbem.com/naming).

This allows us to define core styles on a main [block](https://getbem.com/naming/#block) class, and use [modifiers](https://getbem.com/naming/#modifier) to encapsulate variant styles. You can modify all dialogs behavior by overriding the `.confirm-dialog-wrapper` and `.confirm-dialog` selectors and setting any properties:

```css
.confirm-dialog-wrapper {
  z-index: 200;
}

.confirm-dialog {
  background-color: red;
}
```

## New Confirm Dialog Variations

> **Important!:** These patterns represent how to create new variations of the confirm dialog for your project.

Your application may need a variation. To add one, just follow this template. Note the double hyphen, indicating that this is a [modifier](https://getbem.com/naming/#modifier):

```css
.confirm-dialog-wrapper--{name} {
  .confirm-dialog-wrapper__backdrop {
  }

  &.confirm-dialog-wrapper--active {
    .confirm-dialog-wrapper__backdrop {
    }
  }
}

.confirm-dialog--{name} {
  .confirm-dialog__header,
  .confirm-dialog__body,
  .confirm-dialog__footer {
    padding:
  }

  .confirm-dialog__header {
    font-size:
    font-weight:
  }

  .confirm-dialog__body {
    box-shadow:
  }

  .confirm-dialog__footer {
    display:
    justify-content:
  }
}
```
