import{j as e}from"./jsx-runtime-Ce5xs4Wy.js";import{u as a}from"./index-CPcV2wD4.js";import{M as i}from"./index-C52FNCyE.js";import"./iframe-BN7FcqzY.js";import"../sb-preview/runtime.js";import"./index-B5rfWaSj.js";import"./index-DrFu-skq.js";function o(t){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...a(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Overview/Themes"}),`
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
`,e.jsx(n.h2,{id:"theming",children:"Theming"}),`
`,e.jsx(n.p,{children:`If you want to customize your application, you can provide your own theme files that serve as overrides to the existing tokens.
An example implementation your main scss file would look like:`}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`@import '@rolemodel/optics';

@import 'stylesheets/theme/my_app_theme';
`})}),`
`,e.jsx(n.p,{children:"Your custom theme can change any tokens, including colors, radius, fonts, even redefine the luminosity and semantic scales. It generally will look like:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`@import url('https://fonts.googleapis.com/css2?family=Coming+Soon&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Grandstander:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

@mixin color-varieties {
  --op-color-primary-h: my-new-value;
  --op-color-primary-s: my-new-value;
  --op-color-primary-l: my-new-value;
}

@mixin fonts {
  --op-font-family: 'Coming Soon', sans-serif;
}

@mixin fonts-dark {
  --op-font-family: 'Grandstander', sans-serif;
}

:root {
  @include color-varieties;
  @include fonts;
}

@media (prefers-color-scheme: dark) {
  :root:not([data-theme-mode='light']) {
    @include fonts-dark;
  }
}

:root[data-theme-mode='dark'] {
  @include fonts-dark;
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

@mixin color-varieties {
  --op-color-primary-h: my-new-value;
  --op-color-primary-s: my-new-value;
  --op-color-primary-l: my-new-value;
}

@mixin fonts {
  --op-font-family: 'Coming Soon', sans-serif;
}

@mixin fonts-dark {
  --op-font-family: 'Grandstander', sans-serif;
}

:root[data-theme='example'] {
  @include color-varieties;
  @include fonts;
}

@media (prefers-color-scheme: dark) {
  :root[data-theme='example']:not([data-theme-mode='light']) {
    @include fonts-dark;
  }
}

:root[data-theme='example'][data-theme-mode='dark'] {
  @include fonts-dark;
}
`})}),`
`,e.jsx(n.p,{children:"Dynamic themes support both light and dark mode and can be manually controlled with data attributes."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<!doctype html>
<html data-theme="example" data-theme-mode="light">
  ...
</html>
`})})]})}function p(t={}){const{wrapper:n}={...a(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{p as default};
