import{j as e}from"./jsx-runtime-D1z_Vvnr.js";import{u as a}from"./index-BFPIpyId.js";import{M as l,C as r,d as c}from"./index-BvePYX9_.js";import{S as p,D as i,X as d,a as h,M as m,L as x}from"./Spinner.stories-DdEqbTH1.js";import{c as j}from"./sourceCodeLink-Chh3FteF.js";import{c as o}from"./Alert-93ao7bSE.js";import"./iframe-B44qDirV.js";import"../sb-preview/runtime.js";import"./index-B5rfWaSj.js";import"./index-DrFu-skq.js";import"./Spinner-ypR4bq0p.js";import"./Button-CoyIamir.js";import"./Icon-D9QrNi_D.js";function t(s){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...a(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:p}),`
`,e.jsx(n.h1,{id:"spinner",children:"Spinner"}),`
`,e.jsx("div",{dangerouslySetInnerHTML:{__html:j({link:"components/spinner.scss"}).outerHTML}}),`
`,e.jsx(n.p,{children:"Spinners are CSS loading indicators that should be shown when retrieving data or performing slow computations."}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.p,{children:["A spinner should have the Aria ",e.jsx(n.code,{children:'role="status"'})," and contain assistive text that explains what is currently happening. Inserting a ",e.jsx(n.code,{children:"span.assistive-invisible Loading"})," which then gets hidden is the preferred method for adding this accessibility feature."]}),`
`,e.jsx(n.h2,{id:"playground",children:"Playground"}),`
`,e.jsx(r,{of:i}),`
`,e.jsx(c,{of:i}),`
`,e.jsx(n.h3,{id:"selective-imports",children:"Selective Imports"}),`
`,e.jsxs(n.p,{children:["Spinner can be used as a standalone component, however, it does have a few dependencies. To see a full dependency list, see ",e.jsx(n.a,{href:"?path=/docs/overview-selective-imports--docs#dependencies",children:"Dependency Graph"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`// Depends on
@import '@rolemodel/optics/dist/scss/core/tokens';
@import '@rolemodel/optics/dist/scss/core/base';

// Component
@import '@rolemodel/optics/dist/scss/components/spinner';
`})}),`
`,e.jsx(n.h2,{id:"variations",children:"Variations"}),`
`,e.jsx(n.h3,{id:"default",children:"Default"}),`
`,e.jsxs(n.p,{children:["Use ",e.jsx(n.code,{children:".spinner"})," to create the default spinner class which defaults to the ",e.jsx(n.code,{children:".spinner--large"})," size."]}),`
`,e.jsx(r,{of:i}),`
`,e.jsx(n.h3,{id:"x-small",children:"X-Small"}),`
`,e.jsxs(n.p,{children:["Use ",e.jsx(n.code,{children:".spinner.spinner--x-small"})," to create an x-small spinner."]}),`
`,e.jsx(r,{of:d}),`
`,e.jsx(n.h3,{id:"small",children:"Small"}),`
`,e.jsxs(n.p,{children:["Use ",e.jsx(n.code,{children:".spinner.spinner--small"})," to create a small spinner."]}),`
`,e.jsx(r,{of:h}),`
`,e.jsx(n.h3,{id:"medium",children:"Medium"}),`
`,e.jsxs(n.p,{children:["Use ",e.jsx(n.code,{children:".spinner.spinner--medium"})," to create a medium spinner."]}),`
`,e.jsx(r,{of:m}),`
`,e.jsx(n.h3,{id:"large",children:"Large"}),`
`,e.jsxs(n.p,{children:["Use ",e.jsx(n.code,{children:".spinner.spinner--large"})," to create a large spinner."]}),`
`,e.jsx(r,{of:x}),`
`,e.jsx(n.h2,{id:"spinner-api",children:"Spinner API"}),`
`,e.jsx(n.p,{children:"Styles are built on CSS variables scoped to the spinner."}),`
`,e.jsx(n.p,{children:"Here are the variables that can be customized:"}),`
`,`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`  --_op-spinner-indicator-color
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
`,e.jsx(n.h2,{id:"customizing-spinner-styles",children:"Customizing Spinner styles"}),`
`,e.jsx("div",{dangerouslySetInnerHTML:{__html:o({title:"Important!",description:"These patterns represent how to customize the style of the spinner for your project."}).outerHTML}}),`
`,e.jsxs(n.p,{children:["The spinner classes are built on a ",e.jsx(n.a,{href:"https://sass-lang.com/documentation/style-rules/placeholder-selectors",rel:"nofollow",children:"SASS placeholder selector"})]}),`
`,e.jsxs(n.p,{children:["This allows multiple classes to share the same behavior. You can modify all spinner behavior by overriding the ",e.jsx(n.code,{children:"%spinner-global"})," placeholder selector and setting any properties:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`%spinner-global {
}
`})}),`
`,e.jsx(n.p,{children:"If you need to override the behavior of a particular spinner style, you can open the respective class and set or change properties:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`.spinner {
  @extend %spinner-global;

  --_op-spinner-track-color: var(--op-color-primary-minus-three);
}
`})}),`
`,e.jsx(n.h2,{id:"new-spinner-variations",children:"New Spinner Variations"}),`
`,e.jsx("div",{dangerouslySetInnerHTML:{__html:o({title:"Important!",description:"These patterns represent how to create new variations of the Spinner for your project."}).outerHTML}}),`
`,e.jsx(n.p,{children:"Your application may need a custom spinner. To add one, just follow this template:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`.spinner-{name} {
  @extend %spinner-global;

  --_op-spinner-indicator-color: red;
  --_op-spinner-track-color: purple;
}
`})})]})}function k(s={}){const{wrapper:n}={...a(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{k as default};
