import{j as e}from"./jsx-runtime-BdapKA9s.js";import{u as o}from"./index-BH2hn5My.js";import{M as r}from"./index-DAHsoxhJ.js";import"./iframe-DA9UFRIg.js";import"../sb-preview/runtime.js";import"./index-B5rfWaSj.js";import"./index-DrFu-skq.js";function i(s){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...o(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Overview/File Organization"}),`
`,e.jsx(n.h1,{id:"file-organization",children:"File Organization"}),`
`,e.jsx(n.p,{children:"As you use Optics, you will likely want to organize your Optics configuration into multiple files."}),`
`,e.jsx(n.h2,{id:"folder-structure",children:"Folder Structure"}),`
`,e.jsxs(n.p,{children:["The recommended folder structure is to have a ",e.jsx(n.code,{children:"main or application"})," file that is the root file. This file should import all of the other files in the folder."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"/stylesheets"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"application.scss"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"/core"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"/theme"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"{name}-theme-core.scss"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"{name}-theme-light.scss"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"{name}-theme-dark.scss"})}),`
`]}),`
`]}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"base.scss"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"layout.scss"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"utilities.scss"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"/vendors"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"{vendor-name}-overrides.scss"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"/components"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"/optics-overrides"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"{component-name}.scss"})}),`
`]}),`
`]}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"{component-name}.scss"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"/general"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"{general-name}.scss"})}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"import-structure",children:"Import Structure"}),`
`,e.jsx(n.p,{children:"Using the above folder structure, the application file should import all of the other files. Comments can be used to describe the purpose of each section of files."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`// Optics
@import '@rolemodel/optics';

// Vendors
@import 'something-from-node-modeules/something';

// Theme Customization
@import 'core/theme/{name}-theme-core';
@import 'core/theme/{name}-theme-light';
@import 'core/theme/{name}-theme-dark';

// Core Customization
@import 'core/base';
@import 'core/layout';
@import 'core/utilities';

// Vendor Customization
@import 'vendors/{vendor-name}-overrides';

// Optics Component Customization
@import 'components/optics-overrides/{component-name}';

// components
@import 'components/{component-name}';

// General Styles
@import 'general/{general-name}';
`})})]})}function x(s={}){const{wrapper:n}={...o(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{x as default};
