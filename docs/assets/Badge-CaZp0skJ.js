import{i as e}from"./preload-helper-xPQekRTU.js";import{T as t,l as n,n as r,o as i,u as a}from"./blocks-uVOOWdqL.js";import{s as o}from"./chunk-LITCR56V-BmCoDI8n.js";import{t as s}from"./mdx-react-shim-eO_HyXU9.js";import{n as c,t as l}from"./sourceCodeLink-D2TI9VYO.js";import{n as u,t as d}from"./Alert-BSNiXkFA.js";import{Danger as f,Default as p,Info as m,Notice as h,NotificationButton as g,Pill as _,Primary as v,Warning as y,n as b,t as x}from"./Badge.stories-DGPmeP3w.js";function S(e){let a={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,...t(),...e.components};return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(n,{of:x}),`
`,(0,w.jsx)(a.h1,{id:`badge`,children:`Badge`}),`
`,(0,w.jsx)(`div`,{dangerouslySetInnerHTML:{__html:l({link:`components/badge.css`}).outerHTML}}),`
`,(0,w.jsxs)(a.p,{children:[`The Badge component is similar to the Tag component, however it has a different semantic purpose. Badge is intended to be used for notification and information where Tag is intended to be used for interaction and input. See `,(0,w.jsx)(a.a,{href:`?path=/docs/components-tag--docs`,children:`Tag`}),` for details on its usage.`]}),`
`,(0,w.jsx)(a.h2,{id:`playground`,children:`Playground`}),`
`,(0,w.jsx)(r,{of:p}),`
`,(0,w.jsx)(i,{of:p}),`
`,(0,w.jsx)(a.h3,{id:`selective-imports`,children:`Selective Imports`}),`
`,(0,w.jsxs)(a.p,{children:[`Badge can be used as a standalone component, however, it does have a few dependencies. To see a full dependency list, see `,(0,w.jsx)(a.a,{href:`?path=/docs/overview-selective-imports--docs#dependencies`,children:`Dependency Graph`})]}),`
`,(0,w.jsx)(a.pre,{children:(0,w.jsx)(a.code,{className:`language-css`,children:`/* Depends on */
@import '@rolemodel/optics/dist/css/core/fonts';
@import '@rolemodel/optics/dist/css/core/tokens';
@import '@rolemodel/optics/dist/css/core/base';
@import '@rolemodel/optics/dist/css/components/icon';

/* Component */
@import '@rolemodel/optics/dist/css/components/badge';
`})}),`
`,(0,w.jsx)(a.h2,{id:`variations`,children:`Variations`}),`
`,(0,w.jsx)(a.h3,{id:`default`,children:`Default`}),`
`,(0,w.jsxs)(a.p,{children:[(0,w.jsx)(a.code,{children:`.badge`}),` Provides a default neutral colored badge.`]}),`
`,(0,w.jsx)(r,{of:p}),`
`,(0,w.jsx)(a.h3,{id:`primary`,children:`Primary`}),`
`,(0,w.jsxs)(a.p,{children:[(0,w.jsx)(a.code,{children:`.badge--primary`}),` Provides a primary badge. This uses the primary color defined in your theme.`]}),`
`,(0,w.jsx)(r,{of:v}),`
`,(0,w.jsx)(a.h3,{id:`warning`,children:`Warning`}),`
`,(0,w.jsxs)(a.p,{children:[(0,w.jsx)(a.code,{children:`.badge--warning`}),` Provides a Warning badge. This uses the warning alert color.`]}),`
`,(0,w.jsx)(r,{of:y}),`
`,(0,w.jsx)(a.h3,{id:`danger`,children:`Danger`}),`
`,(0,w.jsxs)(a.p,{children:[(0,w.jsx)(a.code,{children:`.badge--danger`}),` Provides a Danger badge. This uses the danger alert color.`]}),`
`,(0,w.jsx)(r,{of:f}),`
`,(0,w.jsx)(a.h3,{id:`info`,children:`Info`}),`
`,(0,w.jsxs)(a.p,{children:[(0,w.jsx)(a.code,{children:`.badge--info`}),` Provides a Info badge. This uses the Info alert color.`]}),`
`,(0,w.jsx)(r,{of:m}),`
`,(0,w.jsx)(a.h3,{id:`notice`,children:`Notice`}),`
`,(0,w.jsxs)(a.p,{children:[(0,w.jsx)(a.code,{children:`.badge--notice`}),` Provides a Notice badge. This uses the Notice alert color.`]}),`
`,(0,w.jsx)(r,{of:h}),`
`,(0,w.jsx)(a.h3,{id:`pill`,children:`Pill`}),`
`,(0,w.jsxs)(a.p,{children:[(0,w.jsx)(a.code,{children:`.badge--pill`}),` Modifies the shape of any other badge by adding a radius to the left and right.`]}),`
`,(0,w.jsx)(r,{of:_}),`
`,(0,w.jsx)(a.h3,{id:`notification-button`,children:`Notification Button`}),`
`,(0,w.jsxs)(a.p,{children:[(0,w.jsx)(a.code,{children:`.badge--notification-right`}),` and `,(0,w.jsx)(a.code,{children:`.badge--notification-left`}),` can be used inside of a button with the `,(0,w.jsx)(a.code,{children:`.btn--with-badge`}),` class to achieve a button notification style.`]}),`
`,(0,w.jsx)(r,{of:g}),`
`,(0,w.jsx)(a.h2,{id:`customizing-badge-styles`,children:`Customizing Badge styles`}),`
`,(0,w.jsx)(`div`,{dangerouslySetInnerHTML:{__html:d({title:`Important!`,description:`These patterns represent how to customize the style of the badge for your project.`}).outerHTML}}),`
`,(0,w.jsxs)(a.p,{children:[`The badge classes are structured using the `,(0,w.jsx)(a.a,{href:`https://getbem.com/naming`,rel:`nofollow`,children:`BEM methodology`}),`.`]}),`
`,(0,w.jsxs)(a.p,{children:[`This allows us to define core styles on a main `,(0,w.jsx)(a.a,{href:`https://getbem.com/naming/#block`,rel:`nofollow`,children:`block`}),` class, and use `,(0,w.jsx)(a.a,{href:`https://getbem.com/naming/#modifier`,rel:`nofollow`,children:`modifiers`}),` to encapsulate variant styles. You can modify all badge behavior by overriding the `,(0,w.jsx)(a.code,{children:`.badge`}),` selector and setting any properties:`]}),`
`,(0,w.jsx)(a.pre,{children:(0,w.jsx)(a.code,{className:`language-css`,children:`.badge {
  font-size: var(--op-font-2x-large);
}
`})}),`
`,(0,w.jsx)(a.p,{children:`If you need to override the behavior of a particular badge style, you can open the respective class and set or change properties`}),`
`,(0,w.jsx)(a.pre,{children:(0,w.jsx)(a.code,{className:`language-css`,children:`/* This will only affect the primary badge, but not default, secondary, notice, etc. */
.badge--primary {
  background-color: red;
  color: white;
}
`})}),`
`,(0,w.jsx)(a.h2,{id:`new-badge-variations`,children:`New Badge Variations`}),`
`,(0,w.jsx)(`div`,{dangerouslySetInnerHTML:{__html:d({title:`Important!`,description:`These patterns represent how to create new variations of the badge for your project.`}).outerHTML}}),`
`,(0,w.jsxs)(a.p,{children:[`Your application may need a variation. To add one, just follow this template. Note the double hyphen, indicating that this is a `,(0,w.jsx)(a.a,{href:`https://getbem.com/naming/#modifier`,rel:`nofollow`,children:`modifier`}),`:`]}),`
`,(0,w.jsx)(a.pre,{children:(0,w.jsx)(a.code,{className:`language-css`,children:`.badge--{name} {
  background-color:
  color:
}
`})}),`
`,(0,w.jsx)(a.pre,{children:(0,w.jsx)(a.code,{className:`language-css`,children:`.badge--purple {
  background-color: purple;
  color: white;
}
`})})]})}function C(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,w.jsx)(n,{...e,children:(0,w.jsx)(S,{...e})}):S(e)}var w;e((()=>{w=o(),s(),a(),b(),u(),c()}))();export{C as default};