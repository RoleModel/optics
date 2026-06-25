import{i as e}from"./preload-helper-xPQekRTU.js";import{T as t,l as n,n as r,o as i,u as a}from"./blocks-uVOOWdqL.js";import{s as o}from"./chunk-LITCR56V-BmCoDI8n.js";import{t as s}from"./mdx-react-shim-eO_HyXU9.js";import{n as c,t as l}from"./sourceCodeLink-D2TI9VYO.js";import{n as u,t as d}from"./Alert-BSNiXkFA.js";import{Default as f,Size as p,Spacing as m,Vertical as h,n as g,t as _}from"./Divider.stories-PLdAcdLV.js";function v(e){let a={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,...t(),...e.components};return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(n,{of:_}),`
`,(0,b.jsx)(a.h1,{id:`divider`,children:`Divider`}),`
`,(0,b.jsx)(`div`,{dangerouslySetInnerHTML:{__html:l({link:`components/divider.css`}).outerHTML}}),`
`,(0,b.jsx)(a.p,{children:`Divider classes can be used to create horizontal or vertical visual divides between content.`}),`
`,(0,b.jsx)(a.h2,{id:`playground`,children:`Playground`}),`
`,(0,b.jsx)(r,{of:f}),`
`,(0,b.jsx)(i,{of:f}),`
`,(0,b.jsx)(a.h3,{id:`selective-imports`,children:`Selective Imports`}),`
`,(0,b.jsxs)(a.p,{children:[`Divider can be used as a standalone component, however, it does have a few dependencies. To see a full dependency list, see `,(0,b.jsx)(a.a,{href:`?path=/docs/overview-selective-imports--docs#dependencies`,children:`Dependency Graph`})]}),`
`,(0,b.jsx)(a.pre,{children:(0,b.jsx)(a.code,{className:`language-css`,children:`/* Depends on */
@import '@rolemodel/optics/dist/css/core/fonts';
@import '@rolemodel/optics/dist/css/core/tokens';
@import '@rolemodel/optics/dist/css/core/base';

/* Component */
@import '@rolemodel/optics/dist/css/components/divider';
`})}),`
`,(0,b.jsx)(a.h2,{id:`variations`,children:`Variations`}),`
`,(0,b.jsx)(a.h3,{id:`default`,children:`Default`}),`
`,(0,b.jsxs)(a.p,{children:[(0,b.jsx)(a.code,{children:`.divider`}),` Provides a basic horizontal divider.`]}),`
`,(0,b.jsx)(r,{of:f}),`
`,(0,b.jsx)(a.h3,{id:`vertical`,children:`Vertical`}),`
`,(0,b.jsxs)(a.p,{children:[(0,b.jsx)(a.code,{children:`.divider.divider--vertical`}),` Provides a basic vertical divider.`]}),`
`,(0,b.jsx)(r,{of:h}),`
`,(0,b.jsx)(a.h3,{id:`size`,children:`Size`}),`
`,(0,b.jsxs)(a.p,{children:[(0,b.jsx)(a.code,{children:`.divider--small`}),`, `,(0,b.jsx)(a.code,{children:`.divider--medium`}),`, `,(0,b.jsx)(a.code,{children:`.divider--large`}),` (with small being the default) modify the size of any divider class by changing the width of the divider.`]}),`
`,(0,b.jsx)(r,{of:p}),`
`,(0,b.jsx)(a.h3,{id:`spacing`,children:`Spacing`}),`
`,(0,b.jsxs)(a.p,{children:[(0,b.jsx)(a.code,{children:`.divider--spacing-small`}),`, `,(0,b.jsx)(a.code,{children:`.divider--spacing-medium`}),`, `,(0,b.jsx)(a.code,{children:`.divider--spacing-large`}),` (with none being the default) modify the padding around the divider.`]}),`
`,(0,b.jsx)(r,{of:m}),`
`,(0,b.jsx)(a.h2,{id:`divider-api`,children:`Divider API`}),`
`,(0,b.jsx)(a.p,{children:`The size and spacing styles are built on CSS variables scoped to the divider.`}),`
`,(0,b.jsx)(a.p,{children:`Here are the variables that can be customized:`}),`
`,`
`,(0,b.jsx)(a.pre,{children:(0,b.jsx)(a.code,{className:`language-css`,children:`--_op-divider-vertical-min-height
--_op-divider-height-small
--_op-divider-height-medium
--_op-divider-height-large
--_op-divider-padding-small
--_op-divider-padding-medium
--_op-divider-padding-large
`})}),`
`,`
`,(0,b.jsx)(a.h2,{id:`customizing-divider-styles`,children:`Customizing Divider styles`}),`
`,(0,b.jsx)(`div`,{dangerouslySetInnerHTML:{__html:d({title:`Important!`,description:`These patterns represent how to customize the style of the divider for your project.`}).outerHTML}}),`
`,(0,b.jsxs)(a.p,{children:[`The divider classes are structured using the `,(0,b.jsx)(a.a,{href:`https://getbem.com/naming`,rel:`nofollow`,children:`BEM methodology`}),`.`]}),`
`,(0,b.jsxs)(a.p,{children:[`This allows us to define core styles on a main `,(0,b.jsx)(a.a,{href:`https://getbem.com/naming/#block`,rel:`nofollow`,children:`block`}),` class, and use `,(0,b.jsx)(a.a,{href:`https://getbem.com/naming/#modifier`,rel:`nofollow`,children:`modifiers`}),` to encapsulate variant styles. You can modify all divider behavior by overriding the `,(0,b.jsx)(a.code,{children:`.divider`}),` selector and setting any properties:`]}),`
`,(0,b.jsx)(a.pre,{children:(0,b.jsx)(a.code,{className:`language-css`,children:`.divider {
}
`})}),`
`,(0,b.jsx)(a.p,{children:`If you need to override the behavior of a particular divider style, you can open the respective class and set or change properties`}),`
`,(0,b.jsx)(a.pre,{children:(0,b.jsx)(a.code,{className:`language-css`,children:`.divider--modifier {
}
`})}),`
`,(0,b.jsx)(a.h2,{id:`new-divider-variations`,children:`New Divider Variations`}),`
`,(0,b.jsx)(`div`,{dangerouslySetInnerHTML:{__html:d({title:`Important!`,description:`These patterns represent how to create new variations of the divider for your project.`}).outerHTML}}),`
`,(0,b.jsx)(a.p,{children:`Your application may need a custom divider. To add one, just follow this template:`}),`
`,(0,b.jsx)(a.pre,{children:(0,b.jsx)(a.code,{className:`language-css`,children:`.divider--{name} {
}
`})})]})}function y(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,b.jsx)(n,{...e,children:(0,b.jsx)(v,{...e})}):v(e)}var b;e((()=>{b=o(),s(),a(),g(),c(),u()}))();export{y as default};