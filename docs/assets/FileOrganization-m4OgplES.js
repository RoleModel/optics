import{i as e}from"./preload-helper-xPQekRTU.js";import{T as t,l as n,u as r}from"./blocks-uVOOWdqL.js";import{s as i}from"./chunk-LITCR56V-BmCoDI8n.js";import{t as a}from"./mdx-react-shim-eO_HyXU9.js";function o(e){let r={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n,{title:`Overview/File Organization`}),`
`,(0,c.jsx)(r.h1,{id:`file-organization`,children:`File Organization`}),`
`,(0,c.jsx)(r.p,{children:`As you use Optics, you will likely want to organize your Optics configuration into multiple files.`}),`
`,(0,c.jsx)(r.h2,{id:`folder-structure`,children:`Folder Structure`}),`
`,(0,c.jsxs)(r.p,{children:[`The recommended folder structure is to have a `,(0,c.jsx)(r.code,{children:`main or application`}),` file that is the root file. This file should import all of the other files in the folder.`]}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.code,{children:`/stylesheets`}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsx)(r.li,{children:(0,c.jsx)(r.code,{children:`application.css`})}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.code,{children:`/core`}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.code,{children:`/theme`}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsx)(r.li,{children:(0,c.jsx)(r.code,{children:`{name}-theme-core.css`})}),`
`,(0,c.jsx)(r.li,{children:(0,c.jsx)(r.code,{children:`{name}-theme-light.css`})}),`
`,(0,c.jsx)(r.li,{children:(0,c.jsx)(r.code,{children:`{name}-theme-dark.css`})}),`
`]}),`
`]}),`
`,(0,c.jsx)(r.li,{children:(0,c.jsx)(r.code,{children:`base.css`})}),`
`,(0,c.jsx)(r.li,{children:(0,c.jsx)(r.code,{children:`layout.css`})}),`
`,(0,c.jsx)(r.li,{children:(0,c.jsx)(r.code,{children:`utilities.css`})}),`
`]}),`
`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.code,{children:`/vendors`}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsx)(r.li,{children:(0,c.jsx)(r.code,{children:`{vendor-name}-overrides.css`})}),`
`]}),`
`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.code,{children:`/components`}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.code,{children:`/optics-overrides`}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsx)(r.li,{children:(0,c.jsx)(r.code,{children:`{component-name}.css`})}),`
`]}),`
`]}),`
`,(0,c.jsx)(r.li,{children:(0,c.jsx)(r.code,{children:`{component-name}.css`})}),`
`]}),`
`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.code,{children:`/general`}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsx)(r.li,{children:(0,c.jsx)(r.code,{children:`{general-name}.css`})}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,(0,c.jsx)(r.h2,{id:`import-structure`,children:`Import Structure`}),`
`,(0,c.jsx)(r.p,{children:`Using the above folder structure, the application file should import all of the other files. Comments can be used to describe the purpose of each section of files.`}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-css`,children:`/* Optics */
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
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=i(),a(),r()}))();export{s as default};