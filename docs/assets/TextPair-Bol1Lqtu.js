import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{i as t}from"./react-CaHZDgIm.js";import{s as n}from"./chunk-LITCR56V-BxXRPQK8.js";import{l as r,n as i,o as a,u as o}from"./blocks-3ODIrP3Y.js";import{t as s}from"./mdx-react-shim-DIeO1dVO.js";import{n as c,t as l}from"./sourceCodeLink-C1o55bv0.js";import{n as u,t as d}from"./Alert-xuHYkKjH.js";import{Default as f,Inline as p,SubtitleSize as m,TitleSize as h,n as g,t as _}from"./TextPair.stories-CdOJdMu0.js";function v(e){let n={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,...t(),...e.components};return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(r,{of:_}),`
`,(0,b.jsx)(n.h1,{id:`text-pair`,children:`Text Pair`}),`
`,(0,b.jsx)(`div`,{dangerouslySetInnerHTML:{__html:l({link:`components/text_pair.css`}).outerHTML}}),`
`,(0,b.jsx)(n.p,{children:`The Text Pair component is used to display a title and subtitle together. It can also be used to group other elements within it, though should generally be reserved for text.`}),`
`,(0,b.jsx)(n.h2,{id:`playground`,children:`Playground`}),`
`,(0,b.jsx)(i,{of:f}),`
`,(0,b.jsx)(a,{of:f}),`
`,(0,b.jsx)(n.h3,{id:`selective-imports`,children:`Selective Imports`}),`
`,(0,b.jsxs)(n.p,{children:[`Text Pair can be used as a standalone component, however, it does have a few dependencies. To see a full dependency list, see `,(0,b.jsx)(n.a,{href:`?path=/docs/overview-selective-imports--docs#dependencies`,children:`Dependency Graph`})]}),`
`,(0,b.jsx)(n.pre,{children:(0,b.jsx)(n.code,{className:`language-css`,children:`/* Depends on */
@import '@rolemodel/optics/dist/css/core/fonts';
@import '@rolemodel/optics/dist/css/core/tokens';
@import '@rolemodel/optics/dist/css/core/base';

/* Component */
@import '@rolemodel/optics/dist/css/components/text_pair';
`})}),`
`,(0,b.jsx)(n.h2,{id:`variations`,children:`Variations`}),`
`,(0,b.jsx)(n.h3,{id:`default`,children:`Default`}),`
`,(0,b.jsxs)(n.p,{children:[(0,b.jsx)(n.code,{children:`.text-pair`}),` should be used on a div. Within it, `,(0,b.jsx)(n.code,{children:`.text-pair__title`}),` and `,(0,b.jsx)(n.code,{children:`.text-pair__subtitle`}),` on spans can be used to display the title and subtitle.`]}),`
`,(0,b.jsx)(i,{of:f}),`
`,(0,b.jsx)(n.h3,{id:`inline`,children:`Inline`}),`
`,(0,b.jsxs)(n.p,{children:[(0,b.jsx)(n.code,{children:`.text-pair--inline`}),` can be added to display the title and subtitle horizontally aligned. This is useful for displaying a key, value pair.`]}),`
`,(0,b.jsx)(i,{of:p}),`
`,(0,b.jsx)(n.h3,{id:`title-size`,children:`Title Size`}),`
`,(0,b.jsxs)(n.p,{children:[(0,b.jsx)(n.code,{children:`.text-pair__title--small`}),`, `,(0,b.jsx)(n.code,{children:`.text-pair__title--medium`}),`, `,(0,b.jsx)(n.code,{children:`.text-pair__title--large`}),`, (with medium being the default) modify the font size of the title text.`]}),`
`,(0,b.jsx)(i,{of:h}),`
`,(0,b.jsx)(n.h3,{id:`subtitle-size`,children:`Subtitle Size`}),`
`,(0,b.jsxs)(n.p,{children:[(0,b.jsx)(n.code,{children:`.text-pair__subtitle--small`}),`, `,(0,b.jsx)(n.code,{children:`.text-pair__subtitle--medium`}),`, `,(0,b.jsx)(n.code,{children:`.text-pair__subtitle--large`}),`, (with small being the default) modify the font size of the subtitle text.`]}),`
`,(0,b.jsx)(n.p,{children:`Description of subtitle size example`}),`
`,(0,b.jsx)(i,{of:m}),`
`,(0,b.jsx)(n.h2,{id:`text-pair-api`,children:`Text Pair API`}),`
`,(0,b.jsx)(n.p,{children:`Styles are built on CSS variables scoped to the Text Pair.`}),`
`,(0,b.jsx)(n.p,{children:`Here are the variables that can be customized.`}),`
`,`
`,(0,b.jsx)(n.pre,{children:(0,b.jsx)(n.code,{className:`language-css`,children:`--_op-text-pair-font-size-small:
--_op-text-pair-font-size-medium:
--_op-text-pair-font-size-large:
`})}),`
`,`
`,(0,b.jsx)(n.h2,{id:`customizing-text-pair-styles`,children:`Customizing Text Pair styles`}),`
`,(0,b.jsx)(`div`,{dangerouslySetInnerHTML:{__html:d({title:`Important!`,description:`These patterns represent how to customize the style of the Text Pair for your project.`}).outerHTML}}),`
`,(0,b.jsxs)(n.p,{children:[`The Text Pair classes are structured using the `,(0,b.jsx)(n.a,{href:`https://getbem.com/naming`,rel:`nofollow`,children:`BEM methodology`}),`.`]}),`
`,(0,b.jsxs)(n.p,{children:[`This allows us to define core styles on a main `,(0,b.jsx)(n.a,{href:`https://getbem.com/naming/#block`,rel:`nofollow`,children:`block`}),` class, and use `,(0,b.jsx)(n.a,{href:`https://getbem.com/naming/#modifier`,rel:`nofollow`,children:`modifiers`}),` to encapsulate variant styles. You can modify all textpair behavior by overriding the `,(0,b.jsx)(n.code,{children:`.text-pair`}),` selector and setting any properties:`]}),`
`,(0,b.jsx)(n.pre,{children:(0,b.jsx)(n.code,{className:`language-css`,children:`.text-pair {
  gap: var(--op-space-x-large);
}
`})}),`
`,(0,b.jsx)(n.h2,{id:`new-text-pair-variations`,children:`New Text Pair Variations`}),`
`,(0,b.jsx)(`div`,{dangerouslySetInnerHTML:{__html:d({title:`Important!`,description:`These patterns represent how to create new variations of the Text Pair for your project.`}).outerHTML}}),`
`,(0,b.jsxs)(n.p,{children:[`Your application may need a variation. To add one, just follow this template. Note the double hyphen, indicating that this is a `,(0,b.jsx)(n.a,{href:`https://getbem.com/naming/#modifier`,rel:`nofollow`,children:`modifier`}),`:`]}),`
`,(0,b.jsx)(n.pre,{children:(0,b.jsx)(n.code,{className:`language-css`,children:`.text-pair--{name} {
  gap:
}
`})})]})}function y(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,b.jsx)(n,{...e,children:(0,b.jsx)(v,{...e})}):v(e)}var b;e((()=>{b=n(),s(),o(),g(),c(),u()}))();export{y as default};