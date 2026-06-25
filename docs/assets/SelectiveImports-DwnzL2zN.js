import{i as e}from"./preload-helper-xPQekRTU.js";import{T as t,l as n,u as r}from"./blocks-uVOOWdqL.js";import{s as i}from"./chunk-LITCR56V-BmCoDI8n.js";import{t as a}from"./mdx-react-shim-eO_HyXU9.js";var o,s=e((()=>{o=``+new URL(`dependency-graph-BGxEZDzB.svg`,import.meta.url).href}));function c(e){let r={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...t(),...e.components};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(n,{title:`Overview/Selective Imports`}),`
`,(0,u.jsx)(r.h1,{id:`selective-imports`,children:`Selective Imports`}),`
`,(0,u.jsx)(r.p,{children:`By default, when you import the design system, it will include the basics. CSS reset, All Tokens, Base styles, Utilities, and all Components.`}),`
`,(0,u.jsx)(r.pre,{children:(0,u.jsx)(r.code,{className:`language-css`,children:`@import '@rolemodel/optics';
/* or */
@import '@rolemodel/optics/dist/css/optics';
`})}),`
`,(0,u.jsx)(r.p,{children:`If your application doesn't need all styles provided, you can import only the files you need like this:`}),`
`,(0,u.jsx)(r.pre,{children:(0,u.jsx)(r.code,{className:`language-css`,children:`/* Third party Vendors */
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
`,(0,u.jsx)(r.p,{children:`Or this:`}),`
`,(0,u.jsx)(r.pre,{children:(0,u.jsx)(r.code,{className:`language-css`,children:`/* Third party Vendors */
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
`,(0,u.jsx)(r.h2,{id:`dependencies`,children:`Dependencies`}),`
`,(0,u.jsx)(r.p,{children:`Some components rely on other components for their usage. Each document page describes these dependencies. Additionally, here is a visualization of all dependencies:`}),`
`,(0,u.jsx)(`img`,{src:o,alt:`Dependency Graph`})]})}function l(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,u.jsx)(n,{...e,children:(0,u.jsx)(c,{...e})}):c(e)}var u;e((()=>{u=i(),a(),r(),s()}))();export{l as default};