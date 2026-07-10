import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{i as t}from"./react-CaHZDgIm.js";import{s as n}from"./chunk-LITCR56V-BxXRPQK8.js";import{l as r,n as i,o as a,u as o}from"./blocks-nNA0HiVS.js";import{t as s}from"./mdx-react-shim-DIeO1dVO.js";import{n as c,t as l}from"./sourceCodeLink-C1o55bv0.js";import{n as u,t as d}from"./Alert-xuHYkKjH.js";import{Default as f,Large as p,SeparatorIcon as m,n as h,t as g}from"./Breadcrumbs.stories-Bwne5urF.js";function _(e){let n={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,...t(),...e.components};return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(r,{of:g}),`
`,(0,y.jsx)(n.h1,{id:`breadcrumbs`,children:`Breadcrumbs`}),`
`,(0,y.jsx)(`div`,{dangerouslySetInnerHTML:{__html:l({link:`components/breadcrumbs.css`}).outerHTML}}),`
`,(0,y.jsx)(n.p,{children:`The breadcrumbs component is used to show the user's current location in a hierarchy of pages.`}),`
`,(0,y.jsxs)(n.p,{children:[`It can be applied to a `,(0,y.jsx)(n.code,{children:`nav`}),` element with a collection of links and separators within it.`]}),`
`,(0,y.jsx)(n.h2,{id:`playground`,children:`Playground`}),`
`,(0,y.jsx)(i,{of:f}),`
`,(0,y.jsx)(a,{of:f}),`
`,(0,y.jsx)(n.h3,{id:`selective-imports`,children:`Selective Imports`}),`
`,(0,y.jsxs)(n.p,{children:[`Breadcrumbs can be used as a standalone component, however, it does have a few dependencies. To see a full dependency list, see `,(0,y.jsx)(n.a,{href:`?path=/docs/overview-selective-imports--docs#dependencies`,children:`Dependency Graph`})]}),`
`,(0,y.jsx)(n.pre,{children:(0,y.jsx)(n.code,{className:`language-css`,children:`/* Depends on */
@import '@rolemodel/optics/dist/css/core/fonts';
@import '@rolemodel/optics/dist/css/core/tokens';
@import '@rolemodel/optics/dist/css/core/base';

/* Component */
@import '@rolemodel/optics/dist/css/components/breadcrumbs';
`})}),`
`,(0,y.jsx)(n.h2,{id:`variations`,children:`Variations`}),`
`,(0,y.jsx)(n.h3,{id:`default`,children:`Default`}),`
`,(0,y.jsxs)(n.p,{children:[(0,y.jsx)(n.code,{children:`.breadcrumbs`}),` should be used on a `,(0,y.jsx)(n.code,{children:`nav`}),` element. Within it, links with `,(0,y.jsx)(n.code,{children:`.breadcrumbs__link`}),`, separators with `,(0,y.jsx)(n.code,{children:`.breadcrumbs__separator`}),`, and the last item span with `,(0,y.jsx)(n.code,{children:`.breadcrumbs__text`}),` should be used.`]}),`
`,(0,y.jsx)(i,{of:f}),`
`,(0,y.jsx)(n.h3,{id:`size`,children:`Size`}),`
`,(0,y.jsxs)(n.p,{children:[(0,y.jsx)(n.code,{children:`.breadcrumbs--small`}),`, `,(0,y.jsx)(n.code,{children:`.breadcrumbs--large`}),` (with small being the default) modify the font size of the breadcrumb links and text.`]}),`
`,(0,y.jsx)(i,{of:p}),`
`,(0,y.jsx)(n.h3,{id:`separator`,children:`Separator`}),`
`,(0,y.jsxs)(n.p,{children:[(0,y.jsx)(n.code,{children:`.breadcrumbs__separator`}),` is used to separate the links in the breadcrumbs. It is a div that anything can be put within, however typically would be used with an `,(0,y.jsx)(n.a,{href:`?path=/docs/components-icon--docs`,children:`Icon`}),`.`]}),`
`,(0,y.jsx)(i,{of:m}),`
`,(0,y.jsx)(n.h2,{id:`breadcrumb-api`,children:`Breadcrumb API`}),`
`,(0,y.jsx)(n.p,{children:`Styles are built on CSS variables scoped to the breadcrumbs.`}),`
`,(0,y.jsx)(n.p,{children:`Here are the variables that can be customized:`}),`
`,`
`,(0,y.jsx)(n.pre,{children:(0,y.jsx)(n.code,{className:`language-css`,children:`--_op-breadcrumbs-font-size-small:
--_op-breadcrumbs-font-size-large:
`})}),`
`,`
`,(0,y.jsx)(n.h2,{id:`customizing-breadcrumbs-styles`,children:`Customizing Breadcrumbs styles`}),`
`,(0,y.jsx)(`div`,{dangerouslySetInnerHTML:{__html:d({title:`Important!`,description:`These patterns represent how to customize the style of the breadcrumbs for your project.`}).outerHTML}}),`
`,(0,y.jsxs)(n.p,{children:[`The breadcrumbs classes are structured using the `,(0,y.jsx)(n.a,{href:`https://getbem.com/naming`,rel:`nofollow`,children:`BEM methodology`}),`.`]}),`
`,(0,y.jsxs)(n.p,{children:[`This allows us to define core styles on a main `,(0,y.jsx)(n.a,{href:`https://getbem.com/naming/#block`,rel:`nofollow`,children:`block`}),` class, and use `,(0,y.jsx)(n.a,{href:`https://getbem.com/naming/#modifier`,rel:`nofollow`,children:`modifiers`}),` to encapsulate variant styles. You can modify all breadcrumbs behavior by overriding the `,(0,y.jsx)(n.code,{children:`.breadcrumbs`}),` selector and setting any properties:`]}),`
`,(0,y.jsx)(n.pre,{children:(0,y.jsx)(n.code,{className:`language-css`,children:`.breadcrumbs {
  align-items: start;
}
`})}),`
`,(0,y.jsx)(n.p,{children:`If you want to override how the size modifier behaves, you can use the API described above to change which font size each size uses.`}),`
`,(0,y.jsx)(n.pre,{children:(0,y.jsx)(n.code,{className:`language-css`,children:`.breadcrumbs {
  --_op-breadcrumbs-font-size-small: var(--op-font-4x-large);
  --_op-breadcrumbs-font-size-large: var(--op-font-6x-large);
}
`})}),`
`,(0,y.jsx)(n.h2,{id:`new-breadcrumbs-variations`,children:`New Breadcrumbs Variations`}),`
`,(0,y.jsx)(`div`,{dangerouslySetInnerHTML:{__html:d({title:`Important!`,description:`These patterns represent how to create new variations of the Breadcrumbs for your project.`}).outerHTML}}),`
`,(0,y.jsxs)(n.p,{children:[`Your application may need a variation. To add one, just follow this template. Note the double hyphen, indicating that this is a `,(0,y.jsx)(n.a,{href:`https://getbem.com/naming/#modifier`,rel:`nofollow`,children:`modifier`}),`:`]}),`
`,(0,y.jsx)(n.pre,{children:(0,y.jsx)(n.code,{className:`language-css`,children:`.breadcrumbs--{name} {
  background-color:
  color:
}
`})})]})}function v(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,y.jsx)(n,{...e,children:(0,y.jsx)(_,{...e})}):_(e)}var y;e((()=>{y=n(),s(),o(),h(),c(),u()}))();export{v as default};