import{j as e,M as s,C as o,a as l}from"./index-I-zgtLkf.js";import{useMDXComponents as r}from"./index-Cg8ZX7fH.js";import{A as h,B as i,I as d}from"./AlignedHeader.stories-DdTPJBqI.js";import{c}from"./sourceCodeLink-Chh3FteF.js";import"./iframe-DRrMO3wo.js";import"./index-BiL3ubqk.js";import"./index-DrFu-skq.js";function a(t){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:h}),`
`,e.jsx(n.h1,{id:"aligned-header",children:"Aligned Header"}),`
`,e.jsx("div",{dangerouslySetInnerHTML:{__html:c({link:"recipes/aligned-header.css"}).outerHTML}}),`
`,e.jsx(n.p,{children:`There are cases when you want to vertically center something on a line of text that wraps. Like a badge or edit button at the end of a text header.
Achieving this can be tricky as a simple flex or grid solution would result in the badge or button coming after the wrapped text in another block instead of inline with the wrapped text at the end of it.`}),`
`,e.jsx(n.p,{children:`Here is a solution that manually calculates the height of the suffix section based on the overall font size and line height. In this case, we need to explicity set those in order to calculate the height of the suffix section.
This is not a common problem and your particular use-case may need to tweak the implementation. Ultimately, this is not general enough to warrant being a full component in the library, but it is a good example of how to solve this specific problem.`}),`
`,e.jsx(n.h2,{id:"playground",children:"Playground"}),`
`,e.jsx(o,{of:i}),`
`,e.jsx(l,{of:i}),`
`,e.jsx(n.h2,{id:"badge-example",children:"Badge Example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`// Badge Example
.aligned-header {
  // Public API (allowed to be overridden)
  --_op-line-height: var(--op-line-height-base);
  --_op-font-size: var(--op-font-4x-large);

  font-size: var(--_op-font-size);
  font-weight: var(--op-font-weight-semi-bold);
  line-height: var(--_op-line-height);

  .aligned-header__centered-suffix {
    display: inline-flex;
    height: calc(var(--_op-line-height) * var(--_op-font-size));
    align-items: center;
    vertical-align: top;
  }
}
`})}),`
`,e.jsx(o,{of:i}),`
`,e.jsx(n.h2,{id:"icon-button-example",children:"Icon Button Example"}),`
`,e.jsx(n.p,{children:"The CSS is the same as the previous example, but the markup is different."}),`
`,e.jsx(o,{of:d})]})}function b(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(a,{...t})}):a(t)}export{b as default};
