import{j as e}from"./jsx-runtime-E9NyL7ZE.js";import{u as i}from"./index-DZ-dxXhw.js";import{M as r,C as t,d}from"./index-CKTeridz.js";import{T as c,D as o,P as h,a as p,F as x,C as b,b as m,S as u,c as j,d as f,e as g,f as y,g as v}from"./Table.stories-CYIxHYll.js";import{c as w}from"./sourceCodeLink-Chh3FteF.js";import{c as s}from"./Alert-lmCd5s8U.js";import"./iframe-Cw5OhXyt.js";import"../sb-preview/runtime.js";import"./index-B5rfWaSj.js";import"./index-DrFu-skq.js";import"./Pagination-DmuckP5n.js";import"./Button-CoyIamir.js";import"./Icon-D9QrNi_D.js";function l(a){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...i(),...a.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:c}),`
`,e.jsx(n.h1,{id:"table",children:"Table"}),`
`,e.jsx("div",{dangerouslySetInnerHTML:{__html:w({link:"components/table.scss"}).outerHTML}}),`
`,e.jsx(n.p,{children:"Table classes provide simple styling for tables and their content."}),`
`,e.jsx(n.h2,{id:"playground",children:"Playground"}),`
`,e.jsx(t,{of:o}),`
`,e.jsx(d,{of:o}),`
`,e.jsx(n.h3,{id:"selective-imports",children:"Selective Imports"}),`
`,e.jsxs(n.p,{children:["Table can be used as a standalone component, however, it does have a few dependencies. To see a full dependency list, see ",e.jsx(n.a,{href:"?path=/docs/overview-selective-imports--docs#dependencies",children:"Dependency Graph"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`// Depends on
@import '@rolemodel/optics/dist/scss/core/tokens';
@import '@rolemodel/optics/dist/scss/core/base';

// Component
@import '@rolemodel/optics/dist/scss/components/table';
`})}),`
`,e.jsx(n.h2,{id:"variations",children:"Variations"}),`
`,e.jsx(n.h3,{id:"default",children:"Default"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:".table"})," Provides a default style to a table element."]}),`
`,e.jsx(t,{of:o}),`
`,e.jsx(n.h3,{id:"primary",children:"Primary"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:".table-primary"})," Provides a Primary table. This uses the primary color in the header."]}),`
`,e.jsx(t,{of:h}),`
`,e.jsx(n.h3,{id:"danger",children:"Danger"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:".table-danger"})," Provides a Danger table. This uses the danger alert color in the header."]}),`
`,e.jsx(t,{of:p}),`
`,e.jsx(n.h3,{id:"layout",children:"Layout"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:".table--auto-layout"}),", ",e.jsx(n.code,{children:".table--fixed-layout"})," (with auto being the default) modify the table layout. Auto will adjust according to the contents, fixed will evenly divide based on the amount of columns."]}),`
`,e.jsx(t,{of:x}),`
`,e.jsx(n.h3,{id:"density",children:"Density"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:".table--default-density"}),", ",e.jsx(n.code,{children:".table--comfortable-density"}),", ",e.jsx(n.code,{children:"table--compact-density"})," (with default being the default) modify the table cell padding to expand or contract how much space they use."]}),`
`,e.jsx(t,{of:b}),`
`,e.jsx(t,{of:m}),`
`,e.jsx(n.h3,{id:"striping",children:"Striping"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:".table--even-striped"}),", ",e.jsx(n.code,{children:".table--odd-striped"})," color every other (odd or even) row with a light color on the neutral scale."]}),`
`,e.jsx(t,{of:u}),`
`,e.jsx(t,{of:j}),`
`,e.jsx(n.h3,{id:"sticky-headerfooter",children:"Sticky Header/Footer"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:".table--sticky-header"}),", ",e.jsx(n.code,{children:".table--sticky-footer"})," will make either the table header or table footer sticky; the default is top/bottom of the viewport."]}),`
`,e.jsxs(n.p,{children:["These are best used in conjunction with a wrapping container fixed table height, though they will work outside of that being sticky to the browser window. Because the actual ",e.jsx(n.code,{children:"table"})," HTML element is a bit finicky, you will need to wrap the ",e.jsx(n.code,{children:"table"})," itself in a ",e.jsx(n.code,{children:".table-container"})," div to achieve correct overflow behavior. You will also need to set a fixed height. This will allow sticky header/footer with scrollable body rows."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<div class="table-container">
  // Container div with class also needs to set the desired height. 20vh in these examples
  <table class="table">
    // Actual table element ...
  </table>
</div>
`})}),`
`,e.jsx(t,{of:f}),`
`,e.jsx(t,{of:g}),`
`,e.jsx(t,{of:y}),`
`,e.jsx(n.h3,{id:"with-pagination",children:"With Pagination"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.a,{href:"?path=/docs/navigation-components-pagination--docs",children:"Pagination"})," component can be used with the table to provide a way to navigate through a large dataset."]}),`
`,e.jsx(n.p,{children:"Here is an example of using it in the table footer."}),`
`,e.jsx(t,{of:v}),`
`,e.jsx(n.h2,{id:"table-api",children:"Table API"}),`
`,e.jsx(n.p,{children:"Padding table styles are built on CSS variables scoped to the table."}),`
`,e.jsx(n.p,{children:"Here are the variables used:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`// Variable API
--_op-table-cell-padding-default
--_op-table-cell-padding-comfortable
--_op-table-cell-padding-compact
`})}),`
`,e.jsx(n.h2,{id:"customizing-table-styles",children:"Customizing Table styles"}),`
`,e.jsx("div",{dangerouslySetInnerHTML:{__html:s({title:"Important!",description:"These patterns represent how to customize the style of the table for your project."}).outerHTML}}),`
`,e.jsxs(n.p,{children:["The table classes are built on a ",e.jsx(n.a,{href:"https://sass-lang.com/documentation/style-rules/placeholder-selectors",rel:"nofollow",children:"SASS placeholder selector"})]}),`
`,e.jsxs(n.p,{children:["This allows multiple table classes to share the same behavior. You can modify all tables behavior by overriding the ",e.jsx(n.code,{children:"%table-global"})," placeholder selector and setting any proprerties:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`%table-global {
  font-size: var(--op-font-2x-large);
}
`})}),`
`,e.jsx(n.p,{children:"If you want to override how the density modifier behaves, you can use API described above to change which padding each density uses."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`%table-global {
  --_op-table-cell-padding-default: var(--op-space-x-small) var(--op-space-2x-small);
  --_op-table-cell-padding-comfortable: var(--op-space-large) var(--op-space-medium);
  --_op-table-cell-padding-compact: var(--op-space-2x-small) var(--op-space-3x-small);
}
`})}),`
`,e.jsx(n.p,{children:"If you need to override the color of a particular table style, you can open the respective class and set or change any properties:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`// This will only affect the primary table, but not default or danger
.table-primary {
  thead {
    background-color: purple;
    color: white;
  }
}
`})}),`
`,e.jsx(n.h2,{id:"new-table-variations",children:"New Table Variations"}),`
`,e.jsx("div",{dangerouslySetInnerHTML:{__html:s({title:"Important!",description:"These patterns represent how to create new variations of the table for your project."}).outerHTML}}),`
`,e.jsx(n.p,{children:"Your application may need a custom table. To add one, just follow this template:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`.table-{name} {
  @extend %table-global;

  thead {
    background-color:
    color:
  }
}
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`.table-purple {
  @extend %table-global;

  thead {
    background-color: purple;
    color: white;
  }
}
`})})]})}function F(a={}){const{wrapper:n}={...i(),...a.components};return n?e.jsx(n,{...a,children:e.jsx(l,{...a})}):l(a)}export{F as default};
