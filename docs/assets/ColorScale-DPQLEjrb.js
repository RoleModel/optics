import{j as o,M as d,C as u,a as g,b as s,c}from"./index-ChDEEEOA.js";import{useMDXComponents as v}from"./index-BVtDYASa.js";import{C as x,P as h}from"./ColorScale.stories-otGSnkqT.js";import{s as p,c as m,g as e,a as k}from"./utils-ChVC8LB4.js";import{c as f}from"./sourceCodeLink-Chh3FteF.js";import"./iframe-BeNESbB0.js";import"./index-BiL3ubqk.js";import"./index-DrFu-skq.js";function i(l){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...v(),...l.components};return o.jsxs(o.Fragment,{children:[o.jsx(d,{of:x}),`
`,o.jsx(r.h1,{id:"color-scales",children:"Color Scales"}),`
`,o.jsx("div",{dangerouslySetInnerHTML:{__html:f({link:"core/tokens/scale_color_tokens.css"}).outerHTML}}),`
`,o.jsxs(r.p,{children:["Optics has five main color scales that provide all the color your application may need. These Consist of the ",o.jsx(r.code,{children:"Primary"})," scale, the ",o.jsx(r.code,{children:"Neutral"})," scale, and four Alert Color Scales, ",o.jsx(r.code,{children:"Warning"}),", ",o.jsx(r.code,{children:"Danger"}),", ",o.jsx(r.code,{children:"Info"}),", and ",o.jsx(r.code,{children:"Notice"}),"."]}),`
`,o.jsx(r.p,{children:"Each scale is a set of semantically named variables that use the same hue and saturation, but change the luminosity."}),`
`,o.jsxs(r.p,{children:["We borrow from the photography concept of ",o.jsx(r.a,{href:"https://www.adobe.com/creativecloud/photography/discover/f-stop.html",rel:"nofollow",children:"Aperture f-stops"}),"."]}),`
`,o.jsxs(r.p,{children:[o.jsx(r.code,{children:"Plus"})," indicates the addition of luminosity or getting brighter. ",o.jsx(r.code,{children:"Minus"})," indicates the removal of luminosity or getting darker."]}),`
`,o.jsx(r.p,{children:"We start with a base color and include a plus one through eight and max (full luminosity a.k.a white), as well as minus one through eight and max (zero luminosity a.k.a black)."}),`
`,o.jsxs(r.p,{children:["Along with this set of 19 (base, plus 1-8, plus max, minus 1-8, minus max) semantic ",o.jsx(r.code,{children:"stops"}),", there are corresponding ",o.jsx(r.code,{children:"on"}),` colors for each.
These `,o.jsx(r.code,{children:"on"})," colors are aimed to provide contrast respecting text colors for text on a background of that color. There are also ",o.jsx(r.code,{children:"alt"})," colors to provide an additional text color option to add variety and more color options."]}),`
`,o.jsx(r.p,{children:"Here is an example of what these variables look like:"}),`
`,o.jsx(r.pre,{children:o.jsx(r.code,{className:"language-css",children:`--op-color-primary-plus-four: light-dark(
  hsl(var(--op-color-primary-h) var(--op-color-primary-s) 84%),
  hsl(var(--op-color-primary-h) var(--op-color-primary-s) 24%)
);
--op-color-primary-on-plus-four: light-dark(
  hsl(var(--op-color-primary-h) var(--op-color-primary-s) 24%),
  hsl(var(--op-color-primary-h) var(--op-color-primary-s) 84%)
);
--op-color-primary-on-plus-four-alt: light-dark(
  hsl(var(--op-color-primary-h) var(--op-color-primary-s) 4%),
  hsl(var(--op-color-primary-h) var(--op-color-primary-s) 44%)
);
`})}),`
`,o.jsxs(r.p,{children:["An element using the ",o.jsx(r.code,{children:"var(--op-color-primary-plus-four)"})," for the background color could use ",o.jsx(r.code,{children:"var(--op-color-primary-on-plus-four)"})," or ",o.jsx(r.code,{children:"var(--op-color-primary-on-plus-four-alt)"})," for the text color."]}),`
`,o.jsxs(r.p,{children:[o.jsx(r.code,{children:"var(--op-color-primary-original)"})," is included for occasions when you need to stay true to your brand color."]}),`
`,o.jsx(r.h2,{id:"playground",children:"Playground"}),`
`,o.jsx(u,{of:h}),`
`,o.jsx(g,{of:h}),`
`,o.jsx(r.h2,{id:"dark-mode",children:"Dark Mode"}),`
`,o.jsxs(r.p,{children:["Each scale supports a ",o.jsx(r.a,{href:"?path=/docs/overview-themes--docs#dark-mode",children:"Dark Mode"})]}),`
`,o.jsx(r.h2,{id:"reference",children:"Reference"}),`
`,o.jsx(r.p,{children:"You can use the Light / Dark toggle control in the top left corner to show these colors in each mode."}),`
`,o.jsx(r.h3,{id:"base-colors",children:"Base Colors"}),`
`,o.jsx(s,{children:p.map((n,a)=>o.jsx(c,{title:`--op-color-${n}-original`,subtitle:`${m(n)} Color`,colors:{[`--op-color-${n}-original`]:e(`--op-color-${n}-original`)}},a))}),`
`,o.jsx(r.h3,{id:"scales",children:"Scales"}),`
`,o.jsx(s,{children:p.map(n=>k.map((a,t)=>o.jsx(c,{title:`--op-color-${n}-${a}`,subtitle:`${m(n)} Color`,colors:{[`--op-color-${n}-${a}`]:e(`--op-color-${n}-${a}`),[`--op-color-${n}-on-${a}`]:e(`--op-color-${n}-on-${a}`),[`--op-color-${n}-on-${a}-alt`]:e(`--op-color-${n}-on-${a}-alt`)}},t)))}),`
`,o.jsx(r.h2,{id:"overriding-color-scales",children:"Overriding Color Scales"}),`
`,o.jsxs(r.p,{children:["See ",o.jsx(r.a,{href:"?path=/docs/overview-scale-overriding--docs#color-scale-overriding",children:"Color Scale Overriding"})," for guidance on overriding each color scale."]}),`
`,o.jsx(r.h2,{id:"custom-scale",children:"Custom Scale"}),`
`,o.jsxs(r.p,{children:["Your application may need a new scale. To add one, use the following template. Keep in mind, you will also need to add dark mode values for each variable as well. See ",o.jsx(r.a,{href:"?path=/docs/overview-themes--docs#theming",children:"Theming"})]}),`
`,o.jsx(r.pre,{children:o.jsx(r.code,{className:"language-css",children:`:root {
  /* {name}-color */

  --op-color-{name}-h: new-value-h;
  --op-color-{name}-s: new-value-s;
  --op-color-{name}-l: new-value-l;

  /* {name}-semantic-scale */

  --op-color-{name}-original: hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) var(--op-color-{name}-l));

  /* Main Scale */
  --op-color-{name}-plus-max: light-dark(
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 100%),
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 10%)
  );
  --op-color-{name}-plus-eight: light-dark(
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 98%),
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 18%)
  );
  --op-color-{name}-plus-seven: light-dark(
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 96%),
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 16%)
  );
  --op-color-{name}-plus-six: light-dark(
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 94%),
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 14%)
  );
  --op-color-{name}-plus-five: light-dark(
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 90%),
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 10%)
  );
  --op-color-{name}-plus-four: light-dark(
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 84%),
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 14%)
  );
  --op-color-{name}-plus-three: light-dark(
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 70%),
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 10%)
  );
  --op-color-{name}-plus-two: light-dark(
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 64%),
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 14%)
  );
  --op-color-{name}-plus-one: light-dark(
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 45%),
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 15%)
  );
  --op-color-{name}-base: light-dark(
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 40%),
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 10%)
  );
  --op-color-{name}-minus-one: light-dark(
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 36%),
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 16%)
  );
  --op-color-{name}-minus-two: light-dark(
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 32%),
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 12%)
  );
  --op-color-{name}-minus-three: light-dark(
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 28%),
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 8%)
  );
  --op-color-{name}-minus-four: light-dark(
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 24%),
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 4%)
  );
  --op-color-{name}-minus-five: light-dark(
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 20%),
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 5%)
  );
  --op-color-{name}-minus-six: light-dark(
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 16%),
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 6%)
  );
  --op-color-{name}-minus-seven: light-dark(
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 8%),
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 88%)
  );
  --op-color-{name}-minus-eight: light-dark(
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 4%),
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 84%)
  );
  --op-color-{name}-minus-max: light-dark(
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 0%),
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 80%)
  );

  /* On Scale */
  --op-color-{name}-on-plus-max: light-dark(
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 0%),
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 100%)
  );
  --op-color-{name}-on-plus-max-alt: light-dark(
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 20%),
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 80%)
  );
  --op-color-{name}-on-plus-eight: light-dark(
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 4%),
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 40%)
  );
  --op-color-{name}-on-plus-eight-alt: light-dark(
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 24%),
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 84%)
  );
  --op-color-{name}-on-plus-seven: light-dark(
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 8%),
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 88%)
  );
  --op-color-{name}-on-plus-seven-alt: light-dark(
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 28%),
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 88%)
  );
  --op-color-{name}-on-plus-six: light-dark(
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 16%),
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 76%)
  );
  --op-color-{name}-on-plus-six-alt: light-dark(
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 26%),
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 96%)
  );
  --op-color-{name}-on-plus-five: light-dark(
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 20%),
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 60%)
  );
  --op-color-{name}-on-plus-five-alt: light-dark(
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 40%),
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 90%)
  );
  --op-color-{name}-on-plus-four: light-dark(
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 24%),
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 94%)
  );
  --op-color-{name}-on-plus-four-alt: light-dark(
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 4%),
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 74%)
  );
  --op-color-{name}-on-plus-three: light-dark(
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 20%),
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 70%)
  );
  --op-color-{name}-on-plus-three-alt: light-dark(
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 10%),
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 90%)
  );
  --op-color-{name}-on-plus-two: light-dark(
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 16%),
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 46%)
  );
  --op-color-{name}-on-plus-two-alt: light-dark(
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 6%),
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 76%)
  );
  --op-color-{name}-on-plus-one: light-dark(
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 100%),
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 0%)
  );
  --op-color-{name}-on-plus-one-alt: light-dark(
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 95%),
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 5%)
  );
  --op-color-{name}-on-base: light-dark(
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 100%),
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 10%)
  );
  --op-color-{name}-on-base-alt: light-dark(
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 88%),
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 8%)
  );
  --op-color-{name}-on-minus-one: light-dark(
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 94%),
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 4%)
  );
  --op-color-{name}-on-minus-one-alt: light-dark(
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 82%),
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 2%)
  );
  --op-color-{name}-on-minus-two: light-dark(
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 90%),
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 10%)
  );
  --op-color-{name}-on-minus-two-alt: light-dark(
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 78%),
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 8%)
  );
  --op-color-{name}-on-minus-three: light-dark(
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 86%),
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 6%)
  );
  --op-color-{name}-on-minus-three-alt: light-dark(
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 74%),
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 4%)
  );
  --op-color-{name}-on-minus-four: light-dark(
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 84%),
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 4%)
  );
  --op-color-{name}-on-minus-four-alt: light-dark(
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 72%),
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 2%)
  );
  --op-color-{name}-on-minus-five: light-dark(
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 88%),
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 8%)
  );
  --op-color-{name}-on-minus-five-alt: light-dark(
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 78%),
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 8%)
  );
  --op-color-{name}-on-minus-six: light-dark(
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 94%),
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 4%)
  );
  --op-color-{name}-on-minus-six-alt: light-dark(
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 82%),
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 2%)
  );
  --op-color-{name}-on-minus-seven: light-dark(
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 96%),
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 6%)
  );
  --op-color-{name}-on-minus-seven-alt: light-dark(
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 84%),
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 4%)
  );
  --op-color-{name}-on-minus-eight: light-dark(
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 98%),
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 8%)
  );
  --op-color-{name}-on-minus-eight-alt: light-dark(
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 86%),
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 6%)
  );
  --op-color-{name}-on-minus-max: light-dark(
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 100%),
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 10%)
  );
  --op-color-{name}-on-minus-max-alt: light-dark(
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 88%),
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 8%)
  );
}
`})})]})}function D(l={}){const{wrapper:r}={...v(),...l.components};return r?o.jsx(r,{...l,children:o.jsx(i,{...l})}):i(l)}export{D as default};
