import{i as e}from"./preload-helper-xPQekRTU.js";import{T as t,l as n,u as r}from"./blocks-uVOOWdqL.js";import{s as i}from"./chunk-LITCR56V-BmCoDI8n.js";import{t as a}from"./mdx-react-shim-eO_HyXU9.js";var o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C=e((()=>{o=`@rolemodel/optics`,s=`2.4.0`,c=`yarn@4.8.1`,l=`Optics is a css package that provides base styles and components that can be integrated and customized in a variety of projects.`,u=`dist/css/optics.css`,d={test:`exit 0`,build:`yarn build:css && yarn build:css-min && yarn build:tokens && yarn build:files`,"build:css":`postcss 'src/optics*.css' -d dist/css`,"build:css-min":`postcss 'src/optics*.css' -d dist/css --ext .min.css --env=minify`,"build:tokens":`node build_token_json --source=src/core/tokens --output=dist/tokens/tokens.json`,"build:files":`mkdir -p dist/css/addons; cp LICENSE README.md package.json dist/; cp -rL src/addons src/core src/components dist/css`,storybook:`storybook dev -p 6006 --docs`,"build-storybook":`storybook build --docs`,lint:`yarn lint:js && yarn lint:css`,"lint-fix":`yarn lint:js --fix && yarn lint:css --fix`,"lint:js":`eslint 'src/stories/**/*.js'`,"lint:css":`stylelint 'src/**/*.css'`,prettier:`prettier -w .`,"prettier-check":`prettier -c .`,"sanity-check":`yarn lint && yarn prettier && yarn build && yarn build-storybook && rm -rf ./dist && rm -rf ./storybook-static`,generate:`node ./tools/generate.js`},f={type:`git`,url:`git+https://github.com/RoleModel/optics.git`},p=[`Design`,`CSS`,`System`,`RoleModel`,`Optics`],m=`RoleModel Software`,h={url:`https://github.com/RoleModel/optics/issues`},g=`https://github.com/RoleModel/optics#readme`,_={"@RoleModel:registry":`https://npm.pkg.github.com`},v={"modern-css-reset":`^1.4.0`},y={"@babel/preset-env":`^8.0.2`,"@eslint/js":`^10.0.1`,"@storybook/addon-docs":`^10.4.6`,"@storybook/html-vite":`^10.4.6`,cssnano:`^8.0.2`,eslint:`^10.5.0`,"eslint-config-prettier":`^10.1.8`,"eslint-plugin-storybook":`^10.4.6`,"generate-template-files":`^3.2.1`,globals:`^17.6.0`,postcss:`^8.5.15`,"postcss-cli":`^11.0.1`,"postcss-import":`^16.1.1`,prettier:`^3.8.4`,storybook:`^10.4.6`,"storybook-design-token":`^5.0.0`,"style-loader":`^4.0.0`,stylelint:`^17.13.0`,"stylelint-config-idiomatic-order":`^10.0.0`,"stylelint-prettier":`^5.0.3`,"stylelint-use-logical":`^2.1.3`,vite:`^8.0.16`},b={"tom-select":`^2.0.0`},x={"tom-select":{optional:!0}},S={name:o,version:s,packageManager:c,description:l,main:u,scripts:d,repository:f,keywords:p,author:m,license:`MIT`,bugs:h,homepage:g,publishConfig:_,dependencies:v,devDependencies:y,peerDependencies:b,peerDependenciesMeta:x}}));function w(e){let r={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,img:`img`,p:`p`,pre:`pre`,...t(),...e.components};return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(n,{title:`Introduction`}),`
`,(0,E.jsx)(r.h1,{id:`optics`,children:`Optics`}),`
`,(0,E.jsx)(`h2`,{children:`A RoleModel Design System.`}),`
`,(0,E.jsxs)(`p`,{children:[`v`,S.version]}),`
`,(0,E.jsxs)(`div`,{className:`flex gap-sm`,children:[(0,E.jsx)(r.p,{children:(0,E.jsx)(r.a,{href:`https://github.com/RoleModel/optics`,rel:`nofollow`,children:(0,E.jsx)(r.img,{src:`https://img.shields.io/badge/GitHub-Code-232323.svg?logo=github&logoColor=white`,alt:`Code`})})}),(0,E.jsx)(r.p,{children:(0,E.jsx)(r.a,{href:`https://github.com/RoleModel/optics/blob/main/LICENSE`,rel:`nofollow`,children:(0,E.jsx)(r.img,{src:`https://img.shields.io/badge/license-MIT-232323.svg`,alt:`License`})})}),(0,E.jsx)(r.p,{children:(0,E.jsx)(r.a,{href:`https://www.npmjs.com/package/@rolemodel/optics`,rel:`nofollow`,children:(0,E.jsx)(r.img,{src:`https://img.shields.io/npm/dw/@rolemodel/optics?label=npm`,alt:`npm`})})}),(0,E.jsx)(r.p,{children:(0,E.jsx)(r.a,{href:`https://github.com/RoleModel/optics/actions/workflows/linting.yml`,rel:`nofollow`,children:(0,E.jsx)(r.img,{src:`https://github.com/RoleModel/optics/actions/workflows/linting.yml/badge.svg`,alt:`Linting CI`})})})]}),`
`,(0,E.jsxs)(`div`,{className:`flex flex-col gap-md`,children:[(0,E.jsxs)(`div`,{className:`card card--company card--shadow-x-small`,children:[(0,E.jsxs)(`div`,{className:`card__info`,children:[(0,E.jsx)(`img`,{className:`card__info-logo`,src:`./public/rms-logo.svg`,alt:`RoleModel Software Logo`}),(0,E.jsx)(`span`,{children:`Optics, a RoleModel Software innovation, is a product of our mission to deliver exceptional digital products.`})]}),(0,E.jsxs)(`a`,{className:`btn sb-unstyled`,href:`https://rolemodelsoftware.com/`,target:`_blank`,children:[(0,E.jsx)(`span`,{children:`Learn About RoleModel Software`}),(0,E.jsx)(`span`,{className:`material-symbols-outlined`,children:`open_in_new`})]})]}),(0,E.jsxs)(`div`,{className:`card card--company card--shadow-x-small`,children:[(0,E.jsxs)(`div`,{className:`card__info`,children:[(0,E.jsx)(`img`,{className:`card__info-logo`,src:`./public/optics-logo.svg`,alt:`Optics Logo`}),(0,E.jsx)(`span`,{children:(0,E.jsx)(r.p,{children:`Optics embodies the RoleModel ethos of deep collaboration, uniting our team's diverse expertise with the shared
goal of crafting excellent design solutions and our commitment to Character, Collaboration, and Craftsmanship.`})})]}),(0,E.jsxs)(`a`,{className:`btn sb-unstyled`,href:`https://optics.rolemodel.design/`,target:`_blank`,children:[(0,E.jsx)(`span`,{children:`Learn About The Vision Behind Optics`}),(0,E.jsx)(`span`,{className:`material-symbols-outlined`,children:`open_in_new`})]})]})]}),`
`,(0,E.jsx)(r.p,{children:`Optics is a CSS package that provides base styles and components that can be integrated and customized in a variety of projects.`}),`
`,(0,E.jsx)(r.h2,{id:`installation`,children:`Installation`}),`
`,(0,E.jsx)(r.h3,{id:`npm`,children:`NPM`}),`
`,(0,E.jsx)(r.pre,{children:(0,E.jsx)(r.code,{className:`language-sh`,children:`npm install @rolemodel/optics
`})}),`
`,(0,E.jsx)(r.h3,{id:`yarn`,children:`Yarn`}),`
`,(0,E.jsx)(r.pre,{children:(0,E.jsx)(r.code,{className:`language-sh`,children:`yarn add @rolemodel/optics
`})}),`
`,(0,E.jsx)(r.h2,{id:`getting-started`,children:`Getting Started`}),`
`,(0,E.jsx)(r.h3,{id:`importing-with-a-compiler`,children:`Importing with a compiler`}),`
`,(0,E.jsxs)(r.p,{children:[`You can add this import to the top of your root level `,(0,E.jsx)(r.code,{children:`css`}),` file.`]}),`
`,(0,E.jsx)(r.pre,{children:(0,E.jsx)(r.code,{className:`language-css`,children:`@import '@rolemodel/optics'; /* Using webpack to compile */
/* Or */
@import '@rolemodel/optics/dist/css/optics'; /* Using a different compiler */
/* Or */
@import '@rolemodel/optics/dist/css/optics+no_icons'; /* Don't load the default icons library */
/* Or */
@import '@rolemodel/optics/dist/css/optics.min.css'; /* If you want a single file with all the styles in it. */
/* Or */
@import '@rolemodel/optics/dist/css/optics+phosphor_icons.css'; /* Using a different icon pack */
/* Or */
@import '@rolemodel/optics/dist/css/optics+phosphor_icons.min.css'; /* If you want a single file with all the styles in it and a different icon pack. */
`})}),`
`,(0,E.jsx)(r.h3,{id:`importing-without-a-compiler`,children:`Importing without a compiler`}),`
`,(0,E.jsxs)(r.p,{children:[`To use Optics without compilation, use a CDN like `,(0,E.jsx)(r.a,{href:`https://www.jsdelivr.com/`,rel:`nofollow`,children:`jsDelivr`}),` or `,(0,E.jsx)(r.a,{href:`https://unpkg.com/`,rel:`nofollow`,children:`unpkg`}),`.
Add a link in your HTML head or an `,(0,E.jsx)(r.code,{children:`@import`}),` to the top of your root level `,(0,E.jsx)(r.code,{children:`css`}),` file.`]}),`
`,(0,E.jsx)(r.pre,{children:(0,E.jsx)(r.code,{className:`language-html`,children:`<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@rolemodel/optics@[desired version]/dist/css/optics.min.css"
/>
<!-- Or -->
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@rolemodel/optics@[desired version]/dist/css/optics+phosphor_icons.min.css"
/>
`})}),`
`,(0,E.jsx)(r.pre,{children:(0,E.jsx)(r.code,{className:`language-css`,children:`@import 'https://cdn.jsdelivr.net/npm/@rolemodel/optics@[desired version]/dist/css/optics.min.css';
`})}),`
`,(0,E.jsxs)(r.p,{children:[`Note: You can use this method to use Optics with `,(0,E.jsx)(r.a,{href:`https://codepen.io/`,rel:`nofollow`,children:`CodePen`}),`. In a CodePen project, go to `,(0,E.jsx)(r.code,{children:`Settings > CSS`}),`, find the section for adding external stylesheets, and add the CDN link as a resource.`]})]})}function T(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,E.jsx)(n,{...e,children:(0,E.jsx)(w,{...e})}):w(e)}var E;e((()=>{E=i(),a(),r(),C()}))();export{T as default};