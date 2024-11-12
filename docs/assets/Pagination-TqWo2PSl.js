import{j as e}from"./jsx-runtime-Ce5xs4Wy.js";import{u as r}from"./index-CPcV2wD4.js";import{M as l,C as o,d as c}from"./index-C52FNCyE.js";import{P as d,D as s,W as h}from"./Pagination.stories-Bx7R3UI-.js";import{c as p}from"./sourceCodeLink-Chh3FteF.js";import{c as i}from"./Alert-93ao7bSE.js";import"./iframe-BN7FcqzY.js";import"../sb-preview/runtime.js";import"./index-B5rfWaSj.js";import"./index-DrFu-skq.js";import"./Pagination-DmuckP5n.js";import"./Button-CoyIamir.js";import"./Icon-D9QrNi_D.js";function a(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:d}),`
`,e.jsx(n.h1,{id:"pagination",children:"Pagination"}),`
`,e.jsx("div",{dangerouslySetInnerHTML:{__html:p({link:"components/pagination.scss"}).outerHTML}}),`
`,e.jsx(n.p,{children:`Pagination is used to navigate through a series of pages, typically when dealing with tabular data.
A few classes are used in combination with the button component to achieve this.`}),`
`,e.jsxs(n.p,{children:["An example of using this component with the Table component can be found in ",e.jsx(n.a,{href:"?path=/docs/content-components-table--docs#with-pagination",children:"Table With Pagination"}),"."]}),`
`,e.jsx(n.h2,{id:"note-on-implementation",children:"Note on Implementation"}),`
`,e.jsx(n.p,{children:"This is just a styling pattern and does not implement the paging functionality. That is up to the projects needs."}),`
`,e.jsxs(n.p,{children:["A commonly used tool for Ruby on Rails projects is ",e.jsx(n.a,{href:"https://github.com/kaminari/kaminari",rel:"nofollow",children:"Kaminari"}),". It allows you to copy its templates and customize them. To apply these patterns to those templates, just edit the files it generates and use the classes in these examples."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://github.com/RoleModel/rolemodel_rails/tree/master/lib/generators/rolemodel/kaminari",rel:"nofollow",children:"RoleModel Rails Kaminari Generator"})," provides a generator to install and configure Kaminari with Optics classes applied."]}),`
`,e.jsx(n.h2,{id:"playground",children:"Playground"}),`
`,e.jsx(o,{of:s}),`
`,e.jsx(c,{of:s}),`
`,e.jsx(n.h3,{id:"selective-imports",children:"Selective Imports"}),`
`,e.jsxs(n.p,{children:["Pagination can be used as a standalone component, however, it does have a few dependencies. To see a full dependency list, see ",e.jsx(n.a,{href:"?path=/docs/overview-selective-imports--docs#dependencies",children:"Dependency Graph"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`// Depends on
@import '@rolemodel/optics/dist/scss/core/tokens';
@import '@rolemodel/optics/dist/scss/core/base';
@import '@rolemodel/optics/dist/scss/core/button';
@import '@rolemodel/optics/dist/scss/core/form';

// Component
@import '@rolemodel/optics/dist/scss/components/pagination';
`})}),`
`,e.jsx(n.h2,{id:"variations",children:"Variations"}),`
`,e.jsx(n.h3,{id:"default",children:"Default"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:".pagination"})," Is the main class. It can be placed on a ",e.jsx(n.code,{children:"nav"})," element and wraps a collection of ",e.jsx(n.a,{href:"?path=/docs/navigation-components-button--docs",children:"buttons"})," to create a pagination component."]}),`
`,e.jsxs(n.p,{children:["The buttons within can use any of the button classes, but form a default look, use the ",e.jsx(n.code,{children:".btn .btn--no-border .btn--small"})," classes."]}),`
`,e.jsxs(n.p,{children:["For the first and last page buttons, ",e.jsx(n.code,{children:".btn--icon"})," can be added for ensure a square button."]}),`
`,e.jsxs(n.p,{children:["For the currently active page, ",e.jsx(n.code,{children:".btn--active"})," can be used."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:".pagination__divider"})," can be used on a div with contents of ",e.jsx(n.code,{children:"..."}),` to indicate a break in the pagination.
This pattern is commonly used (and recommended to be used) when there are more that six pages of content. It prevents the pagination from becoming too long.`]}),`
`,e.jsx(o,{of:s}),`
`,e.jsx(n.h3,{id:"with-showing-select",children:"With Showing Select"}),`
`,e.jsx(n.p,{children:"Another common pattern is to allow users to change how many items are shown per page. The visuals of this can be achieved by using a form group with a select component. The pagination styling will handle making the form label inline."}),`
`,e.jsx(o,{of:h}),`
`,e.jsx(n.h2,{id:"customizing-pagination-styles",children:"Customizing Pagination styles"}),`
`,e.jsx("div",{dangerouslySetInnerHTML:{__html:i({title:"Important!",description:"These patterns represent how to customize the style of the pagination for your project."}).outerHTML}}),`
`,e.jsxs(n.p,{children:["The pagination classes are built on a ",e.jsx(n.a,{href:"https://sass-lang.com/documentation/style-rules/placeholder-selectors",rel:"nofollow",children:"sass placeholder selector"})]}),`
`,e.jsxs(n.p,{children:["This allows multiple classes to share the same behavior. You can modify all pagination behavior by overriding the ",e.jsx(n.code,{children:"%pagination-global"}),` placeholder selector
and setting any properties:`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`%pagination-global {
}
`})}),`
`,e.jsx(n.h2,{id:"new-pagination-variations",children:"New Pagination Variations"}),`
`,e.jsx("div",{dangerouslySetInnerHTML:{__html:i({title:"Important!",description:"These patterns represent how to create new variations of the pagination for your project."}).outerHTML}}),`
`,e.jsx(n.p,{children:"Your application may need a custom pagination. To add one, just follow this template:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`  @extend %pagination-global;
.pagination-{name} {
}
`})})]})}function _(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(a,{...t})}):a(t)}export{_ as default};
