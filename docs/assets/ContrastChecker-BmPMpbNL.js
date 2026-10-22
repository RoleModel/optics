import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{i as t}from"./react-CaHZDgIm.js";import{s as n}from"./chunk-LITCR56V-BxXRPQK8.js";import{l as r,u as i}from"./blocks-CyTtSge0.js";import{t as a}from"./mdx-react-shim-DIeO1dVO.js";import{n as o,t as s}from"./sourceCodeLink-C1o55bv0.js";function c(e){let n={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...t(),...e.components};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(r,{title:`Tools/Contrast Checker`}),`
`,(0,u.jsx)(n.h1,{id:`contrast-checker`,children:`Contrast Checker`}),`
`,(0,u.jsx)(`div`,{dangerouslySetInnerHTML:{__html:s({link:`tools/check-contrast.cjs`}).outerHTML}}),`
`,(0,u.jsxs)(n.p,{children:[`Optics ships a contrast checker you can run in CI after customizing your theme.
It checks every color scale step against its `,(0,u.jsx)(n.code,{children:`on`}),` and `,(0,u.jsx)(n.code,{children:`on-alt`}),` text colors, in light and dark mode, and fails if any pair is below WCAG AA (4.5:1).`]}),`
`,(0,u.jsxs)(n.p,{children:[`It works with both the HSL build (`,(0,u.jsx)(n.code,{children:`optics.css`}),`) and the `,(0,u.jsx)(n.a,{href:`?path=/docs/overview-oklch-colors--docs`,children:`OKLCH build`}),` (`,(0,u.jsx)(n.code,{children:`optics-oklch.css`}),`), and it has no dependencies.`]}),`
`,(0,u.jsx)(n.h2,{id:`usage`,children:`Usage`}),`
`,(0,u.jsxs)(n.p,{children:[`The checker is installed with Optics as the `,(0,u.jsx)(n.code,{children:`optics-check-contrast`}),` command. Add a script to your `,(0,u.jsx)(n.code,{children:`package.json`}),`:`]}),`
`,(0,u.jsx)(n.pre,{children:(0,u.jsx)(n.code,{className:`language-json`,children:`{
  "scripts": {
    "check-contrast": "optics-check-contrast app/assets/stylesheets/theme.css"
  }
}
`})}),`
`,(0,u.jsxs)(n.p,{children:[`Then run `,(0,u.jsx)(n.code,{children:`yarn check-contrast`}),` (or `,(0,u.jsx)(n.code,{children:`npm run check-contrast`}),`) in CI.`]}),`
`,(0,u.jsxs)(n.p,{children:[`Pass your theme files or your compiled CSS. Your `,(0,u.jsx)(n.code,{children:`--op-*`}),` values are applied on top of the Optics tokens, and the last value of each token wins.`]}),`
`,(0,u.jsx)(n.h2,{id:`options`,children:`Options`}),`
`,(0,u.jsxs)(n.ul,{children:[`
`,(0,u.jsxs)(n.li,{children:[(0,u.jsx)(n.code,{children:`--hsl`}),` or `,(0,u.jsx)(n.code,{children:`--oklch`}),`: the build to check against. By default it is detected from your files (`,(0,u.jsx)(n.code,{children:`-s`}),` or `,(0,u.jsx)(n.code,{children:`hsl()`}),` means HSL, `,(0,u.jsx)(n.code,{children:`-c`}),` or `,(0,u.jsx)(n.code,{children:`oklch()`}),` means OKLCH).`]}),`
`,(0,u.jsxs)(n.li,{children:[(0,u.jsx)(n.code,{children:`--min=4.5`}),`: the ratio `,(0,u.jsx)(n.code,{children:`on`}),` text needs.`]}),`
`,(0,u.jsxs)(n.li,{children:[(0,u.jsx)(n.code,{children:`--alt-min=4.5`}),`: the ratio `,(0,u.jsx)(n.code,{children:`on-alt`}),` text needs. Use `,(0,u.jsx)(n.code,{children:`--alt-min=3`}),` to allow AA large text.`]}),`
`,(0,u.jsxs)(n.li,{children:[(0,u.jsx)(n.code,{children:`--report`}),`: list every pair and its ratio, without failing.`]}),`
`]}),`
`,(0,u.jsxs)(n.p,{children:[`It exits with `,(0,u.jsx)(n.code,{children:`1`}),` if any pair fails, and `,(0,u.jsx)(n.code,{children:`2`}),` if it can't read your theme.`]}),`
`,(0,u.jsx)(n.h2,{id:`limits`,children:`Limits`}),`
`,(0,u.jsxs)(n.ul,{children:[`
`,(0,u.jsxs)(n.li,{children:[`Selectors are ignored, so check each `,(0,u.jsx)(n.a,{href:`?path=/docs/overview-themes--docs#dynamic-themes`,children:`dynamic theme`}),` file on its own.`]}),`
`,(0,u.jsx)(n.li,{children:`Colors outside sRGB are clipped, as browsers do on most screens. OKLCH colors at 0% or 100% lightness are black or white, whatever their chroma.`}),`
`,(0,u.jsxs)(n.li,{children:[`A checked color that is set inside `,(0,u.jsx)(n.code,{children:`@media`}),`, `,(0,u.jsx)(n.code,{children:`@supports`}),`, `,(0,u.jsx)(n.code,{children:`@container`}),`, or `,(0,u.jsx)(n.code,{children:`@layer`}),`, or that uses a variable set there, stops the check with exit code `,(0,u.jsx)(n.code,{children:`2`}),`. Conditions change when it applies, and layers change which value wins. Set dark mode colors with `,(0,u.jsx)(n.code,{children:`light-dark()`}),` instead. Other variables, such as fonts, are fine there.`]}),`
`,(0,u.jsxs)(n.li,{children:[(0,u.jsx)(n.code,{children:`@import`}),` rules are followed, relative to the importing file. Imports of Optics itself and of remote URLs (such as fonts) are skipped. An import that can't be read or found stops the check with exit code `,(0,u.jsx)(n.code,{children:`2`}),`, so pass your compiled CSS if your imports need a bundler to resolve.`]}),`
`,(0,u.jsxs)(n.li,{children:[`Translucent colors, and `,(0,u.jsx)(n.code,{children:`calc()`}),` that mixes units (such as `,(0,u.jsx)(n.code,{children:`calc(50% + 5%)`}),`), can't be measured, so the check stops with exit code `,(0,u.jsx)(n.code,{children:`2`}),`.`]}),`
`,(0,u.jsxs)(n.li,{children:[`Only the scale steps and their `,(0,u.jsx)(n.code,{children:`on`}),` colors are checked, not your own color pairs.`]}),`
`]})]})}function l(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,u.jsx)(n,{...e,children:(0,u.jsx)(c,{...e})}):c(e)}var u;e((()=>{u=n(),a(),i(),o()}))();export{l as default};