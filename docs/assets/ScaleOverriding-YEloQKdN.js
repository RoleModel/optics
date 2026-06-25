import{i as e}from"./preload-helper-xPQekRTU.js";import{T as t,l as n,u as r}from"./blocks-uVOOWdqL.js";import{s as i}from"./chunk-LITCR56V-BmCoDI8n.js";import{t as a}from"./mdx-react-shim-eO_HyXU9.js";function o(e){let r={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n,{title:`Overview/Scale Overriding`}),`
`,(0,c.jsx)(r.h1,{id:`scale-overriding`,children:`Scale Overriding`}),`
`,(0,c.jsx)(r.p,{children:`There are multiple scales in Optics. Unit Scales exist to allow adjusting font and spacing values. Color Scales exist to provide semantically named color variables with corresponding "on" values that strive to maintain contrast when used on an element with the matching color.`}),`
`,(0,c.jsx)(r.h2,{id:`unit-scale-overriding`,children:`Unit Scale Overriding`}),`
`,(0,c.jsxs)(r.p,{children:[`A Unit Scale is defined for both font sizes and spacing variables. All values are multiplied by their respective units which default as `,(0,c.jsx)(r.code,{children:`1rem`}),` (equivalent to `,(0,c.jsx)(r.code,{children:`10px`}),`)`]}),`
`,(0,c.jsxs)(r.p,{children:[`If you want to change the font or spacing scale globally, or within the context of a specific component, you can set the `,(0,c.jsx)(r.code,{children:`--op-space-scale-unit`}),` in the `,(0,c.jsx)(r.code,{children:`:root`}),`.`]}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-css`,children:`:root {
  --op-space-scale-unit: 0.5rem;
}
`})}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-css`,children:`:root {
  --op-font-scale-unit: 0.5rem;
}
`})}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-css`,children:`:root {
  --op-size-unit: 0.2rem;
}
`})}),`
`,(0,c.jsx)(r.h2,{id:`color-scale-overriding`,children:`Color Scale Overriding`}),`
`,(0,c.jsx)(r.p,{children:`There are multiple reasons your application may need to override the provided color scales. You may set a primary color that doesn't work well with the default semantic color scale provided. Your design may want to stray from the present plus or minus stops.`}),`
`,(0,c.jsx)(r.p,{children:`Regardless of the reason, you can customize and override each scale like the following example:`}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-css`,children:`:root {
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
`,(0,c.jsx)(r.p,{children:`You can override as many or as few variables or scales as your application needs.`})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=i(),a(),r()}))();export{s as default};