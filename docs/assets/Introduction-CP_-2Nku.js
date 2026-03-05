import{j as e,M as s}from"./blocks-D2pTyHFk.js";import{useMDXComponents as o}from"./index-Cur9J7FO.js";import{c as a}from"./sourceCodeLink-Chh3FteF.js";import{c as r}from"./Alert-CAEs4394.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-qQGGZl47.js";import"./Button-B21kpIpO.js";import"./Icon-uqCTS4Mm.js";function n(i){const t={a:"a",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Utilities/Introduction"}),`
`,e.jsx(t.h1,{id:"utilities-introduction",children:"Utilities Introduction"}),`
`,e.jsx("div",{dangerouslySetInnerHTML:{__html:a({link:"core/utilities.css"}).outerHTML}}),`
`,e.jsx(t.p,{children:`Utility classes are simple CSS classes scoped to a simple style property like flex or gap.
They can be added together to style a portion of your HTML from scratch.
This is especially useful for quickly scaffolding out page layouts.`}),`
`,e.jsxs(t.p,{children:[`Optics provides limited but high value utility classes. Utilities can often and easily lead to poorly written CSS,
inconsistent styling, or unresponsive layouts. However, there are cases where utilities can provide great value.
Optics aims to give you access to them, but also provide guidelines for how to use them most effectively.
The utilities Optics provides focus on solving quick scaffolding `,e.jsx(t.strong,{children:"(Layout and Position)"}),` problems,
not typographical, color, or one-off fixes `,e.jsx(t.strong,{children:"(Look and Feel)"}),"."]}),`
`,e.jsx(t.p,{children:`We limit what utilities are made available to avoid maintaining a growing library of utilities,
keep our focus on intention revealing concepts and patterns, and keep maintainability top of mind.
Color, style, and typography should be named patterns.`}),`
`,e.jsx(t.p,{children:`When using utilities, keep in mind that the intention of what style they apply may be clear,
but the intention of what the UI concept is trying to accomplish may not be.`}),`
`,e.jsx(t.h2,{id:"when-to-use-them",children:"When to use them?"}),`
`,e.jsx("div",{dangerouslySetInnerHTML:{__html:r({warningLevel:"info",icon:"info",style:"muted",title:"Helpful Rubric for use",description:"Utilities should be used for solving Layout and Position, not Look and Feel",iconDocsClassFix:"sb-unstyled"}).outerHTML}}),`
`,e.jsx(t.p,{children:`Simple flex based layouts, positioning items with gaps between them, or spiking how elements on the page will
be placed are great use cases for utilities. The value they provide is speed of use and not getting bogged down by having
to think about a meaningful name for every basic layout problem.`}),`
`,e.jsx(t.p,{children:`Use before Reuse: Skipping straight to a named component may lead to spending more effort naming things before
it's necessary. Sometimes starting with utilities to get things out on the page is better.
When you notice repetition or a larger concept or idea, then refactor to a named component.`}),`
`,e.jsx(t.h2,{id:"when-to-move-utilities-to-semantically-named-ui-concept",children:"When to move utilities to semantically named UI concept?"}),`
`,e.jsx(t.p,{children:"Utilities for layout problems is a great place to start but can suffer from a few problems as your project progresses."}),`
`,e.jsx(t.p,{children:`If a particular layout becomes a meaningful or repeated UI concept, thought should be put into naming it so as to provide consistency
and reveal the intention behind it. Utilities do not provide an intention-revealing name for what they do and thus if repeated or copied,
their intention can be lost. Copying between pages can unintentionally cause it to diverge from the original intent over time.`}),`
`,e.jsx(t.p,{children:`When multiple breakpoints or container queries are needed this is another good opportunity to move from utilities to a named semantic concept.
This will allow for more complex layout to be managed within a named CSS class and maintain a simple semantic HTML structure.`}),`
`,e.jsx(t.h3,{id:"helpful-rules-of-thumb-to-think-about-moving-from-utilities-to-a-named-concept",children:"Helpful rules of thumb to think about moving from utilities to a named concept:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"If you are using 3 or more utilities, it might be a sign there is a larger concept at play that should be defined."}),`
`,e.jsx(t.li,{children:"If your layout needs to handle breakpoints or special responsive rules, utilities are going to get in the way of making this easy. You probably want to name the concept."}),`
`,e.jsx(t.li,{children:"If a particular collection of utilities is getting used together often, it may point to a UI pattern in your design that should be named."}),`
`]}),`
`,e.jsx(t.h3,{id:"higher-order-utilities-vs-components",children:"Higher Order Utilities vs Components"}),`
`,e.jsxs(t.p,{children:[`While flex utilities are great for moving quickly or for simple layouts, they can easily become
cumbersome to manage and tend to turn into "Flex Spaghetti". In some of these cases, reaching
for named components may make sense. However, there are times when a full component is more
restrictive than you need and hurts productivity. Sometimes you need just a bit more structure
to your layout, but not a component. `,e.jsx(t.a,{href:"?path=/docs/utilities-stack--docs",children:"Stack"}),", ",e.jsx(t.a,{href:"?path=/docs/utilities-cluster--docs",children:"Cluster"}),", and ",e.jsx(t.a,{href:"?path=/docs/utilities-split--docs",children:"Split"}),`
provide a simple way to create readable, flexible layouts without the overhead of a full component.`]}),`
`,e.jsx(t.h2,{id:"a-word-of-warning",children:"A word of warning"}),`
`,e.jsx(t.p,{children:e.jsx(t.strong,{children:"The more componentized your UI is, the fewer utilities should be needed."})}),`
`,e.jsx(t.p,{children:`As mentioned above, Utilities are great for speed and spiking out concepts,
but they come with a set of warnings. They can be difficult to refactor,
especially if repeated across pages or sections,
they can be difficult to manage between screen sizes media and container breakpoints,
and they can cause HTML clutter. This is why it's important to know their strengths,
when to use them, and when to stop using them.`})]})}function g(i={}){const{wrapper:t}={...o(),...i.components};return t?e.jsx(t,{...i,children:e.jsx(n,{...i})}):n(i)}export{g as default};
