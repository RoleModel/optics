import{i as e}from"./preload-helper-xPQekRTU.js";import{T as t,a as n,i as r,l as i,n as a,o,u as s}from"./blocks-uVOOWdqL.js";import{s as c}from"./chunk-LITCR56V-BmCoDI8n.js";import{t as l}from"./mdx-react-shim-eO_HyXU9.js";import{n as u,t as d}from"./sourceCodeLink-D2TI9VYO.js";import{i as f,o as p,r as m,s as h,t as g}from"./utils-CsCgyaPt.js";import{Primary as _,n as v,t as y}from"./ColorScale.stories-DyILXXIZ.js";function b(e){let s={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,...t(),...e.components};return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(i,{of:y}),`
`,(0,S.jsx)(s.h1,{id:`color-scales`,children:`Color Scales`}),`
`,(0,S.jsx)(`div`,{dangerouslySetInnerHTML:{__html:d({link:`core/tokens/scale_color_tokens.css`}).outerHTML}}),`
`,(0,S.jsxs)(s.p,{children:[`Optics has five main color scales that provide all the color your application may need. These Consist of the `,(0,S.jsx)(s.code,{children:`Primary`}),` scale, the `,(0,S.jsx)(s.code,{children:`Neutral`}),` scale, and four Alert Color Scales, `,(0,S.jsx)(s.code,{children:`Warning`}),`, `,(0,S.jsx)(s.code,{children:`Danger`}),`, `,(0,S.jsx)(s.code,{children:`Info`}),`, and `,(0,S.jsx)(s.code,{children:`Notice`}),`.`]}),`
`,(0,S.jsx)(s.p,{children:`Each scale is a set of semantically named variables that use the same hue and saturation, but change the luminosity.`}),`
`,(0,S.jsxs)(s.p,{children:[`We borrow from the photography concept of `,(0,S.jsx)(s.a,{href:`https://www.adobe.com/creativecloud/photography/discover/f-stop.html`,rel:`nofollow`,children:`Aperture f-stops`}),`.`]}),`
`,(0,S.jsxs)(s.p,{children:[(0,S.jsx)(s.code,{children:`Plus`}),` indicates the addition of luminosity or getting brighter. `,(0,S.jsx)(s.code,{children:`Minus`}),` indicates the removal of luminosity or getting darker.`]}),`
`,(0,S.jsx)(s.p,{children:`We start with a base color and include a plus one through eight and max (full luminosity a.k.a white), as well as minus one through eight and max (zero luminosity a.k.a black).`}),`
`,(0,S.jsxs)(s.p,{children:[`Along with this set of 19 (base, plus 1-8, plus max, minus 1-8, minus max) semantic `,(0,S.jsx)(s.code,{children:`stops`}),`, there are corresponding `,(0,S.jsx)(s.code,{children:`on`}),` colors for each.
These `,(0,S.jsx)(s.code,{children:`on`}),` colors are aimed to provide contrast respecting text colors for text on a background of that color. There are also `,(0,S.jsx)(s.code,{children:`alt`}),` colors to provide an additional text color option to add variety and more color options.`]}),`
`,(0,S.jsx)(s.p,{children:`Here is an example of what these variables look like:`}),`
`,(0,S.jsx)(s.pre,{children:(0,S.jsx)(s.code,{className:`language-css`,children:`--op-color-primary-plus-four: light-dark(
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
`,(0,S.jsxs)(s.p,{children:[`An element using the `,(0,S.jsx)(s.code,{children:`var(--op-color-primary-plus-four)`}),` for the background color could use `,(0,S.jsx)(s.code,{children:`var(--op-color-primary-on-plus-four)`}),` or `,(0,S.jsx)(s.code,{children:`var(--op-color-primary-on-plus-four-alt)`}),` for the text color.`]}),`
`,(0,S.jsxs)(s.p,{children:[(0,S.jsx)(s.code,{children:`var(--op-color-primary-original)`}),` is included for occasions when you need to stay true to your brand color.`]}),`
`,(0,S.jsx)(s.h2,{id:`playground`,children:`Playground`}),`
`,(0,S.jsx)(a,{of:_}),`
`,(0,S.jsx)(o,{of:_}),`
`,(0,S.jsx)(s.h2,{id:`dark-mode`,children:`Dark Mode`}),`
`,(0,S.jsxs)(s.p,{children:[`Each scale supports a `,(0,S.jsx)(s.a,{href:`?path=/docs/overview-themes--docs#dark-mode`,children:`Dark Mode`})]}),`
`,(0,S.jsx)(s.h2,{id:`reference`,children:`Reference`}),`
`,(0,S.jsx)(s.p,{children:`You can use the Light / Dark toggle control in the top left corner to show these colors in each mode.`}),`
`,(0,S.jsx)(s.h3,{id:`base-colors`,children:`Base Colors`}),`
`,(0,S.jsx)(n,{children:p.map((e,t)=>(0,S.jsx)(r,{title:`--op-color-${e}-original`,subtitle:`${g(e)} Color`,colors:{[`--op-color-${e}-original`]:m(`--op-color-${e}-original`)}},t))}),`
`,(0,S.jsx)(s.h3,{id:`scales`,children:`Scales`}),`
`,(0,S.jsx)(n,{children:p.map(e=>h.map((t,n)=>(0,S.jsx)(r,{title:`--op-color-${e}-${t}`,subtitle:`${g(e)} Color`,colors:{[`--op-color-${e}-${t}`]:m(`--op-color-${e}-${t}`),[`--op-color-${e}-on-${t}`]:m(`--op-color-${e}-on-${t}`),[`--op-color-${e}-on-${t}-alt`]:m(`--op-color-${e}-on-${t}-alt`)}},n)))}),`
`,(0,S.jsx)(s.h2,{id:`overriding-color-scales`,children:`Overriding Color Scales`}),`
`,(0,S.jsxs)(s.p,{children:[`See `,(0,S.jsx)(s.a,{href:`?path=/docs/overview-scale-overriding--docs#color-scale-overriding`,children:`Color Scale Overriding`}),` for guidance on overriding each color scale.`]}),`
`,(0,S.jsx)(s.h2,{id:`custom-scale`,children:`Custom Scale`}),`
`,(0,S.jsxs)(s.p,{children:[`Your application may need a new scale. To add one, use the following template. Keep in mind, you will also need to add dark mode values for each variable as well. See `,(0,S.jsx)(s.a,{href:`?path=/docs/overview-themes--docs#theming`,children:`Theming`})]}),`
`,(0,S.jsx)(s.pre,{children:(0,S.jsx)(s.code,{className:`language-css`,children:`:root {
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
`})})]})}function x(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,S.jsx)(n,{...e,children:(0,S.jsx)(b,{...e})}):b(e)}var S;e((()=>{S=c(),l(),s(),v(),f(),u()}))();export{x as default};