import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{i as t}from"./react-CaHZDgIm.js";import{s as n}from"./chunk-LITCR56V-BxXRPQK8.js";import{l as r,u as i}from"./blocks-3ODIrP3Y.js";import{t as a}from"./mdx-react-shim-DIeO1dVO.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`Overview/File Organization`}),`
`,(0,c.jsx)(n.h1,{id:`file-organization`,children:`File Organization`}),`
`,(0,c.jsx)(n.p,{children:`As you use Optics, you will likely want to organize your Optics configuration into multiple files.`}),`
`,(0,c.jsx)(n.h2,{id:`folder-structure`,children:`Folder Structure`}),`
`,(0,c.jsxs)(n.p,{children:[`The recommended folder structure is to have a `,(0,c.jsx)(n.code,{children:`main or application`}),` file that is the root file. This file should import all of the other files in the folder.`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`/stylesheets`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:`application.css`})}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`/core`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`/theme`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:`{name}-theme-core.css`})}),`
`,(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:`{name}-theme-light.css`})}),`
`,(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:`{name}-theme-dark.css`})}),`
`]}),`
`]}),`
`,(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:`base.css`})}),`
`,(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:`layout.css`})}),`
`,(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:`utilities.css`})}),`
`]}),`
`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`/vendors`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:`{vendor-name}-overrides.css`})}),`
`]}),`
`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`/components`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`/optics-overrides`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:`{component-name}.css`})}),`
`]}),`
`]}),`
`,(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:`{component-name}.css`})}),`
`]}),`
`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`/general`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:`{general-name}.css`})}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`import-structure`,children:`Import Structure`}),`
`,(0,c.jsx)(n.p,{children:`Using the above folder structure, the application file should import all of the other files. Comments can be used to describe the purpose of each section of files.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-css`,children:`/* Optics */
@import '@rolemodel/optics';

/* Vendors */
@import 'something-from-node-modules/something';

/* Font Customization */
@import 'core/fonts/text_fonts';
@import 'core/fonts/icon_fonts';

/* Theme Customization */
@import 'core/theme/{name}-theme-core';
@import 'core/theme/{name}-theme-light';
@import 'core/theme/{name}-theme-dark';

/* Core Customization */
@import 'core/base';
@import 'core/layout';
@import 'core/utilities';

/* Vendor Customization */
@import 'vendors/{vendor-name}-overrides';

/* Optics Component Customization */
@import 'components/optics-overrides/{component-name}';

/* Component */
@import 'components/{component-name}';

/* General Styles */
@import 'general/{general-name}';
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};