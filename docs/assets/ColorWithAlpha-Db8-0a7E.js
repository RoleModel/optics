import{j as o}from"./jsx-runtime-Dg9bET0P.js";import{u as t}from"./index-D7Bm3_Nu.js";import{M as i}from"./index-PO1Lv8VS.js";import"./index-D1Me9FRp.js";import{c as r}from"./Alert-BuDoz_3e.js";import"./iframe-BXlyiofO.js";import"../sb-preview/runtime.js";import"./index-B5rfWaSj.js";import"./index-DrFu-skq.js";import"./Button-NTR86KUp.js";import"./Icon-D9QrNi_D.js";function n(a){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...t(),...a.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{title:"Tokens/Color/Color with Alpha"}),`
`,o.jsx(e.h1,{id:"color-with-alpha",children:"Color With Alpha"}),`
`,o.jsx("div",{dangerouslySetInnerHTML:{__html:r({title:"Caution",icon:"priority_high",description:"Using alpha will impact Accessibility and if misused can also impact performance. Use these suggestions with caution and verify the resulting colors pass Accessibility standards!",iconDocsClassFix:"sb-unstyled"}).outerHTML}}),`
`,o.jsx(e.p,{children:"There may be a case where you need to use the alpha channel in a color. This can be useful for creating more opaque or transparent looks built directly into a color instead of using the opacity property."}),`
`,o.jsx(e.p,{children:"Since colors are based on a scale and provided as tokens, the alpha channel cannot be used directly. There are a few ways to take advantage of it though!"}),`
`,o.jsx(e.h2,{id:"alpha-tokens",children:"Alpha Tokens"}),`
`,o.jsx(e.p,{children:"One option for adding alpha support is to define alpha tokens that can sit alongside the color scale steps. This allows for use across your system in a way that matches the system."}),`
`,o.jsx(e.pre,{children:o.jsx(e.code,{className:"language-css",children:`// Note the 40% luminoisty matches the --op-color-primary-base luminosity
// Note the 100% luminoisty matches the --op-color-primary-on-base luminosity
// Note the 88% luminoisty matches the --op-color-primary-on-base-alt luminosity

--op-color-primary-base-alpha-40: hsl(var(--op-color-primary-h) var(--op-color-primary-s) 40% / 40%);
--op-color-primary-on-base-alpha-40: hsl(var(--op-color-primary-h) var(--op-color-primary-s) 100% / 40%);
--op-color-primary-on-base-alt-alpha-40: hsl(var(--op-color-primary-h) var(--op-color-primary-s) 88% / 40%);
`})}),`
`,o.jsx(e.p,{children:"The downside of this approach is that it can be difficult to manage and can lead to a lot of tokens. It also requires a lot of manual work to create the tokens and keep them in sync with the color scale."}),`
`,o.jsx(e.h2,{id:"color-mix",children:"Color Mix"}),`
`,o.jsx("div",{dangerouslySetInnerHTML:{__html:r({title:"Benefits of this approach",icon:"info",warningLevel:"info",description:`
        <div>1. It can be used at the component level for specific use cases, or globally if you want it available at a higher level.</div>
        <div>2. It is tied directly to the color scale and will update if the scale if overridden. It does not duplicate luminosity values.</div>
      `,iconDocsClassFix:"sb-unstyled"}).outerHTML}}),`
`,o.jsxs(e.p,{children:["Another option is to use the ",o.jsx(e.code,{children:"color-mix"})," (see ",o.jsx(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/color-mix",rel:"nofollow",children:"color-mix()"}),") to create a new color with the alpha channel. This allows for more dynamic use of the alpha channel and can be used to create a new color on the fly or at the component level."]}),`
`,o.jsx(e.pre,{children:o.jsx(e.code,{className:"language-css",children:`%my-component-global {
  --_op-my-component-opacity-disabled: calc(var(--op-opacity-disabled) * 100%); // converts 0.4 to 40%

  --op-my-component-background-color: color-mix(in srgv, var(--op-color-primary-base) var(--_op-thing-opacity-disabled), var(--op-color-primary-plus-max));
  --op-my-component-color: color-mix(in srgv, var(--op-color-primary-on-base) var(--_op-thing-opacity-disabled), var(--op-color-primary-plus-max));
  --op-my-component-color-alt: color-mix(in srgv, var(--op-color-primary-on-base-alt) var(--_op-thing-opacity-disabled), var(--op-color-primary-plus-max));

  background-color: var(--op-my-component-background-color);
  color: var(--op-my-component-color);
}
`})})]})}function x(a={}){const{wrapper:e}={...t(),...a.components};return e?o.jsx(e,{...a,children:o.jsx(n,{...a})}):n(a)}export{x as default};
