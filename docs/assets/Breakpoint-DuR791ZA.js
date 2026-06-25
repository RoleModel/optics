import{i as e}from"./preload-helper-xPQekRTU.js";import{T as t,l as n,u as r}from"./blocks-uVOOWdqL.js";import{s as i}from"./chunk-LITCR56V-BmCoDI8n.js";import{t as a}from"./mdx-react-shim-eO_HyXU9.js";import{n as o,t as s}from"./sourceCodeLink-D2TI9VYO.js";import{n as c,t as l}from"./dist-sKrGbkLk.js";function u(e){let r={a:`a`,code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...t(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(n,{title:`Tokens/Breakpoint`}),`
`,(0,f.jsx)(r.h1,{id:`breakpoint`,children:`Breakpoint`}),`
`,(0,f.jsx)(`div`,{dangerouslySetInnerHTML:{__html:s({link:`core/tokens/base_tokens.css`}).outerHTML}}),`
`,(0,f.jsx)(r.p,{children:`Breakpoint tokens are used to define common device sizes for use within media queries or max widths.`}),`
`,(0,f.jsx)(r.p,{children:`They are implemented in two ways. First as CSS custom properties (css variables) and second as guided pixel assignments.`}),`
`,(0,f.jsx)(r.p,{children:`The CSS variables can be used like any of the other tokens for things requiring calculations or max widths.`}),`
`,(0,f.jsx)(r.p,{children:`The guided pixel assignments can be used for media queries.`}),`
`,(0,f.jsxs)(r.p,{children:[`Custom properties (css variables) currently cannot be used in a media query since they get defined in an element scope (`,(0,f.jsx)(r.code,{children:`:root`}),` in our case).
Media queries exist at the document level and therefore cannot access custom properties.`]}),`
`,(0,f.jsxs)(r.p,{children:[(0,f.jsx)(r.a,{href:`https://drafts.csswg.org/css-env-1/`,rel:`nofollow`,children:`CSS ENV Variables`}),` aims at addressing this by allowing variables at the global document level.`]}),`
`,(0,f.jsxs)(r.p,{children:[`For common breakpoints, define the variables in the `,(0,f.jsx)(r.code,{children:`:root`}),` as a comment block. When using them, use the pixel value, but include a comment above with the named breakpoint. This makes it searchable and provide a bit of intention to what the value means.`]}),`
`,(0,f.jsx)(r.h2,{id:`usage`,children:`Usage`}),`
`,(0,f.jsx)(r.p,{children:`These token values can be applied in a media query to create responsive behavior.`}),`
`,(0,f.jsx)(r.pre,{children:(0,f.jsx)(r.code,{className:`language-css`,children:`.small-area {
  max-inline-size: var(--op-breakpoint-small);
}

:root {
  /*
  Breakpoints
  These breakpoint values will be used as a guide for media queries.
  Annotate the uses with a comment above referring to the variable being referenced.

  --op-breakpoint-medium: 1024px;
  ...
  */
}

/* --op-breakpoint-medium */
@media (width > 1024px) {
  background-color: var(--op-color-primary-base);
  color: var(--op-color-primary-on-base);
}
`})}),`
`,(0,f.jsx)(r.h2,{id:`available-tokens-and-their-definitions`,children:`Available tokens and their definitions`}),`
`,(0,f.jsx)(c,{categoryName:`Breakpoints`,viewType:`card`})]})}function d(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,f.jsx)(n,{...e,children:(0,f.jsx)(u,{...e})}):u(e)}var f;e((()=>{f=i(),a(),r(),o(),l()}))();export{d as default};