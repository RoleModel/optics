import{j as e,M as c,C as n,a as d}from"./index-DG6sTsx6.js";import{useMDXComponents as i}from"./index-DsxQBMeD.js";import{B as l,D as o,L as h,S as m}from"./Breadcrumbs.stories-CnSOIzqd.js";import{c as p}from"./sourceCodeLink-Chh3FteF.js";import{c as t}from"./Alert-CAEs4394.js";import"./iframe-DiULJ9bW.js";import"./index-BiL3ubqk.js";import"./index-DrFu-skq.js";import"./Icon-uqCTS4Mm.js";import"./Button-B21kpIpO.js";function a(r){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:l}),`
`,e.jsx(s.h1,{id:"breadcrumbs",children:"Breadcrumbs"}),`
`,e.jsx("div",{dangerouslySetInnerHTML:{__html:p({link:"components/breadcrumbs.css"}).outerHTML}}),`
`,e.jsx(s.p,{children:"The breadcrumbs component is used to show the user's current location in a hierarchy of pages."}),`
`,e.jsxs(s.p,{children:["It can be applied to a ",e.jsx(s.code,{children:"nav"})," element with a collection of links and separators within it."]}),`
`,e.jsx(s.h2,{id:"playground",children:"Playground"}),`
`,e.jsx(n,{of:o}),`
`,e.jsx(d,{of:o}),`
`,e.jsx(s.h3,{id:"selective-imports",children:"Selective Imports"}),`
`,e.jsxs(s.p,{children:["Breadcrumbs can be used as a standalone component, however, it does have a few dependencies. To see a full dependency list, see ",e.jsx(s.a,{href:"?path=/docs/overview-selective-imports--docs#dependencies",children:"Dependency Graph"})]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-css",children:`/* Depends on */
@import '@rolemodel/optics/dist/css/core/fonts';
@import '@rolemodel/optics/dist/css/core/tokens';
@import '@rolemodel/optics/dist/css/core/base';

/* Component */
@import '@rolemodel/optics/dist/css/components/breadcrumbs';
`})}),`
`,e.jsx(s.h2,{id:"variations",children:"Variations"}),`
`,e.jsx(s.h3,{id:"default",children:"Default"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:".breadcrumbs"})," should be used on a ",e.jsx(s.code,{children:"nav"})," element. Within it, links with ",e.jsx(s.code,{children:".breadcrumbs__link"}),", separators with ",e.jsx(s.code,{children:".breadcrumbs__separator"}),", and the last item span with ",e.jsx(s.code,{children:".breadcrumbs__text"})," should be used."]}),`
`,e.jsx(n,{of:o}),`
`,e.jsx(s.h3,{id:"size",children:"Size"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:".breadcrumbs--small"}),", ",e.jsx(s.code,{children:".breadcrumbs--large"})," (with small being the default) modify the font size of the breadcrumb links and text."]}),`
`,e.jsx(n,{of:h}),`
`,e.jsx(s.h3,{id:"separator",children:"Separator"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:".breadcrumbs__separator"})," is used to separate the links in the breadcrumbs. It is a div that anything can be put within, however typically would be used with an ",e.jsx(s.a,{href:"?path=/docs/visual-components-icon--docs",children:"Icon"}),"."]}),`
`,e.jsx(n,{of:m}),`
`,e.jsx(s.h2,{id:"breadcrumb-api",children:"Breadcrumb API"}),`
`,e.jsx(s.p,{children:"Styles are built on CSS variables scoped to the breadcrumbs."}),`
`,e.jsx(s.p,{children:"Here are the variables that can be customized:"}),`
`,`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-css",children:`--_op-breadcrumbs-font-size-small:
--_op-breadcrumbs-font-size-large:
`})}),`
`,`
`,e.jsx(s.h2,{id:"customizing-breadcrumbs-styles",children:"Customizing Breadcrumbs styles"}),`
`,e.jsx("div",{dangerouslySetInnerHTML:{__html:t({title:"Important!",description:"These patterns represent how to customize the style of the breadcrumbs for your project."}).outerHTML}}),`
`,e.jsxs(s.p,{children:["The breadcrumbs classes are structured using the ",e.jsx(s.a,{href:"https://getbem.com/naming",rel:"nofollow",children:"BEM methodology"}),"."]}),`
`,e.jsxs(s.p,{children:["This allows us to define core styles on a main ",e.jsx(s.a,{href:"https://getbem.com/naming/#block",rel:"nofollow",children:"block"})," class, and use ",e.jsx(s.a,{href:"https://getbem.com/naming/#modifier",rel:"nofollow",children:"modifiers"})," to encapsulate variant styles. You can modify all breadcrumbs behavior by overriding the ",e.jsx(s.code,{children:".breadcrumbs"})," selector and setting any properties:"]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-css",children:`.breadcrumbs {
  align-items: start;
}
`})}),`
`,e.jsx(s.p,{children:"If you want to override how the size modifier behaves, you can use the API described above to change which font size each size uses."}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-css",children:`.breadcrumbs {
  --_op-breadcrumbs-font-size-small: var(--op-font-4x-large);
  --_op-breadcrumbs-font-size-large: var(--op-font-6x-large);
}
`})}),`
`,e.jsx(s.h2,{id:"new-breadcrumbs-variations",children:"New Breadcrumbs Variations"}),`
`,e.jsx("div",{dangerouslySetInnerHTML:{__html:t({title:"Important!",description:"These patterns represent how to create new variations of the Breadcrumbs for your project."}).outerHTML}}),`
`,e.jsxs(s.p,{children:["Your application may need a variation. To add one, just follow this template. Note the double hyphen, indicating that this is a ",e.jsx(s.a,{href:"https://getbem.com/naming/#modifier",rel:"nofollow",children:"modifier"}),":"]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-css",children:`.breadcrumbs--{name} {
  background-color:
  color:
}
`})})]})}function z(r={}){const{wrapper:s}={...i(),...r.components};return s?e.jsx(s,{...r,children:e.jsx(a,{...r})}):a(r)}export{z as default};
