import{i as e}from"./preload-helper-xPQekRTU.js";import{T as t,l as n,n as r,o as i,u as a}from"./blocks-uVOOWdqL.js";import{s as o}from"./chunk-LITCR56V-BmCoDI8n.js";import{t as s}from"./mdx-react-shim-eO_HyXU9.js";import{n as c,t as l}from"./sourceCodeLink-D2TI9VYO.js";import{n as u,t as d}from"./Alert-BSNiXkFA.js";import{Default as f,Disabled as p,Small as m,n as h,t as g}from"./Switch.stories-DapWKF66.js";function _(e){let a={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,...t(),...e.components};return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(n,{of:g}),`
`,(0,y.jsx)(a.h1,{id:`switch`,children:`Switch`}),`
`,(0,y.jsx)(`div`,{dangerouslySetInnerHTML:{__html:l({link:`components/switch.css`}).outerHTML}}),`
`,(0,y.jsx)(a.p,{children:`Switch classes can be used to create a stylized checkbox or boolean input.`}),`
`,(0,y.jsx)(a.h2,{id:`note-on-implementation`,children:`Note on Implementation`}),`
`,(0,y.jsx)(a.p,{children:`This is just a styling pattern that builds on standard checkbox inputs. Your project may need some tooling to generate this easily.`}),`
`,(0,y.jsxs)(a.p,{children:[`A commonly used tool for Ruby on Rails projects is `,(0,y.jsx)(a.a,{href:`https://github.com/heartcombo/simple_form`,rel:`nofollow`,children:`SimpleForm`}),`. It allows you to build forms with pre-made inputs and allows you to make custom input types.`]}),`
`,(0,y.jsxs)(a.p,{children:[(0,y.jsx)(a.a,{href:`https://github.com/RoleModel/rolemodel_rails/tree/master/lib/generators/rolemodel/simple_form`,rel:`nofollow`,children:`RoleModel Rails SimpleForm Generator`}),` provides a generator to install a custom switch input that can be used with SimpleForm with Optics classes applied.`]}),`
`,(0,y.jsx)(a.h2,{id:`playground`,children:`Playground`}),`
`,(0,y.jsx)(r,{of:f}),`
`,(0,y.jsx)(i,{of:f}),`
`,(0,y.jsx)(a.h3,{id:`selective-imports`,children:`Selective Imports`}),`
`,(0,y.jsxs)(a.p,{children:[`Switch can be used as a standalone component, however, it does have a few dependencies. To see a full dependency list, see `,(0,y.jsx)(a.a,{href:`?path=/docs/overview-selective-imports--docs#dependencies`,children:`Dependency Graph`})]}),`
`,(0,y.jsx)(a.pre,{children:(0,y.jsx)(a.code,{className:`language-css`,children:`/* Depends on */
@import '@rolemodel/optics/dist/css/core/fonts';
@import '@rolemodel/optics/dist/css/core/tokens';
@import '@rolemodel/optics/dist/css/core/base';

/* Component */
@import '@rolemodel/optics/dist/css/components/switch';
`})}),`
`,(0,y.jsx)(a.h2,{id:`variations`,children:`Variations`}),`
`,(0,y.jsx)(a.h3,{id:`default`,children:`Default`}),`
`,(0,y.jsxs)(a.p,{children:[(0,y.jsx)(a.code,{children:`.switch`}),` Provides basic styling for a checkbox or boolean input. It is intended to be used on an input element if type checkbox. It is also intended to be used within a form group. This typically would use `,(0,y.jsx)(a.code,{children:`.form-group.form-group--inline`}),` but can be used without the inline modifier.`]}),`
`,(0,y.jsx)(r,{of:f}),`
`,(0,y.jsx)(a.h3,{id:`size`,children:`Size`}),`
`,(0,y.jsxs)(a.p,{children:[(0,y.jsx)(a.code,{children:`.switch--large`}),`, `,(0,y.jsx)(a.code,{children:`.switch--small`}),` (with large being the default) modify the size of the switch.`]}),`
`,(0,y.jsx)(r,{of:m}),`
`,(0,y.jsx)(a.h3,{id:`disabled`,children:`Disabled`}),`
`,(0,y.jsxs)(a.p,{children:[(0,y.jsx)(a.code,{children:`disabled='disabled'`}),` will disable the switch.`]}),`
`,(0,y.jsx)(r,{of:p}),`
`,(0,y.jsx)(a.h2,{id:`switch-api`,children:`Switch API`}),`
`,(0,y.jsx)(a.p,{children:`The size styles are built on CSS variables scoped to the switch.`}),`
`,(0,y.jsx)(a.p,{children:`Here are the variables that can be customized:`}),`
`,`
`,(0,y.jsx)(a.pre,{children:(0,y.jsx)(a.code,{className:`language-css`,children:`--_op-switch-height-small
--_op-switch-height-large
--_op-switch-width-small
--_op-switch-width-large
--_op-switch-opacity-disabled
--_op-switch-switch-padding
`})}),`
`,`
`,(0,y.jsx)(a.h2,{id:`customizing-switch-styles`,children:`Customizing Switch styles`}),`
`,(0,y.jsx)(`div`,{dangerouslySetInnerHTML:{__html:d({title:`Important!`,description:`These patterns represent how to customize the style of the switch for your project.`}).outerHTML}}),`
`,(0,y.jsxs)(a.p,{children:[`The switch classes are structured using the `,(0,y.jsx)(a.a,{href:`https://getbem.com/naming`,rel:`nofollow`,children:`BEM methodology`}),`.`]}),`
`,(0,y.jsxs)(a.p,{children:[`This allows us to define core styles on a main `,(0,y.jsx)(a.a,{href:`https://getbem.com/naming/#block`,rel:`nofollow`,children:`block`}),` class, and use `,(0,y.jsx)(a.a,{href:`https://getbem.com/naming/#modifier`,rel:`nofollow`,children:`modifiers`}),` to encapsulate variant styles. You can modify all switch behavior by overriding the `,(0,y.jsx)(a.code,{children:`%switch-global`}),` selector and setting any properties:`]}),`
`,(0,y.jsx)(a.pre,{children:(0,y.jsx)(a.code,{className:`language-css`,children:`.switch {
}
`})}),`
`,(0,y.jsx)(a.p,{children:`If you need to override the behavior of a particular switch style, you can open the respective class and set or change properties`}),`
`,(0,y.jsx)(a.pre,{children:(0,y.jsx)(a.code,{className:`language-css`,children:`.switch--modifier {
}
`})}),`
`,(0,y.jsx)(a.h2,{id:`new-switch-variations`,children:`New Switch Variations`}),`
`,(0,y.jsx)(`div`,{dangerouslySetInnerHTML:{__html:d({title:`Important!`,description:`These patterns represent how to create new variations of the switch for your project.`}).outerHTML}}),`
`,(0,y.jsxs)(a.p,{children:[`Your application may need a variation. To add one, just follow this template. Note the double hyphen, indicating that this is a `,(0,y.jsx)(a.a,{href:`https://getbem.com/naming/#modifier`,rel:`nofollow`,children:`modifier`}),`:`]}),`
`,(0,y.jsx)(a.pre,{children:(0,y.jsx)(a.code,{className:`language-css`,children:`.switch--{name} {
}
`})})]})}function v(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,y.jsx)(n,{...e,children:(0,y.jsx)(_,{...e})}):_(e)}var y;e((()=>{y=o(),s(),a(),h(),c(),u()}))();export{v as default};