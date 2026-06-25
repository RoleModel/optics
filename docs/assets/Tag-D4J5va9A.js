import{i as e}from"./preload-helper-xPQekRTU.js";import{T as t,l as n,n as r,o as i,u as a}from"./blocks-uVOOWdqL.js";import{s as o}from"./chunk-LITCR56V-BmCoDI8n.js";import{t as s}from"./mdx-react-shim-eO_HyXU9.js";import{n as c,t as l}from"./sourceCodeLink-D2TI9VYO.js";import{n as u,t as d}from"./Alert-BSNiXkFA.js";import{Danger as f,Info as p,Notice as m,Primary as h,Readonly as g,Warning as _,n as v,t as y}from"./Tag.stories-DHRObOp6.js";function b(e){let a={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,...t(),...e.components};return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(n,{of:y}),`
`,(0,S.jsx)(a.h1,{id:`tag`,children:`Tag`}),`
`,(0,S.jsx)(`div`,{dangerouslySetInnerHTML:{__html:l({link:`components/tag.css`}).outerHTML}}),`
`,(0,S.jsxs)(a.p,{children:[`The tag component can be applied to an element with a button within it. The Tag component is similar to the Badge component, however it has a different semantic purpose. Tag is intended to be used for interaction and input where Badge is intended to be used for Notification and Information. See `,(0,S.jsx)(a.a,{href:`?path=/docs/components-badge--docs`,children:`Badge`}),` for details on its usage.`]}),`
`,(0,S.jsx)(a.p,{children:`The tag will typically have a button within it. The button can be used to remove the tag from the UI. For Example, managing catgories or metadata tags on a data record.`}),`
`,(0,S.jsx)(a.h2,{id:`playground`,children:`Playground`}),`
`,(0,S.jsx)(r,{of:g}),`
`,(0,S.jsx)(i,{of:g}),`
`,(0,S.jsx)(a.h3,{id:`selective-imports`,children:`Selective Imports`}),`
`,(0,S.jsxs)(a.p,{children:[`Tag can be used as a standalone component, however, it does have a few dependencies. To see a full dependency list, see `,(0,S.jsx)(a.a,{href:`?path=/docs/overview-selective-imports--docs#dependencies`,children:`Dependency Graph`})]}),`
`,(0,S.jsx)(a.pre,{children:(0,S.jsx)(a.code,{className:`language-css`,children:`/* Depends on */
@import '@rolemodel/optics/dist/css/core/fonts';
@import '@rolemodel/optics/dist/css/core/tokens';
@import '@rolemodel/optics/dist/css/core/base';
@import '@rolemodel/optics/dist/css/components/icon';

/* Component */
@import '@rolemodel/optics/dist/css/components/tag';
`})}),`
`,(0,S.jsx)(a.h2,{id:`variations`,children:`Variations`}),`
`,(0,S.jsx)(a.h3,{id:`readonly`,children:`Readonly`}),`
`,(0,S.jsxs)(a.p,{children:[(0,S.jsx)(a.code,{children:`.tag--readonly`}),` Provides a Readonly tag. This is useful for displaying tags that cannot be removed.`]}),`
`,(0,S.jsx)(r,{of:g}),`
`,(0,S.jsx)(a.h3,{id:`primary`,children:`Primary`}),`
`,(0,S.jsxs)(a.p,{children:[(0,S.jsx)(a.code,{children:`.tag--primary`}),` Provides a Primary tag. This uses the primary color.`]}),`
`,(0,S.jsx)(r,{of:h}),`
`,(0,S.jsx)(a.h3,{id:`danger`,children:`Danger`}),`
`,(0,S.jsxs)(a.p,{children:[(0,S.jsx)(a.code,{children:`.tag--danger`}),` Provides a Danger tag. This uses the danger alert color.`]}),`
`,(0,S.jsx)(r,{of:f}),`
`,(0,S.jsx)(a.h3,{id:`warning`,children:`Warning`}),`
`,(0,S.jsxs)(a.p,{children:[(0,S.jsx)(a.code,{children:`.tag--warning`}),` Provides a Warning tag. This uses the warning alert color.`]}),`
`,(0,S.jsx)(r,{of:_}),`
`,(0,S.jsx)(a.h3,{id:`info`,children:`Info`}),`
`,(0,S.jsxs)(a.p,{children:[(0,S.jsx)(a.code,{children:`.tag--info`}),` Provides a Info tag. This uses the info alert color.`]}),`
`,(0,S.jsx)(r,{of:p}),`
`,(0,S.jsx)(a.h3,{id:`notice`,children:`Notice`}),`
`,(0,S.jsxs)(a.p,{children:[(0,S.jsx)(a.code,{children:`.tag--notice`}),` Provides a Notice tag. This uses the notice alert color.`]}),`
`,(0,S.jsx)(r,{of:m}),`
`,(0,S.jsx)(a.h2,{id:`customizing-tag-styles`,children:`Customizing Tag styles`}),`
`,(0,S.jsx)(`div`,{dangerouslySetInnerHTML:{__html:d({title:`Important!`,description:`These patterns represent how to customize the style of the tag for your project.`}).outerHTML}}),`
`,(0,S.jsxs)(a.p,{children:[`The tag classes are structured using the `,(0,S.jsx)(a.a,{href:`https://getbem.com/naming`,rel:`nofollow`,children:`BEM methodology`}),`.`]}),`
`,(0,S.jsxs)(a.p,{children:[`This allows us to define core styles on a main `,(0,S.jsx)(a.a,{href:`https://getbem.com/naming/#block`,rel:`nofollow`,children:`block`}),` class, and use `,(0,S.jsx)(a.a,{href:`https://getbem.com/naming/#modifier`,rel:`nofollow`,children:`modifiers`}),` to encapsulate variant styles. You can modify all tag behavior by overriding the `,(0,S.jsx)(a.code,{children:`.tag`}),` class and setting any properties:`]}),`
`,(0,S.jsx)(a.pre,{children:(0,S.jsx)(a.code,{className:`language-css`,children:`.tag {
  background-color: var(--op-color-alerts-danger-base);
}
`})}),`
`,(0,S.jsx)(a.p,{children:`If you need to override the behavior of a particular tag style, you can open the respective class and set or change properties`}),`
`,(0,S.jsx)(a.pre,{children:(0,S.jsx)(a.code,{className:`language-css`,children:`.tag--danger {
  background-color: var(--op-color-alerts-danger-base);
}
`})}),`
`,(0,S.jsx)(a.h2,{id:`new-tag-variations`,children:`New Tag Variations`}),`
`,(0,S.jsx)(`div`,{dangerouslySetInnerHTML:{__html:d({title:`Important!`,description:`These patterns represent how to create new variations of the Tag for your project.`}).outerHTML}}),`
`,(0,S.jsxs)(a.p,{children:[`Your application may need a variation. To add one, just follow this template. Note the double hyphen, indicating that this is a `,(0,S.jsx)(a.a,{href:`https://getbem.com/naming/#modifier`,rel:`nofollow`,children:`modifier`}),`:`]}),`
`,(0,S.jsx)(a.pre,{children:(0,S.jsx)(a.code,{className:`language-css`,children:`.tag--{name} {
  background-color:
  color:
}
`})})]})}function x(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,S.jsx)(n,{...e,children:(0,S.jsx)(b,{...e})}):b(e)}var S;e((()=>{S=o(),s(),a(),v(),c(),u()}))();export{x as default};