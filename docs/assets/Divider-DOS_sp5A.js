import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{i as t}from"./react-CaHZDgIm.js";import{s as n}from"./chunk-LITCR56V-BxXRPQK8.js";import{l as r,n as i,o as a,u as o}from"./blocks-3ODIrP3Y.js";import{t as s}from"./mdx-react-shim-DIeO1dVO.js";import{n as c,t as l}from"./sourceCodeLink-C1o55bv0.js";import{n as u,t as d}from"./Alert-xuHYkKjH.js";import{Default as f,Size as p,Spacing as m,Vertical as h,n as g,t as _}from"./Divider.stories-B6pcEU1r.js";function v(e){let n={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,...t(),...e.components};return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(r,{of:_}),`
`,(0,b.jsx)(n.h1,{id:`divider`,children:`Divider`}),`
`,(0,b.jsx)(`div`,{dangerouslySetInnerHTML:{__html:l({link:`components/divider.css`}).outerHTML}}),`
`,(0,b.jsx)(n.p,{children:`Divider classes can be used to create horizontal or vertical visual divides between content.`}),`
`,(0,b.jsx)(n.h2,{id:`playground`,children:`Playground`}),`
`,(0,b.jsx)(i,{of:f}),`
`,(0,b.jsx)(a,{of:f}),`
`,(0,b.jsx)(n.h3,{id:`selective-imports`,children:`Selective Imports`}),`
`,(0,b.jsxs)(n.p,{children:[`Divider can be used as a standalone component, however, it does have a few dependencies. To see a full dependency list, see `,(0,b.jsx)(n.a,{href:`?path=/docs/overview-selective-imports--docs#dependencies`,children:`Dependency Graph`})]}),`
`,(0,b.jsx)(n.pre,{children:(0,b.jsx)(n.code,{className:`language-css`,children:`/* Depends on */
@import '@rolemodel/optics/dist/css/core/fonts';
@import '@rolemodel/optics/dist/css/core/tokens';
@import '@rolemodel/optics/dist/css/core/base';

/* Component */
@import '@rolemodel/optics/dist/css/components/divider';
`})}),`
`,(0,b.jsx)(n.h2,{id:`variations`,children:`Variations`}),`
`,(0,b.jsx)(n.h3,{id:`default`,children:`Default`}),`
`,(0,b.jsxs)(n.p,{children:[(0,b.jsx)(n.code,{children:`.divider`}),` Provides a basic horizontal divider.`]}),`
`,(0,b.jsx)(i,{of:f}),`
`,(0,b.jsx)(n.h3,{id:`vertical`,children:`Vertical`}),`
`,(0,b.jsxs)(n.p,{children:[(0,b.jsx)(n.code,{children:`.divider.divider--vertical`}),` Provides a basic vertical divider.`]}),`
`,(0,b.jsx)(i,{of:h}),`
`,(0,b.jsx)(n.h3,{id:`size`,children:`Size`}),`
`,(0,b.jsxs)(n.p,{children:[(0,b.jsx)(n.code,{children:`.divider--small`}),`, `,(0,b.jsx)(n.code,{children:`.divider--medium`}),`, `,(0,b.jsx)(n.code,{children:`.divider--large`}),` (with small being the default) modify the size of any divider class by changing the width of the divider.`]}),`
`,(0,b.jsx)(i,{of:p}),`
`,(0,b.jsx)(n.h3,{id:`spacing`,children:`Spacing`}),`
`,(0,b.jsxs)(n.p,{children:[(0,b.jsx)(n.code,{children:`.divider--spacing-small`}),`, `,(0,b.jsx)(n.code,{children:`.divider--spacing-medium`}),`, `,(0,b.jsx)(n.code,{children:`.divider--spacing-large`}),` (with none being the default) modify the padding around the divider.`]}),`
`,(0,b.jsx)(i,{of:m}),`
`,(0,b.jsx)(n.h2,{id:`divider-api`,children:`Divider API`}),`
`,(0,b.jsx)(n.p,{children:`The size and spacing styles are built on CSS variables scoped to the divider.`}),`
`,(0,b.jsx)(n.p,{children:`Here are the variables that can be customized:`}),`
`,`
`,(0,b.jsx)(n.pre,{children:(0,b.jsx)(n.code,{className:`language-css`,children:`--_op-divider-vertical-min-height
--_op-divider-height-small
--_op-divider-height-medium
--_op-divider-height-large
--_op-divider-padding-small
--_op-divider-padding-medium
--_op-divider-padding-large
`})}),`
`,`
`,(0,b.jsx)(n.h2,{id:`customizing-divider-styles`,children:`Customizing Divider styles`}),`
`,(0,b.jsx)(`div`,{dangerouslySetInnerHTML:{__html:d({title:`Important!`,description:`These patterns represent how to customize the style of the divider for your project.`}).outerHTML}}),`
`,(0,b.jsxs)(n.p,{children:[`The divider classes are structured using the `,(0,b.jsx)(n.a,{href:`https://getbem.com/naming`,rel:`nofollow`,children:`BEM methodology`}),`.`]}),`
`,(0,b.jsxs)(n.p,{children:[`This allows us to define core styles on a main `,(0,b.jsx)(n.a,{href:`https://getbem.com/naming/#block`,rel:`nofollow`,children:`block`}),` class, and use `,(0,b.jsx)(n.a,{href:`https://getbem.com/naming/#modifier`,rel:`nofollow`,children:`modifiers`}),` to encapsulate variant styles. You can modify all divider behavior by overriding the `,(0,b.jsx)(n.code,{children:`.divider`}),` selector and setting any properties:`]}),`
`,(0,b.jsx)(n.pre,{children:(0,b.jsx)(n.code,{className:`language-css`,children:`.divider {
}
`})}),`
`,(0,b.jsx)(n.p,{children:`If you need to override the behavior of a particular divider style, you can open the respective class and set or change properties`}),`
`,(0,b.jsx)(n.pre,{children:(0,b.jsx)(n.code,{className:`language-css`,children:`.divider--modifier {
}
`})}),`
`,(0,b.jsx)(n.h2,{id:`new-divider-variations`,children:`New Divider Variations`}),`
`,(0,b.jsx)(`div`,{dangerouslySetInnerHTML:{__html:d({title:`Important!`,description:`These patterns represent how to create new variations of the divider for your project.`}).outerHTML}}),`
`,(0,b.jsx)(n.p,{children:`Your application may need a custom divider. To add one, just follow this template:`}),`
`,(0,b.jsx)(n.pre,{children:(0,b.jsx)(n.code,{className:`language-css`,children:`.divider--{name} {
}
`})})]})}function y(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,b.jsx)(n,{...e,children:(0,b.jsx)(v,{...e})}):v(e)}var b;e((()=>{b=n(),s(),o(),g(),c(),u()}))();export{y as default};