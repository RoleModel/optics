import{j as e,M as a,C as o,a as r}from"./index-DyF4keL0.js";import{useMDXComponents as t}from"./index-CiOQkYpe.js";import{I as d,D as s,F as h,L as p,B as m,E as f}from"./Icon.stories-DrdkAih4.js";import{c as x}from"./sourceCodeLink-Chh3FteF.js";import{c}from"./Alert-CAEs4394.js";import"./iframe-CgDlpB7V.js";import"./index-BiL3ubqk.js";import"./index-DrFu-skq.js";import"./Icon-uqCTS4Mm.js";import"./Button-B21kpIpO.js";function l(i){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...t(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:d}),`
`,e.jsx(n.h1,{id:"icon",children:"Icon"}),`
`,e.jsx("div",{dangerouslySetInnerHTML:{__html:x({link:"components/icon.css"}).outerHTML}}),`
`,e.jsxs(n.p,{children:["Icon classes are built on top of ",e.jsx(n.a,{href:"https://fonts.google.com/icons",rel:"nofollow",children:"Google's Material Symbols Icon Font"}),`. They provide a way to integrate iconography into your application in a flexible and customizable way.
Optics ships with a simplified version of `,e.jsx(n.a,{href:"https://fonts.google.com/icons?icon.style=Outlined",rel:"nofollow",children:"Material Symbols Outlined"}),`. We only include the font weight variable aspect of the library.
This means that adjusting the size and font weight are always available, but the emphasis and fill options below are not available by default. If your app would like to use these options, you can import the full library by using the `,e.jsx(n.a,{href:"?path=/docs/overview-addons--docs#icon-fonts",children:"Icon Font Addon"}),"."]}),`
`,e.jsxs(n.p,{children:["If you don't need the full library, but want a specific axis of the ",e.jsx(n.a,{href:"?path=/docs/tokens-typography-font-family--docs#variable-fonts",children:"Variable Font"}),", You can use one of these imports alongside the Optics import."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`/* No fill, weight, or emphasis options, just allows for size modifiers */
@import 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined&display=block';

/* Only fill option */
@import 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:FILL@0..1&display=block';

/* Only emphasis option */
@import 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,GRAD@20..48,-50..200&display=block';
`})}),`
`,e.jsxs(n.p,{children:["A combination of these could be used as well based on your applications needs. See ",e.jsx(n.a,{href:"https://developers.google.com/fonts/docs/material_symbols#variable_font_with_google_fonts",rel:"nofollow",children:"Google Variable Fonts"})," for more details."]}),`
`,e.jsx(n.h2,{id:"playground",children:"Playground"}),`
`,e.jsx(o,{of:s}),`
`,e.jsx(r,{of:s}),`
`,e.jsx(n.h3,{id:"selective-imports",children:"Selective Imports"}),`
`,e.jsxs(n.p,{children:["Icon can be used as a standalone component, however, it does have a few dependencies. To see a full dependency list, see ",e.jsx(n.a,{href:"?path=/docs/overview-selective-imports--docs#dependencies",children:"Dependency Graph"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`/* Depends on */
@import '@rolemodel/optics/dist/css/core/fonts'; /* (specifically core/fonts/icon_fonts) */
@import '@rolemodel/optics/dist/css/core/tokens';
@import '@rolemodel/optics/dist/css/core/base';

/* Component */
@import '@rolemodel/optics/dist/css/components/icon';
`})}),`
`,e.jsx(n.h3,{id:"additional-icon-libraries",children:"Additional Icon libraries"}),`
`,e.jsxs(n.p,{children:["Optics supports a variety of ",e.jsx(n.a,{href:"?path=/docs/overview-addons--docs",children:"Additional icon libraries"})," that can be imported. Due to the nature of these libraries, not all of the same icon class modifiers may be available."]}),`
`,e.jsx(n.h3,{id:"phosphor-icons",children:"Phosphor Icons"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://phosphoricons.com/",rel:"nofollow",children:"Phosphor Icons"})," can be created with the ",e.jsx(n.code,{children:"<i>"})," tag and uses the ",e.jsx(n.code,{children:".ph"})," prefix with ",e.jsx(n.code,{children:".ph-{name}"})," to define a specific icon."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`@import '@rolemodel/optics';
@import '@rolemodel/optics/dist/css/addons/fonts/phosphor_icons';
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<i class="icon ph ph-smiley"></i>
`})}),`
`,e.jsx(n.p,{children:"The filled, size and weight modifiers can be used with Phosphor Icons."}),`
`,e.jsxs(n.p,{children:["Phosphor adds ",e.jsx(n.code,{children:".icon--weight-thin"})," but does not support ",e.jsx(n.code,{children:".icon--weight-semi-bold"}),`.
It also adds a dual tone variation by replacing `,e.jsx(n.code,{children:".ph"})," with ",e.jsx(n.code,{children:".ph-duotone"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<i class="icon ph-duotone ph-smiley"></i>
`})}),`
`,e.jsxs(n.p,{children:["Note: Phosphor Icons do not support the use of emphasis variations or the use of ",e.jsx(n.code,{children:".icon--filled"})," in combination with ",e.jsx(n.code,{children:".ph-duotone"})," or any weight variations."]}),`
`,e.jsx(n.h3,{id:"tabler-icons",children:"Tabler Icons"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://tabler.io/icons",rel:"nofollow",children:"Tabler Icons"})," can be created with the ",e.jsx(n.code,{children:"<i>"})," tag and uses the ",e.jsx(n.code,{children:".ti"})," prefix with ",e.jsx(n.code,{children:".ti-{name}"})," to define a specific icon."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`@import '@rolemodel/optics';
@import '@rolemodel/optics/dist/css/addons/fonts/tabler_icons';
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<i class="icon ti ti-settings"></i>
`})}),`
`,e.jsx(n.p,{children:"The size modifiers can be used with Tabler Icons."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<i class="icon ti ti-settings icon--x-large"></i>
`})}),`
`,e.jsxs(n.p,{children:["It also supports a filled variant, however, rather than using the ",e.jsx(n.code,{children:".icon--filled"})," modifier, you can replace the ",e.jsx(n.code,{children:"ti-{name}"})," class with ",e.jsx(n.code,{children:".ti-{name}-filled"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<i class="icon ti ti-settings-filled"></i>
`})}),`
`,e.jsx(n.p,{children:"Note: Tabler Icons do not support the use of weight or emphasis variations."}),`
`,e.jsx(n.h3,{id:"feather-icons",children:"Feather Icons"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://feathericons.com/",rel:"nofollow",children:"Feather Icons"})," can be created with the ",e.jsx(n.code,{children:"<i>"})," tag and uses the ",e.jsx(n.code,{children:".fi"})," prefix with ",e.jsx(n.code,{children:".fi-{name}"})," to define a specific icon."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`@import '@rolemodel/optics';
@import '@rolemodel/optics/dist/css/addons/fonts/feather_icons';
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<i class="icon fi fi-feather"></i>
`})}),`
`,e.jsx(n.p,{children:"The size modifiers can be used with Feather Icons."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<i class="icon fi fi-feather icon--x-large"></i>
`})}),`
`,e.jsx(n.p,{children:"Note: Feather Icons do not support the use of filled, weight, or emphasis variations."}),`
`,e.jsx(n.h3,{id:"lucide-icons",children:"Lucide Icons"}),`
`,e.jsx(n.p,{children:`Lucide Icons are a fork of Feather Icons with more icons. If you don't need all the icons that Lucide provides,
you can use the Feather Icons for a smaller icon pack instead.`}),`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://lucide.dev/icons/",rel:"nofollow",children:"Lucide Icons"})," can be created with the ",e.jsx(n.code,{children:"<i>"})," tag and uses the ",e.jsx(n.code,{children:".li"})," prefix with ",e.jsx(n.code,{children:".li-{name}"})," to define a specific icon."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`@import '@rolemodel/optics';
@import '@rolemodel/optics/dist/css/addons/fonts/lucide_icons';
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<i class="icon li li-banana"></i>
`})}),`
`,e.jsx(n.p,{children:"The size modifiers can be used with Lucide Icons."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<i class="icon li li-banana icon--x-large"></i>
`})}),`
`,e.jsx(n.p,{children:"Note: Lucide Icons do not support the use of filled, weight, or emphasis variations."}),`
`,e.jsx(n.h2,{id:"variations",children:"Variations"}),`
`,e.jsx(n.h3,{id:"default",children:"Default"}),`
`,e.jsxs(n.p,{children:["To use an icon, put a ",e.jsx(n.code,{children:"span"})," with the class of ",e.jsx(n.code,{children:".icon.material-symbols-outlined"})," and inner text of whatever icon you wish to use I.E. ",e.jsx(n.code,{children:"settings"})," onto the page."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<span class="icon material-symbols-outlined">settings</span>
`})}),`
`,e.jsx(o,{of:s}),`
`,e.jsx(n.h3,{id:"filled",children:"Filled"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:".icon--filled"}),", ",e.jsx(n.code,{children:".icon--outlined"})," (with outlined being the default) Provide a filled or outlined icon."]}),`
`,e.jsx(o,{of:h}),`
`,e.jsx(n.h3,{id:"size",children:"Size"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:".icon--small"}),", ",e.jsx(n.code,{children:".icon--medium"}),", ",e.jsx(n.code,{children:".icon--large"}),", ",e.jsx(n.code,{children:".icon--x-large"})," (with medium being the default) modify the size of any icon."]}),`
`,e.jsx(o,{of:p}),`
`,e.jsx(n.h3,{id:"weight",children:"Weight"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:".icon--weight-light"}),", ",e.jsx(n.code,{children:".icon--weight-normal"}),", ",e.jsx(n.code,{children:".icon--weight-semi-bold"}),", ",e.jsx(n.code,{children:".icon--weight-bold"})," (with normal being the default) modify the font weight of any icon."]}),`
`,e.jsx(o,{of:m}),`
`,e.jsx(n.h3,{id:"emphasis",children:"Emphasis"}),`
`,e.jsx(n.p,{children:"Emphasis acts similarly to weight, but changes the thickness of the icon strokes in subtle ways."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:".icon--low-emphasis"}),", ",e.jsx(n.code,{children:".icon--normal-emphasis"}),", ",e.jsx(n.code,{children:".icon--high-emphasis"})," (with normal being the default) modify the emphasis of any icon."]}),`
`,e.jsx(o,{of:f}),`
`,e.jsx(n.h2,{id:"icon-api",children:"Icon API"}),`
`,e.jsx(n.p,{children:"Styles are built on CSS variables scoped to the icon."}),`
`,e.jsx(n.p,{children:"Here are the variables that can be customized:"}),`
`,`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`/* Weight */
--_op-icon-weight-light
--_op-icon-weight-normal
--_op-icon-weight-semi-bold
--_op-icon-weight-bold

/* Fill */
--_op-icon-fill-outlined
--_op-icon-fill-filled

/* Emphasis */
--_op-icon-emphasis-low
--_op-icon-emphasis-normal
--_op-icon-emphasis-high

/* Size */
--_op-icon-font-size-small
--_op-icon-font-size-medium
--_op-icon-font-size-large
--_op-icon-font-size-x-large
--_op-icon-optical-size-small
--_op-icon-optical-size-medium
--_op-icon-optical-size-large
--_op-icon-optical-size-x-large
`})}),`
`,`
`,e.jsx(n.h2,{id:"customizing-icon-styles",children:"Customizing Icon styles"}),`
`,e.jsx("div",{dangerouslySetInnerHTML:{__html:c({title:"Important!",description:"These patterns represent how to customize the style of the icon for your project."}).outerHTML}}),`
`,e.jsxs(n.p,{children:["The icon classes are structured using the ",e.jsx(n.a,{href:"https://getbem.com/naming",rel:"nofollow",children:"BEM methodology"}),"."]}),`
`,e.jsxs(n.p,{children:["This allows us to define core styles on a main ",e.jsx(n.a,{href:"https://getbem.com/naming/#block",rel:"nofollow",children:"block"})," class, and use ",e.jsx(n.a,{href:"https://getbem.com/naming/#modifier",rel:"nofollow",children:"modifiers"})," to encapsulate variant styles. You can modify all icon behavior by overriding the ",e.jsx(n.code,{children:".icon"})," selector and setting any properties:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`.icon {
}
`})}),`
`,e.jsx(n.h2,{id:"new-icon-variations",children:"New Icon Variations"}),`
`,e.jsx("div",{dangerouslySetInnerHTML:{__html:c({title:"Important!",description:"These patterns represent how to create new variations of the icon for your project."}).outerHTML}}),`
`,e.jsxs(n.p,{children:["Your application may need a variation. To add one, just follow this template. Note the double hyphen, indicating that this is a ",e.jsx(n.a,{href:"https://getbem.com/naming/#modifier",rel:"nofollow",children:"modifier"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`.icon {
  &.icon--{name} {
    --_op-icon-font-size-small: var(--op-font-small);
  }
}
`})})]})}function z(i={}){const{wrapper:n}={...t(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(l,{...i})}):l(i)}export{z as default};
