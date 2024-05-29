import{j as e}from"./jsx-runtime-DllfVXhu.js";import{u as c}from"./index-C_ydmNyw.js";import{M as i,C as n,d}from"./index-aM1em-Hc.js";import{B as l,D as o,L as h,S as m}from"./Breadcrumbs.stories-ZBSCP9jO.js";import{c as p}from"./sourceCodeLink-Chh3FteF.js";import{c as a}from"./Alert-93ao7bSE.js";import"./iframe-B0Zsr26N.js";import"../sb-preview/runtime.js";import"./index-B5rfWaSj.js";import"./index-DrFu-skq.js";import"./Icon-D9QrNi_D.js";import"./Button-CoyIamir.js";function t(r){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...c(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:l}),`
`,e.jsx(s.h1,{id:"breadcrumbs",children:"Breadcrumbs"}),`
`,e.jsx("div",{dangerouslySetInnerHTML:{__html:p({link:"components/breadcrumbs.scss"}).outerHTML}}),`
`,e.jsx(s.p,{children:"The breadcrumbs component is used to show the user's current location in a hierarchy of pages."}),`
`,e.jsxs(s.p,{children:["It can be applied to a ",e.jsx(s.code,{children:"nav"})," element with a collection of links and separators within it."]}),`
`,e.jsx(s.h2,{id:"playground",children:"Playground"}),`
`,e.jsx(n,{of:o}),`
`,e.jsx(d,{of:o}),`
`,e.jsx(s.h3,{id:"selective-imports",children:"Selective Imports"}),`
`,e.jsxs(s.p,{children:["Breadcrumbs can be used as a standalone component, however, it does have a few dependencies. To see a full dependency list, see ",e.jsx(s.a,{href:"?path=/docs/overview-selective-imports--docs#dependencies",children:"Dependency Graph"})]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-css",children:`// Depends on
@import '@rolemodel/optics/dist/scss/core/tokens';
@import '@rolemodel/optics/dist/scss/core/base';

// Component
@import '@rolemodel/optics/dist/scss/components/breadcrumbs';
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
`,e.jsx(s.p,{children:"Styles are built on css variables scoped to the breadcrumbs."}),`
`,e.jsx(s.p,{children:"Here are the variables that can be customized."}),`
`,`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-css",children:`--_op-breadcrumbs-font-size-small:
--_op-breadcrumbs-font-size-large:
`})}),`
`,`
`,e.jsx(s.h2,{id:"customizing-breadcrumbs-styles",children:"Customizing Breadcrumbs styles"}),`
`,e.jsx("div",{dangerouslySetInnerHTML:{__html:a({title:"Important!",description:"These patterns represent how to customize the style of the breadcrumbs for your project."}).outerHTML}}),`
`,e.jsxs(s.p,{children:["The breadcrumbs classes are built on a ",e.jsx(s.a,{href:"https://sass-lang.com/documentation/style-rules/placeholder-selectors",rel:"nofollow",children:"sass placeholder selector"})]}),`
`,e.jsxs(s.p,{children:["This allows multiple classes to share the same behavior. You can modify all breadcrumbs behavior by overriding the ",e.jsx(s.code,{children:"%breadcrumbs-global"})," placeholder selector and setting any properties:"]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-css",children:`%breadcrumbs-global {
  align-items: start;
}
`})}),`
`,e.jsx(s.p,{children:"If you want to override how the size modifier behaves, you can use API described above to change which font size each size uses."}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-css",children:`%btn-global {
  --_op-breadcrumbs-font-size-small: var(--op-font-4x-large);
  --_op-breadcrumbs-font-size-large: var(--op-font-6x-large);
}
`})}),`
`,e.jsx(s.h2,{id:"new-breadcrumbs-variations",children:"New Breadcrumbs Variations"}),`
`,e.jsx("div",{dangerouslySetInnerHTML:{__html:a({title:"Important!",description:"These patterns represent how to create new variations of the Breadcrumbs for your project."}).outerHTML}}),`
`,e.jsx(s.p,{children:"Your application may need a custom breadcrumbs component. To add one, just follow this template:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-css",children:`.breadcrumbs-{name} {
  @extend %breadcrumbs-global;

  background-color:
  color:
}
`})})]})}function T(r={}){const{wrapper:s}={...c(),...r.components};return s?e.jsx(s,{...r,children:e.jsx(t,{...r})}):t(r)}export{T as default};
