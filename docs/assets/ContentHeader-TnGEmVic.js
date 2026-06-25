import{i as e}from"./preload-helper-xPQekRTU.js";import{T as t,l as n,n as r,o as i,u as a}from"./blocks-uVOOWdqL.js";import{s as o}from"./chunk-LITCR56V-BmCoDI8n.js";import{t as s}from"./mdx-react-shim-eO_HyXU9.js";import{n as c,t as l}from"./sourceCodeLink-D2TI9VYO.js";import{n as u,t as d}from"./Alert-BSNiXkFA.js";import{Default as f,GitHub as p,Simple as m,WithAside as h,WithContext as g,WithSubline as _,n as v,t as y}from"./ContentHeader.stories-BeTu2t9R.js";function b(e){let a={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,...t(),...e.components};return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(n,{of:y}),`
`,(0,S.jsx)(a.h1,{id:`content-header`,children:`Content Header`}),`
`,(0,S.jsx)(`div`,{dangerouslySetInnerHTML:{__html:l({link:`components/content-header.css`}).outerHTML}}),`
`,(0,S.jsx)(a.p,{children:`Content Header classes can be used to denote a page or content section header of an application. They provide simple styles to provide context and actions for a page or section within your interface.`}),`
`,(0,S.jsx)(a.h2,{id:`playground`,children:`Playground`}),`
`,(0,S.jsx)(r,{of:f}),`
`,(0,S.jsx)(i,{of:f}),`
`,(0,S.jsx)(a.h3,{id:`selective-imports`,children:`Selective Imports`}),`
`,(0,S.jsxs)(a.p,{children:[`Content Header can be used as a standalone component, however, it does have a few dependencies. To see a full dependency list, see `,(0,S.jsx)(a.a,{href:`?path=/docs/overview-selective-imports--docs#dependencies`,children:`Dependency Graph`})]}),`
`,(0,S.jsx)(a.pre,{children:(0,S.jsx)(a.code,{className:`language-css`,children:`/* Depends on */
@import '@rolemodel/optics/dist/css/core/fonts';
@import '@rolemodel/optics/dist/css/core/tokens';
@import '@rolemodel/optics/dist/css/core/base';

/* Component */
@import '@rolemodel/optics/dist/css/components/content-header';
`})}),`
`,(0,S.jsx)(a.h2,{id:`variations`,children:`Variations`}),`
`,(0,S.jsx)(a.h3,{id:`default`,children:`Default`}),`
`,(0,S.jsxs)(a.p,{children:[(0,S.jsx)(a.code,{children:`.content-header`}),` Provides basic content header styles.`]}),`
`,(0,S.jsxs)(a.p,{children:[(0,S.jsx)(a.code,{children:`.context-header__details`}),` provides a section for the title, context, and subline.`]}),`
`,(0,S.jsx)(r,{of:f}),`
`,(0,S.jsx)(a.h3,{id:`with-context`,children:`With Context`}),`
`,(0,S.jsxs)(a.p,{children:[(0,S.jsx)(a.code,{children:`.context-header__context`}),` provides a context label above the title.`]}),`
`,(0,S.jsx)(r,{of:g}),`
`,(0,S.jsx)(a.h3,{id:`with-subline`,children:`With Subline`}),`
`,(0,S.jsxs)(a.p,{children:[(0,S.jsx)(a.code,{children:`.context-header__subline`}),` provides a subline below the title.`]}),`
`,(0,S.jsx)(r,{of:_}),`
`,(0,S.jsx)(a.h3,{id:`with-aside`,children:`With Aside`}),`
`,(0,S.jsxs)(a.p,{children:[(0,S.jsx)(a.code,{children:`.context-header__aside`}),` provides an aside section additional information or actions. It can hold anything you want, but is often used for page specific actions.`]}),`
`,(0,S.jsx)(r,{of:h}),`
`,(0,S.jsx)(a.h3,{id:`simple`,children:`Simple`}),`
`,(0,S.jsx)(a.p,{children:`The title is really the only required part of a content header, though only really meaningful when used with actions, context, or subline.`}),`
`,(0,S.jsx)(r,{of:m}),`
`,(0,S.jsx)(a.h3,{id:`github-example`,children:`GitHub Example`}),`
`,(0,S.jsx)(a.p,{children:`This example demonstrates a content header with minimal customization achieving a similar look to what might be found on a GitHub pull request page.`}),`
`,(0,S.jsx)(r,{of:p}),`
`,(0,S.jsx)(a.h2,{id:`customizing-content-header-styles`,children:`Customizing Content Header styles`}),`
`,(0,S.jsx)(`div`,{dangerouslySetInnerHTML:{__html:d({title:`Important!`,description:`These patterns represent how to customize the style of the content header for your project.`}).outerHTML}}),`
`,(0,S.jsxs)(a.p,{children:[`The content header classes are structured using the `,(0,S.jsx)(a.a,{href:`https://getbem.com/naming`,rel:`nofollow`,children:`BEM methodology`}),`.`]}),`
`,(0,S.jsxs)(a.p,{children:[`This allows us to define core styles on a main `,(0,S.jsx)(a.a,{href:`https://getbem.com/naming/#block`,rel:`nofollow`,children:`block`}),` class, and use `,(0,S.jsx)(a.a,{href:`https://getbem.com/naming/#modifier`,rel:`nofollow`,children:`modifiers`}),` to encapsulate variant styles. You can modify all content header behavior by overriding the `,(0,S.jsx)(a.code,{children:`.content-header`}),` class and setting any properties:`]}),`
`,(0,S.jsx)(a.pre,{children:(0,S.jsx)(a.code,{className:`language-css`,children:`.content-header {
  padding-block: var(--op-space-3x-large);
}
`})}),`
`,(0,S.jsx)(a.p,{children:`If you need to override the behavior of the header, you can open the class and set or change properties`}),`
`,(0,S.jsx)(a.pre,{children:(0,S.jsx)(a.code,{className:`language-css`,children:`.content-header--modifier {
  padding-block: var(--op-space-2x-large);
}
`})}),`
`,(0,S.jsx)(a.h2,{id:`new-content-header-variations`,children:`New Content Header Variations`}),`
`,(0,S.jsx)(`div`,{dangerouslySetInnerHTML:{__html:d({title:`Important!`,description:`These patterns represent how to create new variations of the content header for your project.`}).outerHTML}}),`
`,(0,S.jsxs)(a.p,{children:[`Your application may need a variation. To add one, just follow this template. Note the double hyphen, indicating that this is a `,(0,S.jsx)(a.a,{href:`https://getbem.com/naming/#modifier`,rel:`nofollow`,children:`modifier`}),`:`]}),`
`,(0,S.jsx)(a.pre,{children:(0,S.jsx)(a.code,{className:`language-css`,children:`.content-header--{name} {
  background-color: var(--op-color-primary-on-plus-four);

  .content-header__context {
    color: var(--op-color-primary-on-plus-four-alt);
  }

  .content-header__title {
    color: var(--op-color-primary-on-plus-four);
  }

  .content-header__subline {
    color: var(--op-color-primary-on-plus-four-alt);
  }
}
`})})]})}function x(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,S.jsx)(n,{...e,children:(0,S.jsx)(b,{...e})}):b(e)}var S;e((()=>{S=o(),s(),a(),v(),c(),u()}))();export{x as default};