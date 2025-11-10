import{j as e,M as t,C as s,a as l}from"./blocks-ZRPSuR6b.js";import{useMDXComponents as o}from"./index-d9ggI4Sk.js";import{S as c,D as r,a as h,b as p,P as b,c as m,d as x,e as j,f as u,g as f,N as y,h as g,i as w,C as v,j as S,k as _,E as C,l as T,m as L,L as D,n as P,o as N}from"./Sidebar.stories-DxqFhM30.js";import{c as M}from"./sourceCodeLink-Chh3FteF.js";import{c as a}from"./Alert-CAEs4394.js";import"./preload-helper-D9Z9MdNV.js";import"./iframe-nopHEUW4.js";import"./Sidebar-C3e2IrBN.js";import"./Button-B21kpIpO.js";import"./Icon-uqCTS4Mm.js";function d(i){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...o(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:c}),`
`,e.jsx(n.h1,{id:"sidebar",children:"Sidebar"}),`
`,e.jsx("div",{dangerouslySetInnerHTML:{__html:M({link:"components/sidebar.css"}).outerHTML}}),`
`,e.jsx(n.p,{children:"Sidebar classes provide simple styling for a navigation sidebar drawer, compact, or rail."}),`
`,e.jsxs(n.p,{children:["For instructions on how to integrate a sidebar into your applications layout, see ",e.jsx(n.a,{href:"?path=/docs/recipes-layout--sidebar",children:"Layout With Sidebar"})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:".sidebar"})," is the main component that everything is contained within."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:".sidebar--drawer"}),", ",e.jsx(n.code,{children:".sidebar--compact"}),", and ",e.jsx(n.code,{children:".sidebar--rail"})," are used to denote which style of sidebar you would like to use."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<div class="sidebar sidebar--drawer">...</div>
`})}),`
`,e.jsxs(n.p,{children:["Any ",e.jsx(n.a,{href:"?path=/docs/components-button--docs#default",children:"Button"})," style can be used for the links."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Drawer will use the normal button style, but left aligned"}),`
`,e.jsxs(n.li,{children:["Compact will use the ",e.jsx(n.code,{children:".icon-with-label"})," style"]}),`
`,e.jsxs(n.li,{children:["Rail will use the ",e.jsx(n.code,{children:".btn--icon"})," style and hide the label"]}),`
`]}),`
`,e.jsx(n.h2,{id:"responsive-sidebar",children:"Responsive Sidebar"}),`
`,e.jsx(n.p,{children:"The sidebar can be made responsive with a little snippet of Javascript. This allows for the sidebar to change from the larger state (compact or drawer) to the rail when the screen is smaller. e.g."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`const sidebarStyleOptions = {
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
`,e.jsx(n.h2,{id:"playground",children:"Playground"}),`
`,e.jsx(s,{of:r}),`
`,e.jsx(l,{of:r}),`
`,e.jsx(n.h3,{id:"selective-imports",children:"Selective Imports"}),`
`,e.jsxs(n.p,{children:["Sidebar can be used as a standalone component, however, it does have a few dependencies. To see a full dependency list, see ",e.jsx(n.a,{href:"?path=/docs/overview-selective-imports--docs#dependencies",children:"Dependency Graph"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`/* Depends on */
@import '@rolemodel/optics/dist/css/core/fonts';
@import '@rolemodel/optics/dist/css/core/tokens';
@import '@rolemodel/optics/dist/css/core/base';
@import '@rolemodel/optics/dist/css/components/icon';
@import '@rolemodel/optics/dist/css/components/button';

/* Component */
@import '@rolemodel/optics/dist/css/components/sidebar';
`})}),`
`,e.jsx(n.h2,{id:"variations",children:"Variations"}),`
`,e.jsx(n.h3,{id:"default",children:"Default"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:".sidebar"})," Provides a neutral colored sidebar. This uses the neutral color defined in your theme."]}),`
`,e.jsxs("div",{class:"flex gap-sm",children:[e.jsx(s,{of:r}),e.jsx(s,{of:h}),e.jsx(s,{of:p})]}),`
`,e.jsx(n.h3,{id:"primary",children:"Primary"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:".sidebar--primary"})," Provides a primary colored sidebar. This uses the primary color defined in your theme."]}),`
`,e.jsxs("div",{class:"flex gap-sm",children:[e.jsx(s,{of:b}),e.jsx(s,{of:m}),e.jsx(s,{of:x})]}),`
`,e.jsx(n.h3,{id:"padded",children:"Padded"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:".sidebar--padded"})," Adds a top and bottom padding to the sidebar."]}),`
`,e.jsxs("div",{class:"flex gap-sm",children:[e.jsx(s,{of:j}),e.jsx(s,{of:u}),e.jsx(s,{of:f})]}),`
`,e.jsx(n.h3,{id:"brand",children:"Brand"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:".sidebar__brand"})," can be used with an image tag inside. This can be used to display your applications branding or logo."]}),`
`,e.jsx(n.p,{children:"The brand is not required and the sidebar content will adjust itself accordingly."}),`
`,e.jsxs("div",{class:"flex gap-sm",children:[e.jsx(s,{of:y}),e.jsx(s,{of:g}),e.jsx(s,{of:w})]}),`
`,e.jsx(n.h3,{id:"content",children:"Content"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:".sidebar__content"})," defines the container that the buttons should be placed in. It can be positioned by using modifier classes."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:".sidebar__content--start"}),", ",e.jsx(n.code,{children:".sidebar__content--center"}),", ",e.jsx(n.code,{children:".sidebar__content--end"})," with start being the default."]}),`
`,e.jsxs("div",{class:"flex gap-sm",children:[e.jsx(s,{of:v}),e.jsx(s,{of:S}),e.jsx(s,{of:_})]}),`
`,e.jsxs("div",{class:"flex gap-sm",children:[e.jsx(s,{of:C}),e.jsx(s,{of:T}),e.jsx(s,{of:L})]}),`
`,e.jsxs("div",{class:"flex gap-sm",children:[e.jsx(s,{of:D}),e.jsx(s,{of:P}),e.jsx(s,{of:N})]}),`
`,e.jsx(n.h2,{id:"sidebar-api",children:"Sidebar API"}),`
`,e.jsx(n.p,{children:"Color and hover styles are built on CSS variables scoped to the sidebar."}),`
`,e.jsx(n.p,{children:"Here are the variables used:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`/* Public API */
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
`,e.jsx(n.h2,{id:"customizing-sidebar-styles",children:"Customizing Sidebar styles"}),`
`,e.jsx("div",{dangerouslySetInnerHTML:{__html:a({title:"Important!",description:"These patterns represent how to customize the style of the sidebar for your project."}).outerHTML}}),`
`,e.jsxs(n.p,{children:["The sidebar classes are structured using the ",e.jsx(n.a,{href:"https://getbem.com/naming",rel:"nofollow",children:"BEM methodology"}),"."]}),`
`,e.jsxs(n.p,{children:["This allows us to define core styles on a main ",e.jsx(n.a,{href:"https://getbem.com/naming/#block",rel:"nofollow",children:"block"})," class, and use ",e.jsx(n.a,{href:"https://getbem.com/naming/#modifier",rel:"nofollow",children:"modifiers"})," to encapsulate variant styles. You can modify all sidebar behavior by overriding the ",e.jsx(n.code,{children:".sidebar"})," selector and setting any properties:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`.sidebar {
  --_op-sidebar-rail-width: 10rem;
  --_op-sidebar-compact-width: 20rem;
  --_op-sidebar-drawer-width: 30rem;
}
`})}),`
`,e.jsx(n.p,{children:"There are also styles for the rail and drawer specific styles. They can be overridden like:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`.sidebar {
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
`,e.jsx(n.p,{children:"If you need to override the color of a particular sidebar style, you can open the respective class and change the variables documented above"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`/* This will only affect the primary sidebar, but not default */
.sidebar--primary {
  --_op-sidebar-background-color: purple;
  --_op-sidebar-text-color: purple;
}
`})}),`
`,e.jsx(n.h2,{id:"new-sidebar-variations",children:"New Sidebar Variations"}),`
`,e.jsx("div",{dangerouslySetInnerHTML:{__html:a({title:"Important!",description:"These patterns represent how to create new variations of the sidebar for your project."}).outerHTML}}),`
`,e.jsxs(n.p,{children:["Your application may need a variation. To add one, just follow this template. Note the double hyphen, indicating that this is a ",e.jsx(n.a,{href:"https://getbem.com/naming/#modifier",rel:"nofollow",children:"modifier"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`.sidebar--{name} {
}
`})})]})}function X(i={}){const{wrapper:n}={...o(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(d,{...i})}):d(i)}export{X as default};
