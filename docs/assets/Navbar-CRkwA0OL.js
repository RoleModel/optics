import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{i as t}from"./react-CaHZDgIm.js";import{s as n}from"./chunk-LITCR56V-BxXRPQK8.js";import{l as r,n as i,o as a,u as o}from"./blocks-nNA0HiVS.js";import{t as s}from"./mdx-react-shim-DIeO1dVO.js";import{n as c,t as l}from"./sourceCodeLink-C1o55bv0.js";import{n as u,t as d}from"./Alert-xuHYkKjH.js";import{CenteredNavbar as f,DefaultNavbar as p,JustifyEndNavbar as m,NoBrandNavbar as h,PrimaryNavbar as g,n as _,t as v}from"./Navbar.stories-CP2UvpCp.js";function y(e){let n={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,...t(),...e.components};return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(r,{of:v}),`
`,(0,x.jsx)(n.h1,{id:`navbar`,children:`Navbar`}),`
`,(0,x.jsx)(`div`,{dangerouslySetInnerHTML:{__html:l({link:`components/navbar.css`}).outerHTML}}),`
`,(0,x.jsx)(n.p,{children:`Navbar classes provide simple styling for a navigation header.`}),`
`,(0,x.jsxs)(n.p,{children:[`For instructions on how to integrate a navbar into your applications layout, see `,(0,x.jsx)(n.a,{href:`?path=/docs/recipes-layout--navbar`,children:`Layout With Navbar`})]}),`
`,(0,x.jsxs)(n.p,{children:[(0,x.jsx)(n.code,{children:`.navbar`}),` is the main component that everything is contained within.`]}),`
`,(0,x.jsxs)(n.p,{children:[`Any `,(0,x.jsx)(n.a,{href:`?path=/docs/components-button--docs#default`,children:`Button`}),` style can be used for the links.`]}),`
`,(0,x.jsx)(n.h2,{id:`playground`,children:`Playground`}),`
`,(0,x.jsx)(i,{of:p}),`
`,(0,x.jsx)(a,{of:p}),`
`,(0,x.jsx)(n.h3,{id:`selective-imports`,children:`Selective Imports`}),`
`,(0,x.jsxs)(n.p,{children:[`Navbar can be used as a standalone component, however, it does have a few dependencies. To see a full dependency list, see `,(0,x.jsx)(n.a,{href:`?path=/docs/overview-selective-imports--docs#dependencies`,children:`Dependency Graph`})]}),`
`,(0,x.jsx)(n.pre,{children:(0,x.jsx)(n.code,{className:`language-css`,children:`/* Depends on */
@import '@rolemodel/optics/dist/css/core/fonts';
@import '@rolemodel/optics/dist/css/core/tokens';
@import '@rolemodel/optics/dist/css/core/base';
@import '@rolemodel/optics/dist/css/components/icon';
@import '@rolemodel/optics/dist/css/components/button';

/* Component */
@import '@rolemodel/optics/dist/css/components/navbar';
`})}),`
`,(0,x.jsx)(n.h2,{id:`variations`,children:`Variations`}),`
`,(0,x.jsx)(n.h3,{id:`default`,children:`Default`}),`
`,(0,x.jsxs)(n.p,{children:[(0,x.jsx)(n.code,{children:`.navbar`}),` Provides a neutral colored navbar. This uses the neutral color defined in your theme.`]}),`
`,(0,x.jsx)(i,{of:p}),`
`,(0,x.jsx)(n.h3,{id:`primary`,children:`Primary`}),`
`,(0,x.jsxs)(n.p,{children:[(0,x.jsx)(n.code,{children:`.navbar.navbar--primary`}),` Provides a primary colored navbar. This uses the primary color defined in your theme.`]}),`
`,(0,x.jsx)(i,{of:g}),`
`,(0,x.jsx)(n.h3,{id:`brand`,children:`Brand`}),`
`,(0,x.jsxs)(n.p,{children:[(0,x.jsx)(n.code,{children:`.navbar__brand`}),` can be used with an image tag inside. This can be used to display your applications branding or logo.`]}),`
`,(0,x.jsx)(n.p,{children:`The brand is not required and the navbar content will adjust itself accordingly.`}),`
`,(0,x.jsx)(i,{of:h}),`
`,(0,x.jsx)(n.h3,{id:`content`,children:`Content`}),`
`,(0,x.jsxs)(n.p,{children:[(0,x.jsx)(n.code,{children:`.navbar__content`}),` defines the container that the buttons should be placed in. If you are putting navigation links within a content section, you should use the `,(0,x.jsx)(n.code,{children:`nav`}),` element for that section. It can be justified by using modifier classes.`]}),`
`,(0,x.jsxs)(n.p,{children:[(0,x.jsx)(n.code,{children:`.navbar__content--justify-start`}),`, `,(0,x.jsx)(n.code,{children:`.navbar__content--justify-center`}),`, `,(0,x.jsx)(n.code,{children:`.navbar__content--justify-end`}),` with start being the default.`]}),`
`,(0,x.jsx)(i,{of:f}),`
`,(0,x.jsx)(i,{of:m}),`
`,(0,x.jsx)(n.h2,{id:`navbar-api`,children:`Navbar API`}),`
`,(0,x.jsx)(n.p,{children:`Color and hover styles are built on CSS variables scoped to the navbar.`}),`
`,(0,x.jsx)(n.p,{children:`Here are the variables that can be customized.`}),`
`,`
`,(0,x.jsx)(n.pre,{children:(0,x.jsx)(n.code,{className:`language-css`,children:`/* Public API */
/* Normal */
--_op-navbar-background-color
--_op-navbar-text-color
--_op-navbar-border-color

/* Height */
--_op-navbar-brand-height

/* Spacing */
--_op-navbar-horizontal-spacing
--_op-navbar-content-spacing
--_op-navbar-content-item-spacing
`})}),`
`,`
`,(0,x.jsx)(n.h2,{id:`customizing-navbar-styles`,children:`Customizing Navbar styles`}),`
`,(0,x.jsx)(`div`,{dangerouslySetInnerHTML:{__html:d({title:`Important!`,description:`These patterns represent how to customize the style of the navbar for your project.`}).outerHTML}}),`
`,(0,x.jsxs)(n.p,{children:[`The navbar classes are structured using the `,(0,x.jsx)(n.a,{href:`https://getbem.com/naming`,rel:`nofollow`,children:`BEM methodology`}),`.`]}),`
`,(0,x.jsxs)(n.p,{children:[`This allows us to define core styles on a main `,(0,x.jsx)(n.a,{href:`https://getbem.com/naming/#block`,rel:`nofollow`,children:`block`}),` class, and use `,(0,x.jsx)(n.a,{href:`https://getbem.com/naming/#modifier`,rel:`nofollow`,children:`modifiers`}),` to encapsulate variant styles. You can modify all navbar behavior by overriding the `,(0,x.jsx)(n.code,{children:`.navbar`}),` selector and setting any properties:`]}),`
`,(0,x.jsx)(n.pre,{children:(0,x.jsx)(n.code,{className:`language-css`,children:`.navbar {
  --_op-navbar-background-color: pink;
  --_op-navbar-text-color: blue;
}
`})}),`
`,(0,x.jsx)(n.p,{children:`If you need to override the behavior of a particular navbar style, you can open the respective class and set or change properties`}),`
`,(0,x.jsx)(n.pre,{children:(0,x.jsx)(n.code,{className:`language-css`,children:`.navbar--modifier {
  --_op-navbar-brand-height: 5.4rem;
  --_op-navbar-horizontal-spacing: var(--op-space-small);
  --_op-navbar-content-item-spacing: var(--op-space-x-small);
}
`})}),`
`,(0,x.jsx)(n.h2,{id:`new-navbar-variations`,children:`New Navbar Variations`}),`
`,(0,x.jsx)(`div`,{dangerouslySetInnerHTML:{__html:d({title:`Important!`,description:`These patterns represent how to create new variations of the Navbar for your project.`}).outerHTML}}),`
`,(0,x.jsx)(n.p,{children:`Your application may need a custom navbar. To add one, just follow this template:`}),`
`,(0,x.jsx)(n.pre,{children:(0,x.jsx)(n.code,{className:`language-css`,children:`.navbar--{name} {
}
`})})]})}function b(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,x.jsx)(n,{...e,children:(0,x.jsx)(y,{...e})}):y(e)}var x;e((()=>{x=n(),s(),o(),_(),u(),c()}))();export{b as default};