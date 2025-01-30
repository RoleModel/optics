import{j as o}from"./jsx-runtime-B3Amn4Ja.js";import{u as t}from"./index-DSinKGz0.js";import{M as d,C as u,d as x,e as s,f as c}from"./index-C9vhgy3G.js";import{C as f,P as p}from"./ColorScale.stories-otGSnkqT.js";import{s as m,c as h,g as l,a as j}from"./utils-ChVC8LB4.js";import{c as g}from"./sourceCodeLink-Chh3FteF.js";import"./iframe-BTXPs0g3.js";import"../sb-preview/runtime.js";import"./index-B5rfWaSj.js";import"./index-DrFu-skq.js";function i(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...t(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(d,{of:f}),`
`,o.jsx(r.h1,{id:"color-scales",children:"Color Scales"}),`
`,o.jsx("div",{dangerouslySetInnerHTML:{__html:g({link:"core/tokens/scale_color_tokens.scss"}).outerHTML}}),`
`,o.jsxs(r.p,{children:["Optics has five main color scales that provide all the color your application may need. These Consist of the ",o.jsx(r.code,{children:"Primary"})," scale, the ",o.jsx(r.code,{children:"Neutral"})," scale, and four Alert Color Scales, ",o.jsx(r.code,{children:"Warning"}),", ",o.jsx(r.code,{children:"Danger"}),", ",o.jsx(r.code,{children:"Info"}),", and ",o.jsx(r.code,{children:"Notice"}),"."]}),`
`,o.jsx(r.p,{children:"Each scale is a set of semantically named variables that use the same hue and saturation, but change the luminosity."}),`
`,o.jsxs(r.p,{children:["We borrow from the photography concept of ",o.jsx(r.a,{href:"https://www.adobe.com/creativecloud/photography/discover/f-stop.html",rel:"nofollow",children:"Aperture f-stops"}),"."]}),`
`,o.jsxs(r.p,{children:[o.jsx(r.code,{children:"Plus"})," indicates the addition of luminosity or getting brighter. ",o.jsx(r.code,{children:"Minus"})," indicates the removal of luminosity or getting darker."]}),`
`,o.jsx(r.p,{children:"We start with a base color and include a plus one through eight and max (full luminosity a.k.a white), as well as minus one through eight and max (zero luminosity a.k.a black)."}),`
`,o.jsxs(r.p,{children:["Along with this set of 19 (base, plus 1-8, plus max, minus 1-8, minus max) semantic ",o.jsx(r.code,{children:"stops"}),", there are corresponding ",o.jsx(r.code,{children:"on"}),` colors for each.
These `,o.jsx(r.code,{children:"on"})," colors are aimed to provide contrast respecting text colors for text on a background of that color. There are also ",o.jsx(r.code,{children:"alt"})," colors to provide an additional text color option to add variety and more color options."]}),`
`,o.jsx(r.p,{children:"Here is an example of what these variables look like:"}),`
`,o.jsx(r.pre,{children:o.jsx(r.code,{className:"language-css",children:`--op-color-primary-plus-four: hsl(var(--op-color-primary-h) var(--op-color-primary-s) 84%);
--op-color-primary-on-plus-four: hsl(var(--op-color-primary-h) var(--op-color-primary-s) 24%);
--op-color-primary-on-plus-four-alt: hsl(var(--op-color-primary-h) var(--op-color-primary-s) 4%);
`})}),`
`,o.jsxs(r.p,{children:["An element using the ",o.jsx(r.code,{children:"var(--op-color-primary-plus-four)"})," for the background color could use ",o.jsx(r.code,{children:"var(--op-color-primary-on-plus-four)"})," or ",o.jsx(r.code,{children:"var(--op-color-primary-on-plus-four-alt)"})," for the text color."]}),`
`,o.jsxs(r.p,{children:[o.jsx(r.code,{children:"var(--op-color-primary-original)"})," is included for occasions when you need to stay true to your brand color."]}),`
`,o.jsx(r.h2,{id:"playground",children:"Playground"}),`
`,o.jsx(u,{of:p}),`
`,o.jsx(x,{of:p}),`
`,o.jsx(r.h2,{id:"dark-mode",children:"Dark Mode"}),`
`,o.jsxs(r.p,{children:["Each scale has overrides allowing your application to support ",o.jsx(r.a,{href:"?path=/docs/overview-themes--docs#dark-mode",children:"Dark Mode"})]}),`
`,o.jsx(r.h2,{id:"reference",children:"Reference"}),`
`,o.jsx(r.p,{children:"You can use the Light / Dark toggle control in the top left corner to show these colors in each mode."}),`
`,o.jsx(r.h3,{id:"base-colors",children:"Base Colors"}),`
`,o.jsx(s,{children:m.map((n,a)=>o.jsx(c,{title:`--op-color-${n}-original`,subtitle:`${h(n)} Color`,colors:{[`--op-color-${n}-original`]:l(`--op-color-${n}-original`)}},a))}),`
`,o.jsx(r.h3,{id:"scales",children:"Scales"}),`
`,o.jsx(s,{children:m.map(n=>j.map((a,v)=>o.jsx(c,{title:`--op-color-${n}-${a}`,subtitle:`${h(n)} Color`,colors:{[`--op-color-${n}-${a}`]:l(`--op-color-${n}-${a}`),[`--op-color-${n}-on-${a}`]:l(`--op-color-${n}-on-${a}`),[`--op-color-${n}-on-${a}-alt`]:l(`--op-color-${n}-on-${a}-alt`)}},v)))}),`
`,o.jsx(r.h2,{id:"overriding-color-scales",children:"Overriding Color Scales"}),`
`,o.jsxs(r.p,{children:["See ",o.jsx(r.a,{href:"?path=/docs/overview-scale-overriding--docs#color-scale-overriding",children:"Color Scale Overriding"})," for guidance on overriding each color scale."]}),`
`,o.jsx(r.h2,{id:"custom-scale",children:"Custom Scale"}),`
`,o.jsxs(r.p,{children:["Your application may need a new scale. To add one, use the following template. Keep in mind, you will also need to add dark mode values for each variable as well. See ",o.jsx(r.a,{href:"?path=/docs/overview-themes--docs#theming",children:"Theming"})]}),`
`,o.jsx(r.pre,{children:o.jsx(r.code,{className:"language-css",children:`@mixin {name}-color {
  --op-color-{name}-h: new-value-h;
  --op-color-{name}-s: new-value-s;
  --op-color-{name}-l: new-value-l;
}

@mixin {name}-semantic-scale {
  --op-color-{name}-original: hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) var(--op-color-{name}-l));

  // Main Scale
  --op-color-{name}-plus-max: hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 100%);
  --op-color-{name}-plus-eight: hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 98%);
  --op-color-{name}-plus-seven: hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 96%);
  --op-color-{name}-plus-six: hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 94%);
  --op-color-{name}-plus-five: hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 90%);
  --op-color-{name}-plus-four: hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 84%);
  --op-color-{name}-plus-three: hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 70%);
  --op-color-{name}-plus-two: hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 64%);
  --op-color-{name}-plus-one: hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 45%);
  --op-color-{name}-base: hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 40%);
  --op-color-{name}-minus-one: hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 36%);
  --op-color-{name}-minus-two: hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 32%);
  --op-color-{name}-minus-three: hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 28%);
  --op-color-{name}-minus-four: hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 24%);
  --op-color-{name}-minus-five: hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 20%);
  --op-color-{name}-minus-six: hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 16%);
  --op-color-{name}-minus-seven: hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 8%);
  --op-color-{name}-minus-eight: hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 4%);
  --op-color-{name}-minus-max: hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 0%);

  // On Scale
  --op-color-{name}-on-plus-max: hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 0%);
  --op-color-{name}-on-plus-max-alt: hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 20%);
  --op-color-{name}-on-plus-eight: hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 4%);
  --op-color-{name}-on-plus-eight-alt: hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 24%);
  --op-color-{name}-on-plus-seven: hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 8%);
  --op-color-{name}-on-plus-seven-alt: hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 28%);
  --op-color-{name}-on-plus-six: hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 16%);
  --op-color-{name}-on-plus-six-alt: hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 26%);
  --op-color-{name}-on-plus-five: hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 20%);
  --op-color-{name}-on-plus-five-alt: hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 40%);
  --op-color-{name}-on-plus-four: hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 24%);
  --op-color-{name}-on-plus-four-alt: hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 4%);
  --op-color-{name}-on-plus-three: hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 20%);
  --op-color-{name}-on-plus-three-alt: hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 10%);
  --op-color-{name}-on-plus-two: hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 16%);
  --op-color-{name}-on-plus-two-alt: hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 6%);
  --op-color-{name}-on-plus-one: hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 100%);
  --op-color-{name}-on-plus-one-alt: hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 95%);
  --op-color-{name}-on-base: hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 100%);
  --op-color-{name}-on-base-alt: hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 88%);
  --op-color-{name}-on-minus-one: hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 94%);
  --op-color-{name}-on-minus-one-alt: hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 82%);
  --op-color-{name}-on-minus-two: hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 90%);
  --op-color-{name}-on-minus-two-alt: hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 78%);
  --op-color-{name}-on-minus-three: hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 86%);
  --op-color-{name}-on-minus-three-alt: hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 74%);
  --op-color-{name}-on-minus-four: hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 84%);
  --op-color-{name}-on-minus-four-alt: hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 72%);
  --op-color-{name}-on-minus-five: hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 88%);
  --op-color-{name}-on-minus-five-alt: hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 78%);
  --op-color-{name}-on-minus-six: hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 94%);
  --op-color-{name}-on-minus-six-alt: hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 82%);
  --op-color-{name}-on-minus-seven: hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 96%);
  --op-color-{name}-on-minus-seven-alt: hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 84%);
  --op-color-{name}-on-minus-eight: hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 98%);
  --op-color-{name}-on-minus-eight-alt: hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 86%);
  --op-color-{name}-on-minus-max: hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 100%);
  --op-color-{name}-on-minus-max-alt: hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 88%);
}

:root {
  @include {name}-color;
  @include {name}-semantic-scale;
}
`})})]})}function L(e={}){const{wrapper:r}={...t(),...e.components};return r?o.jsx(r,{...e,children:o.jsx(i,{...e})}):i(e)}export{L as default};
