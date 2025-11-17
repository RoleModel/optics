import{j as e,M as r,C as n,a as d}from"./blocks-ZRPSuR6b.js";import{useMDXComponents as i}from"./index-d9ggI4Sk.js";import{T as c,D as o,P as h,a as p,F as b,C as m,b as x,S as j,c as u,d as f,e as g,f as y,g as v}from"./Table.stories-CaUuGvOh.js";import{c as w}from"./sourceCodeLink-Chh3FteF.js";import{c as s}from"./Alert-CAEs4394.js";import"./preload-helper-D9Z9MdNV.js";import"./iframe-nopHEUW4.js";import"./Pagination-CeSb3t6J.js";import"./Button-B21kpIpO.js";import"./Icon-uqCTS4Mm.js";function l(a){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...i(),...a.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:c}),`
`,e.jsx(t.h1,{id:"table",children:"Table"}),`
`,e.jsx("div",{dangerouslySetInnerHTML:{__html:w({link:"components/table.css"}).outerHTML}}),`
`,e.jsx(t.p,{children:"Table classes provide simple styling for tables and their content."}),`
`,e.jsx(t.h2,{id:"playground",children:"Playground"}),`
`,e.jsx(n,{of:o}),`
`,e.jsx(d,{of:o}),`
`,e.jsx(t.h3,{id:"selective-imports",children:"Selective Imports"}),`
`,e.jsxs(t.p,{children:["Table can be used as a standalone component, however, it does have a few dependencies. To see a full dependency list, see ",e.jsx(t.a,{href:"?path=/docs/overview-selective-imports--docs#dependencies",children:"Dependency Graph"})]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-css",children:`/* Depends on */
@import '@rolemodel/optics/dist/css/core/fonts';
@import '@rolemodel/optics/dist/css/core/tokens';
@import '@rolemodel/optics/dist/css/core/base';

/* Component */
@import '@rolemodel/optics/dist/css/components/table';
`})}),`
`,e.jsx(t.h2,{id:"variations",children:"Variations"}),`
`,e.jsx(t.h3,{id:"default",children:"Default"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:".table"})," Provides a default style to a table element."]}),`
`,e.jsx(n,{of:o}),`
`,e.jsx(t.h3,{id:"primary",children:"Primary"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:".table.table--primary"})," Provides a Primary table. This uses the primary color in the header."]}),`
`,e.jsx(n,{of:h}),`
`,e.jsx(t.h3,{id:"danger",children:"Danger"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:".table.table--danger"})," Provides a Danger table. This uses the danger alert color in the header."]}),`
`,e.jsx(n,{of:p}),`
`,e.jsx(t.h3,{id:"layout",children:"Layout"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:".table.table--auto-layout"}),", ",e.jsx(t.code,{children:".table.table--fixed-layout"})," (with auto being the default) modify the table layout. Auto will adjust according to the contents, fixed will evenly divide based on the amount of columns."]}),`
`,e.jsx(n,{of:b}),`
`,e.jsx(t.h3,{id:"density",children:"Density"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:".table.table--default-density"}),", ",e.jsx(t.code,{children:".table.table--comfortable-density"}),", ",e.jsx(t.code,{children:".table.table--compact-density"})," (with default being the default) modify the table cell padding to expand or contract how much space they use."]}),`
`,e.jsx(n,{of:m}),`
`,e.jsx(n,{of:x}),`
`,e.jsx(t.h3,{id:"striping",children:"Striping"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:".table.table--even-striped"}),", ",e.jsx(t.code,{children:".table.table--odd-striped"})," color every other (odd or even) row with a light color on the neutral scale."]}),`
`,e.jsx(n,{of:j}),`
`,e.jsx(n,{of:u}),`
`,e.jsx(t.h3,{id:"sticky-headerfooter",children:"Sticky Header/Footer"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:".table.table--sticky-header"}),", ",e.jsx(t.code,{children:".table.table--sticky-footer"})," will make either the table header or table footer sticky; the default is top/bottom of the viewport."]}),`
`,e.jsxs(t.p,{children:["These are best used in conjunction with a wrapping container fixed table height, though they will work outside of that being sticky to the browser window. Because the actual ",e.jsx(t.code,{children:"table"})," HTML element is a bit finicky, you will need to wrap the ",e.jsx(t.code,{children:"table"})," itself in a ",e.jsx(t.code,{children:".table-container"})," div to achieve correct overflow behavior. You will also need to set a fixed height. This will allow sticky header/footer with scrollable body rows."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<div class="table-container">
  <!-- Container div with class also needs to set the desired height. 20vh in these examples -->
  <table class="table">
    <!-- Actual table element ... -->
  </table>
</div>
`})}),`
`,e.jsx(n,{of:f}),`
`,e.jsx(n,{of:g}),`
`,e.jsx(n,{of:y}),`
`,e.jsx(t.h3,{id:"with-pagination",children:"With Pagination"}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.a,{href:"?path=/docs/components-pagination--docs",children:"Pagination"})," component can be used with the table to provide a way to navigate through a large dataset."]}),`
`,e.jsx(t.p,{children:"Here is an example of using it in the table footer."}),`
`,e.jsx(n,{of:v}),`
`,e.jsx(t.h2,{id:"table-api",children:"Table API"}),`
`,e.jsx(t.p,{children:"Padding table styles are built on CSS variables scoped to the table."}),`
`,e.jsx(t.p,{children:"Here are the variables used:"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-css",children:`/* Variable API */
--_op-table-cell-padding-default
--_op-table-cell-padding-comfortable
--_op-table-cell-padding-compact
`})}),`
`,e.jsx(t.h2,{id:"customizing-table-styles",children:"Customizing Table styles"}),`
`,e.jsx("div",{dangerouslySetInnerHTML:{__html:s({title:"Important!",description:"These patterns represent how to customize the style of the table for your project."}).outerHTML}}),`
`,e.jsxs(t.p,{children:["The table classes are structured using the ",e.jsx(t.a,{href:"https://getbem.com/naming",rel:"nofollow",children:"BEM methodology"}),"."]}),`
`,e.jsxs(t.p,{children:["This allows us to define core styles on a main ",e.jsx(t.a,{href:"https://getbem.com/naming/#block",rel:"nofollow",children:"block"})," class, and use ",e.jsx(t.a,{href:"https://getbem.com/naming/#modifier",rel:"nofollow",children:"modifiers"})," to encapsulate variant styles. You can modify all table behavior by overriding the ",e.jsx(t.code,{children:".table"})," selector and setting any properties:"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-css",children:`.table {
  font-size: var(--op-font-2x-large);
}
`})}),`
`,e.jsx(t.p,{children:"If you want to override how the density modifier behaves, you can use API described above to change which padding each density uses."}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-css",children:`.table {
  --_op-table-cell-padding-default: var(--op-space-x-small) var(--op-space-2x-small);
  --_op-table-cell-padding-comfortable: var(--op-space-large) var(--op-space-medium);
  --_op-table-cell-padding-compact: var(--op-space-2x-small) var(--op-space-3x-small);
}
`})}),`
`,e.jsx(t.p,{children:"If you need to override the color of a particular table style, you can open the respective class and set or change any properties:"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-css",children:`/* This will only affect the primary table, but not default or danger */
.table--primary {
  thead {
    background-color: purple;
    color: white;
  }
}
`})}),`
`,e.jsx(t.h2,{id:"new-table-variations",children:"New Table Variations"}),`
`,e.jsx("div",{dangerouslySetInnerHTML:{__html:s({title:"Important!",description:"These patterns represent how to create new variations of the table for your project."}).outerHTML}}),`
`,e.jsxs(t.p,{children:["Your application may need a variation. To add one, just follow this template. Note the double hyphen, indicating that this is a ",e.jsx(t.a,{href:"https://getbem.com/naming/#modifier",rel:"nofollow",children:"modifier"}),":"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-css",children:`.table--{name} {
  thead {
    background-color:
    color:
  }
}
`})}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-css",children:`.table--purple {
  thead {
    background-color: purple;
    color: white;
  }
}
`})})]})}function L(a={}){const{wrapper:t}={...i(),...a.components};return t?e.jsx(t,{...a,children:e.jsx(l,{...a})}):l(a)}export{L as default};
