import{j as e,M as r,C as a,a as d}from"./blocks-D2pTyHFk.js";import{useMDXComponents as s}from"./index-Cur9J7FO.js";import{L as l,B as o,F as h,S as c,N as p,a as m,b as u,U as x}from"./Layout.stories-BTwNLLQ1.js";import{c as j}from"./sourceCodeLink-Chh3FteF.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-qQGGZl47.js";import"./Sidebar-DUbgHgd7.js";import"./Button-B21kpIpO.js";import"./Icon-uqCTS4Mm.js";import"./Navbar-C-JTaE4V.js";import"./Avatar-BdQSfjED.js";import"./Spinner-ypR4bq0p.js";import"./SidePanel-Dk0u1Nrs.js";import"./Divider-DXVOsIdn.js";function t(i){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:l}),`
`,e.jsx(n.h1,{id:"layout",children:"Layout"}),`
`,e.jsxs(n.p,{children:["Optics provides two patterns for application layout. The basic (legacy) version is maintained for backwards compatibility, but all new projects should use the ",e.jsx(n.code,{children:"op-page"})," pattern."]}),`
`,e.jsx("div",{dangerouslySetInnerHTML:{__html:j({link:"core/layout.css"}).outerHTML}}),`
`,e.jsx(n.h2,{id:"op-page",children:"OP Page"}),`
`,e.jsx(n.h3,{id:"playground",children:"Playground"}),`
`,e.jsxs(n.p,{children:["Since the ",e.jsx(n.code,{children:"op-page"})," layout utilizes the whole window, the playground is best experienced as a full page example."]}),`
`,`
`,e.jsx("a",{href:"/public/example-layout.html",target:"_blank",rel:"noopener noreferrer",children:"Click here to open the playground"}),`
`,e.jsx(n.h3,{id:"classes",children:"Classes"}),`
`,e.jsxs(n.p,{children:["Within the ",e.jsx(n.code,{children:"op-page"})," layout, the sidebar on either side is completely optional, as is the header and footer within the main content area."]}),`
`,e.jsx(n.p,{children:"The full structure looks like the following:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Example layout for the Optics design system" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@rolemodel/optics/dist/css/optics.min.css" />
    <title>Optics Example Layout</title>
  </head>
  <body class="op-page">
    <div class="op-page__sidebar"></div>
    <div class="op-page__main">
      <header class="op-page__main-header"></header>
      <main class="op-page__main-content"></main>
      <footer class="op-page__main-footer"></footer>
    </div>
    <div class="op-page__sidebar op-page__sidebar--right"></div>
  </body>
</html>
`})}),`
`,e.jsx(n.h4,{id:"op-page-1",children:e.jsx(n.code,{children:".op-page"})}),`
`,e.jsx(n.p,{children:"Is meant to be used on the body of your application to create a full window layout with optional areas."}),`
`,e.jsxs(n.h4,{id:"op-page__sidebar-op-page__sidebar--right",children:[e.jsx(n.code,{children:".op-page__sidebar"}),", ",e.jsx(n.code,{children:".op-page__sidebar--right"})]}),`
`,e.jsxs(n.p,{children:["Is meant to be used within the ",e.jsx(n.code,{children:".op-page"})," on either side of the the main content to create sidebar or panel areas on the or right side of the application. Add the modifier class ",e.jsx(n.code,{children:".op-page__sidebar--right"})," when using on the right side."]}),`
`,e.jsx(n.h4,{id:"op-page__main",children:e.jsx(n.code,{children:".op-page__main"})}),`
`,e.jsxs(n.p,{children:["Is meant to be used within the ",e.jsx(n.code,{children:".op-page"})," to wrap the main content area of your application. This contains the optional header, content, and optional footer areas."]}),`
`,e.jsx(n.h4,{id:"op-page__main-header",children:e.jsx(n.code,{children:".op-page__main-header"})}),`
`,e.jsxs(n.p,{children:["Is meant to be used on a header element within the ",e.jsx(n.code,{children:".op-page__main"})," to create a fixed header for your page. Often, the navbar component is used within here."]}),`
`,e.jsx(n.h4,{id:"op-page__main-content",children:e.jsx(n.code,{children:".op-page__main-content"})}),`
`,e.jsxs(n.p,{children:["Is meant to be used on a main element within the ",e.jsx(n.code,{children:".op-page__main"})," to create the container for your page content."]}),`
`,e.jsx(n.h4,{id:"op-page__main-footer",children:e.jsx(n.code,{children:".op-page__main-footer"})}),`
`,e.jsx(n.h3,{id:"fullscreen-spinner",children:"Fullscreen Spinner"}),`
`,e.jsx(n.p,{children:"If you need a fullscreen spinner, use the following layout playground:"}),`
`,`
`,e.jsx("a",{href:"/public/spinner-layout.html",target:"_blank",rel:"noopener noreferrer",children:"Click here to open the playground"}),`
`,e.jsx(n.h3,{id:"login",children:"Login"}),`
`,e.jsx(n.p,{children:"If you need a login page, use the following layout playground:"}),`
`,`
`,e.jsx("a",{href:"/public/login-layout.html",target:"_blank",rel:"noopener noreferrer",children:"Click here to open the playground"}),`
`,e.jsx(n.h2,{id:"legacy-layout",children:"Legacy Layout"}),`
`,e.jsxs(n.p,{children:["This is the legacy layout that is maintained for backwards compatibility. New projects should not use these classes and instead, should use the ",e.jsx(n.code,{children:"op-page"})," layout above."]}),`
`,e.jsx(n.h3,{id:"playground-1",children:"Playground"}),`
`,e.jsx(a,{of:o}),`
`,e.jsx(d,{of:o}),`
`,e.jsx(n.h3,{id:"classes-1",children:"Classes"}),`
`,e.jsx(n.h4,{id:"app-with-sidebar",children:e.jsx(n.code,{children:".app-with-sidebar"})}),`
`,e.jsx(n.p,{children:"Is meant to be used on the body of your application when using a sidebar. See the examples below."}),`
`,e.jsx(n.h4,{id:"app-body",children:e.jsx(n.code,{children:".app-body"})}),`
`,e.jsxs(n.p,{children:["Is meant to be used on the body of your application when not using a sidebar, or as a ",e.jsx(n.code,{children:"div"})," under the body when using a sidebar. See the examples below."]}),`
`,e.jsx(n.h4,{id:"app__header",children:e.jsx(n.code,{children:".app__header"})}),`
`,e.jsxs(n.p,{children:["Is meant to be used within the ",e.jsx(n.code,{children:".app-body"})," to achieve a fixed header for your application. This can container a navbar component. See the examples below."]}),`
`,e.jsx(n.h4,{id:"app__content",children:e.jsx(n.code,{children:".app__content"})}),`
`,e.jsxs(n.p,{children:["Is meant to be used within the ",e.jsx(n.code,{children:".app-body"})," to wrap your main page content. It would be a sibling element between ",e.jsx(n.code,{children:".app__header"})," and ",e.jsx(n.code,{children:".app-footer"})," if you are using those. See the examples below."]}),`
`,e.jsx(n.h4,{id:"app__content-no-margin",children:e.jsx(n.code,{children:".app__content-no-margin"})}),`
`,e.jsxs(n.p,{children:["Is an alternate to ",e.jsx(n.code,{children:".app__content"})," that does not constrain the width of the content within. This can be used if you need a side panel in your app. You can wrap your content in ",e.jsx(n.code,{children:".container"})," to still achieve the width constraint. See the examples below."]}),`
`,e.jsx(n.h4,{id:"app__footer",children:e.jsx(n.code,{children:".app__footer"})}),`
`,e.jsxs(n.p,{children:["Is meant to be used within the ",e.jsx(n.code,{children:".app-body"})," to achieve a fixed footer for your application. See the examples below."]}),`
`,e.jsx(n.h3,{id:"basic",children:"Basic"}),`
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
`,e.jsx(n.h3,{id:"fullscreen-spinner-1",children:"Fullscreen Spinner"}),`
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
`,e.jsx(n.h3,{id:"with-sidebar",children:"With Sidebar"}),`
`,e.jsxs(n.p,{children:["For instructions on the sidebar itself, see ",e.jsx(n.a,{href:"?path=/docs/components-sidebar--default-drawer",children:"Sidebar Component"})]}),`
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
`,e.jsx(n.h3,{id:"with-navbar",children:"With Navbar"}),`
`,e.jsxs(n.p,{children:["For instructions on the navbar itself, see ",e.jsx(n.a,{href:"?path=/docs/components-navbar--default-navbar",children:"Navbar Component"})]}),`
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
`,e.jsx(n.h3,{id:"sidebar-with-navbar-and-side-panel",children:"Sidebar with Navbar and Side Panel"}),`
`,e.jsxs(n.p,{children:["For instructions on the side panel itself, see ",e.jsx(n.a,{href:"?path=/docs/components-sidepanel--docs",children:"Side Panel Component"})]}),`
`,e.jsx(n.p,{children:"A layout with a side panel looks like the following:"}),`
`,e.jsx(a,{of:m}),`
`,e.jsx(n.h3,{id:"login-1",children:"Login"}),`
`,e.jsx(n.p,{children:"A layout for a login page could look like the following:"}),`
`,e.jsx(a,{of:u}),`
`,e.jsx(n.h3,{id:"utility",children:"Utility"}),`
`,e.jsx(n.p,{children:"A layout explaining how the stack, split, and cluster utilities can be used to make flex layouts more readable."}),`
`,e.jsx(a,{of:x})]})}function M(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}export{M as default};
