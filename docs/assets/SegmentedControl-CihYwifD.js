import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{i as t}from"./react-CaHZDgIm.js";import{s as n}from"./chunk-LITCR56V-BxXRPQK8.js";import{l as r,n as i,o as a,u as o}from"./blocks-nNA0HiVS.js";import{t as s}from"./mdx-react-shim-DIeO1dVO.js";import{n as c,t as l}from"./sourceCodeLink-C1o55bv0.js";import{n as u,t as d}from"./Alert-xuHYkKjH.js";import{Default as f,FullWidth as p,Size as m,WithIcons as h,n as g,t as _}from"./SegmentedControl.stories-BUqR7f5p.js";function v(e){let n={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,...t(),...e.components};return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(r,{of:_}),`
`,`
`,(0,b.jsx)(n.h1,{id:`segmented-control`,children:`Segmented Control`}),`
`,(0,b.jsx)(`div`,{dangerouslySetInnerHTML:{__html:l({link:`components/segmented-control.css`}).outerHTML}}),`
`,(0,b.jsx)(n.p,{children:`Segmented Control classes can be used to create a stylized radio select group.`}),`
`,(0,b.jsxs)(n.p,{children:[`Segmented Control component is similar to the Button Group component, however it has a different semantic purpose. Segmented Control is intended to be used for form option selection and submission where Button Group is intended to be used for grouping related actions or navigational buttons. See `,(0,b.jsx)(n.a,{href:`?path=/docs/components-buttongroup--docs`,children:`Button Group`}),` for details on its usage.`]}),`
`,(0,b.jsx)(n.h2,{id:`note-on-implementation`,children:`Note on Implementation`}),`
`,(0,b.jsx)(n.p,{children:`This is just a styling pattern that builds on standard radio inputs and labels. Your project may need some tooling to generate this easily.`}),`
`,(0,b.jsxs)(n.p,{children:[`A commonly used tool for Ruby on Rails projects is `,(0,b.jsx)(n.a,{href:`https://github.com/heartcombo/simple_form`,rel:`nofollow`,children:`SimpleForm`}),`. It allows you to build forms with pre-made inputs and allows you to make custom input types.`]}),`
`,(0,b.jsxs)(n.p,{children:[(0,b.jsx)(n.a,{href:`https://github.com/RoleModel/rolemodel_rails/tree/master/lib/generators/rolemodel/simple_form`,rel:`nofollow`,children:`RoleModel Rails SimpleForm Generator`}),` provides a generator to install a custom segmented control input that can be used with SimpleForm with Optics classes applied.`]}),`
`,(0,b.jsx)(n.h2,{id:`playground`,children:`Playground`}),`
`,(0,b.jsx)(i,{of:f}),`
`,(0,b.jsx)(a,{of:f}),`
`,(0,b.jsx)(n.h3,{id:`selective-imports`,children:`Selective Imports`}),`
`,(0,b.jsxs)(n.p,{children:[`SegmentedControl can be used as a standalone component, however, it does have a few dependencies. To see a full dependency list, see `,(0,b.jsx)(n.a,{href:`?path=/docs/overview-selective-imports--docs#dependencies`,children:`Dependency Graph`})]}),`
`,(0,b.jsx)(n.pre,{children:(0,b.jsx)(n.code,{className:`language-css`,children:`/* Depends on */
@import '@rolemodel/optics/dist/css/core/fonts';
@import '@rolemodel/optics/dist/css/core/tokens';
@import '@rolemodel/optics/dist/css/core/base';
@import '@rolemodel/optics/dist/css/components/icon';

/* Component */
@import '@rolemodel/optics/dist/css/components/segmented-control';
`})}),`
`,(0,b.jsx)(n.h2,{id:`variations`,children:`Variations`}),`
`,(0,b.jsx)(n.h3,{id:`default`,children:`Default`}),`
`,(0,b.jsxs)(n.p,{children:[(0,b.jsx)(n.code,{children:`.segmented-control`}),` Provides styled radio select group.`]}),`
`,(0,b.jsx)(i,{of:f}),`
`,(0,b.jsx)(n.h3,{id:`input`,children:`Input`}),`
`,(0,b.jsxs)(n.p,{children:[(0,b.jsx)(n.code,{children:`.segmented-control__input`}),` can be used on the radio inputs.`]}),`
`,(0,b.jsx)(n.h3,{id:`label`,children:`Label`}),`
`,(0,b.jsxs)(n.p,{children:[(0,b.jsx)(n.code,{children:`.segmented-control__label`}),` can be used on the radio labels.`]}),`
`,(0,b.jsxs)(n.p,{children:[`The `,(0,b.jsx)(n.a,{href:`?path=/docs/components-icon--docs`,children:`Icon`}),` component can be used within the label as a prefix or suffix and will follow the sizing appropriately.`]}),`
`,(0,b.jsx)(i,{of:h}),`
`,(0,b.jsx)(n.h3,{id:`size`,children:`Size`}),`
`,(0,b.jsxs)(n.p,{children:[(0,b.jsx)(n.code,{children:`.segmented-control--small`}),`, `,(0,b.jsx)(n.code,{children:`.segmented-control--medium`}),`, `,(0,b.jsx)(n.code,{children:`.segmented-control--large`}),` (with large being the default) modify the size of any other segmented control class by changing the font, padding, and height to be smaller or larger.`]}),`
`,(0,b.jsx)(i,{of:m}),`
`,(0,b.jsx)(n.h3,{id:`full-width`,children:`Full Width`}),`
`,(0,b.jsxs)(n.p,{children:[(0,b.jsx)(n.code,{children:`.segmented-control--full-width`}),` can be used to make the segmented control take up the full width of its container.`]}),`
`,(0,b.jsx)(i,{of:p}),`
`,(0,b.jsx)(n.h2,{id:`segmentedcontrol-api`,children:`SegmentedControl API`}),`
`,(0,b.jsx)(n.p,{children:`Styles are built on css variables scoped to the segmented control.`}),`
`,(0,b.jsx)(n.p,{children:`Here are the variables that can be customized.`}),`
`,`
`,(0,b.jsx)(n.pre,{children:(0,b.jsx)(n.code,{className:`language-css`,children:`/* Some global tokens are overridden within this component */
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
`,(0,b.jsx)(n.h2,{id:`customizing-segmented-control-styles`,children:`Customizing Segmented Control styles`}),`
`,(0,b.jsx)(`div`,{dangerouslySetInnerHTML:{__html:d({title:`Important!`,description:`These patterns represent how to customize the style of the segmentedcontrol for your project.`}).outerHTML}}),`
`,(0,b.jsxs)(n.p,{children:[`The segmented control classes are structured using the `,(0,b.jsx)(n.a,{href:`https://getbem.com/naming`,rel:`nofollow`,children:`BEM methodology`}),`.`]}),`
`,(0,b.jsxs)(n.p,{children:[`This allows us to define core styles on a main `,(0,b.jsx)(n.a,{href:`https://getbem.com/naming/#block`,rel:`nofollow`,children:`block`}),` class, and use `,(0,b.jsx)(n.a,{href:`https://getbem.com/naming/#modifier`,rel:`nofollow`,children:`modifiers`}),` to encapsulate variant styles. You can modify all segmented control behavior by overriding the `,(0,b.jsx)(n.code,{children:`.segmented-control`}),` class and setting any properties:`]}),`
`,(0,b.jsx)(n.pre,{children:(0,b.jsx)(n.code,{className:`language-css`,children:`.segmented-control {
  color: red;
}
`})}),`
`,(0,b.jsx)(n.p,{children:`If you need to override the behavior of a particular segmented control modifier, you can open the respective class and set or change properties`}),`
`,(0,b.jsx)(n.pre,{children:(0,b.jsx)(n.code,{className:`language-css`,children:`.segmented-control--small {
  color: red;
}
`})}),`
`,(0,b.jsx)(n.h2,{id:`new-segmented-control-variations`,children:`New Segmented Control Variations`}),`
`,(0,b.jsx)(`div`,{dangerouslySetInnerHTML:{__html:d({title:`Important!`,description:`These patterns represent how to create new variations of the SegmentedControl for your project.`}).outerHTML}}),`
`,(0,b.jsxs)(n.p,{children:[`Your application may need a variation. To add one, just follow this template. Note the double hyphen, indicating that this is a `,(0,b.jsx)(n.a,{href:`https://getbem.com/naming/#modifier`,rel:`nofollow`,children:`modifier`}),`:`]}),`
`,(0,b.jsx)(n.pre,{children:(0,b.jsx)(n.code,{className:`language-css`,children:`.segmented-control--{name} {
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
`})})]})}function y(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,b.jsx)(n,{...e,children:(0,b.jsx)(v,{...e})}):v(e)}var b;e((()=>{b=n(),s(),o(),g(),c(),u()}))();export{y as default};