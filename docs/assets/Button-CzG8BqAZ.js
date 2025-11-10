import{j as e,M as d,C as o,a as l}from"./blocks-ZRPSuR6b.js";import{useMDXComponents as a}from"./index-d9ggI4Sk.js";import{B as c,D as s,P as h,a as b,A as u,N as p,b as m,c as x,I as j,d as g,S as f}from"./Button.stories-2IiuUThe.js";import{c as v}from"./sourceCodeLink-Chh3FteF.js";import{c as i}from"./Alert-CAEs4394.js";import"./preload-helper-D9Z9MdNV.js";import"./iframe-nopHEUW4.js";import"./Button-B21kpIpO.js";import"./Icon-uqCTS4Mm.js";function r(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...a(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:c}),`
`,e.jsx(n.h1,{id:"button",children:"Button"}),`
`,e.jsx("div",{dangerouslySetInnerHTML:{__html:v({link:"components/button.css"}).outerHTML}}),`
`,e.jsxs(n.p,{children:["Button classes can be used on ",e.jsx(n.code,{children:"button"})," or ",e.jsx(n.code,{children:"a"})," html elements. They provide consistent and composable styling that should address most applications basic needs."]}),`
`,e.jsx(n.h2,{id:"playground",children:"Playground"}),`
`,e.jsx(o,{of:s}),`
`,e.jsx(l,{of:s}),`
`,e.jsx(n.h3,{id:"selective-imports",children:"Selective Imports"}),`
`,e.jsxs(n.p,{children:["Button can be used as a standalone component, however, it does have a few dependencies. To see a full dependency list, see ",e.jsx(n.a,{href:"?path=/docs/overview-selective-imports--docs#dependencies",children:"Dependency Graph"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`/* Depends on */
@import '@rolemodel/optics/dist/css/core/fonts';
@import '@rolemodel/optics/dist/css/core/tokens';
@import '@rolemodel/optics/dist/css/core/base';
@import '@rolemodel/optics/dist/css/components/icon';

/* Component */
@import '@rolemodel/optics/dist/css/components/button';
`})}),`
`,e.jsx(n.h2,{id:"variations",children:"Variations"}),`
`,e.jsx(n.h3,{id:"default",children:"Default"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:".btn"})," Provides a default outlined button. This would be commonly used as a cancel button in a form or a secondary action on a page."]}),`
`,e.jsx(o,{of:s}),`
`,e.jsx(n.h3,{id:"primary",children:"Primary"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:".btn--primary"})," Provides a filled button using the primary color in your theme. This should be used as the primary action on a screen such as the login button on an account screen or the submit button on a form."]}),`
`,e.jsx(o,{of:h}),`
`,e.jsx(n.h3,{id:"destructive",children:"Destructive"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:".btn--destructive"}),` Provides a filled button using the red danger color. This should be used as a destructive action such as delete.
Note: `,e.jsx(n.code,{children:".btn--delete"})," also works for backwards compatibility, but ",e.jsx(n.code,{children:".btn--destructive"})," is the preferred class name."]}),`
`,e.jsx(o,{of:b}),`
`,e.jsx(n.h3,{id:"active",children:"Active"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:".btn--active"})," This is a modifier which can be used with all button classes. It provides an active state that adapts it's color to all the btn variations."]}),`
`,e.jsx(o,{of:u}),`
`,e.jsx(n.h3,{id:"no-border",children:"No Border"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:".btn--no-border"})," This is a modifier which can be used with all button classes except destructive and warning. It provides a button with no border, but the same sizing and adapts it's color to all the btn variations."]}),`
`,e.jsxs(n.p,{children:["Note: ",e.jsx(n.code,{children:".btn--destructive"})," and ",e.jsx(n.code,{children:".btn--warning"})," do not support the ",e.jsx(n.code,{children:".btn--no-border"})," modifier. Borderless warning or destructive buttons are not considered a good pattern and can easily lead to confusion so are not available."]}),`
`,e.jsx(o,{of:p}),`
`,e.jsx(n.h3,{id:"disabled",children:"Disabled"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:".btn--disabled"})," Should be used on ",e.jsx(n.code,{children:"a"})," elements that need to be disabled. ",e.jsx(n.code,{children:"button"})," elements can use the ",e.jsx(n.code,{children:"disabled"})," attribute as well as this class. This makes the button opaque and prevents any onClick events from being triggered."]}),`
`,e.jsx(o,{of:m}),`
`,e.jsx(n.h3,{id:"pill",children:"Pill"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:".btn--pill"})," Modifies the shape of any other buttons by adding a radius to the left and right."]}),`
`,e.jsx(o,{of:x}),`
`,e.jsx(n.h3,{id:"icon",children:"Icon"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:".btn--icon"})," Modifies the shape of any other button class by setting the width and height be be the same. This should only be used with an icon as the button text. You can also combine it with ",e.jsx(n.code,{children:".btn--no-border"})," for a borderless icon button, or ",e.jsx(n.code,{children:".btn--pill"})," for a round icon button."]}),`
`,e.jsx(o,{of:j}),`
`,e.jsx(n.h3,{id:"icon-with-label",children:"Icon With label"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:".btn--icon-with-label"})," Modifies the shape of any other button class by ensuring an icon used within the button will be stacked on top of the label."]}),`
`,e.jsx(o,{of:g}),`
`,e.jsx(n.h3,{id:"size",children:"Size"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:".btn--small"}),", ",e.jsx(n.code,{children:".btn--medium"}),", ",e.jsx(n.code,{children:".btn--large"})," (with large being the default) modify the size of any other button class by changing the font, padding, and height to be smaller or larger."]}),`
`,e.jsx(o,{of:f}),`
`,e.jsx(n.h2,{id:"mobile-buttons",children:"Mobile Buttons"}),`
`,e.jsx(n.p,{children:`All button classes, regardless of the currently applied size modifier, will automatically adjust to the large button size on mobile screens (--op-breakpoint-small ~ 768px).
This is to ensure a large enough tap area on smaller devices and screens.`}),`
`,e.jsx(n.p,{children:"See https://uxmovement.com/mobile/optimal-size-and-spacing-for-mobile-buttons/"}),`
`,e.jsx(n.h2,{id:"button-api",children:"Button API"}),`
`,e.jsx(n.p,{children:`Size (Height, Padding, and Font) button styles are built on css variables scoped to the button.
Buttons have various states that are styled as well.`}),`
`,e.jsx(n.p,{children:"Here are the variables and states used"}),`
`,`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`/* Variable API */
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
`,e.jsx(n.h2,{id:"customizing-button-styles",children:"Customizing Button styles"}),`
`,e.jsx("div",{dangerouslySetInnerHTML:{__html:i({title:"Important!",description:"These patterns represent how to customize the style of the button for your project."}).outerHTML}}),`
`,e.jsxs(n.p,{children:["The button classes are structured using the ",e.jsx(n.a,{href:"https://getbem.com/naming",rel:"nofollow",children:"BEM methodology"}),"."]}),`
`,e.jsxs(n.p,{children:["This allows us to define core styles on a main ",e.jsx(n.a,{href:"https://getbem.com/naming/#block",rel:"nofollow",children:"block"})," class, and use ",e.jsx(n.a,{href:"https://getbem.com/naming/#modifier",rel:"nofollow",children:"modifiers"})," to encapsulate variant styles. You can modify all button behavior by overriding the ",e.jsx(n.code,{children:".btn"})," selector and setting any properties:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`.btn {
  border-radius: 0;
}
`})}),`
`,e.jsx(n.p,{children:"If you want to override how the size modifier behaves, you can use API described above to change which height and font each size uses."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`.btn {
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
`,e.jsxs(n.p,{children:["If you need to override the color of a particular button style, you can open the respective class and change the ",e.jsx(n.code,{children:"background-color"}),", ",e.jsx(n.code,{children:"color"}),", and ",e.jsx(n.code,{children:"box-shadow"})," properties to change the look."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`/* This will only affect the default button, but not primary, secondary, etc. */
.btn {
  background-color: red;
  color: white;
  box-shadow: red;
}
`})}),`
`,e.jsx(n.h2,{id:"new-button-variations",children:"New Button Variations"}),`
`,e.jsx("div",{dangerouslySetInnerHTML:{__html:i({title:"Important!",description:"These patterns represent how to create new variations of the button for your project."}).outerHTML}}),`
`,e.jsxs(n.p,{children:["Your application may need a variation. To add one, just follow this template. Note the double hyphen, indicating that this is a ",e.jsx(n.a,{href:"https://getbem.com/naming/#modifier",rel:"nofollow",children:"modifier"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`.btn--{name} {
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
`})})]})}function N(t={}){const{wrapper:n}={...a(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{N as default};
