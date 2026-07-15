import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{i as t}from"./react-CaHZDgIm.js";import{s as n}from"./chunk-LITCR56V-BxXRPQK8.js";import{l as r,n as i,o as a,u as o}from"./blocks-3ODIrP3Y.js";import{t as s}from"./mdx-react-shim-DIeO1dVO.js";import{n as c,t as l}from"./sourceCodeLink-C1o55bv0.js";import{ExtraExtraSmall as u,ExtraLarge as d,ExtraSmall as f,Large as p,Medium as m,None as h,Small as g,n as _,t as v}from"./Gap.stories-CYtSIIR5.js";function y(e){let n={a:`a`,code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...t(),...e.components};return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(r,{of:v}),`
`,(0,x.jsx)(n.h1,{id:`gap`,children:`Gap`}),`
`,(0,x.jsx)(`div`,{dangerouslySetInnerHTML:{__html:l({link:`core/utilities.css`}).outerHTML}}),`
`,(0,x.jsx)(n.p,{children:`Gap utility classes can be used to set the spacing between items within a flex or grid container.`}),`
`,(0,x.jsx)(n.h2,{id:`playground`,children:`Playground`}),`
`,(0,x.jsx)(i,{of:m}),`
`,(0,x.jsx)(a,{of:m}),`
`,(0,x.jsx)(n.h2,{id:`cascade`,children:`Cascade`}),`
`,(0,x.jsxs)(n.p,{children:[`When using a gap utility, `,(0,x.jsx)(n.code,{children:`--op-gap`}),` will be set to the same spacing value as gap. This can be used in styles nested to match the container gap.`]}),`
`,(0,x.jsx)(n.pre,{children:(0,x.jsx)(n.code,{className:`language-css`,children:`.special-item {
  display: flex;
  gap: var(--op-gap, var(--op-space-sm)); /* Include a fallback in case the wrapping gap is missing. */
}
`})}),`
`,(0,x.jsx)(n.pre,{children:(0,x.jsx)(n.code,{className:`language-html`,children:`<div class="flex gap-sm">
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
`,(0,x.jsx)(n.h2,{id:`extra-extra-small`,children:`Extra Extra Small`}),`
`,(0,x.jsxs)(n.p,{children:[(0,x.jsx)(n.code,{children:`.gap-xxs`}),` This will use `,(0,x.jsx)(n.code,{children:`--op-space-2x-small`}),` for the item spacing.`]}),`
`,(0,x.jsx)(i,{of:u}),`
`,(0,x.jsx)(n.h2,{id:`extra-small`,children:`Extra Small`}),`
`,(0,x.jsxs)(n.p,{children:[(0,x.jsx)(n.code,{children:`.gap-xs`}),` This will use `,(0,x.jsx)(n.code,{children:`--op-space-x-small`}),` for the item spacing.`]}),`
`,(0,x.jsx)(i,{of:f}),`
`,(0,x.jsx)(n.h2,{id:`small`,children:`Small`}),`
`,(0,x.jsxs)(n.p,{children:[(0,x.jsx)(n.code,{children:`.gap-sm`}),` This will use `,(0,x.jsx)(n.code,{children:`--op-space-small`}),` for the item spacing.`]}),`
`,(0,x.jsx)(i,{of:g}),`
`,(0,x.jsx)(n.h2,{id:`medium`,children:`Medium`}),`
`,(0,x.jsxs)(n.p,{children:[(0,x.jsx)(n.code,{children:`.gap-md`}),` This will use `,(0,x.jsx)(n.code,{children:`--op-space-medium`}),` for the item spacing.`]}),`
`,(0,x.jsx)(i,{of:m}),`
`,(0,x.jsx)(n.h2,{id:`large`,children:`Large`}),`
`,(0,x.jsxs)(n.p,{children:[(0,x.jsx)(n.code,{children:`.gap-lg`}),` This will use `,(0,x.jsx)(n.code,{children:`--op-space-large`}),` for the item spacing.`]}),`
`,(0,x.jsx)(i,{of:p}),`
`,(0,x.jsx)(n.h2,{id:`extra-large`,children:`Extra Large`}),`
`,(0,x.jsxs)(n.p,{children:[(0,x.jsx)(n.code,{children:`.gap-xl`}),` This will use `,(0,x.jsx)(n.code,{children:`--op-space-xl`}),` for the item spacing.`]}),`
`,(0,x.jsx)(i,{of:d}),`
`,(0,x.jsx)(n.h2,{id:`none`,children:`None`}),`
`,(0,x.jsxs)(n.p,{children:[(0,x.jsx)(n.code,{children:`.gap-none`}),` This useful for removing a default gap. Especially useful for the `,(0,x.jsx)(n.a,{href:`?path=/docs/utilities-advanced-cluster--docs`,children:`Advanced Utilities`}),` which have a default gap of `,(0,x.jsx)(n.code,{children:`--op-space-medium`}),`.`]}),`
`,(0,x.jsx)(i,{of:h})]})}function b(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,x.jsx)(n,{...e,children:(0,x.jsx)(y,{...e})}):y(e)}var x;e((()=>{x=n(),s(),o(),_(),c()}))();export{b as default};