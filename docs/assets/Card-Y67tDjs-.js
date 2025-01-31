import{j as e}from"./jsx-runtime-DGhn8jkz.js";import{u as c}from"./index-BSTJ9CkC.js";import{M as i,C as r,d as t}from"./index-BL4nfc20.js";import{C as l,P as o,a as h,F as p,b as m,S as x}from"./Card.stories-BSKuAcvm.js";import{c as j}from"./sourceCodeLink-Chh3FteF.js";import{c as d}from"./Alert-FDXrI8Fa.js";import"./iframe-B_OOKKxU.js";import"../sb-preview/runtime.js";import"./index-B5rfWaSj.js";import"./index-DrFu-skq.js";import"./Button-NTR86KUp.js";import"./Icon-D9QrNi_D.js";function a(s){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...c(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:l}),`
`,e.jsx(n.h1,{id:"card",children:"Card"}),`
`,e.jsx("div",{dangerouslySetInnerHTML:{__html:j({link:"components/card.css"}).outerHTML}}),`
`,e.jsx(n.p,{children:'Card classes can be used to denote bordered sections of an application. They provide simple styles to create sections or "cards" for your interface. They can also be used as a starting point for "row" or list styles.'}),`
`,e.jsx(n.h2,{id:"playground",children:"Playground"}),`
`,e.jsx(r,{of:o}),`
`,e.jsx(t,{of:o}),`
`,e.jsx(n.h3,{id:"selective-imports",children:"Selective Imports"}),`
`,e.jsxs(n.p,{children:["Card can be used as a standalone component, however, it does have a few dependencies. To see a full dependency list, see ",e.jsx(n.a,{href:"?path=/docs/overview-selective-imports--docs#dependencies",children:"Dependency Graph"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`/* Depends on */
@import '@rolemodel/optics/dist/css/core/tokens';
@import '@rolemodel/optics/dist/css/core/base';

/* Component */
@import '@rolemodel/optics/dist/css/components/card';
`})}),`
`,e.jsx(n.h2,{id:"variations",children:"Variations"}),`
`,e.jsx(n.h3,{id:"plain",children:"Plain"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:".card"})," Provides basic card styles."]}),`
`,e.jsx(r,{of:o}),`
`,e.jsx(n.h3,{id:"padded",children:"Padded"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:".card--padded"})," Provides a padded card."]}),`
`,e.jsx(r,{of:h}),`
`,e.jsx(n.h3,{id:"full",children:"Full"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:".card__header"}),", ",e.jsx(n.code,{children:".card__body"}),", and ",e.jsx(n.code,{children:".card__footer"})," Provide padded sections of a card."]}),`
`,e.jsx(r,{of:p}),`
`,e.jsx(n.h3,{id:"condensed",children:"Condensed"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:".card--condensed"})," Changes the padding for everything below it."]}),`
`,e.jsx(r,{of:m}),`
`,e.jsx(n.h3,{id:"shadow",children:"Shadow"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:".card--shadow-x-small"}),", ",e.jsx(n.code,{children:".card--shadow-small"}),", ",e.jsx(n.code,{children:".card--shadow-medium"}),", ",e.jsx(n.code,{children:".card--shadow-large"}),", ",e.jsx(n.code,{children:".card--shadow-x-large"})," Add a shadow elevation effect to the card."]}),`
`,e.jsx(r,{of:x}),`
`,e.jsx(n.h2,{id:"customizing-card-styles",children:"Customizing Card styles"}),`
`,e.jsx("div",{dangerouslySetInnerHTML:{__html:d({title:"Important!",description:"These patterns represent how to customize the style of the card for your project."}).outerHTML}}),`
`,e.jsxs(n.p,{children:["The card classes are structured using the ",e.jsx(n.a,{href:"https://getbem.com/naming",rel:"nofollow",children:"BEM methodology"}),"."]}),`
`,e.jsxs(n.p,{children:["This allows us to define core styles on a main ",e.jsx(n.a,{href:"https://getbem.com/naming/#block",rel:"nofollow",children:"block"})," class, and use ",e.jsx(n.a,{href:"https://getbem.com/naming/#modifier",rel:"nofollow",children:"modifiers"})," to encapsulate variant styles. You can modify all card behavior by overriding the ",e.jsx(n.code,{children:".card"})," selector and setting any properties:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`.card {
  font-size: var(--op-font-2x-large);
}
`})}),`
`,e.jsx(n.p,{children:"If you need to override the behavior of a particular card modifier, you can open the respective class and set or change properties"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`.card--modifier {
}
`})}),`
`,e.jsx(n.h2,{id:"new-card-variations",children:"New Card Variations"}),`
`,e.jsx("div",{dangerouslySetInnerHTML:{__html:d({title:"Important!",description:"These patterns represent how to create new variations of the card for your project."}).outerHTML}}),`
`,e.jsxs(n.p,{children:["Your application may need a variation. To add one, just follow this template. Note the double hyphen, indicating that this is a ",e.jsx(n.a,{href:"https://getbem.com/naming/#modifier",rel:"nofollow",children:"modifier"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`.card--{name} {
  background-color:
  color:
}
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`.card--purple {
  border-radius: var(--op-radius-large);
  font-size: var(--op-font-2x-large);

  .card__header {
    background-color: purple;
    color: white;
  }
}
`})})]})}function S(s={}){const{wrapper:n}={...c(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(a,{...s})}):a(s)}export{S as default};
