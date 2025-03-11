import{j as e,M as r}from"./index-ChDEEEOA.js";import{useMDXComponents as t}from"./index-BVtDYASa.js";import"./iframe-BeNESbB0.js";import"./index-BiL3ubqk.js";import"./index-DrFu-skq.js";function a(o){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...t(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Overview/Themes"}),`
`,e.jsx(n.h1,{id:"themes",children:"Themes"}),`
`,e.jsx(n.p,{children:`Optics defines a default theme along with it's dark mode.
If you import the design system, it will be used automatically.`}),`
`,e.jsx(n.h2,{id:"dark-mode",children:"Dark Mode"}),`
`,e.jsxs(n.p,{children:[`By default, Dark mode will automatically apply when your system is set to dark mode.
You can control the theme mode manually by setting a data attribute on the root html element to either `,e.jsx(n.code,{children:"light"})," or ",e.jsx(n.code,{children:"dark"}),`.
This will ignore the system preference and use specified theme mode (I.E. your application doesn't need a dark mode).`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<!doctype html>
<html data-theme-mode="light">
  ...
</html>
`})}),`
`,e.jsx(n.p,{children:"The theme mode can also be controlled within an individual component, rather than at the app level. This can be done by using the following attribute:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`.my-component {
  color-scheme: only light;
  /*
    Options:
    color-scheme: light dark;
    color-scheme: only light;
    color-scheme: only dark;
  */

  background-color: var(--op-color-primary-plus-one);
  color: var(--op-color-primary-on-plus-one);
}
`})}),`
`,e.jsxs(n.p,{children:["See the ",e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/color-scheme",rel:"nofollow",children:"Color Scheme"})," and ",e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/light-dark",rel:"nofollow",children:"light-dark()"})," for more information."]}),`
`,e.jsx(n.h2,{id:"theming",children:"Theming"}),`
`,e.jsx(n.p,{children:`If you want to customize your application, you can provide your own theme files that serve as overrides to the existing tokens.
An example implementation your main css file would look like:`}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`@import '@rolemodel/optics';

@import 'stylesheets/theme/my_app_theme';
`})}),`
`,e.jsx(n.p,{children:"Your custom theme can change any tokens, including colors, radius, fonts, even redefine the luminosity and semantic scales. It generally will look like:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`@import url('https://fonts.googleapis.com/css2?family=Coming+Soon&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Grandstander:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

:root {
  /* Colors */
  --op-color-primary-h: my-new-value;
  --op-color-primary-s: my-new-value;
  --op-color-primary-l: my-new-value;

  /* Color Scale */
  --op-color-primary-plus-two: light-dark(
    hsl(var(--op-color-primary-h) var(--op-color-primary-s) 64%),
    hsl(var(--op-color-primary-h) var(--op-color-primary-s) 32%)
  );

  /* Fonts */
  --op-font-family: 'Coming Soon', sans-serif;
}

@media (prefers-color-scheme: dark) {
  :root:not([data-theme-mode='light']) {
    --op-font-family: 'Grandstander', sans-serif;
  }
}

:root[data-theme-mode='dark'] {
  --op-font-family: 'Grandstander', sans-serif;
}
`})}),`
`,e.jsx(n.h2,{id:"dynamic-themes",children:"Dynamic Themes"}),`
`,e.jsx(n.p,{children:"Your application can have multiple predefined themes which can be switched between by setting a data attribute on the root html element."}),`
`,e.jsx(n.p,{children:`The theme can be created in a similar way to default theme overriding with the exception of a rule on when it is applied.
This theme would always be included in your application, but only activate when setting the data attribute.`}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<!doctype html>
<html data-theme="example">
  ...
</html>
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`@import url('https://fonts.googleapis.com/css2?family=Coming+Soon&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Grandstander:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

:root[data-theme='example'] {
  /* Colors */
  --op-color-primary-h: my-new-value;
  --op-color-primary-s: my-new-value;
  --op-color-primary-l: my-new-value;

  /* Color Scale */
  --op-color-primary-plus-two: light-dark(
    hsl(var(--op-color-primary-h) var(--op-color-primary-s) 64%),
    hsl(var(--op-color-primary-h) var(--op-color-primary-s) 32%)
  );

  /* Fonts */
  --op-font-family: 'Coming Soon', sans-serif;
}

@media (prefers-color-scheme: dark) {
  :root[data-theme='example']:not([data-theme-mode='light']) {
    /* Fonts */
    --op-font-family: 'Grandstander', sans-serif;
  }
}

:root[data-theme='example'][data-theme-mode='dark'] {
  /* Fonts */
  --op-font-family: 'Grandstander', sans-serif;
}
`})}),`
`,e.jsx(n.p,{children:"Dynamic themes also support both light and dark mode and can be manually controlled with data attributes."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<!doctype html>
<html data-theme="example" data-theme-mode="light">
  ...
</html>
`})})]})}function d(o={}){const{wrapper:n}={...t(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(a,{...o})}):a(o)}export{d as default};
