import{j as e,M as a,C as n,a as r}from"./blocks-D2pTyHFk.js";import{useMDXComponents as c}from"./index-Cur9J7FO.js";import{I as d,D as s,F as h,L as p,B as m,E as f}from"./Icon.stories-D326LNxb.js";import{c as u}from"./sourceCodeLink-Chh3FteF.js";import{c as l}from"./Alert-CAEs4394.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-qQGGZl47.js";import"./Icon-uqCTS4Mm.js";import"./Button-B21kpIpO.js";function t(o){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...c(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:d}),`
`,e.jsx(i.h1,{id:"icon",children:"Icon"}),`
`,e.jsx("div",{dangerouslySetInnerHTML:{__html:u({link:"components/icon.css"}).outerHTML}}),`
`,e.jsxs(i.p,{children:["Icon classes are built on top of ",e.jsx(i.a,{href:"https://fonts.google.com/icons",rel:"nofollow",children:"Google's Material Symbols Icon Font"}),`. They provide a way to integrate iconography into your application in a flexible and customizable way.
Optics ships with a simplified version of `,e.jsx(i.a,{href:"https://fonts.google.com/icons?icon.style=Outlined",rel:"nofollow",children:"Material Symbols Outlined"}),`. We only include the font weight variable aspect of the library.
This means that adjusting the size and font weight are always available, but the emphasis and fill options below are not available by default. If your app would like to use these options, you can import the full library by using the `,e.jsx(i.a,{href:"?path=/docs/overview-addons--docs#icon-fonts",children:"Icon Font Addon"}),"."]}),`
`,e.jsxs(i.p,{children:["If you don't need the full library, but want a specific axis of the ",e.jsx(i.a,{href:"?path=/docs/tokens-typography-font-family--docs#variable-fonts",children:"Variable Font"}),", You can use one of these imports alongside the Optics import."]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-css",children:`/* No fill, weight, or emphasis options, just allows for size modifiers */
@import 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined&display=block';

/* Only fill option */
@import 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:FILL@0..1&display=block';

/* Only emphasis option */
@import 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,GRAD@20..48,-50..200&display=block';
`})}),`
`,e.jsxs(i.p,{children:["A combination of these could be used as well based on your applications needs. See ",e.jsx(i.a,{href:"https://developers.google.com/fonts/docs/material_symbols#variable_font_with_google_fonts",rel:"nofollow",children:"Google Variable Fonts"})," for more details."]}),`
`,e.jsx(i.h2,{id:"playground",children:"Playground"}),`
`,e.jsx(n,{of:s}),`
`,e.jsx(r,{of:s}),`
`,e.jsx(i.h3,{id:"selective-imports",children:"Selective Imports"}),`
`,e.jsxs(i.p,{children:["Icon can be used as a standalone component, however, it does have a few dependencies. To see a full dependency list, see ",e.jsx(i.a,{href:"?path=/docs/overview-selective-imports--docs#dependencies",children:"Dependency Graph"})]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-css",children:`/* Depends on */
@import '@rolemodel/optics/dist/css/core/fonts'; /* (specifically core/fonts/icon_fonts) */
@import '@rolemodel/optics/dist/css/core/tokens';
@import '@rolemodel/optics/dist/css/core/base';

/* Component */
@import '@rolemodel/optics/dist/css/components/icon';
`})}),`
`,e.jsx(i.h3,{id:"additional-icon-libraries",children:"Additional Icon libraries"}),`
`,e.jsxs(i.p,{children:["Optics supports a variety of ",e.jsx(i.a,{href:"?path=/docs/overview-addons--docs",children:"Additional icon libraries"})," that can be imported. Due to the nature of these libraries, not all of the same icon class modifiers may be available."]}),`
`,e.jsx(i.p,{children:"There are three ways these icon libraries can be used."}),`
`,e.jsx(i.p,{children:"First is as an addon. This means that the default Material Symbols Outlined icons will still be loaded and both can be used."}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-css",children:`@import '@rolemodel/optics';
@import '@rolemodel/optics/dist/css/addons/fonts/phosphor_icons';
`})}),`
`,e.jsx(i.p,{children:"Second is to use an alternate Optics import that does not include the default Material Symbols Outlined icons, and only includes the additional icon library of your choice."}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-css",children:`@import '@rolemodel/optics/dist/css/optics+phosphor_icons';
`})}),`
`,e.jsx(i.p,{children:"Third is to remove the default Material Symbols Outlined icons and handle icons completely on your own. This will reduce the page load time by not loading any icons."}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-css",children:`@import '@rolemodel/optics/dist/css/optics+no_icons';
`})}),`
`,e.jsx(i.h3,{id:"material-symbols-outline-variable-icons",children:"Material Symbols Outline Variable Icons"}),`
`,e.jsxs(i.p,{children:["Optics ships with a simplified version of ",e.jsx(i.a,{href:"https://fonts.google.com/icons?icon.style=Outlined",rel:"nofollow",children:"Material Symbols Outlined"}),`. It only includes the font weight variable aspect of the icon library which means you won't be able to utilize the fill, or emphasis properties.
If your app does want to use the full Material Symbols Outlined library, you can import the full library by using the addon shown below.
This will increase the page load time but will allow you to use the full capabilities of the icon library.`]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-css",children:`@import '@rolemodel/optics/dist/css/optics+material_symbols_outlined_variable';
`})}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-html",children:`<i class="icon ph ph-smiley"></i>
`})}),`
`,e.jsx(i.p,{children:"The filled, size and weight modifiers can be used with Phosphor Icons."}),`
`,e.jsxs(i.p,{children:["Phosphor adds ",e.jsx(i.code,{children:".icon--weight-thin"})," but does not support ",e.jsx(i.code,{children:".icon--weight-semi-bold"}),`.
It also adds a dual tone variation by replacing `,e.jsx(i.code,{children:".ph"})," with ",e.jsx(i.code,{children:".ph-duotone"}),"."]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-html",children:`<i class="icon ph-duotone ph-smiley"></i>
`})}),`
`,e.jsxs(i.p,{children:["Note: Phosphor Icons do not support the use of emphasis variations or the use of ",e.jsx(i.code,{children:".icon--filled"})," in combination with ",e.jsx(i.code,{children:".ph-duotone"})," or any weight variations."]}),`
`,e.jsx(i.h3,{id:"phosphor-icons",children:"Phosphor Icons"}),`
`,e.jsxs(i.p,{children:[e.jsx(i.a,{href:"https://phosphoricons.com/",rel:"nofollow",children:"Phosphor Icons"})," can be created with the ",e.jsx(i.code,{children:"<i>"})," tag and uses the ",e.jsx(i.code,{children:".ph"})," prefix with ",e.jsx(i.code,{children:".ph-{name}"})," to define a specific icon."]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-css",children:`@import '@rolemodel/optics';
@import '@rolemodel/optics/dist/css/addons/fonts/phosphor_icons';
/* Or */
@import '@rolemodel/optics/dist/css/optics+phosphor_icons';
`})}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-html",children:`<i class="icon ph ph-smiley"></i>
`})}),`
`,e.jsx(i.p,{children:"The filled, size and weight modifiers can be used with Phosphor Icons."}),`
`,e.jsxs(i.p,{children:["Phosphor adds ",e.jsx(i.code,{children:".icon--weight-thin"})," but does not support ",e.jsx(i.code,{children:".icon--weight-semi-bold"}),`.
It also adds a dual tone variation by replacing `,e.jsx(i.code,{children:".ph"})," with ",e.jsx(i.code,{children:".ph-duotone"}),"."]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-html",children:`<i class="icon ph-duotone ph-smiley"></i>
`})}),`
`,e.jsxs(i.p,{children:["Note: Phosphor Icons do not support the use of emphasis variations or the use of ",e.jsx(i.code,{children:".icon--filled"})," in combination with ",e.jsx(i.code,{children:".ph-duotone"})," or any weight variations."]}),`
`,e.jsx(i.h3,{id:"tabler-icons",children:"Tabler Icons"}),`
`,e.jsxs(i.p,{children:[e.jsx(i.a,{href:"https://tabler.io/icons",rel:"nofollow",children:"Tabler Icons"})," can be created with the ",e.jsx(i.code,{children:"<i>"})," tag and uses the ",e.jsx(i.code,{children:".ti"})," prefix with ",e.jsx(i.code,{children:".ti-{name}"})," to define a specific icon."]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-css",children:`@import '@rolemodel/optics';
@import '@rolemodel/optics/dist/css/addons/fonts/tabler_icons';
/* Or */
@import '@rolemodel/optics/dist/css/optics+tabler_icons';
`})}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-html",children:`<i class="icon ti ti-settings"></i>
`})}),`
`,e.jsx(i.p,{children:"The size modifiers can be used with Tabler Icons."}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-html",children:`<i class="icon ti ti-settings icon--x-large"></i>
`})}),`
`,e.jsxs(i.p,{children:["It also supports a filled variant, however, rather than using the ",e.jsx(i.code,{children:".icon--filled"})," modifier, you can replace the ",e.jsx(i.code,{children:"ti-{name}"})," class with ",e.jsx(i.code,{children:".ti-{name}-filled"}),"."]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-html",children:`<i class="icon ti ti-settings-filled"></i>
`})}),`
`,e.jsx(i.p,{children:"Note: Tabler Icons do not support the use of weight or emphasis variations."}),`
`,e.jsx(i.h3,{id:"feather-icons",children:"Feather Icons"}),`
`,e.jsxs(i.p,{children:[e.jsx(i.a,{href:"https://feathericons.com/",rel:"nofollow",children:"Feather Icons"})," can be created with the ",e.jsx(i.code,{children:"<i>"})," tag and uses the ",e.jsx(i.code,{children:".fi"})," prefix with ",e.jsx(i.code,{children:".fi-{name}"})," to define a specific icon."]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-css",children:`@import '@rolemodel/optics';
@import '@rolemodel/optics/dist/css/addons/fonts/feather_icons';
/* Or */
@import '@rolemodel/optics/dist/css/optics+feather_icons';
`})}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-html",children:`<i class="icon fi fi-feather"></i>
`})}),`
`,e.jsx(i.p,{children:"The size modifiers can be used with Feather Icons."}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-html",children:`<i class="icon fi fi-feather icon--x-large"></i>
`})}),`
`,e.jsx(i.p,{children:`Note: Feather Icons do not support the use of filled, weight, or emphasis variations. The Feather Icon CDN does not include all of the Feather Icons.
If you want access to the broader range of Feather Icons, consider using Lucide Icons instead. However, if your needs are not as extensive or you are looking for a smaller icon pack, Feather Icons may be a better choice.`}),`
`,e.jsx(i.h3,{id:"lucide-icons",children:"Lucide Icons"}),`
`,e.jsx(i.p,{children:`Lucide Icons are a fork of Feather Icons with more icons. If you don't need all the icons that Lucide provides,
you can use the Feather Icons for a smaller icon pack instead. It is important to note that Feather Icons are less supported and not all of the listed icons are available.`}),`
`,e.jsxs(i.p,{children:[e.jsx(i.a,{href:"https://lucide.dev/icons/",rel:"nofollow",children:"Lucide Icons"})," can be created with the ",e.jsx(i.code,{children:"<i>"})," tag and uses the ",e.jsx(i.code,{children:".li"})," prefix with ",e.jsx(i.code,{children:".li-{name}"})," to define a specific icon."]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-css",children:`@import '@rolemodel/optics';
@import '@rolemodel/optics/dist/css/addons/fonts/lucide_icons';
/* Or */
@import '@rolemodel/optics/dist/css/optics+lucide_icons';
`})}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-html",children:`<i class="icon li li-banana"></i>
`})}),`
`,e.jsx(i.p,{children:"The size modifiers can be used with Lucide Icons."}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-html",children:`<i class="icon li li-banana icon--x-large"></i>
`})}),`
`,e.jsx(i.p,{children:"Note: Lucide Icons do not support the use of filled, weight, or emphasis variations."}),`
`,e.jsx(i.h2,{id:"variations",children:"Variations"}),`
`,e.jsx(i.h3,{id:"default",children:"Default"}),`
`,e.jsxs(i.p,{children:["To use an icon, put a ",e.jsx(i.code,{children:"span"})," with the class of ",e.jsx(i.code,{children:".icon.material-symbols-outlined"})," and inner text of whatever icon you wish to use I.E. ",e.jsx(i.code,{children:"settings"})," onto the page."]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-html",children:`<span class="icon material-symbols-outlined">settings</span>
`})}),`
`,e.jsx(n,{of:s}),`
`,e.jsx(i.h3,{id:"filled",children:"Filled"}),`
`,e.jsxs(i.p,{children:[e.jsx(i.code,{children:".icon--filled"}),", ",e.jsx(i.code,{children:".icon--outlined"})," (with outlined being the default) Provide a filled or outlined icon."]}),`
`,e.jsx(n,{of:h}),`
`,e.jsx(i.h3,{id:"size",children:"Size"}),`
`,e.jsxs(i.p,{children:[e.jsx(i.code,{children:".icon--small"}),", ",e.jsx(i.code,{children:".icon--medium"}),", ",e.jsx(i.code,{children:".icon--large"}),", ",e.jsx(i.code,{children:".icon--x-large"})," (with medium being the default) modify the size of any icon."]}),`
`,e.jsx(n,{of:p}),`
`,e.jsx(i.h3,{id:"weight",children:"Weight"}),`
`,e.jsxs(i.p,{children:[e.jsx(i.code,{children:".icon--weight-light"}),", ",e.jsx(i.code,{children:".icon--weight-normal"}),", ",e.jsx(i.code,{children:".icon--weight-semi-bold"}),", ",e.jsx(i.code,{children:".icon--weight-bold"})," (with normal being the default) modify the font weight of any icon."]}),`
`,e.jsx(n,{of:m}),`
`,e.jsx(i.h3,{id:"emphasis",children:"Emphasis"}),`
`,e.jsx(i.p,{children:"Emphasis acts similarly to weight, but changes the thickness of the icon strokes in subtle ways."}),`
`,e.jsxs(i.p,{children:[e.jsx(i.code,{children:".icon--low-emphasis"}),", ",e.jsx(i.code,{children:".icon--normal-emphasis"}),", ",e.jsx(i.code,{children:".icon--high-emphasis"})," (with normal being the default) modify the emphasis of any icon."]}),`
`,e.jsx(n,{of:f}),`
`,e.jsx(i.h2,{id:"icon-api",children:"Icon API"}),`
`,e.jsx(i.p,{children:"Styles are built on CSS variables scoped to the icon."}),`
`,e.jsx(i.p,{children:"Here are the variables that can be customized:"}),`
`,`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-css",children:`/* Weight */
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
`,e.jsx(i.h2,{id:"customizing-icon-styles",children:"Customizing Icon styles"}),`
`,e.jsx("div",{dangerouslySetInnerHTML:{__html:l({title:"Important!",description:"These patterns represent how to customize the style of the icon for your project."}).outerHTML}}),`
`,e.jsxs(i.p,{children:["The icon classes are structured using the ",e.jsx(i.a,{href:"https://getbem.com/naming",rel:"nofollow",children:"BEM methodology"}),"."]}),`
`,e.jsxs(i.p,{children:["This allows us to define core styles on a main ",e.jsx(i.a,{href:"https://getbem.com/naming/#block",rel:"nofollow",children:"block"})," class, and use ",e.jsx(i.a,{href:"https://getbem.com/naming/#modifier",rel:"nofollow",children:"modifiers"})," to encapsulate variant styles. You can modify all icon behavior by overriding the ",e.jsx(i.code,{children:".icon"})," selector and setting any properties:"]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-css",children:`.icon {
}
`})}),`
`,e.jsx(i.h2,{id:"new-icon-variations",children:"New Icon Variations"}),`
`,e.jsx("div",{dangerouslySetInnerHTML:{__html:l({title:"Important!",description:"These patterns represent how to create new variations of the icon for your project."}).outerHTML}}),`
`,e.jsxs(i.p,{children:["Your application may need a variation. To add one, just follow this template. Note the double hyphen, indicating that this is a ",e.jsx(i.a,{href:"https://getbem.com/naming/#modifier",rel:"nofollow",children:"modifier"}),":"]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-css",children:`.icon {
  &.icon--{name} {
    --_op-icon-font-size-small: var(--op-font-small);
  }
}
`})})]})}function N(o={}){const{wrapper:i}={...c(),...o.components};return i?e.jsx(i,{...o,children:e.jsx(t,{...o})}):t(o)}export{N as default};
