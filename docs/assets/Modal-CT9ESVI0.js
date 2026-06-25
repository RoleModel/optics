import{i as e}from"./preload-helper-xPQekRTU.js";import{T as t,l as n,n as r,u as i}from"./blocks-uVOOWdqL.js";import{s as a}from"./chunk-LITCR56V-BmCoDI8n.js";import{t as o}from"./mdx-react-shim-eO_HyXU9.js";import{n as s,t as c}from"./sourceCodeLink-D2TI9VYO.js";import{n as l,t as u}from"./Alert-BSNiXkFA.js";import{Dialog as d,Inline as f,n as p,t as m}from"./Modal.stories-D3CDdf4n.js";function h(e){let i={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...t(),...e.components};return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(n,{of:m}),`
`,(0,_.jsx)(i.h1,{id:`modal`,children:`Modal`}),`
`,(0,_.jsx)(`div`,{dangerouslySetInnerHTML:{__html:c({link:`components/modal.css`}).outerHTML}}),`
`,(0,_.jsxs)(i.p,{children:[`The Modal classes can be used for styling a custom modal. This can be used alongside the Rails configuration and Javascript implemented by `,(0,_.jsx)(i.a,{href:`https://github.com/RoleModel/rolemodel_rails/tree/master/lib/generators/rolemodel/modals`,rel:`nofollow`,children:`RoleModel Rails Modal`})]}),`
`,(0,_.jsx)(i.h2,{id:`selective-imports`,children:`Selective Imports`}),`
`,(0,_.jsxs)(i.p,{children:[`Modal can be used as a standalone component, however, it does have a few dependencies. To see a full dependency list, see `,(0,_.jsx)(i.a,{href:`?path=/docs/overview-selective-imports--docs#dependencies`,children:`Dependency Graph`})]}),`
`,(0,_.jsx)(i.pre,{children:(0,_.jsx)(i.code,{className:`language-css`,children:`/* Depends on */
@import '@rolemodel/optics/dist/css/core/fonts';
@import '@rolemodel/optics/dist/css/core/tokens';
@import '@rolemodel/optics/dist/css/core/base';

/* Component */
@import '@rolemodel/optics/dist/css/components/modal';
`})}),`
`,(0,_.jsx)(i.h2,{id:`variations`,children:`Variations`}),`
`,(0,_.jsx)(i.h2,{id:`default`,children:`Default`}),`
`,(0,_.jsxs)(i.p,{children:[(0,_.jsx)(i.code,{children:`.modal-wrapper`}),` Wraps the entire dialog.`]}),`
`,(0,_.jsxs)(i.p,{children:[(0,_.jsx)(i.code,{children:`.modal-wrapper--active`}),` Allows the dialog to live on your page always, but only show if the class is present.`]}),`
`,(0,_.jsxs)(i.p,{children:[(0,_.jsx)(i.code,{children:`.modal-wrapper__backdrop`}),` Provides the dark background to help focus on the dialog.`]}),`
`,(0,_.jsxs)(i.p,{children:[(0,_.jsx)(i.code,{children:`.modal`}),` Provides the actual Dialog styling which is constructed similar to the card component.`]}),`
`,(0,_.jsxs)(i.ul,{children:[`
`,(0,_.jsx)(i.li,{children:(0,_.jsx)(i.code,{children:`.modal__header`})}),`
`,(0,_.jsx)(i.li,{children:(0,_.jsx)(i.code,{children:`.modal__body`})}),`
`,(0,_.jsx)(i.li,{children:(0,_.jsx)(i.code,{children:`.modal__footer`})}),`
`]}),`
`,(0,_.jsx)(r,{of:f}),`
`,(0,_.jsx)(i.h2,{id:`html-dialog`,children:`HTML Dialog`}),`
`,(0,_.jsx)(i.p,{children:(0,_.jsx)(i.a,{href:`https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog`,rel:`nofollow`,children:`<dialog> The Dialog Element`})}),`
`,(0,_.jsxs)(i.p,{children:[`The modal styles work well using the HTML dialog element. Simply add the `,(0,_.jsx)(i.code,{children:`modal`}),` class to the dialog element. No need for the wrapper classes or the active class.`]}),`
`,(0,_.jsx)(r,{of:d}),`
`,(0,_.jsxs)(i.p,{children:[`To open a `,(0,_.jsx)(i.code,{children:`<dialog>`}),` modally by clicking a `,(0,_.jsx)(i.code,{children:`<button>`}),` you typically need an onclick handler that calls the showModal method on that `,(0,_.jsx)(i.code,{children:`<dialog>`}),`.`]}),`
`,(0,_.jsx)(i.pre,{children:(0,_.jsx)(i.code,{className:`language-html`,children:`<button onclick="document.querySelector('#my-dialog').showModal();">Show Dialog</button>
<dialog id="my-dialog">…</dialog>
`})}),`
`,(0,_.jsxs)(i.p,{children:[`With `,(0,_.jsx)(i.a,{href:`https://developer.mozilla.org/en-US/docs/Web/API/Invoker_Commands_API`,rel:`nofollow`,children:`invoker commands`}),`, newly available in all browsers though only as of December 12, 2025, buttons can now perform actions on other elements declaratively, without the need for any JavaScript.`]}),`
`,(0,_.jsx)(i.pre,{children:(0,_.jsx)(i.code,{className:`language-html`,children:`<button commandfor="my-dialog" command="show-modal">Show Dialog</button>
<dialog id="my-dialog">…</dialog>
`})}),`
`,(0,_.jsx)(i.p,{children:`If you want to use the invoker approach in your project today and ensure backwards compatibility, you can use a polyfill.`}),`
`,(0,_.jsx)(i.pre,{children:(0,_.jsx)(i.code,{className:`language-js`,children:`import 'https://esm.sh/invokers-polyfill'
`})}),`
`,(0,_.jsx)(i.h2,{id:`modal-api`,children:`Modal API`}),`
`,(0,_.jsx)(i.p,{children:`Styles are built on CSS variables scoped to the modal.`}),`
`,(0,_.jsx)(i.p,{children:`Here are the variables that can be customized:`}),`
`,(0,_.jsx)(i.pre,{children:(0,_.jsx)(i.code,{className:`language-css`,children:`/* base tokens */
--op-transition-modal-time
--op-transition-modal

/* modal-wrapper */
--_op-modal-backdrop-active-opacity

/* modal */
--_op-modal-width
--_op-modal-max-height
`})}),`
`,(0,_.jsx)(i.h2,{id:`customizing-modal-styles`,children:`Customizing Modal styles`}),`
`,(0,_.jsx)(`div`,{dangerouslySetInnerHTML:{__html:u({title:`Important!`,description:`These patterns represent how to customize the style of the modal for your project.`}).outerHTML}}),`
`,(0,_.jsxs)(i.p,{children:[`The classes are structured using the `,(0,_.jsx)(i.a,{href:`https://getbem.com/naming`,rel:`nofollow`,children:`BEM methodology`}),`.`]}),`
`,(0,_.jsxs)(i.p,{children:[`This allows us to define core styles on a main `,(0,_.jsx)(i.a,{href:`https://getbem.com/naming/#block`,rel:`nofollow`,children:`block`}),` class, and use `,(0,_.jsx)(i.a,{href:`https://getbem.com/naming/#modifier`,rel:`nofollow`,children:`modifiers`}),` to encapsulate variant styles. You can modify all dialogs behavior by overriding the `,(0,_.jsx)(i.code,{children:`.modal-wrapper`}),` and `,(0,_.jsx)(i.code,{children:`.modal`}),` selectors and setting any properties:`]}),`
`,(0,_.jsx)(i.pre,{children:(0,_.jsx)(i.code,{className:`language-css`,children:`.modal-wrapper {
  z-index: 200;
}

.modal {
  background-color: red;
}
`})}),`
`,(0,_.jsx)(i.h2,{id:`new-modal-variations`,children:`New Modal Variations`}),`
`,(0,_.jsx)(`div`,{dangerouslySetInnerHTML:{__html:u({title:`Important!`,description:`These patterns represent how to create new variations of the modal for your project.`}).outerHTML}}),`
`,(0,_.jsxs)(i.p,{children:[`Your application may need a variation. To add one, just follow this template. Note the double hyphen, indicating that this is a `,(0,_.jsx)(i.a,{href:`https://getbem.com/naming/#modifier`,rel:`nofollow`,children:`modifier`}),`:`]}),`
`,(0,_.jsx)(i.pre,{children:(0,_.jsx)(i.code,{className:`language-css`,children:`.modal-wrapper--{name} {
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
`})})]})}function g(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,_.jsx)(n,{...e,children:(0,_.jsx)(h,{...e})}):h(e)}var _;e((()=>{_=a(),o(),i(),p(),s(),l()}))();export{g as default};