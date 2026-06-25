import{i as e}from"./preload-helper-xPQekRTU.js";import{T as t,l as n,u as r}from"./blocks-uVOOWdqL.js";import{s as i}from"./chunk-LITCR56V-BmCoDI8n.js";import{t as a}from"./mdx-react-shim-eO_HyXU9.js";import{n as o,t as s}from"./sourceCodeLink-D2TI9VYO.js";import{n as c,t as l}from"./dist-sKrGbkLk.js";function u(e){let r={a:`a`,code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,strong:`strong`,...t(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(n,{title:`Tokens/Border/Border Stroke`}),`
`,(0,f.jsx)(r.h1,{id:`border-stroke`,children:`Border Stroke`}),`
`,(0,f.jsx)(`div`,{dangerouslySetInnerHTML:{__html:s({link:`core/tokens/base_tokens.css`}).outerHTML}}),`
`,(0,f.jsxs)(r.p,{children:[`Border tokens can be used as box shadows to add borders to various elements. Box Shadows are used in order to provide border styling without affecting the sizing of elements.
These can be composed with other box shadows such as `,(0,f.jsx)(r.a,{href:`?path=/docs/tokens-shadow--page`,children:`Shadow`}),` to stack effects.`]}),`
`,(0,f.jsx)(r.h2,{id:`usage`,children:`Usage`}),`
`,(0,f.jsx)(r.p,{children:`These tokens can be applied as a box shadow with any color you wish.`}),`
`,(0,f.jsx)(r.pre,{children:(0,f.jsx)(r.code,{className:`language-css`,children:`box-shadow: var(--op-border-all) var(--op-color-border);
/* or */
box-shadow: var(--op-border-left) var(--op-color-primary-base);
`})}),`
`,(0,f.jsx)(r.h2,{id:`inset`,children:`Inset`}),`
`,(0,f.jsxs)(r.p,{children:[(0,f.jsx)(r.code,{children:`inset`}),` can be prefixed to invert a border.`]}),`
`,(0,f.jsx)(r.pre,{children:(0,f.jsx)(r.code,{className:`language-css`,children:`box-shadow: inset var(--op-border-all) var(--op-color-border);
/* or */
box-shadow: inset var(--op-border-left) var(--op-color-primary-base);
`})}),`
`,(0,f.jsx)(r.p,{children:`Due to how box shadows are implemented, insetting can cause seemingly strange behavior.`}),`
`,(0,f.jsx)(r.p,{children:`Insetting a left border will move it to the right, and insetting a top border will move it to the bottom. The same applies for right and bottom.`}),`
`,(0,f.jsxs)(r.p,{children:[`Insetting the x and y borders is currently `,(0,f.jsx)(r.strong,{children:`not supported`}),`. You can achieve this manually, but it requires defining the box shadow yourself.`]}),`
`,(0,f.jsx)(r.h2,{id:`available-tokens-and-their-definitions`,children:`Available tokens and their definitions`}),`
`,(0,f.jsx)(c,{categoryName:`Border Shadow`,viewType:`card`})]})}function d(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,f.jsx)(n,{...e,children:(0,f.jsx)(u,{...e})}):u(e)}var f;e((()=>{f=i(),a(),r(),o(),l()}))();export{d as default};