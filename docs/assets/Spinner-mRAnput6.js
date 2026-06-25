import{i as e}from"./preload-helper-xPQekRTU.js";import{T as t,l as n,n as r,o as i,u as a}from"./blocks-uVOOWdqL.js";import{s as o}from"./chunk-LITCR56V-BmCoDI8n.js";import{t as s}from"./mdx-react-shim-eO_HyXU9.js";import{n as c,t as l}from"./sourceCodeLink-D2TI9VYO.js";import{n as u,t as d}from"./Alert-BSNiXkFA.js";import{Default as f,Large as p,Medium as m,Small as h,XSmall as g,n as _,t as v}from"./Spinner.stories-BBeeoQhI.js";function y(e){let a={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,...t(),...e.components};return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(n,{of:v}),`
`,(0,x.jsx)(a.h1,{id:`spinner`,children:`Spinner`}),`
`,(0,x.jsx)(`div`,{dangerouslySetInnerHTML:{__html:l({link:`components/spinner.css`}).outerHTML}}),`
`,(0,x.jsx)(a.p,{children:`Spinners are CSS loading indicators that should be shown when retrieving data or performing slow computations.`}),`
`,(0,x.jsx)(a.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,x.jsxs)(a.p,{children:[`A spinner should have the Aria `,(0,x.jsx)(a.code,{children:`role="status"`}),` and contain assistive text that explains what is currently happening. Inserting a `,(0,x.jsx)(a.code,{children:`span.assistive-invisible Loading`}),` which then gets hidden is the preferred method for adding this accessibility feature.`]}),`
`,(0,x.jsx)(a.h2,{id:`playground`,children:`Playground`}),`
`,(0,x.jsx)(r,{of:f}),`
`,(0,x.jsx)(i,{of:f}),`
`,(0,x.jsx)(a.h3,{id:`selective-imports`,children:`Selective Imports`}),`
`,(0,x.jsxs)(a.p,{children:[`Spinner can be used as a standalone component, however, it does have a few dependencies. To see a full dependency list, see `,(0,x.jsx)(a.a,{href:`?path=/docs/overview-selective-imports--docs#dependencies`,children:`Dependency Graph`})]}),`
`,(0,x.jsx)(a.pre,{children:(0,x.jsx)(a.code,{className:`language-css`,children:`/* Depends on */
@import '@rolemodel/optics/dist/css/core/fonts';
@import '@rolemodel/optics/dist/css/core/tokens';
@import '@rolemodel/optics/dist/css/core/base';

/* Component */
@import '@rolemodel/optics/dist/css/components/spinner';
`})}),`
`,(0,x.jsx)(a.h2,{id:`variations`,children:`Variations`}),`
`,(0,x.jsx)(a.h3,{id:`default`,children:`Default`}),`
`,(0,x.jsxs)(a.p,{children:[`Use `,(0,x.jsx)(a.code,{children:`.spinner`}),` to create the default spinner class which defaults to the `,(0,x.jsx)(a.code,{children:`.spinner--large`}),` size.`]}),`
`,(0,x.jsx)(r,{of:f}),`
`,(0,x.jsx)(a.h3,{id:`x-small`,children:`X-Small`}),`
`,(0,x.jsxs)(a.p,{children:[`Use `,(0,x.jsx)(a.code,{children:`.spinner.spinner--x-small`}),` to create an x-small spinner.`]}),`
`,(0,x.jsx)(r,{of:g}),`
`,(0,x.jsx)(a.h3,{id:`small`,children:`Small`}),`
`,(0,x.jsxs)(a.p,{children:[`Use `,(0,x.jsx)(a.code,{children:`.spinner.spinner--small`}),` to create a small spinner.`]}),`
`,(0,x.jsx)(r,{of:h}),`
`,(0,x.jsx)(a.h3,{id:`medium`,children:`Medium`}),`
`,(0,x.jsxs)(a.p,{children:[`Use `,(0,x.jsx)(a.code,{children:`.spinner.spinner--medium`}),` to create a medium spinner.`]}),`
`,(0,x.jsx)(r,{of:m}),`
`,(0,x.jsx)(a.h3,{id:`large`,children:`Large`}),`
`,(0,x.jsxs)(a.p,{children:[`Use `,(0,x.jsx)(a.code,{children:`.spinner.spinner--large`}),` to create a large spinner.`]}),`
`,(0,x.jsx)(r,{of:p}),`
`,(0,x.jsx)(a.h2,{id:`spinner-api`,children:`Spinner API`}),`
`,(0,x.jsx)(a.p,{children:`Styles are built on CSS variables scoped to the spinner.`}),`
`,(0,x.jsx)(a.p,{children:`Here are the variables that can be customized:`}),`
`,`
`,(0,x.jsx)(a.pre,{children:(0,x.jsx)(a.code,{className:`language-css`,children:`  --_op-spinner-indicator-color
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
`,(0,x.jsx)(a.h2,{id:`customizing-spinner-styles`,children:`Customizing Spinner styles`}),`
`,(0,x.jsx)(`div`,{dangerouslySetInnerHTML:{__html:d({title:`Important!`,description:`These patterns represent how to customize the style of the spinner for your project.`}).outerHTML}}),`
`,(0,x.jsxs)(a.p,{children:[`The spinner classes are structured using the `,(0,x.jsx)(a.a,{href:`https://getbem.com/naming`,rel:`nofollow`,children:`BEM methodology`}),`.`]}),`
`,(0,x.jsxs)(a.p,{children:[`This allows us to define core styles on a main `,(0,x.jsx)(a.a,{href:`https://getbem.com/naming/#block`,rel:`nofollow`,children:`block`}),` class, and use `,(0,x.jsx)(a.a,{href:`https://getbem.com/naming/#modifier`,rel:`nofollow`,children:`modifiers`}),` to encapsulate variant styles. You can modify all spinner behavior by overriding the `,(0,x.jsx)(a.code,{children:`.spinner`}),` selector and setting any properties:`]}),`
`,(0,x.jsx)(a.pre,{children:(0,x.jsx)(a.code,{className:`language-css`,children:`.spinner {
}
`})}),`
`,(0,x.jsx)(a.p,{children:`If you need to override the behavior of a particular spinner style, you can open the respective class and set or change properties:`}),`
`,(0,x.jsx)(a.pre,{children:(0,x.jsx)(a.code,{className:`language-css`,children:`.spinner--modifier {
  --_op-spinner-track-color: var(--op-color-primary-minus-three);
}
`})}),`
`,(0,x.jsx)(a.h2,{id:`new-spinner-variations`,children:`New Spinner Variations`}),`
`,(0,x.jsx)(`div`,{dangerouslySetInnerHTML:{__html:d({title:`Important!`,description:`These patterns represent how to create new variations of the Spinner for your project.`}).outerHTML}}),`
`,(0,x.jsxs)(a.p,{children:[`Your application may need a variation. To add one, just follow this template. Note the double hyphen, indicating that this is a `,(0,x.jsx)(a.a,{href:`https://getbem.com/naming/#modifier`,rel:`nofollow`,children:`modifier`}),`:`]}),`
`,(0,x.jsx)(a.pre,{children:(0,x.jsx)(a.code,{className:`language-css`,children:`.spinner--{name} {
  --_op-spinner-indicator-color: red;
  --_op-spinner-track-color: purple;
}
`})})]})}function b(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,x.jsx)(n,{...e,children:(0,x.jsx)(y,{...e})}):y(e)}var x;e((()=>{x=o(),s(),a(),_(),c(),u()}))();export{b as default};