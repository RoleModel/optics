import{j as t}from"./jsx-runtime-BudFbCqj.js";import{u as a}from"./index-CZ7_UIou.js";import{M as r,C as e,d}from"./index-BO8JBeAl.js";import{T as p,D as i,a as c,R as h,B as x,L as m,b as u,I as j,c as f}from"./Tooltip.stories-XfWye7S5.js";import{c as g}from"./sourceCodeLink-Chh3FteF.js";import{c as s}from"./Alert-lmCd5s8U.js";import"./iframe-B89zdOr6.js";import"../sb-preview/runtime.js";import"./index-B5rfWaSj.js";import"./index-DrFu-skq.js";import"./Button-CoyIamir.js";import"./Icon-D9QrNi_D.js";function l(n){const o={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...a(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(r,{of:p}),`
`,t.jsx(o.h1,{id:"tooltip",children:"Tooltip"}),`
`,t.jsx("div",{dangerouslySetInnerHTML:{__html:g({link:"components/tooltip.scss"}).outerHTML}}),`
`,t.jsx(o.p,{children:"Tooltips are build using data attributes on any element. Setting these will show text on hover."}),`
`,t.jsxs(o.p,{children:[t.jsx(o.code,{children:"data-tooltip-text"}),` can be set to any string and will be displayed as the contents of the tooltip.
`,t.jsx(o.code,{children:"data-tooltip-position"})," can be set to ",t.jsx(o.code,{children:"top"}),", ",t.jsx(o.code,{children:"bottom"}),", ",t.jsx(o.code,{children:"left"}),", or ",t.jsx(o.code,{children:"right"}),"(with top being used if nothing is set) and will position the tooltip relative to the element."]}),`
`,t.jsx(o.h2,{id:"note-on-implementation",children:"Note on Implementation"}),`
`,t.jsx(o.p,{children:`This is a simple CSS only implementation of tooltips. As such, they will not automatically handle overflow clipping or container edge detection. You will need to handle that yourself or use a package.
Here are some commonly used JavaScript packages that can address those issues:`}),`
`,t.jsxs(o.ul,{children:[`
`,t.jsx(o.li,{children:t.jsx(o.a,{href:"https://floating-ui.com",rel:"nofollow",children:"Floating UI"})}),`
`,t.jsx(o.li,{children:t.jsx(o.a,{href:"https://shoelace.style/components/tooltip",rel:"nofollow",children:"Shoelace Tooltip"})}),`
`,t.jsx(o.li,{children:t.jsx(o.a,{href:"https://atomiks.github.io/tippyjs/",rel:"nofollow",children:"TippyJS"})}),`
`]}),`
`,t.jsx(o.h2,{id:"playground",children:"Playground"}),`
`,t.jsx(e,{of:i}),`
`,t.jsx(d,{of:i}),`
`,t.jsx(o.h3,{id:"selective-imports",children:"Selective Imports"}),`
`,t.jsxs(o.p,{children:["Tooltip can be used as a standalone component, however, it does have a few dependencies. To see a full dependency list, see ",t.jsx(o.a,{href:"?path=/docs/overview-selective-imports--docs#dependencies",children:"Dependency Graph"})]}),`
`,t.jsx(o.pre,{children:t.jsx(o.code,{className:"language-css",children:`// Depends on
@import '@rolemodel/optics/dist/scss/core/tokens';
@import '@rolemodel/optics/dist/scss/core/base';

// Component
@import '@rolemodel/optics/dist/scss/components/tooltip';
`})}),`
`,t.jsx(o.h2,{id:"note-on-usage-with-button",children:"Note on usage with Button"}),`
`,t.jsxs(o.p,{children:["There are cases when you might want to put a tooltip on a disabled ",t.jsx(o.a,{href:"?path=/docs/navigation-components-button--docs",children:"Button"}),`. Unfortunately due to the implementation of button which prioritizes simpler and easier to customize code, the hover is blocked which causes the tooltip to not show up.
The workaround for this is to wrap your disabled button in a span and put the tooltip on the span instead.`]}),`
`,t.jsx("span",{className:"sb-button-fix","data-tooltip-text":"This is a tooltip",children:t.jsx("button",{className:"btn",disabled:!0,children:t.jsx(o.p,{children:"Disabled Button"})})}),`
`,t.jsx(o.pre,{children:t.jsx(o.code,{className:"language-html",children:`<span data-tooltip-text="This is a tooltip">
  <button class="btn" disabled>Disabled Button</button>
</span>
`})}),`
`,t.jsx(o.h2,{id:"variations",children:"Variations"}),`
`,t.jsx(o.h3,{id:"default",children:"Default"}),`
`,t.jsx(e,{of:i}),`
`,t.jsx(o.h3,{id:"top",children:"Top"}),`
`,t.jsx(e,{of:c}),`
`,t.jsx(o.h3,{id:"right",children:"Right"}),`
`,t.jsx(e,{of:h}),`
`,t.jsx(o.h3,{id:"bottom",children:"Bottom"}),`
`,t.jsx(e,{of:x}),`
`,t.jsx(o.h3,{id:"left",children:"Left"}),`
`,t.jsx(e,{of:m}),`
`,t.jsx(o.h3,{id:"button",children:"Button"}),`
`,t.jsx(o.p,{children:"Tooltips can be place on any element. Here is an example of a tooltip on a button."}),`
`,t.jsx(e,{of:u}),`
`,t.jsx(o.h3,{id:"icon",children:"Icon"}),`
`,t.jsx(o.p,{children:"Here is an example of a tooltip on an information icon."}),`
`,t.jsx(e,{of:j}),`
`,t.jsx(o.h3,{id:"lots-of-text",children:"Lots of Text"}),`
`,t.jsx(o.p,{children:"Tooltips have a maximum width and will wrap text if it is too long."}),`
`,t.jsx(e,{of:f}),`
`,t.jsx(o.h2,{id:"tooltip-api",children:"Tooltip API"}),`
`,t.jsx(o.p,{children:"Styles are built on CSS variables scoped to the tooltip."}),`
`,t.jsx(o.p,{children:"Here are the variables that can be customized:"}),`
`,`
`,t.jsx(o.pre,{children:t.jsx(o.code,{className:"language-css",children:`--_op-tooltip-max-width
--_op-tooltip-padding
--_op-tooltip-background-color
--_op-tooltip-text-color
--_op-tooltip-arrow-size
--_op-tooltip-tooltip-offset
--_op-tooltip-tooltip-radius
--_op-tooltip-tooltip-font-size
`})}),`
`,`
`,t.jsx(o.h2,{id:"customizing-tooltip-styles",children:"Customizing Tooltip styles"}),`
`,t.jsx("div",{dangerouslySetInnerHTML:{__html:s({title:"Important!",description:"These patterns represent how to customize the style of the tooltip for your project."}).outerHTML}}),`
`,t.jsx(o.p,{children:"The tooltip using a data-attribute, not a class."}),`
`,t.jsxs(o.p,{children:["You can modify all tooltip behavior by overriding the ",t.jsx(o.code,{children:"[data-tooltip-text]"})," selector and setting any properties:"]}),`
`,t.jsx(o.pre,{children:t.jsx(o.code,{className:"language-css",children:`[data-tooltip-text] {
}
`})}),`
`,t.jsx(o.h2,{id:"new-tooltip-variations",children:"New Tooltip Variations"}),`
`,t.jsx("div",{dangerouslySetInnerHTML:{__html:s({title:"Important!",description:"These patterns represent how to create new variations of the tooltip for your project."}).outerHTML}}),`
`,t.jsxs(o.p,{children:["Your application may need a variation. To add one, just follow this template. Note the double hyphen, indicating that this is a ",t.jsx(o.a,{href:"https://getbem.com/naming/#modifier",rel:"nofollow",children:"modifier"}),":"]}),`
`,t.jsx(o.pre,{children:t.jsx(o.code,{className:"language-css",children:`[data-special-tooltip-text] {
  // Add your custom styles here
}
`})})]})}function D(n={}){const{wrapper:o}={...a(),...n.components};return o?t.jsx(o,{...n,children:t.jsx(l,{...n})}):l(n)}export{D as default};
