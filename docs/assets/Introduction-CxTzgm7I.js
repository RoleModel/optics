import{i as e}from"./preload-helper-xPQekRTU.js";import{T as t,l as n,u as r}from"./blocks-uVOOWdqL.js";import{s as i}from"./chunk-LITCR56V-BmCoDI8n.js";import{t as a}from"./mdx-react-shim-eO_HyXU9.js";import{n as o,t as s}from"./sourceCodeLink-D2TI9VYO.js";import{n as c,t as l}from"./Alert-BSNiXkFA.js";function u(e){let r={a:`a`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(n,{title:`Utilities/Introduction`}),`
`,(0,f.jsx)(r.h1,{id:`utilities-introduction`,children:`Utilities Introduction`}),`
`,(0,f.jsx)(`div`,{dangerouslySetInnerHTML:{__html:s({link:`core/utilities.css`}).outerHTML}}),`
`,(0,f.jsx)(r.p,{children:`Utility classes are CSS classes scoped to a simple style property like flex or gap or a collection of related properties.
They can be combined together to quickly scaffold out page layouts or a portion of your HTML.`}),`
`,(0,f.jsxs)(r.p,{children:[`Optics provides limited but high value utility classes. Utilities can often and easily lead to poorly written CSS,
inconsistent styling, or unresponsive layouts. However, there are cases where utilities can provide great value.
Optics aims to give you access to them, but also provide guidelines for how to use them most effectively.
The utilities Optics provides focus on solving quick scaffolding `,(0,f.jsx)(r.strong,{children:`(Layout and Position)`}),` problems,
not typographical, color, or one-off fixes `,(0,f.jsx)(r.strong,{children:`(Look and Feel)`}),`.`]}),`
`,(0,f.jsx)(r.p,{children:`We limit what utilities are made available to avoid maintaining a growing library of utilities,
keep our focus on intention revealing concepts and patterns, and keep maintainability top of mind.
Color, style, and typography should be named patterns.`}),`
`,(0,f.jsx)(r.p,{children:`When using utilities, keep in mind that the intention of what style they apply may be clear,
but the intention of what the UI concept is trying to accomplish may not be.`}),`
`,(0,f.jsx)(r.h2,{id:`when-to-use-them`,children:`When to use them?`}),`
`,(0,f.jsx)(`div`,{dangerouslySetInnerHTML:{__html:l({warningLevel:`info`,icon:`info`,style:`muted`,title:`Helpful Rubric for use`,description:`Utilities should be used for solving Layout and Position, not Look and Feel`,iconDocsClassFix:`sb-unstyled`}).outerHTML}}),`
`,(0,f.jsx)(r.p,{children:`Simple flex based layouts, positioning items with gaps between them, or spiking how elements on the page will
be placed are great use cases for utilities. The value they provide is speed of use and not getting bogged down by having
to think about a meaningful name for every basic layout problem.`}),`
`,(0,f.jsx)(r.p,{children:`Use before Reuse: Skipping straight to a named component may lead to spending more effort naming things before
it's necessary. Sometimes starting with utilities to get things out on the page is better.
When you notice repetition or a larger concept or idea, then refactor to a named component.`}),`
`,(0,f.jsx)(r.h2,{id:`when-to-move-utilities-to-semantically-named-ui-concept`,children:`When to move utilities to semantically named UI concept?`}),`
`,(0,f.jsx)(r.p,{children:`Utilities for layout problems is a great place to start but can suffer from a few problems as your project progresses.`}),`
`,(0,f.jsx)(r.p,{children:`If a particular layout becomes a meaningful or repeated UI concept, thought should be put into naming it so as to provide consistency
and reveal the intention behind it. Utilities do not provide an intention-revealing name for what they do and thus if repeated or copied,
their intention can be lost. Copying between pages can unintentionally cause it to diverge from the original intent over time.`}),`
`,(0,f.jsx)(r.p,{children:`When multiple breakpoints or container queries are needed this is another good opportunity to move from utilities to a named semantic concept.
This will allow for more complex layout to be managed within a named CSS class and maintain a simple semantic HTML structure.`}),`
`,(0,f.jsx)(r.h3,{id:`helpful-rules-of-thumb-to-think-about-moving-from-utilities-to-a-named-concept`,children:`Helpful rules of thumb to think about moving from utilities to a named concept:`}),`
`,(0,f.jsxs)(r.ul,{children:[`
`,(0,f.jsx)(r.li,{children:`If you are using 3 or more utilities, it might be a sign there is a larger concept at play that should be defined.`}),`
`,(0,f.jsx)(r.li,{children:`If your layout needs to handle breakpoints or special responsive rules, utilities are going to get in the way of making this easy. You probably want to name the concept.`}),`
`,(0,f.jsx)(r.li,{children:`If a particular collection of utilities is getting used together often, it may point to a UI pattern in your design that should be named.`}),`
`]}),`
`,(0,f.jsx)(r.h3,{id:`advanced-utilities-vs-components`,children:`Advanced Utilities vs Components`}),`
`,(0,f.jsxs)(r.p,{children:[`While flex utilities are great for moving quickly or for simple layouts, they can easily become
cumbersome to manage and tend to turn into "Flex Spaghetti". In some of these cases, reaching
for named components may make sense. However, there are times when a full component is more
restrictive than you need and hurts productivity. Sometimes you need just a bit more structure
to your layout, but not a component. `,(0,f.jsx)(r.a,{href:`?path=/docs/utilities-advanced-stack--docs`,children:`Stack`}),`, `,(0,f.jsx)(r.a,{href:`?path=/docs/utilities-advanced-cluster--docs`,children:`Cluster`}),`, `,(0,f.jsx)(r.a,{href:`?path=/docs/utilities-advanced-split--docs`,children:`Split`}),`, `,(0,f.jsx)(r.a,{href:`?path=/docs/utilities-advanced-flank--docs`,children:`Flank`}),`, and `,(0,f.jsx)(r.a,{href:`?path=/docs/utilities-advanced-grid--docs`,children:`Grid`}),`
provide a simple way to create readable, flexible layouts without the overhead of a full component.`]}),`
`,(0,f.jsx)(r.h2,{id:`a-word-of-warning`,children:`A word of warning`}),`
`,(0,f.jsx)(r.p,{children:(0,f.jsx)(r.strong,{children:`The more componentized your UI is, the fewer utilities should be needed.`})}),`
`,(0,f.jsx)(r.p,{children:`As mentioned above, Utilities are great for speed and spiking out concepts,
but they come with a set of warnings. They can be difficult to refactor,
especially if repeated across pages or sections,
they can be difficult to manage between screen sizes media and container breakpoints,
and they can cause HTML clutter. This is why it's important to know their strengths,
when to use them, and when to stop using them.`})]})}function d(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,f.jsx)(n,{...e,children:(0,f.jsx)(u,{...e})}):u(e)}var f;e((()=>{f=i(),a(),r(),o(),c()}))();export{d as default};