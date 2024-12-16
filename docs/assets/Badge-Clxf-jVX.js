import{j as e}from"./jsx-runtime-BdapKA9s.js";import{u as t}from"./index-BH2hn5My.js";import{M as d,C as o,d as c}from"./index-DAHsoxhJ.js";import{B as l,D as i,P as h,W as p,a as g,I as m,N as x,b as j,c as u}from"./Badge.stories-C_cUFZ0c.js";import{c as r}from"./Alert-93ao7bSE.js";import{c as f}from"./sourceCodeLink-Chh3FteF.js";import"./iframe-DA9UFRIg.js";import"../sb-preview/runtime.js";import"./index-B5rfWaSj.js";import"./index-DrFu-skq.js";import"./Icon-D9QrNi_D.js";import"./Button-CoyIamir.js";function a(s){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:l}),`
`,e.jsx(n.h1,{id:"badge",children:"Badge"}),`
`,e.jsx("div",{dangerouslySetInnerHTML:{__html:f({link:"components/badge.scss"}).outerHTML}}),`
`,e.jsxs(n.p,{children:["The Badge component is similar to the Tag component, however it has a different semantic purpose. Badge is intended to be used for notification and information where Tag is intended to be used for interaction and input. See ",e.jsx(n.a,{href:"?path=/docs/content-components-tag--docs",children:"Tag"})," for details on its usage."]}),`
`,e.jsx(n.h2,{id:"playground",children:"Playground"}),`
`,e.jsx(o,{of:i}),`
`,e.jsx(c,{of:i}),`
`,e.jsx(n.h3,{id:"selective-imports",children:"Selective Imports"}),`
`,e.jsxs(n.p,{children:["Badge can be used as a standalone component, however, it does have a few dependencies. To see a full dependency list, see ",e.jsx(n.a,{href:"?path=/docs/overview-selective-imports--docs#dependencies",children:"Dependency Graph"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`// Depends on
@import '@rolemodel/optics/dist/scss/core/tokens';
@import '@rolemodel/optics/dist/scss/core/base';
@import '@rolemodel/optics/dist/scss/components/icon';

// Component
@import '@rolemodel/optics/dist/scss/components/badge';
`})}),`
`,e.jsx(n.h2,{id:"variations",children:"Variations"}),`
`,e.jsx(n.h3,{id:"default",children:"Default"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:".badge"})," Provides a default neutral colored badge."]}),`
`,e.jsx(o,{of:i}),`
`,e.jsx(n.h3,{id:"primary",children:"Primary"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:".badge-primary"})," Provides a primary badge. This uses the primary color defined in your theme."]}),`
`,e.jsx(o,{of:h}),`
`,e.jsx(n.h3,{id:"warning",children:"Warning"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:".badge-warning"})," Provides a Warning badge. This uses the warning alert color."]}),`
`,e.jsx(o,{of:p}),`
`,e.jsx(n.h3,{id:"danger",children:"Danger"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:".badge-danger"})," Provides a Danger badge. This uses the danger alert color."]}),`
`,e.jsx(o,{of:g}),`
`,e.jsx(n.h3,{id:"info",children:"Info"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:".badge-info"})," Provides a Info badge. This uses the Info alert color."]}),`
`,e.jsx(o,{of:m}),`
`,e.jsx(n.h3,{id:"notice",children:"Notice"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:".badge-notice"})," Provides a Notice badge. This uses the Notice alert color."]}),`
`,e.jsx(o,{of:x}),`
`,e.jsx(n.h3,{id:"pill",children:"Pill"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:".badge--pill"})," Modifies the shape of any other badge by adding a radius to the left and right."]}),`
`,e.jsx(o,{of:j}),`
`,e.jsx(n.h3,{id:"notification-button",children:"Notification Button"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:".badge--notification-right"})," and ",e.jsx(n.code,{children:".badge--notification-left"})," can be used inside of a button with the ",e.jsx(n.code,{children:".btn--with-badge"})," class to achieve a button notification style."]}),`
`,e.jsx(o,{of:u}),`
`,e.jsx(n.h2,{id:"customizing-badge-styles",children:"Customizing Badge styles"}),`
`,e.jsx("div",{dangerouslySetInnerHTML:{__html:r({title:"Important!",description:"These patterns represent how to customize the style of the badge for your project."}).outerHTML}}),`
`,e.jsxs(n.p,{children:["The badge classes are built on a ",e.jsx(n.a,{href:"https://sass-lang.com/documentation/style-rules/placeholder-selectors",rel:"nofollow",children:"SASS placeholder selector"})]}),`
`,e.jsxs(n.p,{children:["This allows multiple badge classes to share the same behavior. You can modify all badges behavior by overriding the ",e.jsx(n.code,{children:"%badge-global"})," placeholder selector and setting any properties:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`%badge-global {
  font-size: var(--op-font-2x-large);
}
`})}),`
`,e.jsx(n.p,{children:"If you need to override the behavior of a particular badge style, you can open the respective class and set or change properties"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`// This will only affect the primary badge, but not default, secondary, notice, etc.
.badge-primary {
  background-color: red;
  color: white;
}
`})}),`
`,e.jsx(n.h2,{id:"new-badge-variations",children:"New Badge Variations"}),`
`,e.jsx("div",{dangerouslySetInnerHTML:{__html:r({title:"Important!",description:"These patterns represent how to create new variations of the badge for your project."}).outerHTML}}),`
`,e.jsx(n.p,{children:"Your application may need a custom badge. To add one, just follow this template:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`.badge-{name} {
  @extend %badge-global;

  background-color:
  color:
}
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`.badge-purple {
  @extend %badge-global;

  background-color: purple;
  color: white;
}
`})})]})}function C(s={}){const{wrapper:n}={...t(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(a,{...s})}):a(s)}export{C as default};
