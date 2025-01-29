import{j as e}from"./jsx-runtime-CwL0G-3C.js";import{u as i}from"./index-DmN_qJLl.js";import{M as c,C as r,d as l}from"./index-Bflx7h0W.js";import{N as d,D as s,P as h,a as p,C as b,J as m}from"./Navbar.stories-DNLemA23.js";import{c as o}from"./Alert-lmCd5s8U.js";import{c as v}from"./sourceCodeLink-Chh3FteF.js";import"./iframe-B84OTo8M.js";import"../sb-preview/runtime.js";import"./index-B5rfWaSj.js";import"./index-DrFu-skq.js";import"./Navbar-GL3gM_Lw.js";import"./Button-CoyIamir.js";import"./Icon-D9QrNi_D.js";import"./Avatar-B1hinTu4.js";function t(a){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...i(),...a.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:d}),`
`,e.jsx(n.h1,{id:"navbar",children:"Navbar"}),`
`,e.jsx("div",{dangerouslySetInnerHTML:{__html:v({link:"components/navbar.scss"}).outerHTML}}),`
`,e.jsx(n.p,{children:"Navbar classes provide simple styling for a navigation header."}),`
`,e.jsxs(n.p,{children:["For instructions on how to integrate a navbar into your applications layout, see ",e.jsx(n.a,{href:"?path=/docs/recipes-layout--navbar",children:"Layout With Navbar"})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:".navbar"})," is the main component that everything is contained within."]}),`
`,e.jsxs(n.p,{children:["Any ",e.jsx(n.a,{href:"?path=/docs/navigation-components-button--docs#default",children:"Button"})," style can be used for the links."]}),`
`,e.jsx(n.h2,{id:"playground",children:"Playground"}),`
`,e.jsx(r,{of:s}),`
`,e.jsx(l,{of:s}),`
`,e.jsx(n.h3,{id:"selective-imports",children:"Selective Imports"}),`
`,e.jsxs(n.p,{children:["Navbar can be used as a standalone component, however, it does have a few dependencies. To see a full dependency list, see ",e.jsx(n.a,{href:"?path=/docs/overview-selective-imports--docs#dependencies",children:"Dependency Graph"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`// Depends on
@import '@rolemodel/optics/dist/scss/core/tokens';
@import '@rolemodel/optics/dist/scss/core/base';
@import '@rolemodel/optics/dist/scss/components/icon';
@import '@rolemodel/optics/dist/scss/components/button';

// Component
@import '@rolemodel/optics/dist/scss/components/navbar';
`})}),`
`,e.jsx(n.h2,{id:"variations",children:"Variations"}),`
`,e.jsx(n.h3,{id:"default",children:"Default"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:".navbar"})," Provides a neutral colored navbar. This uses the neutral color defined in your theme."]}),`
`,e.jsx(r,{of:s}),`
`,e.jsx(n.h3,{id:"primary",children:"Primary"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:".navbar-primary"})," Provides a primary colored navbar. This uses the primary color defined in your theme."]}),`
`,e.jsx(r,{of:h}),`
`,e.jsx(n.h3,{id:"brand",children:"Brand"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:".navbar__brand"})," can be used with an image tag inside. This can be used to display your applications branding or logo."]}),`
`,e.jsx(n.p,{children:"The brand is not required and the navbar content will adjust itself accordingly."}),`
`,e.jsx(r,{of:p}),`
`,e.jsx(n.h3,{id:"content",children:"Content"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:".navbar__content"})," defines the container that the buttons should be placed in. If you are putting navigation links within a content section, you should use the ",e.jsx(n.code,{children:"nav"})," element for that section. It can be justified by using modifier classes."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:".navbar__content--justify-start"}),", ",e.jsx(n.code,{children:".navbar__content--justify-center"}),", ",e.jsx(n.code,{children:".navbar__content--justify-end"})," with start being the default."]}),`
`,e.jsx(r,{of:b}),`
`,e.jsx(r,{of:m}),`
`,e.jsx(n.h2,{id:"navbar-api",children:"Navbar API"}),`
`,e.jsx(n.p,{children:"Color and hover styles are built on CSS variables scoped to the navbar."}),`
`,e.jsx(n.p,{children:"Here are the variables that can be customized."}),`
`,`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`// Public API
// Normal
--_op-navbar-background-color
--_op-navbar-text-color
--_op-navbar-border-color

// Height
--_op-navbar-brand-height

// Spacing
--_op-navbar-horizontal-spacing
--_op-navbar-content-spacing
--_op-navbar-content-item-spacing
`})}),`
`,`
`,e.jsx(n.h2,{id:"customizing-navbar-styles",children:"Customizing Navbar styles"}),`
`,e.jsx("div",{dangerouslySetInnerHTML:{__html:o({title:"Important!",description:"These patterns represent how to customize the style of the navbar for your project."}).outerHTML}}),`
`,e.jsxs(n.p,{children:["The navbar classes are built on a ",e.jsx(n.a,{href:"https://sass-lang.com/documentation/style-rules/placeholder-selectors",rel:"nofollow",children:"SASS placeholder selector"})]}),`
`,e.jsxs(n.p,{children:["This allows multiple classes to share the same behavior. You can modify all navbar behavior by overriding the ",e.jsx(n.code,{children:"%navbar-global"})," placeholder selector and setting any properties:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`%navbar-global {
  --_op-navbar-background-color: pink;
  --_op-navbar-text-color: blue;
}
`})}),`
`,e.jsx(n.p,{children:"If you need to override the behavior of a particular navbar style, you can open the respective class and set or change properties"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`.navbar-primary {
  --_op-navbar-brand-height: 5.4rem;
  --_op-navbar-horizontal-spacing: var(--op-space-small);
  --_op-navbar-content-item-spacing: var(--op-space-x-small);
}
`})}),`
`,e.jsx(n.h2,{id:"new-navbar-variations",children:"New Navbar Variations"}),`
`,e.jsx("div",{dangerouslySetInnerHTML:{__html:o({title:"Important!",description:"These patterns represent how to create new variations of the Navbar for your project."}).outerHTML}}),`
`,e.jsx(n.p,{children:"Your application may need a custom navbar. To add one, just follow this template:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`.navbar-{name} {
  @extend %navbar-global;
}
`})})]})}function L(a={}){const{wrapper:n}={...i(),...a.components};return n?e.jsx(n,{...a,children:e.jsx(t,{...a})}):t(a)}export{L as default};
