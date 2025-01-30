import{j as e}from"./jsx-runtime-E9NyL7ZE.js";import{u as s}from"./index-DZ-dxXhw.js";import{M as a}from"./index-CKTeridz.js";import"./iframe-Cw5OhXyt.js";import"../sb-preview/runtime.js";import"./index-B5rfWaSj.js";import"./index-DrFu-skq.js";function n(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...s(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Overview/Scale Overriding"}),`
`,e.jsx(o.h1,{id:"scale-overriding",children:"Scale Overriding"}),`
`,e.jsx(o.p,{children:'There are multiple scales in Optics. Unit Scales exist to allow adjusting font and spacing values. Color Scales exist to provide semantically named color variables with corresponding "on" values that strive to maintain contrast when used on an element with the matching color.'}),`
`,e.jsx(o.h2,{id:"unit-scale-overriding",children:"Unit Scale Overriding"}),`
`,e.jsxs(o.p,{children:["A Unit Scale is defined for both font sizes and spacing variables. All values are multiplied by their respective units which default as ",e.jsx(o.code,{children:"1rem"})," (equivalent to ",e.jsx(o.code,{children:"10px"}),")"]}),`
`,e.jsxs(o.p,{children:["If you want to change the font or spacing scale globally, or within the context of a specific component, you can't just set the ",e.jsx(o.code,{children:"--op-space-scale-unit"})," because the CSS variables for the scale are already computed and won't be re-computed when you set the scale unit. You can force it to re-compute by redefining the scale. This is why each set of tokens is defined in a scss mixin. ",e.jsx(o.code,{children:"card--condensed"})," is a great example of how to do this."]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-css",children:`.card--condensed {
  @include spacing-scales;
  --op-space-scale-unit: 0.5rem;
}
`})}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-css",children:`.font--condensed {
  @include font-scales;
  --op-font-scale-unit: 0.5rem;
}
`})}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-css",children:`.size--condensed {
  @include size-scales;
  --op-size-unit: 0.2rem;
}
`})}),`
`,e.jsx(o.h2,{id:"color-scale-overriding",children:"Color Scale Overriding"}),`
`,e.jsx(o.p,{children:"There are multiple reasons your application may need to override the provided color scales. You may set a primary color that doesn't work well with the default semantic color scale provided. Your design may want to stray from the present plus or minus stops."}),`
`,e.jsx(o.p,{children:"Regardless of the reason, you can customize and override each scale like the following example:"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-css",children:`@mixin color-varieties {
  --op-color-primary-h: 164;
  --op-color-primary-s: 100%;
  --op-color-primary-l: 50%;
}

@mixin primary-semantic-scale-overrides {
  // Main Scale
  --op-color-primary-plus-two: hsl(var(--op-color-primary-h) var(--op-color-primary-s) 49%);
  --op-color-primary-plus-one: hsl(var(--op-color-primary-h) var(--op-color-primary-s) 43%);
  // On Scale
  --op-color-primary-on-plus-two: hsl(var(--op-color-primary-h) var(--op-color-primary-s) 15%);
  --op-color-primary-on-plus-two-alt: hsl(var(--op-color-primary-h) var(--op-color-primary-s) 5%);
  --op-color-primary-on-plus-one: var(--op-color-white);
  --op-color-primary-on-plus-one-alt: hsl(var(--op-color-primary-h) var(--op-color-primary-s) 92%);
}

:root {
  @include primary-semantic-scale-overrides;
}
`})}),`
`,e.jsx(o.p,{children:"You can override as many or as few variables or scales as your application needs."})]})}function m(r={}){const{wrapper:o}={...s(),...r.components};return o?e.jsx(o,{...r,children:e.jsx(n,{...r})}):n(r)}export{m as default};
