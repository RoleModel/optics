import{j as e,M as r}from"./blocks-D2pTyHFk.js";import{useMDXComponents as o}from"./index-Cur9J7FO.js";import{D as t}from"./chunk-ZBZVYPM7-BD9Yv9GR.js";import{c as a}from"./sourceCodeLink-Chh3FteF.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-qQGGZl47.js";function s(i){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...o(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Tokens/Sizing"}),`
`,e.jsx(n.h1,{id:"size",children:"Size"}),`
`,e.jsx("div",{dangerouslySetInnerHTML:{__html:a({link:"core/tokens/base_tokens.css"}).outerHTML}}),`
`,e.jsxs(n.p,{children:["The Size token enables creating scalable widths (inline-size) and heights (block-size) for your application. It is meant to be used in a ",e.jsx(n.code,{children:"calc"})," expression with whole numbers. This ensures any sizes you create will be a multiple of 4px."]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.p,{children:"These tokens can be applied like:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`block-size: calc(11 * var(--op-size-unit)); /* 44px */
/* Or */
inline-size: calc(54 * var(--op-size-unit)); /* 216px */
`})}),`
`,e.jsx(n.h2,{id:"available-tokens-and-their-definitions",children:"Available tokens and their definitions"}),`
`,e.jsx(t,{categoryName:"Size Scale",viewType:"card"}),`
`,e.jsxs(n.p,{children:["The size unit can be overridden if you want to change the scale or size basis. See ",e.jsx(n.a,{href:"?path=/docs/overview-scale-overriding--docs#unit-scale-overriding",children:"scale overriding"})]})]})}function x(i={}){const{wrapper:n}={...o(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{x as default};
