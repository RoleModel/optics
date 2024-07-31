import{j as e}from"./jsx-runtime-wV-HqYdn.js";import{u as d}from"./index-DCjXWHk2.js";import{M as c}from"./index-BtfEXyyO.js";import{c as r}from"./sourceCodeLink-Chh3FteF.js";import"./iframe-aIM7v9wE.js";import"../sb-preview/runtime.js";import"./index-B5rfWaSj.js";import"./index-DrFu-skq.js";function s(n){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",ul:"ul",...d(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"Overview/Tokens"}),`
`,e.jsx(i.h1,{id:"tokens",children:"Tokens"}),`
`,e.jsx("div",{dangerouslySetInnerHTML:{__html:r({link:"core/tokens"}).outerHTML}}),`
`,e.jsxs(i.p,{children:["Tokens are defined in ",e.jsx(i.code,{children:"src/core/tokens"})]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["All core tokens are defined in ",e.jsx(i.code,{children:"src/core/tokens/base_tokens.scss"})]}),`
`,e.jsxs(i.li,{children:["Color scale tokens are defined in ",e.jsx(i.code,{children:"src/core/tokens/scale_color_tokens.scss"})]}),`
`,e.jsxs(i.li,{children:["Dark mode tokens are defined in ",e.jsx(i.code,{children:"src/core/tokens/dark_mode_tokens.scss"})]}),`
`]}),`
`,e.jsx(i.p,{children:"There are also a few component specific tokens that are defined in their respective component file, but those are not intended to be global or used outside of that file."}),`
`,e.jsxs(i.p,{children:["There is a JSON file in ",e.jsx(i.code,{children:"docs/token_structure.json"})," that lists all the current tokens in one place and shows how the names indicate organization."]}),`
`,e.jsx(i.h2,{id:"token-naming-structure",children:"Token Naming Structure"}),`
`,e.jsx(i.p,{children:`All tokens follow a standard naming structure.
This structure should be followed for any new tokens added to provide consistency.`}),`
`,e.jsx(i.p,{children:e.jsx(i.code,{children:"--prefix-category-sub-category-variant-qualifier-variant: value"})}),`
`,e.jsxs("p",{class:"flex items-center gap-xxs",children:[e.jsx("div",{children:"--"}),e.jsx("div",{class:"badge-primary",children:"prefix"}),e.jsx("div",{children:"-"}),e.jsx("div",{class:"badge",children:"category"}),e.jsx("div",{children:"-"}),e.jsx("div",{class:"badge-warning",children:"sub category (optional)"}),e.jsx("div",{children:"-"}),e.jsx("div",{class:"badge-danger",children:"variant qualifier (optional)"}),e.jsx("div",{children:"-"}),e.jsx("div",{class:"badge-notice",children:"variant"}),e.jsx("div",{children:":"}),e.jsx("div",{children:"value"})]}),`
`,e.jsx(i.h3,{id:"examples",children:"Examples"}),`
`,e.jsxs("p",{class:"flex flex-col gap-sm",children:[e.jsxs("div",{class:"flex items-center gap-xxs",children:[e.jsx("div",{children:"--"}),e.jsx("div",{class:"badge-primary",children:"op"}),e.jsx("div",{children:"-"}),e.jsx("div",{class:"badge",children:"color"}),e.jsx("div",{children:"-"}),e.jsx("div",{class:"badge-warning",children:"primary"}),e.jsx("div",{children:"-"}),e.jsx("div",{class:"badge-danger",children:"on"}),e.jsx("div",{children:"-"}),e.jsx("div",{class:"badge-notice",children:"plus-one"}),e.jsx("div",{children:":"}),e.jsx("div",{children:"value"})]}),e.jsxs("div",{class:"flex items-center gap-xxs",children:[e.jsx("div",{children:"--"}),e.jsx("div",{class:"badge-primary",children:"op"}),e.jsx("div",{children:"-"}),e.jsx("div",{class:"badge",children:"font-size"}),e.jsx("div",{children:"-"}),e.jsx("div",{class:"badge-notice",children:"large"}),e.jsx("div",{children:":"}),e.jsx("div",{children:"value"})]}),e.jsxs("div",{class:"flex items-center gap-xxs",children:[e.jsx("div",{children:"--"}),e.jsx("div",{class:"badge-primary",children:"op"}),e.jsx("div",{children:"-"}),e.jsx("div",{class:"badge",children:"shadow"}),e.jsx("div",{children:"-"}),e.jsx("div",{class:"badge-danger",children:"x"}),e.jsx("div",{children:"-"}),e.jsx("div",{class:"badge-notice",children:"small"}),e.jsx("div",{children:":"}),e.jsx("div",{children:"value"})]}),e.jsxs("div",{class:"flex items-center gap-xxs",children:[e.jsx("div",{children:"--"}),e.jsx("div",{class:"badge-primary",children:"op"}),e.jsx("div",{children:"-"}),e.jsx("div",{class:"badge",children:"border"}),e.jsx("div",{children:"-"}),e.jsx("div",{class:"badge-notice",children:"bottom"}),e.jsx("div",{children:":"}),e.jsx("div",{children:"value"})]})]}),`
`,e.jsx(i.h3,{id:"explanation",children:"Explanation"}),`
`,e.jsx(i.h4,{id:"prefix---is-a-namespace-prefix-to-indicate-the-source-of-the-token",children:"prefix - is a namespace prefix to indicate the source of the token."}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"op"})," - All tokens in Optics are prefixed with ",e.jsx(i.code,{children:"op"})]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"ya"})," - Your App. Any tokens that your app is adding can be prefixed to prevent collisions with Optics tokens or other Third Party tokens."]}),`
`]}),`
`,e.jsx(i.h4,{id:"category---indicates-the-category-of-the-token",children:"category - indicates the category of the token"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"color"})," - color token"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"font"})," - font token"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"space"})," - space token"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"border"})," - border token"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"shadow"})," - shadow token"]}),`
`,e.jsx(i.li,{children:"etc."}),`
`]}),`
`,e.jsx(i.h4,{id:"sub-category---indicates-a-sub-category-of-the-token",children:"sub category - indicates a sub category of the token"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"size"})," - indicates a token that is a size, in our case a sub category of font"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"weight"})," - indicates a token that is a font weight, in our case a sub category of font"]}),`
`,e.jsx(i.li,{children:"etc."}),`
`]}),`
`,e.jsx(i.h4,{id:"variant-qualifier---indicates-a-qualification-of-the-variant",children:"variant qualifier - indicates a qualification of the variant"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"3x"})," - three times extra"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"2x"})," - two times extra"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"x"})," - active"]}),`
`,e.jsx(i.li,{children:"etc."}),`
`]}),`
`,e.jsx(i.h4,{id:"variant---indicates-a-specific-variant-of-the-token",children:"variant - indicates a specific variant of the token"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"small"})," - indicates a small variant of the token"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"medium"})," - indicates a medium variant of the token"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"large"})," - indicates a large variant of the token"]}),`
`,e.jsx(i.li,{children:"etc."}),`
`]}),`
`,e.jsx(i.h3,{id:"component-specific-token-naming-structure",children:"Component Specific Token Naming Structure"}),`
`,e.jsx(i.p,{children:`Sometimes a component will have a token that is specific to that component. In these cases, a slightly different pattern is used.
The Component name becomes the category and in some cases, the sub category.`}),`
`,e.jsx(i.p,{children:e.jsx(i.code,{children:"--prefix-component-name-sub-name-variant-qualifier-variant: value"})}),`
`,e.jsxs("p",{class:"flex items-center gap-xxs",children:[e.jsx("div",{children:"--"}),e.jsx("div",{class:"badge-primary",children:"prefix"}),e.jsx("div",{children:"-"}),e.jsx("div",{class:"badge",children:"component name"}),e.jsx("div",{children:"-"}),e.jsx("div",{class:"badge-warning",children:"sub name (optional)"}),e.jsx("div",{children:"-"}),e.jsx("div",{class:"badge-danger",children:"variant qualifier (optional)"}),e.jsx("div",{children:"-"}),e.jsx("div",{class:"badge-notice",children:"variant"}),e.jsx("div",{children:":"}),e.jsx("div",{children:"value"})]}),`
`,e.jsx(i.p,{children:'Additionally, components may implement a "public" and "private" API of tokens. These are internal to the component and intended to provide an easy to use interface for customizing the component.'}),`
`,e.jsxs(i.p,{children:[`The "Private" API is not meant to be set by the user, but rather is used internally by the component.
These tokens follow a structure like `,e.jsx(i.code,{children:"--__prefix-component-name-sub-name-variant-qualifier-variant: value"})]}),`
`,e.jsxs(i.p,{children:[`The "Public" API is meant to be set as a way to customize the component.
These tokens follow a structure like `,e.jsx(i.code,{children:"--_prefix-component-name-sub-name-variant-qualifier-variant: value"})]})]})}function p(n={}){const{wrapper:i}={...d(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(s,{...n})}):s(n)}export{p as default};
