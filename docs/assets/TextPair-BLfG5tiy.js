import{j as e}from"./jsx-runtime-E9NyL7ZE.js";import{u as a}from"./index-DZ-dxXhw.js";import{M as l,C as n,d}from"./index-CKTeridz.js";import{T as c,D as s,I as h,a as p,S as x}from"./TextPair.stories-Bj6wGdD2.js";import{c as m}from"./sourceCodeLink-Chh3FteF.js";import{c as r}from"./Alert-lmCd5s8U.js";import"./iframe-Cw5OhXyt.js";import"../sb-preview/runtime.js";import"./index-B5rfWaSj.js";import"./index-DrFu-skq.js";import"./Button-CoyIamir.js";import"./Icon-D9QrNi_D.js";function o(i){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...a(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:c}),`
`,e.jsx(t.h1,{id:"text-pair",children:"Text Pair"}),`
`,e.jsx("div",{dangerouslySetInnerHTML:{__html:m({link:"components/text_pair.scss"}).outerHTML}}),`
`,e.jsx(t.p,{children:"The Text Pair component is used to display a title and subtitle together. It can also be used to group other elements within it, though should generally be reserved for text."}),`
`,e.jsx(t.h2,{id:"playground",children:"Playground"}),`
`,e.jsx(n,{of:s}),`
`,e.jsx(d,{of:s}),`
`,e.jsx(t.h3,{id:"selective-imports",children:"Selective Imports"}),`
`,e.jsxs(t.p,{children:["Text Pair can be used as a standalone component, however, it does have a few dependencies. To see a full dependency list, see ",e.jsx(t.a,{href:"?path=/docs/overview-selective-imports--docs#dependencies",children:"Dependency Graph"})]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-css",children:`// Depends on
@import '@rolemodel/optics/dist/scss/core/tokens';
@import '@rolemodel/optics/dist/scss/core/base';

// Component
@import '@rolemodel/optics/dist/scss/components/text_pair';
`})}),`
`,e.jsx(t.h2,{id:"variations",children:"Variations"}),`
`,e.jsx(t.h3,{id:"default",children:"Default"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:".text-pair"})," should be used on a div. Within it, ",e.jsx(t.code,{children:".text-pair__title"})," and ",e.jsx(t.code,{children:".text-pair__subtitle"})," on spans can be used to display the title and subtitle."]}),`
`,e.jsx(n,{of:s}),`
`,e.jsx(t.h3,{id:"inline",children:"Inline"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:".text-pair--inline"})," can be added to display the title and subtitle horizontally aligned. This is useful for displaying a key, value pair."]}),`
`,e.jsx(n,{of:h}),`
`,e.jsx(t.h3,{id:"title-size",children:"Title Size"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:".text-pair__title--small"}),", ",e.jsx(t.code,{children:".text-pair__title--medium"}),", ",e.jsx(t.code,{children:".text-pair__title--large"}),", (with medium being the default) modify the font size of the title text."]}),`
`,e.jsx(n,{of:p}),`
`,e.jsx(t.h3,{id:"subtitle-size",children:"Subtitle Size"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:".text-pair__subtitle--small"}),", ",e.jsx(t.code,{children:".text-pair__subtitle--medium"}),", ",e.jsx(t.code,{children:".text-pair__subtitle--large"}),", (with small being the default) modify the font size of the subtitle text."]}),`
`,e.jsx(t.p,{children:"Description of subtitle size example"}),`
`,e.jsx(n,{of:x}),`
`,e.jsx(t.h2,{id:"text-pair-api",children:"Text Pair API"}),`
`,e.jsx(t.p,{children:"Styles are built on CSS variables scoped to the Text Pair."}),`
`,e.jsx(t.p,{children:"Here are the variables that can be customized."}),`
`,`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-css",children:`--_op-text-pair-font-size-small:
--_op-text-pair-font-size-medium:
--_op-text-pair-font-size-large:
`})}),`
`,`
`,e.jsx(t.h2,{id:"customizing-text-pair-styles",children:"Customizing Text Pair styles"}),`
`,e.jsx("div",{dangerouslySetInnerHTML:{__html:r({title:"Important!",description:"These patterns represent how to customize the style of the Text Pair for your project."}).outerHTML}}),`
`,e.jsxs(t.p,{children:["The Text Pair classes are structured using the ",e.jsx(t.a,{href:"https://getbem.com/naming",rel:"nofollow",children:"BEM methodology"}),"."]}),`
`,e.jsxs(t.p,{children:["This allows us to define core styles on a main ",e.jsx(t.a,{href:"https://getbem.com/naming/#block",rel:"nofollow",children:"block"})," class, and use ",e.jsx(t.a,{href:"https://getbem.com/naming/#modifier",rel:"nofollow",children:"modifiers"})," to encapsulate variant styles. You can modify all textpair behavior by overriding the ",e.jsx(t.code,{children:".text-pair"})," selector and setting any properties:"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-css",children:`.text-pair {
  gap: var(--op-space-x-large);
}
`})}),`
`,e.jsx(t.h2,{id:"new-text-pair-variations",children:"New Text Pair Variations"}),`
`,e.jsx("div",{dangerouslySetInnerHTML:{__html:r({title:"Important!",description:"These patterns represent how to create new variations of the Text Pair for your project."}).outerHTML}}),`
`,e.jsxs(t.p,{children:["Your application may need a variation. To add one, just follow this template. Note the double hyphen, indicating that this is a ",e.jsx(t.a,{href:"https://getbem.com/naming/#modifier",rel:"nofollow",children:"modifier"}),":"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-css",children:`.text-pair--{name} {
  gap:
}
`})})]})}function M(i={}){const{wrapper:t}={...a(),...i.components};return t?e.jsx(t,{...i,children:e.jsx(o,{...i})}):o(i)}export{M as default};
