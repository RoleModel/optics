import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{i as t}from"./react-CaHZDgIm.js";import{s as n}from"./chunk-LITCR56V-BxXRPQK8.js";import{l as r,n as i,u as a}from"./blocks-3ODIrP3Y.js";import{t as o}from"./mdx-react-shim-DIeO1dVO.js";import{n as s,t as c}from"./sourceCodeLink-C1o55bv0.js";import{n as l,t as u}from"./Alert-xuHYkKjH.js";import{Inline as d,n as f,t as p}from"./ConfirmDialog.stories-C8AV3GsV.js";function m(e){let n={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...t(),...e.components};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(r,{of:p}),`
`,(0,g.jsx)(n.h1,{id:`confirm-dialog`,children:`Confirm Dialog`}),`
`,(0,g.jsx)(`div`,{dangerouslySetInnerHTML:{__html:c({link:`components/confirm-dialog.css`}).outerHTML}}),`
`,(0,g.jsxs)(n.p,{children:[`The Confirm Dialog classes can be used for styling a custom alert or confirm dialog. This can be used alongside `,(0,g.jsx)(n.a,{href:`https://github.com/RoleModel/turbo-confirm`,rel:`nofollow`,children:`Turbo Confirm`}),` to achieve custom Confirm Dialogs using Turbo`]}),`
`,(0,g.jsx)(n.h3,{id:`selective-imports`,children:`Selective Imports`}),`
`,(0,g.jsxs)(n.p,{children:[`Confirm Dialog can be used as a standalone component, however, it does have a few dependencies. To see a full dependency list, see `,(0,g.jsx)(n.a,{href:`?path=/docs/overview-selective-imports--docs#dependencies`,children:`Dependency Graph`})]}),`
`,(0,g.jsx)(n.pre,{children:(0,g.jsx)(n.code,{className:`language-css`,children:`/* Depends on */
@import '@rolemodel/optics/dist/css/core/fonts';
@import '@rolemodel/optics/dist/css/core/tokens';
@import '@rolemodel/optics/dist/css/core/base';

/* Component */
@import '@rolemodel/optics/dist/css/components/confirm-dialog';
`})}),`
`,(0,g.jsx)(n.h2,{id:`variations`,children:`Variations`}),`
`,(0,g.jsx)(n.h3,{id:`default`,children:`Default`}),`
`,(0,g.jsxs)(n.p,{children:[(0,g.jsx)(n.code,{children:`.confirm-dialog-wrapper`}),` Wraps the entire dialog.`]}),`
`,(0,g.jsxs)(n.p,{children:[(0,g.jsx)(n.code,{children:`.confirm-dialog-wrapper--active`}),` Allows the dialog to live on your page always, but only show if the class is present.`]}),`
`,(0,g.jsxs)(n.p,{children:[(0,g.jsx)(n.code,{children:`.confirm-dialog-wrapper__backdrop`}),` Provides the dark background to help focus on the dialog.`]}),`
`,(0,g.jsxs)(n.p,{children:[(0,g.jsx)(n.code,{children:`.confirm-dialog`}),` Provides the actual Dialog styling which is constructed similar to the card component.`]}),`
`,(0,g.jsxs)(n.ul,{children:[`
`,(0,g.jsx)(n.li,{children:(0,g.jsx)(n.code,{children:`.confirm-dialog__header`})}),`
`,(0,g.jsx)(n.li,{children:(0,g.jsx)(n.code,{children:`.confirm-dialog__body`})}),`
`,(0,g.jsx)(n.li,{children:(0,g.jsx)(n.code,{children:`.confirm-dialog__footer`})}),`
`]}),`
`,(0,g.jsx)(i,{of:d}),`
`,(0,g.jsx)(n.h2,{id:`confirm-dialog-api`,children:`Confirm Dialog API`}),`
`,(0,g.jsx)(n.p,{children:`Styles are built on CSS variables scoped to the confirm dialog.`}),`
`,(0,g.jsx)(n.p,{children:`Here are the variables that can be customized:`}),`
`,`
`,(0,g.jsx)(n.pre,{children:(0,g.jsx)(n.code,{className:`language-css`,children:`--_op-confirm-dialog-width
`})}),`
`,`
`,(0,g.jsx)(n.h2,{id:`customizing-confirm-dialog-styles`,children:`Customizing Confirm Dialog styles`}),`
`,(0,g.jsx)(`div`,{dangerouslySetInnerHTML:{__html:u({title:`Important!`,description:`These patterns represent how to customize the style of the confirm dialog for your project.`}).outerHTML}}),`
`,(0,g.jsxs)(n.p,{children:[`The classes are structured using the `,(0,g.jsx)(n.a,{href:`https://getbem.com/naming`,rel:`nofollow`,children:`BEM methodology`}),`.`]}),`
`,(0,g.jsxs)(n.p,{children:[`This allows us to define core styles on a main `,(0,g.jsx)(n.a,{href:`https://getbem.com/naming/#block`,rel:`nofollow`,children:`block`}),` class, and use `,(0,g.jsx)(n.a,{href:`https://getbem.com/naming/#modifier`,rel:`nofollow`,children:`modifiers`}),` to encapsulate variant styles. You can modify all dialogs behavior by overriding the `,(0,g.jsx)(n.code,{children:`.confirm-dialog-wrapper`}),` and `,(0,g.jsx)(n.code,{children:`.confirm-dialog`}),` selectors and setting any properties:`]}),`
`,(0,g.jsx)(n.pre,{children:(0,g.jsx)(n.code,{className:`language-css`,children:`.confirm-dialog-wrapper {
  z-index: 200;
}

.confirm-dialog {
  background-color: red;
}
`})}),`
`,(0,g.jsx)(n.h2,{id:`new-confirm-dialog-variations`,children:`New Confirm Dialog Variations`}),`
`,(0,g.jsx)(`div`,{dangerouslySetInnerHTML:{__html:u({title:`Important!`,description:`These patterns represent how to create new variations of the confirm dialog for your project.`}).outerHTML}}),`
`,(0,g.jsxs)(n.p,{children:[`Your application may need a variation. To add one, just follow this template. Note the double hyphen, indicating that this is a `,(0,g.jsx)(n.a,{href:`https://getbem.com/naming/#modifier`,rel:`nofollow`,children:`modifier`}),`:`]}),`
`,(0,g.jsx)(n.pre,{children:(0,g.jsx)(n.code,{className:`language-css`,children:`.confirm-dialog-wrapper--{name} {
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
`})})]})}function h(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,g.jsx)(n,{...e,children:(0,g.jsx)(m,{...e})}):m(e)}var g;e((()=>{g=n(),o(),a(),f(),s(),l()}))();export{h as default};