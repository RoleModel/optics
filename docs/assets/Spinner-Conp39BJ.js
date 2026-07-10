import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{i as t}from"./react-CaHZDgIm.js";import{s as n}from"./chunk-LITCR56V-BxXRPQK8.js";import{l as r,n as i,o as a,u as o}from"./blocks-nNA0HiVS.js";import{t as s}from"./mdx-react-shim-DIeO1dVO.js";import{n as c,t as l}from"./sourceCodeLink-C1o55bv0.js";import{n as u,t as d}from"./Alert-xuHYkKjH.js";import{Default as f,Large as p,Medium as m,Small as h,XSmall as g,n as _,t as v}from"./Spinner.stories-Cdzr-vHI.js";function y(e){let n={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,...t(),...e.components};return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(r,{of:v}),`
`,(0,x.jsx)(n.h1,{id:`spinner`,children:`Spinner`}),`
`,(0,x.jsx)(`div`,{dangerouslySetInnerHTML:{__html:l({link:`components/spinner.css`}).outerHTML}}),`
`,(0,x.jsx)(n.p,{children:`Spinners are CSS loading indicators that should be shown when retrieving data or performing slow computations.`}),`
`,(0,x.jsx)(n.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,x.jsxs)(n.p,{children:[`A spinner should have the Aria `,(0,x.jsx)(n.code,{children:`role="status"`}),` and contain assistive text that explains what is currently happening. Inserting a `,(0,x.jsx)(n.code,{children:`span.assistive-invisible Loading`}),` which then gets hidden is the preferred method for adding this accessibility feature.`]}),`
`,(0,x.jsx)(n.h2,{id:`playground`,children:`Playground`}),`
`,(0,x.jsx)(i,{of:f}),`
`,(0,x.jsx)(a,{of:f}),`
`,(0,x.jsx)(n.h3,{id:`selective-imports`,children:`Selective Imports`}),`
`,(0,x.jsxs)(n.p,{children:[`Spinner can be used as a standalone component, however, it does have a few dependencies. To see a full dependency list, see `,(0,x.jsx)(n.a,{href:`?path=/docs/overview-selective-imports--docs#dependencies`,children:`Dependency Graph`})]}),`
`,(0,x.jsx)(n.pre,{children:(0,x.jsx)(n.code,{className:`language-css`,children:`/* Depends on */
@import '@rolemodel/optics/dist/css/core/fonts';
@import '@rolemodel/optics/dist/css/core/tokens';
@import '@rolemodel/optics/dist/css/core/base';

/* Component */
@import '@rolemodel/optics/dist/css/components/spinner';
`})}),`
`,(0,x.jsx)(n.h2,{id:`variations`,children:`Variations`}),`
`,(0,x.jsx)(n.h3,{id:`default`,children:`Default`}),`
`,(0,x.jsxs)(n.p,{children:[`Use `,(0,x.jsx)(n.code,{children:`.spinner`}),` to create the default spinner class which defaults to the `,(0,x.jsx)(n.code,{children:`.spinner--large`}),` size.`]}),`
`,(0,x.jsx)(i,{of:f}),`
`,(0,x.jsx)(n.h3,{id:`x-small`,children:`X-Small`}),`
`,(0,x.jsxs)(n.p,{children:[`Use `,(0,x.jsx)(n.code,{children:`.spinner.spinner--x-small`}),` to create an x-small spinner.`]}),`
`,(0,x.jsx)(i,{of:g}),`
`,(0,x.jsx)(n.h3,{id:`small`,children:`Small`}),`
`,(0,x.jsxs)(n.p,{children:[`Use `,(0,x.jsx)(n.code,{children:`.spinner.spinner--small`}),` to create a small spinner.`]}),`
`,(0,x.jsx)(i,{of:h}),`
`,(0,x.jsx)(n.h3,{id:`medium`,children:`Medium`}),`
`,(0,x.jsxs)(n.p,{children:[`Use `,(0,x.jsx)(n.code,{children:`.spinner.spinner--medium`}),` to create a medium spinner.`]}),`
`,(0,x.jsx)(i,{of:m}),`
`,(0,x.jsx)(n.h3,{id:`large`,children:`Large`}),`
`,(0,x.jsxs)(n.p,{children:[`Use `,(0,x.jsx)(n.code,{children:`.spinner.spinner--large`}),` to create a large spinner.`]}),`
`,(0,x.jsx)(i,{of:p}),`
`,(0,x.jsx)(n.h2,{id:`spinner-api`,children:`Spinner API`}),`
`,(0,x.jsx)(n.p,{children:`Styles are built on CSS variables scoped to the spinner.`}),`
`,(0,x.jsx)(n.p,{children:`Here are the variables that can be customized:`}),`
`,`
`,(0,x.jsx)(n.pre,{children:(0,x.jsx)(n.code,{className:`language-css`,children:`  --_op-spinner-indicator-color
  --_op-spinner-track-color
  --_op-spinner-track-width-x-small
  --_op-spinner-track-width-small
  --_op-spinner-track-width-medium
  --_op-spinner-track-width-large
  --_op-spinner-diameter-x-small
  --_op-spinner-diameter-small
  --_op-spinner-diameter-medium
  --_op-spinner-diameter-large
  --_op-spinner-animation-duration
  --_op-spinner-animation-timing-function
`})}),`
`,`
`,(0,x.jsx)(n.h2,{id:`customizing-spinner-styles`,children:`Customizing Spinner styles`}),`
`,(0,x.jsx)(`div`,{dangerouslySetInnerHTML:{__html:d({title:`Important!`,description:`These patterns represent how to customize the style of the spinner for your project.`}).outerHTML}}),`
`,(0,x.jsxs)(n.p,{children:[`The spinner classes are structured using the `,(0,x.jsx)(n.a,{href:`https://getbem.com/naming`,rel:`nofollow`,children:`BEM methodology`}),`.`]}),`
`,(0,x.jsxs)(n.p,{children:[`This allows us to define core styles on a main `,(0,x.jsx)(n.a,{href:`https://getbem.com/naming/#block`,rel:`nofollow`,children:`block`}),` class, and use `,(0,x.jsx)(n.a,{href:`https://getbem.com/naming/#modifier`,rel:`nofollow`,children:`modifiers`}),` to encapsulate variant styles. You can modify all spinner behavior by overriding the `,(0,x.jsx)(n.code,{children:`.spinner`}),` selector and setting any properties:`]}),`
`,(0,x.jsx)(n.pre,{children:(0,x.jsx)(n.code,{className:`language-css`,children:`.spinner {
}
`})}),`
`,(0,x.jsx)(n.p,{children:`If you need to override the behavior of a particular spinner style, you can open the respective class and set or change properties:`}),`
`,(0,x.jsx)(n.pre,{children:(0,x.jsx)(n.code,{className:`language-css`,children:`.spinner--modifier {
  --_op-spinner-track-color: var(--op-color-primary-minus-three);
}
`})}),`
`,(0,x.jsx)(n.h2,{id:`new-spinner-variations`,children:`New Spinner Variations`}),`
`,(0,x.jsx)(`div`,{dangerouslySetInnerHTML:{__html:d({title:`Important!`,description:`These patterns represent how to create new variations of the Spinner for your project.`}).outerHTML}}),`
`,(0,x.jsxs)(n.p,{children:[`Your application may need a variation. To add one, just follow this template. Note the double hyphen, indicating that this is a `,(0,x.jsx)(n.a,{href:`https://getbem.com/naming/#modifier`,rel:`nofollow`,children:`modifier`}),`:`]}),`
`,(0,x.jsx)(n.pre,{children:(0,x.jsx)(n.code,{className:`language-css`,children:`.spinner--{name} {
  --_op-spinner-indicator-color: red;
  --_op-spinner-track-color: purple;
}
`})})]})}function b(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,x.jsx)(n,{...e,children:(0,x.jsx)(y,{...e})}):y(e)}var x;e((()=>{x=n(),s(),o(),_(),c(),u()}))();export{b as default};