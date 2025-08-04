import{j as e,M as a,C as d,a as c}from"./blocks-BPxk_-54.js";import{useMDXComponents as t}from"./index-CyN62Cw9.js";import{D as l,a as s,V as h,S as p,b as m}from"./Divider.stories-CWDMA6LX.js";import{c as v}from"./sourceCodeLink-Chh3FteF.js";import{c as r}from"./Alert-CAEs4394.js";import"./preload-helper-C1FmrZbK.js";import"./iframe-D28E1yIw.js";import"./Divider-DXVOsIdn.js";import"./Button-B21kpIpO.js";import"./Icon-uqCTS4Mm.js";function o(n){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...t(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:l}),`
`,e.jsx(i.h1,{id:"divider",children:"Divider"}),`
`,e.jsx("div",{dangerouslySetInnerHTML:{__html:v({link:"components/divider.css"}).outerHTML}}),`
`,e.jsx(i.p,{children:"Divider classes can be used to create horizontal or vertical visual divides between content."}),`
`,e.jsx(i.h2,{id:"playground",children:"Playground"}),`
`,e.jsx(d,{of:s}),`
`,e.jsx(c,{of:s}),`
`,e.jsx(i.h3,{id:"selective-imports",children:"Selective Imports"}),`
`,e.jsxs(i.p,{children:["Divider can be used as a standalone component, however, it does have a few dependencies. To see a full dependency list, see ",e.jsx(i.a,{href:"?path=/docs/overview-selective-imports--docs#dependencies",children:"Dependency Graph"})]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-css",children:`/* Depends on */
@import '@rolemodel/optics/dist/css/core/fonts';
@import '@rolemodel/optics/dist/css/core/tokens';
@import '@rolemodel/optics/dist/css/core/base';

/* Component */
@import '@rolemodel/optics/dist/css/components/divider';
`})}),`
`,e.jsx(i.h2,{id:"variations",children:"Variations"}),`
`,e.jsx(i.h3,{id:"default",children:"Default"}),`
`,e.jsxs(i.p,{children:[e.jsx(i.code,{children:".divider"})," Provides a basic horizontal divider."]}),`
`,e.jsx(d,{of:s}),`
`,e.jsx(i.h3,{id:"vertical",children:"Vertical"}),`
`,e.jsxs(i.p,{children:[e.jsx(i.code,{children:".divider.divider--vertical"})," Provides a basic vertical divider."]}),`
`,e.jsx(d,{of:h}),`
`,e.jsx(i.h3,{id:"size",children:"Size"}),`
`,e.jsxs(i.p,{children:[e.jsx(i.code,{children:".divider--small"}),", ",e.jsx(i.code,{children:".divider--medium"}),", ",e.jsx(i.code,{children:".divider--large"})," (with small being the default) modify the size of any divider class by changing the width of the divider."]}),`
`,e.jsx(d,{of:p}),`
`,e.jsx(i.h3,{id:"spacing",children:"Spacing"}),`
`,e.jsxs(i.p,{children:[e.jsx(i.code,{children:".divider--spacing-small"}),", ",e.jsx(i.code,{children:".divider--spacing-medium"}),", ",e.jsx(i.code,{children:".divider--spacing-large"})," (with none being the default) modify the padding around the divider."]}),`
`,e.jsx(d,{of:m}),`
`,e.jsx(i.h2,{id:"divider-api",children:"Divider API"}),`
`,e.jsx(i.p,{children:"The size and spacing styles are built on CSS variables scoped to the divider."}),`
`,e.jsx(i.p,{children:"Here are the variables that can be customized:"}),`
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
`,e.jsxs(i.p,{children:["The divider classes are structured using the ",e.jsx(i.a,{href:"https://getbem.com/naming",rel:"nofollow",children:"BEM methodology"}),"."]}),`
`,e.jsxs(i.p,{children:["This allows us to define core styles on a main ",e.jsx(i.a,{href:"https://getbem.com/naming/#block",rel:"nofollow",children:"block"})," class, and use ",e.jsx(i.a,{href:"https://getbem.com/naming/#modifier",rel:"nofollow",children:"modifiers"})," to encapsulate variant styles. You can modify all divider behavior by overriding the ",e.jsx(i.code,{children:".divider"})," selector and setting any properties:"]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-css",children:`.divider {
}
`})}),`
`,e.jsx(i.p,{children:"If you need to override the behavior of a particular divider style, you can open the respective class and set or change properties"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-css",children:`.divider--modifier {
}
`})}),`
`,e.jsx(i.h2,{id:"new-divider-variations",children:"New Divider Variations"}),`
`,e.jsx("div",{dangerouslySetInnerHTML:{__html:r({title:"Important!",description:"These patterns represent how to create new variations of the divider for your project."}).outerHTML}}),`
`,e.jsx(i.p,{children:"Your application may need a custom divider. To add one, just follow this template:"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-css",children:`.divider--{name} {
}
`})})]})}function M(n={}){const{wrapper:i}={...t(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(o,{...n})}):o(n)}export{M as default};
