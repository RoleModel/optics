import{i as e}from"./preload-helper-xPQekRTU.js";import{T as t,l as n,n as r,o as i,u as a}from"./blocks-uVOOWdqL.js";import{s as o}from"./chunk-LITCR56V-BmCoDI8n.js";import{t as s}from"./mdx-react-shim-eO_HyXU9.js";import{n as c,t as l}from"./dist-sKrGbkLk.js";import{Default as u,n as d,t as f}from"./FontFamily.stories-CthIwGSe.js";function p(e){let a={a:`a`,code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,strong:`strong`,...t(),...e.components};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(n,{of:f}),`
`,(0,h.jsx)(a.h1,{id:`font-family`,children:`Font Family`}),`
`,(0,h.jsx)(a.p,{children:`Font Family tokens can be used to change the font used when displaying text.`}),`
`,(0,h.jsxs)(a.p,{children:[`Optics loads fonts via the Google Fonts CDN. For instructions and further learning, see `,(0,h.jsx)(a.a,{href:`https://fonts.google.com/`,rel:`nofollow`,children:`Google Fonts`})]}),`
`,(0,h.jsx)(a.p,{children:`The default font is set to Noto Sans with an alternate option set to Noto Serif.`}),`
`,(0,h.jsx)(a.pre,{children:(0,h.jsx)(a.code,{className:`language-css`,children:`@import 'https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wdth,wght@0,62.5..100,100..900;1,62.5..100,100..900&family=Noto+Serif:ital,wdth,wght@0,62.5..100,100..900;1,62.5..100,100..900&display=swap';
`})}),`
`,(0,h.jsx)(a.h2,{id:`playground`,children:`Playground`}),`
`,(0,h.jsx)(r,{of:u}),`
`,(0,h.jsx)(i,{of:u}),`
`,(0,h.jsx)(a.h2,{id:`usage`,children:`Usage`}),`
`,(0,h.jsx)(a.p,{children:`This token can be applied like:`}),`
`,(0,h.jsx)(a.pre,{children:(0,h.jsx)(a.code,{className:`language-css`,children:`html {
  font-family: var(--op-font-family);
}
`})}),`
`,(0,h.jsx)(a.h2,{id:`variable-fonts`,children:`Variable Fonts`}),`
`,(0,h.jsx)(a.p,{children:`Optics supports variable fonts. Variable fonts are a single font file that contains multiple variations of a font. This allows you to adjust various axes that the font makes available such as the weight, width, slant, and other properties.`}),`
`,(0,h.jsx)(a.p,{children:`Optics uses Noto Sans as a default which has three axes of variations: weight, width, and italic. You can adjust these axes using the font-weight, font-stretch, and font-style tokens.`}),`
`,(0,h.jsx)(a.pre,{children:(0,h.jsx)(a.code,{className:`language-css`,children:`.my-selector {
  font-family: var(--op-font-family); /* Defaults to "Noto Sans" */
  font-optical-sizing: {auto|none};
  font-weight: {100 to 900}; /* Any value will work, though it is recommended to use the existing weight tokens or define a component specific value. */
  /* E.G. font-weight: var(--op-font-weight-bold); */
  font-style: {normal|italic};
  font-variation-settings:
    "wdth" {62.5 to 100};
  /* or */
  font-stretch: {62.5% to 100%};
}
`})}),`
`,(0,h.jsx)(a.p,{children:`If you are using a custom font, you can adjust the axes of the font by using the font-variation-settings property. The values for the axes are specific to the font you are using. You can find the available axes and their values in the font's documentation.`}),`
`,(0,h.jsxs)(a.p,{children:[`For example: `,(0,h.jsx)(a.a,{href:`https://fonts.google.com/specimen/Roboto+Flex`,rel:`nofollow`,children:`Roboto Flex`}),` has the following axes.`]}),`
`,(0,h.jsx)(a.pre,{children:(0,h.jsx)(a.code,{className:`language-css`,children:`/*
  {uniquifier}: Use a unique and descriptive class name
  {weight}: Use a value from 100 to 1000
  {grade}: Use a value from -200 to 150
  {slant}: Use a value from -10 to 0
  {width}: Use a value from 25 to 151
  {thick stroke}: Use a value from 27 to 175
  {thin stroke}: Use a value from 25 to 135
  {counter width}: Use a value from 323 to 603
  {uppercase height}: Use a value from 528 to 760
  {lowercase height}: Use a value from 416 to 570
  {ascender height}: Use a value from 649 to 854
  {descender depth}: Use a value from -305 to -98
  {figure height}: Use a value from 560 to 788
*/

.roboto-flex-{uniquifier} {
  font-family: 'Roboto Flex', sans-serif;
  font-optical-sizing: auto;
  font-weight: {weight};
  font-style: normal;
  font-variation-settings:
    'slnt' {slant},
    'wdth' {width},
    'GRAD' {grade},
    'XOPQ' {thick stroke},
    'XTRA' {counter width},
    'YOPQ' {thin stroke},
    'YTAS' {ascender height},
    'YTDE' {descender depth},
    'YTFI' {figure height},
    'YTLC' {lowercase height},
    'YTUC' {uppercase height};
}
`})}),`
`,(0,h.jsx)(a.h2,{id:`available-tokens-and-their-definitions`,children:`Available tokens and their definitions`}),`
`,(0,h.jsx)(c,{categoryName:`Font Family`,viewType:`card`}),`
`,(0,h.jsx)(a.h2,{id:`custom-font`,children:`Custom Font`}),`
`,(0,h.jsx)(a.p,{children:`If you want to change the font used by default, you can add a new font import to your stylesheet and apply it using the font family token.`}),`
`,(0,h.jsxs)(a.p,{children:[(0,h.jsx)(a.strong,{children:`Note`}),` Not all fonts have the same baseline line height. This can cause alignment issues in your text that may require you to adjust the default line height tokens. See `,(0,h.jsx)(a.a,{href:`?path=/docs/tokens-typography-line-height--base#custom-font`,children:`Adjusting Line Heights`})]}),`
`,(0,h.jsx)(a.pre,{children:(0,h.jsx)(a.code,{className:`language-css`,children:`@import 'https://fonts.googleapis.com/css2?family=Tilt+Neon:XROT,YROT@-45..45,-45..45&display=swap';

:root {
  --op-font-family: 'Tilt Neon', sans-serif;
}
`})}),`
`,(0,h.jsx)(a.h2,{id:`alternate-or-multiple-fonts`,children:`Alternate or Multiple Fonts`}),`
`,(0,h.jsxs)(a.p,{children:[`Often an application will need multiple fonts. Your headers may use a different font than your body text. Optics provides a main token `,(0,h.jsx)(a.code,{children:`--op-font-family`}),` and an alt token `,(0,h.jsx)(a.code,{children:`--op-font-family-alt`}),`, but you can easily add your own font tokens by following the pattern.`]}),`
`,(0,h.jsx)(a.pre,{children:(0,h.jsx)(a.code,{className:`language-css`,children:`@import 'https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,slnt,wdth,wght,GRAD,XOPQ,XTRA,YOPQ,YTAS,YTDE,YTFI,YTLC,YTUC@8..144,-10..0,25..151,100..1000,-200..150,27..175,323..603,25..135,649..854,-305..-98,560..788,416..570,528..760&family=Tilt+Neon:XROT,YROT@-45..45,-45..45&display=swap';

:root {
  --op-font-family: 'Tilt Neon', sans-serif;
  --op-font-family-alt: 'Roboto Flex', serif;

  /* Could add others as needed */
  --ya-font-family-body: 'Roboto Flex', serif; /* Your App prefix. Could stick with --op if you want */
}
`})})]})}function m(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,h.jsx)(n,{...e,children:(0,h.jsx)(p,{...e})}):p(e)}var h;e((()=>{h=o(),s(),a(),d(),l()}))();export{m as default};