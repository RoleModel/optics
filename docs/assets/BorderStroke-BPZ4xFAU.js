import{j as e}from"./jsx-runtime-E9NyL7ZE.js";import{u as s}from"./index-DZ-dxXhw.js";import{M as t}from"./index-CKTeridz.js";import{c as a}from"./sourceCodeLink-Chh3FteF.js";import{N as i}from"./index-D6NDfHCH.js";import"./iframe-Cw5OhXyt.js";import"../sb-preview/runtime.js";import"./index-B5rfWaSj.js";import"./index-DrFu-skq.js";function n(r){const o={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...s(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"Tokens/Border/Border Stroke"}),`
`,e.jsx(o.h1,{id:"border-stroke",children:"Border Stroke"}),`
`,e.jsx("div",{dangerouslySetInnerHTML:{__html:a({link:"core/tokens/base_tokens.scss"}).outerHTML}}),`
`,e.jsxs(o.p,{children:[`Border tokens can be used as box shadows to add borders to various elements. Box Shadows are used in order to provide border styling without affecting the sizing of elements.
These can be composed with other box shadows such as `,e.jsx(o.a,{href:"?path=/docs/tokens-shadow--page",children:"Shadow"})," to stack effects."]}),`
`,e.jsx(o.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(o.p,{children:"These tokens can be applied as a box shadow with any color you wish."}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-css",children:`box-shadow: var(--op-border-all) var(--op-color-border);
// or
box-shadow: var(--op-border-left) var(--op-color-primary-base);
`})}),`
`,e.jsx(o.h2,{id:"inset",children:"Inset"}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"inset"})," can be prefixed to invert a border."]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-css",children:`box-shadow: inset var(--op-border-all) var(--op-color-border);
// or
box-shadow: inset var(--op-border-left) var(--op-color-primary-base);
`})}),`
`,e.jsx(o.p,{children:"Due to how box shadows are implemented, insetting can cause seemingly strange behavior."}),`
`,e.jsx(o.p,{children:"Insetting a left border will move it to the right, and insetting a top border will move it to the bottom. The same applies for right and bottom."}),`
`,e.jsxs(o.p,{children:["Insetting the x and y borders is currently ",e.jsx(o.strong,{children:"not supported"}),". You can achieve this manually, but it requires defining the box shadow yourself."]}),`
`,e.jsx(o.h2,{id:"available-tokens-and-their-definitions",children:"Available tokens and their definitions"}),`
`,e.jsx(i,{categoryName:"Border Shadow",viewType:"card"})]})}function g(r={}){const{wrapper:o}={...s(),...r.components};return o?e.jsx(o,{...r,children:e.jsx(n,{...r})}):n(r)}export{g as default};
