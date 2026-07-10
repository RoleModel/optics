import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{i as t}from"./react-CaHZDgIm.js";import{s as n}from"./chunk-LITCR56V-BxXRPQK8.js";import{l as r,n as i,o as a,u as o}from"./blocks-nNA0HiVS.js";import{t as s}from"./mdx-react-shim-DIeO1dVO.js";import{n as c,t as l}from"./sourceCodeLink-C1o55bv0.js";import{CustomInlineSize as u,FourThree as d,Landscape as f,Portrait as p,Square as m,ThreeFour as h,ThreeTwo as g,TwoThree as _,With as v,Without as y,n as b,t as x}from"./Frame.stories-78o0YwPJ.js";function S(e){let n={a:`a`,code:`code`,h1:`h1`,h2:`h2`,p:`p`,...t(),...e.components};return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(r,{of:x}),`
`,(0,w.jsx)(n.h1,{id:`frame`,children:`Frame`}),`
`,(0,w.jsx)(`div`,{dangerouslySetInnerHTML:{__html:l({link:`core/utilities.css`}).outerHTML}}),`
`,(0,w.jsx)(n.p,{children:`The frame utility provides a simple way to constrain content to a consistent aspect ratio. It centers its content
and clips any overflow, so whatever it wraps fills a fixed shape regardless of its intrinsic dimensions.`}),`
`,(0,w.jsx)(n.p,{children:`While it's a natural fit for media like images and videos, the frame isn't limited to them — its primary job is
enforcing the aspect ratio, so it works just as well for cards, map embeds, charts, or any element that should hold
a fixed shape.`}),`
`,(0,w.jsxs)(n.p,{children:[`See `,(0,w.jsx)(n.a,{href:`?path=/docs/utilities-introduction--docs#higher-order-utilities-vs-components`,children:`Utility Introduction`}),` for more information.`]}),`
`,(0,w.jsxs)(n.p,{children:[`See `,(0,w.jsx)(n.a,{href:`?path=/docs/recipes-layout--docs#card-grid`,children:`Card Grid Layout`}),` for an example of how frames
can be used to keep media at a consistent aspect ratio within a card grid.`]}),`
`,(0,w.jsxs)(n.p,{children:[`Note: This utility uses the `,(0,w.jsx)(n.code,{children:`op`}),` prefix to avoid potential naming conflicts with other CSS frameworks.
This is a pattern we hope to move towards for all utilities in the future.`]}),`
`,(0,w.jsx)(n.h2,{id:`playground`,children:`Playground`}),`
`,(0,w.jsx)(i,{of:v}),`
`,(0,w.jsx)(a,{of:v}),`
`,(0,w.jsx)(n.h2,{id:`without`,children:`Without`}),`
`,(0,w.jsxs)(n.p,{children:[`A normal `,(0,w.jsx)(n.code,{children:`div`}),` without the frame utility`]}),`
`,(0,w.jsx)(i,{of:y}),`
`,(0,w.jsx)(n.h2,{id:`square`,children:`Square`}),`
`,(0,w.jsxs)(n.p,{children:[(0,w.jsx)(n.code,{children:`.op-frame.op-frame--square`}),` Crops media to a 1:1 aspect ratio. This is also the default when no aspect modifier is applied.`]}),`
`,(0,w.jsx)(i,{of:m}),`
`,(0,w.jsx)(n.h2,{id:`landscape`,children:`Landscape`}),`
`,(0,w.jsxs)(n.p,{children:[(0,w.jsx)(n.code,{children:`.op-frame.op-frame--landscape`}),` Crops media to a 16:9 aspect ratio.`]}),`
`,(0,w.jsx)(i,{of:f}),`
`,(0,w.jsx)(n.h2,{id:`portrait`,children:`Portrait`}),`
`,(0,w.jsxs)(n.p,{children:[(0,w.jsx)(n.code,{children:`.op-frame.op-frame--portrait`}),` Crops media to a 9:16 aspect ratio.`]}),`
`,(0,w.jsx)(i,{of:p}),`
`,(0,w.jsx)(n.h2,{id:`43`,children:`4:3`}),`
`,(0,w.jsxs)(n.p,{children:[(0,w.jsx)(n.code,{children:`.op-frame.op-frame--4-3`}),` Crops media to a 4:3 aspect ratio.`]}),`
`,(0,w.jsx)(i,{of:d}),`
`,(0,w.jsx)(n.h2,{id:`34`,children:`3:4`}),`
`,(0,w.jsxs)(n.p,{children:[(0,w.jsx)(n.code,{children:`.op-frame.op-frame--3-4`}),` Crops media to a 3:4 (inverse of 4:3) aspect ratio.`]}),`
`,(0,w.jsx)(i,{of:h}),`
`,(0,w.jsx)(n.h2,{id:`32`,children:`3:2`}),`
`,(0,w.jsxs)(n.p,{children:[(0,w.jsx)(n.code,{children:`.op-frame.op-frame--3-2`}),` Crops media to a 3:2 aspect ratio.`]}),`
`,(0,w.jsx)(i,{of:g}),`
`,(0,w.jsx)(n.h2,{id:`23`,children:`2:3`}),`
`,(0,w.jsxs)(n.p,{children:[(0,w.jsx)(n.code,{children:`.op-frame.op-frame--2-3`}),` Crops media to a 2:3 (inverse of 3:2) aspect ratio.`]}),`
`,(0,w.jsx)(i,{of:_}),`
`,(0,w.jsx)(n.h2,{id:`custom-inline-size`,children:`Custom Inline Size`}),`
`,(0,w.jsxs)(n.p,{children:[`The `,(0,w.jsx)(n.code,{children:`--_op-frame-inline-size`}),` custom property controls the frame's `,(0,w.jsx)(n.code,{children:`max-inline-size`}),` (defaults to `,(0,w.jsx)(n.code,{children:`100%`}),`).
Set it inline to constrain the frame to a smaller width while preserving its aspect ratio.`]}),`
`,(0,w.jsx)(i,{of:u})]})}function C(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,w.jsx)(n,{...e,children:(0,w.jsx)(S,{...e})}):S(e)}var w;e((()=>{w=n(),s(),o(),b(),c()}))();export{C as default};