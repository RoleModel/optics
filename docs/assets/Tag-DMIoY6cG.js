import{j as e}from"./jsx-runtime-q_IbPlfq.js";import{u as i}from"./index-BddqNUC0.js";import{M as c,C as o,d}from"./index-BxWRKbYi.js";import{T as l,R as t,P as h,D as p,W as g,I as m,N as x}from"./Tag.stories-CBEvoUCC.js";import{c as j}from"./sourceCodeLink-Chh3FteF.js";import{c as a}from"./Alert-93ao7bSE.js";import"./iframe-DOIRH2Ve.js";import"../sb-preview/runtime.js";import"./index-B5rfWaSj.js";import"./index-DrFu-skq.js";import"./Button-CoyIamir.js";import"./Icon-D9QrNi_D.js";function r(s){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...i(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:l}),`
`,e.jsx(n.h1,{id:"tag",children:"Tag"}),`
`,e.jsx("div",{dangerouslySetInnerHTML:{__html:j({link:"components/tag.scss"}).outerHTML}}),`
`,e.jsxs(n.p,{children:["The tag component can be applied to an element with a button within it. The Tag component is similar to the Badge component, however it has a different semantic purpose. Tag is intended to be used for interaction and input where Badge is intended to be used for Notification and Information. See ",e.jsx(n.a,{href:"?path=/docs/content-components-badge--docs",children:"Badge"})," for details on its usage."]}),`
`,e.jsx(n.p,{children:"The tag will typically have a button within it. The button can be used to remove the tag from the UI. For Example, managing catgories or metadata tags on a data record."}),`
`,e.jsx(n.h2,{id:"playground",children:"Playground"}),`
`,e.jsx(o,{of:t}),`
`,e.jsx(d,{of:t}),`
`,e.jsx(n.h3,{id:"selective-imports",children:"Selective Imports"}),`
`,e.jsxs(n.p,{children:["Tag can be used as a standalone component, however, it does have a few dependencies. To see a full dependency list, see ",e.jsx(n.a,{href:"?path=/docs/overview-selective-imports--docs#dependencies",children:"Dependency Graph"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`// Depends on
@import '@rolemodel/optics/dist/scss/core/tokens';
@import '@rolemodel/optics/dist/scss/core/base';
@import '@rolemodel/optics/dist/scss/components/icon';

// Component
@import '@rolemodel/optics/dist/scss/components/tag';
`})}),`
`,e.jsx(n.h2,{id:"variations",children:"Variations"}),`
`,e.jsx(n.h3,{id:"readonly",children:"Readonly"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:".tag-readonly"})," Provides a Readonly tag. This is useful for displaying tags that cannot be removed."]}),`
`,e.jsx(o,{of:t}),`
`,e.jsx(n.h3,{id:"primary",children:"Primary"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:".tag-primary"})," Provides a Primary tag. This uses the primary color."]}),`
`,e.jsx(o,{of:h}),`
`,e.jsx(n.h3,{id:"danger",children:"Danger"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:".tag-danger"})," Provides a Danger tag. This uses the danger alert color."]}),`
`,e.jsx(o,{of:p}),`
`,e.jsx(n.h3,{id:"warning",children:"Warning"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:".tag-warning"})," Provides a Warning tag. This uses the warning alert color."]}),`
`,e.jsx(o,{of:g}),`
`,e.jsx(n.h3,{id:"info",children:"Info"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:".tag-info"})," Provides a Info tag. This uses the info alert color."]}),`
`,e.jsx(o,{of:m}),`
`,e.jsx(n.h3,{id:"notice",children:"Notice"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:".tag-notice"})," Provides a Notice tag. This uses the notice alert color."]}),`
`,e.jsx(o,{of:x}),`
`,e.jsx(n.h2,{id:"customizing-tag-styles",children:"Customizing Tag styles"}),`
`,e.jsx("div",{dangerouslySetInnerHTML:{__html:a({title:"Important!",description:"These patterns represent how to customize the style of the tag for your project."}).outerHTML}}),`
`,e.jsxs(n.p,{children:["The tag classes are built on a ",e.jsx(n.a,{href:"https://sass-lang.com/documentation/style-rules/placeholder-selectors",rel:"nofollow",children:"SASS placeholder selector"})]}),`
`,e.jsxs(n.p,{children:["This allows multiple classes to share the same behavior. You can modify all tag behavior by overriding the ",e.jsx(n.code,{children:"%tag-global"})," placeholder selector and setting any properties:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`%tag-global {
  background-color: var(--op-color-alerts-danger-base);
}
`})}),`
`,e.jsx(n.p,{children:"If you need to override the behavior of a particular tag style, you can open the respective class and set or change properties"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`.tag-danger {
  background-color: var(--op-color-alerts-danger-base);
}
`})}),`
`,e.jsx(n.h2,{id:"new-tag-variations",children:"New Tag Variations"}),`
`,e.jsx("div",{dangerouslySetInnerHTML:{__html:a({title:"Important!",description:"These patterns represent how to create new variations of the Tag for your project."}).outerHTML}}),`
`,e.jsx(n.p,{children:"Your application may need a custom tag. To add one, just follow this template:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`.tag-{name} {
  @extend %tag-global;
}
`})})]})}function C(s={}){const{wrapper:n}={...i(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{C as default};
