import{j as e}from"./jsx-runtime-DllfVXhu.js";import{u as l}from"./index-C_ydmNyw.js";import{M as i,C as o,d}from"./index-aM1em-Hc.js";import{T as c,D as a,S as p}from"./Tab.stories-fGzOR813.js";import{c as h}from"./sourceCodeLink-Chh3FteF.js";import{c as t}from"./Alert-93ao7bSE.js";import"./iframe-B0Zsr26N.js";import"../sb-preview/runtime.js";import"./index-B5rfWaSj.js";import"./index-DrFu-skq.js";import"./Button-CoyIamir.js";import"./Icon-D9QrNi_D.js";function r(n){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...l(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:c}),`
`,e.jsx(s.h1,{id:"tab",children:"Tab"}),`
`,e.jsx("div",{dangerouslySetInnerHTML:{__html:h({link:"components/tab.scss"}).outerHTML}}),`
`,e.jsx(s.p,{children:"Tab classes provide simple styling for a tab group navigation."}),`
`,e.jsx(s.h2,{id:"playground",children:"Playground"}),`
`,e.jsx(o,{of:a}),`
`,e.jsx(d,{of:a}),`
`,e.jsx(s.h3,{id:"selective-imports",children:"Selective Imports"}),`
`,e.jsxs(s.p,{children:["Tab can be used as a standalone component, however, it does have a few dependencies. To see a full dependency list, see ",e.jsx(s.a,{href:"?path=/docs/overview-selective-imports--docs#dependencies",children:"Dependency Graph"})]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-css",children:`// Depends on
@import '@rolemodel/optics/dist/scss/core/tokens';
@import '@rolemodel/optics/dist/scss/core/base';

// Component
@import '@rolemodel/optics/dist/scss/components/tab';
`})}),`
`,e.jsx(s.h2,{id:"variations",children:"Variations"}),`
`,e.jsx(s.h3,{id:"default",children:"Default"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:".tab-group"})," Provides the grouping around a collection of links or buttons that have the ",e.jsx(s.code,{children:".tab"})," class."]}),`
`,e.jsxs(s.p,{children:["Each item should use ",e.jsx(s.code,{children:".tab"})," and also supports ",e.jsx(s.code,{children:".tab--active"})," and ",e.jsx(s.code,{children:".tab--disabled"}),"."]}),`
`,e.jsxs(s.p,{children:["When using ",e.jsx(s.code,{children:".tab--disabled"})," the tabindex attributes should also be set to ",e.jsx(s.code,{children:"-1"})," to skip the tab during keyboard navigation."]}),`
`,e.jsx(o,{of:a}),`
`,e.jsx(s.h3,{id:"small",children:"Small"}),`
`,e.jsxs(s.p,{children:["A tab supports ",e.jsx(s.code,{children:".tab--small"})," or ",e.jsx(s.code,{children:".tab--large"})," with large being the default."]}),`
`,e.jsx(o,{of:p}),`
`,e.jsx(s.h2,{id:"tab-api",children:"Tab API"}),`
`,e.jsx(s.p,{children:"Styles are built on css variables scoped to the tab."}),`
`,e.jsx(s.p,{children:"Here are the variables that can be customized."}),`
`,`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-css",children:`--_op-tab-font-small
--_op-tab-font-large
--_op-tab-padding-small
--_op-tab-padding-large
--_op-tab-indicator-width-small
--_op-tab-indicator-width-large
--_op-tab-disabled-opacity
`})}),`
`,`
`,e.jsx(s.h2,{id:"customizing-tab-styles",children:"Customizing Tab styles"}),`
`,e.jsx("div",{dangerouslySetInnerHTML:{__html:t({title:"Important!",description:"These patterns represent how to customize the style of the tab for your project."}).outerHTML}}),`
`,e.jsxs(s.p,{children:["The tab classes are built on a ",e.jsx(s.a,{href:"https://sass-lang.com/documentation/style-rules/placeholder-selectors",rel:"nofollow",children:"sass placeholder selector"})]}),`
`,e.jsxs(s.p,{children:["This allows multiple classes to share the same behavior. You can modify all tab behavior by overriding the ",e.jsx(s.code,{children:"%tab-global"})," placeholder selector and setting any properties:"]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-css",children:`%tab-global {
  --_op-tab-font-small: var(--op-font-2x-small);
  --_op-tab-padding-small: var(--op-space-3x-small) var(--op-space-small);
}
`})}),`
`,e.jsx(s.h2,{id:"new-tab-variations",children:"New Tab Variations"}),`
`,e.jsx("div",{dangerouslySetInnerHTML:{__html:t({title:"Important!",description:"These patterns represent how to create new variations of the Tab for your project."}).outerHTML}}),`
`,e.jsx(s.p,{children:"Your application may need a custom tab. To add one, just follow this template:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-css",children:`.tab-{name} {
  @extend %tab-global;

  background-color: var(--op-color-primary-plus-two);
  color: var(--op-color-primary-on-plus-two);
}
`})})]})}function M(n={}){const{wrapper:s}={...l(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(r,{...n})}):r(n)}export{M as default};
