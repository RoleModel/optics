import{j as e,M as t}from"./WithTooltip-SK46ZJ2J-D25rk-eE.js";import{useMDXComponents as i}from"./index-DW-nmGvp.js";import{c as l}from"./sourceCodeLink-Chh3FteF.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-CR1j2QAj.js";function s(n){const o={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"Overview/Addons"}),`
`,e.jsx(o.h1,{id:"addons",children:"Addons"}),`
`,e.jsx("div",{dangerouslySetInnerHTML:{__html:l({link:"addons"}).outerHTML}}),`
`,e.jsx(o.p,{children:"Optics provides a few addons for integrating Third-Party tools with your application."}),`
`,e.jsx(o.h2,{id:"icon-fonts",children:"Icon Fonts"}),`
`,e.jsx(o.h3,{id:"material-symbols-outlined",children:"Material Symbols Outlined"}),`
`,e.jsxs(o.p,{children:["Optics ships with a simplified version of ",e.jsx(o.a,{href:"https://fonts.google.com/icons?icon.style=Outlined",rel:"nofollow",children:"Material Symbols Outlined"}),`. It only includes the font weight variable aspect of the icon library which means you won't be able to utilize the fill, or emphasis properties.
This is a trade-off for a smaller file size which reduces page load "flash-in" where icons are blank until the font has loaded.
This flash has been mitigated some by using the `,e.jsx(o.code,{children:"font-display: block;"})," property on the font face to hide the underlying text until loaded as well as a fixed size to prevent layout shift."]}),`
`,e.jsx(o.p,{children:`If your app does want to use the full Material Symbols Outlined library, you can import the full library by using the addon shown below.
This will increase the page load time but will allow you to use the full capabilities of the icon library.`}),`
`,e.jsx(o.h3,{id:"additional-icon-libraries",children:"Additional Icon libraries"}),`
`,e.jsx(o.p,{children:"Optics supports alternative icon libraries. It currently supports"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"https://phosphoricons.com/",rel:"nofollow",children:"Phosphor"})}),`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"https://tabler.io/icons",rel:"nofollow",children:"Tabler"})}),`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"https://feathericons.com/",rel:"nofollow",children:"Feather"})}),`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"https://lucide.dev/icons/",rel:"nofollow",children:"Lucide"})}),`
`]}),`
`,e.jsx(o.p,{children:"These can be imported alongside the base design system to provide additional icon options."}),`
`,e.jsxs(o.p,{children:["For more information on how to use these icons, see the ",e.jsx(o.a,{href:"?path=/docs/components-icon--docs",children:"Icon Component"}),"."]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-css",children:`@import '@rolemodel/optics';

/* Full Material Symbols Outlined Package */
@import '@rolemodel/optics/dist/css/addons/fonts/material_symbols_outlined_variable';

/* Phosphor Icons */
@import '@rolemodel/optics/dist/css/addons/fonts/phosphor_icons';

/* Tabler Icons */
@import '@rolemodel/optics/dist/css/addons/fonts/tabler';

/* Feather Icons */
@import '@rolemodel/optics/dist/css/addons/fonts/feather';

/* Lucide Icons (a fork of feather with more icons) */
@import '@rolemodel/optics/dist/css/addons/fonts/lucide';
`})}),`
`,e.jsx(o.h2,{id:"tom-select",children:"Tom Select"}),`
`,e.jsxs(o.p,{children:[e.jsx(o.a,{href:"https://tom-select.js.org/",rel:"nofollow",children:"Tom Select"})," is a dynamic, framework agnostic, and lightweight (~16kb gzipped) ",e.jsx(o.code,{children:"<select>"})," UI control. With autocomplete and native-feeling keyboard navigation, it's useful for tagging, contact lists, country selectors, and so on."]}),`
`,e.jsx(o.p,{children:"If your application uses Tom Select, you can import the styles from Tom Select along with the Design Systems tokens applied to it by placing this after importing the base design system."}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-css",children:`@import '@rolemodel/optics';
@import 'tom-select/dist/css/tom-select';

@import '@rolemodel/optics/dist/css/addons/tom-select';
`})}),`
`,e.jsx(o.h2,{id:"rails-panel",children:"Rails Panel"}),`
`,e.jsxs(o.p,{children:["Panel provide styles that are intended to accompany the rails configuration and javascript implemented by ",e.jsx(o.a,{href:"https://github.com/RoleModel/rolemodel_rails/tree/master/lib/generators/rolemodel/modals",rel:"nofollow",children:"RoleModel Rails Panel"})," Similar to the Modal Component"]}),`
`,e.jsx(o.p,{children:"If your application uses this implementation, you can import the styles via:"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-css",children:`@import '@rolemodel/optics';

@import '@rolemodel/optics/dist/css/addons/panel';
`})})]})}function p(n={}){const{wrapper:o}={...i(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(s,{...n})}):s(n)}export{p as default};
