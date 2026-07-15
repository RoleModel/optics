import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{i as t}from"./react-CaHZDgIm.js";import{s as n}from"./chunk-LITCR56V-BxXRPQK8.js";import{l as r,n as i,o as a,u as o}from"./blocks-3ODIrP3Y.js";import{t as s}from"./mdx-react-shim-DIeO1dVO.js";import{n as c,t as l}from"./sourceCodeLink-C1o55bv0.js";import{n as u,t as d}from"./Alert-xuHYkKjH.js";import{Active as f,Default as p,Destructive as m,Disabled as h,Icon as g,IconWithLabel as _,NoBorder as v,Pill as y,Primary as b,Size as x,n as S,t as C}from"./Button.stories-CNDk0VMQ.js";function w(e){let n={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,...t(),...e.components};return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(r,{of:C}),`
`,(0,E.jsx)(n.h1,{id:`button`,children:`Button`}),`
`,(0,E.jsx)(`div`,{dangerouslySetInnerHTML:{__html:l({link:`components/button.css`}).outerHTML}}),`
`,(0,E.jsxs)(n.p,{children:[`Button classes can be used on `,(0,E.jsx)(n.code,{children:`button`}),` or `,(0,E.jsx)(n.code,{children:`a`}),` html elements. They provide consistent and composable styling that should address most applications basic needs.`]}),`
`,(0,E.jsx)(n.h2,{id:`playground`,children:`Playground`}),`
`,(0,E.jsx)(i,{of:p}),`
`,(0,E.jsx)(a,{of:p}),`
`,(0,E.jsx)(n.h3,{id:`selective-imports`,children:`Selective Imports`}),`
`,(0,E.jsxs)(n.p,{children:[`Button can be used as a standalone component, however, it does have a few dependencies. To see a full dependency list, see `,(0,E.jsx)(n.a,{href:`?path=/docs/overview-selective-imports--docs#dependencies`,children:`Dependency Graph`})]}),`
`,(0,E.jsx)(n.pre,{children:(0,E.jsx)(n.code,{className:`language-css`,children:`/* Depends on */
@import '@rolemodel/optics/dist/css/core/fonts';
@import '@rolemodel/optics/dist/css/core/tokens';
@import '@rolemodel/optics/dist/css/core/base';
@import '@rolemodel/optics/dist/css/components/icon';

/* Component */
@import '@rolemodel/optics/dist/css/components/button';
`})}),`
`,(0,E.jsx)(n.h2,{id:`variations`,children:`Variations`}),`
`,(0,E.jsx)(n.h3,{id:`default`,children:`Default`}),`
`,(0,E.jsxs)(n.p,{children:[(0,E.jsx)(n.code,{children:`.btn`}),` Provides a default outlined button. This would be commonly used as a cancel button in a form or a secondary action on a page.`]}),`
`,(0,E.jsx)(i,{of:p}),`
`,(0,E.jsx)(n.h3,{id:`primary`,children:`Primary`}),`
`,(0,E.jsxs)(n.p,{children:[(0,E.jsx)(n.code,{children:`.btn--primary`}),` Provides a filled button using the primary color in your theme. This should be used as the primary action on a screen such as the login button on an account screen or the submit button on a form.`]}),`
`,(0,E.jsx)(i,{of:b}),`
`,(0,E.jsx)(n.h3,{id:`destructive`,children:`Destructive`}),`
`,(0,E.jsxs)(n.p,{children:[(0,E.jsx)(n.code,{children:`.btn--destructive`}),` Provides a filled button using the red danger color. This should be used as a destructive action such as delete.
Note: `,(0,E.jsx)(n.code,{children:`.btn--delete`}),` also works for backwards compatibility, but `,(0,E.jsx)(n.code,{children:`.btn--destructive`}),` is the preferred class name.`]}),`
`,(0,E.jsx)(i,{of:m}),`
`,(0,E.jsx)(n.h3,{id:`active`,children:`Active`}),`
`,(0,E.jsxs)(n.p,{children:[(0,E.jsx)(n.code,{children:`.btn--active`}),` This is a modifier which can be used with all button classes. It provides an active state that adapts it's color to all the btn variations.`]}),`
`,(0,E.jsx)(i,{of:f}),`
`,(0,E.jsx)(n.h3,{id:`no-border`,children:`No Border`}),`
`,(0,E.jsxs)(n.p,{children:[(0,E.jsx)(n.code,{children:`.btn--no-border`}),` This is a modifier which can be used with all button classes except destructive and warning. It provides a button with no border, but the same sizing and adapts it's color to all the btn variations.`]}),`
`,(0,E.jsxs)(n.p,{children:[`Note: `,(0,E.jsx)(n.code,{children:`.btn--destructive`}),` and `,(0,E.jsx)(n.code,{children:`.btn--warning`}),` do not support the `,(0,E.jsx)(n.code,{children:`.btn--no-border`}),` modifier. Borderless warning or destructive buttons are not considered a good pattern and can easily lead to confusion so are not available.`]}),`
`,(0,E.jsx)(i,{of:v}),`
`,(0,E.jsx)(n.h3,{id:`disabled`,children:`Disabled`}),`
`,(0,E.jsxs)(n.p,{children:[(0,E.jsx)(n.code,{children:`.btn--disabled`}),` Should be used on `,(0,E.jsx)(n.code,{children:`a`}),` elements that need to be disabled. `,(0,E.jsx)(n.code,{children:`button`}),` elements can use the `,(0,E.jsx)(n.code,{children:`disabled`}),` attribute as well as this class. This makes the button opaque and prevents any onClick events from being triggered.`]}),`
`,(0,E.jsx)(i,{of:h}),`
`,(0,E.jsx)(n.h3,{id:`pill`,children:`Pill`}),`
`,(0,E.jsxs)(n.p,{children:[(0,E.jsx)(n.code,{children:`.btn--pill`}),` Modifies the shape of any other buttons by adding a radius to the left and right.`]}),`
`,(0,E.jsx)(i,{of:y}),`
`,(0,E.jsx)(n.h3,{id:`icon`,children:`Icon`}),`
`,(0,E.jsxs)(n.p,{children:[(0,E.jsx)(n.code,{children:`.btn--icon`}),` Modifies the shape of any other button class by setting the width and height be be the same. This should only be used with an icon as the button text. You can also combine it with `,(0,E.jsx)(n.code,{children:`.btn--no-border`}),` for a borderless icon button, or `,(0,E.jsx)(n.code,{children:`.btn--pill`}),` for a round icon button.`]}),`
`,(0,E.jsx)(i,{of:g}),`
`,(0,E.jsx)(n.h3,{id:`icon-with-label`,children:`Icon With label`}),`
`,(0,E.jsxs)(n.p,{children:[(0,E.jsx)(n.code,{children:`.btn--icon-with-label`}),` Modifies the shape of any other button class by ensuring an icon used within the button will be stacked on top of the label.`]}),`
`,(0,E.jsx)(i,{of:_}),`
`,(0,E.jsx)(n.h3,{id:`size`,children:`Size`}),`
`,(0,E.jsxs)(n.p,{children:[(0,E.jsx)(n.code,{children:`.btn--small`}),`, `,(0,E.jsx)(n.code,{children:`.btn--medium`}),`, `,(0,E.jsx)(n.code,{children:`.btn--large`}),` (with large being the default) modify the size of any other button class by changing the font, padding, and height to be smaller or larger.`]}),`
`,(0,E.jsx)(i,{of:x}),`
`,(0,E.jsx)(n.h2,{id:`mobile-buttons`,children:`Mobile Buttons`}),`
`,(0,E.jsx)(n.p,{children:`All button classes, regardless of the currently applied size modifier, will automatically adjust to the large button size on mobile screens (--op-breakpoint-small ~ 768px).
This is to ensure a large enough tap area on smaller devices and screens.`}),`
`,(0,E.jsx)(n.p,{children:`See https://uxmovement.com/mobile/optimal-size-and-spacing-for-mobile-buttons/`}),`
`,(0,E.jsx)(n.h2,{id:`button-api`,children:`Button API`}),`
`,(0,E.jsx)(n.p,{children:`Size (Height, Padding, and Font) button styles are built on css variables scoped to the button.
Buttons have various states that are styled as well.`}),`
`,(0,E.jsx)(n.p,{children:`Here are the variables and states used`}),`
`,`
`,(0,E.jsx)(n.pre,{children:(0,E.jsx)(n.code,{className:`language-css`,children:`/* Variable API */
--_op-btn-height-small
--_op-btn-height-medium
--_op-btn-height-large

--_op-btn-font-small
--_op-btn-font-medium
--_op-btn-font-large

--_op-btn-padding-small
--_op-btn-padding-medium
--_op-btn-padding-large

/* Different states */
.btn {} /* Default behavior */
.btn:not(:disabled, .btn--disabled):hover {} /* Hover behavior  */
.btn.btn--no-border {} /* No Border Modifier  */
.btn.btn--no-border:not(:disabled, .btn--disabled):hover {} /* Hovered No Border Modifier  */
.btn.btn--active {} /* Active Modifier  */
.btn.btn--active:not(:disabled, .btn--disabled):hover {} /* Hovered No Border Modifier  */
`})}),`
`,`
`,(0,E.jsx)(n.h2,{id:`customizing-button-styles`,children:`Customizing Button styles`}),`
`,(0,E.jsx)(`div`,{dangerouslySetInnerHTML:{__html:d({title:`Important!`,description:`These patterns represent how to customize the style of the button for your project.`}).outerHTML}}),`
`,(0,E.jsxs)(n.p,{children:[`The button classes are structured using the `,(0,E.jsx)(n.a,{href:`https://getbem.com/naming`,rel:`nofollow`,children:`BEM methodology`}),`.`]}),`
`,(0,E.jsxs)(n.p,{children:[`This allows us to define core styles on a main `,(0,E.jsx)(n.a,{href:`https://getbem.com/naming/#block`,rel:`nofollow`,children:`block`}),` class, and use `,(0,E.jsx)(n.a,{href:`https://getbem.com/naming/#modifier`,rel:`nofollow`,children:`modifiers`}),` to encapsulate variant styles. You can modify all button behavior by overriding the `,(0,E.jsx)(n.code,{children:`.btn`}),` selector and setting any properties:`]}),`
`,(0,E.jsx)(n.pre,{children:(0,E.jsx)(n.code,{className:`language-css`,children:`.btn {
  border-radius: 0;
}
`})}),`
`,(0,E.jsx)(n.p,{children:`If you want to override how the size modifier behaves, you can use API described above to change which height and font each size uses.`}),`
`,(0,E.jsx)(n.pre,{children:(0,E.jsx)(n.code,{className:`language-css`,children:`.btn {
  --_op-btn-height-small: var(--op-space-2x-large);
  --_op-btn-height-medium: var(--op-space-3x-large);
  --_op-btn-height-large: var(--op-space-4x-large);

  --_op-btn-font-small: var(--op-font-4x-large);
  --_op-btn-font-medium: var(--op-font-5x-large);
  --_op-btn-font-large: var(--op-font-6x-large);

  --_op-btn-padding-small: var(--op-space-large);
  --_op-btn-padding-medium: var(--op-space-x-large);
  --_op-btn-padding-large: var(--op-space-2x-large);
}
`})}),`
`,(0,E.jsxs)(n.p,{children:[`If you need to override the color of a particular button style, you can open the respective class and change the `,(0,E.jsx)(n.code,{children:`background-color`}),`, `,(0,E.jsx)(n.code,{children:`color`}),`, and `,(0,E.jsx)(n.code,{children:`box-shadow`}),` properties to change the look.`]}),`
`,(0,E.jsx)(n.pre,{children:(0,E.jsx)(n.code,{className:`language-css`,children:`/* This will only affect the default button, but not primary, secondary, etc. */
.btn {
  background-color: red;
  color: white;
  box-shadow: red;
}
`})}),`
`,(0,E.jsx)(n.h2,{id:`new-button-variations`,children:`New Button Variations`}),`
`,(0,E.jsx)(`div`,{dangerouslySetInnerHTML:{__html:d({title:`Important!`,description:`These patterns represent how to create new variations of the button for your project.`}).outerHTML}}),`
`,(0,E.jsxs)(n.p,{children:[`Your application may need a variation. To add one, just follow this template. Note the double hyphen, indicating that this is a `,(0,E.jsx)(n.a,{href:`https://getbem.com/naming/#modifier`,rel:`nofollow`,children:`modifier`}),`:`]}),`
`,(0,E.jsx)(n.pre,{children:(0,E.jsx)(n.code,{className:`language-css`,children:`.btn--{name} {
  background-color:
  box-shadow:
  color:

  /* Active State */
  &.btn--active {
    background-color:
    box-shadow:
    color:
  }

  /* Hover State */
  &:hover {
    background-color:
    box-shadow:
    color:
  }

  /* Focus State */
  &:focus,
  &:focus-within,
  &:focus-visible {
    box-shadow:
  }

  /* Borderless State */
  &.btn--no-border {
    background-color:
    box-shadow:
    color:

    /* Borderless + Active State. */
    &.btn--active {
      background-color:
      box-shadow:
      color:
    }

    /* Borderless + Hover State */
    &:hover {
      background-color:
      box-shadow:
      color:
    }

    /* Borderless + Focus State */
    &:focus,
    &:focus-within,
    &:focus-visible {
      background-color:
      box-shadow:
      color:
    }
  }
}
`})})]})}function T(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,E.jsx)(n,{...e,children:(0,E.jsx)(w,{...e})}):w(e)}var E;e((()=>{E=n(),s(),o(),S(),c(),u()}))();export{T as default};