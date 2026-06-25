import{i as e}from"./preload-helper-xPQekRTU.js";import{T as t,l as n,n as r,o as i,u as a}from"./blocks-uVOOWdqL.js";import{s as o}from"./chunk-LITCR56V-BmCoDI8n.js";import{t as s}from"./mdx-react-shim-eO_HyXU9.js";import{n as c,t as l}from"./sourceCodeLink-D2TI9VYO.js";import{n as u,t as d}from"./Alert-BSNiXkFA.js";import{Condensed as f,Full as p,Padded as m,Plain as h,Shadow as g,n as _,t as v}from"./Card.stories-syCCqWDo.js";function y(e){let a={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,...t(),...e.components};return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(n,{of:v}),`
`,(0,x.jsx)(a.h1,{id:`card`,children:`Card`}),`
`,(0,x.jsx)(`div`,{dangerouslySetInnerHTML:{__html:l({link:`components/card.css`}).outerHTML}}),`
`,(0,x.jsx)(a.p,{children:`Card classes can be used to denote bordered sections of an application. They provide simple styles to create sections or "cards" for your interface. They can also be used as a starting point for "row" or list styles.`}),`
`,(0,x.jsx)(a.h2,{id:`playground`,children:`Playground`}),`
`,(0,x.jsx)(r,{of:h}),`
`,(0,x.jsx)(i,{of:h}),`
`,(0,x.jsx)(a.h3,{id:`selective-imports`,children:`Selective Imports`}),`
`,(0,x.jsxs)(a.p,{children:[`Card can be used as a standalone component, however, it does have a few dependencies. To see a full dependency list, see `,(0,x.jsx)(a.a,{href:`?path=/docs/overview-selective-imports--docs#dependencies`,children:`Dependency Graph`})]}),`
`,(0,x.jsx)(a.pre,{children:(0,x.jsx)(a.code,{className:`language-css`,children:`/* Depends on */
@import '@rolemodel/optics/dist/css/core/fonts';
@import '@rolemodel/optics/dist/css/core/tokens';
@import '@rolemodel/optics/dist/css/core/base';

/* Component */
@import '@rolemodel/optics/dist/css/components/card';
`})}),`
`,(0,x.jsx)(a.h2,{id:`variations`,children:`Variations`}),`
`,(0,x.jsx)(a.h3,{id:`plain`,children:`Plain`}),`
`,(0,x.jsxs)(a.p,{children:[(0,x.jsx)(a.code,{children:`.card`}),` Provides basic card styles.`]}),`
`,(0,x.jsx)(r,{of:h}),`
`,(0,x.jsx)(a.h3,{id:`padded`,children:`Padded`}),`
`,(0,x.jsxs)(a.p,{children:[(0,x.jsx)(a.code,{children:`.card--padded`}),` Provides a padded card.`]}),`
`,(0,x.jsx)(r,{of:m}),`
`,(0,x.jsx)(a.h3,{id:`full`,children:`Full`}),`
`,(0,x.jsxs)(a.p,{children:[(0,x.jsx)(a.code,{children:`.card__header`}),`, `,(0,x.jsx)(a.code,{children:`.card__body`}),`, and `,(0,x.jsx)(a.code,{children:`.card__footer`}),` Provide padded sections of a card.`]}),`
`,(0,x.jsx)(r,{of:p}),`
`,(0,x.jsx)(a.h3,{id:`condensed`,children:`Condensed`}),`
`,(0,x.jsxs)(a.p,{children:[(0,x.jsx)(a.code,{children:`.card--condensed`}),` Changes the padding for everything below it.`]}),`
`,(0,x.jsx)(r,{of:f}),`
`,(0,x.jsx)(a.h3,{id:`shadow`,children:`Shadow`}),`
`,(0,x.jsxs)(a.p,{children:[(0,x.jsx)(a.code,{children:`.card--shadow-x-small`}),`, `,(0,x.jsx)(a.code,{children:`.card--shadow-small`}),`, `,(0,x.jsx)(a.code,{children:`.card--shadow-medium`}),`, `,(0,x.jsx)(a.code,{children:`.card--shadow-large`}),`, `,(0,x.jsx)(a.code,{children:`.card--shadow-x-large`}),` Add a shadow elevation effect to the card.`]}),`
`,(0,x.jsx)(r,{of:g}),`
`,(0,x.jsx)(a.h2,{id:`card-api`,children:`Card API`}),`
`,(0,x.jsx)(a.p,{children:`Padding, Box Shadow (border), and Radius styles are built on css variables scoped to the card. They can ben overridden to customize the card.`}),`
`,(0,x.jsx)(a.pre,{children:(0,x.jsx)(a.code,{className:`language-css`,children:`--_op-card-padding
--_op-card-box-shadow
--_op-card-radius
`})}),`
`,(0,x.jsx)(a.h2,{id:`customizing-card-styles`,children:`Customizing Card styles`}),`
`,(0,x.jsx)(`div`,{dangerouslySetInnerHTML:{__html:d({title:`Important!`,description:`These patterns represent how to customize the style of the card for your project.`}).outerHTML}}),`
`,(0,x.jsxs)(a.p,{children:[`The card classes are structured using the `,(0,x.jsx)(a.a,{href:`https://getbem.com/naming`,rel:`nofollow`,children:`BEM methodology`}),`.`]}),`
`,(0,x.jsxs)(a.p,{children:[`This allows us to define core styles on a main `,(0,x.jsx)(a.a,{href:`https://getbem.com/naming/#block`,rel:`nofollow`,children:`block`}),` class, and use `,(0,x.jsx)(a.a,{href:`https://getbem.com/naming/#modifier`,rel:`nofollow`,children:`modifiers`}),` to encapsulate variant styles. You can modify all card behavior by overriding the `,(0,x.jsx)(a.code,{children:`.card`}),` selector and setting any properties:`]}),`
`,(0,x.jsx)(a.pre,{children:(0,x.jsx)(a.code,{className:`language-css`,children:`.card {
  font-size: var(--op-font-2x-large);
}
`})}),`
`,(0,x.jsx)(a.p,{children:`If you need to override the behavior of a particular card modifier, you can open the respective class and set or change properties`}),`
`,(0,x.jsx)(a.pre,{children:(0,x.jsx)(a.code,{className:`language-css`,children:`.card--modifier {
}
`})}),`
`,(0,x.jsx)(a.h2,{id:`new-card-variations`,children:`New Card Variations`}),`
`,(0,x.jsx)(`div`,{dangerouslySetInnerHTML:{__html:d({title:`Important!`,description:`These patterns represent how to create new variations of the card for your project.`}).outerHTML}}),`
`,(0,x.jsxs)(a.p,{children:[`Your application may need a variation. To add one, just follow this template. Note the double hyphen, indicating that this is a `,(0,x.jsx)(a.a,{href:`https://getbem.com/naming/#modifier`,rel:`nofollow`,children:`modifier`}),`:`]}),`
`,(0,x.jsx)(a.pre,{children:(0,x.jsx)(a.code,{className:`language-css`,children:`.card--{name} {
  background-color:
  color:
}
`})}),`
`,(0,x.jsx)(a.pre,{children:(0,x.jsx)(a.code,{className:`language-css`,children:`.card--purple {
  --_op-card-radius: var(--op-radius-large);

  font-size: var(--op-font-2x-large);

  .card__header {
    background-color: purple;
    color: white;
  }
}
`})})]})}function b(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,x.jsx)(n,{...e,children:(0,x.jsx)(y,{...e})}):y(e)}var x;e((()=>{x=o(),s(),a(),_(),c(),u()}))();export{b as default};