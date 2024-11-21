import{j as e}from"./jsx-runtime-q_IbPlfq.js";import{u as s}from"./index-BddqNUC0.js";import{M as r}from"./index-BxWRKbYi.js";import"./iframe-DOIRH2Ve.js";import"../sb-preview/runtime.js";import"./index-B5rfWaSj.js";import"./index-DrFu-skq.js";const i=""+new URL("dependency-graph-BLhwbIQA.svg",import.meta.url).href;function o(t){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Overview/Selective Imports"}),`
`,e.jsx(n.h1,{id:"selective-imports",children:"Selective Imports"}),`
`,e.jsx(n.p,{children:"By default, when you import the design system, it will include the basics. CSS reset, All Tokens, Base styles, Utilities, and all Components."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`@import '@rolemodel/optics';
// or
@import '@rolemodel/optics/dist/scss/optics';
`})}),`
`,e.jsx(n.p,{children:"If your application doesn't need all styles provided, you can import only the files you need like this:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`@import 'modern-css-reset/dist/reset';

@import 'core/tokens';

@import 'core/base';
@import 'core/layout';
@import 'core/utilities';

// Just the button and card Components
@import 'components/button';
@import 'components/card';
`})}),`
`,e.jsx(n.p,{children:"Or this:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`@import 'modern-css-reset/dist/reset';

@import 'base_tokens';
@import 'scale_color_tokens';
// No dark mode or alert tokens

@import 'core/base';
@import 'core/layout';
@import 'core/utilities';

@import 'components';
`})}),`
`,e.jsx(n.h2,{id:"dependencies",children:"Dependencies"}),`
`,e.jsx(n.p,{children:"Some components rely on other components for their usage. Each document page describes these dependencies. Additionally, here is a visualization of all dependencies:"}),`
`,e.jsx("img",{src:i,alt:"Dependency Graph"})]})}function u(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{u as default};
