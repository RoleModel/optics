import{j as r}from"./jsx-runtime-DGhn8jkz.js";import{u as a}from"./index-BSTJ9CkC.js";import{M as l}from"./index-BL4nfc20.js";import"./iframe-B_OOKKxU.js";import"../sb-preview/runtime.js";import"./index-B5rfWaSj.js";import"./index-DrFu-skq.js";function n(e){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...a(),...e.components};return r.jsxs(r.Fragment,{children:[r.jsx(l,{title:"Overview/Scale Overriding"}),`
`,r.jsx(o.h1,{id:"scale-overriding",children:"Scale Overriding"}),`
`,r.jsx(o.p,{children:'There are multiple scales in Optics. Unit Scales exist to allow adjusting font and spacing values. Color Scales exist to provide semantically named color variables with corresponding "on" values that strive to maintain contrast when used on an element with the matching color.'}),`
`,r.jsx(o.h2,{id:"unit-scale-overriding",children:"Unit Scale Overriding"}),`
`,r.jsxs(o.p,{children:["A Unit Scale is defined for both font sizes and spacing variables. All values are multiplied by their respective units which default as ",r.jsx(o.code,{children:"1rem"})," (equivalent to ",r.jsx(o.code,{children:"10px"}),")"]}),`
`,r.jsxs(o.p,{children:["If you want to change the font or spacing scale globally, or within the context of a specific component, you can set the ",r.jsx(o.code,{children:"--op-space-scale-unit"})," in the ",r.jsx(o.code,{children:":root"}),"."]}),`
`,r.jsx(o.pre,{children:r.jsx(o.code,{className:"language-css",children:`:root {
  --op-space-scale-unit: 0.5rem;
}
`})}),`
`,r.jsx(o.pre,{children:r.jsx(o.code,{className:"language-css",children:`:root {
  --op-font-scale-unit: 0.5rem;
}
`})}),`
`,r.jsx(o.pre,{children:r.jsx(o.code,{className:"language-css",children:`:root {
  --op-size-unit: 0.2rem;
}
`})}),`
`,r.jsx(o.h2,{id:"color-scale-overriding",children:"Color Scale Overriding"}),`
`,r.jsx(o.p,{children:"There are multiple reasons your application may need to override the provided color scales. You may set a primary color that doesn't work well with the default semantic color scale provided. Your design may want to stray from the present plus or minus stops."}),`
`,r.jsx(o.p,{children:"Regardless of the reason, you can customize and override each scale like the following example:"}),`
`,r.jsx(o.pre,{children:r.jsx(o.code,{className:"language-css",children:`:root {
  --op-color-primary-h: 164;
  --op-color-primary-s: 100%;
  --op-color-primary-l: 50%;

  /* Main Scale */
  --op-color-primary-plus-two: light-dark(
    hsl(var(--op-color-primary-h) var(--op-color-primary-s) 64%),
    hsl(var(--op-color-primary-h) var(--op-color-primary-s) 32%)
  );
  --op-color-primary-plus-one: light-dark(
    hsl(var(--op-color-primary-h) var(--op-color-primary-s) 45%),
    hsl(var(--op-color-primary-h) var(--op-color-primary-s) 35%)
  );

  /* On Scale */
  --op-color-primary-on-plus-two: light-dark(
    hsl(var(--op-color-primary-h) var(--op-color-primary-s) 16%),
    hsl(var(--op-color-primary-h) var(--op-color-primary-s) 80%)
  );
  --op-color-primary-on-plus-two-alt: light-dark(
    hsl(var(--op-color-primary-h) var(--op-color-primary-s) 6%),
    hsl(var(--op-color-primary-h) var(--op-color-primary-s) 92%)
  );
  --op-color-primary-on-plus-one: light-dark(
    hsl(var(--op-color-primary-h) var(--op-color-primary-s) 100%),
    hsl(var(--op-color-primary-h) var(--op-color-primary-s) 80%)
  );
  --op-color-primary-on-plus-one-alt: light-dark(
    hsl(var(--op-color-primary-h) var(--op-color-primary-s) 95%),
    hsl(var(--op-color-primary-h) var(--op-color-primary-s) 98%)
  );
}
`})}),`
`,r.jsx(o.p,{children:"You can override as many or as few variables or scales as your application needs."})]})}function m(e={}){const{wrapper:o}={...a(),...e.components};return o?r.jsx(o,{...e,children:r.jsx(n,{...e})}):n(e)}export{m as default};
