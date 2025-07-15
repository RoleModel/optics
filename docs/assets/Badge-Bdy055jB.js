import{j as e,M as d,C as o,a as c}from"./index-CJTCbCcq.js";import{useMDXComponents as a}from"./index-DxUjHeZW.js";import{B as l,D as i,P as h,W as p,a as g,I as m,N as f,b as j,c as x}from"./Badge.stories-CDAJUgjn.js";import{c as r}from"./Alert-CAEs4394.js";import{c as u}from"./sourceCodeLink-Chh3FteF.js";import"./iframe-CpL0syPs.js";import"./index-BiL3ubqk.js";import"./index-DrFu-skq.js";import"./Icon-uqCTS4Mm.js";import"./Button-B21kpIpO.js";function t(s){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...a(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:l}),`
`,e.jsx(n.h1,{id:"badge",children:"Badge"}),`
`,e.jsx("div",{dangerouslySetInnerHTML:{__html:u({link:"components/badge.css"}).outerHTML}}),`
`,e.jsxs(n.p,{children:["The Badge component is similar to the Tag component, however it has a different semantic purpose. Badge is intended to be used for notification and information where Tag is intended to be used for interaction and input. See ",e.jsx(n.a,{href:"?path=/docs/content-components-tag--docs",children:"Tag"})," for details on its usage."]}),`
`,e.jsx(n.h2,{id:"playground",children:"Playground"}),`
`,e.jsx(o,{of:i}),`
`,e.jsx(c,{of:i}),`
`,e.jsx(n.h3,{id:"selective-imports",children:"Selective Imports"}),`
`,e.jsxs(n.p,{children:["Badge can be used as a standalone component, however, it does have a few dependencies. To see a full dependency list, see ",e.jsx(n.a,{href:"?path=/docs/overview-selective-imports--docs#dependencies",children:"Dependency Graph"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`/* Depends on */
@import '@rolemodel/optics/dist/css/core/fonts';
@import '@rolemodel/optics/dist/css/core/tokens';
@import '@rolemodel/optics/dist/css/core/base';
@import '@rolemodel/optics/dist/css/components/icon';

/* Component */
@import '@rolemodel/optics/dist/css/components/badge';
`})}),`
`,e.jsx(n.h2,{id:"variations",children:"Variations"}),`
`,e.jsx(n.h3,{id:"default",children:"Default"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:".badge"})," Provides a default neutral colored badge."]}),`
`,e.jsx(o,{of:i}),`
`,e.jsx(n.h3,{id:"primary",children:"Primary"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:".badge--primary"})," Provides a primary badge. This uses the primary color defined in your theme."]}),`
`,e.jsx(o,{of:h}),`
`,e.jsx(n.h3,{id:"warning",children:"Warning"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:".badge--warning"})," Provides a Warning badge. This uses the warning alert color."]}),`
`,e.jsx(o,{of:p}),`
`,e.jsx(n.h3,{id:"danger",children:"Danger"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:".badge--danger"})," Provides a Danger badge. This uses the danger alert color."]}),`
`,e.jsx(o,{of:g}),`
`,e.jsx(n.h3,{id:"info",children:"Info"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:".badge--info"})," Provides a Info badge. This uses the Info alert color."]}),`
`,e.jsx(o,{of:m}),`
`,e.jsx(n.h3,{id:"notice",children:"Notice"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:".badge--notice"})," Provides a Notice badge. This uses the Notice alert color."]}),`
`,e.jsx(o,{of:f}),`
`,e.jsx(n.h3,{id:"pill",children:"Pill"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:".badge--pill"})," Modifies the shape of any other badge by adding a radius to the left and right."]}),`
`,e.jsx(o,{of:j}),`
`,e.jsx(n.h3,{id:"notification-button",children:"Notification Button"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:".badge--notification-right"})," and ",e.jsx(n.code,{children:".badge--notification-left"})," can be used inside of a button with the ",e.jsx(n.code,{children:".btn--with-badge"})," class to achieve a button notification style."]}),`
`,e.jsx(o,{of:x}),`
`,e.jsx(n.h2,{id:"customizing-badge-styles",children:"Customizing Badge styles"}),`
`,e.jsx("div",{dangerouslySetInnerHTML:{__html:r({title:"Important!",description:"These patterns represent how to customize the style of the badge for your project."}).outerHTML}}),`
`,e.jsxs(n.p,{children:["The badge classes are structured using the ",e.jsx(n.a,{href:"https://getbem.com/naming",rel:"nofollow",children:"BEM methodology"}),"."]}),`
`,e.jsxs(n.p,{children:["This allows us to define core styles on a main ",e.jsx(n.a,{href:"https://getbem.com/naming/#block",rel:"nofollow",children:"block"})," class, and use ",e.jsx(n.a,{href:"https://getbem.com/naming/#modifier",rel:"nofollow",children:"modifiers"})," to encapsulate variant styles. You can modify all badge behavior by overriding the ",e.jsx(n.code,{children:".badge"})," selector and setting any properties:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`.badge {
  font-size: var(--op-font-2x-large);
}
`})}),`
`,e.jsx(n.p,{children:"If you need to override the behavior of a particular badge style, you can open the respective class and set or change properties"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`/* This will only affect the primary badge, but not default, secondary, notice, etc. */
.badge--primary {
  background-color: red;
  color: white;
}
`})}),`
`,e.jsx(n.h2,{id:"new-badge-variations",children:"New Badge Variations"}),`
`,e.jsx("div",{dangerouslySetInnerHTML:{__html:r({title:"Important!",description:"These patterns represent how to create new variations of the badge for your project."}).outerHTML}}),`
`,e.jsxs(n.p,{children:["Your application may need a variation. To add one, just follow this template. Note the double hyphen, indicating that this is a ",e.jsx(n.a,{href:"https://getbem.com/naming/#modifier",rel:"nofollow",children:"modifier"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`.badge--{name} {
  background-color:
  color:
}
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`.badge--purple {
  background-color: purple;
  color: white;
}
`})})]})}function D(s={}){const{wrapper:n}={...a(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{D as default};
