import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{i as t,r as n}from"./react-DTG9IdOZ.js";import{s as r}from"./chunk-LITCR56V-5npheFyz.js";import{l as i,n as a,o,u as s}from"./blocks-CxVnX0yB.js";import{n as c,t as l}from"./sourceCodeLink-rUFw22c2.js";import{a as u,c as d,i as f,l as p,n as m,o as h,r as g,s as _,t as v}from"./Gap.stories-Cevhm_Dr.js";function y(e){let n={a:`a`,code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...t(),...e.components};return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(i,{of:f}),`
`,(0,x.jsx)(n.h1,{id:`gap`,children:`Gap`}),`
`,(0,x.jsx)(`div`,{dangerouslySetInnerHTML:{__html:l({link:`core/utilities.css`}).outerHTML}}),`
`,(0,x.jsx)(n.p,{children:`Gap utility classes can be used to set the spacing between items within a flex or grid container.`}),`
`,(0,x.jsx)(n.h2,{id:`playground`,children:`Playground`}),`
`,(0,x.jsx)(a,{of:h}),`
`,(0,x.jsx)(o,{of:h}),`
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
`,(0,x.jsx)(a,{of:v}),`
`,(0,x.jsx)(n.h2,{id:`extra-small`,children:`Extra Small`}),`
`,(0,x.jsxs)(n.p,{children:[(0,x.jsx)(n.code,{children:`.gap-xs`}),` This will use `,(0,x.jsx)(n.code,{children:`--op-space-x-small`}),` for the item spacing.`]}),`
`,(0,x.jsx)(a,{of:g}),`
`,(0,x.jsx)(n.h2,{id:`small`,children:`Small`}),`
`,(0,x.jsxs)(n.p,{children:[(0,x.jsx)(n.code,{children:`.gap-sm`}),` This will use `,(0,x.jsx)(n.code,{children:`--op-space-small`}),` for the item spacing.`]}),`
`,(0,x.jsx)(a,{of:d}),`
`,(0,x.jsx)(n.h2,{id:`medium`,children:`Medium`}),`
`,(0,x.jsxs)(n.p,{children:[(0,x.jsx)(n.code,{children:`.gap-md`}),` This will use `,(0,x.jsx)(n.code,{children:`--op-space-medium`}),` for the item spacing.`]}),`
`,(0,x.jsx)(a,{of:h}),`
`,(0,x.jsx)(n.h2,{id:`large`,children:`Large`}),`
`,(0,x.jsxs)(n.p,{children:[(0,x.jsx)(n.code,{children:`.gap-lg`}),` This will use `,(0,x.jsx)(n.code,{children:`--op-space-large`}),` for the item spacing.`]}),`
`,(0,x.jsx)(a,{of:u}),`
`,(0,x.jsx)(n.h2,{id:`extra-large`,children:`Extra Large`}),`
`,(0,x.jsxs)(n.p,{children:[(0,x.jsx)(n.code,{children:`.gap-xl`}),` This will use `,(0,x.jsx)(n.code,{children:`--op-space-xl`}),` for the item spacing.`]}),`
`,(0,x.jsx)(a,{of:m}),`
`,(0,x.jsx)(n.h2,{id:`none`,children:`None`}),`
`,(0,x.jsxs)(n.p,{children:[(0,x.jsx)(n.code,{children:`.gap-none`}),` This useful for removing a default gap. Especially useful for the `,(0,x.jsx)(n.a,{href:`?path=/docs/utilities-advanced-cluster--docs`,children:`Advanced Utilities`}),` which have a default gap of `,(0,x.jsx)(n.code,{children:`--op-space-medium`}),`.`]}),`
`,(0,x.jsx)(a,{of:_})]})}function b(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,x.jsx)(n,{...e,children:(0,x.jsx)(y,{...e})}):y(e)}var x;function S(){return(S=e((()=>{x=r(),n(),s(),p(),c()})))()}S();export{b as default};