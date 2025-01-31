import{j as e}from"./jsx-runtime-BSLFt7-t.js";import{u as c}from"./index-DaIfncqW.js";import{M as a,C as i,d}from"./index-DqCfslyg.js";import{A as l,D as r,F as h,a as m}from"./Accordion.stories-C_yR86LA.js";import{c as p}from"./sourceCodeLink-Chh3FteF.js";import{c as s}from"./Alert-BuDoz_3e.js";import"./iframe-DF7dRfZq.js";import"../sb-preview/runtime.js";import"./index-B5rfWaSj.js";import"./index-DrFu-skq.js";import"./Icon-D9QrNi_D.js";import"./Button-NTR86KUp.js";function t(o){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...c(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:l}),`
`,e.jsx(n.h1,{id:"accordion",children:"Accordion"}),`
`,e.jsx("div",{dangerouslySetInnerHTML:{__html:p({link:"components/accordion.css"}).outerHTML}}),`
`,e.jsxs(n.p,{children:["Accordion classes are built on the ",e.jsx(n.code,{children:"details"})," and ",e.jsx(n.code,{children:"summary"})," html elements. They provide consistent and composable styling for disclosure widgets."]}),`
`,e.jsx(n.h2,{id:"playground",children:"Playground"}),`
`,e.jsx(i,{of:r}),`
`,e.jsx(d,{of:r}),`
`,e.jsx(n.h3,{id:"selective-imports",children:"Selective Imports"}),`
`,e.jsxs(n.p,{children:["Accordion can be used as a standalone component, however, it does have a few dependencies. To see a full dependency list, see ",e.jsx(n.a,{href:"?path=/docs/overview-selective-imports--docs#dependencies",children:"Dependency Graph"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`// Depends on
@import '@rolemodel/optics/dist/scss/core/tokens';
@import '@rolemodel/optics/dist/scss/core/base';
@import '@rolemodel/optics/dist/scss/components/icon';

// Component
@import '@rolemodel/optics/dist/scss/components/accordion';
`})}),`
`,e.jsx(n.h2,{id:"variations",children:"Variations"}),`
`,e.jsx(n.h3,{id:"default",children:"Default"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:".accordion"})," used on a ",e.jsx(n.code,{children:"details"})," element with a ",e.jsx(n.code,{children:"summary"}),` element as the first child will create an accordion component.
Within the `,e.jsx(n.code,{children:"summary"}),", a span with the class ",e.jsx(n.code,{children:"accordion__label"})," will be used as the title of the accordion and ",e.jsx(n.code,{children:"accordion__marker"})," will be used as the icon."]}),`
`,e.jsxs(n.p,{children:["Other content can be placed within the summary, but the ",e.jsx(n.code,{children:"accordion__label"})," and ",e.jsx(n.code,{children:"accordion__marker"})," classes must be used for the accordion to work properly."]}),`
`,e.jsx(i,{of:r}),`
`,e.jsx(n.h3,{id:"swapped-label-and-marker",children:"Swapped Label and Marker"}),`
`,e.jsx(n.p,{children:"Positioning the marker after the label inside of the summary will result in the marker being on the right side of the accordion."}),`
`,e.jsx(i,{of:h}),`
`,e.jsx(n.h3,{id:"additional-header-content",children:"Additional Header Content"}),`
`,e.jsxs(n.p,{children:["Additional content can be included within the ",e.jsx(n.code,{children:"summary"})," element in any order. Anything not within the ",e.jsx(n.code,{children:".accordion__label"})," or ",e.jsx(n.code,{children:".accordion__marker"})," classes will be rendered wherever you place it in the ",e.jsx(n.code,{children:"summary"}),". Note: Content placed between the label and the marker will fill the width between them. If placing a button there, you may want to wrap it in a div so the button doesn't stretch the whole space."]}),`
`,e.jsx(i,{of:m}),`
`,e.jsx(n.h2,{id:"accordion-api",children:"Accordion API"}),`
`,e.jsx(n.p,{children:"Styles are built on CSS variables scoped to the accordion."}),`
`,e.jsx(n.p,{children:"Here are the variables that can be customized:"}),`
`,`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`--_op-accordion-summary-min-height
`})}),`
`,`
`,e.jsx(n.h2,{id:"customizing-accordion-styles",children:"Customizing Accordion styles"}),`
`,e.jsx("div",{dangerouslySetInnerHTML:{__html:s({title:"Important!",description:"These patterns represent how to customize the style of the accordion for your project."}).outerHTML}}),`
`,e.jsxs(n.p,{children:["The accordion classes are structured using the ",e.jsx(n.a,{href:"https://getbem.com/naming",rel:"nofollow",children:"BEM methodology"}),"."]}),`
`,e.jsxs(n.p,{children:["This allows us to define core styles on a main ",e.jsx(n.a,{href:"https://getbem.com/naming/#block",rel:"nofollow",children:"block"})," class, and use ",e.jsx(n.a,{href:"https://getbem.com/naming/#modifier",rel:"nofollow",children:"modifiers"})," to encapsulate variant styles. You can modify all accordion behavior by overriding the ",e.jsx(n.code,{children:".accordion"})," selector and setting any properties:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`.accordion {
}
`})}),`
`,e.jsx(n.h2,{id:"new-accordion-variations",children:"New Accordion Variations"}),`
`,e.jsx("div",{dangerouslySetInnerHTML:{__html:s({title:"Important!",description:"These patterns represent how to create new variations of the accordion for your project."}).outerHTML}}),`
`,e.jsxs(n.p,{children:["Your application may need a variation. To add one, just follow this template. Note the double hyphen, indicating that this is a ",e.jsx(n.a,{href:"https://getbem.com/naming/#modifier",rel:"nofollow",children:"modifier"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`.accordion--{name} {
  --_op-accordion-summary-min-height: var(--op-font-small);
}
`})})]})}function M(o={}){const{wrapper:n}={...c(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(t,{...o})}):t(o)}export{M as default};
