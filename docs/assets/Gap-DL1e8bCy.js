import{j as e}from"./jsx-runtime-D1z_Vvnr.js";import{u as r}from"./index-BFPIpyId.js";import{M as c,C as i,d}from"./index-BvePYX9_.js";import{G as t,M as a,E as o,a as p,S as x,L as h,b as m}from"./Gap.stories-CfxOMBtK.js";import{c as j}from"./sourceCodeLink-Chh3FteF.js";import"./iframe-B44qDirV.js";import"../sb-preview/runtime.js";import"./index-B5rfWaSj.js";import"./index-DrFu-skq.js";import"./utils-ChVC8LB4.js";function l(n){const s={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:t}),`
`,e.jsx(s.h1,{id:"gap",children:"Gap"}),`
`,e.jsx("div",{dangerouslySetInnerHTML:{__html:j({link:"core/utilities.scss"}).outerHTML}}),`
`,e.jsx(s.p,{children:"Gap utility classes can be used to set the spacing between items within a flex or grid container."}),`
`,e.jsx(s.h2,{id:"playground",children:"Playground"}),`
`,e.jsx(i,{of:a}),`
`,e.jsx(d,{of:a}),`
`,e.jsx(s.h2,{id:"cascade",children:"Cascade"}),`
`,e.jsxs(s.p,{children:["When using a gap utility, ",e.jsx(s.code,{children:"--op-gap"})," will be set to the same spacing value as gap. This can be used in styles nested to match the container gap."]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-css",children:`.special-item {
  display: flex;
  gap: var(--op-gap, var(--op-space-sm)); // Include a fallback in case the wrapping gap is missing.
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
`,e.jsx(i,{of:o}),`
`,e.jsx(s.h2,{id:"extra-small",children:"Extra Small"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:".gap-xs"})," This will use ",e.jsx(s.code,{children:"--op-space-x-small"})," for the item spacing."]}),`
`,e.jsx(i,{of:p}),`
`,e.jsx(s.h2,{id:"small",children:"Small"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:".gap-sm"})," This will use ",e.jsx(s.code,{children:"--op-space-small"})," for the item spacing."]}),`
`,e.jsx(i,{of:x}),`
`,e.jsx(s.h2,{id:"medium",children:"Medium"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:".gap-md"})," This will use ",e.jsx(s.code,{children:"--op-space-medium"})," for the item spacing."]}),`
`,e.jsx(i,{of:a}),`
`,e.jsx(s.h2,{id:"large",children:"Large"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:".gap-lg"})," This will use ",e.jsx(s.code,{children:"--op-space-large"})," for the item spacing."]}),`
`,e.jsx(i,{of:h}),`
`,e.jsx(s.h2,{id:"extra-large",children:"Extra Large"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:".gap-xl"})," This will use ",e.jsx(s.code,{children:"--op-space-xl"})," for the item spacing."]}),`
`,e.jsx(i,{of:m})]})}function y(n={}){const{wrapper:s}={...r(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(l,{...n})}):l(n)}export{y as default};
