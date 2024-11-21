import{j as e}from"./jsx-runtime-q_IbPlfq.js";import{u as s}from"./index-BddqNUC0.js";import{M as l,C as a}from"./index-BxWRKbYi.js";import{C as c,I as d}from"./ConfirmDialog.stories-BKOBK4tM.js";import{c as t}from"./sourceCodeLink-Chh3FteF.js";import{c as i}from"./Alert-93ao7bSE.js";import"./iframe-DOIRH2Ve.js";import"../sb-preview/runtime.js";import"./index-B5rfWaSj.js";import"./index-DrFu-skq.js";import"./Button-CoyIamir.js";import"./Icon-D9QrNi_D.js";function r(n){const o={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:c}),`
`,e.jsx(o.h1,{id:"confirm-dialog",children:"Confirm Dialog"}),`
`,e.jsx("div",{dangerouslySetInnerHTML:{__html:t({link:"components/confirm-dialog.scss"}).outerHTML}}),`
`,e.jsxs(o.p,{children:["The Confirm Dialog classes can be used for styling a custom alert or confirm dialog. This can be used alongside ",e.jsx(o.a,{href:"https://github.com/RoleModel/turbo-confirm",rel:"nofollow",children:"Turbo Confirm"})," to achieve custom Confirm Dialogs using Turbo"]}),`
`,e.jsx(o.h3,{id:"selective-imports",children:"Selective Imports"}),`
`,e.jsxs(o.p,{children:["Confirm Dialog can be used as a standalone component, however, it does have a few dependencies. To see a full dependency list, see ",e.jsx(o.a,{href:"?path=/docs/overview-selective-imports--docs#dependencies",children:"Dependency Graph"})]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-css",children:`// Depends on
@import '@rolemodel/optics/dist/scss/core/tokens';
@import '@rolemodel/optics/dist/scss/core/base';

// Component
@import '@rolemodel/optics/dist/scss/components/confirm-dialog';
`})}),`
`,e.jsx(o.h2,{id:"variations",children:"Variations"}),`
`,e.jsx(o.h3,{id:"default",children:"Default"}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:".confirm-dialog-wrapper"})," Wraps the entire dialog."]}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:".confirm-dialog-wrapper--active"})," Allows the dialog to live on your page always, but only show if the class is present."]}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:".confirm-dialog-wrapper__backdrop"})," Provides the dark background to help focus on the dialog."]}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:".confirm-dialog"})," Provides the actual Dialog styling which is constructed similar to the card component."]}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsx(o.li,{children:e.jsx(o.code,{children:".confirm-dialog__header"})}),`
`,e.jsx(o.li,{children:e.jsx(o.code,{children:".confirm-dialog__body"})}),`
`,e.jsx(o.li,{children:e.jsx(o.code,{children:".confirm-dialog__footer"})}),`
`]}),`
`,e.jsx(a,{of:d}),`
`,e.jsx(o.h2,{id:"confirm-dialog-api",children:"Confirm Dialog API"}),`
`,e.jsx(o.p,{children:"Styles are built on CSS variables scoped to the confirm dialog."}),`
`,e.jsx(o.p,{children:"Here are the variables that can be customized:"}),`
`,`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-css",children:`--_op-confirm-dialog-width
`})}),`
`,`
`,e.jsx(o.h2,{id:"customizing-confirm-dialog-styles",children:"Customizing Confirm Dialog styles"}),`
`,e.jsx("div",{dangerouslySetInnerHTML:{__html:i({title:"Important!",description:"These patterns represent how to customize the style of the confirm dialog for your project."}).outerHTML}}),`
`,e.jsxs(o.p,{children:["The classes are built on ",e.jsx(o.a,{href:"https://sass-lang.com/documentation/style-rules/placeholder-selectors",rel:"nofollow",children:"SASS placeholder selectors"})]}),`
`,e.jsxs(o.p,{children:["This allows classes to share the same behavior. You can modify all dialogs behavior by overriding the ",e.jsx(o.code,{children:"%confirm-dialog-wrapper-global"})," and ",e.jsx(o.code,{children:"%confirm-dialog-global"})," placeholder selectors and setting any properties:"]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-css",children:`%confirm-dialog-wrapper-global {
  z-index: 200;
}

%confirm-dialog-global {
  background-color: red;
}
`})}),`
`,e.jsx(o.h2,{id:"new-confirm-dialog-variations",children:"New Confirm Dialog Variations"}),`
`,e.jsx("div",{dangerouslySetInnerHTML:{__html:i({title:"Important!",description:"These patterns represent how to create new variations of the confirm dialog for your project."}).outerHTML}}),`
`,e.jsx(o.p,{children:"Your application may need a custom dialog. To add one, just follow this template:"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-css",children:`.confirm-dialog-wrapper {
  @extend %confirm-dialog-wrapper-global;

  .confirm-dialog-wrapper__backdrop {

  }

  &.confirm-dialog-wrapper--active {
    .confirm-dialog-wrapper__backdrop {
    }
  }
}

.confirm-dialog-{name} {
  @extend %confirm-dialog-global;

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
`})})]})}function v(n={}){const{wrapper:o}={...s(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(r,{...n})}):r(n)}export{v as default};
