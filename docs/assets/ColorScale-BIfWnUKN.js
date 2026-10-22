import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{i as t,r as n}from"./react-DTG9IdOZ.js";import{s as r}from"./chunk-LITCR56V-5npheFyz.js";import{a as i,i as a,l as o,n as s,o as c,u as l}from"./blocks-CxVnX0yB.js";import{n as u,t as d}from"./sourceCodeLink-rUFw22c2.js";import{i as f,o as p,r as m,s as h,t as g}from"./utils-CqxjQWfn.js";import{n as _,r as v,t as y}from"./ColorScale.stories-BxSPpg0f.js";function b(e){let n={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,...t(),...e.components};return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(o,{of:y}),`
`,(0,S.jsx)(n.h1,{id:`color-scales`,children:`Color Scales`}),`
`,(0,S.jsx)(`div`,{dangerouslySetInnerHTML:{__html:d({link:`core/tokens/scale_color_tokens.css`}).outerHTML}}),`
`,(0,S.jsxs)(n.p,{children:[`Optics has five main color scales that provide all the color your application may need. These Consist of the `,(0,S.jsx)(n.code,{children:`Primary`}),` scale, the `,(0,S.jsx)(n.code,{children:`Neutral`}),` scale, and four Alert Color Scales, `,(0,S.jsx)(n.code,{children:`Warning`}),`, `,(0,S.jsx)(n.code,{children:`Danger`}),`, `,(0,S.jsx)(n.code,{children:`Info`}),`, and `,(0,S.jsx)(n.code,{children:`Notice`}),`.`]}),`
`,(0,S.jsxs)(n.p,{children:[`Each scale is a set of semantically named variables that use the same hue and saturation (hue and chroma in the `,(0,S.jsx)(n.a,{href:`?path=/docs/overview-oklch-colors--docs`,children:`OKLCH build`}),`), but change the luminosity.`]}),`
`,(0,S.jsxs)(n.p,{children:[`We borrow from the photography concept of `,(0,S.jsx)(n.a,{href:`https://www.adobe.com/creativecloud/photography/discover/f-stop.html`,rel:`nofollow`,children:`Aperture f-stops`}),`.`]}),`
`,(0,S.jsxs)(n.p,{children:[(0,S.jsx)(n.code,{children:`Plus`}),` indicates the addition of luminosity or getting brighter. `,(0,S.jsx)(n.code,{children:`Minus`}),` indicates the removal of luminosity or getting darker.`]}),`
`,(0,S.jsx)(n.p,{children:`We start with a base color and include a plus one through eight and max (full luminosity a.k.a white), as well as minus one through eight and max (zero luminosity a.k.a black).`}),`
`,(0,S.jsxs)(n.p,{children:[`Along with this set of 19 (base, plus 1-8, plus max, minus 1-8, minus max) semantic `,(0,S.jsx)(n.code,{children:`stops`}),`, there are corresponding `,(0,S.jsx)(n.code,{children:`on`}),` colors for each.
These `,(0,S.jsx)(n.code,{children:`on`}),` colors are aimed to provide contrast respecting text colors for text on a background of that color. There are also `,(0,S.jsx)(n.code,{children:`alt`}),` colors to provide an additional text color option to add variety and more color options.`]}),`
`,(0,S.jsx)(n.p,{children:`Here is an example of what these variables look like:`}),`
`,(0,S.jsx)(n.pre,{children:(0,S.jsx)(n.code,{className:`language-css`,children:`--op-color-primary-plus-four: light-dark(
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
`,(0,S.jsx)(n.p,{children:`In the OKLCH build, each step sets its lightness and multiplies the color's chroma by a factor:`}),`
`,(0,S.jsx)(n.pre,{children:(0,S.jsx)(n.code,{className:`language-css`,children:`--op-color-primary-plus-four: light-dark(
  oklch(85.7% calc(var(--op-color-primary-c) * 0.31) var(--op-color-primary-h)),
  oklch(35.3% calc(var(--op-color-primary-c) * 0.61) var(--op-color-primary-h))
);
--op-color-primary-on-plus-four: light-dark(
  oklch(33.5% calc(var(--op-color-primary-c) * 0.57) var(--op-color-primary-h)),
  oklch(82.1% calc(var(--op-color-primary-c) * 0.39) var(--op-color-primary-h))
);
--op-color-primary-on-plus-four-alt: light-dark(
  oklch(13.8% calc(var(--op-color-primary-c) * 0.13) var(--op-color-primary-h)),
  oklch(92.9% calc(var(--op-color-primary-c) * 0.15) var(--op-color-primary-h))
);
`})}),`
`,(0,S.jsxs)(n.p,{children:[`An element using the `,(0,S.jsx)(n.code,{children:`var(--op-color-primary-plus-four)`}),` for the background color could use `,(0,S.jsx)(n.code,{children:`var(--op-color-primary-on-plus-four)`}),` or `,(0,S.jsx)(n.code,{children:`var(--op-color-primary-on-plus-four-alt)`}),` for the text color.`]}),`
`,(0,S.jsxs)(n.p,{children:[(0,S.jsx)(n.code,{children:`var(--op-color-primary-original)`}),` is included for occasions when you need to stay true to your brand color.`]}),`
`,(0,S.jsx)(n.h2,{id:`playground`,children:`Playground`}),`
`,(0,S.jsx)(s,{of:_}),`
`,(0,S.jsx)(c,{of:_}),`
`,(0,S.jsx)(n.h2,{id:`dark-mode`,children:`Dark Mode`}),`
`,(0,S.jsxs)(n.p,{children:[`Each scale supports a `,(0,S.jsx)(n.a,{href:`?path=/docs/overview-themes--docs#dark-mode`,children:`Dark Mode`})]}),`
`,(0,S.jsx)(n.h2,{id:`reference`,children:`Reference`}),`
`,(0,S.jsx)(n.p,{children:`You can use the Light / Dark toggle control in the top left corner to show these colors in each mode.`}),`
`,(0,S.jsx)(n.h3,{id:`base-colors`,children:`Base Colors`}),`
`,(0,S.jsx)(i,{children:p.map((e,t)=>(0,S.jsx)(a,{title:`--op-color-${e}-original`,subtitle:`${g(e)} Color`,colors:{[`--op-color-${e}-original`]:m(`--op-color-${e}-original`)}},t))}),`
`,(0,S.jsx)(n.h3,{id:`scales`,children:`Scales`}),`
`,(0,S.jsx)(i,{children:p.map(e=>h.map((t,n)=>(0,S.jsx)(a,{title:`--op-color-${e}-${t}`,subtitle:`${g(e)} Color`,colors:{[`--op-color-${e}-${t}`]:m(`--op-color-${e}-${t}`),[`--op-color-${e}-on-${t}`]:m(`--op-color-${e}-on-${t}`),[`--op-color-${e}-on-${t}-alt`]:m(`--op-color-${e}-on-${t}-alt`)}},n)))}),`
`,(0,S.jsx)(n.h2,{id:`overriding-color-scales`,children:`Overriding Color Scales`}),`
`,(0,S.jsxs)(n.p,{children:[`See `,(0,S.jsx)(n.a,{href:`?path=/docs/overview-scale-overriding--docs#color-scale-overriding`,children:`Color Scale Overriding`}),` for guidance on overriding each color scale.`]}),`
`,(0,S.jsx)(n.h2,{id:`custom-scale`,children:`Custom Scale`}),`
`,(0,S.jsxs)(n.p,{children:[`Your application may need a new scale. To add one, use the following template. Keep in mind, you will also need to add dark mode values for each variable as well. See `,(0,S.jsx)(n.a,{href:`?path=/docs/overview-themes--docs#theming`,children:`Theming`})]}),`
`,(0,S.jsx)(n.pre,{children:(0,S.jsx)(n.code,{className:`language-css`,children:`:root {
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
`})}),`
`,(0,S.jsx)(n.h3,{id:`oklch-template`,children:`OKLCH Template`}),`
`,(0,S.jsxs)(n.p,{children:[`With the `,(0,S.jsx)(n.a,{href:`?path=/docs/overview-oklch-colors--docs`,children:`OKLCH build`}),`, use this template instead. Its values are the default primary scale, so pick a `,(0,S.jsx)(n.code,{children:`-c`}),` and `,(0,S.jsx)(n.code,{children:`-h`}),` for your color, then adjust the steps as needed. Run the `,(0,S.jsx)(n.a,{href:`?path=/docs/tools-contrast-checker--docs`,children:`Contrast Checker`}),` to confirm the `,(0,S.jsx)(n.code,{children:`on`}),` colors still pass.`]}),`
`,(0,S.jsx)(n.pre,{children:(0,S.jsx)(n.code,{className:`language-css`,children:`:root {
  /* {name}-color */

  --op-color-{name}-l: new-value-l;
  --op-color-{name}-c: new-value-c;
  --op-color-{name}-h: new-value-h;

  /* {name}-semantic-scale */

  --op-color-{name}-original: oklch(var(--op-color-{name}-l) var(--op-color-{name}-c) var(--op-color-{name}-h));

  /* Main Scale */
  --op-color-{name}-plus-max: light-dark(
    oklch(100% 0 var(--op-color-{name}-h)),
    oklch(22.2% calc(var(--op-color-{name}-c) * 0.32) var(--op-color-{name}-h))
  );
  --op-color-{name}-plus-eight: light-dark(
    oklch(98.2% calc(var(--op-color-{name}-c) * 0.04) var(--op-color-{name}-h)),
    oklch(24.2% calc(var(--op-color-{name}-c) * 0.36) var(--op-color-{name}-h))
  );
  --op-color-{name}-plus-seven: light-dark(
    oklch(96.4% calc(var(--op-color-{name}-c) * 0.07) var(--op-color-{name}-h)),
    oklch(26.1% calc(var(--op-color-{name}-c) * 0.4) var(--op-color-{name}-h))
  );
  --op-color-{name}-plus-six: light-dark(
    oklch(94.7% calc(var(--op-color-{name}-c) * 0.11) var(--op-color-{name}-h)),
    oklch(29.9% calc(var(--op-color-{name}-c) * 0.49) var(--op-color-{name}-h))
  );
  --op-color-{name}-plus-five: light-dark(
    oklch(91.1% calc(var(--op-color-{name}-c) * 0.19) var(--op-color-{name}-h)),
    oklch(33.5% calc(var(--op-color-{name}-c) * 0.57) var(--op-color-{name}-h))
  );
  --op-color-{name}-plus-four: light-dark(
    oklch(85.7% calc(var(--op-color-{name}-c) * 0.31) var(--op-color-{name}-h)),
    oklch(35.3% calc(var(--op-color-{name}-c) * 0.61) var(--op-color-{name}-h))
  );
  --op-color-{name}-plus-three: light-dark(
    oklch(73.1% calc(var(--op-color-{name}-c) * 0.6) var(--op-color-{name}-h)),
    oklch(38% calc(var(--op-color-{name}-c) * 0.66) var(--op-color-{name}-h))
  );
  --op-color-{name}-plus-two: light-dark(
    oklch(67.7% calc(var(--op-color-{name}-c) * 0.73) var(--op-color-{name}-h)),
    oklch(40.6% calc(var(--op-color-{name}-c) * 0.72) var(--op-color-{name}-h))
  );
  --op-color-{name}-plus-one: light-dark(
    oklch(51.4% calc(var(--op-color-{name}-c) * 0.95) var(--op-color-{name}-h)),
    oklch(43.1% calc(var(--op-color-{name}-c) * 0.77) var(--op-color-{name}-h))
  );
  --op-color-{name}-base: light-dark(
    oklch(47.3% calc(var(--op-color-{name}-c) * 0.86) var(--op-color-{name}-h)),
    oklch(45.7% calc(var(--op-color-{name}-c) * 0.83) var(--op-color-{name}-h))
  );
  --op-color-{name}-minus-one: light-dark(
    oklch(44% calc(var(--op-color-{name}-c) * 0.79) var(--op-color-{name}-h)),
    oklch(47.3% calc(var(--op-color-{name}-c) * 0.86) var(--op-color-{name}-h))
  );
  --op-color-{name}-minus-two: light-dark(
    oklch(40.6% calc(var(--op-color-{name}-c) * 0.72) var(--op-color-{name}-h)),
    oklch(51.4% calc(var(--op-color-{name}-c) * 0.95) var(--op-color-{name}-h))
  );
  --op-color-{name}-minus-three: light-dark(
    oklch(37.1% calc(var(--op-color-{name}-c) * 0.64) var(--op-color-{name}-h)),
    oklch(53.9% calc(var(--op-color-{name}-c) * 1) var(--op-color-{name}-h))
  );
  --op-color-{name}-minus-four: light-dark(
    oklch(33.5% calc(var(--op-color-{name}-c) * 0.57) var(--op-color-{name}-h)),
    oklch(57.2% calc(var(--op-color-{name}-c) * 0.99) var(--op-color-{name}-h))
  );
  --op-color-{name}-minus-five: light-dark(
    oklch(29.9% calc(var(--op-color-{name}-c) * 0.49) var(--op-color-{name}-h)),
    oklch(67.7% calc(var(--op-color-{name}-c) * 0.73) var(--op-color-{name}-h))
  );
  --op-color-{name}-minus-six: light-dark(
    oklch(26.1% calc(var(--op-color-{name}-c) * 0.4) var(--op-color-{name}-h)),
    oklch(74.9% calc(var(--op-color-{name}-c) * 0.55) var(--op-color-{name}-h))
  );
  --op-color-{name}-minus-seven: light-dark(
    oklch(18.1% calc(var(--op-color-{name}-c) * 0.22) var(--op-color-{name}-h)),
    oklch(82.1% calc(var(--op-color-{name}-c) * 0.39) var(--op-color-{name}-h))
  );
  --op-color-{name}-minus-eight: light-dark(
    oklch(13.8% calc(var(--op-color-{name}-c) * 0.13) var(--op-color-{name}-h)),
    oklch(89.3% calc(var(--op-color-{name}-c) * 0.23) var(--op-color-{name}-h))
  );
  --op-color-{name}-minus-max: light-dark(
    oklch(0% 0 var(--op-color-{name}-h)),
    oklch(100% 0 var(--op-color-{name}-h))
  );

  /* On Scale */
  --op-color-{name}-on-plus-max: light-dark(
    oklch(0% 0 var(--op-color-{name}-h)),
    oklch(100% 0 var(--op-color-{name}-h))
  );
  --op-color-{name}-on-plus-max-alt: light-dark(
    oklch(29.9% calc(var(--op-color-{name}-c) * 0.49) var(--op-color-{name}-h)),
    oklch(80.3% calc(var(--op-color-{name}-c) * 0.43) var(--op-color-{name}-h))
  );
  --op-color-{name}-on-plus-eight: light-dark(
    oklch(13.8% calc(var(--op-color-{name}-c) * 0.13) var(--op-color-{name}-h)),
    oklch(89.3% calc(var(--op-color-{name}-c) * 0.23) var(--op-color-{name}-h))
  );
  --op-color-{name}-on-plus-eight-alt: light-dark(
    oklch(33.5% calc(var(--op-color-{name}-c) * 0.57) var(--op-color-{name}-h)),
    oklch(73.1% calc(var(--op-color-{name}-c) * 0.6) var(--op-color-{name}-h))
  );
  --op-color-{name}-on-plus-seven: light-dark(
    oklch(18.1% calc(var(--op-color-{name}-c) * 0.22) var(--op-color-{name}-h)),
    oklch(82.1% calc(var(--op-color-{name}-c) * 0.39) var(--op-color-{name}-h))
  );
  --op-color-{name}-on-plus-seven-alt: light-dark(
    oklch(37.1% calc(var(--op-color-{name}-c) * 0.64) var(--op-color-{name}-h)),
    oklch(67.7% calc(var(--op-color-{name}-c) * 0.73) var(--op-color-{name}-h))
  );
  --op-color-{name}-on-plus-six: light-dark(
    oklch(26.1% calc(var(--op-color-{name}-c) * 0.4) var(--op-color-{name}-h)),
    oklch(74.9% calc(var(--op-color-{name}-c) * 0.55) var(--op-color-{name}-h))
  );
  --op-color-{name}-on-plus-six-alt: light-dark(
    oklch(35.3% calc(var(--op-color-{name}-c) * 0.61) var(--op-color-{name}-h)),
    oklch(96.4% calc(var(--op-color-{name}-c) * 0.07) var(--op-color-{name}-h))
  );
  --op-color-{name}-on-plus-five: light-dark(
    oklch(29.9% calc(var(--op-color-{name}-c) * 0.49) var(--op-color-{name}-h)),
    oklch(74.9% calc(var(--op-color-{name}-c) * 0.55) var(--op-color-{name}-h))
  );
  --op-color-{name}-on-plus-five-alt: light-dark(
    oklch(47.3% calc(var(--op-color-{name}-c) * 0.86) var(--op-color-{name}-h)),
    oklch(87.5% calc(var(--op-color-{name}-c) * 0.27) var(--op-color-{name}-h))
  );
  --op-color-{name}-on-plus-four: light-dark(
    oklch(33.5% calc(var(--op-color-{name}-c) * 0.57) var(--op-color-{name}-h)),
    oklch(82.1% calc(var(--op-color-{name}-c) * 0.39) var(--op-color-{name}-h))
  );
  --op-color-{name}-on-plus-four-alt: light-dark(
    oklch(13.8% calc(var(--op-color-{name}-c) * 0.13) var(--op-color-{name}-h)),
    oklch(92.9% calc(var(--op-color-{name}-c) * 0.15) var(--op-color-{name}-h))
  );
  --op-color-{name}-on-plus-three: light-dark(
    oklch(29.9% calc(var(--op-color-{name}-c) * 0.49) var(--op-color-{name}-h)),
    oklch(80.3% calc(var(--op-color-{name}-c) * 0.43) var(--op-color-{name}-h))
  );
  --op-color-{name}-on-plus-three-alt: light-dark(
    oklch(20.2% calc(var(--op-color-{name}-c) * 0.27) var(--op-color-{name}-h)),
    oklch(98.2% calc(var(--op-color-{name}-c) * 0.04) var(--op-color-{name}-h))
  );
  --op-color-{name}-on-plus-two: light-dark(
    oklch(26.1% calc(var(--op-color-{name}-c) * 0.4) var(--op-color-{name}-h)),
    oklch(82.1% calc(var(--op-color-{name}-c) * 0.39) var(--op-color-{name}-h))
  );
  --op-color-{name}-on-plus-two-alt: light-dark(
    oklch(16% calc(var(--op-color-{name}-c) * 0.18) var(--op-color-{name}-h)),
    oklch(92.9% calc(var(--op-color-{name}-c) * 0.15) var(--op-color-{name}-h))
  );
  --op-color-{name}-on-plus-one: light-dark(
    oklch(100% 0 var(--op-color-{name}-h)),
    oklch(82.1% calc(var(--op-color-{name}-c) * 0.39) var(--op-color-{name}-h))
  );
  --op-color-{name}-on-plus-one-alt: light-dark(
    oklch(95.6% calc(var(--op-color-{name}-c) * 0.09) var(--op-color-{name}-h)),
    oklch(98.2% calc(var(--op-color-{name}-c) * 0.04) var(--op-color-{name}-h))
  );
  --op-color-{name}-on-base: light-dark(
    oklch(100% 0 var(--op-color-{name}-h)),
    oklch(100% 0 var(--op-color-{name}-h))
  );
  --op-color-{name}-on-base-alt: light-dark(
    oklch(89.3% calc(var(--op-color-{name}-c) * 0.23) var(--op-color-{name}-h)),
    oklch(85.7% calc(var(--op-color-{name}-c) * 0.31) var(--op-color-{name}-h))
  );
  --op-color-{name}-on-minus-one: light-dark(
    oklch(94.7% calc(var(--op-color-{name}-c) * 0.11) var(--op-color-{name}-h)),
    oklch(98.2% calc(var(--op-color-{name}-c) * 0.04) var(--op-color-{name}-h))
  );
  --op-color-{name}-on-minus-one-alt: light-dark(
    oklch(83.9% calc(var(--op-color-{name}-c) * 0.35) var(--op-color-{name}-h)),
    oklch(91.1% calc(var(--op-color-{name}-c) * 0.19) var(--op-color-{name}-h))
  );
  --op-color-{name}-on-minus-two: light-dark(
    oklch(91.1% calc(var(--op-color-{name}-c) * 0.19) var(--op-color-{name}-h)),
    oklch(98.2% calc(var(--op-color-{name}-c) * 0.04) var(--op-color-{name}-h))
  );
  --op-color-{name}-on-minus-two-alt: light-dark(
    oklch(80.3% calc(var(--op-color-{name}-c) * 0.43) var(--op-color-{name}-h)),
    oklch(92.9% calc(var(--op-color-{name}-c) * 0.15) var(--op-color-{name}-h))
  );
  --op-color-{name}-on-minus-three: light-dark(
    oklch(87.5% calc(var(--op-color-{name}-c) * 0.27) var(--op-color-{name}-h)),
    oklch(98.2% calc(var(--op-color-{name}-c) * 0.04) var(--op-color-{name}-h))
  );
  --op-color-{name}-on-minus-three-alt: light-dark(
    oklch(76.7% calc(var(--op-color-{name}-c) * 0.51) var(--op-color-{name}-h)),
    oklch(96.4% calc(var(--op-color-{name}-c) * 0.07) var(--op-color-{name}-h))
  );
  --op-color-{name}-on-minus-four: light-dark(
    oklch(85.7% calc(var(--op-color-{name}-c) * 0.31) var(--op-color-{name}-h)),
    oklch(10.9% calc(var(--op-color-{name}-c) * 0.09) var(--op-color-{name}-h))
  );
  --op-color-{name}-on-minus-four-alt: light-dark(
    oklch(74.9% calc(var(--op-color-{name}-c) * 0.55) var(--op-color-{name}-h)),
    oklch(10.9% calc(var(--op-color-{name}-c) * 0.09) var(--op-color-{name}-h))
  );
  --op-color-{name}-on-minus-five: light-dark(
    oklch(89.3% calc(var(--op-color-{name}-c) * 0.23) var(--op-color-{name}-h)),
    oklch(10.9% calc(var(--op-color-{name}-c) * 0.09) var(--op-color-{name}-h))
  );
  --op-color-{name}-on-minus-five-alt: light-dark(
    oklch(80.3% calc(var(--op-color-{name}-c) * 0.43) var(--op-color-{name}-h)),
    oklch(29.9% calc(var(--op-color-{name}-c) * 0.49) var(--op-color-{name}-h))
  );
  --op-color-{name}-on-minus-six: light-dark(
    oklch(94.7% calc(var(--op-color-{name}-c) * 0.11) var(--op-color-{name}-h)),
    oklch(18.1% calc(var(--op-color-{name}-c) * 0.22) var(--op-color-{name}-h))
  );
  --op-color-{name}-on-minus-six-alt: light-dark(
    oklch(83.9% calc(var(--op-color-{name}-c) * 0.35) var(--op-color-{name}-h)),
    oklch(35.3% calc(var(--op-color-{name}-c) * 0.61) var(--op-color-{name}-h))
  );
  --op-color-{name}-on-minus-seven: light-dark(
    oklch(96.4% calc(var(--op-color-{name}-c) * 0.07) var(--op-color-{name}-h)),
    oklch(18.1% calc(var(--op-color-{name}-c) * 0.22) var(--op-color-{name}-h))
  );
  --op-color-{name}-on-minus-seven-alt: light-dark(
    oklch(85.7% calc(var(--op-color-{name}-c) * 0.31) var(--op-color-{name}-h)),
    oklch(42.3% calc(var(--op-color-{name}-c) * 0.76) var(--op-color-{name}-h))
  );
  --op-color-{name}-on-minus-eight: light-dark(
    oklch(98.2% calc(var(--op-color-{name}-c) * 0.04) var(--op-color-{name}-h)),
    oklch(13.8% calc(var(--op-color-{name}-c) * 0.13) var(--op-color-{name}-h))
  );
  --op-color-{name}-on-minus-eight-alt: light-dark(
    oklch(87.5% calc(var(--op-color-{name}-c) * 0.27) var(--op-color-{name}-h)),
    oklch(45.7% calc(var(--op-color-{name}-c) * 0.83) var(--op-color-{name}-h))
  );
  --op-color-{name}-on-minus-max: light-dark(
    oklch(100% 0 var(--op-color-{name}-h)),
    oklch(0% 0 var(--op-color-{name}-h))
  );
  --op-color-{name}-on-minus-max-alt: light-dark(
    oklch(89.3% calc(var(--op-color-{name}-c) * 0.23) var(--op-color-{name}-h)),
    oklch(45.7% calc(var(--op-color-{name}-c) * 0.83) var(--op-color-{name}-h))
  );
}
`})})]})}function x(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,S.jsx)(n,{...e,children:(0,S.jsx)(b,{...e})}):b(e)}var S;function C(){return(C=e((()=>{S=r(),n(),l(),v(),f(),u()})))()}C();export{x as default};