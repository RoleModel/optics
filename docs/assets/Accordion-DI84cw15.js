import{i as e}from"./preload-helper-xPQekRTU.js";import{T as t,l as n,n as r,o as i,u as a}from"./blocks-uVOOWdqL.js";import{s as o}from"./chunk-LITCR56V-BmCoDI8n.js";import{t as s}from"./mdx-react-shim-eO_HyXU9.js";import{AdditionalHeaderContent as c,Default as l,DisableAnimation as u,FlipHeaderAndMarker as d,n as f,t as p}from"./Accordion.stories-qn-0cYoN.js";import{n as m,t as h}from"./sourceCodeLink-D2TI9VYO.js";import{n as g,t as _}from"./Alert-BSNiXkFA.js";function v(e){let a={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,...t(),...e.components};return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(n,{of:p}),`
`,(0,b.jsx)(a.h1,{id:`accordion`,children:`Accordion`}),`
`,(0,b.jsx)(`div`,{dangerouslySetInnerHTML:{__html:h({link:`components/accordion.css`}).outerHTML}}),`
`,(0,b.jsxs)(a.p,{children:[`Accordion classes are built on the `,(0,b.jsx)(a.code,{children:`details`}),` and `,(0,b.jsx)(a.code,{children:`summary`}),` html elements. They provide consistent and composable styling for disclosure widgets.`]}),`
`,(0,b.jsx)(a.h2,{id:`playground`,children:`Playground`}),`
`,(0,b.jsx)(r,{of:l}),`
`,(0,b.jsx)(i,{of:l}),`
`,(0,b.jsx)(a.h3,{id:`selective-imports`,children:`Selective Imports`}),`
`,(0,b.jsxs)(a.p,{children:[`Accordion can be used as a standalone component, however, it does have a few dependencies. To see a full dependency list, see `,(0,b.jsx)(a.a,{href:`?path=/docs/overview-selective-imports--docs#dependencies`,children:`Dependency Graph`})]}),`
`,(0,b.jsx)(a.pre,{children:(0,b.jsx)(a.code,{className:`language-css`,children:`/* Depends on */
@import '@rolemodel/optics/dist/css/core/fonts';
@import '@rolemodel/optics/dist/css/core/tokens';
@import '@rolemodel/optics/dist/css/core/base';
@import '@rolemodel/optics/dist/css/components/icon';

/* Component */
@import '@rolemodel/optics/dist/css/components/accordion';
`})}),`
`,(0,b.jsx)(a.h2,{id:`features`,children:`Features`}),`
`,(0,b.jsx)(a.h3,{id:`exclusive-open`,children:`Exclusive [open]`}),`
`,(0,b.jsxs)(a.p,{children:[`Setting the `,(0,b.jsx)(a.code,{children:`name`}),` attribute on the `,(0,b.jsx)(a.code,{children:`<details>`}),` element will make the accordion exclusive. This attribute enables multiple `,(0,b.jsx)(a.code,{children:`<details>`}),` elements to be connected, with only one open at a time.`]}),`
`,(0,b.jsxs)(a.p,{children:[`See more about the `,(0,b.jsx)(a.code,{children:`name`}),` attribute on the `,(0,b.jsx)(a.a,{href:`https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details#name`,rel:`nofollow`,children:`MDN Web Docs`}),`.`]}),`
`,(0,b.jsx)(a.pre,{children:(0,b.jsx)(a.code,{className:`language-html`,children:`<details class="accordion" name="accordion-group">...</details>
<details class="accordion" name="accordion-group">...</details>
<details class="accordion" name="accordion-group">...</details>
`})}),`
`,(0,b.jsx)(a.h2,{id:`variations`,children:`Variations`}),`
`,(0,b.jsx)(a.h3,{id:`default`,children:`Default`}),`
`,(0,b.jsxs)(a.p,{children:[(0,b.jsx)(a.code,{children:`.accordion`}),` used on a `,(0,b.jsx)(a.code,{children:`details`}),` element with a `,(0,b.jsx)(a.code,{children:`summary`}),` element as the first child will create an accordion component.
Within the `,(0,b.jsx)(a.code,{children:`summary`}),`, a span with the class `,(0,b.jsx)(a.code,{children:`accordion__label`}),` will be used as the title of the accordion and `,(0,b.jsx)(a.code,{children:`accordion__marker`}),` will be used as the icon.`]}),`
`,(0,b.jsxs)(a.p,{children:[`Other content can be placed within the summary, but the `,(0,b.jsx)(a.code,{children:`accordion__label`}),` and `,(0,b.jsx)(a.code,{children:`accordion__marker`}),` classes must be used for the accordion to work properly.`]}),`
`,(0,b.jsx)(r,{of:l}),`
`,(0,b.jsx)(a.h3,{id:`swapped-label-and-marker`,children:`Swapped Label and Marker`}),`
`,(0,b.jsx)(a.p,{children:`Positioning the marker after the label inside of the summary will result in the marker being on the right side of the accordion.`}),`
`,(0,b.jsx)(r,{of:d}),`
`,(0,b.jsx)(a.h3,{id:`disable-animation`,children:`Disable Animation`}),`
`,(0,b.jsxs)(a.p,{children:[`If you prefer the accordion to not animate, you can disable the transition on the icon and content by using this modifier `,(0,b.jsx)(a.code,{children:`.accordion--disable-animation`}),`.`]}),`
`,(0,b.jsx)(r,{of:u}),`
`,(0,b.jsx)(a.h3,{id:`additional-header-content`,children:`Additional Header Content`}),`
`,(0,b.jsxs)(a.p,{children:[`Additional content can be included within the `,(0,b.jsx)(a.code,{children:`summary`}),` element in any order. Anything not within the `,(0,b.jsx)(a.code,{children:`.accordion__label`}),` or `,(0,b.jsx)(a.code,{children:`.accordion__marker`}),` classes will be rendered wherever you place it in the `,(0,b.jsx)(a.code,{children:`summary`}),`. Note: Content placed between the label and the marker will fill the width between them. If placing a button there, you may want to wrap it in a div so the button doesn't stretch the whole space.`]}),`
`,(0,b.jsx)(r,{of:c}),`
`,(0,b.jsx)(a.h2,{id:`accordion-api`,children:`Accordion API`}),`
`,(0,b.jsx)(a.p,{children:`Styles are built on CSS variables scoped to the accordion.`}),`
`,(0,b.jsx)(a.p,{children:`Here are the variables that can be customized:`}),`
`,`
`,(0,b.jsx)(a.pre,{children:(0,b.jsx)(a.code,{className:`language-css`,children:`--_op-accordion-summary-min-height
`})}),`
`,`
`,(0,b.jsx)(a.h2,{id:`customizing-accordion-styles`,children:`Customizing Accordion styles`}),`
`,(0,b.jsx)(`div`,{dangerouslySetInnerHTML:{__html:_({title:`Important!`,description:`These patterns represent how to customize the style of the accordion for your project.`}).outerHTML}}),`
`,(0,b.jsxs)(a.p,{children:[`The accordion classes are structured using the `,(0,b.jsx)(a.a,{href:`https://getbem.com/naming`,rel:`nofollow`,children:`BEM methodology`}),`.`]}),`
`,(0,b.jsxs)(a.p,{children:[`This allows us to define core styles on a main `,(0,b.jsx)(a.a,{href:`https://getbem.com/naming/#block`,rel:`nofollow`,children:`block`}),` class, and use `,(0,b.jsx)(a.a,{href:`https://getbem.com/naming/#modifier`,rel:`nofollow`,children:`modifiers`}),` to encapsulate variant styles. You can modify all accordion behavior by overriding the `,(0,b.jsx)(a.code,{children:`.accordion`}),` selector and setting any properties:`]}),`
`,(0,b.jsx)(a.pre,{children:(0,b.jsx)(a.code,{className:`language-css`,children:`.accordion {
}
`})}),`
`,(0,b.jsx)(a.h2,{id:`new-accordion-variations`,children:`New Accordion Variations`}),`
`,(0,b.jsx)(`div`,{dangerouslySetInnerHTML:{__html:_({title:`Important!`,description:`These patterns represent how to create new variations of the accordion for your project.`}).outerHTML}}),`
`,(0,b.jsxs)(a.p,{children:[`Your application may need a variation. To add one, just follow this template. Note the double hyphen, indicating that this is a `,(0,b.jsx)(a.a,{href:`https://getbem.com/naming/#modifier`,rel:`nofollow`,children:`modifier`}),`:`]}),`
`,(0,b.jsx)(a.pre,{children:(0,b.jsx)(a.code,{className:`language-css`,children:`.accordion--{name} {
  --_op-accordion-summary-min-height: var(--op-font-small);
}
`})})]})}function y(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,b.jsx)(n,{...e,children:(0,b.jsx)(v,{...e})}):v(e)}var b;e((()=>{b=o(),s(),a(),f(),m(),g()}))();export{y as default};