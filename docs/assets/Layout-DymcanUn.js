import{j as e}from"./jsx-runtime-wV-HqYdn.js";import{u as s}from"./index-DCjXWHk2.js";import{M as d,C as a,d as r}from"./index-BtfEXyyO.js";import{L as l,B as o,F as h,S as c,N as p,a as m,b as x}from"./Layout.stories-C3R2CVnu.js";import{c as u}from"./sourceCodeLink-Chh3FteF.js";import"./iframe-aIM7v9wE.js";import"../sb-preview/runtime.js";import"./index-B5rfWaSj.js";import"./index-DrFu-skq.js";import"./Sidebar-uxEogKJ-.js";import"./Button-CoyIamir.js";import"./Icon-D9QrNi_D.js";import"./Navbar-Dx18zRnn.js";import"./Avatar-CE0y8IiR.js";import"./Spinner-ypR4bq0p.js";import"./SidePanel-BzSjo7kf.js";import"./Divider-DvyA9Bw7.js";function t(i){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:l}),`
`,e.jsx(n.h1,{id:"layout",children:"Layout"}),`
`,e.jsx("div",{dangerouslySetInnerHTML:{__html:u({link:"core/layout.scss"}).outerHTML}}),`
`,e.jsx(n.h2,{id:"playground",children:"Playground"}),`
`,e.jsx(a,{of:o}),`
`,e.jsx(r,{of:o}),`
`,e.jsx(n.h2,{id:"classes",children:"Classes"}),`
`,e.jsx(n.h3,{id:"app-with-sidebar",children:e.jsx(n.code,{children:".app-with-sidebar"})}),`
`,e.jsx(n.p,{children:"Is meant to be used on the body of your application when using a sidebar. See the examples below."}),`
`,e.jsx(n.h3,{id:"app-body",children:e.jsx(n.code,{children:".app-body"})}),`
`,e.jsxs(n.p,{children:["Is meant to be used on the body of your application when not using a sidebar, or as a ",e.jsx(n.code,{children:"div"})," under the body when using a sidebar. See the examples below."]}),`
`,e.jsx(n.h3,{id:"app__header",children:e.jsx(n.code,{children:".app__header"})}),`
`,e.jsxs(n.p,{children:["Is meant to be used within the ",e.jsx(n.code,{children:".app-body"})," to achieve a fixed header for your application. This can container a navbar component. See the examples below."]}),`
`,e.jsx(n.h3,{id:"app__content",children:e.jsx(n.code,{children:".app__content"})}),`
`,e.jsxs(n.p,{children:["Is meant to be used within the ",e.jsx(n.code,{children:".app-body"})," to wrap your main page content. It would be a sibling element between ",e.jsx(n.code,{children:".app__header"})," and ",e.jsx(n.code,{children:".app-footer"})," if you are using those. See the examples below."]}),`
`,e.jsx(n.h3,{id:"app__content-no-margin",children:e.jsx(n.code,{children:".app__content-no-margin"})}),`
`,e.jsxs(n.p,{children:["Is an alternate to ",e.jsx(n.code,{children:".app__content"})," that does not constrain the width of the content within. This can be used if you need a side panel in your app. You can wrap your content in ",e.jsx(n.code,{children:".container"})," to still achieve the width constraint. See the examples below."]}),`
`,e.jsx(n.h3,{id:"app__footer",children:e.jsx(n.code,{children:".app__footer"})}),`
`,e.jsxs(n.p,{children:["Is meant to be used within the ",e.jsx(n.code,{children:".app-body"})," to achieve a fixed footer for your application. See the examples below."]}),`
`,e.jsx(n.h2,{id:"basic",children:"Basic"}),`
`,e.jsx(n.p,{children:"The basic layout that this design system expects looks like the following:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<!doctype html>
<html>
  <head>
    <title>Sample Layout</title>
    <meta content="width=device-width, initial-scale=1" name="viewport" />
  </head>
  <body class="app-body">
    <!-- Alert Flash message here -->
    <!-- Confirm here -->
    <!-- Modal here -->
    <!-- Panel here -->
    <!--
      If your app has a top header, use
      <div class='app__header'></div>
    -->
    <div class="app__content"></div>
    <!--
      If your app has a bottom footer, use
      <div class='app__footer'></div>
    -->
  </body>
</html>
`})}),`
`,e.jsx(a,{of:o}),`
`,e.jsxs(n.p,{children:["The header and footer are sticky and can be used with ",e.jsx(n.code,{children:"app__header"})," and ",e.jsx(n.code,{children:"app__footer"}),"."]}),`
`,e.jsx(n.h2,{id:"fullscreen-spinner",children:"Fullscreen Spinner"}),`
`,e.jsx(n.p,{children:"If you need a fullscreen spinner, use a layout like this:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<!doctype html>
<html>
  <head>
    <title>Sample Layout</title>
    <meta content="width=device-width, initial-scale=1" name="viewport" />
  </head>
  <body class="app-body items-center justify-center">
    <div class="spinner spinner--large">
      <span class="sr-only">Loading</span>
    </div>
  </body>
</html>
`})}),`
`,e.jsx(a,{of:h}),`
`,e.jsx(n.h2,{id:"with-sidebar",children:"With Sidebar"}),`
`,e.jsxs(n.p,{children:["For instructions on the sidebar itself, see ",e.jsx(n.a,{href:"?path=/docs/navigation-components-sidebar--default-drawer",children:"Sidebar Component"})]}),`
`,e.jsx(n.p,{children:"A layout with a sidebar looks like the following:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<!doctype html>
<html>
  <head>
    <title>Sample Layout</title>
    <meta content="width=device-width, initial-scale=1" name="viewport" />
  </head>
  <body class="app-with-sidebar">
    <!-- Alert Flash message here -->
    <!-- Confirm here -->
    <!-- Modal here -->
    <!-- Panel here -->
    <div class="sidebar sidebar--{rail or drawer}">...</div>
    <div class="app-body">
      <!--
        If your app has a top header, use
        <div class='app__header'></div>
      -->
      <div class="app__content"></div>
      <!--
        If your app has a bottom footer, use
        <div class='app__footer'></div>
      -->
    </div>
    <!-- You could put the sidebar or some other drawer here as well -->
  </body>
</html>
`})}),`
`,e.jsx(a,{of:c}),`
`,e.jsx(n.h2,{id:"with-navbar",children:"With Navbar"}),`
`,e.jsxs(n.p,{children:["For instructions on the navbar itself, see ",e.jsx(n.a,{href:"?path=/docs/navigation-components-navbar--default-navbar",children:"Navbar Component"})]}),`
`,e.jsx(n.p,{children:"A layout with a navbar looks like the following:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<!doctype html>
<html>
  <head>
    <title>Sample Layout</title>
    <meta content="width=device-width, initial-scale=1" name="viewport" />
  </head>
  <body class="app-body">
    <!-- Alert Flash message here -->
    <!-- Confirm here -->
    <!-- Modal here -->
    <!-- Panel here -->
    <div class="app__header">
      <div class="navbar">...</div>
    </div>
    <div class="app__content"></div>
    <div class="app__footer"></div>
  </body>
</html>
`})}),`
`,e.jsx(a,{of:p}),`
`,e.jsx(n.h2,{id:"sidebar-with-navbar-and-side-panel",children:"Sidebar with Navbar and Side Panel"}),`
`,e.jsxs(n.p,{children:["For instructions on the side panel itself, see ",e.jsx(n.a,{href:"?path=/docs/content-components-sidepanel--docs",children:"Side Panel Component"})]}),`
`,e.jsx(n.p,{children:"A layout with a side panel looks like the following:"}),`
`,e.jsx(a,{of:m}),`
`,e.jsx(n.h2,{id:"login",children:"Login"}),`
`,e.jsx(n.p,{children:"A layout for a login page could look like the following:"}),`
`,e.jsx(a,{of:x})]})}function P(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}export{P as default};
