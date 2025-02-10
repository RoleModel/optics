import{j as e,M as t,C as d,a as l}from"./index-I-zgtLkf.js";import{useMDXComponents as r}from"./index-Cg8ZX7fH.js";import{S as p,D as o,B as c,P as h,a as x,b as j,W as m,c as f}from"./SidePanel.stories-CEb-yRmI.js";import{c as g}from"./sourceCodeLink-Chh3FteF.js";import{c as i}from"./Alert-CZYCmgew.js";import"./iframe-DRrMO3wo.js";import"./index-BiL3ubqk.js";import"./index-DrFu-skq.js";import"./SidePanel-Dk0u1Nrs.js";import"./Divider-DXVOsIdn.js";import"./Button-u0TojoPW.js";import"./Icon-B5xiNJgP.js";function a(s){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:p}),`
`,e.jsx(n.h1,{id:"sidepanel",children:"SidePanel"}),`
`,e.jsx("div",{dangerouslySetInnerHTML:{__html:g({link:"components/side_panel.css"}).outerHTML}}),`
`,e.jsx(n.p,{children:"Side Panel classes provide simple styling for a panel of sections with a scrollable body."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:".side-panel"})," is the main component that everything is contained within."]}),`
`,e.jsx("div",{dangerouslySetInnerHTML:{__html:i({title:"Note",icon:"info",warningLevel:"info",description:"The wrapping div with a height in the code snippets is just for demonstration purposes in this documentation. It is not necessary for use in your application.",iconDocsClassFix:"sb-unstyled"}).outerHTML}}),`
`,e.jsx(n.h2,{id:"playground",children:"Playground"}),`
`,e.jsx(d,{of:o}),`
`,e.jsx(l,{of:o}),`
`,e.jsx(n.h3,{id:"selective-imports",children:"Selective Imports"}),`
`,e.jsxs(n.p,{children:["Side Panel can be used as a standalone component, however, it does have a few dependencies. To see a full dependency list, see ",e.jsx(n.a,{href:"?path=/docs/overview-selective-imports--docs#dependencies",children:"Dependency Graph"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`/* Depends on */
@import '@rolemodel/optics/dist/css/core/tokens';
@import '@rolemodel/optics/dist/css/core/base';

/* Component */
@import '@rolemodel/optics/dist/css/components/side_panel';
`})}),`
`,e.jsx(n.h2,{id:"variations",children:"Variations"}),`
`,e.jsx(n.h3,{id:"default",children:"Default"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:".side-panel"})," provides the basic shell for your sidebar."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:".side-panel__header"}),", ",e.jsx(n.code,{children:".side-panel__body"}),", and ",e.jsx(n.code,{children:".side-panel__footer"})," are used to denote areas of the panel with body taking up as much height as available and adding a scrollbar for any content overflow."]}),`
`,e.jsx(d,{of:o}),`
`,e.jsx(n.h3,{id:"bordered",children:"Bordered"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:".side-panel--border-left"})," or ",e.jsx(n.code,{children:".side-panel--border-right"})," provide a border on either side (or both if both used) of the panel."]}),`
`,e.jsx(d,{of:c}),`
`,e.jsx(n.h3,{id:"padded-header",children:"Padded Header"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:".side-panel__header--padded"})," Provides padding on the whole header area."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:".side-panel__header--padded-x"})," Provides padding on the left and right sides of the header area."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:".side-panel__header--padded-y"})," Provides padding on the top and bottom sides of the header area."]}),`
`,e.jsx(d,{of:h}),`
`,e.jsx(n.h3,{id:"padded-body",children:"Padded Body"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:".side-panel__body--padded"})," Provides padding on the whole body area."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:".side-panel__body--padded-x"})," Provides padding on the left and right sides of the body area."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:".side-panel__body--padded-y"})," Provides padding on the top and bottom sides of the body area."]}),`
`,e.jsx(d,{of:x}),`
`,e.jsx(n.h3,{id:"padded-footer",children:"Padded Footer"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:".side-panel__footer--padded"})," Provides padding on the whole footer area."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:".side-panel__footer--padded-x"})," Provides padding on the left and right sides of the footer area."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:".side-panel__footer--padded-y"})," Provides padding on the top and bottom sides of the footer area."]}),`
`,e.jsx(d,{of:j}),`
`,e.jsx(n.h3,{id:"sections",children:"Sections"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:".side-panel__section"})," can be used within any of the other areas of the side panel and provide separation of content within it."]}),`
`,e.jsx(n.p,{children:"In this example, we are putting dividers between each section to show the separation."}),`
`,e.jsx(d,{of:m}),`
`,e.jsx(n.h3,{id:"padded-sections",children:"Padded Sections"}),`
`,e.jsx(n.p,{children:"One of the benefits is that each section supports the padding classes so individual sections can be padded as needed instead of the whole area."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:".side-panel__section--padded"})," Provides padding on the whole section."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:".side-panel__section--padded-x"})," Provides padding on the left and right sides of the section."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:".side-panel__section--padded-y"})," Provides padding on the top and bottom sides of the section."]}),`
`,e.jsx(d,{of:f}),`
`,e.jsx(n.h2,{id:"sidepanel-api",children:"SidePanel API"}),`
`,e.jsx(n.p,{children:"Styles are built on CSS variables scoped to the SidePanel."}),`
`,e.jsx(n.p,{children:"Here are the variables that can be customized:"}),`
`,`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`--_op-side-panel-width
--_op-side-panel-header-padding
--_op-side-panel-body-padding
--_op-side-panel-footer-padding
--_op-side-panel-section-padding
`})}),`
`,`
`,e.jsx(n.h2,{id:"customizing-sidepanel-styles",children:"Customizing SidePanel styles"}),`
`,e.jsx("div",{dangerouslySetInnerHTML:{__html:i({title:"Important!",description:"These patterns represent how to customize the style of the SidePanel for your project."}).outerHTML}}),`
`,e.jsxs(n.p,{children:["The SidePanel classes are structured using the ",e.jsx(n.a,{href:"https://getbem.com/naming",rel:"nofollow",children:"BEM methodology"}),"."]}),`
`,e.jsxs(n.p,{children:["This allows us to define core styles on a main ",e.jsx(n.a,{href:"https://getbem.com/naming/#block",rel:"nofollow",children:"block"})," class, and use ",e.jsx(n.a,{href:"https://getbem.com/naming/#modifier",rel:"nofollow",children:"modifiers"})," to encapsulate variant styles. You can modify all SidePanel behavior by overriding the ",e.jsx(n.code,{children:".side-panel"})," selector and setting any properties:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`.side-panel {
  background-color: var(--op-color-primary-plus-six);
  color: var(--op-color-primary-on-plus-six);
}
`})}),`
`,e.jsx(n.h2,{id:"new-sidepanel-variations",children:"New SidePanel Variations"}),`
`,e.jsx("div",{dangerouslySetInnerHTML:{__html:i({title:"Important!",description:"These patterns represent how to create new variations of the SidePanel for your project."}).outerHTML}}),`
`,e.jsxs(n.p,{children:["Your application may need a variation. To add one, just follow this template. Note the double hyphen, indicating that this is a ",e.jsx(n.a,{href:"https://getbem.com/naming/#modifier",rel:"nofollow",children:"modifier"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`.sidepanel--{name} {
  --_op-side-panel-width: calc(108 * var(--op-size-unit)); // 432px
  --_op-side-panel-header-padding: var(--op-space-large);
  --_op-side-panel-body-padding: var(--op-space-large);
  --_op-side-panel-footer-padding: var(--op-space-large);
  --_op-side-panel-section-padding: var(--op-space-small);
}
`})})]})}function L(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(a,{...s})}):a(s)}export{L as default};
