import{j as e,M as s,C as i}from"./blocks-BPxk_-54.js";import{useMDXComponents as a}from"./index-CyN62Cw9.js";import{M as d,I as r}from"./Modal.stories-B_5y_Puj.js";import{c}from"./sourceCodeLink-Chh3FteF.js";import{c as t}from"./Alert-CAEs4394.js";import"./preload-helper-C1FmrZbK.js";import"./iframe-D28E1yIw.js";import"./Button-B21kpIpO.js";import"./Icon-uqCTS4Mm.js";function l(o){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...a(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:d}),`
`,e.jsx(n.h1,{id:"modal",children:"Modal"}),`
`,e.jsx("div",{dangerouslySetInnerHTML:{__html:c({link:"components/modal.css"}).outerHTML}}),`
`,e.jsxs(n.p,{children:["The Modal classes can be used for styling a custom modal. This can be used alongside the Rails configuration and Javascript implemented by ",e.jsx(n.a,{href:"https://github.com/RoleModel/rolemodel_rails/tree/master/lib/generators/rolemodel/modals",rel:"nofollow",children:"RoleModel Rails Modal"})]}),`
`,e.jsx(n.h2,{id:"selective-imports",children:"Selective Imports"}),`
`,e.jsxs(n.p,{children:["Modal can be used as a standalone component, however, it does have a few dependencies. To see a full dependency list, see ",e.jsx(n.a,{href:"?path=/docs/overview-selective-imports--docs#dependencies",children:"Dependency Graph"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`/* Depends on */
@import '@rolemodel/optics/dist/css/core/fonts';
@import '@rolemodel/optics/dist/css/core/tokens';
@import '@rolemodel/optics/dist/css/core/base';

/* Component */
@import '@rolemodel/optics/dist/css/components/modal';
`})}),`
`,e.jsx(n.h2,{id:"variations",children:"Variations"}),`
`,e.jsx(n.h2,{id:"default",children:"Default"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:".modal-wrapper"})," Wraps the entire dialog."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:".modal-wrapper--active"})," Allows the dialog to live on your page always, but only show if the class is present."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:".modal-wrapper__backdrop"})," Provides the dark background to help focus on the dialog."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:".modal"})," Provides the actual Dialog styling which is constructed similar to the card component."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:".modal__header"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:".modal__body"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:".modal__footer"})}),`
`]}),`
`,e.jsx(i,{of:r}),`
`,e.jsx(n.h2,{id:"html-dialog",children:"HTML Dialog"}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog",rel:"nofollow",children:"<dialog> The Dialog Element"})}),`
`,e.jsxs(n.p,{children:["The modal styles will still work using the HTML dialog element. Simply add the ",e.jsx(n.code,{children:"modal"})," class to the dialog element. No need for the wrapper classes or the active class."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<dialog id="my-dialog" class="modal">
  <div class="modal__header">
    <span>Favorite animal:</span>
    <button id="dialog-close" class="btn btn--icon btn--pill">
      <span class="material-symbols-outlined icon--x-large">close</span>
    </button>
  </div>
  <div class="modal__body">
    <p>Red panda</p>
  </div>
  <div class="modal__footer">
    <button id="dialog-cancel" class="btn">Cancel</button>
    <button id="dialog-confirm" class="btn btn--primary">Submit</button>
  </div>
</dialog>
`})}),`
`,e.jsx(n.p,{children:"You can then use Javascript to open the dialog:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const dialog = document.getElementById('my-dialog')
const showButton = document.getElementById('show-dialog')
const closeButton = document.getElementById('dialog-close')
const cancelButton = document.getElementById('dialog-cancel')

// This handles the escape key as well as other events
// This is a bit of a gotcha to get the dialog to close and animate correctly
// Normally you would just call dialog.close() but this will not fade the backdrop correctly.
dialog.addEventListener('cancel', (event) => {
  event.preventDefault()

  dialog.classList.add('modal--closing') // run animation here

  dialog.addEventListener(
    'animationend',
    () => {
      dialog.classList.remove('modal--closing')
      dialog.close() // then run the default close method
    },
    { once: true }
  ) // add this to prevent bugs when reopening the modal
})

// This handles clicking outside the dialog
dialog.addEventListener('click', (event) => {
  //This prevents issues with forms
  if (event.target.tagName !== 'DIALOG') {
    return
  }

  const rect = event.target.getBoundingClientRect()

  const clickedInDialog =
    rect.top <= event.clientY &&
    event.clientY <= rect.top + rect.height &&
    rect.left <= event.clientX &&
    event.clientX <= rect.left + rect.width

  console.log(clickedInDialog)

  if (clickedInDialog === false) {
    event.target.dispatchEvent(new Event('cancel'))
  }
})

showButton.addEventListener('click', () => {
  dialog.showModal()
})

closeButton.addEventListener('click', () => {
  dialog.dispatchEvent(new Event('cancel'))
})

cancelButton.addEventListener('click', () => {
  dialog.dispatchEvent(new Event('cancel'))
})
`})}),`
`,e.jsx(n.h2,{id:"modal-api",children:"Modal API"}),`
`,e.jsx(n.p,{children:"Styles are built on CSS variables scoped to the modal."}),`
`,e.jsx(n.p,{children:"Here are the variables that can be customized:"}),`
`,`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`/* modal-wrapper */
--_op-modal-backdrop-active-opacity

/* modal */
--_op-modal-width
--_op-modal-max-height

/* dialog.modal::backdrop */
--op-color-black
--_op-modal-backdrop-active-opacity
`})}),`
`,`
`,e.jsx(n.h2,{id:"customizing-modal-styles",children:"Customizing Modal styles"}),`
`,e.jsx("div",{dangerouslySetInnerHTML:{__html:t({title:"Important!",description:"These patterns represent how to customize the style of the modal for your project."}).outerHTML}}),`
`,e.jsxs(n.p,{children:["The classes are structured using the ",e.jsx(n.a,{href:"https://getbem.com/naming",rel:"nofollow",children:"BEM methodology"}),"."]}),`
`,e.jsxs(n.p,{children:["This allows us to define core styles on a main ",e.jsx(n.a,{href:"https://getbem.com/naming/#block",rel:"nofollow",children:"block"})," class, and use ",e.jsx(n.a,{href:"https://getbem.com/naming/#modifier",rel:"nofollow",children:"modifiers"})," to encapsulate variant styles. You can modify all dialogs behavior by overriding the ",e.jsx(n.code,{children:".modal-wrapper"})," and ",e.jsx(n.code,{children:".modal"})," selectors and setting any properties:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`.modal-wrapper {
  z-index: 200;
}

.modal {
  background-color: red;
}
`})}),`
`,e.jsx(n.h2,{id:"new-modal-variations",children:"New Modal Variations"}),`
`,e.jsx("div",{dangerouslySetInnerHTML:{__html:t({title:"Important!",description:"These patterns represent how to create new variations of the modal for your project."}).outerHTML}}),`
`,e.jsxs(n.p,{children:["Your application may need a variation. To add one, just follow this template. Note the double hyphen, indicating that this is a ",e.jsx(n.a,{href:"https://getbem.com/naming/#modifier",rel:"nofollow",children:"modifier"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`.modal-wrapper--{name} {
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
`})})]})}function b(o={}){const{wrapper:n}={...a(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(l,{...o})}):l(o)}export{b as default};
