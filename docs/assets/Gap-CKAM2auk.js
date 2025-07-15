import{j as e,M as r,C as n,a as d}from"./index-CJTCbCcq.js";import{useMDXComponents as c}from"./index-DxUjHeZW.js";import{G as t,M as a,E as o,a as x,S as p,L as h,b as m}from"./Gap.stories-CfxOMBtK.js";import{c as j}from"./sourceCodeLink-Chh3FteF.js";import"./iframe-CpL0syPs.js";import"./index-BiL3ubqk.js";import"./index-DrFu-skq.js";import"./utils-ChVC8LB4.js";function l(i){const s={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...c(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:t}),`
`,e.jsx(s.h1,{id:"gap",children:"Gap"}),`
`,e.jsx("div",{dangerouslySetInnerHTML:{__html:j({link:"core/utilities.css"}).outerHTML}}),`
`,e.jsx(s.p,{children:"Gap utility classes can be used to set the spacing between items within a flex or grid container."}),`
`,e.jsx(s.h2,{id:"playground",children:"Playground"}),`
`,e.jsx(n,{of:a}),`
`,e.jsx(d,{of:a}),`
`,e.jsx(s.h2,{id:"cascade",children:"Cascade"}),`
`,e.jsxs(s.p,{children:["When using a gap utility, ",e.jsx(s.code,{children:"--op-gap"})," will be set to the same spacing value as gap. This can be used in styles nested to match the container gap."]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-css",children:`.special-item {
  display: flex;
  gap: var(--op-gap, var(--op-space-sm)); /* Include a fallback in case the wrapping gap is missing. */
}
`})}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<div class="flex gap-sm">
  <div>1</div>
  <div>2</div>
  <div class="special-item">
    <div>a</div>
    <div>b</div>
    <div>c</div>
  </div>
  <div>4</div>
</div>
`})}),`
`,e.jsx(s.h2,{id:"extra-extra-small",children:"Extra Extra Small"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:".gap-xxs"})," This will use ",e.jsx(s.code,{children:"--op-space-2x-small"})," for the item spacing."]}),`
`,e.jsx(n,{of:o}),`
`,e.jsx(s.h2,{id:"extra-small",children:"Extra Small"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:".gap-xs"})," This will use ",e.jsx(s.code,{children:"--op-space-x-small"})," for the item spacing."]}),`
`,e.jsx(n,{of:x}),`
`,e.jsx(s.h2,{id:"small",children:"Small"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:".gap-sm"})," This will use ",e.jsx(s.code,{children:"--op-space-small"})," for the item spacing."]}),`
`,e.jsx(n,{of:p}),`
`,e.jsx(s.h2,{id:"medium",children:"Medium"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:".gap-md"})," This will use ",e.jsx(s.code,{children:"--op-space-medium"})," for the item spacing."]}),`
`,e.jsx(n,{of:a}),`
`,e.jsx(s.h2,{id:"large",children:"Large"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:".gap-lg"})," This will use ",e.jsx(s.code,{children:"--op-space-large"})," for the item spacing."]}),`
`,e.jsx(n,{of:h}),`
`,e.jsx(s.h2,{id:"extra-large",children:"Extra Large"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:".gap-xl"})," This will use ",e.jsx(s.code,{children:"--op-space-xl"})," for the item spacing."]}),`
`,e.jsx(n,{of:m})]})}function L(i={}){const{wrapper:s}={...c(),...i.components};return s?e.jsx(s,{...i,children:e.jsx(l,{...i})}):l(i)}export{L as default};
