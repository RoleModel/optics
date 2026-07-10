import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{i as t}from"./react-CaHZDgIm.js";import{s as n}from"./chunk-LITCR56V-BxXRPQK8.js";import{l as r,n as i,o as a,u as o}from"./blocks-nNA0HiVS.js";import{t as s}from"./mdx-react-shim-DIeO1dVO.js";import{n as c,t as l}from"./sourceCodeLink-C1o55bv0.js";import{n as u,t as d}from"./Alert-xuHYkKjH.js";import{Bordered as f,Default as p,PaddedBody as m,PaddedFooter as h,PaddedHeader as g,PaddedSection as _,WithSections as v,n as y,t as b}from"./SidePanel.stories-BICxugMt.js";function x(e){let n={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,...t(),...e.components};return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(r,{of:b}),`
`,(0,C.jsx)(n.h1,{id:`sidepanel`,children:`SidePanel`}),`
`,(0,C.jsx)(`div`,{dangerouslySetInnerHTML:{__html:l({link:`components/side_panel.css`}).outerHTML}}),`
`,(0,C.jsx)(n.p,{children:`Side Panel classes provide simple styling for a panel of sections with a scrollable body.`}),`
`,(0,C.jsxs)(n.p,{children:[(0,C.jsx)(n.code,{children:`.side-panel`}),` is the main component that everything is contained within.`]}),`
`,(0,C.jsx)(`div`,{dangerouslySetInnerHTML:{__html:d({title:`Note`,icon:`info`,warningLevel:`info`,description:`The wrapping div with a height in the code snippets is just for demonstration purposes in this documentation. It is not necessary for use in your application.`,iconDocsClassFix:`sb-unstyled`}).outerHTML}}),`
`,(0,C.jsx)(n.h2,{id:`playground`,children:`Playground`}),`
`,(0,C.jsx)(i,{of:p}),`
`,(0,C.jsx)(a,{of:p}),`
`,(0,C.jsx)(n.h3,{id:`selective-imports`,children:`Selective Imports`}),`
`,(0,C.jsxs)(n.p,{children:[`Side Panel can be used as a standalone component, however, it does have a few dependencies. To see a full dependency list, see `,(0,C.jsx)(n.a,{href:`?path=/docs/overview-selective-imports--docs#dependencies`,children:`Dependency Graph`})]}),`
`,(0,C.jsx)(n.pre,{children:(0,C.jsx)(n.code,{className:`language-css`,children:`/* Depends on */
@import '@rolemodel/optics/dist/css/core/fonts';
@import '@rolemodel/optics/dist/css/core/tokens';
@import '@rolemodel/optics/dist/css/core/base';

/* Component */
@import '@rolemodel/optics/dist/css/components/side_panel';
`})}),`
`,(0,C.jsx)(n.h2,{id:`variations`,children:`Variations`}),`
`,(0,C.jsx)(n.h3,{id:`default`,children:`Default`}),`
`,(0,C.jsxs)(n.p,{children:[(0,C.jsx)(n.code,{children:`.side-panel`}),` provides the basic shell for your sidebar.`]}),`
`,(0,C.jsxs)(n.p,{children:[(0,C.jsx)(n.code,{children:`.side-panel__header`}),`, `,(0,C.jsx)(n.code,{children:`.side-panel__body`}),`, and `,(0,C.jsx)(n.code,{children:`.side-panel__footer`}),` are used to denote areas of the panel with body taking up as much height as available and adding a scrollbar for any content overflow.`]}),`
`,(0,C.jsx)(i,{of:p}),`
`,(0,C.jsx)(n.h3,{id:`bordered`,children:`Bordered`}),`
`,(0,C.jsxs)(n.p,{children:[(0,C.jsx)(n.code,{children:`.side-panel--border-left`}),` or `,(0,C.jsx)(n.code,{children:`.side-panel--border-right`}),` provide a border on either side (or both if both used) of the panel.`]}),`
`,(0,C.jsx)(i,{of:f}),`
`,(0,C.jsx)(n.h3,{id:`padded-header`,children:`Padded Header`}),`
`,(0,C.jsxs)(n.p,{children:[(0,C.jsx)(n.code,{children:`.side-panel__header--padded`}),` Provides padding on the whole header area.`]}),`
`,(0,C.jsxs)(n.p,{children:[(0,C.jsx)(n.code,{children:`.side-panel__header--padded-x`}),` Provides padding on the left and right sides of the header area.`]}),`
`,(0,C.jsxs)(n.p,{children:[(0,C.jsx)(n.code,{children:`.side-panel__header--padded-y`}),` Provides padding on the top and bottom sides of the header area.`]}),`
`,(0,C.jsx)(i,{of:g}),`
`,(0,C.jsx)(n.h3,{id:`padded-body`,children:`Padded Body`}),`
`,(0,C.jsxs)(n.p,{children:[(0,C.jsx)(n.code,{children:`.side-panel__body--padded`}),` Provides padding on the whole body area.`]}),`
`,(0,C.jsxs)(n.p,{children:[(0,C.jsx)(n.code,{children:`.side-panel__body--padded-x`}),` Provides padding on the left and right sides of the body area.`]}),`
`,(0,C.jsxs)(n.p,{children:[(0,C.jsx)(n.code,{children:`.side-panel__body--padded-y`}),` Provides padding on the top and bottom sides of the body area.`]}),`
`,(0,C.jsx)(i,{of:m}),`
`,(0,C.jsx)(n.h3,{id:`padded-footer`,children:`Padded Footer`}),`
`,(0,C.jsxs)(n.p,{children:[(0,C.jsx)(n.code,{children:`.side-panel__footer--padded`}),` Provides padding on the whole footer area.`]}),`
`,(0,C.jsxs)(n.p,{children:[(0,C.jsx)(n.code,{children:`.side-panel__footer--padded-x`}),` Provides padding on the left and right sides of the footer area.`]}),`
`,(0,C.jsxs)(n.p,{children:[(0,C.jsx)(n.code,{children:`.side-panel__footer--padded-y`}),` Provides padding on the top and bottom sides of the footer area.`]}),`
`,(0,C.jsx)(i,{of:h}),`
`,(0,C.jsx)(n.h3,{id:`sections`,children:`Sections`}),`
`,(0,C.jsxs)(n.p,{children:[(0,C.jsx)(n.code,{children:`.side-panel__section`}),` can be used within any of the other areas of the side panel and provide separation of content within it.`]}),`
`,(0,C.jsx)(n.p,{children:`In this example, we are putting dividers between each section to show the separation.`}),`
`,(0,C.jsx)(i,{of:v}),`
`,(0,C.jsx)(n.h3,{id:`padded-sections`,children:`Padded Sections`}),`
`,(0,C.jsx)(n.p,{children:`One of the benefits is that each section supports the padding classes so individual sections can be padded as needed instead of the whole area.`}),`
`,(0,C.jsxs)(n.p,{children:[(0,C.jsx)(n.code,{children:`.side-panel__section--padded`}),` Provides padding on the whole section.`]}),`
`,(0,C.jsxs)(n.p,{children:[(0,C.jsx)(n.code,{children:`.side-panel__section--padded-x`}),` Provides padding on the left and right sides of the section.`]}),`
`,(0,C.jsxs)(n.p,{children:[(0,C.jsx)(n.code,{children:`.side-panel__section--padded-y`}),` Provides padding on the top and bottom sides of the section.`]}),`
`,(0,C.jsx)(i,{of:_}),`
`,(0,C.jsx)(n.h2,{id:`sidepanel-api`,children:`SidePanel API`}),`
`,(0,C.jsx)(n.p,{children:`Styles are built on CSS variables scoped to the SidePanel.`}),`
`,(0,C.jsx)(n.p,{children:`Here are the variables that can be customized:`}),`
`,`
`,(0,C.jsx)(n.pre,{children:(0,C.jsx)(n.code,{className:`language-css`,children:`--_op-side-panel-width
--_op-side-panel-header-padding
--_op-side-panel-body-padding
--_op-side-panel-footer-padding
--_op-side-panel-section-padding
`})}),`
`,`
`,(0,C.jsx)(n.h2,{id:`customizing-sidepanel-styles`,children:`Customizing SidePanel styles`}),`
`,(0,C.jsx)(`div`,{dangerouslySetInnerHTML:{__html:d({title:`Important!`,description:`These patterns represent how to customize the style of the SidePanel for your project.`}).outerHTML}}),`
`,(0,C.jsxs)(n.p,{children:[`The SidePanel classes are structured using the `,(0,C.jsx)(n.a,{href:`https://getbem.com/naming`,rel:`nofollow`,children:`BEM methodology`}),`.`]}),`
`,(0,C.jsxs)(n.p,{children:[`This allows us to define core styles on a main `,(0,C.jsx)(n.a,{href:`https://getbem.com/naming/#block`,rel:`nofollow`,children:`block`}),` class, and use `,(0,C.jsx)(n.a,{href:`https://getbem.com/naming/#modifier`,rel:`nofollow`,children:`modifiers`}),` to encapsulate variant styles. You can modify all SidePanel behavior by overriding the `,(0,C.jsx)(n.code,{children:`.side-panel`}),` selector and setting any properties:`]}),`
`,(0,C.jsx)(n.pre,{children:(0,C.jsx)(n.code,{className:`language-css`,children:`.side-panel {
  background-color: var(--op-color-primary-plus-six);
  color: var(--op-color-primary-on-plus-six);
}
`})}),`
`,(0,C.jsx)(n.h2,{id:`new-sidepanel-variations`,children:`New SidePanel Variations`}),`
`,(0,C.jsx)(`div`,{dangerouslySetInnerHTML:{__html:d({title:`Important!`,description:`These patterns represent how to create new variations of the SidePanel for your project.`}).outerHTML}}),`
`,(0,C.jsxs)(n.p,{children:[`Your application may need a variation. To add one, just follow this template. Note the double hyphen, indicating that this is a `,(0,C.jsx)(n.a,{href:`https://getbem.com/naming/#modifier`,rel:`nofollow`,children:`modifier`}),`:`]}),`
`,(0,C.jsx)(n.pre,{children:(0,C.jsx)(n.code,{className:`language-css`,children:`.sidepanel--{name} {
  --_op-side-panel-width: calc(108 * var(--op-size-unit)); /* 432px */
  --_op-side-panel-header-padding: var(--op-space-large);
  --_op-side-panel-body-padding: var(--op-space-large);
  --_op-side-panel-footer-padding: var(--op-space-large);
  --_op-side-panel-section-padding: var(--op-space-small);
}
`})})]})}function S(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,C.jsx)(n,{...e,children:(0,C.jsx)(x,{...e})}):x(e)}var C;e((()=>{C=n(),s(),o(),y(),c(),u()}))();export{S as default};