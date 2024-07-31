import{j as e}from"./jsx-runtime-wV-HqYdn.js";import{u as t}from"./index-DCjXWHk2.js";import{M as a,C as n,d as c}from"./index-BtfEXyyO.js";import{D as l,a as d,V as h,S as p,b as m}from"./Divider.stories-Bw50ZUjH.js";import{c as v}from"./sourceCodeLink-Chh3FteF.js";import{c as r}from"./Alert-93ao7bSE.js";import"./iframe-aIM7v9wE.js";import"../sb-preview/runtime.js";import"./index-B5rfWaSj.js";import"./index-DrFu-skq.js";import"./Divider-DvyA9Bw7.js";import"./Button-CoyIamir.js";import"./Icon-D9QrNi_D.js";function o(s){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:l}),`
`,e.jsx(i.h1,{id:"divider",children:"Divider"}),`
`,e.jsx("div",{dangerouslySetInnerHTML:{__html:v({link:"components/divider.scss"}).outerHTML}}),`
`,e.jsx(i.p,{children:"Divider classes can be used to create horizontal or vertical visual divides between content."}),`
`,e.jsx(i.h2,{id:"playground",children:"Playground"}),`
`,e.jsx(n,{of:d}),`
`,e.jsx(c,{of:d}),`
`,e.jsx(i.h3,{id:"selective-imports",children:"Selective Imports"}),`
`,e.jsxs(i.p,{children:["Divider can be used as a standalone component, however, it does have a few dependencies. To see a full dependency list, see ",e.jsx(i.a,{href:"?path=/docs/overview-selective-imports--docs#dependencies",children:"Dependency Graph"})]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-css",children:`// Depends on
@import '@rolemodel/optics/dist/scss/core/tokens';
@import '@rolemodel/optics/dist/scss/core/base';

// Component
@import '@rolemodel/optics/dist/scss/components/divider';
`})}),`
`,e.jsx(i.h2,{id:"variations",children:"Variations"}),`
`,e.jsx(i.h3,{id:"default",children:"Default"}),`
`,e.jsxs(i.p,{children:[e.jsx(i.code,{children:".divider"})," Provides a basic horizontal divider"]}),`
`,e.jsx(n,{of:d}),`
`,e.jsx(i.h3,{id:"vertical",children:"Vertical"}),`
`,e.jsxs(i.p,{children:[e.jsx(i.code,{children:".divider-vertical"})," Provides a basic vertical divider"]}),`
`,e.jsx(n,{of:h}),`
`,e.jsx(i.h3,{id:"size",children:"Size"}),`
`,e.jsxs(i.p,{children:[e.jsx(i.code,{children:".divider--small"}),", ",e.jsx(i.code,{children:".divider--medium"}),", ",e.jsx(i.code,{children:".divider--large"})," (with small being the default) modify the size of any divider class by changing the width of the divider."]}),`
`,e.jsx(n,{of:p}),`
`,e.jsx(i.h3,{id:"spacing",children:"Spacing"}),`
`,e.jsxs(i.p,{children:[e.jsx(i.code,{children:".divider--spacing-small"}),", ",e.jsx(i.code,{children:".divider--spacing-medium"}),", ",e.jsx(i.code,{children:".divider--spacing-large"})," (with none being the default) modify the padding around the divider."]}),`
`,e.jsx(n,{of:m}),`
`,e.jsx(i.h2,{id:"divider-api",children:"Divider API"}),`
`,e.jsx(i.p,{children:"The size and spacing styles are built on css variables scoped to the divider."}),`
`,e.jsx(i.p,{children:"Here are the variables that can be customized."}),`
`,`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-css",children:`--_op-divider-vertical-min-height
--_op-divider-height-small
--_op-divider-height-medium
--_op-divider-height-large
--_op-divider-padding-small
--_op-divider-padding-medium
--_op-divider-padding-large
`})}),`
`,`
`,e.jsx(i.h2,{id:"customizing-divider-styles",children:"Customizing Divider styles"}),`
`,e.jsx("div",{dangerouslySetInnerHTML:{__html:r({title:"Important!",description:"These patterns represent how to customize the style of the divider for your project."}).outerHTML}}),`
`,e.jsxs(i.p,{children:["The divider classes are built on a ",e.jsx(i.a,{href:"https://sass-lang.com/documentation/style-rules/placeholder-selectors",rel:"nofollow",children:"sass placeholder selector"})]}),`
`,e.jsxs(i.p,{children:["This allows multiple classes to share the same behavior. You can modify all divider behavior by overriding the ",e.jsx(i.code,{children:"%divider-global"})," placeholder selector and setting any properties:"]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-css",children:`%divider-global {
}
`})}),`
`,e.jsx(i.p,{children:"If you need to override the behavior of a particular divider style, you can open the respective class and set or change properties"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-css",children:`.divider-vertical {
}
`})}),`
`,e.jsx(i.h2,{id:"new-divider-variations",children:"New Divider Variations"}),`
`,e.jsx("div",{dangerouslySetInnerHTML:{__html:r({title:"Important!",description:"These patterns represent how to create new variations of the divider for your project."}).outerHTML}}),`
`,e.jsx(i.p,{children:"Your application may need a custom divider. To add one, just follow this template:"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-css",children:`.divider-{name} {
  @extend %divider-global;
}
`})})]})}function S(s={}){const{wrapper:i}={...t(),...s.components};return i?e.jsx(i,{...s,children:e.jsx(o,{...s})}):o(s)}export{S as default};
