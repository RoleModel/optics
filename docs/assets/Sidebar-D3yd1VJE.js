import{j as e}from"./jsx-runtime-BudFbCqj.js";import{u as d}from"./index-CZ7_UIou.js";import{M as t,C as n,d as l}from"./index-BO8JBeAl.js";import{S as c,D as a,a as h,b as p,P as x,c as b,d as m,e as j,f as u,g as f,N as g,h as w,i as y,C as v,j as _,k as C,E as S,l as T,m as D,L as P,n as L,o as N}from"./Sidebar.stories-CPkY4-sa.js";import{c as M}from"./sourceCodeLink-Chh3FteF.js";import{c as i}from"./Alert-lmCd5s8U.js";import"./iframe-B89zdOr6.js";import"../sb-preview/runtime.js";import"./index-B5rfWaSj.js";import"./index-DrFu-skq.js";import"./Sidebar-uxEogKJ-.js";import"./Button-CoyIamir.js";import"./Icon-D9QrNi_D.js";function o(r){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...d(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:c}),`
`,e.jsx(s.h1,{id:"sidebar",children:"Sidebar"}),`
`,e.jsx("div",{dangerouslySetInnerHTML:{__html:M({link:"components/sidebar.scss"}).outerHTML}}),`
`,e.jsx(s.p,{children:"Sidebar classes provide simple styling for a navigation sidebar drawer, compact, or rail."}),`
`,e.jsxs(s.p,{children:["For instructions on how to integrate a sidebar into your applications layout, see ",e.jsx(s.a,{href:"?path=/docs/recipes-layout--sidebar",children:"Layout With Sidebar"})]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:".sidebar"})," is the main component that everything is contained within."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:".sidebar--drawer"}),", ",e.jsx(s.code,{children:".sidebar--compact"}),", and ",e.jsx(s.code,{children:".sidebar--rail"})," are used to denote which style of sidebar you would like to use."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:".sidebar--responsive"})," can be added to a drawer to allow for a sidebar that responsively changes from the larger state (compact or drawer) to the rail when the screen is smaller. e.g."]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<div class="sidebar sidebar--drawer sidebar--responsive">...</div>
`})}),`
`,e.jsxs(s.p,{children:["Any ",e.jsx(s.a,{href:"?path=/docs/navigation-components-button--docs#default",children:"Button"})," style can be used for the links."]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Drawer will use the normal button style, but left aligned"}),`
`,e.jsxs(s.li,{children:["Compact will use the ",e.jsx(s.code,{children:".icon-with-label"})," style"]}),`
`,e.jsxs(s.li,{children:["Rail will use the ",e.jsx(s.code,{children:".btn--icon"})," style and hide the label"]}),`
`]}),`
`,e.jsx(s.h2,{id:"playground",children:"Playground"}),`
`,e.jsx(n,{of:a}),`
`,e.jsx(l,{of:a}),`
`,e.jsx(s.h3,{id:"selective-imports",children:"Selective Imports"}),`
`,e.jsxs(s.p,{children:["Sidebar can be used as a standalone component, however, it does have a few dependencies. To see a full dependency list, see ",e.jsx(s.a,{href:"?path=/docs/overview-selective-imports--docs#dependencies",children:"Dependency Graph"})]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-css",children:`// Depends on
@import '@rolemodel/optics/dist/scss/core/tokens';
@import '@rolemodel/optics/dist/scss/core/base';
@import '@rolemodel/optics/dist/scss/components/icon';
@import '@rolemodel/optics/dist/scss/components/button';

// Component
@import '@rolemodel/optics/dist/scss/components/sidebar';
`})}),`
`,e.jsx(s.h2,{id:"variations",children:"Variations"}),`
`,e.jsx(s.h3,{id:"default",children:"Default"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:".sidebar"})," Provides a neutral colored sidebar. This uses the neutral color defined in your theme."]}),`
`,e.jsxs("div",{class:"flex gap-sm",children:[e.jsx(n,{of:a}),e.jsx(n,{of:h}),e.jsx(n,{of:p})]}),`
`,e.jsx(s.h3,{id:"primary",children:"Primary"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:".sidebar-primary"})," Provides a primary colored sidebar. This uses the primary color defined in your theme."]}),`
`,e.jsxs("div",{class:"flex gap-sm",children:[e.jsx(n,{of:x}),e.jsx(n,{of:b}),e.jsx(n,{of:m})]}),`
`,e.jsx(s.h3,{id:"padded",children:"Padded"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:".sidebar--padded"})," Adds a top and bottom padding to the sidebar."]}),`
`,e.jsxs("div",{class:"flex gap-sm",children:[e.jsx(n,{of:j}),e.jsx(n,{of:u}),e.jsx(n,{of:f})]}),`
`,e.jsx(s.h3,{id:"brand",children:"Brand"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:".sidebar__brand"})," can be used with an image tag inside. This can be used to display your applications branding or logo."]}),`
`,e.jsx(s.p,{children:"The brand is not required and the sidebar content will adjust itself accordingly."}),`
`,e.jsxs("div",{class:"flex gap-sm",children:[e.jsx(n,{of:g}),e.jsx(n,{of:w}),e.jsx(n,{of:y})]}),`
`,e.jsx(s.h3,{id:"content",children:"Content"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:".sidebar__content"})," defines the container that the buttons should be placed in. It can be positioned by using modifier classes."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:".sidebar__content--start"}),", ",e.jsx(s.code,{children:".sidebar__content--center"}),", ",e.jsx(s.code,{children:".sidebar__content--end"})," with start being the default."]}),`
`,e.jsxs("div",{class:"flex gap-sm",children:[e.jsx(n,{of:v}),e.jsx(n,{of:_}),e.jsx(n,{of:C})]}),`
`,e.jsxs("div",{class:"flex gap-sm",children:[e.jsx(n,{of:S}),e.jsx(n,{of:T}),e.jsx(n,{of:D})]}),`
`,e.jsxs("div",{class:"flex gap-sm",children:[e.jsx(n,{of:P}),e.jsx(n,{of:L}),e.jsx(n,{of:N})]}),`
`,e.jsx(s.h2,{id:"sidebar-api",children:"Sidebar API"}),`
`,e.jsx(s.p,{children:"Color and hover styles are built on CSS variables scoped to the sidebar."}),`
`,e.jsx(s.p,{children:"Here are the variables used:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-css",children:`// Public API
// Normal
--_op-sidebar-background-color
--_op-sidebar-text-color
--_op-sidebar-border-color

// Width
--_op-sidebar-rail-width
--_op-sidebar-compact-width
--_op-sidebar-drawer-width
--_op-sidebar-rail-brand-width
--_op-sidebar-compact-brand-width
--_op-sidebar-drawer-brand-width

// Spacing
--_op-sidebar-spacing
--_op-sidebar-brand-spacing
--_op-sidebar-content-spacing
--_op-sidebar-content-item-spacing

// Animation
--_op-sidebar-transition
`})}),`
`,e.jsx(s.h2,{id:"customizing-sidebar-styles",children:"Customizing Sidebar styles"}),`
`,e.jsx("div",{dangerouslySetInnerHTML:{__html:i({title:"Important!",description:"These patterns represent how to customize the style of the sidebar for your project."}).outerHTML}}),`
`,e.jsxs(s.p,{children:["The sidebar classes are built on a ",e.jsx(s.a,{href:"https://sass-lang.com/documentation/style-rules/placeholder-selectors",rel:"nofollow",children:"SASS placeholder selector"})]}),`
`,e.jsxs(s.p,{children:["This allows multiple sidebar classes to share the same behavior. You can modify all sidebar behavior by overriding the ",e.jsx(s.code,{children:"%sidebar-global"})," placeholder selector and setting any properties:"]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-css",children:`%sidebar-global {
  --_op-sidebar-rail-width: 10rem;
  --_op-sidebar-compact-width: 20rem;
  --_op-sidebar-drawer-width: 30rem;
}
`})}),`
`,e.jsx(s.p,{children:"There are also mixins for the rail and drawer specific styles. They can be overridden like:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-css",children:`@mixin sidebar-rail-global {
  .sidebar__content {
    align-items: flex-end;
  }
}

@mixin sidebar-drawer-global {
  .sidebar__content {
    > * {
      font-weight: var(--op-font-weight-black);
    }
  }
}
`})}),`
`,e.jsx(s.p,{children:"If you need to override the color of a particular sidebar style, you can open the respective class and change the variables documented above"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-css",children:`// This will only affect the primary sidebar, but not default
.sidebar-primary {
  --_op-sidebar-background-color: purple;
  --_op-sidebar-text-color: purple;
}
`})}),`
`,e.jsx(s.h2,{id:"new-sidebar-variations",children:"New Sidebar Variations"}),`
`,e.jsx("div",{dangerouslySetInnerHTML:{__html:i({title:"Important!",description:"These patterns represent how to create new variations of the sidebar for your project."}).outerHTML}}),`
`,e.jsx(s.p,{children:"Your application may need a custom Sidebar. To add one, just follow this template:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-css",children:`.sidebar-{name} {
  @extend %sidebar-global;
}
`})})]})}function q(r={}){const{wrapper:s}={...d(),...r.components};return s?e.jsx(s,{...r,children:e.jsx(o,{...r})}):o(r)}export{q as default};
