import{i as e}from"./preload-helper-xPQekRTU.js";import{T as t,l as n,n as r,o as i,u as a}from"./blocks-uVOOWdqL.js";import{s as o}from"./chunk-LITCR56V-BmCoDI8n.js";import{t as s}from"./mdx-react-shim-eO_HyXU9.js";import{n as c,t as l}from"./sourceCodeLink-D2TI9VYO.js";import{n as u,t as d}from"./Alert-BSNiXkFA.js";import{Danger as f,Dismissible as p,Filled as m,Info as h,Muted as g,NoIcon as _,NoTitle as v,Notice as y,Warning as b,n as x,t as S}from"./Alert.stories-D_UxUVxf.js";var C,w=e((()=>{C=``+new URL(`flash-IPyOfufy.gif`,import.meta.url).href}));function T(e){let a={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,...t(),...e.components};return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(n,{of:S}),`
`,(0,D.jsx)(a.h1,{id:`alert`,children:`Alert`}),`
`,(0,D.jsx)(`div`,{dangerouslySetInnerHTML:{__html:l({link:`components/alert.css`}).outerHTML}}),`
`,(0,D.jsx)(a.p,{children:`Alert classes can be used to create a highlighted message or callout in your application.
These could be as banners for global application messages, or an error message within a section of your app.`}),`
`,(0,D.jsx)(a.h2,{id:`playground`,children:`Playground`}),`
`,(0,D.jsx)(r,{of:b}),`
`,(0,D.jsx)(i,{of:b}),`
`,(0,D.jsx)(a.h3,{id:`selective-imports`,children:`Selective Imports`}),`
`,(0,D.jsxs)(a.p,{children:[`Alert can be used as a standalone component, however, it does have a few dependencies. To see a full dependency list, see `,(0,D.jsx)(a.a,{href:`?path=/docs/overview-selective-imports--docs#dependencies`,children:`Dependency Graph`})]}),`
`,(0,D.jsx)(a.pre,{children:(0,D.jsx)(a.code,{className:`language-css`,children:`/* Depends on */
@import '@rolemodel/optics/dist/css/core/fonts';
@import '@rolemodel/optics/dist/css/core/tokens';
@import '@rolemodel/optics/dist/css/core/base';
@import '@rolemodel/optics/dist/css/components/icon';

/* Component */
@import '@rolemodel/optics/dist/css/components/alert';
`})}),`
`,(0,D.jsx)(a.h2,{id:`variations`,children:`Variations`}),`
`,(0,D.jsx)(a.h3,{id:`warning`,children:`Warning`}),`
`,(0,D.jsxs)(a.p,{children:[(0,D.jsx)(a.code,{children:`.alert--warning`}),` Provides a warning styled message.`]}),`
`,(0,D.jsx)(r,{of:b}),`
`,(0,D.jsx)(a.h3,{id:`danger`,children:`Danger`}),`
`,(0,D.jsxs)(a.p,{children:[(0,D.jsx)(a.code,{children:`.alert--danger`}),` Provides a danger styled message.`]}),`
`,(0,D.jsxs)(a.p,{children:[(0,D.jsx)(a.code,{children:`.alert--alert`}),` is an alias for `,(0,D.jsx)(a.code,{children:`.alert--danger`}),`. Since RoleModel commonly uses `,(0,D.jsx)(a.a,{href:`https://rubyonrails.org/`,rel:`nofollow`,children:`Rails`}),` to develop projects, adding this alias allows this to be used for flash messages without having to change the default in rails. `,(0,D.jsx)(a.a,{href:`https://github.com/heartcombo/devise`,rel:`nofollow`,children:`Devise`}),` is also commonly used and cannot easily be configured away from this.`]}),`
`,(0,D.jsx)(r,{of:f}),`
`,(0,D.jsx)(a.h3,{id:`info`,children:`Info`}),`
`,(0,D.jsxs)(a.p,{children:[(0,D.jsx)(a.code,{children:`.alert--info`}),` Provides an info styled message.`]}),`
`,(0,D.jsx)(r,{of:h}),`
`,(0,D.jsx)(a.h3,{id:`notice`,children:`Notice`}),`
`,(0,D.jsxs)(a.p,{children:[(0,D.jsx)(a.code,{children:`.alert--notice`}),` Provides a notice styled message.`]}),`
`,(0,D.jsx)(r,{of:y}),`
`,(0,D.jsx)(a.h3,{id:`muted`,children:`Muted`}),`
`,(0,D.jsxs)(a.p,{children:[(0,D.jsx)(a.code,{children:`.alert--muted`}),` can be applied to any of the above alerts to change the coloring to a muted version of that color.`]}),`
`,(0,D.jsx)(r,{of:g}),`
`,(0,D.jsx)(a.h3,{id:`filled`,children:`Filled`}),`
`,(0,D.jsxs)(a.p,{children:[(0,D.jsx)(a.code,{children:`.alert--filled`}),` can be applied to any of the above alerts to change the coloring to a filled version of that color.`]}),`
`,(0,D.jsx)(r,{of:m}),`
`,(0,D.jsx)(a.h3,{id:`no-icon`,children:`No Icon`}),`
`,(0,D.jsx)(a.p,{children:`The icon is optional.`}),`
`,(0,D.jsx)(r,{of:_}),`
`,(0,D.jsx)(a.h3,{id:`no-title`,children:`No Title`}),`
`,(0,D.jsx)(a.p,{children:`The title is optional.`}),`
`,(0,D.jsx)(r,{of:v}),`
`,(0,D.jsx)(a.h3,{id:`dismissible`,children:`Dismissible`}),`
`,(0,D.jsx)(a.p,{children:`If your application needs to allow dismissing these alerts, you can add a second icon/button after the messages section and add functionality via JS.`}),`
`,(0,D.jsx)(r,{of:p}),`
`,(0,D.jsx)(a.h3,{id:`as-a-flash-or-toast-message`,children:`As a Flash or Toast Message`}),`
`,(0,D.jsxs)(a.p,{children:[`The alert component can also be used as an animated notification message by adding `,(0,D.jsx)(a.code,{children:`.alert--flash`}),` to the top level. This supports all the alert variations and styles.`]}),`
`,(0,D.jsx)(`img`,{src:C,alt:`Flash`}),`
`,(0,D.jsx)(a.h2,{id:`alert-structure`,children:`Alert Structure`}),`
`,(0,D.jsx)(a.p,{children:`All alerts use the following structure to construct the component.`}),`
`,(0,D.jsx)(a.p,{children:`The muted or filled classes would be added at the top level.
icon, title, and the final (dismissible close) icon are all optional.`}),`
`,(0,D.jsx)(a.pre,{children:(0,D.jsx)(a.code,{className:`language-html`,children:`<div class='alert alert--danger'>
  <span class='alert__icon material-symbols-outlined'>error</div>
  <div class='alert__messages'>
    <div class='alert__title'>Error</div>
    <div class='alert__description'>Your message</div>
    <div class='alert__description'>Another message if you need</div>
  </div>
  <span class='alert__icon material-symbols-outlined'>close</div>
</div>
`})}),`
`,(0,D.jsx)(a.h2,{id:`customizing-alert-styles`,children:`Customizing alert styles`}),`
`,(0,D.jsx)(`div`,{dangerouslySetInnerHTML:{__html:d({title:`Important!`,description:`These patterns represent how to customize the style of the alert for your project.`}).outerHTML}}),`
`,(0,D.jsxs)(a.p,{children:[`The alert classes are structured using the `,(0,D.jsx)(a.a,{href:`https://getbem.com/naming`,rel:`nofollow`,children:`BEM methodology`}),`.`]}),`
`,(0,D.jsxs)(a.p,{children:[`This allows us to define core styles on a main `,(0,D.jsx)(a.a,{href:`https://getbem.com/naming/#block`,rel:`nofollow`,children:`block`}),` class, and use `,(0,D.jsx)(a.a,{href:`https://getbem.com/naming/#modifier`,rel:`nofollow`,children:`modifiers`}),` to encapsulate variant styles. You can modify all alert behavior by overriding the `,(0,D.jsx)(a.code,{children:`.alert`}),` selector and setting any properties:`]}),`
`,(0,D.jsx)(a.pre,{children:(0,D.jsx)(a.code,{className:`language-css`,children:`.alert {
  border-radius: var(--op-radius-large);
}
`})}),`
`,(0,D.jsx)(a.p,{children:`If you need to override the behavior of a particular alert style, you can open the respective class and set or change properties.`}),`
`,(0,D.jsx)(a.pre,{children:(0,D.jsx)(a.code,{className:`language-css`,children:`/* This will only affect the warning alert, but not danger, info, or notice. */
.alert--warning {
  background-color: red;
  color: white;
}
`})}),`
`,(0,D.jsx)(a.h2,{id:`new-alert-variations`,children:`New Alert Variations`}),`
`,(0,D.jsx)(`div`,{dangerouslySetInnerHTML:{__html:d({title:`Important!`,description:`These patterns represent how to create new variations of the alert for your project.`}).outerHTML}}),`
`,(0,D.jsxs)(a.p,{children:[`Your application may need a variation. To add one, just follow this template. Note the double hyphen, indicating that this is a `,(0,D.jsx)(a.a,{href:`https://getbem.com/naming/#modifier`,rel:`nofollow`,children:`modifier`}),`:`]}),`
`,(0,D.jsx)(a.pre,{children:(0,D.jsx)(a.code,{className:`language-css`,children:`.alert--{name} {
  background-color:
  box-shadow:
  color:

  .alert__title {
    color:
  }

  &.alert--muted {
    background-color:
    box-shadow:
    color:

    .alert__title {
      color:
    }
  }

  &.alert--filled {
    background-color:
    box-shadow:
    color:

    .alert__title {
      color:
    }
  }
}
`})}),`
`,(0,D.jsx)(a.pre,{children:(0,D.jsx)(a.code,{className:`language-css`,children:`.alert--purple {
  background-color: verylightpurple;
  box-shadow: var(--op-border-all) purple;
  color: purple;

  .alert__title {
    color: darkpurple;
  }

  &.alert--muted {
    background-color: lightpurple;
    box-shadow: none;
    color: white;

    .alert__title {
      color: purple;
    }
  }

  &.alert--filled {
    background-color: purple;
    box-shadow: none;
    color: white;

    .alert__title {
      color: darkpurple;
    }
  }
}
`})})]})}function E(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,D.jsx)(n,{...e,children:(0,D.jsx)(T,{...e})}):T(e)}var D;e((()=>{D=o(),s(),a(),x(),w(),c(),u()}))();export{E as default};