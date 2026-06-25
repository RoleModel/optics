import{i as e}from"./preload-helper-xPQekRTU.js";import{T as t,l as n,n as r,o as i,u as a}from"./blocks-uVOOWdqL.js";import{s as o}from"./chunk-LITCR56V-BmCoDI8n.js";import{t as s}from"./mdx-react-shim-eO_HyXU9.js";import{n as c,t as l}from"./sourceCodeLink-D2TI9VYO.js";import{n as u,t as d}from"./Alert-BSNiXkFA.js";import{Default as f,t as p}from"./ErrorSummary.stories-CWZYVQV3.js";import{Default as m,t as h}from"./Label.stories-jpzNONNw.js";import{Color as g,Default as _,t as v}from"./Input.stories-C0JcFFU6.js";import{Checkbox as y,Default as b,Error as x,Hint as S,IndeterminateCheckbox as C,Inline as w,NoBorder as T,Radio as E,Readonly as D,Small as O,t as k}from"./FormGroup.stories-WMNH4z8t.js";import{Default as A,t as j}from"./Select.stories-bKhMIjcK.js";import{Default as M,t as N}from"./Textarea.stories-B-iUPqFi.js";function P(e){let a={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,...t(),...e.components};return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(n,{title:`Components/Form`}),`
`,(0,I.jsx)(a.h1,{id:`form`,children:`Form`}),`
`,(0,I.jsx)(`div`,{dangerouslySetInnerHTML:{__html:l({link:`components/form.css`}).outerHTML}}),`
`,(0,I.jsxs)(a.p,{children:[`Form classes can be used on a variety of `,(0,I.jsx)(a.code,{children:`inputs`}),` or `,(0,I.jsx)(a.code,{children:`select`}),` HTML elements.
They provide consistent and composable styling that should address most applications basic needs.`]}),`
`,(0,I.jsx)(a.h2,{id:`playground`,children:`Playground`}),`
`,(0,I.jsx)(r,{of:b}),`
`,(0,I.jsx)(i,{of:b}),`
`,(0,I.jsx)(a.h3,{id:`selective-imports`,children:`Selective Imports`}),`
`,(0,I.jsxs)(a.p,{children:[`Form Controls can be used as standalone components, however, they do have a few dependencies. To see a full dependency list, see `,(0,I.jsx)(a.a,{href:`?path=/docs/overview-selective-imports--docs#dependencies`,children:`Dependency Graph`})]}),`
`,(0,I.jsx)(a.pre,{children:(0,I.jsx)(a.code,{className:`language-css`,children:`/* Depends on */
@import '@rolemodel/optics/dist/css/core/fonts';
@import '@rolemodel/optics/dist/css/core/tokens';
@import '@rolemodel/optics/dist/css/core/base';

/* Component */
@import '@rolemodel/optics/dist/css/components/form';
`})}),`
`,(0,I.jsx)(a.h2,{id:`variations`,children:`Variations`}),`
`,(0,I.jsx)(a.h3,{id:`label`,children:`Label`}),`
`,(0,I.jsxs)(a.p,{children:[(0,I.jsx)(a.code,{children:`.form-label`}),` Provides basic input label styles.`]}),`
`,(0,I.jsx)(r,{of:m}),`
`,(0,I.jsx)(a.h3,{id:`input`,children:`Input`}),`
`,(0,I.jsxs)(a.p,{children:[(0,I.jsx)(a.code,{children:`.form-control`}),` Provides basic input styles. This can be used on `,(0,I.jsx)(a.code,{children:`input`}),` HTML elements. It works across a variety of types such as `,(0,I.jsx)(a.code,{children:`text`}),`, `,(0,I.jsx)(a.code,{children:`number`}),`, `,(0,I.jsx)(a.code,{children:`password`}),`, `,(0,I.jsx)(a.code,{children:`email`}),`, `,(0,I.jsx)(a.code,{children:`phone`}),`, `,(0,I.jsx)(a.code,{children:`color`}),`, `,(0,I.jsx)(a.code,{children:`radio`}),`, and `,(0,I.jsx)(a.code,{children:`checkbox`}),`.`]}),`
`,(0,I.jsx)(r,{of:_}),`
`,(0,I.jsx)(a.h3,{id:`form-group`,children:`Form Group`}),`
`,(0,I.jsxs)(a.p,{children:[(0,I.jsx)(a.code,{children:`.form-group`}),` Composes an input and label together as a pair. It provides padding between input + label pairs in a form.`]}),`
`,(0,I.jsx)(r,{of:b}),`
`,(0,I.jsx)(a.h3,{id:`form-group-inline`,children:`Form Group Inline`}),`
`,(0,I.jsxs)(a.p,{children:[(0,I.jsx)(a.code,{children:`.form-group--inline`}),` can be added to a `,(0,I.jsx)(a.code,{children:`.form-group`}),` to display the label and input on the same line.`]}),`
`,(0,I.jsx)(r,{of:w}),`
`,(0,I.jsx)(a.h3,{id:`textarea`,children:`Textarea`}),`
`,(0,I.jsxs)(a.p,{children:[(0,I.jsx)(a.code,{children:`textarea.form-control`}),` Provides basic text area styles. This can be used on `,(0,I.jsx)(a.code,{children:`textarea`}),` HTML elements.`]}),`
`,(0,I.jsx)(r,{of:M}),`
`,(0,I.jsx)(i,{of:M}),`
`,(0,I.jsx)(a.h3,{id:`dropdown`,children:`Dropdown`}),`
`,(0,I.jsxs)(a.p,{children:[(0,I.jsx)(a.code,{children:`select.form-control`}),` Provides basic `,(0,I.jsx)(a.code,{children:`select`}),` element styles.`]}),`
`,(0,I.jsx)(r,{of:A}),`
`,(0,I.jsx)(i,{of:A}),`
`,(0,I.jsx)(a.h3,{id:`color`,children:`Color`}),`
`,(0,I.jsxs)(a.p,{children:[(0,I.jsx)(a.code,{children:`<input type='color' class='form-control'>`}),` Provides basic color input styles. This can be used on `,(0,I.jsx)(a.code,{children:`input`}),` HTML elements with a type of `,(0,I.jsx)(a.code,{children:`color`}),`.`]}),`
`,(0,I.jsx)(r,{of:g}),`
`,(0,I.jsx)(a.h3,{id:`radio`,children:`Radio`}),`
`,(0,I.jsxs)(a.p,{children:[(0,I.jsx)(a.code,{children:`<input type='radio' class='form-control'>`}),` Provides basic input of type `,(0,I.jsx)(a.code,{children:`radio`}),` styles.`]}),`
`,(0,I.jsx)(r,{of:E}),`
`,(0,I.jsx)(a.h3,{id:`checkbox`,children:`Checkbox`}),`
`,(0,I.jsxs)(a.p,{children:[(0,I.jsx)(a.code,{children:`<input type='checkbox' class='form-control'>`}),` Provides basic input of type `,(0,I.jsx)(a.code,{children:`radio`}),` styles.`]}),`
`,(0,I.jsx)(r,{of:y}),`
`,(0,I.jsx)(a.h3,{id:`error-summary`,children:`Error Summary`}),`
`,(0,I.jsxs)(a.p,{children:[(0,I.jsx)(a.code,{children:`.form-error-summary`}),` Is an error section, usually displayed above the form with a list of errors.`]}),`
`,(0,I.jsx)(r,{of:f}),`
`,(0,I.jsx)(i,{of:f}),`
`,(0,I.jsx)(a.h3,{id:`input-error`,children:`Input Error`}),`
`,(0,I.jsxs)(a.p,{children:[(0,I.jsx)(a.code,{children:`.form-group.form-group--error`}),` and `,(0,I.jsx)(a.code,{children:`.form-error`}),` are typically used on combination when there is a validation error on an input. They highlight the input in error along with the message provided.`]}),`
`,(0,I.jsx)(r,{of:x}),`
`,(0,I.jsx)(a.h3,{id:`input-hint`,children:`Input Hint`}),`
`,(0,I.jsxs)(a.p,{children:[(0,I.jsx)(a.code,{children:`.form-hint`}),` can be used inside of a `,(0,I.jsx)(a.code,{children:`.form-group`}),` to provide help text for an input.`]}),`
`,(0,I.jsx)(r,{of:S}),`
`,(0,I.jsx)(a.h3,{id:`no-border`,children:`No Border`}),`
`,(0,I.jsxs)(a.p,{children:[(0,I.jsx)(a.code,{children:`.form-control.form-control--no-border`}),` can be used to create a borderless input or select. When used in a form group with `,(0,I.jsx)(a.code,{children:`.form-control.form-group--error`}),`, the input will get a red bottom border and highlight.`]}),`
`,(0,I.jsx)(r,{of:T}),`
`,(0,I.jsx)(a.h3,{id:`size`,children:`Size`}),`
`,(0,I.jsxs)(a.p,{children:[(0,I.jsx)(a.code,{children:`.form.form-control--small`}),`, `,(0,I.jsx)(a.code,{children:`.form.form-control--medium`}),`, `,(0,I.jsx)(a.code,{children:`.form.form-control--large`}),` (with large being the default) modify the size of any element by changing the font and height to be smaller or larger.`]}),`
`,(0,I.jsx)(r,{of:O}),`
`,(0,I.jsx)(a.h3,{id:`read-only`,children:`Read Only`}),`
`,(0,I.jsxs)(a.p,{children:[`The `,(0,I.jsx)(a.code,{children:`read-only`}),` data attribute on any input with `,(0,I.jsx)(a.code,{children:`.form-control`}),` can be used to display values in a form-like way.`]}),`
`,(0,I.jsx)(r,{of:D}),`
`,(0,I.jsx)(a.h3,{id:`indeterminate-checkbox`,children:`Indeterminate Checkbox`}),`
`,(0,I.jsxs)(a.p,{children:[`Checkboxes that use the indeterminate psuedo-class with be displayed with a `,(0,I.jsx)(a.code,{children:`-`}),` inside the checkmark.
See `,(0,I.jsx)(a.a,{href:`https://developer.mozilla.org/en-US/docs/Web/CSS/:indeterminate`,rel:`nofollow`,children:`MDN's documentation`}),` for further information.`]}),`
`,(0,I.jsx)(r,{of:C}),`
`,(0,I.jsx)(a.h2,{id:`form-api`,children:`Form API`}),`
`,(0,I.jsx)(a.p,{children:`Styles are built on CSS variables scoped to the form elements.`}),`
`,(0,I.jsx)(a.p,{children:`Here are the variables that can be customized.`}),`
`,`
`,(0,I.jsx)(a.pre,{children:(0,I.jsx)(a.code,{className:`language-css`,children:`/* .form-control */
--_op-form-control-height-small
--_op-form-control-height-medium
--_op-form-control-height-large
--_op-form-control-font-small
--_op-form-control-font-medium
--_op-form-control-font-large

/* .form-control:not([type='radio'], [type='checkbox']) */
--_op-form-control-opacity-disabled

/* .form-control:is([type='radio'], [type='checkbox']) */
--_op-form-control-height-small
--_op-form-control-height-medium
--_op-form-control-height-large
`})}),`
`,`
`,(0,I.jsx)(a.h2,{id:`customizing-form-styles`,children:`Customizing Form styles`}),`
`,(0,I.jsx)(`div`,{dangerouslySetInnerHTML:{__html:d({title:`Important!`,description:`These patterns represent how to customize the style of the form for your project.`}).outerHTML}}),`
`,(0,I.jsxs)(a.p,{children:[`The form classes are structured using the `,(0,I.jsx)(a.a,{href:`https://getbem.com/naming`,rel:`nofollow`,children:`BEM methodology`}),`.`]}),`
`,(0,I.jsx)(a.p,{children:`This allows multiple classes to share the same behavior.`}),`
`,(0,I.jsxs)(a.p,{children:[(0,I.jsx)(a.code,{children:`.form-control`}),` is the class that is used to style all form controls.`]}),`
`,(0,I.jsxs)(a.p,{children:[(0,I.jsx)(a.code,{children:`.form-control:not([type='radio'], [type='checkbox'])`}),` is the selector that is used to style form controls based on the input like color, date, text, number, etc.`]}),`
`,(0,I.jsxs)(a.p,{children:[(0,I.jsx)(a.code,{children:`.form-control:is([type='radio'], [type='checkbox'])`}),` is the selector that is used to style checkboxes and radio buttons.`]}),`
`,(0,I.jsx)(a.p,{children:`You can open them up like so to modify the styles:`}),`
`,(0,I.jsx)(a.pre,{children:(0,I.jsx)(a.code,{className:`language-css`,children:`.form-control {
}
`})})]})}function F(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,I.jsx)(n,{...e,children:(0,I.jsx)(P,{...e})}):P(e)}var I;e((()=>{I=o(),s(),a(),p(),k(),v(),h(),j(),N(),c(),u()}))();export{F as default};