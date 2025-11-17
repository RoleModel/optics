import{j as e,M as i}from"./blocks-ZRPSuR6b.js";import{useMDXComponents as o}from"./index-d9ggI4Sk.js";import"./preload-helper-D9Z9MdNV.js";import"./iframe-nopHEUW4.js";const r=""+new URL("dependency-graph-BGxEZDzB.svg",import.meta.url).href;function s(t){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Overview/Selective Imports"}),`
`,e.jsx(n.h1,{id:"selective-imports",children:"Selective Imports"}),`
`,e.jsx(n.p,{children:"By default, when you import the design system, it will include the basics. CSS reset, All Tokens, Base styles, Utilities, and all Components."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`@import '@rolemodel/optics';
/* or */
@import '@rolemodel/optics/dist/css/optics';
`})}),`
`,e.jsx(n.p,{children:"If your application doesn't need all styles provided, you can import only the files you need like this:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`/* Third party Vendors */
@import 'modern-css-reset/dist/reset';

/* Fonts */
@import 'core/fonts';

/* Tokens */
@import 'core/tokens';

/* Base styles and utilities */
@import 'core/base';
@import 'core/layout';
@import 'core/utilities';

/* Just the button and card Components */
@import 'components/button';
@import 'components/card';
`})}),`
`,e.jsx(n.p,{children:"Or this:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`/* Third party Vendors */
@import 'modern-css-reset/dist/reset';

/* No Material Icons */
@import 'core/fonts/text_fonts';

/* Tokens */
@import 'core/tokens';

/* Base styles and utilities */
@import 'core/base';
@import 'core/layout';
@import 'core/utilities';

/* Components */
@import 'components';
`})}),`
`,e.jsx(n.h2,{id:"dependencies",children:"Dependencies"}),`
`,e.jsx(n.p,{children:"Some components rely on other components for their usage. Each document page describes these dependencies. Additionally, here is a visualization of all dependencies:"}),`
`,e.jsx("img",{src:r,alt:"Dependency Graph"})]})}function a(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{a as default};
