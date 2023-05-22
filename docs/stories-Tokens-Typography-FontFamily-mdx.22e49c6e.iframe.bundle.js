"use strict";(self.webpackChunk_rolemodel_optics=self.webpackChunk_rolemodel_optics||[]).push([[4166,6388],{"./node_modules/@storybook/addon-links/dist/react/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _chunk_DXNAW7Q2_mjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-links/dist/chunk-DXNAW7Q2.mjs"),react__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/@storybook/addon-links/dist/chunk-JT3VIYBO.mjs"),__webpack_require__("./node_modules/react/index.js")),LinkTo=class extends react__WEBPACK_IMPORTED_MODULE_2__.PureComponent{constructor(){super(...arguments),this.state={href:"/"},this.updateHref=async()=>{let{kind,title=kind,story,name=story}=this.props;if(title&&name){let href=await(0,_chunk_DXNAW7Q2_mjs__WEBPACK_IMPORTED_MODULE_0__.ew)(title,name);this.setState({href})}},this.handleClick=()=>{let{kind,title=kind,story,name=story}=this.props;title&&name&&(0,_chunk_DXNAW7Q2_mjs__WEBPACK_IMPORTED_MODULE_0__.c4)({title,name})}}componentDidMount(){this.updateHref()}componentDidUpdate(prevProps){let{kind,title,story,name}=this.props;(prevProps.kind!==kind||prevProps.story!==story||prevProps.title!==title||prevProps.name!==name)&&this.updateHref()}render(){let{kind,title=kind,story,name=story,children,...rest}=this.props,{href}=this.state;return react__WEBPACK_IMPORTED_MODULE_2__.createElement("a",{href,onClick:e=>((e,cb=(_e=>{}))=>{(e=>!(0!==e.button||e.altKey||e.ctrlKey||e.metaKey||e.shiftKey))(e)&&(e.preventDefault(),cb(e))})(e,this.handleClick),...rest},children)}};LinkTo.defaultProps={children:void 0}},"./src/stories/Tokens/Typography/FontFamily.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_FontFamily_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/stories/Tokens/Typography/FontFamily.stories.js"),storybook_design_token__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/storybook-design-token/dist/index.mjs");__webpack_require__("./node_modules/@storybook/addon-links/dist/react/index.mjs");const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_5__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{})})):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",p:"p",pre:"pre",code:"code",h2:"h2",strong:"strong",a:"a"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_5__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__.h_,{of:_FontFamily_stories__WEBPACK_IMPORTED_MODULE_2__}),"\n","\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"font-family",children:"Font Family"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"The Font Family token can be used to change the font used when displaying text"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"The default font is set to Noto Sans which is loaded via the Google Fonts CDN"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-css",children:"@import 'https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap';\n@import 'https://fonts.googleapis.com/css2?family=Noto+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap';\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"playground",children:"Playground"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__.Xz,{of:_FontFamily_stories__WEBPACK_IMPORTED_MODULE_2__.Default}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__.ZX,{of:_FontFamily_stories__WEBPACK_IMPORTED_MODULE_2__.Default}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"usage",children:"Usage"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"This token can be applied like:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-css",children:"html {\n  font-family: var(--op-font-family);\n}\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"available-tokens-and-their-definitions",children:"Available tokens and their definitions"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(storybook_design_token__WEBPACK_IMPORTED_MODULE_3__.J,{categoryName:"Font Family",viewType:"card"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"custom-font",children:"Custom Font"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"If you want to change the font used by default, you can add a new font import to your stylesheet and apply it using the font family token."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:"Note"})," Not all fonts have the same baseline line height. This can cause alignment issues in your text that may require you to adjust the default line height tokens. See ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"?path=/docs/tokens-typography-line-height--base#custom-font",children:"Adjusting Line Heights"})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-css",children:"@import 'https://fonts.googleapis.com/css2?family=Tilt+Neon&display=swap';\n\n:root {\n  --op-font-family: 'Tilt Neon', sans-serif;\n}\n"})})]})}}},"./src/stories/Tokens/Typography/FontFamily.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Alternate:()=>Alternate,Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>FontFamily_stories});const FontFamily_stories={title:"Tokens/Typography/Font Family",render:({family,...args})=>(({family="Noto Sans"})=>{const element=document.createElement("p");return element.innerText=`Font Family Demo using: ${family}`,"Tilt Neon"===family&&(element.className="font-family-demo--alternative"),element})({family,...args}),argTypes:{family:{control:{type:"select"},options:["Noto Sans","Tilt Neon"]}}},Default={args:{family:"Noto Sans"}},Alternate={args:{family:"Tilt Neon"}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    family: 'Noto Sans'\n  }\n}",...Default.parameters?.docs?.source}}},Alternate.parameters={...Alternate.parameters,docs:{...Alternate.parameters?.docs,source:{originalSource:"{\n  args: {\n    family: 'Tilt Neon'\n  }\n}",...Alternate.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Alternate"]}}]);