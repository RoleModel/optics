import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{i as t}from"./react-CaHZDgIm.js";import{s as n}from"./chunk-LITCR56V-BxXRPQK8.js";import{l as r,n as i,o as a,u as o}from"./blocks-3ODIrP3Y.js";import{t as s}from"./mdx-react-shim-DIeO1dVO.js";import{n as c,t as l}from"./sourceCodeLink-C1o55bv0.js";import{n as u,t as d}from"./Alert-xuHYkKjH.js";import{Default as f,Disabled as p,Small as m,WithoutLink as h,n as g,t as _}from"./Avatar.stories-t_C3uVCu.js";function v(e){let n={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,...t(),...e.components};return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(r,{of:_}),`
`,(0,b.jsx)(n.h1,{id:`avatar`,children:`Avatar`}),`
`,(0,b.jsx)(`div`,{dangerouslySetInnerHTML:{__html:l({link:`components/avatar.css`}).outerHTML}}),`
`,(0,b.jsxs)(n.p,{children:[`Avatar classes can be used on `,(0,b.jsx)(n.code,{children:`a`}),` or `,(0,b.jsx)(n.code,{children:`div`}),` html elements with an `,(0,b.jsx)(n.code,{children:`img`}),` within it. They provide consistent and composable styling for application avatars or profile pictures.`]}),`
`,(0,b.jsxs)(n.p,{children:[`When using on an `,(0,b.jsx)(n.code,{children:`a`}),` element, the avatar will support a hover and focus state.
When using on a `,(0,b.jsx)(n.code,{children:`div`}),` element, the avatar will not support a hover or focus state.`]}),`
`,(0,b.jsx)(n.h2,{id:`playground`,children:`Playground`}),`
`,(0,b.jsx)(i,{of:f}),`
`,(0,b.jsx)(a,{of:f}),`
`,(0,b.jsx)(n.h3,{id:`selective-imports`,children:`Selective Imports`}),`
`,(0,b.jsxs)(n.p,{children:[`Avatar can be used as a standalone component, however, it does have a few dependencies. To see a full dependency list, see `,(0,b.jsx)(n.a,{href:`?path=/docs/overview-selective-imports--docs#dependencies`,children:`Dependency Graph`})]}),`
`,(0,b.jsx)(n.pre,{children:(0,b.jsx)(n.code,{className:`language-css`,children:`/* Depends on */
@import '@rolemodel/optics/dist/css/core/fonts';
@import '@rolemodel/optics/dist/css/core/tokens';
@import '@rolemodel/optics/dist/css/core/base';

/* Component */
@import '@rolemodel/optics/dist/css/components/avatar';
`})}),`
`,(0,b.jsx)(n.h2,{id:`variations`,children:`Variations`}),`
`,(0,b.jsx)(n.h3,{id:`default`,children:`Default`}),`
`,(0,b.jsxs)(n.p,{children:[(0,b.jsx)(n.code,{children:`.avatar`}),` is the default avatar class.`]}),`
`,(0,b.jsx)(i,{of:f}),`
`,(0,b.jsx)(n.h3,{id:`disabled`,children:`Disabled`}),`
`,(0,b.jsxs)(n.p,{children:[(0,b.jsx)(n.code,{children:`.avatar--disabled`}),` will disable the avatar and give it an opacity.`]}),`
`,(0,b.jsx)(i,{of:p}),`
`,(0,b.jsx)(n.h3,{id:`size`,children:`Size`}),`
`,(0,b.jsxs)(n.p,{children:[(0,b.jsx)(n.code,{children:`.avatar--small`}),`, `,(0,b.jsx)(n.code,{children:`.avatar--medium`}),`, `,(0,b.jsx)(n.code,{children:`.avatar--large`}),` (with large being the default) modify the size of any avatar by changing the width and height to be smaller or larger.`]}),`
`,(0,b.jsx)(i,{of:m}),`
`,(0,b.jsx)(n.h3,{id:`without-link`,children:`Without Link`}),`
`,(0,b.jsxs)(n.p,{children:[`The avatar classes can be used either on an `,(0,b.jsx)(n.code,{children:`a`}),` or `,(0,b.jsx)(n.code,{children:`div`}),` element that wraps an `,(0,b.jsx)(n.code,{children:`img`}),` element.`]}),`
`,(0,b.jsxs)(n.p,{children:[(0,b.jsx)(n.code,{children:`a`}),` is a good choice for avatars that may have interaction such as a link to the users profile or settings.
`,(0,b.jsx)(n.code,{children:`div`}),` is a good choice if it is purely to display an image or profile picture and does not need to be interactive. Note: the hover and focus outlines will not be visible when using an `,(0,b.jsx)(n.code,{children:`div`}),` element directly.`]}),`
`,(0,b.jsx)(i,{of:h}),`
`,(0,b.jsx)(n.h2,{id:`avatar-api`,children:`Avatar API`}),`
`,(0,b.jsx)(n.p,{children:`The size and border styles are built on CSS variables scoped to the avatar.`}),`
`,(0,b.jsx)(n.p,{children:`Here are the variables that can be customized:`}),`
`,`
`,(0,b.jsx)(n.pre,{children:(0,b.jsx)(n.code,{className:`language-css`,children:`--_op-avatar-border-radius
--_op-avatar-inner-border-color
--_op-avatar-outer-border-color
--_op-avatar-inner-border-width
--_op-avatar-outer-border-width
--_op-avatar-disabled-opacity
--_op-avatar-size-small
--_op-avatar-size-medium
--_op-avatar-size-large
`})}),`
`,`
`,(0,b.jsx)(n.h2,{id:`customizing-avatar-styles`,children:`Customizing Avatar styles`}),`
`,(0,b.jsx)(`div`,{dangerouslySetInnerHTML:{__html:d({title:`Important!`,description:`These patterns represent how to customize the style of the avatar for your project.`}).outerHTML}}),`
`,(0,b.jsxs)(n.p,{children:[`The avatar classes are structured using the `,(0,b.jsx)(n.a,{href:`https://getbem.com/naming`,rel:`nofollow`,children:`BEM methodology`}),`.`]}),`
`,(0,b.jsxs)(n.p,{children:[`This allows us to define core styles on a main `,(0,b.jsx)(n.a,{href:`https://getbem.com/naming/#block`,rel:`nofollow`,children:`block`}),` class, and use `,(0,b.jsx)(n.a,{href:`https://getbem.com/naming/#modifier`,rel:`nofollow`,children:`modifiers`}),` to encapsulate variant styles. You can modify all avatar behavior by overriding the `,(0,b.jsx)(n.code,{children:`.avatar`}),` selector and setting any properties:`]}),`
`,(0,b.jsx)(n.pre,{children:(0,b.jsx)(n.code,{className:`language-css`,children:`.avatar {
}
`})}),`
`,(0,b.jsx)(n.h2,{id:`new-avatar-variations`,children:`New Avatar Variations`}),`
`,(0,b.jsx)(`div`,{dangerouslySetInnerHTML:{__html:d({title:`Important!`,description:`These patterns represent how to create new variations of the avatar for your project.`}).outerHTML}}),`
`,(0,b.jsxs)(n.p,{children:[`Your application may need a variation. To add one, just follow this template. Note the double hyphen, indicating that this is a `,(0,b.jsx)(n.a,{href:`https://getbem.com/naming/#modifier`,rel:`nofollow`,children:`modifier`}),`:`]}),`
`,(0,b.jsx)(n.pre,{children:(0,b.jsx)(n.code,{className:`language-css`,children:`.avatar--{name} {
  --_op-avatar-border-radius: var(--op-radius-2x-large);
}
`})})]})}function y(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,b.jsx)(n,{...e,children:(0,b.jsx)(v,{...e})}):v(e)}var b;e((()=>{b=n(),s(),o(),g(),u(),c()}))();export{y as default};