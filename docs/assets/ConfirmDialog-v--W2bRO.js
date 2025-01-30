import{j as e}from"./jsx-runtime-BudFbCqj.js";import{u as s}from"./index-CZ7_UIou.js";import{M as a,C as l}from"./index-BO8JBeAl.js";import{C as t,I as c}from"./ConfirmDialog.stories-BKOBK4tM.js";import{c as d}from"./sourceCodeLink-Chh3FteF.js";import{c as i}from"./Alert-lmCd5s8U.js";import"./iframe-B89zdOr6.js";import"../sb-preview/runtime.js";import"./index-B5rfWaSj.js";import"./index-DrFu-skq.js";import"./Button-CoyIamir.js";import"./Icon-D9QrNi_D.js";function r(o){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...s(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:t}),`
`,e.jsx(n.h1,{id:"confirm-dialog",children:"Confirm Dialog"}),`
`,e.jsx("div",{dangerouslySetInnerHTML:{__html:d({link:"components/confirm-dialog.scss"}).outerHTML}}),`
`,e.jsxs(n.p,{children:["The Confirm Dialog classes can be used for styling a custom alert or confirm dialog. This can be used alongside ",e.jsx(n.a,{href:"https://github.com/RoleModel/turbo-confirm",rel:"nofollow",children:"Turbo Confirm"})," to achieve custom Confirm Dialogs using Turbo"]}),`
`,e.jsx(n.h3,{id:"selective-imports",children:"Selective Imports"}),`
`,e.jsxs(n.p,{children:["Confirm Dialog can be used as a standalone component, however, it does have a few dependencies. To see a full dependency list, see ",e.jsx(n.a,{href:"?path=/docs/overview-selective-imports--docs#dependencies",children:"Dependency Graph"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`// Depends on
@import '@rolemodel/optics/dist/scss/core/tokens';
@import '@rolemodel/optics/dist/scss/core/base';

// Component
@import '@rolemodel/optics/dist/scss/components/confirm-dialog';
`})}),`
`,e.jsx(n.h2,{id:"variations",children:"Variations"}),`
`,e.jsx(n.h3,{id:"default",children:"Default"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:".confirm-dialog-wrapper"})," Wraps the entire dialog."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:".confirm-dialog-wrapper--active"})," Allows the dialog to live on your page always, but only show if the class is present."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:".confirm-dialog-wrapper__backdrop"})," Provides the dark background to help focus on the dialog."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:".confirm-dialog"})," Provides the actual Dialog styling which is constructed similar to the card component."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:".confirm-dialog__header"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:".confirm-dialog__body"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:".confirm-dialog__footer"})}),`
`]}),`
`,e.jsx(l,{of:c}),`
`,e.jsx(n.h2,{id:"confirm-dialog-api",children:"Confirm Dialog API"}),`
`,e.jsx(n.p,{children:"Styles are built on CSS variables scoped to the confirm dialog."}),`
`,e.jsx(n.p,{children:"Here are the variables that can be customized:"}),`
`,`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`--_op-confirm-dialog-width
`})}),`
`,`
`,e.jsx(n.h2,{id:"customizing-confirm-dialog-styles",children:"Customizing Confirm Dialog styles"}),`
`,e.jsx("div",{dangerouslySetInnerHTML:{__html:i({title:"Important!",description:"These patterns represent how to customize the style of the confirm dialog for your project."}).outerHTML}}),`
`,e.jsxs(n.p,{children:["The classes are structured using the ",e.jsx(n.a,{href:"https://getbem.com/naming",rel:"nofollow",children:"BEM methodology"}),"."]}),`
`,e.jsxs(n.p,{children:["This allows us to define core styles on a main ",e.jsx(n.a,{href:"https://getbem.com/naming/#block",rel:"nofollow",children:"block"})," class, and use ",e.jsx(n.a,{href:"https://getbem.com/naming/#modifier",rel:"nofollow",children:"modifiers"})," to encapsulate variant styles. You can modify all dialogs behavior by overriding the ",e.jsx(n.code,{children:".confirm-dialog-wrapper"})," and ",e.jsx(n.code,{children:".confirm-dialog"})," selectors and setting any properties:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`.confirm-dialog-wrapper {
  z-index: 200;
}

.confirm-dialog {
  background-color: red;
}
`})}),`
`,e.jsx(n.h2,{id:"new-confirm-dialog-variations",children:"New Confirm Dialog Variations"}),`
`,e.jsx("div",{dangerouslySetInnerHTML:{__html:i({title:"Important!",description:"These patterns represent how to create new variations of the confirm dialog for your project."}).outerHTML}}),`
`,e.jsxs(n.p,{children:["Your application may need a variation. To add one, just follow this template. Note the double hyphen, indicating that this is a ",e.jsx(n.a,{href:"https://getbem.com/naming/#modifier",rel:"nofollow",children:"modifier"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`.confirm-dialog-wrapper--{name} {
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
`})})]})}function v(o={}){const{wrapper:n}={...s(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(r,{...o})}):r(o)}export{v as default};
