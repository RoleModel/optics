import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{i as t}from"./react-CaHZDgIm.js";import{s as n}from"./chunk-LITCR56V-BxXRPQK8.js";import{l as r,n as i,o as a,u as o}from"./blocks-3ODIrP3Y.js";import{t as s}from"./mdx-react-shim-DIeO1dVO.js";import{n as c,t as l}from"./sourceCodeLink-C1o55bv0.js";import{n as u,t as d}from"./Alert-xuHYkKjH.js";import{CenteredCompact as f,CenteredDrawer as p,CenteredRail as m,DefaultCompact as h,DefaultDrawer as g,DefaultRail as _,EndCompact as v,EndDrawer as y,EndRail as b,LogoutCompact as x,LogoutDrawer as S,LogoutRail as C,NoBrandCompact as w,NoBrandDrawer as T,NoBrandRail as E,PaddedCompact as D,PaddedDrawer as O,PaddedRail as k,PrimaryCompact as A,PrimaryDrawer as j,PrimaryRail as M,n as N,t as P}from"./Sidebar.stories-DeepP1IX.js";function F(e){let n={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...t(),...e.components};return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(r,{of:P}),`
`,(0,L.jsx)(n.h1,{id:`sidebar`,children:`Sidebar`}),`
`,(0,L.jsx)(`div`,{dangerouslySetInnerHTML:{__html:l({link:`components/sidebar.css`}).outerHTML}}),`
`,(0,L.jsx)(n.p,{children:`Sidebar classes provide simple styling for a navigation sidebar drawer, compact, or rail.`}),`
`,(0,L.jsxs)(n.p,{children:[`For instructions on how to integrate a sidebar into your applications layout, see `,(0,L.jsx)(n.a,{href:`?path=/docs/recipes-layout--sidebar`,children:`Layout With Sidebar`})]}),`
`,(0,L.jsxs)(n.p,{children:[(0,L.jsx)(n.code,{children:`.sidebar`}),` is the main component that everything is contained within.`]}),`
`,(0,L.jsxs)(n.p,{children:[(0,L.jsx)(n.code,{children:`.sidebar--drawer`}),`, `,(0,L.jsx)(n.code,{children:`.sidebar--compact`}),`, and `,(0,L.jsx)(n.code,{children:`.sidebar--rail`}),` are used to denote which style of sidebar you would like to use.`]}),`
`,(0,L.jsx)(n.pre,{children:(0,L.jsx)(n.code,{className:`language-html`,children:`<div class="sidebar sidebar--drawer">...</div>
`})}),`
`,(0,L.jsxs)(n.p,{children:[`Any `,(0,L.jsx)(n.a,{href:`?path=/docs/components-button--docs#default`,children:`Button`}),` style can be used for the links.`]}),`
`,(0,L.jsxs)(n.ul,{children:[`
`,(0,L.jsx)(n.li,{children:`Drawer will use the normal button style, but left aligned`}),`
`,(0,L.jsxs)(n.li,{children:[`Compact will use the `,(0,L.jsx)(n.code,{children:`.icon-with-label`}),` style`]}),`
`,(0,L.jsxs)(n.li,{children:[`Rail will use the `,(0,L.jsx)(n.code,{children:`.btn--icon`}),` style and hide the label`]}),`
`]}),`
`,(0,L.jsx)(n.h2,{id:`responsive-sidebar`,children:`Responsive Sidebar`}),`
`,(0,L.jsx)(n.p,{children:`The sidebar can be made responsive with a little snippet of Javascript. This allows for the sidebar to change from the larger state (compact or drawer) to the rail when the screen is smaller. e.g.`}),`
`,(0,L.jsx)(n.pre,{children:(0,L.jsx)(n.code,{className:`language-js`,children:`const sidebarStyleOptions = {
  drawer: 'sidebar--drawer',
  compact: 'sidebar--compact',
  rail: 'sidebar--rail',
}

const getSidebarStyle = (width) => {
  let newStyle = sidebarStyleOptions['drawer']

  if (window.innerWidth <= 1024) {
    newStyle = sidebarStyleOptions['compact']
  }

  if (window.innerWidth <= 768) {
    newStyle = sidebarStyleOptions['rail']
  }

  return newStyle
}

const applySidebarStyle = (newStyle) => {
  const sidebar = document.getElementById('sidebar')
  sidebar.classList.remove(sidebarStyleOptions['drawer'])
  sidebar.classList.remove(sidebarStyleOptions['compact'])
  sidebar.classList.remove(sidebarStyleOptions['rail'])
  sidebar.classList.add(newStyle)
}

// Initial Page Load
applySidebarStyle(getSidebarStyle(window.innerWidth))

// Window Resize
window.addEventListener('resize', (event) => {
  applySidebarStyle(getSidebarStyle(window.innerWidth))
})
`})}),`
`,(0,L.jsx)(n.h2,{id:`playground`,children:`Playground`}),`
`,(0,L.jsx)(i,{of:g}),`
`,(0,L.jsx)(a,{of:g}),`
`,(0,L.jsx)(n.h3,{id:`selective-imports`,children:`Selective Imports`}),`
`,(0,L.jsxs)(n.p,{children:[`Sidebar can be used as a standalone component, however, it does have a few dependencies. To see a full dependency list, see `,(0,L.jsx)(n.a,{href:`?path=/docs/overview-selective-imports--docs#dependencies`,children:`Dependency Graph`})]}),`
`,(0,L.jsx)(n.pre,{children:(0,L.jsx)(n.code,{className:`language-css`,children:`/* Depends on */
@import '@rolemodel/optics/dist/css/core/fonts';
@import '@rolemodel/optics/dist/css/core/tokens';
@import '@rolemodel/optics/dist/css/core/base';
@import '@rolemodel/optics/dist/css/components/icon';
@import '@rolemodel/optics/dist/css/components/button';

/* Component */
@import '@rolemodel/optics/dist/css/components/sidebar';
`})}),`
`,(0,L.jsx)(n.h2,{id:`variations`,children:`Variations`}),`
`,(0,L.jsx)(n.h3,{id:`default`,children:`Default`}),`
`,(0,L.jsxs)(n.p,{children:[(0,L.jsx)(n.code,{children:`.sidebar`}),` Provides a neutral colored sidebar. This uses the neutral color defined in your theme.`]}),`
`,(0,L.jsxs)(`div`,{class:`flex gap-sm`,children:[(0,L.jsx)(`div`,{children:(0,L.jsx)(i,{of:g})}),(0,L.jsx)(`div`,{children:(0,L.jsx)(i,{of:h})}),(0,L.jsx)(`div`,{children:(0,L.jsx)(i,{of:_})})]}),`
`,(0,L.jsx)(n.h3,{id:`primary`,children:`Primary`}),`
`,(0,L.jsxs)(n.p,{children:[(0,L.jsx)(n.code,{children:`.sidebar--primary`}),` Provides a primary colored sidebar. This uses the primary color defined in your theme.`]}),`
`,(0,L.jsxs)(`div`,{class:`flex gap-sm`,children:[(0,L.jsx)(`div`,{children:(0,L.jsx)(i,{of:j})}),(0,L.jsx)(`div`,{children:(0,L.jsx)(i,{of:A})}),(0,L.jsx)(`div`,{children:(0,L.jsx)(i,{of:M})})]}),`
`,(0,L.jsx)(n.h3,{id:`padded`,children:`Padded`}),`
`,(0,L.jsxs)(n.p,{children:[(0,L.jsx)(n.code,{children:`.sidebar--padded`}),` Adds a top and bottom padding to the sidebar.`]}),`
`,(0,L.jsxs)(`div`,{class:`flex gap-sm`,children:[(0,L.jsx)(`div`,{children:(0,L.jsx)(i,{of:O})}),(0,L.jsx)(`div`,{children:(0,L.jsx)(i,{of:D})}),(0,L.jsx)(`div`,{children:(0,L.jsx)(i,{of:k})})]}),`
`,(0,L.jsx)(n.h3,{id:`brand`,children:`Brand`}),`
`,(0,L.jsxs)(n.p,{children:[(0,L.jsx)(n.code,{children:`.sidebar__brand`}),` can be used with an image tag inside. This can be used to display your applications branding or logo.`]}),`
`,(0,L.jsx)(n.p,{children:`The brand is not required and the sidebar content will adjust itself accordingly.`}),`
`,(0,L.jsxs)(`div`,{class:`flex gap-sm`,children:[(0,L.jsx)(`div`,{children:(0,L.jsx)(i,{of:T})}),(0,L.jsx)(`div`,{children:(0,L.jsx)(i,{of:w})}),(0,L.jsx)(`div`,{children:(0,L.jsx)(i,{of:E})})]}),`
`,(0,L.jsx)(n.h3,{id:`content`,children:`Content`}),`
`,(0,L.jsxs)(n.p,{children:[(0,L.jsx)(n.code,{children:`.sidebar__content`}),` defines the container that the buttons should be placed in. It can be positioned by using modifier classes.`]}),`
`,(0,L.jsxs)(n.p,{children:[(0,L.jsx)(n.code,{children:`.sidebar__content--start`}),`, `,(0,L.jsx)(n.code,{children:`.sidebar__content--center`}),`, `,(0,L.jsx)(n.code,{children:`.sidebar__content--end`}),` with start being the default.`]}),`
`,(0,L.jsxs)(`div`,{class:`flex gap-sm`,children:[(0,L.jsx)(`div`,{children:(0,L.jsx)(i,{of:p})}),(0,L.jsx)(`div`,{children:(0,L.jsx)(i,{of:f})}),(0,L.jsx)(`div`,{children:(0,L.jsx)(i,{of:m})})]}),`
`,(0,L.jsxs)(`div`,{class:`flex gap-sm`,children:[(0,L.jsx)(`div`,{children:(0,L.jsx)(i,{of:y})}),(0,L.jsx)(`div`,{children:(0,L.jsx)(i,{of:v})}),(0,L.jsx)(`div`,{children:(0,L.jsx)(i,{of:b})})]}),`
`,(0,L.jsxs)(`div`,{class:`flex gap-sm`,children:[(0,L.jsx)(`div`,{children:(0,L.jsx)(i,{of:S})}),(0,L.jsx)(`div`,{children:(0,L.jsx)(i,{of:x})}),(0,L.jsx)(`div`,{children:(0,L.jsx)(i,{of:C})})]}),`
`,(0,L.jsx)(n.h2,{id:`sidebar-api`,children:`Sidebar API`}),`
`,(0,L.jsx)(n.p,{children:`Color and hover styles are built on CSS variables scoped to the sidebar.`}),`
`,(0,L.jsx)(n.p,{children:`Here are the variables used:`}),`
`,(0,L.jsx)(n.pre,{children:(0,L.jsx)(n.code,{className:`language-css`,children:`/* Public API */
/* Normal */
--_op-sidebar-background-color
--_op-sidebar-text-color
--_op-sidebar-border-color

/* Width */
--_op-sidebar-rail-width
--_op-sidebar-compact-width
--_op-sidebar-drawer-width
--_op-sidebar-rail-brand-width
--_op-sidebar-compact-brand-width
--_op-sidebar-drawer-brand-width

/* Spacing */
--_op-sidebar-spacing
--_op-sidebar-brand-spacing
--_op-sidebar-content-spacing
--_op-sidebar-content-item-spacing

/* Animation */
--_op-sidebar-transition
`})}),`
`,(0,L.jsx)(n.h2,{id:`customizing-sidebar-styles`,children:`Customizing Sidebar styles`}),`
`,(0,L.jsx)(`div`,{dangerouslySetInnerHTML:{__html:d({title:`Important!`,description:`These patterns represent how to customize the style of the sidebar for your project.`}).outerHTML}}),`
`,(0,L.jsxs)(n.p,{children:[`The sidebar classes are structured using the `,(0,L.jsx)(n.a,{href:`https://getbem.com/naming`,rel:`nofollow`,children:`BEM methodology`}),`.`]}),`
`,(0,L.jsxs)(n.p,{children:[`This allows us to define core styles on a main `,(0,L.jsx)(n.a,{href:`https://getbem.com/naming/#block`,rel:`nofollow`,children:`block`}),` class, and use `,(0,L.jsx)(n.a,{href:`https://getbem.com/naming/#modifier`,rel:`nofollow`,children:`modifiers`}),` to encapsulate variant styles. You can modify all sidebar behavior by overriding the `,(0,L.jsx)(n.code,{children:`.sidebar`}),` selector and setting any properties:`]}),`
`,(0,L.jsx)(n.pre,{children:(0,L.jsx)(n.code,{className:`language-css`,children:`.sidebar {
  --_op-sidebar-rail-width: 10rem;
  --_op-sidebar-compact-width: 20rem;
  --_op-sidebar-drawer-width: 30rem;
}
`})}),`
`,(0,L.jsx)(n.p,{children:`There are also styles for the rail and drawer specific styles. They can be overridden like:`}),`
`,(0,L.jsx)(n.pre,{children:(0,L.jsx)(n.code,{className:`language-css`,children:`.sidebar {
  .sidebar__content {
    align-items: flex-end;
  }
}

.sidebar {
  .sidebar__content {
    > * {
      font-weight: var(--op-font-weight-black);
    }
  }
}
`})}),`
`,(0,L.jsx)(n.p,{children:`If you need to override the color of a particular sidebar style, you can open the respective class and change the variables documented above`}),`
`,(0,L.jsx)(n.pre,{children:(0,L.jsx)(n.code,{className:`language-css`,children:`/* This will only affect the primary sidebar, but not default */
.sidebar--primary {
  --_op-sidebar-background-color: purple;
  --_op-sidebar-text-color: purple;
}
`})}),`
`,(0,L.jsx)(n.h2,{id:`new-sidebar-variations`,children:`New Sidebar Variations`}),`
`,(0,L.jsx)(`div`,{dangerouslySetInnerHTML:{__html:d({title:`Important!`,description:`These patterns represent how to create new variations of the sidebar for your project.`}).outerHTML}}),`
`,(0,L.jsxs)(n.p,{children:[`Your application may need a variation. To add one, just follow this template. Note the double hyphen, indicating that this is a `,(0,L.jsx)(n.a,{href:`https://getbem.com/naming/#modifier`,rel:`nofollow`,children:`modifier`}),`:`]}),`
`,(0,L.jsx)(n.pre,{children:(0,L.jsx)(n.code,{className:`language-css`,children:`.sidebar--{name} {
}
`})})]})}function I(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,L.jsx)(n,{...e,children:(0,L.jsx)(F,{...e})}):F(e)}var L;e((()=>{L=n(),s(),o(),N(),c(),u()}))();export{I as default};