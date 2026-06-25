import{i as e}from"./preload-helper-xPQekRTU.js";import{T as t,l as n,u as r}from"./blocks-uVOOWdqL.js";import{s as i}from"./chunk-LITCR56V-BmCoDI8n.js";import{t as a}from"./mdx-react-shim-eO_HyXU9.js";import{n as o,t as s}from"./sourceCodeLink-D2TI9VYO.js";function c(e){let r={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...t(),...e.components};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(n,{title:`Overview/Addons`}),`
`,(0,u.jsx)(r.h1,{id:`addons`,children:`Addons`}),`
`,(0,u.jsx)(`div`,{dangerouslySetInnerHTML:{__html:s({link:`addons`}).outerHTML}}),`
`,(0,u.jsx)(r.p,{children:`Optics provides a few addons for integrating Third-Party tools with your application.`}),`
`,(0,u.jsx)(r.h2,{id:`icon-fonts`,children:`Icon Fonts`}),`
`,(0,u.jsx)(r.h3,{id:`material-symbols-outlined`,children:`Material Symbols Outlined`}),`
`,(0,u.jsxs)(r.p,{children:[`Optics ships with a simplified version of `,(0,u.jsx)(r.a,{href:`https://fonts.google.com/icons?icon.style=Outlined`,rel:`nofollow`,children:`Material Symbols Outlined`}),`. It only includes the font weight variable aspect of the icon library which means you won't be able to utilize the fill, or emphasis properties.
This is a trade-off for a smaller file size which reduces page load "flash-in" where icons are blank until the font has loaded.
This flash has been mitigated some by using the `,(0,u.jsx)(r.code,{children:`font-display: block;`}),` property on the font face to hide the underlying text until loaded as well as a fixed size to prevent layout shift.`]}),`
`,(0,u.jsx)(r.p,{children:`If your app does want to use the full Material Symbols Outlined library, you can import the full library by using the addon shown below.
This will increase the page load time but will allow you to use the full capabilities of the icon library.`}),`
`,(0,u.jsx)(r.h3,{id:`additional-icon-libraries`,children:`Additional Icon libraries`}),`
`,(0,u.jsx)(r.p,{children:`Optics supports alternative icon libraries. It currently supports`}),`
`,(0,u.jsxs)(r.ul,{children:[`
`,(0,u.jsx)(r.li,{children:(0,u.jsx)(r.a,{href:`https://phosphoricons.com/`,rel:`nofollow`,children:`Phosphor`})}),`
`,(0,u.jsx)(r.li,{children:(0,u.jsx)(r.a,{href:`https://tabler.io/icons`,rel:`nofollow`,children:`Tabler`})}),`
`,(0,u.jsx)(r.li,{children:(0,u.jsx)(r.a,{href:`https://feathericons.com/`,rel:`nofollow`,children:`Feather`})}),`
`,(0,u.jsx)(r.li,{children:(0,u.jsx)(r.a,{href:`https://lucide.dev/icons/`,rel:`nofollow`,children:`Lucide`})}),`
`]}),`
`,(0,u.jsxs)(r.p,{children:[`These can be imported alongside the base design system to provide additional icon options. They can also be integrated with the base design system instead of as an addon if you don't want to use the default Material Symbols Outlined icons. This will reduce the page load time by not loading the Material Symbols Outlined icons.
Note: This alternate import approach (optics+icon_library) supports the minified versions as well. Just add `,(0,u.jsx)(r.code,{children:`.min.css`}),` to the end of the file name.`]}),`
`,(0,u.jsxs)(r.p,{children:[`For more information on how to use these icons, see the `,(0,u.jsx)(r.a,{href:`?path=/docs/components-icon--docs`,children:`Icon Component`}),`.`]}),`
`,(0,u.jsx)(r.pre,{children:(0,u.jsx)(r.code,{className:`language-css`,children:`/* Full Material Symbols Outlined Package */
@import '@rolemodel/optics';
@import '@rolemodel/optics/dist/css/addons/fonts/material_symbols_outlined_variable';
/* Or */
@import '@rolemodel/optics/dist/css/optics+material_symbols_outlined_variable';

/* Phosphor Icons */
@import '@rolemodel/optics';
@import '@rolemodel/optics/dist/css/addons/fonts/phosphor_icons';
/* Or */
@import '@rolemodel/optics/dist/css/optics+phosphor_icons';

/* Tabler Icons */
@import '@rolemodel/optics';
@import '@rolemodel/optics/dist/css/addons/fonts/tabler_icons';
/* Or */
@import '@@rolemodel/optics/dist/css/optics+tabler_icons';

/* Feather Icons */
@import '@rolemodel/optics';
@import '@rolemodel/optics/dist/css/addons/fonts/feather_icons';
/* Or */
@import '@rolemodel/optics/dist/css/optics+feather_icons';

/* Lucide Icons (a fork of feather with more icons) */
@import '@rolemodel/optics';
@import '@rolemodel/optics/dist/css/addons/fonts/lucide_icons';
/* Or */
@import '@rolemodel/optics/dist/css/optics+lucide_icons';
`})}),`
`,(0,u.jsx)(r.h2,{id:`tom-select`,children:`Tom Select`}),`
`,(0,u.jsxs)(r.p,{children:[(0,u.jsx)(r.a,{href:`https://tom-select.js.org/`,rel:`nofollow`,children:`Tom Select`}),` is a dynamic, framework agnostic, and lightweight (~16kb gzipped) `,(0,u.jsx)(r.code,{children:`<select>`}),` UI control. With autocomplete and native-feeling keyboard navigation, it's useful for tagging, contact lists, country selectors, and so on.`]}),`
`,(0,u.jsx)(r.p,{children:`If your application uses Tom Select, you can import the styles from Tom Select along with the Design Systems tokens applied to it by placing this after importing the base design system.`}),`
`,(0,u.jsx)(r.pre,{children:(0,u.jsx)(r.code,{className:`language-css`,children:`@import '@rolemodel/optics';
@import 'tom-select/dist/css/tom-select';

@import '@rolemodel/optics/dist/css/addons/tom-select';
`})}),`
`,(0,u.jsx)(r.h2,{id:`rails-panel`,children:`Rails Panel`}),`
`,(0,u.jsxs)(r.p,{children:[`Panel provide styles that are intended to accompany the rails configuration and javascript implemented by `,(0,u.jsx)(r.a,{href:`https://github.com/RoleModel/rolemodel_rails/tree/master/lib/generators/rolemodel/modals`,rel:`nofollow`,children:`RoleModel Rails Panel`}),` Similar to the Modal Component`]}),`
`,(0,u.jsx)(r.p,{children:`If your application uses this implementation, you can import the styles via:`}),`
`,(0,u.jsx)(r.pre,{children:(0,u.jsx)(r.code,{className:`language-css`,children:`@import '@rolemodel/optics';

@import '@rolemodel/optics/dist/css/addons/panel';
`})})]})}function l(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,u.jsx)(n,{...e,children:(0,u.jsx)(c,{...e})}):c(e)}var u;e((()=>{u=i(),a(),r(),o()}))();export{l as default};