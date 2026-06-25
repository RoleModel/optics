import{i as e}from"./preload-helper-xPQekRTU.js";import{T as t,l as n,n as r,o as i,u as a}from"./blocks-uVOOWdqL.js";import{s as o}from"./chunk-LITCR56V-BmCoDI8n.js";import{t as s}from"./mdx-react-shim-eO_HyXU9.js";import{n as c,t as l}from"./sourceCodeLink-D2TI9VYO.js";import{n as u,t as d}from"./Alert-BSNiXkFA.js";import{Bottom as f,Button as p,Default as m,Icon as h,Left as g,LotsOfText as _,Right as v,Top as y,n as b,t as x}from"./Tooltip.stories-Db20Sgq7.js";function S(e){let a={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...t(),...e.components};return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(n,{of:x}),`
`,(0,w.jsx)(a.h1,{id:`tooltip`,children:`Tooltip`}),`
`,(0,w.jsx)(`div`,{dangerouslySetInnerHTML:{__html:l({link:`components/tooltip.css`}).outerHTML}}),`
`,(0,w.jsx)(a.p,{children:`Tooltips are build using data attributes on any element. Setting these will show text on hover.`}),`
`,(0,w.jsxs)(a.p,{children:[(0,w.jsx)(a.code,{children:`data-tooltip-text`}),` can be set to any string and will be displayed as the contents of the tooltip.
`,(0,w.jsx)(a.code,{children:`data-tooltip-position`}),` can be set to `,(0,w.jsx)(a.code,{children:`top`}),`, `,(0,w.jsx)(a.code,{children:`bottom`}),`, `,(0,w.jsx)(a.code,{children:`left`}),`, or `,(0,w.jsx)(a.code,{children:`right`}),`(with top being used if nothing is set) and will position the tooltip relative to the element.`]}),`
`,(0,w.jsx)(a.h2,{id:`note-on-implementation`,children:`Note on Implementation`}),`
`,(0,w.jsx)(a.p,{children:`This is a simple CSS only implementation of tooltips. As such, they will not automatically handle overflow clipping or container edge detection. You will need to handle that yourself or use a package.
Here are some commonly used JavaScript packages that can address those issues:`}),`
`,(0,w.jsxs)(a.ul,{children:[`
`,(0,w.jsx)(a.li,{children:(0,w.jsx)(a.a,{href:`https://floating-ui.com`,rel:`nofollow`,children:`Floating UI`})}),`
`,(0,w.jsx)(a.li,{children:(0,w.jsx)(a.a,{href:`https://shoelace.style/components/tooltip`,rel:`nofollow`,children:`Shoelace Tooltip`})}),`
`,(0,w.jsx)(a.li,{children:(0,w.jsx)(a.a,{href:`https://atomiks.github.io/tippyjs/`,rel:`nofollow`,children:`TippyJS`})}),`
`]}),`
`,(0,w.jsx)(a.h2,{id:`playground`,children:`Playground`}),`
`,(0,w.jsx)(r,{of:m}),`
`,(0,w.jsx)(i,{of:m}),`
`,(0,w.jsx)(a.h3,{id:`selective-imports`,children:`Selective Imports`}),`
`,(0,w.jsxs)(a.p,{children:[`Tooltip can be used as a standalone component, however, it does have a few dependencies. To see a full dependency list, see `,(0,w.jsx)(a.a,{href:`?path=/docs/overview-selective-imports--docs#dependencies`,children:`Dependency Graph`})]}),`
`,(0,w.jsx)(a.pre,{children:(0,w.jsx)(a.code,{className:`language-css`,children:`/* Depends on */
@import '@rolemodel/optics/dist/css/core/fonts';
@import '@rolemodel/optics/dist/css/core/tokens';
@import '@rolemodel/optics/dist/css/core/base';

/* Component */
@import '@rolemodel/optics/dist/css/components/tooltip';
`})}),`
`,(0,w.jsx)(a.h2,{id:`note-on-usage-with-button`,children:`Note on usage with Button`}),`
`,(0,w.jsxs)(a.p,{children:[`There are cases when you might want to put a tooltip on a disabled `,(0,w.jsx)(a.a,{href:`?path=/docs/components-button--docs`,children:`Button`}),`. Unfortunately due to the implementation of button which prioritizes simpler and easier to customize code, the hover is blocked which causes the tooltip to not show up.
The workaround for this is to wrap your disabled button in a span and put the tooltip on the span instead.`]}),`
`,(0,w.jsx)(`span`,{className:`sb-button-fix`,"data-tooltip-text":`This is a tooltip`,children:(0,w.jsx)(`button`,{className:`btn`,disabled:!0,children:(0,w.jsx)(a.p,{children:`Disabled Button`})})}),`
`,(0,w.jsx)(a.pre,{children:(0,w.jsx)(a.code,{className:`language-html`,children:`<span data-tooltip-text="This is a tooltip">
  <button class="btn" disabled>Disabled Button</button>
</span>
`})}),`
`,(0,w.jsx)(a.h2,{id:`variations`,children:`Variations`}),`
`,(0,w.jsx)(a.h3,{id:`default`,children:`Default`}),`
`,(0,w.jsx)(r,{of:m}),`
`,(0,w.jsx)(a.h3,{id:`top`,children:`Top`}),`
`,(0,w.jsx)(r,{of:y}),`
`,(0,w.jsx)(a.h3,{id:`right`,children:`Right`}),`
`,(0,w.jsx)(r,{of:v}),`
`,(0,w.jsx)(a.h3,{id:`bottom`,children:`Bottom`}),`
`,(0,w.jsx)(r,{of:f}),`
`,(0,w.jsx)(a.h3,{id:`left`,children:`Left`}),`
`,(0,w.jsx)(r,{of:g}),`
`,(0,w.jsx)(a.h3,{id:`button`,children:`Button`}),`
`,(0,w.jsx)(a.p,{children:`Tooltips can be place on any element. Here is an example of a tooltip on a button.`}),`
`,(0,w.jsx)(r,{of:p}),`
`,(0,w.jsx)(a.h3,{id:`icon`,children:`Icon`}),`
`,(0,w.jsx)(a.p,{children:`Here is an example of a tooltip on an information icon.`}),`
`,(0,w.jsx)(r,{of:h}),`
`,(0,w.jsx)(a.h3,{id:`lots-of-text`,children:`Lots of Text`}),`
`,(0,w.jsx)(a.p,{children:`Tooltips have a maximum width and will wrap text if it is too long.`}),`
`,(0,w.jsx)(r,{of:_}),`
`,(0,w.jsx)(a.h2,{id:`tooltip-api`,children:`Tooltip API`}),`
`,(0,w.jsx)(a.p,{children:`Styles are built on CSS variables scoped to the tooltip.`}),`
`,(0,w.jsx)(a.p,{children:`Here are the variables that can be customized:`}),`
`,`
`,(0,w.jsx)(a.pre,{children:(0,w.jsx)(a.code,{className:`language-css`,children:`--_op-tooltip-max-width
--_op-tooltip-padding
--_op-tooltip-background-color
--_op-tooltip-text-color
--_op-tooltip-arrow-size
--_op-tooltip-tooltip-offset
--_op-tooltip-tooltip-radius
--_op-tooltip-tooltip-font-size
`})}),`
`,`
`,(0,w.jsx)(a.h2,{id:`customizing-tooltip-styles`,children:`Customizing Tooltip styles`}),`
`,(0,w.jsx)(`div`,{dangerouslySetInnerHTML:{__html:d({title:`Important!`,description:`These patterns represent how to customize the style of the tooltip for your project.`}).outerHTML}}),`
`,(0,w.jsx)(a.p,{children:`The tooltip using a data-attribute, not a class.`}),`
`,(0,w.jsxs)(a.p,{children:[`You can modify all tooltip behavior by overriding the `,(0,w.jsx)(a.code,{children:`[data-tooltip-text]`}),` selector and setting any properties:`]}),`
`,(0,w.jsx)(a.pre,{children:(0,w.jsx)(a.code,{className:`language-css`,children:`[data-tooltip-text] {
}
`})}),`
`,(0,w.jsx)(a.h2,{id:`new-tooltip-variations`,children:`New Tooltip Variations`}),`
`,(0,w.jsx)(`div`,{dangerouslySetInnerHTML:{__html:d({title:`Important!`,description:`These patterns represent how to create new variations of the tooltip for your project.`}).outerHTML}}),`
`,(0,w.jsxs)(a.p,{children:[`Your application may need a variation. To add one, just follow this template. Note the double hyphen, indicating that this is a `,(0,w.jsx)(a.a,{href:`https://getbem.com/naming/#modifier`,rel:`nofollow`,children:`modifier`}),`:`]}),`
`,(0,w.jsx)(a.pre,{children:(0,w.jsx)(a.code,{className:`language-css`,children:`[data-special-tooltip-text] {
  /* Add your custom styles here */
}
`})})]})}function C(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,w.jsx)(n,{...e,children:(0,w.jsx)(S,{...e})}):S(e)}var w;e((()=>{w=o(),s(),a(),b(),c(),u()}))();export{C as default};