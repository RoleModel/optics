import{j as e,M as r,C as l}from"./blocks-qf_Tt4oh.js";import{useMDXComponents as d}from"./index-Crml4Ctz.js";import{M as i,I as t,D as c}from"./Modal.stories-BObMhcof.js";import{c as h}from"./sourceCodeLink-Chh3FteF.js";import{c as a}from"./Alert-CAEs4394.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-DUPV_Ob1.js";import"./Button-B21kpIpO.js";import"./Icon-uqCTS4Mm.js";function s(n){const o={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...d(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:i}),`
`,e.jsx(o.h1,{id:"modal",children:"Modal"}),`
`,e.jsx("div",{dangerouslySetInnerHTML:{__html:h({link:"components/modal.css"}).outerHTML}}),`
`,e.jsxs(o.p,{children:["The Modal classes can be used for styling a custom modal. This can be used alongside the Rails configuration and Javascript implemented by ",e.jsx(o.a,{href:"https://github.com/RoleModel/rolemodel_rails/tree/master/lib/generators/rolemodel/modals",rel:"nofollow",children:"RoleModel Rails Modal"})]}),`
`,e.jsx(o.h2,{id:"selective-imports",children:"Selective Imports"}),`
`,e.jsxs(o.p,{children:["Modal can be used as a standalone component, however, it does have a few dependencies. To see a full dependency list, see ",e.jsx(o.a,{href:"?path=/docs/overview-selective-imports--docs#dependencies",children:"Dependency Graph"})]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-css",children:`/* Depends on */
@import '@rolemodel/optics/dist/css/core/fonts';
@import '@rolemodel/optics/dist/css/core/tokens';
@import '@rolemodel/optics/dist/css/core/base';

/* Component */
@import '@rolemodel/optics/dist/css/components/modal';
`})}),`
`,e.jsx(o.h2,{id:"variations",children:"Variations"}),`
`,e.jsx(o.h2,{id:"default",children:"Default"}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:".modal-wrapper"})," Wraps the entire dialog."]}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:".modal-wrapper--active"})," Allows the dialog to live on your page always, but only show if the class is present."]}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:".modal-wrapper__backdrop"})," Provides the dark background to help focus on the dialog."]}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:".modal"})," Provides the actual Dialog styling which is constructed similar to the card component."]}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsx(o.li,{children:e.jsx(o.code,{children:".modal__header"})}),`
`,e.jsx(o.li,{children:e.jsx(o.code,{children:".modal__body"})}),`
`,e.jsx(o.li,{children:e.jsx(o.code,{children:".modal__footer"})}),`
`]}),`
`,e.jsx(l,{of:t}),`
`,e.jsx(o.h2,{id:"html-dialog",children:"HTML Dialog"}),`
`,e.jsx(o.p,{children:e.jsx(o.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog",rel:"nofollow",children:"<dialog> The Dialog Element"})}),`
`,e.jsxs(o.p,{children:["The modal styles work well using the HTML dialog element. Simply add the ",e.jsx(o.code,{children:"modal"})," class to the dialog element. No need for the wrapper classes or the active class."]}),`
`,e.jsx(l,{of:c}),`
`,e.jsxs(o.p,{children:["To open a ",e.jsx(o.code,{children:"<dialog>"})," modally by clicking a ",e.jsx(o.code,{children:"<button>"})," you typically need an onclick handler that calls the showModal method on that ",e.jsx(o.code,{children:"<dialog>"}),"."]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-html",children:`<button onclick="document.querySelector('#my-dialog').showModal();">Show Dialog</button>
<dialog id="my-dialog">…</dialog>
`})}),`
`,e.jsxs(o.p,{children:["With ",e.jsx(o.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Invoker_Commands_API",rel:"nofollow",children:"invoker commands"}),", newly available in all browsers though only as of December 12, 2025, buttons can now perform actions on other elements declaratively, without the need for any JavaScript."]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-html",children:`<button commandfor="my-dialog" command="show-modal">Show Dialog</button>
<dialog id="my-dialog">…</dialog>
`})}),`
`,e.jsx(o.p,{children:"If you want to use the invoker approach in your project today and ensure backwards compatibility, you can use a polyfill."}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-js",children:`import 'https://esm.sh/invokers-polyfill'
`})}),`
`,e.jsx(o.h2,{id:"modal-api",children:"Modal API"}),`
`,e.jsx(o.p,{children:"Styles are built on CSS variables scoped to the modal."}),`
`,e.jsx(o.p,{children:"Here are the variables that can be customized:"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-css",children:`/* base tokens */
--op-transition-modal-time
--op-transition-modal

/* modal-wrapper */
--_op-modal-backdrop-active-opacity

/* modal */
--_op-modal-width
--_op-modal-max-height
`})}),`
`,e.jsx(o.h2,{id:"customizing-modal-styles",children:"Customizing Modal styles"}),`
`,e.jsx("div",{dangerouslySetInnerHTML:{__html:a({title:"Important!",description:"These patterns represent how to customize the style of the modal for your project."}).outerHTML}}),`
`,e.jsxs(o.p,{children:["The classes are structured using the ",e.jsx(o.a,{href:"https://getbem.com/naming",rel:"nofollow",children:"BEM methodology"}),"."]}),`
`,e.jsxs(o.p,{children:["This allows us to define core styles on a main ",e.jsx(o.a,{href:"https://getbem.com/naming/#block",rel:"nofollow",children:"block"})," class, and use ",e.jsx(o.a,{href:"https://getbem.com/naming/#modifier",rel:"nofollow",children:"modifiers"})," to encapsulate variant styles. You can modify all dialogs behavior by overriding the ",e.jsx(o.code,{children:".modal-wrapper"})," and ",e.jsx(o.code,{children:".modal"})," selectors and setting any properties:"]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-css",children:`.modal-wrapper {
  z-index: 200;
}

.modal {
  background-color: red;
}
`})}),`
`,e.jsx(o.h2,{id:"new-modal-variations",children:"New Modal Variations"}),`
`,e.jsx("div",{dangerouslySetInnerHTML:{__html:a({title:"Important!",description:"These patterns represent how to create new variations of the modal for your project."}).outerHTML}}),`
`,e.jsxs(o.p,{children:["Your application may need a variation. To add one, just follow this template. Note the double hyphen, indicating that this is a ",e.jsx(o.a,{href:"https://getbem.com/naming/#modifier",rel:"nofollow",children:"modifier"}),":"]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-css",children:`.modal-wrapper--{name} {
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
`})})]})}function b(n={}){const{wrapper:o}={...d(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(s,{...n})}):s(n)}export{b as default};
