import{j as n}from"./jsx-runtime-Ce5xs4Wy.js";import{u as i}from"./index-CPcV2wD4.js";import{M as a,C as l,d as r}from"./index-C52FNCyE.js";import{F as d,D as e}from"./FontFamily.stories-DYzOeQgm.js";import{N as h}from"./index-Ct2jHP3u.js";import"./iframe-BN7FcqzY.js";import"../sb-preview/runtime.js";import"./index-B5rfWaSj.js";import"./index-DrFu-skq.js";function s(o){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(a,{of:d}),`
`,n.jsx(t.h1,{id:"font-family",children:"Font Family"}),`
`,n.jsx(t.p,{children:"The Font Family token can be used to change the font used when displaying text"}),`
`,n.jsx(t.p,{children:"The default font is set to Noto Sans which is loaded via the Google Fonts CDN"}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-css",children:`@import 'https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap';
@import 'https://fonts.googleapis.com/css2?family=Noto+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap';
`})}),`
`,n.jsx(t.h2,{id:"playground",children:"Playground"}),`
`,n.jsx(l,{of:e}),`
`,n.jsx(r,{of:e}),`
`,n.jsx(t.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(t.p,{children:"This token can be applied like:"}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-css",children:`html {
  font-family: var(--op-font-family);
}
`})}),`
`,n.jsx(t.h2,{id:"available-tokens-and-their-definitions",children:"Available tokens and their definitions"}),`
`,n.jsx(h,{categoryName:"Font Family",viewType:"card"}),`
`,n.jsx(t.h2,{id:"custom-font",children:"Custom Font"}),`
`,n.jsx(t.p,{children:"If you want to change the font used by default, you can add a new font import to your stylesheet and apply it using the font family token."}),`
`,n.jsxs(t.p,{children:[n.jsx(t.strong,{children:"Note"})," Not all fonts have the same baseline line height. This can cause alignment issues in your text that may require you to adjust the default line height tokens. See ",n.jsx(t.a,{href:"?path=/docs/tokens-typography-line-height--base#custom-font",children:"Adjusting Line Heights"})]}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-css",children:`@import 'https://fonts.googleapis.com/css2?family=Tilt+Neon&display=swap';

:root {
  --op-font-family: 'Tilt Neon', sans-serif;
}
`})}),`
`,n.jsx(t.h2,{id:"alternate-or-multiple-fonts",children:"Alternate or Multiple Fonts"}),`
`,n.jsx(t.p,{children:"Often an application will need multiple fonts. Your headers may use a different font than your body text. Optics provides a single font family token, but you can easily add your own font tokens by following the pattern."}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-css",children:`@import 'https://fonts.googleapis.com/css2?family=Tilt+Neon&display=swap';
@import 'https://fonts.googleapis.com/css2?family=Roboto&display=swap';

:root {
  --op-font-family: 'Tilt Neon', sans-serif;
  --ya-font-family-alt: 'Roboto', serif; // Your App prefix. Could stick with --op if you want
  // or
  --ya-font-family-body: 'Roboto', serif;
}
`})})]})}function w(o={}){const{wrapper:t}={...i(),...o.components};return t?n.jsx(t,{...o,children:n.jsx(s,{...o})}):s(o)}export{w as default};
