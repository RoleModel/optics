import{j as e}from"./jsx-runtime-DThOCRDp.js";import{u as a}from"./index-CG2-xxTZ.js";import{M as o}from"./index-SHn9-9ww.js";import{c as r}from"./sourceCodeLink-Chh3FteF.js";import{N as t}from"./index-D_eRTily.js";import"./iframe-B0Ei9kcs.js";import"../sb-preview/runtime.js";import"./index-B5rfWaSj.js";import"./index-DrFu-skq.js";function i(s){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...a(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Tokens/Breakpoint"}),`
`,e.jsx(n.h1,{id:"breakpoint",children:"Breakpoint"}),`
`,e.jsx("div",{dangerouslySetInnerHTML:{__html:r({link:"core/tokens/base_tokens.scss"}).outerHTML}}),`
`,e.jsx(n.p,{children:"Breakpoint tokens are used to define common device sizes for use within media queries or max widths."}),`
`,e.jsx(n.p,{children:"They are implemented in two ways. First as CSS custom properties (css variables) and second as guided pixel assignments."}),`
`,e.jsx(n.p,{children:"The CSS variables can be used like any of the other tokens for things requiring calculations or max widths."}),`
`,e.jsx(n.p,{children:"The guided pixel assignments can be used for media queries."}),`
`,e.jsxs(n.p,{children:["Custom properties (css variables) currently cannot be used in a media query since they get defined in an element scope (",e.jsx(n.code,{children:":root"}),` in our case).
Media queries exist at the document level and therefore cannot access custom properties.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://drafts.csswg.org/css-env-1/",rel:"nofollow",children:"CSS ENV Variables"})," aims at addressing this by allowing variables at the global document level."]}),`
`,e.jsxs(n.p,{children:["For common breakpoints, define the variables in the ",e.jsx(n.code,{children:":root"})," as a comment block. When using them, use the pixel value, but include a comment above with the named breakpoint. This makes it searchable and provide a bit of intention to what the value means."]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.p,{children:"These token values can be applied in a media query to create responsive behavior."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`.small-area {
  max-width: var(--op-breakpoint-small);
}

:root {
  /*
  Breakpoints
  These breakpoint values will be used as a guide for media queries.
  Annotate the uses with a comment above referring to the variable being referenced.

  --op-breakpoint-medium: 1024px;
  ...
  */
}

// --op-breakpoint-medium
@media (width > 1024px) {
  background-color: var(--op-color-primary-base);
  color: var(--op-color-primary-on-base);
}
`})}),`
`,e.jsx(n.h2,{id:"available-tokens-and-their-definitions",children:"Available tokens and their definitions"}),`
`,e.jsx(t,{categoryName:"Breakpoints",viewType:"card"})]})}function k(s={}){const{wrapper:n}={...a(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{k as default};
