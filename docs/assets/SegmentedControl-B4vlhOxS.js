import{j as e,M as d,C as t,a as c}from"./WithTooltip-SK46ZJ2J-D25rk-eE.js";import{useMDXComponents as i}from"./index-DW-nmGvp.js";import{S as a,D as s,W as m,a as h,F as p}from"./SegmentedControl.stories-D6hC7sAq.js";import{c as g}from"./sourceCodeLink-Chh3FteF.js";import{c as r}from"./Alert-CAEs4394.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-CR1j2QAj.js";import"./Icon-uqCTS4Mm.js";import"./Button-B21kpIpO.js";function l(o){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...i(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:a}),`
`,`
`,e.jsx(n.h1,{id:"segmented-control",children:"Segmented Control"}),`
`,e.jsx("div",{dangerouslySetInnerHTML:{__html:g({link:"components/segmented-control.css"}).outerHTML}}),`
`,e.jsx(n.p,{children:"Segmented Control classes can be used to create a stylized radio select group."}),`
`,e.jsxs(n.p,{children:["Segmented Control component is similar to the Button Group component, however it has a different semantic purpose. Segmented Control is intended to be used for form option selection and submission where Button Group is intended to be used for grouping related actions or navigational buttons. See ",e.jsx(n.a,{href:"?path=/docs/components-buttongroup--docs",children:"Button Group"})," for details on its usage."]}),`
`,e.jsx(n.h2,{id:"note-on-implementation",children:"Note on Implementation"}),`
`,e.jsx(n.p,{children:"This is just a styling pattern that builds on standard radio inputs and labels. Your project may need some tooling to generate this easily."}),`
`,e.jsxs(n.p,{children:["A commonly used tool for Ruby on Rails projects is ",e.jsx(n.a,{href:"https://github.com/heartcombo/simple_form",rel:"nofollow",children:"SimpleForm"}),". It allows you to build forms with pre-made inputs and allows you to make custom input types."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://github.com/RoleModel/rolemodel_rails/tree/master/lib/generators/rolemodel/simple_form",rel:"nofollow",children:"RoleModel Rails SimpleForm Generator"})," provides a generator to install a custom segmented control input that can be used with SimpleForm with Optics classes applied."]}),`
`,e.jsx(n.h2,{id:"playground",children:"Playground"}),`
`,e.jsx(t,{of:s}),`
`,e.jsx(c,{of:s}),`
`,e.jsx(n.h3,{id:"selective-imports",children:"Selective Imports"}),`
`,e.jsxs(n.p,{children:["SegmentedControl can be used as a standalone component, however, it does have a few dependencies. To see a full dependency list, see ",e.jsx(n.a,{href:"?path=/docs/overview-selective-imports--docs#dependencies",children:"Dependency Graph"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`/* Depends on */
@import '@rolemodel/optics/dist/css/core/fonts';
@import '@rolemodel/optics/dist/css/core/tokens';
@import '@rolemodel/optics/dist/css/core/base';
@import '@rolemodel/optics/dist/css/components/icon';

/* Component */
@import '@rolemodel/optics/dist/css/components/segmented-control';
`})}),`
`,e.jsx(n.h2,{id:"variations",children:"Variations"}),`
`,e.jsx(n.h3,{id:"default",children:"Default"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:".segmented-control"})," Provides styled radio select group."]}),`
`,e.jsx(t,{of:s}),`
`,e.jsx(n.h3,{id:"input",children:"Input"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:".segmented-control__input"})," can be used on the radio inputs."]}),`
`,e.jsx(n.h3,{id:"label",children:"Label"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:".segmented-control__label"})," can be used on the radio labels."]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.a,{href:"?path=/docs/components-icon--docs",children:"Icon"})," component can be used within the label as a prefix or suffix and will follow the sizing appropriately."]}),`
`,e.jsx(t,{of:m}),`
`,e.jsx(n.h3,{id:"size",children:"Size"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:".segmented-control--small"}),", ",e.jsx(n.code,{children:".segmented-control--medium"}),", ",e.jsx(n.code,{children:".segmented-control--large"})," (with large being the default) modify the size of any other segmented control class by changing the font, padding, and height to be smaller or larger."]}),`
`,e.jsx(t,{of:h}),`
`,e.jsx(n.h3,{id:"full-width",children:"Full Width"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:".segmented-control--full-width"})," can be used to make the segmented control take up the full width of its container."]}),`
`,e.jsx(t,{of:p}),`
`,e.jsx(n.h2,{id:"segmentedcontrol-api",children:"SegmentedControl API"}),`
`,e.jsx(n.p,{children:"Styles are built on css variables scoped to the segmented control."}),`
`,e.jsx(n.p,{children:"Here are the variables that can be customized."}),`
`,`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`/* Some global tokens are overridden within this component */
--op-input-inner-focus
--op-input-focus-primary

/* Public API (customizable component options) */
--_op-segmented-control-height-small
--_op-segmented-control-height-medium
--_op-segmented-control-height-large

--_op-segmented-control-font-small
--_op-segmented-control-font-medium
--_op-segmented-control-font-large

--_op-segmented-control-label-padding-small
--_op-segmented-control-label-padding-medium
--_op-segmented-control-label-padding-large

--_op-segmented-control-label-gap-small
--_op-segmented-control-label-gap-medium
--_op-segmented-control-label-gap-large

--_op-segmented-control-color-icon-default
--_op-segmented-control-color-icon-active
`})}),`
`,`
`,e.jsx(n.h2,{id:"customizing-segmented-control-styles",children:"Customizing Segmented Control styles"}),`
`,e.jsx("div",{dangerouslySetInnerHTML:{__html:r({title:"Important!",description:"These patterns represent how to customize the style of the segmentedcontrol for your project."}).outerHTML}}),`
`,e.jsxs(n.p,{children:["The segmented control classes are structured using the ",e.jsx(n.a,{href:"https://getbem.com/naming",rel:"nofollow",children:"BEM methodology"}),"."]}),`
`,e.jsxs(n.p,{children:["This allows us to define core styles on a main ",e.jsx(n.a,{href:"https://getbem.com/naming/#block",rel:"nofollow",children:"block"})," class, and use ",e.jsx(n.a,{href:"https://getbem.com/naming/#modifier",rel:"nofollow",children:"modifiers"})," to encapsulate variant styles. You can modify all segmented control behavior by overriding the ",e.jsx(n.code,{children:".segmented-control"})," class and setting any properties:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`.segmented-control {
  color: red;
}
`})}),`
`,e.jsx(n.p,{children:"If you need to override the behavior of a particular segmented control modifier, you can open the respective class and set or change properties"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`.segmented-control--small {
  color: red;
}
`})}),`
`,e.jsx(n.h2,{id:"new-segmented-control-variations",children:"New Segmented Control Variations"}),`
`,e.jsx("div",{dangerouslySetInnerHTML:{__html:r({title:"Important!",description:"These patterns represent how to create new variations of the SegmentedControl for your project."}).outerHTML}}),`
`,e.jsxs(n.p,{children:["Your application may need a variation. To add one, just follow this template. Note the double hyphen, indicating that this is a ",e.jsx(n.a,{href:"https://getbem.com/naming/#modifier",rel:"nofollow",children:"modifier"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`.segmented-control--{name} {
  background-color: white;
  color: purple;

  &.segmented-control--small {
    color: red;
  }

  &.segmented-control--medium {
    color: green;
  }

  &.segmented-control--large {
    color: blue;
  }
}
`})})]})}function S(o={}){const{wrapper:n}={...i(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(l,{...o})}):l(o)}export{S as default};
