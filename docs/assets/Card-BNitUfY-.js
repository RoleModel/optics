import{j as e}from"./jsx-runtime-Ce5xs4Wy.js";import{u as c}from"./index-CPcV2wD4.js";import{M as t,C as r,d as i}from"./index-C52FNCyE.js";import{C as l,P as o,a as h,F as p,b as x,S as j}from"./Card.stories-CaGJCWzE.js";import{c as m}from"./sourceCodeLink-Chh3FteF.js";import{c as d}from"./Alert-93ao7bSE.js";import"./iframe-BN7FcqzY.js";import"../sb-preview/runtime.js";import"./index-B5rfWaSj.js";import"./index-DrFu-skq.js";import"./Button-CoyIamir.js";import"./Icon-D9QrNi_D.js";function a(n){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...c(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:l}),`
`,e.jsx(s.h1,{id:"card",children:"Card"}),`
`,e.jsx("div",{dangerouslySetInnerHTML:{__html:m({link:"components/card.scss"}).outerHTML}}),`
`,e.jsx(s.p,{children:'Card classes can be used to denote bordered sections of an application. They provide simple styles to create sections or "cards" for your interface. They can also be used as a starting point for "row" or list styles.'}),`
`,e.jsx(s.h2,{id:"playground",children:"Playground"}),`
`,e.jsx(r,{of:o}),`
`,e.jsx(i,{of:o}),`
`,e.jsx(s.h3,{id:"selective-imports",children:"Selective Imports"}),`
`,e.jsxs(s.p,{children:["Card can be used as a standalone component, however, it does have a few dependencies. To see a full dependency list, see ",e.jsx(s.a,{href:"?path=/docs/overview-selective-imports--docs#dependencies",children:"Dependency Graph"})]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-css",children:`// Depends on
@import '@rolemodel/optics/dist/scss/core/tokens';
@import '@rolemodel/optics/dist/scss/core/base';

// Component
@import '@rolemodel/optics/dist/scss/components/card';
`})}),`
`,e.jsx(s.h2,{id:"variations",children:"Variations"}),`
`,e.jsx(s.h3,{id:"plain",children:"Plain"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:".card"})," Provides basic card styles."]}),`
`,e.jsx(r,{of:o}),`
`,e.jsx(s.h3,{id:"padded",children:"Padded"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:".card-padded"})," Provides a padded card."]}),`
`,e.jsx(r,{of:h}),`
`,e.jsx(s.h3,{id:"full",children:"Full"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:".card__header"}),", ",e.jsx(s.code,{children:".card__body"}),", and ",e.jsx(s.code,{children:".card__footer"})," Provide padded sections of a card."]}),`
`,e.jsx(r,{of:p}),`
`,e.jsx(s.h3,{id:"condensed",children:"Condensed"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:".card--condensed"})," Changes the padding scale for everything below it."]}),`
`,e.jsx(r,{of:x}),`
`,e.jsx(s.h3,{id:"shadow",children:"Shadow"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:".card--shadow-x-small"}),", ",e.jsx(s.code,{children:".card--shadow-small"}),", ",e.jsx(s.code,{children:".card--shadow-medium"}),", ",e.jsx(s.code,{children:".card--shadow-large"}),", ",e.jsx(s.code,{children:".card--shadow-x-large"})," Add a shadow elevation effect to the card."]}),`
`,e.jsx(r,{of:j}),`
`,e.jsx(s.h2,{id:"customizing-card-styles",children:"Customizing Card styles"}),`
`,e.jsx("div",{dangerouslySetInnerHTML:{__html:d({title:"Important!",description:"These patterns represent how to customize the style of the card for your project."}).outerHTML}}),`
`,e.jsxs(s.p,{children:["The card classes are built on a ",e.jsx(s.a,{href:"https://sass-lang.com/documentation/style-rules/placeholder-selectors",rel:"nofollow",children:"sass placeholder selector"})]}),`
`,e.jsxs(s.p,{children:["This allows multiple card classes to share the same behavior. You can modify all cards behavior by overriding the ",e.jsx(s.code,{children:"%card-global"})," placeholder selector and setting any properties:"]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-css",children:`%card-global {
  font-size: var(--op-font-2x-large);
}
`})}),`
`,e.jsx(s.p,{children:"If you need to override the behavior of a particular card style, you can open the respective class and set or change properties"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-css",children:`// This will only affect the card, but not card-padded
.card {
  background-color: red;
  color: white;
}
`})}),`
`,e.jsx(s.h2,{id:"new-card-variations",children:"New Card Variations"}),`
`,e.jsx("div",{dangerouslySetInnerHTML:{__html:d({title:"Important!",description:"These patterns represent how to create new variations of the card for your project."}).outerHTML}}),`
`,e.jsx(s.p,{children:"Your application may need a custom card. To add one, just follow this template:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-css",children:`.card-{name} {
  @extend %card-global;

  background-color:
  color:
}
`})}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-css",children:`.card-purple {
  @extend %badge-global;

  border-radius: var(--op-radius-large);
  font-size: var(--op-font-2x-large);

  .card__header {
    background-color: purple;
    color: white;
  }
}
`})})]})}function S(n={}){const{wrapper:s}={...c(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(a,{...n})}):a(n)}export{S as default};
