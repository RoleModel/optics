import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{i as t}from"./react-CaHZDgIm.js";import{s as n}from"./chunk-LITCR56V-BxXRPQK8.js";import{l as r,u as i}from"./blocks-nNA0HiVS.js";import{t as a}from"./mdx-react-shim-DIeO1dVO.js";import{n as o,t as s}from"./Alert-xuHYkKjH.js";import{t as c}from"./dist-BKQkcKo8.js";function l(e){let n={a:`a`,code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...t(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r,{title:`Tokens/Color/Color with Alpha`}),`
`,(0,d.jsx)(n.h1,{id:`color-with-alpha`,children:`Color With Alpha`}),`
`,(0,d.jsx)(`div`,{dangerouslySetInnerHTML:{__html:s({title:`Caution`,icon:`priority_high`,description:`Using alpha will impact Accessibility and if misused can also impact performance. Use these suggestions with caution and verify the resulting colors pass Accessibility standards!`,iconDocsClassFix:`sb-unstyled`}).outerHTML}}),`
`,(0,d.jsx)(n.p,{children:`There may be a case where you need to use the alpha channel in a color. This can be useful for creating more opaque or transparent looks built directly into a color instead of using the opacity property.`}),`
`,(0,d.jsx)(n.p,{children:`Since colors are based on a scale and provided as tokens, the alpha channel cannot be used directly. There are a few ways to take advantage of it though!`}),`
`,(0,d.jsx)(n.h2,{id:`alpha-tokens`,children:`Alpha Tokens`}),`
`,(0,d.jsx)(n.p,{children:`One option for adding alpha support is to define alpha tokens that can sit alongside the color scale steps. This allows for use across your system in a way that matches the system.`}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:`language-css`,children:`/*
  Note the 40% luminoisty matches the --op-color-primary-base luminosity
  Note the 100% luminoisty matches the --op-color-primary-on-base luminosity
  Note the 88% luminoisty matches the --op-color-primary-on-base-alt luminosity
*/

--op-color-primary-base-alpha-40: hsl(var(--op-color-primary-h) var(--op-color-primary-s) 40% / 40%);
--op-color-primary-on-base-alpha-40: hsl(var(--op-color-primary-h) var(--op-color-primary-s) 100% / 40%);
--op-color-primary-on-base-alt-alpha-40: hsl(var(--op-color-primary-h) var(--op-color-primary-s) 88% / 40%);
`})}),`
`,(0,d.jsx)(n.p,{children:`The downside of this approach is that it can be difficult to manage and can lead to a lot of tokens. It also requires a lot of manual work to create the tokens and keep them in sync with the color scale.`}),`
`,(0,d.jsx)(n.h2,{id:`color-mix`,children:`Color Mix`}),`
`,(0,d.jsx)(`div`,{dangerouslySetInnerHTML:{__html:s({title:`Benefits of this approach`,icon:`info`,warningLevel:`info`,description:`
      <div>1. It can be used at the component level for specific use cases, or globally if you want it available at a higher level.</div>
      <div>2. It is tied directly to the color scale and will update if the scale if overridden. It does not duplicate luminosity values.</div>
    `,iconDocsClassFix:`sb-unstyled`}).outerHTML}}),`
`,(0,d.jsxs)(n.p,{children:[`Another option is to use the `,(0,d.jsx)(n.code,{children:`color-mix`}),` (see `,(0,d.jsx)(n.a,{href:`https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/color-mix`,rel:`nofollow`,children:`color-mix()`}),`) to create a new color with the alpha channel. This allows for more dynamic use of the alpha channel and can be used to create a new color on the fly or at the component level.`]}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:`language-css`,children:`%my-component-global {
  --_op-my-component-opacity-disabled: calc(var(--op-opacity-disabled) * 100%); /* converts 0.4 to 40% */

  --op-my-component-background-color: color-mix(
    in srgv,
    var(--op-color-primary-base) var(--_op-thing-opacity-disabled),
    var(--op-color-primary-plus-max)
  );
  --op-my-component-color: color-mix(
    in srgv,
    var(--op-color-primary-on-base) var(--_op-thing-opacity-disabled),
    var(--op-color-primary-plus-max)
  );
  --op-my-component-color-alt: color-mix(
    in srgv,
    var(--op-color-primary-on-base-alt) var(--_op-thing-opacity-disabled),
    var(--op-color-primary-plus-max)
  );

  background-color: var(--op-my-component-background-color);
  color: var(--op-my-component-color);
}
`})})]})}function u(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;e((()=>{d=n(),a(),i(),c(),o()}))();export{u as default};