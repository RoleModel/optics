import{i as e}from"./preload-helper-xPQekRTU.js";import{T as t,l as n,n as r,o as i,u as a}from"./blocks-uVOOWdqL.js";import{s as o}from"./chunk-LITCR56V-BmCoDI8n.js";import{t as s}from"./mdx-react-shim-eO_HyXU9.js";import{n as c,t as l}from"./sourceCodeLink-D2TI9VYO.js";import{Basic as u,CardGrid as d,FullScreenSpinner as f,Login as p,Navbar as m,Sidebar as h,SidebarWithNavbarAndSidePanel as g,Utility as _,n as v,t as y}from"./Layout.stories-Sn1AVNFZ.js";function b(e){let a={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,p:`p`,pre:`pre`,...t(),...e.components};return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(n,{of:y}),`
`,(0,S.jsx)(a.h1,{id:`layout`,children:`Layout`}),`
`,(0,S.jsxs)(a.p,{children:[`Optics provides two patterns for application layout. The basic (legacy) version is maintained for backwards compatibility, but all new projects should use the `,(0,S.jsx)(a.code,{children:`op-page`}),` pattern.`]}),`
`,(0,S.jsx)(`div`,{dangerouslySetInnerHTML:{__html:l({link:`core/layout.css`}).outerHTML}}),`
`,(0,S.jsx)(a.h2,{id:`op-page`,children:`OP Page`}),`
`,(0,S.jsx)(a.h3,{id:`playground`,children:`Playground`}),`
`,(0,S.jsxs)(a.p,{children:[`Since the `,(0,S.jsx)(a.code,{children:`op-page`}),` layout utilizes the whole window, the playground is best experienced as a full page example.`]}),`
`,`
`,(0,S.jsx)(`a`,{href:`/public/example-layout.html`,target:`_blank`,rel:`noopener noreferrer`,children:`Click here to open the playground`}),`
`,(0,S.jsx)(a.h3,{id:`classes`,children:`Classes`}),`
`,(0,S.jsxs)(a.p,{children:[`Within the `,(0,S.jsx)(a.code,{children:`op-page`}),` layout, the sidebar on either side is completely optional, as is the header and footer within the main content area.`]}),`
`,(0,S.jsx)(a.p,{children:`The full structure looks like the following:`}),`
`,(0,S.jsx)(a.pre,{children:(0,S.jsx)(a.code,{className:`language-html`,children:`<!doctype html>
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
`,(0,S.jsx)(a.h4,{id:`op-page-1`,children:(0,S.jsx)(a.code,{children:`.op-page`})}),`
`,(0,S.jsx)(a.p,{children:`Is meant to be used on the body of your application to create a full window layout with optional areas.`}),`
`,(0,S.jsxs)(a.h4,{id:`op-page__sidebar-op-page__sidebar--right`,children:[(0,S.jsx)(a.code,{children:`.op-page__sidebar`}),`, `,(0,S.jsx)(a.code,{children:`.op-page__sidebar--right`})]}),`
`,(0,S.jsxs)(a.p,{children:[`Is meant to be used within the `,(0,S.jsx)(a.code,{children:`.op-page`}),` on either side of the the main content to create sidebar or panel areas on the or right side of the application. Add the modifier class `,(0,S.jsx)(a.code,{children:`.op-page__sidebar--right`}),` when using on the right side.`]}),`
`,(0,S.jsx)(a.h4,{id:`op-page__main`,children:(0,S.jsx)(a.code,{children:`.op-page__main`})}),`
`,(0,S.jsxs)(a.p,{children:[`Is meant to be used within the `,(0,S.jsx)(a.code,{children:`.op-page`}),` to wrap the main content area of your application. This contains the optional header, content, and optional footer areas.`]}),`
`,(0,S.jsx)(a.h4,{id:`op-page__main-header`,children:(0,S.jsx)(a.code,{children:`.op-page__main-header`})}),`
`,(0,S.jsxs)(a.p,{children:[`Is meant to be used on a header element within the `,(0,S.jsx)(a.code,{children:`.op-page__main`}),` to create a fixed header for your page. Often, the navbar component is used within here.`]}),`
`,(0,S.jsx)(a.h4,{id:`op-page__main-content`,children:(0,S.jsx)(a.code,{children:`.op-page__main-content`})}),`
`,(0,S.jsxs)(a.p,{children:[`Is meant to be used on a main element within the `,(0,S.jsx)(a.code,{children:`.op-page__main`}),` to create the container for your page content.`]}),`
`,(0,S.jsx)(a.h4,{id:`op-page__main-footer`,children:(0,S.jsx)(a.code,{children:`.op-page__main-footer`})}),`
`,(0,S.jsx)(a.h3,{id:`fullscreen-spinner`,children:`Fullscreen Spinner`}),`
`,(0,S.jsx)(a.p,{children:`If you need a fullscreen spinner, use the following layout playground:`}),`
`,`
`,(0,S.jsx)(`a`,{href:`/public/spinner-layout.html`,target:`_blank`,rel:`noopener noreferrer`,children:`Click here to open the playground`}),`
`,(0,S.jsx)(a.h3,{id:`login`,children:`Login`}),`
`,(0,S.jsx)(a.p,{children:`If you need a login page, use the following layout playground:`}),`
`,`
`,(0,S.jsx)(`a`,{href:`/public/login-layout.html`,target:`_blank`,rel:`noopener noreferrer`,children:`Click here to open the playground`}),`
`,(0,S.jsx)(a.h2,{id:`legacy-layout`,children:`Legacy Layout`}),`
`,(0,S.jsxs)(a.p,{children:[`This is the legacy layout that is maintained for backwards compatibility. New projects should not use these classes and instead, should use the `,(0,S.jsx)(a.code,{children:`op-page`}),` layout above.`]}),`
`,(0,S.jsx)(a.h3,{id:`playground-1`,children:`Playground`}),`
`,(0,S.jsx)(r,{of:u}),`
`,(0,S.jsx)(i,{of:u}),`
`,(0,S.jsx)(a.h3,{id:`classes-1`,children:`Classes`}),`
`,(0,S.jsx)(a.h4,{id:`app-with-sidebar`,children:(0,S.jsx)(a.code,{children:`.app-with-sidebar`})}),`
`,(0,S.jsx)(a.p,{children:`Is meant to be used on the body of your application when using a sidebar. See the examples below.`}),`
`,(0,S.jsx)(a.h4,{id:`app-body`,children:(0,S.jsx)(a.code,{children:`.app-body`})}),`
`,(0,S.jsxs)(a.p,{children:[`Is meant to be used on the body of your application when not using a sidebar, or as a `,(0,S.jsx)(a.code,{children:`div`}),` under the body when using a sidebar. See the examples below.`]}),`
`,(0,S.jsx)(a.h4,{id:`app__header`,children:(0,S.jsx)(a.code,{children:`.app__header`})}),`
`,(0,S.jsxs)(a.p,{children:[`Is meant to be used within the `,(0,S.jsx)(a.code,{children:`.app-body`}),` to achieve a fixed header for your application. This can container a navbar component. See the examples below.`]}),`
`,(0,S.jsx)(a.h4,{id:`app__content`,children:(0,S.jsx)(a.code,{children:`.app__content`})}),`
`,(0,S.jsxs)(a.p,{children:[`Is meant to be used within the `,(0,S.jsx)(a.code,{children:`.app-body`}),` to wrap your main page content. It would be a sibling element between `,(0,S.jsx)(a.code,{children:`.app__header`}),` and `,(0,S.jsx)(a.code,{children:`.app-footer`}),` if you are using those. See the examples below.`]}),`
`,(0,S.jsx)(a.h4,{id:`app__content-no-margin`,children:(0,S.jsx)(a.code,{children:`.app__content-no-margin`})}),`
`,(0,S.jsxs)(a.p,{children:[`Is an alternate to `,(0,S.jsx)(a.code,{children:`.app__content`}),` that does not constrain the width of the content within. This can be used if you need a side panel in your app. You can wrap your content in `,(0,S.jsx)(a.code,{children:`.container`}),` to still achieve the width constraint. See the examples below.`]}),`
`,(0,S.jsx)(a.h4,{id:`app__footer`,children:(0,S.jsx)(a.code,{children:`.app__footer`})}),`
`,(0,S.jsxs)(a.p,{children:[`Is meant to be used within the `,(0,S.jsx)(a.code,{children:`.app-body`}),` to achieve a fixed footer for your application. See the examples below.`]}),`
`,(0,S.jsx)(a.h3,{id:`basic`,children:`Basic`}),`
`,(0,S.jsx)(a.p,{children:`The basic layout that this design system expects looks like the following:`}),`
`,(0,S.jsx)(a.pre,{children:(0,S.jsx)(a.code,{className:`language-html`,children:`<!doctype html>
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
`,(0,S.jsx)(r,{of:u}),`
`,(0,S.jsxs)(a.p,{children:[`The header and footer are sticky and can be used with `,(0,S.jsx)(a.code,{children:`app__header`}),` and `,(0,S.jsx)(a.code,{children:`app__footer`}),`.`]}),`
`,(0,S.jsx)(a.h3,{id:`fullscreen-spinner-1`,children:`Fullscreen Spinner`}),`
`,(0,S.jsx)(a.p,{children:`If you need a fullscreen spinner, use a layout like this:`}),`
`,(0,S.jsx)(a.pre,{children:(0,S.jsx)(a.code,{className:`language-html`,children:`<!doctype html>
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
`,(0,S.jsx)(r,{of:f}),`
`,(0,S.jsx)(a.h3,{id:`with-sidebar`,children:`With Sidebar`}),`
`,(0,S.jsxs)(a.p,{children:[`For instructions on the sidebar itself, see `,(0,S.jsx)(a.a,{href:`?path=/docs/components-sidebar--default-drawer`,children:`Sidebar Component`})]}),`
`,(0,S.jsx)(a.p,{children:`A layout with a sidebar looks like the following:`}),`
`,(0,S.jsx)(a.pre,{children:(0,S.jsx)(a.code,{className:`language-html`,children:`<!doctype html>
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
`,(0,S.jsx)(r,{of:h}),`
`,(0,S.jsx)(a.h3,{id:`with-navbar`,children:`With Navbar`}),`
`,(0,S.jsxs)(a.p,{children:[`For instructions on the navbar itself, see `,(0,S.jsx)(a.a,{href:`?path=/docs/components-navbar--default-navbar`,children:`Navbar Component`})]}),`
`,(0,S.jsx)(a.p,{children:`A layout with a navbar looks like the following:`}),`
`,(0,S.jsx)(a.pre,{children:(0,S.jsx)(a.code,{className:`language-html`,children:`<!doctype html>
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
`,(0,S.jsx)(r,{of:m}),`
`,(0,S.jsx)(a.h3,{id:`sidebar-with-navbar-and-side-panel`,children:`Sidebar with Navbar and Side Panel`}),`
`,(0,S.jsxs)(a.p,{children:[`For instructions on the side panel itself, see `,(0,S.jsx)(a.a,{href:`?path=/docs/components-sidepanel--docs`,children:`Side Panel Component`})]}),`
`,(0,S.jsx)(a.p,{children:`A layout with a side panel looks like the following:`}),`
`,(0,S.jsx)(r,{of:g}),`
`,(0,S.jsx)(a.h3,{id:`login-1`,children:`Login`}),`
`,(0,S.jsx)(a.p,{children:`A layout for a login page could look like the following:`}),`
`,(0,S.jsx)(r,{of:p}),`
`,(0,S.jsx)(a.h3,{id:`utility`,children:`Utility`}),`
`,(0,S.jsx)(a.p,{children:`A layout explaining how the stack, split, cluster, and flank utilities can be used to make flex layouts more readable.`}),`
`,(0,S.jsx)(r,{of:_}),`
`,(0,S.jsx)(a.h3,{id:`card-grid`,children:`Card Grid`}),`
`,(0,S.jsxs)(a.p,{children:[`A responsive card grid built with the `,(0,S.jsx)(a.code,{children:`op-grid`}),` and `,(0,S.jsx)(a.code,{children:`op-frame`}),` utilities. The `,(0,S.jsx)(a.code,{children:`op-frame`}),` utility keeps each card's
media at a consistent aspect ratio regardless of the source image dimensions, and it isn't limited to media — the
"Coming soon" card frames a text placeholder to hold the same shape.`]}),`
`,(0,S.jsx)(r,{of:d})]})}function x(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,S.jsx)(n,{...e,children:(0,S.jsx)(b,{...e})}):b(e)}var S;e((()=>{S=o(),s(),a(),v(),c()}))();export{x as default};