import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{i as t}from"./react-CaHZDgIm.js";import{s as n}from"./chunk-LITCR56V-BxXRPQK8.js";import{l as r,n as i,o as a,u as o}from"./blocks-3ODIrP3Y.js";import{t as s}from"./mdx-react-shim-DIeO1dVO.js";import{n as c,t as l}from"./sourceCodeLink-C1o55bv0.js";import{n as u,t as d}from"./Alert-xuHYkKjH.js";import{Default as f,Small as p,n as m,t as h}from"./Tab.stories-BiS0mB4S.js";function g(e){let n={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,...t(),...e.components};return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(r,{of:h}),`
`,(0,v.jsx)(n.h1,{id:`tab`,children:`Tab`}),`
`,(0,v.jsx)(`div`,{dangerouslySetInnerHTML:{__html:l({link:`components/tab.css`}).outerHTML}}),`
`,(0,v.jsx)(n.p,{children:`Tab classes provide simple styling for a tab group navigation.`}),`
`,(0,v.jsx)(n.h2,{id:`playground`,children:`Playground`}),`
`,(0,v.jsx)(i,{of:f}),`
`,(0,v.jsx)(a,{of:f}),`
`,(0,v.jsx)(n.h3,{id:`selective-imports`,children:`Selective Imports`}),`
`,(0,v.jsxs)(n.p,{children:[`Tab can be used as a standalone component, however, it does have a few dependencies. To see a full dependency list, see `,(0,v.jsx)(n.a,{href:`?path=/docs/overview-selective-imports--docs#dependencies`,children:`Dependency Graph`})]}),`
`,(0,v.jsx)(n.pre,{children:(0,v.jsx)(n.code,{className:`language-css`,children:`/* Depends on */
@import '@rolemodel/optics/dist/css/core/fonts';
@import '@rolemodel/optics/dist/css/core/tokens';
@import '@rolemodel/optics/dist/css/core/base';

/* Component */
@import '@rolemodel/optics/dist/css/components/tab';
`})}),`
`,(0,v.jsx)(n.h2,{id:`variations`,children:`Variations`}),`
`,(0,v.jsx)(n.h3,{id:`default`,children:`Default`}),`
`,(0,v.jsxs)(n.p,{children:[(0,v.jsx)(n.code,{children:`.tab-group`}),` Provides the grouping around a collection of links or buttons that have the `,(0,v.jsx)(n.code,{children:`.tab`}),` class.`]}),`
`,(0,v.jsxs)(n.p,{children:[`Each item should use `,(0,v.jsx)(n.code,{children:`.tab`}),` and also supports `,(0,v.jsx)(n.code,{children:`.tab--active`}),` and `,(0,v.jsx)(n.code,{children:`.tab--disabled`}),`.`]}),`
`,(0,v.jsxs)(n.p,{children:[`When using `,(0,v.jsx)(n.code,{children:`.tab--disabled`}),` the tabindex attributes should also be set to `,(0,v.jsx)(n.code,{children:`-1`}),` to skip the tab during keyboard navigation.`]}),`
`,(0,v.jsx)(i,{of:f}),`
`,(0,v.jsx)(n.h3,{id:`small`,children:`Small`}),`
`,(0,v.jsxs)(n.p,{children:[`A tab supports `,(0,v.jsx)(n.code,{children:`.tab--small`}),` or `,(0,v.jsx)(n.code,{children:`.tab--large`}),` with large being the default.`]}),`
`,(0,v.jsx)(i,{of:p}),`
`,(0,v.jsx)(n.h2,{id:`tab-api`,children:`Tab API`}),`
`,(0,v.jsx)(n.p,{children:`Styles are built on CSS variables scoped to the tab.`}),`
`,(0,v.jsx)(n.p,{children:`Here are the variables that can be customized:`}),`
`,`
`,(0,v.jsx)(n.pre,{children:(0,v.jsx)(n.code,{className:`language-css`,children:`--_op-tab-font-small
--_op-tab-font-large
--_op-tab-padding-small
--_op-tab-padding-large
--_op-tab-indicator-width-small
--_op-tab-indicator-width-large
--_op-tab-disabled-opacity
`})}),`
`,`
`,(0,v.jsx)(n.h2,{id:`customizing-tab-styles`,children:`Customizing Tab styles`}),`
`,(0,v.jsx)(`div`,{dangerouslySetInnerHTML:{__html:d({title:`Important!`,description:`These patterns represent how to customize the style of the tab for your project.`}).outerHTML}}),`
`,(0,v.jsxs)(n.p,{children:[`The tab classes are structured using the `,(0,v.jsx)(n.a,{href:`https://getbem.com/naming`,rel:`nofollow`,children:`BEM methodology`}),`.`]}),`
`,(0,v.jsxs)(n.p,{children:[`This allows us to define core styles on a main `,(0,v.jsx)(n.a,{href:`https://getbem.com/naming/#block`,rel:`nofollow`,children:`block`}),` class, and use `,(0,v.jsx)(n.a,{href:`https://getbem.com/naming/#modifier`,rel:`nofollow`,children:`modifiers`}),` to encapsulate variant styles. You can modify all tab behavior by overriding the `,(0,v.jsx)(n.code,{children:`.tab`}),` selector and setting any properties:`]}),`
`,(0,v.jsx)(n.pre,{children:(0,v.jsx)(n.code,{className:`language-css`,children:`.tab {
  --_op-tab-font-small: var(--op-font-2x-small);
  --_op-tab-padding-small: var(--op-space-3x-small) var(--op-space-small);
}
`})}),`
`,(0,v.jsx)(n.h2,{id:`new-tab-variations`,children:`New Tab Variations`}),`
`,(0,v.jsx)(`div`,{dangerouslySetInnerHTML:{__html:d({title:`Important!`,description:`These patterns represent how to create new variations of the Tab for your project.`}).outerHTML}}),`
`,(0,v.jsxs)(n.p,{children:[`Your application may need a variation. To add one, just follow this template. Note the double hyphen, indicating that this is a `,(0,v.jsx)(n.a,{href:`https://getbem.com/naming/#modifier`,rel:`nofollow`,children:`modifier`}),`:`]}),`
`,(0,v.jsx)(n.pre,{children:(0,v.jsx)(n.code,{className:`language-css`,children:`.tab--{name} {
  background-color: var(--op-color-primary-plus-two);
  color: var(--op-color-primary-on-plus-two);
}
`})})]})}function _(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,v.jsx)(n,{...e,children:(0,v.jsx)(g,{...e})}):g(e)}var v;e((()=>{v=n(),s(),o(),m(),c(),u()}))();export{_ as default};