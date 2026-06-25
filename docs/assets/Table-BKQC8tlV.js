import{i as e}from"./preload-helper-xPQekRTU.js";import{T as t,l as n,n as r,o as i,u as a}from"./blocks-uVOOWdqL.js";import{s as o}from"./chunk-LITCR56V-BmCoDI8n.js";import{t as s}from"./mdx-react-shim-eO_HyXU9.js";import{n as c,t as l}from"./sourceCodeLink-D2TI9VYO.js";import{n as u,t as d}from"./Alert-BSNiXkFA.js";import{ComfortableDensity as f,CompactDensity as p,Danger as m,Default as h,FixedLayout as g,PaginationInFooter as _,Primary as v,StickyBoth as y,StickyFooter as b,StickyHeader as x,StripedEven as S,StripedOdd as C,n as w,t as T}from"./Table.stories-COs1cDut.js";function E(e){let a={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,...t(),...e.components};return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(n,{of:T}),`
`,(0,O.jsx)(a.h1,{id:`table`,children:`Table`}),`
`,(0,O.jsx)(`div`,{dangerouslySetInnerHTML:{__html:l({link:`components/table.css`}).outerHTML}}),`
`,(0,O.jsx)(a.p,{children:`Table classes provide simple styling for tables and their content.`}),`
`,(0,O.jsx)(a.h2,{id:`playground`,children:`Playground`}),`
`,(0,O.jsx)(r,{of:h}),`
`,(0,O.jsx)(i,{of:h}),`
`,(0,O.jsx)(a.h3,{id:`selective-imports`,children:`Selective Imports`}),`
`,(0,O.jsxs)(a.p,{children:[`Table can be used as a standalone component, however, it does have a few dependencies. To see a full dependency list, see `,(0,O.jsx)(a.a,{href:`?path=/docs/overview-selective-imports--docs#dependencies`,children:`Dependency Graph`})]}),`
`,(0,O.jsx)(a.pre,{children:(0,O.jsx)(a.code,{className:`language-css`,children:`/* Depends on */
@import '@rolemodel/optics/dist/css/core/fonts';
@import '@rolemodel/optics/dist/css/core/tokens';
@import '@rolemodel/optics/dist/css/core/base';

/* Component */
@import '@rolemodel/optics/dist/css/components/table';
`})}),`
`,(0,O.jsx)(a.h2,{id:`variations`,children:`Variations`}),`
`,(0,O.jsx)(a.h3,{id:`default`,children:`Default`}),`
`,(0,O.jsxs)(a.p,{children:[(0,O.jsx)(a.code,{children:`.table`}),` Provides a default style to a table element.`]}),`
`,(0,O.jsx)(r,{of:h}),`
`,(0,O.jsx)(a.h3,{id:`primary`,children:`Primary`}),`
`,(0,O.jsxs)(a.p,{children:[(0,O.jsx)(a.code,{children:`.table.table--primary`}),` Provides a Primary table. This uses the primary color in the header.`]}),`
`,(0,O.jsx)(r,{of:v}),`
`,(0,O.jsx)(a.h3,{id:`danger`,children:`Danger`}),`
`,(0,O.jsxs)(a.p,{children:[(0,O.jsx)(a.code,{children:`.table.table--danger`}),` Provides a Danger table. This uses the danger alert color in the header.`]}),`
`,(0,O.jsx)(r,{of:m}),`
`,(0,O.jsx)(a.h3,{id:`layout`,children:`Layout`}),`
`,(0,O.jsxs)(a.p,{children:[(0,O.jsx)(a.code,{children:`.table.table--auto-layout`}),`, `,(0,O.jsx)(a.code,{children:`.table.table--fixed-layout`}),` (with auto being the default) modify the table layout. Auto will adjust according to the contents, fixed will evenly divide based on the amount of columns.`]}),`
`,(0,O.jsx)(r,{of:g}),`
`,(0,O.jsx)(a.h3,{id:`density`,children:`Density`}),`
`,(0,O.jsxs)(a.p,{children:[(0,O.jsx)(a.code,{children:`.table.table--default-density`}),`, `,(0,O.jsx)(a.code,{children:`.table.table--comfortable-density`}),`, `,(0,O.jsx)(a.code,{children:`.table.table--compact-density`}),` (with default being the default) modify the table cell padding to expand or contract how much space they use.`]}),`
`,(0,O.jsx)(r,{of:f}),`
`,(0,O.jsx)(r,{of:p}),`
`,(0,O.jsx)(a.h3,{id:`striping`,children:`Striping`}),`
`,(0,O.jsxs)(a.p,{children:[(0,O.jsx)(a.code,{children:`.table.table--even-striped`}),`, `,(0,O.jsx)(a.code,{children:`.table.table--odd-striped`}),` color every other (odd or even) row with a light color on the neutral scale.`]}),`
`,(0,O.jsx)(r,{of:S}),`
`,(0,O.jsx)(r,{of:C}),`
`,(0,O.jsx)(a.h3,{id:`sticky-headerfooter`,children:`Sticky Header/Footer`}),`
`,(0,O.jsxs)(a.p,{children:[(0,O.jsx)(a.code,{children:`.table.table--sticky-header`}),`, `,(0,O.jsx)(a.code,{children:`.table.table--sticky-footer`}),` will make either the table header or table footer sticky; the default is top/bottom of the viewport.`]}),`
`,(0,O.jsxs)(a.p,{children:[`These are best used in conjunction with a wrapping container fixed table height, though they will work outside of that being sticky to the browser window. Because the actual `,(0,O.jsx)(a.code,{children:`table`}),` HTML element is a bit finicky, you will need to wrap the `,(0,O.jsx)(a.code,{children:`table`}),` itself in a `,(0,O.jsx)(a.code,{children:`.table-container`}),` div to achieve correct overflow behavior. You will also need to set a fixed height. This will allow sticky header/footer with scrollable body rows.`]}),`
`,(0,O.jsx)(a.pre,{children:(0,O.jsx)(a.code,{className:`language-html`,children:`<div class="table-container">
  <!-- Container div with class also needs to set the desired height. 20vh in these examples -->
  <table class="table">
    <!-- Actual table element ... -->
  </table>
</div>
`})}),`
`,(0,O.jsx)(r,{of:x}),`
`,(0,O.jsx)(r,{of:b}),`
`,(0,O.jsx)(r,{of:y}),`
`,(0,O.jsx)(a.h3,{id:`with-pagination`,children:`With Pagination`}),`
`,(0,O.jsxs)(a.p,{children:[`The `,(0,O.jsx)(a.a,{href:`?path=/docs/components-pagination--docs`,children:`Pagination`}),` component can be used with the table to provide a way to navigate through a large dataset.`]}),`
`,(0,O.jsx)(a.p,{children:`Here is an example of using it in the table footer.`}),`
`,(0,O.jsx)(r,{of:_}),`
`,(0,O.jsx)(a.h2,{id:`table-api`,children:`Table API`}),`
`,(0,O.jsx)(a.p,{children:`Padding table styles are built on CSS variables scoped to the table.`}),`
`,(0,O.jsx)(a.p,{children:`Here are the variables used:`}),`
`,(0,O.jsx)(a.pre,{children:(0,O.jsx)(a.code,{className:`language-css`,children:`/* Variable API */
--_op-table-cell-padding-default
--_op-table-cell-padding-comfortable
--_op-table-cell-padding-compact
`})}),`
`,(0,O.jsx)(a.h2,{id:`customizing-table-styles`,children:`Customizing Table styles`}),`
`,(0,O.jsx)(`div`,{dangerouslySetInnerHTML:{__html:d({title:`Important!`,description:`These patterns represent how to customize the style of the table for your project.`}).outerHTML}}),`
`,(0,O.jsxs)(a.p,{children:[`The table classes are structured using the `,(0,O.jsx)(a.a,{href:`https://getbem.com/naming`,rel:`nofollow`,children:`BEM methodology`}),`.`]}),`
`,(0,O.jsxs)(a.p,{children:[`This allows us to define core styles on a main `,(0,O.jsx)(a.a,{href:`https://getbem.com/naming/#block`,rel:`nofollow`,children:`block`}),` class, and use `,(0,O.jsx)(a.a,{href:`https://getbem.com/naming/#modifier`,rel:`nofollow`,children:`modifiers`}),` to encapsulate variant styles. You can modify all table behavior by overriding the `,(0,O.jsx)(a.code,{children:`.table`}),` selector and setting any properties:`]}),`
`,(0,O.jsx)(a.pre,{children:(0,O.jsx)(a.code,{className:`language-css`,children:`.table {
  font-size: var(--op-font-2x-large);
}
`})}),`
`,(0,O.jsx)(a.p,{children:`If you want to override how the density modifier behaves, you can use API described above to change which padding each density uses.`}),`
`,(0,O.jsx)(a.pre,{children:(0,O.jsx)(a.code,{className:`language-css`,children:`.table {
  --_op-table-cell-padding-default: var(--op-space-x-small) var(--op-space-2x-small);
  --_op-table-cell-padding-comfortable: var(--op-space-large) var(--op-space-medium);
  --_op-table-cell-padding-compact: var(--op-space-2x-small) var(--op-space-3x-small);
}
`})}),`
`,(0,O.jsx)(a.p,{children:`If you need to override the color of a particular table style, you can open the respective class and set or change any properties:`}),`
`,(0,O.jsx)(a.pre,{children:(0,O.jsx)(a.code,{className:`language-css`,children:`/* This will only affect the primary table, but not default or danger */
.table--primary {
  thead {
    background-color: purple;
    color: white;
  }
}
`})}),`
`,(0,O.jsx)(a.h2,{id:`new-table-variations`,children:`New Table Variations`}),`
`,(0,O.jsx)(`div`,{dangerouslySetInnerHTML:{__html:d({title:`Important!`,description:`These patterns represent how to create new variations of the table for your project.`}).outerHTML}}),`
`,(0,O.jsxs)(a.p,{children:[`Your application may need a variation. To add one, just follow this template. Note the double hyphen, indicating that this is a `,(0,O.jsx)(a.a,{href:`https://getbem.com/naming/#modifier`,rel:`nofollow`,children:`modifier`}),`:`]}),`
`,(0,O.jsx)(a.pre,{children:(0,O.jsx)(a.code,{className:`language-css`,children:`.table--{name} {
  thead {
    background-color:
    color:
  }
}
`})}),`
`,(0,O.jsx)(a.pre,{children:(0,O.jsx)(a.code,{className:`language-css`,children:`.table--purple {
  thead {
    background-color: purple;
    color: white;
  }
}
`})})]})}function D(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,O.jsx)(n,{...e,children:(0,O.jsx)(E,{...e})}):E(e)}var O;e((()=>{O=o(),s(),a(),w(),c(),u()}))();export{D as default};