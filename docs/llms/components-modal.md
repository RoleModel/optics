# Modal

[Source Code](https://github.com/RoleModel/optics/blob/main/src/components/modal.css)

The Modal classes can be used for styling a custom modal. This can be used alongside the Rails configuration and Javascript implemented by [RoleModel Rails Modal](https://github.com/RoleModel/rolemodel_rails/tree/master/lib/generators/rolemodel/modals)

## Selective Imports

Modal can be used as a standalone component, however, it does have a few dependencies. To see a full dependency list, see [Dependency Graph](overview-selective-imports.md#dependencies)

```css
/* Depends on */
@import '@rolemodel/optics/dist/css/core/fonts';
@import '@rolemodel/optics/dist/css/core/tokens';
@import '@rolemodel/optics/dist/css/core/base';

/* Component */
@import '@rolemodel/optics/dist/css/components/modal';
```

## Variations

## Default

`.modal-wrapper` Wraps the entire dialog.

`.modal-wrapper--active` Allows the dialog to live on your page always, but only show if the class is present.

`.modal-wrapper__backdrop` Provides the dark background to help focus on the dialog.

`.modal` Provides the actual Dialog styling which is constructed similar to the card component.

- `.modal__header`
- `.modal__body`
- `.modal__footer`

```html
<div class="modal-wrapper modal-wrapper--active modal-wrapper--demo">
  <div class="modal-wrapper__backdrop"></div>
  <div class="modal">
    <div class="modal__header">
      Modal Title
      <button class="btn btn--no-border btn--icon btn--pill">
        <span class="material-symbols-outlined icon--x-large">close</span>
      </button>
    </div>
    <div class="modal__body">This is the contents of the modal!</div>
    <div class="modal__footer">
      <button class="btn">Cancel</button>
      <button class="btn btn--primary">Save</button>
    </div>
  </div>
</div>
```

## HTML Dialog

[\<dialog\> The Dialog Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog)

The modal styles work well using the HTML dialog element. Simply add the `modal` class to the dialog element. No need for the wrapper classes or the active class.

```html
<div>
  <button class="btn" commandfor="my-dialog" command="show-modal">Show Dialog</button>
  <dialog id="my-dialog" class="modal" closedby="any">
    <div class="modal__header">
      Modal Title
      <form method="dialog">
        <button class="btn btn--no-border btn--icon btn--pill">
          <span class="material-symbols-outlined icon--x-large">close</span>
        </button>
      </form>
    </div>
    <div class="modal__body">This is the contents of the modal!</div>
    <div class="modal__footer">
      <form method="dialog">
        <button class="btn">Cancel</button>
      </form>
      <button class="btn btn--primary">Save</button>
    </div>
  </dialog>
</div>
```

To open a `<dialog>` modally by clicking a `<button>` you typically need an onclick handler that calls the showModal method on that `<dialog>`.

```html
<button onclick="document.querySelector('#my-dialog').showModal();">Show Dialog</button>
<dialog id="my-dialog">…</dialog>
```

With [invoker commands](https://developer.mozilla.org/en-US/docs/Web/API/Invoker_Commands_API), newly available in all browsers though only as of December 12, 2025, buttons can now perform actions on other elements declaratively, without the need for any JavaScript.

```html
<button commandfor="my-dialog" command="show-modal">Show Dialog</button>
<dialog id="my-dialog">…</dialog>
```

If you want to use the invoker approach in your project today and ensure backwards compatibility, you can use a polyfill.

```js
```

## Modal API

Styles are built on CSS variables scoped to the modal.

Here are the variables that can be customized:

```css
/* base tokens */
--op-transition-modal-time
--op-transition-modal

/* modal-wrapper */
--_op-modal-backdrop-active-opacity

/* modal */
--_op-modal-width
--_op-modal-max-height
```

## Customizing Modal styles

> **Important!:** These patterns represent how to customize the style of the modal for your project.

The classes are structured using the [BEM methodology](https://getbem.com/naming).

This allows us to define core styles on a main [block](https://getbem.com/naming/#block) class, and use [modifiers](https://getbem.com/naming/#modifier) to encapsulate variant styles. You can modify all dialogs behavior by overriding the `.modal-wrapper` and `.modal` selectors and setting any properties:

```css
.modal-wrapper {
  z-index: 200;
}

.modal {
  background-color: red;
}
```

## New Modal Variations

> **Important!:** These patterns represent how to create new variations of the modal for your project.

Your application may need a variation. To add one, just follow this template. Note the double hyphen, indicating that this is a [modifier](https://getbem.com/naming/#modifier):

```css
.modal-wrapper--{name} {
  .modal-wrapper__backdrop {
  }

  &.modal-wrapper--active {
    .modal-wrapper__backdrop {
    }
  }
}

.modal--{name} {
  .modal__header,
  .modal__body,
  .modal__footer {
    padding:
  }

  .modal__header {
    font-size:
    font-weight:
  }

  .modal__body {
    box-shadow:
  }

  .modal__footer {
    display:
    justify-content:
  }
}
```
