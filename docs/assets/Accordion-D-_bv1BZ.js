import{j as e,M as a,C as i,a as d}from"./WithTooltip-SK46ZJ2J-D25rk-eE.js";import{useMDXComponents as c}from"./index-DW-nmGvp.js";import{A as l,D as s,F as h,a as m,b as p}from"./Accordion.stories-DMWaHlSV.js";import{c as u}from"./sourceCodeLink-Chh3FteF.js";import{c as t}from"./Alert-CAEs4394.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-CR1j2QAj.js";import"./Icon-uqCTS4Mm.js";import"./Button-B21kpIpO.js";function r(o){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...c(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:l}),`
`,e.jsx(n.h1,{id:"accordion",children:"Accordion"}),`
`,e.jsx("div",{dangerouslySetInnerHTML:{__html:u({link:"components/accordion.css"}).outerHTML}}),`
`,e.jsxs(n.p,{children:["Accordion classes are built on the ",e.jsx(n.code,{children:"details"})," and ",e.jsx(n.code,{children:"summary"})," html elements. They provide consistent and composable styling for disclosure widgets."]}),`
`,e.jsx(n.h2,{id:"playground",children:"Playground"}),`
`,e.jsx(i,{of:s}),`
`,e.jsx(d,{of:s}),`
`,e.jsx(n.h3,{id:"selective-imports",children:"Selective Imports"}),`
`,e.jsxs(n.p,{children:["Accordion can be used as a standalone component, however, it does have a few dependencies. To see a full dependency list, see ",e.jsx(n.a,{href:"?path=/docs/overview-selective-imports--docs#dependencies",children:"Dependency Graph"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`/* Depends on */
@import '@rolemodel/optics/dist/css/core/fonts';
@import '@rolemodel/optics/dist/css/core/tokens';
@import '@rolemodel/optics/dist/css/core/base';
@import '@rolemodel/optics/dist/css/components/icon';

/* Component */
@import '@rolemodel/optics/dist/css/components/accordion';
`})}),`
`,e.jsx(n.h2,{id:"features",children:"Features"}),`
`,e.jsx(n.h3,{id:"exclusive-open",children:"Exclusive [open]"}),`
`,e.jsxs(n.p,{children:["Setting the ",e.jsx(n.code,{children:"name"})," attribute on the ",e.jsx(n.code,{children:"<details>"})," element will make the accordion exclusive. This attribute enables multiple ",e.jsx(n.code,{children:"<details>"})," elements to be connected, with only one open at a time."]}),`
`,e.jsxs(n.p,{children:["See more about the ",e.jsx(n.code,{children:"name"})," attribute on the ",e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details#name",rel:"nofollow",children:"MDN Web Docs"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<details class="accordion" name="accordion-group">...</details>
<details class="accordion" name="accordion-group">...</details>
<details class="accordion" name="accordion-group">...</details>
`})}),`
`,e.jsx(n.h2,{id:"variations",children:"Variations"}),`
`,e.jsx(n.h3,{id:"default",children:"Default"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:".accordion"})," used on a ",e.jsx(n.code,{children:"details"})," element with a ",e.jsx(n.code,{children:"summary"}),` element as the first child will create an accordion component.
Within the `,e.jsx(n.code,{children:"summary"}),", a span with the class ",e.jsx(n.code,{children:"accordion__label"})," will be used as the title of the accordion and ",e.jsx(n.code,{children:"accordion__marker"})," will be used as the icon."]}),`
`,e.jsxs(n.p,{children:["Other content can be placed within the summary, but the ",e.jsx(n.code,{children:"accordion__label"})," and ",e.jsx(n.code,{children:"accordion__marker"})," classes must be used for the accordion to work properly."]}),`
`,e.jsx(i,{of:s}),`
`,e.jsx(n.h3,{id:"swapped-label-and-marker",children:"Swapped Label and Marker"}),`
`,e.jsx(n.p,{children:"Positioning the marker after the label inside of the summary will result in the marker being on the right side of the accordion."}),`
`,e.jsx(i,{of:h}),`
`,e.jsx(n.h3,{id:"disable-animation",children:"Disable Animation"}),`
`,e.jsxs(n.p,{children:["If you prefer the accordion to not animate, you can disable the transition on the icon and content by using this modifier ",e.jsx(n.code,{children:".accordion--disable-animation"}),"."]}),`
`,e.jsx(i,{of:m}),`
`,e.jsx(n.h3,{id:"additional-header-content",children:"Additional Header Content"}),`
`,e.jsxs(n.p,{children:["Additional content can be included within the ",e.jsx(n.code,{children:"summary"})," element in any order. Anything not within the ",e.jsx(n.code,{children:".accordion__label"})," or ",e.jsx(n.code,{children:".accordion__marker"})," classes will be rendered wherever you place it in the ",e.jsx(n.code,{children:"summary"}),". Note: Content placed between the label and the marker will fill the width between them. If placing a button there, you may want to wrap it in a div so the button doesn't stretch the whole space."]}),`
`,e.jsx(i,{of:p}),`
`,e.jsx(n.h2,{id:"accordion-api",children:"Accordion API"}),`
`,e.jsx(n.p,{children:"Styles are built on CSS variables scoped to the accordion."}),`
`,e.jsx(n.p,{children:"Here are the variables that can be customized:"}),`
`,`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`--_op-accordion-summary-min-height
`})}),`
`,`
`,e.jsx(n.h2,{id:"customizing-accordion-styles",children:"Customizing Accordion styles"}),`
`,e.jsx("div",{dangerouslySetInnerHTML:{__html:t({title:"Important!",description:"These patterns represent how to customize the style of the accordion for your project."}).outerHTML}}),`
`,e.jsxs(n.p,{children:["The accordion classes are structured using the ",e.jsx(n.a,{href:"https://getbem.com/naming",rel:"nofollow",children:"BEM methodology"}),"."]}),`
`,e.jsxs(n.p,{children:["This allows us to define core styles on a main ",e.jsx(n.a,{href:"https://getbem.com/naming/#block",rel:"nofollow",children:"block"})," class, and use ",e.jsx(n.a,{href:"https://getbem.com/naming/#modifier",rel:"nofollow",children:"modifiers"})," to encapsulate variant styles. You can modify all accordion behavior by overriding the ",e.jsx(n.code,{children:".accordion"})," selector and setting any properties:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`.accordion {
}
`})}),`
`,e.jsx(n.h2,{id:"new-accordion-variations",children:"New Accordion Variations"}),`
`,e.jsx("div",{dangerouslySetInnerHTML:{__html:t({title:"Important!",description:"These patterns represent how to create new variations of the accordion for your project."}).outerHTML}}),`
`,e.jsxs(n.p,{children:["Your application may need a variation. To add one, just follow this template. Note the double hyphen, indicating that this is a ",e.jsx(n.a,{href:"https://getbem.com/naming/#modifier",rel:"nofollow",children:"modifier"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`.accordion--{name} {
  --_op-accordion-summary-min-height: var(--op-font-small);
}
`})})]})}function A(o={}){const{wrapper:n}={...c(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(r,{...o})}):r(o)}export{A as default};
