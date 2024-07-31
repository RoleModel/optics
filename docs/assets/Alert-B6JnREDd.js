import{j as e}from"./jsx-runtime-wV-HqYdn.js";import{u as t}from"./index-DCjXWHk2.js";import{M as i,C as s,d as c}from"./index-BtfEXyyO.js";import{A as d,W as r,D as h,I as p,N as m,M as u,F as x,a as g,b as j,c as f}from"./Alert.stories-zizVmHu1.js";import{c as b}from"./sourceCodeLink-Chh3FteF.js";import{c as l}from"./Alert-93ao7bSE.js";import"./iframe-aIM7v9wE.js";import"../sb-preview/runtime.js";import"./index-B5rfWaSj.js";import"./index-DrFu-skq.js";import"./Button-CoyIamir.js";import"./Icon-D9QrNi_D.js";const v=""+new URL("flash-IPyOfufy.gif",import.meta.url).href;function a(o){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...t(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:d}),`
`,e.jsx(n.h1,{id:"alert",children:"Alert"}),`
`,e.jsx("div",{dangerouslySetInnerHTML:{__html:b({link:"components/alert.scss"}).outerHTML}}),`
`,e.jsx(n.p,{children:`Alert classes can be used to create a highlighted message or callout in your application.
These could be as banners for global application messages, or an error message within a section of your app.`}),`
`,e.jsx(n.h2,{id:"playground",children:"Playground"}),`
`,e.jsx(s,{of:r}),`
`,e.jsx(c,{of:r}),`
`,e.jsx(n.h3,{id:"selective-imports",children:"Selective Imports"}),`
`,e.jsxs(n.p,{children:["Alert can be used as a standalone component, however, it does have a few dependencies. To see a full dependency list, see ",e.jsx(n.a,{href:"?path=/docs/overview-selective-imports--docs#dependencies",children:"Dependency Graph"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`// Depends on
@import '@rolemodel/optics/dist/scss/core/tokens';
@import '@rolemodel/optics/dist/scss/core/base';
@import '@rolemodel/optics/dist/scss/components/icon';

// Component
@import '@rolemodel/optics/dist/scss/components/alert';
`})}),`
`,e.jsx(n.h2,{id:"variations",children:"Variations"}),`
`,e.jsx(n.h3,{id:"warning",children:"Warning"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:".alert-warning"})," Provides a warning styled message"]}),`
`,e.jsx(s,{of:r}),`
`,e.jsx(n.h3,{id:"danger",children:"Danger"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:".alert-danger"})," Provides a danger styled message"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:".alert-alert"})," is an alias for ",e.jsx(n.code,{children:".alert-danger"}),". Since RoleModel commonly uses ",e.jsx(n.a,{href:"https://rubyonrails.org/",rel:"nofollow",children:"Rails"})," to develop projects, adding this alias allows this to be used for flash messages without having to change the default in rails. ",e.jsx(n.a,{href:"https://github.com/heartcombo/devise",rel:"nofollow",children:"Devise"})," is also commonly used and cannot easily be configured away from this."]}),`
`,e.jsx(s,{of:h}),`
`,e.jsx(n.h3,{id:"info",children:"Info"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:".alert-info"})," Provides an info styled message"]}),`
`,e.jsx(s,{of:p}),`
`,e.jsx(n.h3,{id:"notice",children:"Notice"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:".alert-notice"})," Provides a notice styled message"]}),`
`,e.jsx(s,{of:m}),`
`,e.jsx(n.h3,{id:"muted",children:"Muted"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:".alert--muted"})," can be applied to any of the above alerts to change the coloring to a muted version of that color."]}),`
`,e.jsx(s,{of:u}),`
`,e.jsx(n.h3,{id:"filled",children:"Filled"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:".alert--filled"})," can be applied to any of the above alerts to change the coloring to a filled version of that color."]}),`
`,e.jsx(s,{of:x}),`
`,e.jsx(n.h3,{id:"no-icon",children:"No Icon"}),`
`,e.jsx(n.p,{children:"The icon is optional"}),`
`,e.jsx(s,{of:g}),`
`,e.jsx(n.h3,{id:"no-title",children:"No Title"}),`
`,e.jsx(n.p,{children:"The title is optional"}),`
`,e.jsx(s,{of:j}),`
`,e.jsx(n.h3,{id:"dismissible",children:"Dismissible"}),`
`,e.jsx(n.p,{children:"If your application needs to allow dismissing these alerts, you can add a second icon/button after the messages section and add functionality via JS"}),`
`,e.jsx(s,{of:f}),`
`,e.jsx(n.h3,{id:"as-a-flash-or-toast-message",children:"As a Flash or Toast Message"}),`
`,e.jsxs(n.p,{children:["The alert component can also be used as an animated notification message by adding ",e.jsx(n.code,{children:".alert--flash"})," to the top level. This supports all the alert variations and styles."]}),`
`,e.jsx("img",{src:v,alt:"Flash"}),`
`,e.jsx(n.h2,{id:"alert-structure",children:"Alert Structure"}),`
`,e.jsx(n.p,{children:"All alerts use the following structure to construct the component."}),`
`,e.jsx(n.p,{children:`The muted or filled classes would be added at the top level.
icon, title, and the final (dismissible close) icon are all optional.`}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<div class='alert-danger'>
  <span class='alert__icon material-symbols-outlined'>error</div>
  <div class='alert__messages'>
    <div class='alert__title'>Error</div>
    <div class='alert__description'>Your message</div>
    <div class='alert__description'>Another message if you need</div>
  </div>
  <span class='alert__icon material-symbols-outlined'>close</div>
</div>
`})}),`
`,e.jsx(n.h2,{id:"customizing-alert-styles",children:"Customizing alert styles"}),`
`,e.jsx("div",{dangerouslySetInnerHTML:{__html:l({title:"Important!",description:"These patterns represent how to customize the style of the alert for your project."}).outerHTML}}),`
`,e.jsxs(n.p,{children:["The alert classes are built on a ",e.jsx(n.a,{href:"https://sass-lang.com/documentation/style-rules/placeholder-selectors",rel:"nofollow",children:"sass placeholder selector"})]}),`
`,e.jsxs(n.p,{children:["This allows multiple alert classes to share the same behavior. You can modify all alerts behavior by overriding the ",e.jsx(n.code,{children:"%alert-global"})," placeholder selector and setting any properties:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`%alert-global {
  border-radius: var(--op-radius-large);
}
`})}),`
`,e.jsx(n.p,{children:"If you need to override the behavior of a particular alert style, you can open the respective class and set or change properties"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`// This will only affect the warning alert, but not danger, info, or notice.
.alert-warning {
  background-color: red;
  color: white;
}
`})}),`
`,e.jsx(n.h2,{id:"new-alert-variations",children:"New Alert Variations"}),`
`,e.jsx("div",{dangerouslySetInnerHTML:{__html:l({title:"Important!",description:"These patterns represent how to create new variations of the alert for your project."}).outerHTML}}),`
`,e.jsx(n.p,{children:"Your application may need a custom alert. To add one, just follow this template:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`.alert-{name} {
  @extend %alert-global;

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
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`.alert-purple {
  @extend %alert-global;

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
`})})]})}function S(o={}){const{wrapper:n}={...t(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(a,{...o})}):a(o)}export{S as default};
