import{j as e}from"./jsx-runtime-CwL0G-3C.js";import{u as l}from"./index-DmN_qJLl.js";import{M as c,C as n,d as a}from"./index-Bflx7h0W.js";import{S as h,D as i,a as d,b as p}from"./Switch.stories-Cy4YSUTD.js";import{c as m}from"./sourceCodeLink-Chh3FteF.js";import{c as o}from"./Alert-lmCd5s8U.js";import"./iframe-B84OTo8M.js";import"../sb-preview/runtime.js";import"./index-B5rfWaSj.js";import"./index-DrFu-skq.js";import"./Button-CoyIamir.js";import"./Icon-D9QrNi_D.js";function r(t){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...l(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:h}),`
`,e.jsx(s.h1,{id:"switch",children:"Switch"}),`
`,e.jsx("div",{dangerouslySetInnerHTML:{__html:m({link:"components/switch.scss"}).outerHTML}}),`
`,e.jsx(s.p,{children:"Switch classes can be used to create a stylized checkbox or boolean input."}),`
`,e.jsx(s.h2,{id:"note-on-implementation",children:"Note on Implementation"}),`
`,e.jsx(s.p,{children:"This is just a styling pattern and does not implement the form submission functionality. That is up to the projects needs."}),`
`,e.jsxs(s.p,{children:["A commonly used tool for Ruby on Rails projects is ",e.jsx(s.a,{href:"https://github.com/heartcombo/simple_form",rel:"nofollow",children:"SimpleForm"}),". It allows you to build forms with premade inputs and allows you to make custom input types."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.a,{href:"https://github.com/RoleModel/rolemodel_rails/tree/master/lib/generators/rolemodel/simple_form",rel:"nofollow",children:"RoleModel Rails SimpleForm Generator"})," provides a generator to install a custom switch input that can be used with SimpleForm with Optics classes applied."]}),`
`,e.jsx(s.h2,{id:"playground",children:"Playground"}),`
`,e.jsx(n,{of:i}),`
`,e.jsx(a,{of:i}),`
`,e.jsx(s.h3,{id:"selective-imports",children:"Selective Imports"}),`
`,e.jsxs(s.p,{children:["Switch can be used as a standalone component, however, it does have a few dependencies. To see a full dependency list, see ",e.jsx(s.a,{href:"?path=/docs/overview-selective-imports--docs#dependencies",children:"Dependency Graph"})]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-css",children:`// Depends on
@import '@rolemodel/optics/dist/scss/core/tokens';
@import '@rolemodel/optics/dist/scss/core/base';

// Component
@import '@rolemodel/optics/dist/scss/components/switch';
`})}),`
`,e.jsx(s.h2,{id:"variations",children:"Variations"}),`
`,e.jsx(s.h3,{id:"default",children:"Default"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:".switch"})," Provides basic styling for a checkbox or boolean input. It is intended to be used on an input element if type checkbox. It is also intended to be used within a form group. This typically would use ",e.jsx(s.code,{children:".form-group.form-group--inline"})," but can be used without the inline modifier."]}),`
`,e.jsx(n,{of:i}),`
`,e.jsx(s.h3,{id:"size",children:"Size"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:".switch--large"}),", ",e.jsx(s.code,{children:".switch--small"})," (with large being the default) modify the size of the switch."]}),`
`,e.jsx(n,{of:d}),`
`,e.jsx(s.h3,{id:"disabled",children:"Disabled"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"disabled='disabled'"})," will disable the switch."]}),`
`,e.jsx(n,{of:p}),`
`,e.jsx(s.h2,{id:"switch-api",children:"Switch API"}),`
`,e.jsx(s.p,{children:"The size styles are built on CSS variables scoped to the switch."}),`
`,e.jsx(s.p,{children:"Here are the variables that can be customized:"}),`
`,`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-css",children:`--_op-switch-height-small
--_op-switch-height-large
--_op-switch-width-small
--_op-switch-width-large
--_op-switch-opacity-disabled
--_op-switch-switch-padding
`})}),`
`,`
`,e.jsx(s.h2,{id:"customizing-switch-styles",children:"Customizing Switch styles"}),`
`,e.jsx("div",{dangerouslySetInnerHTML:{__html:o({title:"Important!",description:"These patterns represent how to customize the style of the switch for your project."}).outerHTML}}),`
`,e.jsxs(s.p,{children:["The switch classes are built on a ",e.jsx(s.a,{href:"https://sass-lang.com/documentation/style-rules/placeholder-selectors",rel:"nofollow",children:"SASS placeholder selector"})]}),`
`,e.jsxs(s.p,{children:["This allows multiple classes to share the same behavior. You can modify all switch behavior by overriding the ",e.jsx(s.code,{children:"%switch-global"})," placeholder selector and setting any properties:"]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-css",children:`%switch-global {
}
`})}),`
`,e.jsx(s.p,{children:"If you need to override the behavior of a particular switch style, you can open the respective class and set or change properties"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-css",children:`.switch-alternate {
}
`})}),`
`,e.jsx(s.h2,{id:"new-switch-variations",children:"New Switch Variations"}),`
`,e.jsx("div",{dangerouslySetInnerHTML:{__html:o({title:"Important!",description:"These patterns represent how to create new variations of the switch for your project."}).outerHTML}}),`
`,e.jsx(s.p,{children:"Your application may need a custom switch. To add one, just follow this template:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-css",children:`.switch-{name} {
  @extend %switch-global;
}
`})})]})}function M(t={}){const{wrapper:s}={...l(),...t.components};return s?e.jsx(s,{...t,children:e.jsx(r,{...t})}):r(t)}export{M as default};
