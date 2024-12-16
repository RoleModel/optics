import{j as e}from"./jsx-runtime-BdapKA9s.js";import{u as s}from"./index-BH2hn5My.js";import{M as i}from"./index-DAHsoxhJ.js";import{c as r}from"./sourceCodeLink-Chh3FteF.js";import"./iframe-DA9UFRIg.js";import"../sb-preview/runtime.js";import"./index-B5rfWaSj.js";import"./index-DrFu-skq.js";function n(t){const o={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Overview/Addons"}),`
`,e.jsx(o.h1,{id:"addons",children:"Addons"}),`
`,e.jsx("div",{dangerouslySetInnerHTML:{__html:r({link:"addons"}).outerHTML}}),`
`,e.jsx(o.p,{children:"Optics provides a few addons for integrating Third-Party tools with your application."}),`
`,e.jsx(o.h2,{id:"tom-select",children:"Tom Select"}),`
`,e.jsxs(o.p,{children:[e.jsx(o.a,{href:"https://tom-select.js.org/",rel:"nofollow",children:"Tom Select"})," is a dynamic, framework agnostic, and lightweight (~16kb gzipped) ",e.jsx(o.code,{children:"<select>"})," UI control. With autocomplete and native-feeling keyboard navigation, it's useful for tagging, contact lists, country selectors, and so on."]}),`
`,e.jsx(o.p,{children:"If your application uses Tom Select, you can import the styles from Tom Select along with the Design Systems tokens applied to it by placing this after importing the base design system."}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-css",children:`@import '@rolemodel/optics';
@import 'tom-select/dist/scss/tom-select';

@import '@rolemodel/optics/dist/scss/addons/tom-select';
`})}),`
`,e.jsx(o.h2,{id:"rails-panel",children:"Rails Panel"}),`
`,e.jsxs(o.p,{children:["Panel provide styles that are intended to accompany the rails configuration and javascript implemented by ",e.jsx(o.a,{href:"https://github.com/RoleModel/rolemodel_rails/tree/master/lib/generators/rolemodel/modals",rel:"nofollow",children:"RoleModel Rails Panel"})," Similar to the Modal Component"]}),`
`,e.jsx(o.p,{children:"If your application uses this implementation, you can import the styles via:"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-css",children:`@import '@rolemodel/optics';

@import '@rolemodel/optics/dist/scss/addons/panel';
`})})]})}function g(t={}){const{wrapper:o}={...s(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(n,{...t})}):n(t)}export{g as default};
