import{j as e}from"./jsx-runtime-Ce5xs4Wy.js";import{u as a}from"./index-CPcV2wD4.js";import{M as o}from"./index-C52FNCyE.js";import{c as i}from"./sourceCodeLink-Chh3FteF.js";import{N as t}from"./index-Ct2jHP3u.js";import"./iframe-BN7FcqzY.js";import"../sb-preview/runtime.js";import"./index-B5rfWaSj.js";import"./index-DrFu-skq.js";function r(s){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...a(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Tokens/Breakpoint"}),`
`,e.jsx(n.h1,{id:"breakpoint",children:"Breakpoint"}),`
`,e.jsx("div",{dangerouslySetInnerHTML:{__html:i({link:"core/tokens/base_tokens.scss"}).outerHTML}}),`
`,e.jsx(n.p,{children:"Breakpoint tokens are used to define common device sizes for use within media queries or max widths."}),`
`,e.jsx(n.p,{children:"They are implemented in two ways. First as CSS custom properties (css variables) and second as SCSS variables."}),`
`,e.jsx(n.p,{children:"The CSS variables can be used like any of the other tokens for things requiring calculations or max widths."}),`
`,e.jsx(n.p,{children:"The SCSS variables can be used for media queries."}),`
`,e.jsxs(n.p,{children:["Custom properties (css variables) currently cannot be used in a media query since they get defined in an element scope (",e.jsx(n.code,{children:":root"}),` in our case).
Media queries exist at the document level and therefore cannot access custom properties.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://drafts.csswg.org/css-env-1/",rel:"nofollow",children:"CSS ENV Variables"})," aims at addressing this by allowing variables at the global document level."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://bholmes.dev/blog/alternative-to-css-variable-media-queries/",rel:"nofollow",children:"SCSS Workaround"})," is the pattern we follow to achieve this."]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.p,{children:"These tokens can be applied in a media query to create responsive behavior."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`.small-area {
  max-width: var(--op-breakpoint-small);
}

@media (width > $breakpoint-medium) {
  background-color: var(--op-color-primary-base);
  color: var(--op-color-primary-on-base);
}
`})}),`
`,e.jsx(n.h2,{id:"available-tokens-and-their-definitions",children:"Available tokens and their definitions"}),`
`,e.jsx(t,{categoryName:"Breakpoints",viewType:"card"})]})}function j(s={}){const{wrapper:n}={...a(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{j as default};
