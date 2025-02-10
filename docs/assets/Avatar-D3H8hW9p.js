import{j as e,M as d,C as r,a as l}from"./index-I-zgtLkf.js";import{useMDXComponents as i}from"./index-Cg8ZX7fH.js";import{A as c,D as t,a as h,S as p,W as m}from"./Avatar.stories-CynIn31u.js";import{c as s}from"./Alert-CZYCmgew.js";import{c as v}from"./sourceCodeLink-Chh3FteF.js";import"./iframe-DRrMO3wo.js";import"./index-BiL3ubqk.js";import"./index-DrFu-skq.js";import"./Avatar-B1hinTu4.js";import"./Button-u0TojoPW.js";import"./Icon-B5xiNJgP.js";function o(n){const a={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:c}),`
`,e.jsx(a.h1,{id:"avatar",children:"Avatar"}),`
`,e.jsx("div",{dangerouslySetInnerHTML:{__html:v({link:"components/avatar.css"}).outerHTML}}),`
`,e.jsxs(a.p,{children:["Avatar classes can be used on ",e.jsx(a.code,{children:"a"})," or ",e.jsx(a.code,{children:"div"})," html elements with an ",e.jsx(a.code,{children:"img"})," within it. They provide consistent and composable styling for application avatars or profile pictures."]}),`
`,e.jsxs(a.p,{children:["When using on an ",e.jsx(a.code,{children:"a"}),` element, the avatar will support a hover and focus state.
When using on a `,e.jsx(a.code,{children:"div"})," element, the avatar will not support a hover or focus state."]}),`
`,e.jsx(a.h2,{id:"playground",children:"Playground"}),`
`,e.jsx(r,{of:t}),`
`,e.jsx(l,{of:t}),`
`,e.jsx(a.h3,{id:"selective-imports",children:"Selective Imports"}),`
`,e.jsxs(a.p,{children:["Avatar can be used as a standalone component, however, it does have a few dependencies. To see a full dependency list, see ",e.jsx(a.a,{href:"?path=/docs/overview-selective-imports--docs#dependencies",children:"Dependency Graph"})]}),`
`,e.jsx(a.pre,{children:e.jsx(a.code,{className:"language-css",children:`/* Depends on */
@import '@rolemodel/optics/dist/css/core/tokens';
@import '@rolemodel/optics/dist/css/core/base';

/* Component */
@import '@rolemodel/optics/dist/css/components/avatar';
`})}),`
`,e.jsx(a.h2,{id:"variations",children:"Variations"}),`
`,e.jsx(a.h3,{id:"default",children:"Default"}),`
`,e.jsxs(a.p,{children:[e.jsx(a.code,{children:".avatar"})," is the default avatar class."]}),`
`,e.jsx(r,{of:t}),`
`,e.jsx(a.h3,{id:"disabled",children:"Disabled"}),`
`,e.jsxs(a.p,{children:[e.jsx(a.code,{children:".avatar--disabled"})," will disable the avatar and give it an opacity."]}),`
`,e.jsx(r,{of:h}),`
`,e.jsx(a.h3,{id:"size",children:"Size"}),`
`,e.jsxs(a.p,{children:[e.jsx(a.code,{children:".avatar--small"}),", ",e.jsx(a.code,{children:".avatar--medium"}),", ",e.jsx(a.code,{children:".avatar--large"})," (with large being the default) modify the size of any avatar by changing the width and height to be smaller or larger."]}),`
`,e.jsx(r,{of:p}),`
`,e.jsx(a.h3,{id:"without-link",children:"Without Link"}),`
`,e.jsxs(a.p,{children:["The avatar classes can be used either on an ",e.jsx(a.code,{children:"a"})," or ",e.jsx(a.code,{children:"div"})," element that wraps an ",e.jsx(a.code,{children:"img"})," element."]}),`
`,e.jsxs(a.p,{children:[e.jsx(a.code,{children:"a"}),` is a good choice for avatars that may have interaction such as a link to the users profile or settings.
`,e.jsx(a.code,{children:"div"})," is a good choice if it is purely to display an image or profile picture and does not need to be interactive. Note: the hover and focus outlines will not be visible when using an ",e.jsx(a.code,{children:"div"})," element directly."]}),`
`,e.jsx(r,{of:m}),`
`,e.jsx(a.h2,{id:"avatar-api",children:"Avatar API"}),`
`,e.jsx(a.p,{children:"The size and border styles are built on CSS variables scoped to the avatar."}),`
`,e.jsx(a.p,{children:"Here are the variables that can be customized:"}),`
`,`
`,e.jsx(a.pre,{children:e.jsx(a.code,{className:"language-css",children:`--_op-avatar-border-radius
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
`,e.jsx(a.h2,{id:"customizing-avatar-styles",children:"Customizing Avatar styles"}),`
`,e.jsx("div",{dangerouslySetInnerHTML:{__html:s({title:"Important!",description:"These patterns represent how to customize the style of the avatar for your project."}).outerHTML}}),`
`,e.jsxs(a.p,{children:["The avatar classes are structured using the ",e.jsx(a.a,{href:"https://getbem.com/naming",rel:"nofollow",children:"BEM methodology"}),"."]}),`
`,e.jsxs(a.p,{children:["This allows us to define core styles on a main ",e.jsx(a.a,{href:"https://getbem.com/naming/#block",rel:"nofollow",children:"block"})," class, and use ",e.jsx(a.a,{href:"https://getbem.com/naming/#modifier",rel:"nofollow",children:"modifiers"})," to encapsulate variant styles. You can modify all avatar behavior by overriding the ",e.jsx(a.code,{children:".avatar"})," selector and setting any properties:"]}),`
`,e.jsx(a.pre,{children:e.jsx(a.code,{className:"language-css",children:`.avatar {
}
`})}),`
`,e.jsx(a.h2,{id:"new-avatar-variations",children:"New Avatar Variations"}),`
`,e.jsx("div",{dangerouslySetInnerHTML:{__html:s({title:"Important!",description:"These patterns represent how to create new variations of the avatar for your project."}).outerHTML}}),`
`,e.jsxs(a.p,{children:["Your application may need a variation. To add one, just follow this template. Note the double hyphen, indicating that this is a ",e.jsx(a.a,{href:"https://getbem.com/naming/#modifier",rel:"nofollow",children:"modifier"}),":"]}),`
`,e.jsx(a.pre,{children:e.jsx(a.code,{className:"language-css",children:`.avatar--{name} {
  --_op-avatar-border-radius: var(--op-radius-2x-large);
}
`})})]})}function z(n={}){const{wrapper:a}={...i(),...n.components};return a?e.jsx(a,{...n,children:e.jsx(o,{...n})}):o(n)}export{z as default};
