import{j as e,M as o}from"./blocks-DX_T_ZP4.js";import{useMDXComponents as i}from"./index-BODO6xtx.js";import{O as h}from"./index-BRvzl5MA.js";import"./preload-helper-D9Z9MdNV.js";import"./iframe-CivF7LaH.js";function s(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Tokens/Typography/Line Height"}),`
`,e.jsx(n.h1,{id:"line-height",children:"Line Height"}),`
`,e.jsx(n.p,{children:"Line height tokens can be used to change the line height of text."}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.p,{children:"These tokens can be applied like:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`line-height: var(--op-line-height-dense);
`})}),`
`,e.jsx(n.h2,{id:"available-tokens-and-their-definitions",children:"Available tokens and their definitions"}),`
`,e.jsx(h,{categoryName:"Line Height",viewType:"card"}),`
`,e.jsx(n.h2,{id:"custom-font",children:"Custom Font"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Note"})," When using a ",e.jsx(n.a,{href:"?path=/docs/tokens-typography-font-family--docs#custom-font",children:"custom font"})]}),`
`,e.jsx(n.p,{children:"Not all fonts have the same baseline line height. This can cause alignment issues in your text that may require you to adjust the default line height tokens. You can do that by overriding these tokens"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`:root {
  --op-line-height-looser: 3;
}
`})})]})}function g(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{g as default};
