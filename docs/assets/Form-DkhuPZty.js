import{j as e}from"./jsx-runtime-BudFbCqj.js";import{u as a}from"./index-CZ7_UIou.js";import{M as h,C as n,d as s}from"./index-BO8JBeAl.js";import{Default as i}from"./ErrorSummary.stories-DwniCBHm.js";import{Default as t,Inline as p,Radio as m,Checkbox as x,Error as j,Hint as f,NoBorder as u,Small as b,Readonly as y,IndeterminateCheckbox as g}from"./FormGroup.stories-CqiW-2Xu.js";import{Default as v,Color as w}from"./Input.stories-8lvMi5At.js";import{Default as C}from"./Label.stories-CgjTHQzH.js";import{Default as l}from"./Select.stories-C5OqAWyz.js";import{Default as c}from"./Textarea.stories-B270CN2T.js";import{c as k}from"./sourceCodeLink-Chh3FteF.js";import{c as T}from"./Alert-lmCd5s8U.js";import"./iframe-B89zdOr6.js";import"../sb-preview/runtime.js";import"./index-B5rfWaSj.js";import"./index-DrFu-skq.js";import"./Form-Bc6eV-nO.js";import"./Button-CoyIamir.js";import"./Icon-D9QrNi_D.js";function d(r){const o={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...a(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(h,{title:"Content Components/Form"}),`
`,e.jsx(o.h1,{id:"form",children:"Form"}),`
`,e.jsx("div",{dangerouslySetInnerHTML:{__html:k({link:"components/form.scss"}).outerHTML}}),`
`,e.jsxs(o.p,{children:["Form classes can be used on a variety of ",e.jsx(o.code,{children:"inputs"})," or ",e.jsx(o.code,{children:"select"}),` HTML elements.
They provide consistent and composable styling that should address most applications basic needs.`]}),`
`,e.jsx(o.h2,{id:"playground",children:"Playground"}),`
`,e.jsx(n,{of:t}),`
`,e.jsx(s,{of:t}),`
`,e.jsx(o.h3,{id:"selective-imports",children:"Selective Imports"}),`
`,e.jsxs(o.p,{children:["Form Controls can be used as standalone components, however, they do have a few dependencies. To see a full dependency list, see ",e.jsx(o.a,{href:"?path=/docs/overview-selective-imports--docs#dependencies",children:"Dependency Graph"})]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-css",children:`// Depends on
@import '@rolemodel/optics/dist/scss/core/tokens';
@import '@rolemodel/optics/dist/scss/core/base';

// Component
@import '@rolemodel/optics/dist/scss/components/form';
`})}),`
`,e.jsx(o.h2,{id:"variations",children:"Variations"}),`
`,e.jsx(o.h3,{id:"label",children:"Label"}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:".form-label"})," Provides basic input label styles."]}),`
`,e.jsx(n,{of:C}),`
`,e.jsx(o.h3,{id:"input",children:"Input"}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:".form-control"})," Provides basic input styles. This can be used on ",e.jsx(o.code,{children:"input"})," HTML elements. It works across a variety of types such as ",e.jsx(o.code,{children:"text"}),", ",e.jsx(o.code,{children:"number"}),", ",e.jsx(o.code,{children:"password"}),", ",e.jsx(o.code,{children:"email"}),", ",e.jsx(o.code,{children:"phone"}),", ",e.jsx(o.code,{children:"color"}),", ",e.jsx(o.code,{children:"radio"}),", and ",e.jsx(o.code,{children:"checkbox"}),"."]}),`
`,e.jsx(n,{of:v}),`
`,e.jsx(o.h3,{id:"form-group",children:"Form Group"}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:".form-group"})," Composes an input and label together as a pair. It provides padding between input + label pairs in a form."]}),`
`,e.jsx(n,{of:t}),`
`,e.jsx(o.h3,{id:"form-group-inline",children:"Form Group Inline"}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:".form-group--inline"})," can be added to a ",e.jsx(o.code,{children:".form-group"})," to display the label and input on the same line."]}),`
`,e.jsx(n,{of:p}),`
`,e.jsx(o.h3,{id:"textarea",children:"Textarea"}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"textarea.form-control"})," Provides basic text area styles. This can be used on ",e.jsx(o.code,{children:"textarea"})," HTML elements."]}),`
`,e.jsx(n,{of:c}),`
`,e.jsx(s,{of:c}),`
`,e.jsx(o.h3,{id:"dropdown",children:"Dropdown"}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"select.form-control"})," Provides basic ",e.jsx(o.code,{children:"select"})," element styles."]}),`
`,e.jsx(n,{of:l}),`
`,e.jsx(s,{of:l}),`
`,e.jsx(o.h3,{id:"color",children:"Color"}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"<input type='color' class='form-control'>"})," Provides basic color input styles. This can be used on ",e.jsx(o.code,{children:"input"})," HTML elements with a type of ",e.jsx(o.code,{children:"color"}),"."]}),`
`,e.jsx(n,{of:w}),`
`,e.jsx(o.h3,{id:"radio",children:"Radio"}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"<input type='radio' class='form-control'>"})," Provides basic input of type ",e.jsx(o.code,{children:"radio"})," styles."]}),`
`,e.jsx(n,{of:m}),`
`,e.jsx(o.h3,{id:"checkbox",children:"Checkbox"}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"<input type='checkbox' class='form-control'>"})," Provides basic input of type ",e.jsx(o.code,{children:"radio"})," styles."]}),`
`,e.jsx(n,{of:x}),`
`,e.jsx(o.h3,{id:"error-summary",children:"Error Summary"}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:".form-error-summary"})," Is an error section, usually displayed above the form with a list of errors."]}),`
`,e.jsx(n,{of:i}),`
`,e.jsx(s,{of:i}),`
`,e.jsx(o.h3,{id:"input-error",children:"Input Error"}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:".form-group--error"})," and ",e.jsx(o.code,{children:".form-error"})," are typically used on combination when there is a validation error on an input. They highlight the input in error along with the message provided."]}),`
`,e.jsx(n,{of:j}),`
`,e.jsx(o.h3,{id:"input-hint",children:"Input Hint"}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:".form-hint"})," can be used inside of a ",e.jsx(o.code,{children:".form-group"})," to provide help text for an input."]}),`
`,e.jsx(n,{of:f}),`
`,e.jsx(o.h3,{id:"no-border",children:"No Border"}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:".form-control--no-border"})," can be used to create a borderless input or select. When used in a form group with ",e.jsx(o.code,{children:".form-group--error"}),", the input will get a red bottom border and highlight."]}),`
`,e.jsx(n,{of:u}),`
`,e.jsx(o.h3,{id:"size",children:"Size"}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:".form-control--small"}),", ",e.jsx(o.code,{children:".form-control--medium"}),", ",e.jsx(o.code,{children:".form-control--large"})," (with large being the default) modify the size of any element by changing the font and height to be smaller or larger."]}),`
`,e.jsx(n,{of:b}),`
`,e.jsx(o.h3,{id:"read-only",children:"Read Only"}),`
`,e.jsxs(o.p,{children:["The ",e.jsx(o.code,{children:"read-only"})," data attribute on any input with ",e.jsx(o.code,{children:".form-control"})," can be used to display values in a form-like way."]}),`
`,e.jsx(n,{of:y}),`
`,e.jsx(o.h3,{id:"indeterminate-checkbox",children:"Indeterminate Checkbox"}),`
`,e.jsxs(o.p,{children:["Checkboxes that use the indeterminate psuedo-class with be displayed with a ",e.jsx(o.code,{children:"-"}),` inside the checkmark.
See `,e.jsx(o.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/:indeterminate",rel:"nofollow",children:"MDN's documentation"})," for further information."]}),`
`,e.jsx(n,{of:g}),`
`,e.jsx(o.h2,{id:"form-api",children:"Form API"}),`
`,e.jsx(o.p,{children:"Styles are built on CSS variables scoped to the form elements."}),`
`,e.jsx(o.p,{children:"Here are the variables that can be customized."}),`
`,`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-css",children:`// form-control-global
--_op-form-control-height-small
--_op-form-control-height-medium
--_op-form-control-height-large
--_op-form-control-font-small
--_op-form-control-font-medium
--_op-form-control-font-large

// form-control-input-global
--_op-form-control-opacity-disabled

// form-control-inline-global
--_op-form-control-height-small
--_op-form-control-height-medium
--_op-form-control-height-large
`})}),`
`,`
`,e.jsx(o.h2,{id:"customizing-form-styles",children:"Customizing Form styles"}),`
`,e.jsx("div",{dangerouslySetInnerHTML:{__html:T({title:"Important!",description:"These patterns represent how to customize the style of the form for your project."}).outerHTML}}),`
`,e.jsxs(o.p,{children:["The form classes are built on a ",e.jsx(o.a,{href:"https://sass-lang.com/documentation/style-rules/placeholder-selectors",rel:"nofollow",children:"SASS placeholder selector"})]}),`
`,e.jsx(o.p,{children:"This allows multiple classes to share the same behavior."}),`
`,e.jsx(o.p,{children:"Form Controls use multiple placeholder selectors to style all types of controls."}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"%form-control-global"})," is the placeholder selector that is used to style all form controls."]}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"%form-control-input-global"})," is the placeholder selector that is used to style form controls based on the input like color, date, text, number, etc."]}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"%form-control-inline-global"})," is the placeholder selector that is used to style checkboxes and radio buttons."]}),`
`,e.jsx(o.p,{children:"You can open them up like so to modify the styles:"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-css",children:`%form-control-global {
}
`})})]})}function W(r={}){const{wrapper:o}={...a(),...r.components};return o?e.jsx(o,{...r,children:e.jsx(d,{...r})}):d(r)}export{W as default};
