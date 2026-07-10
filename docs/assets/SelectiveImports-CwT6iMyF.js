import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{i as t}from"./react-CaHZDgIm.js";import{s as n}from"./chunk-LITCR56V-BxXRPQK8.js";import{l as r,u as i}from"./blocks-nNA0HiVS.js";import{t as a}from"./mdx-react-shim-DIeO1dVO.js";var o,s=e((()=>{o=``+new URL(`dependency-graph-BGxEZDzB.svg`,import.meta.url).href}));function c(e){let n={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...t(),...e.components};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(r,{title:`Overview/Selective Imports`}),`
`,(0,u.jsx)(n.h1,{id:`selective-imports`,children:`Selective Imports`}),`
`,(0,u.jsx)(n.p,{children:`By default, when you import the design system, it will include the basics. CSS reset, All Tokens, Base styles, Utilities, and all Components.`}),`
`,(0,u.jsx)(n.pre,{children:(0,u.jsx)(n.code,{className:`language-css`,children:`@import '@rolemodel/optics';
/* or */
@import '@rolemodel/optics/dist/css/optics';
`})}),`
`,(0,u.jsx)(n.p,{children:`If your application doesn't need all styles provided, you can import only the files you need like this:`}),`
`,(0,u.jsx)(n.pre,{children:(0,u.jsx)(n.code,{className:`language-css`,children:`/* Third party Vendors */
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
`,(0,u.jsx)(n.p,{children:`Or this:`}),`
`,(0,u.jsx)(n.pre,{children:(0,u.jsx)(n.code,{className:`language-css`,children:`/* Third party Vendors */
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
`,(0,u.jsx)(n.h2,{id:`dependencies`,children:`Dependencies`}),`
`,(0,u.jsx)(n.p,{children:`Some components rely on other components for their usage. Each document page describes these dependencies. Additionally, here is a visualization of all dependencies:`}),`
`,(0,u.jsx)(`img`,{src:o,alt:`Dependency Graph`})]})}function l(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,u.jsx)(n,{...e,children:(0,u.jsx)(c,{...e})}):c(e)}var u;e((()=>{u=n(),a(),i(),s()}))();export{l as default};