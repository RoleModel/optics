import{j as e,M as o}from"./index-D8-uotrA.js";import{useMDXComponents as t}from"./index-C1eAujEz.js";import{N as r}from"./index-D6k-QAJt.js";import{c as a}from"./sourceCodeLink-Chh3FteF.js";import"./iframe-BuSILFPd.js";import"./index-BiL3ubqk.js";import"./index-DrFu-skq.js";function s(i){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...t(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Tokens/Sizing"}),`
`,e.jsx(n.h1,{id:"size",children:"Size"}),`
`,e.jsx("div",{dangerouslySetInnerHTML:{__html:a({link:"core/tokens/base_tokens.css"}).outerHTML}}),`
`,e.jsxs(n.p,{children:["The Size token enables creating scalable widths and heights for your application. It is meant to be used in a ",e.jsx(n.code,{children:"calc"})," expression with whole numbers. This ensures any sizes you create will be a multiple of 4px."]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.p,{children:"These tokens can be applied like:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`height: calc(11 * var(--op-size-unit)); /* 44px */
/* Or */
width: calc(54 * var(--op-size-unit)); /* 216px */
`})}),`
`,e.jsx(n.h2,{id:"available-tokens-and-their-definitions",children:"Available tokens and their definitions"}),`
`,e.jsx(r,{categoryName:"Size Scale",viewType:"card"}),`
`,e.jsxs(n.p,{children:["The size unit can be overridden if you want to change the scale or size basis. See ",e.jsx(n.a,{href:"?path=/docs/overview-scale-overriding--docs#unit-scale-overriding",children:"scale overriding"})]})]})}function m(i={}){const{wrapper:n}={...t(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{m as default};
