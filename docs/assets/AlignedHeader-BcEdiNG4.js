import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{i as t,r as n}from"./react-DTG9IdOZ.js";import{s as r}from"./chunk-LITCR56V-5npheFyz.js";import{l as i,n as a,o,u as s}from"./blocks-CxVnX0yB.js";import{n as c,t as l}from"./sourceCodeLink-rUFw22c2.js";import{i as u,n as d,r as f,t as p}from"./AlignedHeader.stories-CfieXDfc.js";function m(e){let n={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...t(),...e.components};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(i,{of:p}),`
`,(0,g.jsx)(n.h1,{id:`aligned-header`,children:`Aligned Header`}),`
`,(0,g.jsx)(`div`,{dangerouslySetInnerHTML:{__html:l({link:`recipes/aligned-header.css`}).outerHTML}}),`
`,(0,g.jsx)(n.p,{children:`There are cases when you want to vertically center something on a line of text that wraps. Like a badge or edit button at the end of a text header.
Achieving this can be tricky as a simple flex or grid solution would result in the badge or button coming after the wrapped text in another block instead of inline with the wrapped text at the end of it.`}),`
`,(0,g.jsx)(n.p,{children:`Here is a solution that manually calculates the height of the suffix section based on the overall font size and line height. In this case, we need to explicity set those in order to calculate the height of the suffix section.
This is not a common problem and your particular use-case may need to tweak the implementation. Ultimately, this is not general enough to warrant being a full component in the library, but it is a good example of how to solve this specific problem.`}),`
`,(0,g.jsx)(n.h2,{id:`playground`,children:`Playground`}),`
`,(0,g.jsx)(a,{of:d}),`
`,(0,g.jsx)(o,{of:d}),`
`,(0,g.jsx)(n.h2,{id:`badge-example`,children:`Badge Example`}),`
`,(0,g.jsx)(n.pre,{children:(0,g.jsx)(n.code,{className:`language-css`,children:`/* Badge Example */
.aligned-header {
  /* Public API (allowed to be overridden) */
  --_op-line-height: var(--op-line-height-base);
  --_op-font-size: var(--op-font-4x-large);

  font-size: var(--_op-font-size);
  font-weight: var(--op-font-weight-semi-bold);
  line-height: var(--_op-line-height);

  .aligned-header__centered-suffix {
    display: inline-flex;
    block-size: calc(var(--_op-line-height) * var(--_op-font-size));
    align-items: center;
    vertical-align: top;
  }
}
`})}),`
`,(0,g.jsx)(a,{of:d}),`
`,(0,g.jsx)(n.h2,{id:`icon-button-example`,children:`Icon Button Example`}),`
`,(0,g.jsx)(n.p,{children:`The CSS is the same as the previous example, but the markup is different.`}),`
`,(0,g.jsx)(a,{of:f})]})}function h(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,g.jsx)(n,{...e,children:(0,g.jsx)(m,{...e})}):m(e)}var g;function _(){return(_=e((()=>{g=r(),n(),s(),u(),c()})))()}_();export{h as default};