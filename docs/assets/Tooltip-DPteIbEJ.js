import{j as o}from"./jsx-runtime-BdapKA9s.js";import{u as a}from"./index-BH2hn5My.js";import{M as r,C as e,d}from"./index-DAHsoxhJ.js";import{T as c,D as s,a as p,R as h,B as m,L as x,b as u,I as j,c as f}from"./Tooltip.stories-XfWye7S5.js";import{c as g}from"./sourceCodeLink-Chh3FteF.js";import{c as i}from"./Alert-93ao7bSE.js";import"./iframe-DA9UFRIg.js";import"../sb-preview/runtime.js";import"./index-B5rfWaSj.js";import"./index-DrFu-skq.js";import"./Button-CoyIamir.js";import"./Icon-D9QrNi_D.js";function l(n){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...a(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(r,{of:c}),`
`,o.jsx(t.h1,{id:"tooltip",children:"Tooltip"}),`
`,o.jsx("div",{dangerouslySetInnerHTML:{__html:g({link:"components/tooltip.scss"}).outerHTML}}),`
`,o.jsx(t.p,{children:"Tooltips are build using data attributes on any element. Setting these will show text on hover."}),`
`,o.jsxs(t.p,{children:[o.jsx(t.code,{children:"data-tooltip-text"}),` can be set to any string and will be displayed as the contents of the tooltip.
`,o.jsx(t.code,{children:"data-tooltip-position"})," can be set to ",o.jsx(t.code,{children:"top"}),", ",o.jsx(t.code,{children:"bottom"}),", ",o.jsx(t.code,{children:"left"}),", or ",o.jsx(t.code,{children:"right"}),"(with top being used if nothing is set) and will position the tooltip relative to the element."]}),`
`,o.jsx(t.h2,{id:"note-on-implementation",children:"Note on Implementation"}),`
`,o.jsx(t.p,{children:`This is a simple CSS only implementation of tooltips. As such, they will not automatically handle overflow clipping or container edge detection. You will need to handle that yourself or use a package.
Here are some commonly used JavaScript packages that can address those issues:`}),`
`,o.jsxs(t.ul,{children:[`
`,o.jsx(t.li,{children:o.jsx(t.a,{href:"https://floating-ui.com",rel:"nofollow",children:"Floating UI"})}),`
`,o.jsx(t.li,{children:o.jsx(t.a,{href:"https://shoelace.style/components/tooltip",rel:"nofollow",children:"Shoelace Tooltip"})}),`
`,o.jsx(t.li,{children:o.jsx(t.a,{href:"https://atomiks.github.io/tippyjs/",rel:"nofollow",children:"TippyJS"})}),`
`]}),`
`,o.jsx(t.h2,{id:"playground",children:"Playground"}),`
`,o.jsx(e,{of:s}),`
`,o.jsx(d,{of:s}),`
`,o.jsx(t.h3,{id:"selective-imports",children:"Selective Imports"}),`
`,o.jsxs(t.p,{children:["Tooltip can be used as a standalone component, however, it does have a few dependencies. To see a full dependency list, see ",o.jsx(t.a,{href:"?path=/docs/overview-selective-imports--docs#dependencies",children:"Dependency Graph"})]}),`
`,o.jsx(t.pre,{children:o.jsx(t.code,{className:"language-css",children:`// Depends on
@import '@rolemodel/optics/dist/scss/core/tokens';
@import '@rolemodel/optics/dist/scss/core/base';

// Component
@import '@rolemodel/optics/dist/scss/components/tooltip';
`})}),`
`,o.jsx(t.h2,{id:"note-on-usage-with-button",children:"Note on usage with Button"}),`
`,o.jsxs(t.p,{children:["There are cases when you might want to put a tooltip on a disabled ",o.jsx(t.a,{href:"?path=/docs/navigation-components-button--docs",children:"Button"}),`. Unfortunately due to the implementation of button which prioritizes simpler and easier to customize code, the hover is blocked which causes the tooltip to not show up.
The workaround for this is to wrap your disabled button in a span and put the tooltip on the span instead.`]}),`
`,o.jsx("span",{className:"sb-button-fix","data-tooltip-text":"This is a tooltip",children:o.jsx("button",{className:"btn",disabled:!0,children:o.jsx(t.p,{children:"Disabled Button"})})}),`
`,o.jsx(t.pre,{children:o.jsx(t.code,{className:"language-html",children:`<span data-tooltip-text="This is a tooltip">
  <button class="btn" disabled>Disabled Button</button>
</span>
`})}),`
`,o.jsx(t.h2,{id:"variations",children:"Variations"}),`
`,o.jsx(t.h3,{id:"default",children:"Default"}),`
`,o.jsx(e,{of:s}),`
`,o.jsx(t.h3,{id:"top",children:"Top"}),`
`,o.jsx(e,{of:p}),`
`,o.jsx(t.h3,{id:"right",children:"Right"}),`
`,o.jsx(e,{of:h}),`
`,o.jsx(t.h3,{id:"bottom",children:"Bottom"}),`
`,o.jsx(e,{of:m}),`
`,o.jsx(t.h3,{id:"left",children:"Left"}),`
`,o.jsx(e,{of:x}),`
`,o.jsx(t.h3,{id:"button",children:"Button"}),`
`,o.jsx(t.p,{children:"Tooltips can be place on any element. Here is an example of a tooltip on a button."}),`
`,o.jsx(e,{of:u}),`
`,o.jsx(t.h3,{id:"icon",children:"Icon"}),`
`,o.jsx(t.p,{children:"Here is an example of a tooltip on an information icon."}),`
`,o.jsx(e,{of:j}),`
`,o.jsx(t.h3,{id:"lots-of-text",children:"Lots of Text"}),`
`,o.jsx(t.p,{children:"Tooltips have a maximum width and will wrap text if it is too long."}),`
`,o.jsx(e,{of:f}),`
`,o.jsx(t.h2,{id:"tooltip-api",children:"Tooltip API"}),`
`,o.jsx(t.p,{children:"Styles are built on CSS variables scoped to the tooltip."}),`
`,o.jsx(t.p,{children:"Here are the variables that can be customized:"}),`
`,`
`,o.jsx(t.pre,{children:o.jsx(t.code,{className:"language-css",children:`--_op-tooltip-max-width
--_op-tooltip-padding
--_op-tooltip-background-color
--_op-tooltip-text-color
--_op-tooltip-arrow-size
--_op-tooltip-tooltip-offset
--_op-tooltip-tooltip-radius
--_op-tooltip-tooltip-font-size
`})}),`
`,`
`,o.jsx(t.h2,{id:"customizing-tooltip-styles",children:"Customizing Tooltip styles"}),`
`,o.jsx("div",{dangerouslySetInnerHTML:{__html:i({title:"Important!",description:"These patterns represent how to customize the style of the tooltip for your project."}).outerHTML}}),`
`,o.jsxs(t.p,{children:["The tooltip classes are built on a ",o.jsx(t.a,{href:"https://sass-lang.com/documentation/style-rules/placeholder-selectors",rel:"nofollow",children:"SASS placeholder selector"})]}),`
`,o.jsxs(t.p,{children:["This allows multiple classes to share the same behavior. You can modify all tooltip behavior by overriding the ",o.jsx(t.code,{children:"%toltip-global"})," placeholder selector and setting any properties:"]}),`
`,o.jsx(t.pre,{children:o.jsx(t.code,{className:"language-css",children:`%tooltip-global {
}
`})}),`
`,o.jsx(t.h2,{id:"new-tooltip-variations",children:"New Tooltip Variations"}),`
`,o.jsx("div",{dangerouslySetInnerHTML:{__html:i({title:"Important!",description:"These patterns represent how to create new variations of the tooltip for your project."}).outerHTML}}),`
`,o.jsx(t.p,{children:"Your application may need a custom tooltip. To add one, just follow this template:"}),`
`,o.jsx(t.pre,{children:o.jsx(t.code,{className:"language-css",children:`[data-special-tooltip-text] {
  @extend %tooltip-global;

  // Add your custom styles here
}
`})})]})}function H(n={}){const{wrapper:t}={...a(),...n.components};return t?o.jsx(t,{...n,children:o.jsx(l,{...n})}):l(n)}export{H as default};
