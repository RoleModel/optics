import{j as e,M as t,C as r}from"./blocks-BPxk_-54.js";import{useMDXComponents as a}from"./index-CyN62Cw9.js";import{Default as d}from"./Select.stories-C2CjJz_S.js";import{O as i}from"./index-Daxm2bRy.js";import{c}from"./sourceCodeLink-Chh3FteF.js";import"./preload-helper-C1FmrZbK.js";import"./iframe-D28E1yIw.js";import"./Form-DW9OsOtr.js";function s(o){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...a(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"Tokens/Encoded Image"}),`
`,e.jsx(n.h1,{id:"encoded-image",children:"Encoded Image"}),`
`,e.jsx("div",{dangerouslySetInnerHTML:{__html:c({link:"core/tokens/base_tokens.css"}).outerHTML}}),`
`,e.jsxs(n.p,{children:["Encoded Image tokens are primarily used to create the dropdown arrow on ",e.jsx(n.code,{children:"<select>"})," elements using the ",e.jsx(n.code,{children:".form-control"})," class."]}),`
`,e.jsx(n.p,{children:"It is a data-encoded URI SVG which can be set as a background image and then positioned as needed."}),`
`,e.jsx(r,{of:d}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.p,{children:"These tokens can be applied as a background image and the width for position."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`background: var(--op-encoded-images-dropdown-arrow) center right no-repeat;
`})}),`
`,e.jsx(n.h2,{id:"available-tokens-and-their-definitions",children:"Available tokens and their definitions"}),`
`,e.jsx(i,{categoryName:"Encoded Images",viewType:"card"})]})}function f(o={}){const{wrapper:n}={...a(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(s,{...o})}):s(o)}export{f as default};
