import{j as e,M as l,C as o,a as d}from"./blocks-DX_T_ZP4.js";import{useMDXComponents as i}from"./index-BODO6xtx.js";import{T as c,D as t,S as h}from"./Tab.stories-DVTNMeT3.js";import{c as p}from"./sourceCodeLink-Chh3FteF.js";import{c as a}from"./Alert-CAEs4394.js";import"./preload-helper-D9Z9MdNV.js";import"./iframe-CivF7LaH.js";import"./Button-B21kpIpO.js";import"./Icon-uqCTS4Mm.js";function r(s){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...i(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:c}),`
`,e.jsx(n.h1,{id:"tab",children:"Tab"}),`
`,e.jsx("div",{dangerouslySetInnerHTML:{__html:p({link:"components/tab.css"}).outerHTML}}),`
`,e.jsx(n.p,{children:"Tab classes provide simple styling for a tab group navigation."}),`
`,e.jsx(n.h2,{id:"playground",children:"Playground"}),`
`,e.jsx(o,{of:t}),`
`,e.jsx(d,{of:t}),`
`,e.jsx(n.h3,{id:"selective-imports",children:"Selective Imports"}),`
`,e.jsxs(n.p,{children:["Tab can be used as a standalone component, however, it does have a few dependencies. To see a full dependency list, see ",e.jsx(n.a,{href:"?path=/docs/overview-selective-imports--docs#dependencies",children:"Dependency Graph"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`/* Depends on */
@import '@rolemodel/optics/dist/css/core/fonts';
@import '@rolemodel/optics/dist/css/core/tokens';
@import '@rolemodel/optics/dist/css/core/base';

/* Component */
@import '@rolemodel/optics/dist/css/components/tab';
`})}),`
`,e.jsx(n.h2,{id:"variations",children:"Variations"}),`
`,e.jsx(n.h3,{id:"default",children:"Default"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:".tab-group"})," Provides the grouping around a collection of links or buttons that have the ",e.jsx(n.code,{children:".tab"})," class."]}),`
`,e.jsxs(n.p,{children:["Each item should use ",e.jsx(n.code,{children:".tab"})," and also supports ",e.jsx(n.code,{children:".tab--active"})," and ",e.jsx(n.code,{children:".tab--disabled"}),"."]}),`
`,e.jsxs(n.p,{children:["When using ",e.jsx(n.code,{children:".tab--disabled"})," the tabindex attributes should also be set to ",e.jsx(n.code,{children:"-1"})," to skip the tab during keyboard navigation."]}),`
`,e.jsx(o,{of:t}),`
`,e.jsx(n.h3,{id:"small",children:"Small"}),`
`,e.jsxs(n.p,{children:["A tab supports ",e.jsx(n.code,{children:".tab--small"})," or ",e.jsx(n.code,{children:".tab--large"})," with large being the default."]}),`
`,e.jsx(o,{of:h}),`
`,e.jsx(n.h2,{id:"tab-api",children:"Tab API"}),`
`,e.jsx(n.p,{children:"Styles are built on CSS variables scoped to the tab."}),`
`,e.jsx(n.p,{children:"Here are the variables that can be customized:"}),`
`,`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`--_op-tab-font-small
--_op-tab-font-large
--_op-tab-padding-small
--_op-tab-padding-large
--_op-tab-indicator-width-small
--_op-tab-indicator-width-large
--_op-tab-disabled-opacity
`})}),`
`,`
`,e.jsx(n.h2,{id:"customizing-tab-styles",children:"Customizing Tab styles"}),`
`,e.jsx("div",{dangerouslySetInnerHTML:{__html:a({title:"Important!",description:"These patterns represent how to customize the style of the tab for your project."}).outerHTML}}),`
`,e.jsxs(n.p,{children:["The tab classes are structured using the ",e.jsx(n.a,{href:"https://getbem.com/naming",rel:"nofollow",children:"BEM methodology"}),"."]}),`
`,e.jsxs(n.p,{children:["This allows us to define core styles on a main ",e.jsx(n.a,{href:"https://getbem.com/naming/#block",rel:"nofollow",children:"block"})," class, and use ",e.jsx(n.a,{href:"https://getbem.com/naming/#modifier",rel:"nofollow",children:"modifiers"})," to encapsulate variant styles. You can modify all tab behavior by overriding the ",e.jsx(n.code,{children:".tab"})," selector and setting any properties:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`.tab {
  --_op-tab-font-small: var(--op-font-2x-small);
  --_op-tab-padding-small: var(--op-space-3x-small) var(--op-space-small);
}
`})}),`
`,e.jsx(n.h2,{id:"new-tab-variations",children:"New Tab Variations"}),`
`,e.jsx("div",{dangerouslySetInnerHTML:{__html:a({title:"Important!",description:"These patterns represent how to create new variations of the Tab for your project."}).outerHTML}}),`
`,e.jsxs(n.p,{children:["Your application may need a variation. To add one, just follow this template. Note the double hyphen, indicating that this is a ",e.jsx(n.a,{href:"https://getbem.com/naming/#modifier",rel:"nofollow",children:"modifier"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`.tab--{name} {
  background-color: var(--op-color-primary-plus-two);
  color: var(--op-color-primary-on-plus-two);
}
`})})]})}function T(s={}){const{wrapper:n}={...i(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{T as default};
