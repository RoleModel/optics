import{i as e}from"./preload-helper-xPQekRTU.js";import{T as t,l as n,u as r}from"./blocks-uVOOWdqL.js";import{s as i}from"./chunk-LITCR56V-BmCoDI8n.js";import{t as a}from"./mdx-react-shim-eO_HyXU9.js";import{n as o,t as s}from"./sourceCodeLink-D2TI9VYO.js";function c(e){let r={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,ul:`ul`,...t(),...e.components};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(n,{title:`Overview/Tokens`}),`
`,(0,u.jsx)(r.h1,{id:`tokens`,children:`Tokens`}),`
`,(0,u.jsx)(`div`,{dangerouslySetInnerHTML:{__html:s({link:`core/tokens`}).outerHTML}}),`
`,(0,u.jsxs)(r.p,{children:[`Tokens are defined in `,(0,u.jsx)(r.code,{children:`src/core/tokens`})]}),`
`,(0,u.jsxs)(r.ul,{children:[`
`,(0,u.jsxs)(r.li,{children:[`All core tokens are defined in `,(0,u.jsx)(r.code,{children:`src/core/tokens/base_tokens.css`})]}),`
`,(0,u.jsxs)(r.li,{children:[`Color scale tokens are defined in `,(0,u.jsx)(r.code,{children:`src/core/tokens/scale_color_tokens.css`})]}),`
`]}),`
`,(0,u.jsx)(r.p,{children:`There are also a few component specific tokens that are defined in their respective component file, but those are not intended to be global or used outside of that file.`}),`
`,(0,u.jsxs)(r.p,{children:[`There is a JSON file in `,(0,u.jsx)(r.code,{children:`docs/token_structure.json`}),` that lists all the current tokens in one place and shows how the names indicate organization.`]}),`
`,(0,u.jsx)(r.h2,{id:`token-naming-structure`,children:`Token Naming Structure`}),`
`,(0,u.jsx)(r.p,{children:`All tokens follow a standard naming structure.
This structure should be followed for any new tokens added to provide consistency.`}),`
`,(0,u.jsx)(r.p,{children:(0,u.jsx)(r.code,{children:`--prefix-category-sub-category-variant-qualifier-variant: value`})}),`
`,(0,u.jsxs)(`div`,{class:`flex items-center gap-xxs`,children:[(0,u.jsx)(`div`,{children:`--`}),(0,u.jsx)(`div`,{class:`badge badge--primary`,children:`prefix`}),(0,u.jsx)(`div`,{children:`-`}),(0,u.jsx)(`div`,{class:`badge`,children:`category`}),(0,u.jsx)(`div`,{children:`-`}),(0,u.jsx)(`div`,{class:`badge badge--warning`,children:`sub category (optional)`}),(0,u.jsx)(`div`,{children:`-`}),(0,u.jsx)(`div`,{class:`badge badge--danger`,children:`variant qualifier (optional)`}),(0,u.jsx)(`div`,{children:`-`}),(0,u.jsx)(`div`,{class:`badge badge--notice`,children:`variant`}),(0,u.jsx)(`div`,{children:`:`}),(0,u.jsx)(`div`,{children:`value`})]}),`
`,(0,u.jsx)(r.h3,{id:`examples`,children:`Examples`}),`
`,(0,u.jsxs)(`div`,{class:`flex flex-col gap-sm`,children:[(0,u.jsxs)(`div`,{class:`flex items-center gap-xxs`,children:[(0,u.jsx)(`div`,{children:`--`}),(0,u.jsx)(`div`,{class:`badge badge--primary`,children:`op`}),(0,u.jsx)(`div`,{children:`-`}),(0,u.jsx)(`div`,{class:`badge`,children:`color`}),(0,u.jsx)(`div`,{children:`-`}),(0,u.jsx)(`div`,{class:`badge badge--warning`,children:`primary`}),(0,u.jsx)(`div`,{children:`-`}),(0,u.jsx)(`div`,{class:`badge badge--danger`,children:`on`}),(0,u.jsx)(`div`,{children:`-`}),(0,u.jsx)(`div`,{class:`badge badge--notice`,children:`plus-one`}),(0,u.jsx)(`div`,{children:`:`}),(0,u.jsx)(`div`,{children:`value`})]}),(0,u.jsxs)(`div`,{class:`flex items-center gap-xxs`,children:[(0,u.jsx)(`div`,{children:`--`}),(0,u.jsx)(`div`,{class:`badge badge--primary`,children:`op`}),(0,u.jsx)(`div`,{children:`-`}),(0,u.jsx)(`div`,{class:`badge`,children:`font-size`}),(0,u.jsx)(`div`,{children:`-`}),(0,u.jsx)(`div`,{class:`badge badge--notice`,children:`large`}),(0,u.jsx)(`div`,{children:`:`}),(0,u.jsx)(`div`,{children:`value`})]}),(0,u.jsxs)(`div`,{class:`flex items-center gap-xxs`,children:[(0,u.jsx)(`div`,{children:`--`}),(0,u.jsx)(`div`,{class:`badge badge--primary`,children:`op`}),(0,u.jsx)(`div`,{children:`-`}),(0,u.jsx)(`div`,{class:`badge`,children:`shadow`}),(0,u.jsx)(`div`,{children:`-`}),(0,u.jsx)(`div`,{class:`badge badge--danger`,children:`x`}),(0,u.jsx)(`div`,{children:`-`}),(0,u.jsx)(`div`,{class:`badge badge--notice`,children:`small`}),(0,u.jsx)(`div`,{children:`:`}),(0,u.jsx)(`div`,{children:`value`})]}),(0,u.jsxs)(`div`,{class:`flex items-center gap-xxs`,children:[(0,u.jsx)(`div`,{children:`--`}),(0,u.jsx)(`div`,{class:`badge badge--primary`,children:`op`}),(0,u.jsx)(`div`,{children:`-`}),(0,u.jsx)(`div`,{class:`badge`,children:`border`}),(0,u.jsx)(`div`,{children:`-`}),(0,u.jsx)(`div`,{class:`badge badge--notice`,children:`bottom`}),(0,u.jsx)(`div`,{children:`:`}),(0,u.jsx)(`div`,{children:`value`})]})]}),`
`,(0,u.jsx)(r.h3,{id:`explanation`,children:`Explanation`}),`
`,(0,u.jsx)(r.h4,{id:`prefix---is-a-namespace-prefix-to-indicate-the-source-of-the-token`,children:`prefix - is a namespace prefix to indicate the source of the token.`}),`
`,(0,u.jsxs)(r.ul,{children:[`
`,(0,u.jsxs)(r.li,{children:[(0,u.jsx)(r.code,{children:`op`}),` - All tokens in Optics are prefixed with `,(0,u.jsx)(r.code,{children:`op`})]}),`
`,(0,u.jsxs)(r.li,{children:[(0,u.jsx)(r.code,{children:`ya`}),` - Your App. Any tokens that your app is adding can be prefixed to prevent collisions with Optics tokens or other Third Party tokens.`]}),`
`]}),`
`,(0,u.jsx)(r.h4,{id:`category---indicates-the-category-of-the-token`,children:`category - indicates the category of the token`}),`
`,(0,u.jsxs)(r.ul,{children:[`
`,(0,u.jsxs)(r.li,{children:[(0,u.jsx)(r.code,{children:`color`}),` - color token`]}),`
`,(0,u.jsxs)(r.li,{children:[(0,u.jsx)(r.code,{children:`font`}),` - font token`]}),`
`,(0,u.jsxs)(r.li,{children:[(0,u.jsx)(r.code,{children:`space`}),` - space token`]}),`
`,(0,u.jsxs)(r.li,{children:[(0,u.jsx)(r.code,{children:`border`}),` - border token`]}),`
`,(0,u.jsxs)(r.li,{children:[(0,u.jsx)(r.code,{children:`shadow`}),` - shadow token`]}),`
`,(0,u.jsx)(r.li,{children:`etc.`}),`
`]}),`
`,(0,u.jsx)(r.h4,{id:`sub-category---indicates-a-sub-category-of-the-token`,children:`sub category - indicates a sub category of the token`}),`
`,(0,u.jsxs)(r.ul,{children:[`
`,(0,u.jsxs)(r.li,{children:[(0,u.jsx)(r.code,{children:`size`}),` - indicates a token that is a size, in our case a sub category of font`]}),`
`,(0,u.jsxs)(r.li,{children:[(0,u.jsx)(r.code,{children:`weight`}),` - indicates a token that is a font weight, in our case a sub category of font`]}),`
`,(0,u.jsx)(r.li,{children:`etc.`}),`
`]}),`
`,(0,u.jsx)(r.h4,{id:`variant-qualifier---indicates-a-qualification-of-the-variant`,children:`variant qualifier - indicates a qualification of the variant`}),`
`,(0,u.jsxs)(r.ul,{children:[`
`,(0,u.jsxs)(r.li,{children:[(0,u.jsx)(r.code,{children:`3x`}),` - three times extra`]}),`
`,(0,u.jsxs)(r.li,{children:[(0,u.jsx)(r.code,{children:`2x`}),` - two times extra`]}),`
`,(0,u.jsxs)(r.li,{children:[(0,u.jsx)(r.code,{children:`x`}),` - active`]}),`
`,(0,u.jsx)(r.li,{children:`etc.`}),`
`]}),`
`,(0,u.jsx)(r.h4,{id:`variant---indicates-a-specific-variant-of-the-token`,children:`variant - indicates a specific variant of the token`}),`
`,(0,u.jsxs)(r.ul,{children:[`
`,(0,u.jsxs)(r.li,{children:[(0,u.jsx)(r.code,{children:`small`}),` - indicates a small variant of the token`]}),`
`,(0,u.jsxs)(r.li,{children:[(0,u.jsx)(r.code,{children:`medium`}),` - indicates a medium variant of the token`]}),`
`,(0,u.jsxs)(r.li,{children:[(0,u.jsx)(r.code,{children:`large`}),` - indicates a large variant of the token`]}),`
`,(0,u.jsx)(r.li,{children:`etc.`}),`
`]}),`
`,(0,u.jsx)(r.h3,{id:`component-specific-token-naming-structure`,children:`Component Specific Token Naming Structure`}),`
`,(0,u.jsx)(r.p,{children:`Sometimes a component will have a token that is specific to that component. In these cases, a slightly different pattern is used.
The Component name becomes the category and in some cases, the sub category.`}),`
`,(0,u.jsx)(r.p,{children:(0,u.jsx)(r.code,{children:`--prefix-component-name-sub-name-variant-qualifier-variant: value`})}),`
`,(0,u.jsxs)(`p`,{class:`flex items-center gap-xxs`,children:[(0,u.jsx)(`div`,{children:`--`}),(0,u.jsx)(`div`,{class:`badge-primary`,children:`prefix`}),(0,u.jsx)(`div`,{children:`-`}),(0,u.jsx)(`div`,{class:`badge`,children:`component name`}),(0,u.jsx)(`div`,{children:`-`}),(0,u.jsx)(`div`,{class:`badge-warning`,children:`sub name (optional)`}),(0,u.jsx)(`div`,{children:`-`}),(0,u.jsx)(`div`,{class:`badge-danger`,children:`variant qualifier (optional)`}),(0,u.jsx)(`div`,{children:`-`}),(0,u.jsx)(`div`,{class:`badge-notice`,children:`variant`}),(0,u.jsx)(`div`,{children:`:`}),(0,u.jsx)(`div`,{children:`value`})]}),`
`,(0,u.jsx)(r.p,{children:`Additionally, components may implement a "public" and "private" API of tokens. These are internal to the component and intended to provide an easy to use interface for customizing the component.`}),`
`,(0,u.jsxs)(r.p,{children:[`The "Private" API is not meant to be set by the user, but rather is used internally by the component.
These tokens follow a structure like `,(0,u.jsx)(r.code,{children:`--__prefix-component-name-sub-name-variant-qualifier-variant: value`})]}),`
`,(0,u.jsxs)(r.p,{children:[`The "Public" API is meant to be set as a way to customize the component.
These tokens follow a structure like `,(0,u.jsx)(r.code,{children:`--_prefix-component-name-sub-name-variant-qualifier-variant: value`})]})]})}function l(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,u.jsx)(n,{...e,children:(0,u.jsx)(c,{...e})}):c(e)}var u;e((()=>{u=i(),a(),r(),o()}))();export{l as default};