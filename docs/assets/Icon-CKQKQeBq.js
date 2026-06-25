import{i as e}from"./preload-helper-xPQekRTU.js";import{T as t,l as n,n as r,o as i,u as a}from"./blocks-uVOOWdqL.js";import{s as o}from"./chunk-LITCR56V-BmCoDI8n.js";import{t as s}from"./mdx-react-shim-eO_HyXU9.js";import{n as c,t as l}from"./sourceCodeLink-D2TI9VYO.js";import{n as u,t as d}from"./Alert-BSNiXkFA.js";import{Bold as f,Default as p,Emphasis as m,Filled as h,Large as g,n as _,t as v}from"./Icon.stories--H00rZvJ.js";function y(e){let a={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,...t(),...e.components};return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(n,{of:v}),`
`,(0,x.jsx)(a.h1,{id:`icon`,children:`Icon`}),`
`,(0,x.jsx)(`div`,{dangerouslySetInnerHTML:{__html:l({link:`components/icon.css`}).outerHTML}}),`
`,(0,x.jsxs)(a.p,{children:[`Icon classes are built on top of `,(0,x.jsx)(a.a,{href:`https://fonts.google.com/icons`,rel:`nofollow`,children:`Google's Material Symbols Icon Font`}),`. They provide a way to integrate iconography into your application in a flexible and customizable way.
Optics ships with a simplified version of `,(0,x.jsx)(a.a,{href:`https://fonts.google.com/icons?icon.style=Outlined`,rel:`nofollow`,children:`Material Symbols Outlined`}),`. We only include the font weight variable aspect of the library.
This means that adjusting the size and font weight are always available, but the emphasis and fill options below are not available by default. If your app would like to use these options, you can import the full library by using the `,(0,x.jsx)(a.a,{href:`?path=/docs/overview-addons--docs#icon-fonts`,children:`Icon Font Addon`}),`.`]}),`
`,(0,x.jsxs)(a.p,{children:[`If you don't need the full library, but want a specific axis of the `,(0,x.jsx)(a.a,{href:`?path=/docs/tokens-typography-font-family--docs#variable-fonts`,children:`Variable Font`}),`, You can use one of these imports alongside the Optics import.`]}),`
`,(0,x.jsx)(a.pre,{children:(0,x.jsx)(a.code,{className:`language-css`,children:`/* No fill, weight, or emphasis options, just allows for size modifiers */
@import 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined&display=block';

/* Only fill option */
@import 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:FILL@0..1&display=block';

/* Only emphasis option */
@import 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,GRAD@20..48,-50..200&display=block';
`})}),`
`,(0,x.jsxs)(a.p,{children:[`A combination of these could be used as well based on your applications needs. See `,(0,x.jsx)(a.a,{href:`https://developers.google.com/fonts/docs/material_symbols#variable_font_with_google_fonts`,rel:`nofollow`,children:`Google Variable Fonts`}),` for more details.`]}),`
`,(0,x.jsx)(a.h2,{id:`playground`,children:`Playground`}),`
`,(0,x.jsx)(r,{of:p}),`
`,(0,x.jsx)(i,{of:p}),`
`,(0,x.jsx)(a.h3,{id:`selective-imports`,children:`Selective Imports`}),`
`,(0,x.jsxs)(a.p,{children:[`Icon can be used as a standalone component, however, it does have a few dependencies. To see a full dependency list, see `,(0,x.jsx)(a.a,{href:`?path=/docs/overview-selective-imports--docs#dependencies`,children:`Dependency Graph`})]}),`
`,(0,x.jsx)(a.pre,{children:(0,x.jsx)(a.code,{className:`language-css`,children:`/* Depends on */
@import '@rolemodel/optics/dist/css/core/fonts'; /* (specifically core/fonts/icon_fonts) */
@import '@rolemodel/optics/dist/css/core/tokens';
@import '@rolemodel/optics/dist/css/core/base';

/* Component */
@import '@rolemodel/optics/dist/css/components/icon';
`})}),`
`,(0,x.jsx)(a.h3,{id:`additional-icon-libraries`,children:`Additional Icon libraries`}),`
`,(0,x.jsxs)(a.p,{children:[`Optics supports a variety of `,(0,x.jsx)(a.a,{href:`?path=/docs/overview-addons--docs`,children:`Additional icon libraries`}),` that can be imported. Due to the nature of these libraries, not all of the same icon class modifiers may be available.`]}),`
`,(0,x.jsx)(a.p,{children:`There are three ways these icon libraries can be used.`}),`
`,(0,x.jsx)(a.p,{children:`First is as an addon. This means that the default Material Symbols Outlined icons will still be loaded and both can be used.`}),`
`,(0,x.jsx)(a.pre,{children:(0,x.jsx)(a.code,{className:`language-css`,children:`@import '@rolemodel/optics';
@import '@rolemodel/optics/dist/css/addons/fonts/phosphor_icons';
`})}),`
`,(0,x.jsx)(a.p,{children:`Second is to use an alternate Optics import that does not include the default Material Symbols Outlined icons, and only includes the additional icon library of your choice.`}),`
`,(0,x.jsx)(a.pre,{children:(0,x.jsx)(a.code,{className:`language-css`,children:`@import '@rolemodel/optics/dist/css/optics+phosphor_icons';
`})}),`
`,(0,x.jsx)(a.p,{children:`Third is to remove the default Material Symbols Outlined icons and handle icons completely on your own. This will reduce the page load time by not loading any icons.`}),`
`,(0,x.jsx)(a.pre,{children:(0,x.jsx)(a.code,{className:`language-css`,children:`@import '@rolemodel/optics/dist/css/optics+no_icons';
`})}),`
`,(0,x.jsx)(a.h3,{id:`material-symbols-outline-variable-icons`,children:`Material Symbols Outline Variable Icons`}),`
`,(0,x.jsxs)(a.p,{children:[`Optics ships with a simplified version of `,(0,x.jsx)(a.a,{href:`https://fonts.google.com/icons?icon.style=Outlined`,rel:`nofollow`,children:`Material Symbols Outlined`}),`. It only includes the font weight variable aspect of the icon library which means you won't be able to utilize the fill, or emphasis properties.
If your app does want to use the full Material Symbols Outlined library, you can import the full library by using the addon shown below.
This will increase the page load time but will allow you to use the full capabilities of the icon library.`]}),`
`,(0,x.jsx)(a.pre,{children:(0,x.jsx)(a.code,{className:`language-css`,children:`@import '@rolemodel/optics/dist/css/optics+material_symbols_outlined_variable';
`})}),`
`,(0,x.jsx)(a.pre,{children:(0,x.jsx)(a.code,{className:`language-html`,children:`<span class="material-symbols-outlined icon">mood</span>
`})}),`
`,(0,x.jsx)(a.p,{children:`The filled, size and weight modifiers can be used with Material Symbols Icons.`}),`
`,(0,x.jsx)(a.h3,{id:`phosphor-icons`,children:`Phosphor Icons`}),`
`,(0,x.jsxs)(a.p,{children:[(0,x.jsx)(a.a,{href:`https://phosphoricons.com/`,rel:`nofollow`,children:`Phosphor Icons`}),` can be created with the `,(0,x.jsx)(a.code,{children:`<i>`}),` tag and uses the `,(0,x.jsx)(a.code,{children:`.ph`}),` prefix with `,(0,x.jsx)(a.code,{children:`.ph-{name}`}),` to define a specific icon.`]}),`
`,(0,x.jsxs)(a.p,{children:[`We currently support version 2.1.2 of `,(0,x.jsx)(a.a,{href:`https://github.com/phosphor-icons/web`,rel:`nofollow`,children:`Phosphor Icons Web`})]}),`
`,(0,x.jsx)(a.pre,{children:(0,x.jsx)(a.code,{className:`language-css`,children:`@import '@rolemodel/optics';
@import '@rolemodel/optics/dist/css/addons/fonts/phosphor_icons';
/* Or */
@import '@rolemodel/optics/dist/css/optics+phosphor_icons';
`})}),`
`,(0,x.jsx)(a.pre,{children:(0,x.jsx)(a.code,{className:`language-html`,children:`<i class="icon ph ph-smiley"></i>
`})}),`
`,(0,x.jsx)(a.p,{children:`The filled, size and weight modifiers can be used with Phosphor Icons.`}),`
`,(0,x.jsxs)(a.p,{children:[`Phosphor adds `,(0,x.jsx)(a.code,{children:`.icon--weight-thin`}),` but does not support `,(0,x.jsx)(a.code,{children:`.icon--weight-semi-bold`}),`.
It also adds a dual tone variation by replacing `,(0,x.jsx)(a.code,{children:`.ph`}),` with `,(0,x.jsx)(a.code,{children:`.ph-duotone`}),`.`]}),`
`,(0,x.jsx)(a.pre,{children:(0,x.jsx)(a.code,{className:`language-html`,children:`<i class="icon ph-duotone ph-smiley"></i>
`})}),`
`,(0,x.jsxs)(a.p,{children:[`Note: Phosphor Icons do not support the use of emphasis variations or the use of `,(0,x.jsx)(a.code,{children:`.icon--filled`}),` in combination with `,(0,x.jsx)(a.code,{children:`.ph-duotone`}),` or any weight variations.`]}),`
`,(0,x.jsx)(a.h3,{id:`tabler-icons`,children:`Tabler Icons`}),`
`,(0,x.jsxs)(a.p,{children:[(0,x.jsx)(a.a,{href:`https://tabler.io/icons`,rel:`nofollow`,children:`Tabler Icons`}),` can be created with the `,(0,x.jsx)(a.code,{children:`<i>`}),` tag and uses the `,(0,x.jsx)(a.code,{children:`.ti`}),` prefix with `,(0,x.jsx)(a.code,{children:`.ti-{name}`}),` to define a specific icon.`]}),`
`,(0,x.jsxs)(a.p,{children:[`We currently support version 3.44.0 of `,(0,x.jsx)(a.a,{href:`https://github.com/tabler/tabler-icons#cdn`,rel:`nofollow`,children:`Tabler Icons Iconfont`})]}),`
`,(0,x.jsx)(a.pre,{children:(0,x.jsx)(a.code,{className:`language-css`,children:`@import '@rolemodel/optics';
@import '@rolemodel/optics/dist/css/addons/fonts/tabler_icons';
/* Or */
@import '@rolemodel/optics/dist/css/optics+tabler_icons';
`})}),`
`,(0,x.jsx)(a.pre,{children:(0,x.jsx)(a.code,{className:`language-html`,children:`<i class="icon ti ti-settings"></i>
`})}),`
`,(0,x.jsx)(a.p,{children:`The size modifiers can be used with Tabler Icons.`}),`
`,(0,x.jsx)(a.pre,{children:(0,x.jsx)(a.code,{className:`language-html`,children:`<i class="icon ti ti-settings icon--x-large"></i>
`})}),`
`,(0,x.jsxs)(a.p,{children:[`It also supports a filled variant, however, rather than using the `,(0,x.jsx)(a.code,{children:`.icon--filled`}),` modifier, you can replace the `,(0,x.jsx)(a.code,{children:`ti-{name}`}),` class with `,(0,x.jsx)(a.code,{children:`.ti-{name}-filled`}),`.`]}),`
`,(0,x.jsx)(a.pre,{children:(0,x.jsx)(a.code,{className:`language-html`,children:`<i class="icon ti ti-settings-filled"></i>
`})}),`
`,(0,x.jsx)(a.p,{children:`Note: Tabler Icons do not support the use of weight or emphasis variations.`}),`
`,(0,x.jsx)(a.h3,{id:`feather-icons`,children:`Feather Icons`}),`
`,(0,x.jsxs)(a.p,{children:[(0,x.jsx)(a.a,{href:`https://feathericons.com/`,rel:`nofollow`,children:`Feather Icons`}),` can be created with the `,(0,x.jsx)(a.code,{children:`<i>`}),` tag and uses the `,(0,x.jsx)(a.code,{children:`.fi`}),` prefix with `,(0,x.jsx)(a.code,{children:`.fi-{name}`}),` to define a specific icon.`]}),`
`,(0,x.jsx)(a.pre,{children:(0,x.jsx)(a.code,{className:`language-css`,children:`@import '@rolemodel/optics';
@import '@rolemodel/optics/dist/css/addons/fonts/feather_icons';
/* Or */
@import '@rolemodel/optics/dist/css/optics+feather_icons';
`})}),`
`,(0,x.jsx)(a.pre,{children:(0,x.jsx)(a.code,{className:`language-html`,children:`<i class="icon fi fi-feather"></i>
`})}),`
`,(0,x.jsx)(a.p,{children:`The size modifiers can be used with Feather Icons.`}),`
`,(0,x.jsx)(a.pre,{children:(0,x.jsx)(a.code,{className:`language-html`,children:`<i class="icon fi fi-feather icon--x-large"></i>
`})}),`
`,(0,x.jsx)(a.p,{children:`Note: Feather Icons do not support the use of filled, weight, or emphasis variations. The Feather Icon CDN does not include all of the Feather Icons.
If you want access to the broader range of Feather Icons, consider using Lucide Icons instead. However, if your needs are not as extensive or you are looking for a smaller icon pack, Feather Icons may be a better choice.`}),`
`,(0,x.jsxs)(a.p,{children:[`We currently support version 4.29.0 of `,(0,x.jsx)(a.a,{href:`https://github.com/AT-UI/feather-font`,rel:`nofollow`,children:`Feather Icons Iconfont`})]}),`
`,(0,x.jsx)(a.h3,{id:`lucide-icons`,children:`Lucide Icons`}),`
`,(0,x.jsx)(a.p,{children:`Lucide Icons are a fork of Feather Icons with more icons. If you don't need all the icons that Lucide provides,
you can use the Feather Icons for a smaller icon pack instead. It is important to note that Feather Icons are less supported and not all of the listed icons are available.`}),`
`,(0,x.jsxs)(a.p,{children:[(0,x.jsx)(a.a,{href:`https://lucide.dev/icons/`,rel:`nofollow`,children:`Lucide Icons`}),` can be created with the `,(0,x.jsx)(a.code,{children:`<i>`}),` tag and uses the `,(0,x.jsx)(a.code,{children:`.li`}),` prefix with `,(0,x.jsx)(a.code,{children:`.li-{name}`}),` to define a specific icon.`]}),`
`,(0,x.jsxs)(a.p,{children:[`We currently support version 1.21.0 of `,(0,x.jsx)(a.a,{href:`https://github.com/lucide-icons/lucide/tree/main/packages/lucide-static`,rel:`nofollow`,children:`Lucide Icons Static`})]}),`
`,(0,x.jsx)(a.pre,{children:(0,x.jsx)(a.code,{className:`language-css`,children:`@import '@rolemodel/optics';
@import '@rolemodel/optics/dist/css/addons/fonts/lucide_icons';
/* Or */
@import '@rolemodel/optics/dist/css/optics+lucide_icons';
`})}),`
`,(0,x.jsx)(a.pre,{children:(0,x.jsx)(a.code,{className:`language-html`,children:`<i class="icon li li-banana"></i>
`})}),`
`,(0,x.jsx)(a.p,{children:`The size modifiers can be used with Lucide Icons.`}),`
`,(0,x.jsx)(a.pre,{children:(0,x.jsx)(a.code,{className:`language-html`,children:`<i class="icon li li-banana icon--x-large"></i>
`})}),`
`,(0,x.jsx)(a.p,{children:`Note: Lucide Icons do not support the use of filled, weight, or emphasis variations.`}),`
`,(0,x.jsx)(a.h2,{id:`variations`,children:`Variations`}),`
`,(0,x.jsx)(a.h3,{id:`default`,children:`Default`}),`
`,(0,x.jsxs)(a.p,{children:[`To use an icon, put a `,(0,x.jsx)(a.code,{children:`span`}),` with the class of `,(0,x.jsx)(a.code,{children:`.icon.material-symbols-outlined`}),` and inner text of whatever icon you wish to use I.E. `,(0,x.jsx)(a.code,{children:`settings`}),` onto the page.`]}),`
`,(0,x.jsx)(a.pre,{children:(0,x.jsx)(a.code,{className:`language-html`,children:`<span class="icon material-symbols-outlined">settings</span>
`})}),`
`,(0,x.jsx)(r,{of:p}),`
`,(0,x.jsx)(a.h3,{id:`filled`,children:`Filled`}),`
`,(0,x.jsxs)(a.p,{children:[(0,x.jsx)(a.code,{children:`.icon--filled`}),`, `,(0,x.jsx)(a.code,{children:`.icon--outlined`}),` (with outlined being the default) Provide a filled or outlined icon.`]}),`
`,(0,x.jsx)(r,{of:h}),`
`,(0,x.jsx)(a.h3,{id:`size`,children:`Size`}),`
`,(0,x.jsxs)(a.p,{children:[(0,x.jsx)(a.code,{children:`.icon--small`}),`, `,(0,x.jsx)(a.code,{children:`.icon--medium`}),`, `,(0,x.jsx)(a.code,{children:`.icon--large`}),`, `,(0,x.jsx)(a.code,{children:`.icon--x-large`}),` (with medium being the default) modify the size of any icon.`]}),`
`,(0,x.jsx)(r,{of:g}),`
`,(0,x.jsx)(a.h3,{id:`weight`,children:`Weight`}),`
`,(0,x.jsxs)(a.p,{children:[(0,x.jsx)(a.code,{children:`.icon--weight-light`}),`, `,(0,x.jsx)(a.code,{children:`.icon--weight-normal`}),`, `,(0,x.jsx)(a.code,{children:`.icon--weight-semi-bold`}),`, `,(0,x.jsx)(a.code,{children:`.icon--weight-bold`}),` (with normal being the default) modify the font weight of any icon.`]}),`
`,(0,x.jsx)(r,{of:f}),`
`,(0,x.jsx)(a.h3,{id:`emphasis`,children:`Emphasis`}),`
`,(0,x.jsx)(a.p,{children:`Emphasis acts similarly to weight, but changes the thickness of the icon strokes in subtle ways.`}),`
`,(0,x.jsxs)(a.p,{children:[(0,x.jsx)(a.code,{children:`.icon--low-emphasis`}),`, `,(0,x.jsx)(a.code,{children:`.icon--normal-emphasis`}),`, `,(0,x.jsx)(a.code,{children:`.icon--high-emphasis`}),` (with normal being the default) modify the emphasis of any icon.`]}),`
`,(0,x.jsx)(r,{of:m}),`
`,(0,x.jsx)(a.h2,{id:`icon-api`,children:`Icon API`}),`
`,(0,x.jsx)(a.p,{children:`Styles are built on CSS variables scoped to the icon.`}),`
`,(0,x.jsx)(a.p,{children:`Here are the variables that can be customized:`}),`
`,`
`,(0,x.jsx)(a.pre,{children:(0,x.jsx)(a.code,{className:`language-css`,children:`/* Weight */
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
`,(0,x.jsx)(a.h2,{id:`customizing-icon-styles`,children:`Customizing Icon styles`}),`
`,(0,x.jsx)(`div`,{dangerouslySetInnerHTML:{__html:d({title:`Important!`,description:`These patterns represent how to customize the style of the icon for your project.`}).outerHTML}}),`
`,(0,x.jsxs)(a.p,{children:[`The icon classes are structured using the `,(0,x.jsx)(a.a,{href:`https://getbem.com/naming`,rel:`nofollow`,children:`BEM methodology`}),`.`]}),`
`,(0,x.jsxs)(a.p,{children:[`This allows us to define core styles on a main `,(0,x.jsx)(a.a,{href:`https://getbem.com/naming/#block`,rel:`nofollow`,children:`block`}),` class, and use `,(0,x.jsx)(a.a,{href:`https://getbem.com/naming/#modifier`,rel:`nofollow`,children:`modifiers`}),` to encapsulate variant styles. You can modify all icon behavior by overriding the `,(0,x.jsx)(a.code,{children:`.icon`}),` selector and setting any properties:`]}),`
`,(0,x.jsx)(a.pre,{children:(0,x.jsx)(a.code,{className:`language-css`,children:`.icon {
}
`})}),`
`,(0,x.jsx)(a.h2,{id:`new-icon-variations`,children:`New Icon Variations`}),`
`,(0,x.jsx)(`div`,{dangerouslySetInnerHTML:{__html:d({title:`Important!`,description:`These patterns represent how to create new variations of the icon for your project.`}).outerHTML}}),`
`,(0,x.jsxs)(a.p,{children:[`Your application may need a variation. To add one, just follow this template. Note the double hyphen, indicating that this is a `,(0,x.jsx)(a.a,{href:`https://getbem.com/naming/#modifier`,rel:`nofollow`,children:`modifier`}),`:`]}),`
`,(0,x.jsx)(a.pre,{children:(0,x.jsx)(a.code,{className:`language-css`,children:`.icon {
  &.icon--{name} {
    --_op-icon-font-size-small: var(--op-font-small);
  }
}
`})})]})}function b(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,x.jsx)(n,{...e,children:(0,x.jsx)(y,{...e})}):y(e)}var x;e((()=>{x=o(),s(),a(),_(),c(),u()}))();export{b as default};