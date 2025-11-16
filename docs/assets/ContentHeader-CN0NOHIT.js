import{j as e,M as c,C as o,a as d}from"./WithTooltip-SK46ZJ2J-D25rk-eE.js";import{useMDXComponents as a}from"./index-DW-nmGvp.js";import{C as l,D as s,W as h,a as p,b as m,S as x,G as u}from"./ContentHeader.stories-Ba78WMKL.js";import{c as j}from"./sourceCodeLink-Chh3FteF.js";import{c as r}from"./Alert-CAEs4394.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-CR1j2QAj.js";import"./Button-B21kpIpO.js";import"./Icon-uqCTS4Mm.js";function i(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...a(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:l}),`
`,e.jsx(n.h1,{id:"content-header",children:"Content Header"}),`
`,e.jsx("div",{dangerouslySetInnerHTML:{__html:j({link:"components/content-header.css"}).outerHTML}}),`
`,e.jsx(n.p,{children:"Content Header classes can be used to denote a page or content section header of an application. They provide simple styles to provide context and actions for a page or section within your interface."}),`
`,e.jsx(n.h2,{id:"playground",children:"Playground"}),`
`,e.jsx(o,{of:s}),`
`,e.jsx(d,{of:s}),`
`,e.jsx(n.h3,{id:"selective-imports",children:"Selective Imports"}),`
`,e.jsxs(n.p,{children:["Content Header can be used as a standalone component, however, it does have a few dependencies. To see a full dependency list, see ",e.jsx(n.a,{href:"?path=/docs/overview-selective-imports--docs#dependencies",children:"Dependency Graph"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`/* Depends on */
@import '@rolemodel/optics/dist/css/core/fonts';
@import '@rolemodel/optics/dist/css/core/tokens';
@import '@rolemodel/optics/dist/css/core/base';

/* Component */
@import '@rolemodel/optics/dist/css/components/content-header';
`})}),`
`,e.jsx(n.h2,{id:"variations",children:"Variations"}),`
`,e.jsx(n.h3,{id:"default",children:"Default"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:".content-header"})," Provides basic content header styles."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:".context-header__details"})," provides a section for the title, context, and subline."]}),`
`,e.jsx(o,{of:s}),`
`,e.jsx(n.h3,{id:"with-context",children:"With Context"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:".context-header__context"})," provides a context label above the title."]}),`
`,e.jsx(o,{of:h}),`
`,e.jsx(n.h3,{id:"with-subline",children:"With Subline"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:".context-header__subline"})," provides a subline below the title."]}),`
`,e.jsx(o,{of:p}),`
`,e.jsx(n.h3,{id:"with-aside",children:"With Aside"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:".context-header__aside"})," provides an aside section additional information or actions. It can hold anything you want, but is often used for page specific actions."]}),`
`,e.jsx(o,{of:m}),`
`,e.jsx(n.h3,{id:"simple",children:"Simple"}),`
`,e.jsx(n.p,{children:"The title is really the only required part of a content header, though only really meaningful when used with actions, context, or subline."}),`
`,e.jsx(o,{of:x}),`
`,e.jsx(n.h3,{id:"github-example",children:"GitHub Example"}),`
`,e.jsx(n.p,{children:"This example demonstrates a content header with minimal customization achieving a similar look to what might be found on a GitHub pull request page."}),`
`,e.jsx(o,{of:u}),`
`,e.jsx(n.h2,{id:"customizing-content-header-styles",children:"Customizing Content Header styles"}),`
`,e.jsx("div",{dangerouslySetInnerHTML:{__html:r({title:"Important!",description:"These patterns represent how to customize the style of the content header for your project."}).outerHTML}}),`
`,e.jsxs(n.p,{children:["The content header classes are structured using the ",e.jsx(n.a,{href:"https://getbem.com/naming",rel:"nofollow",children:"BEM methodology"}),"."]}),`
`,e.jsxs(n.p,{children:["This allows us to define core styles on a main ",e.jsx(n.a,{href:"https://getbem.com/naming/#block",rel:"nofollow",children:"block"})," class, and use ",e.jsx(n.a,{href:"https://getbem.com/naming/#modifier",rel:"nofollow",children:"modifiers"})," to encapsulate variant styles. You can modify all content header behavior by overriding the ",e.jsx(n.code,{children:".content-header"})," class and setting any properties:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`.content-header {
  padding-block: var(--op-space-3x-large);
}
`})}),`
`,e.jsx(n.p,{children:"If you need to override the behavior of the header, you can open the class and set or change properties"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`.content-header--modifier {
  padding-block: var(--op-space-2x-large);
}
`})}),`
`,e.jsx(n.h2,{id:"new-content-header-variations",children:"New Content Header Variations"}),`
`,e.jsx("div",{dangerouslySetInnerHTML:{__html:r({title:"Important!",description:"These patterns represent how to create new variations of the content header for your project."}).outerHTML}}),`
`,e.jsxs(n.p,{children:["Your application may need a variation. To add one, just follow this template. Note the double hyphen, indicating that this is a ",e.jsx(n.a,{href:"https://getbem.com/naming/#modifier",rel:"nofollow",children:"modifier"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`.content-header--{name} {
  background-color: var(--op-color-primary-on-plus-four);

  .content-header__context {
    color: var(--op-color-primary-on-plus-four-alt);
  }

  .content-header__title {
    color: var(--op-color-primary-on-plus-four);
  }

  .content-header__subline {
    color: var(--op-color-primary-on-plus-four-alt);
  }
}
`})})]})}function T(t={}){const{wrapper:n}={...a(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{T as default};
