import{i as e}from"./preload-helper-xPQekRTU.js";import{T as t,l as n,n as r,o as i,u as a}from"./blocks-uVOOWdqL.js";import{s as o}from"./chunk-LITCR56V-BmCoDI8n.js";import{t as s}from"./mdx-react-shim-eO_HyXU9.js";import{n as c,t as l}from"./sourceCodeLink-D2TI9VYO.js";import{n as u,t as d}from"./Alert-BSNiXkFA.js";import{Default as f,WithShowing as p,n as m,t as h}from"./Pagination.stories-CdbyZbxb.js";function g(e){let a={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,...t(),...e.components};return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(n,{of:h}),`
`,(0,v.jsx)(a.h1,{id:`pagination`,children:`Pagination`}),`
`,(0,v.jsx)(`div`,{dangerouslySetInnerHTML:{__html:l({link:`components/pagination.css`}).outerHTML}}),`
`,(0,v.jsx)(a.p,{children:`Pagination is used to navigate through a series of pages, typically when dealing with tabular data.
A few classes are used in combination with the button component to achieve this.`}),`
`,(0,v.jsxs)(a.p,{children:[`An example of using this component with the Table component can be found in `,(0,v.jsx)(a.a,{href:`?path=/docs/components-table--docs#with-pagination`,children:`Table With Pagination`}),`.`]}),`
`,(0,v.jsx)(a.h2,{id:`note-on-implementation`,children:`Note on Implementation`}),`
`,(0,v.jsx)(a.p,{children:`This is just a styling pattern and does not implement the paging functionality. That is up to the projects needs.`}),`
`,(0,v.jsxs)(a.p,{children:[`A commonly used tool for Ruby on Rails projects is `,(0,v.jsx)(a.a,{href:`https://github.com/kaminari/kaminari`,rel:`nofollow`,children:`Kaminari`}),`. It allows you to copy its templates and customize them. To apply these patterns to those templates, just edit the files it generates and use the classes in these examples.`]}),`
`,(0,v.jsxs)(a.p,{children:[(0,v.jsx)(a.a,{href:`https://github.com/RoleModel/rolemodel_rails/tree/master/lib/generators/rolemodel/kaminari`,rel:`nofollow`,children:`RoleModel Rails Kaminari Generator`}),` provides a generator to install and configure Kaminari with Optics classes applied.`]}),`
`,(0,v.jsx)(a.h2,{id:`playground`,children:`Playground`}),`
`,(0,v.jsx)(r,{of:f}),`
`,(0,v.jsx)(i,{of:f}),`
`,(0,v.jsx)(a.h3,{id:`selective-imports`,children:`Selective Imports`}),`
`,(0,v.jsxs)(a.p,{children:[`Pagination can be used as a standalone component, however, it does have a few dependencies. To see a full dependency list, see `,(0,v.jsx)(a.a,{href:`?path=/docs/overview-selective-imports--docs#dependencies`,children:`Dependency Graph`})]}),`
`,(0,v.jsx)(a.pre,{children:(0,v.jsx)(a.code,{className:`language-css`,children:`/* Depends on */
@import '@rolemodel/optics/dist/css/core/fonts';
@import '@rolemodel/optics/dist/css/core/tokens';
@import '@rolemodel/optics/dist/css/core/base';
@import '@rolemodel/optics/dist/css/core/button';
@import '@rolemodel/optics/dist/css/core/form';

/* Component */
@import '@rolemodel/optics/dist/css/components/pagination';
`})}),`
`,(0,v.jsx)(a.h2,{id:`variations`,children:`Variations`}),`
`,(0,v.jsx)(a.h3,{id:`default`,children:`Default`}),`
`,(0,v.jsxs)(a.p,{children:[(0,v.jsx)(a.code,{children:`.pagination`}),` Is the main class. It can be placed on a `,(0,v.jsx)(a.code,{children:`nav`}),` element and wraps a collection of `,(0,v.jsx)(a.a,{href:`?path=/docs/components-button--docs`,children:`buttons`}),` to create a pagination component.`]}),`
`,(0,v.jsxs)(a.p,{children:[`The buttons within can use any of the button classes, but form a default look, use the `,(0,v.jsx)(a.code,{children:`.btn .btn--no-border .btn--small`}),` classes.`]}),`
`,(0,v.jsxs)(a.p,{children:[`For the first and last page buttons, `,(0,v.jsx)(a.code,{children:`.btn--icon`}),` can be added for ensure a square button.`]}),`
`,(0,v.jsxs)(a.p,{children:[`For the currently active page, `,(0,v.jsx)(a.code,{children:`.btn--active`}),` can be used.`]}),`
`,(0,v.jsxs)(a.p,{children:[(0,v.jsx)(a.code,{children:`.pagination__divider`}),` can be used on a div with contents of `,(0,v.jsx)(a.code,{children:`...`}),` to indicate a break in the pagination.
This pattern is commonly used (and recommended to be used) when there are more that six pages of content. It prevents the pagination from becoming too long.`]}),`
`,(0,v.jsx)(r,{of:f}),`
`,(0,v.jsx)(a.h3,{id:`with-showing-select`,children:`With Showing Select`}),`
`,(0,v.jsx)(a.p,{children:`Another common pattern is to allow users to change how many items are shown per page. The visuals of this can be achieved by using a form group with a select component. The pagination styling will handle making the form label inline.`}),`
`,(0,v.jsx)(r,{of:p}),`
`,(0,v.jsx)(a.h2,{id:`customizing-pagination-styles`,children:`Customizing Pagination styles`}),`
`,(0,v.jsx)(`div`,{dangerouslySetInnerHTML:{__html:d({title:`Important!`,description:`These patterns represent how to customize the style of the pagination for your project.`}).outerHTML}}),`
`,(0,v.jsxs)(a.p,{children:[`The pagination classes are structured using the `,(0,v.jsx)(a.a,{href:`https://getbem.com/naming`,rel:`nofollow`,children:`BEM methodology`}),`.`]}),`
`,(0,v.jsxs)(a.p,{children:[`This allows us to define core styles on a main `,(0,v.jsx)(a.a,{href:`https://getbem.com/naming/#block`,rel:`nofollow`,children:`block`}),` class, and use `,(0,v.jsx)(a.a,{href:`https://getbem.com/naming/#modifier`,rel:`nofollow`,children:`modifiers`}),` to encapsulate variant styles. You can modify all pagination behavior by overriding the `,(0,v.jsx)(a.code,{children:`%pagination-global`}),` selector and setting any properties:`]}),`
`,(0,v.jsx)(a.pre,{children:(0,v.jsx)(a.code,{className:`language-css`,children:`.pagination {
}
`})}),`
`,(0,v.jsx)(a.h2,{id:`new-pagination-variations`,children:`New Pagination Variations`}),`
`,(0,v.jsx)(`div`,{dangerouslySetInnerHTML:{__html:d({title:`Important!`,description:`These patterns represent how to create new variations of the pagination for your project.`}).outerHTML}}),`
`,(0,v.jsx)(a.p,{children:`Your application may need a custom pagination. To add one, just follow this template:`}),`
`,(0,v.jsx)(a.pre,{children:(0,v.jsx)(a.code,{className:`language-css`,children:`.pagination--{name} {
}
`})})]})}function _(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,v.jsx)(n,{...e,children:(0,v.jsx)(g,{...e})}):g(e)}var v;e((()=>{v=o(),s(),a(),m(),c(),u()}))();export{_ as default};