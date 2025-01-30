import{j as n}from"./jsx-runtime-DThOCRDp.js";import{u as i}from"./index-CG2-xxTZ.js";import{M as c,C as r,d}from"./index-SHn9-9ww.js";import{N as l,D as s,P as h,a as p,C as m,J as b}from"./Navbar.stories-DlukeDrO.js";import{c as o}from"./Alert-BuDoz_3e.js";import{c as v}from"./sourceCodeLink-Chh3FteF.js";import"./iframe-B0Ei9kcs.js";import"../sb-preview/runtime.js";import"./index-B5rfWaSj.js";import"./index-DrFu-skq.js";import"./Navbar-lcDHNj6h.js";import"./Button-NTR86KUp.js";import"./Icon-D9QrNi_D.js";import"./Avatar-B1hinTu4.js";function t(a){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...i(),...a.components};return n.jsxs(n.Fragment,{children:[n.jsx(c,{of:l}),`
`,n.jsx(e.h1,{id:"navbar",children:"Navbar"}),`
`,n.jsx("div",{dangerouslySetInnerHTML:{__html:v({link:"components/navbar.scss"}).outerHTML}}),`
`,n.jsx(e.p,{children:"Navbar classes provide simple styling for a navigation header."}),`
`,n.jsxs(e.p,{children:["For instructions on how to integrate a navbar into your applications layout, see ",n.jsx(e.a,{href:"?path=/docs/recipes-layout--navbar",children:"Layout With Navbar"})]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:".navbar"})," is the main component that everything is contained within."]}),`
`,n.jsxs(e.p,{children:["Any ",n.jsx(e.a,{href:"?path=/docs/navigation-components-button--docs#default",children:"Button"})," style can be used for the links."]}),`
`,n.jsx(e.h2,{id:"playground",children:"Playground"}),`
`,n.jsx(r,{of:s}),`
`,n.jsx(d,{of:s}),`
`,n.jsx(e.h3,{id:"selective-imports",children:"Selective Imports"}),`
`,n.jsxs(e.p,{children:["Navbar can be used as a standalone component, however, it does have a few dependencies. To see a full dependency list, see ",n.jsx(e.a,{href:"?path=/docs/overview-selective-imports--docs#dependencies",children:"Dependency Graph"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`// Depends on
@import '@rolemodel/optics/dist/scss/core/tokens';
@import '@rolemodel/optics/dist/scss/core/base';
@import '@rolemodel/optics/dist/scss/components/icon';
@import '@rolemodel/optics/dist/scss/components/button';

// Component
@import '@rolemodel/optics/dist/scss/components/navbar';
`})}),`
`,n.jsx(e.h2,{id:"variations",children:"Variations"}),`
`,n.jsx(e.h3,{id:"default",children:"Default"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:".navbar"})," Provides a neutral colored navbar. This uses the neutral color defined in your theme."]}),`
`,n.jsx(r,{of:s}),`
`,n.jsx(e.h3,{id:"primary",children:"Primary"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:".navbar.navbar--primary"})," Provides a primary colored navbar. This uses the primary color defined in your theme."]}),`
`,n.jsx(r,{of:h}),`
`,n.jsx(e.h3,{id:"brand",children:"Brand"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:".navbar__brand"})," can be used with an image tag inside. This can be used to display your applications branding or logo."]}),`
`,n.jsx(e.p,{children:"The brand is not required and the navbar content will adjust itself accordingly."}),`
`,n.jsx(r,{of:p}),`
`,n.jsx(e.h3,{id:"content",children:"Content"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:".navbar__content"})," defines the container that the buttons should be placed in. If you are putting navigation links within a content section, you should use the ",n.jsx(e.code,{children:"nav"})," element for that section. It can be justified by using modifier classes."]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:".navbar__content--justify-start"}),", ",n.jsx(e.code,{children:".navbar__content--justify-center"}),", ",n.jsx(e.code,{children:".navbar__content--justify-end"})," with start being the default."]}),`
`,n.jsx(r,{of:m}),`
`,n.jsx(r,{of:b}),`
`,n.jsx(e.h2,{id:"navbar-api",children:"Navbar API"}),`
`,n.jsx(e.p,{children:"Color and hover styles are built on CSS variables scoped to the navbar."}),`
`,n.jsx(e.p,{children:"Here are the variables that can be customized."}),`
`,`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`// Public API
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
`,n.jsx(e.h2,{id:"customizing-navbar-styles",children:"Customizing Navbar styles"}),`
`,n.jsx("div",{dangerouslySetInnerHTML:{__html:o({title:"Important!",description:"These patterns represent how to customize the style of the navbar for your project."}).outerHTML}}),`
`,n.jsxs(e.p,{children:["The navbar classes are structured using the ",n.jsx(e.a,{href:"https://getbem.com/naming",rel:"nofollow",children:"BEM methodology"}),"."]}),`
`,n.jsxs(e.p,{children:["This allows us to define core styles on a main ",n.jsx(e.a,{href:"https://getbem.com/naming/#block",rel:"nofollow",children:"block"})," class, and use ",n.jsx(e.a,{href:"https://getbem.com/naming/#modifier",rel:"nofollow",children:"modifiers"})," to encapsulate variant styles. You can modify all navbar behavior by overriding the ",n.jsx(e.code,{children:".navbar"})," selector and setting any properties:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`.navbar {
  --_op-navbar-background-color: pink;
  --_op-navbar-text-color: blue;
}
`})}),`
`,n.jsx(e.p,{children:"If you need to override the behavior of a particular navbar style, you can open the respective class and set or change properties"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`.navbar--modifier {
  --_op-navbar-brand-height: 5.4rem;
  --_op-navbar-horizontal-spacing: var(--op-space-small);
  --_op-navbar-content-item-spacing: var(--op-space-x-small);
}
`})}),`
`,n.jsx(e.h2,{id:"new-navbar-variations",children:"New Navbar Variations"}),`
`,n.jsx("div",{dangerouslySetInnerHTML:{__html:o({title:"Important!",description:"These patterns represent how to create new variations of the Navbar for your project."}).outerHTML}}),`
`,n.jsx(e.p,{children:"Your application may need a custom navbar. To add one, just follow this template:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`.navbar--{name} {
}
`})})]})}function L(a={}){const{wrapper:e}={...i(),...a.components};return e?n.jsx(e,{...a,children:n.jsx(t,{...a})}):t(a)}export{L as default};
