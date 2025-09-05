import{j as e,M as l}from"./blocks-DX_T_ZP4.js";import{useMDXComponents as n}from"./index-BODO6xtx.js";import"./preload-helper-D9Z9MdNV.js";import"./iframe-CivF7LaH.js";const t="2.1.5",r={version:t};function i(o){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...n(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Introduction"}),`
`,e.jsx(s.h1,{id:"optics",children:"Optics"}),`
`,e.jsx("h2",{children:"A RoleModel Design System."}),`
`,e.jsxs("span",{children:["v",r.version]}),`
`,e.jsxs("div",{className:"flex gap-sm",children:[e.jsx(s.p,{children:e.jsx(s.a,{href:"https://github.com/RoleModel/optics",rel:"nofollow",children:e.jsx(s.img,{src:"https://img.shields.io/badge/GitHub-Code-232323.svg?logo=github&logoColor=white",alt:"Code"})})}),e.jsx(s.p,{children:e.jsx(s.a,{href:"https://github.com/RoleModel/optics/blob/main/LICENSE",rel:"nofollow",children:e.jsx(s.img,{src:"https://img.shields.io/badge/license-MIT-232323.svg",alt:"License"})})}),e.jsx(s.p,{children:e.jsx(s.a,{href:"https://www.npmjs.com/package/@rolemodel/optics",rel:"nofollow",children:e.jsx(s.img,{src:"https://img.shields.io/npm/dw/@rolemodel/optics?label=npm",alt:"npm"})})}),e.jsx(s.p,{children:e.jsx(s.a,{href:"https://github.com/RoleModel/optics/actions/workflows/linting.yml",rel:"nofollow",children:e.jsx(s.img,{src:"https://github.com/RoleModel/optics/actions/workflows/linting.yml/badge.svg",alt:"Linting CI"})})})]}),`
`,e.jsxs("div",{className:"flex flex-col gap-md",children:[e.jsxs("div",{className:"card card--company card--shadow-x-small",children:[e.jsxs("div",{className:"card__info",children:[e.jsx("img",{className:"card__info-logo",src:"./public/rms-logo.svg",alt:"RoleModel Software Logo"}),e.jsx("span",{children:"Optics, a RoleModel Software innovation, is a product of our mission to deliver exceptional digital products."})]}),e.jsxs("a",{className:"btn sb-unstyled",href:"https://rolemodelsoftware.com/",target:"_blank",children:[e.jsx("span",{children:"Learn About RoleModel Software"}),e.jsx("span",{className:"material-symbols-outlined",children:"open_in_new"})]})]}),e.jsxs("div",{className:"card card--company card--shadow-x-small",children:[e.jsxs("div",{className:"card__info",children:[e.jsx("img",{className:"card__info-logo",src:"./public/optics-logo.svg",alt:"Optics Logo"}),e.jsx("span",{children:e.jsx(s.p,{children:`Optics embodies the RoleModel ethos of deep collaboration, uniting our team's diverse expertise with the shared
goal of crafting excellent design solutions and our commitment to Character, Collaboration, and Craftsmanship.`})})]}),e.jsxs("a",{className:"btn sb-unstyled",href:"https://optics.rolemodel.design/",target:"_blank",children:[e.jsx("span",{children:"Learn About The Vision Behind Optics"}),e.jsx("span",{className:"material-symbols-outlined",children:"open_in_new"})]})]})]}),`
`,e.jsx(s.p,{children:"Optics is a CSS package that provides base styles and components that can be integrated and customized in a variety of projects."}),`
`,e.jsx(s.h2,{id:"installation",children:"Installation"}),`
`,e.jsx(s.h3,{id:"npm",children:"NPM"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-sh",children:`npm install @rolemodel/optics
`})}),`
`,e.jsx(s.h3,{id:"yarn",children:"Yarn"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-sh",children:`yarn add @rolemodel/optics
`})}),`
`,e.jsx(s.h2,{id:"getting-started",children:"Getting Started"}),`
`,e.jsx(s.h3,{id:"importing-with-a-compiler",children:"Importing with a compiler"}),`
`,e.jsxs(s.p,{children:["You can add this import to the top of your root level ",e.jsx(s.code,{children:"css"})," file."]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-css",children:`@import '@rolemodel/optics'; /* Using webpack to compile */
/* Or */
@import '@rolemodel/optics/dist/css/optics'; /* Using a different compiler */
/* Or */
@import '@rolemodel/optics/dist/css/optics.min.css'; /* If you want a single file with all the styles in it. */
`})}),`
`,e.jsx(s.h3,{id:"importing-without-a-compiler",children:"Importing without a compiler"}),`
`,e.jsxs(s.p,{children:["To use Optics without compilation, use a CDN like ",e.jsx(s.a,{href:"https://www.jsdelivr.com/",rel:"nofollow",children:"jsDelivr"})," or ",e.jsx(s.a,{href:"https://unpkg.com/",rel:"nofollow",children:"unpkg"}),`.
Add a link in your HTML head or an `,e.jsx(s.code,{children:"@import"})," to the top of your root level ",e.jsx(s.code,{children:"css"})," file."]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@rolemodel/optics@[desired version]/dist/css/optics.min.css"
/>
`})}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-css",children:`@import 'https://cdn.jsdelivr.net/npm/@rolemodel/optics@[desired version]/dist/css/optics.min.css';
`})}),`
`,e.jsxs(s.p,{children:["Note: You can use this method to use Optics with ",e.jsx(s.a,{href:"https://codepen.io/",rel:"nofollow",children:"CodePen"}),". In a CodePen project, go to ",e.jsx(s.code,{children:"Settings > CSS"}),", find the section for adding external stylesheets, and add the CDN link as a resource."]})]})}function p(o={}){const{wrapper:s}={...n(),...o.components};return s?e.jsx(s,{...o,children:e.jsx(i,{...o})}):i(o)}export{p as default};
