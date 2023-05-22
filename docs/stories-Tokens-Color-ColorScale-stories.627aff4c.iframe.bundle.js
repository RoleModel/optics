"use strict";(self.webpackChunk_rolemodel_optics=self.webpackChunk_rolemodel_optics||[]).push([[8868],{"./src/stories/Tokens/Color/ColorScale.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Danger:()=>Danger,Info:()=>Info,Neutral:()=>Neutral,Notice:()=>Notice,Primary:()=>Primary,Warning:()=>Warning,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ColorScale_stories});var utils=__webpack_require__("./src/stories/helpers/utils.js");const ColorScale_stories={title:"Tokens/Color/Color Scale",render:({scale,...args})=>(({scale="primary",step="base"})=>{const element=document.createElement("div"),backgroundColor=`var(--op-color-${(0,utils.XB)(scale)}-${(0,utils.XB)(step)})`,color=`var(--op-color-${(0,utils.XB)(scale)}-on-${(0,utils.XB)(step)})`,colorAlt=`var(--op-color-${(0,utils.XB)(scale)}-on-${(0,utils.XB)(step)}-alt)`;return element.style.backgroundColor=backgroundColor,element.classList="card-padded",element.innerHTML=`\n  <p style="color: ${color}">Background: ${(0,utils.kC)(scale)} ${(0,utils.kC)(step)}</p>\n  <p style="color: ${color}">Text: ${(0,utils.kC)(scale)} On ${(0,utils.kC)(step)}</p>\n  <p style="color: ${colorAlt}">Alt: ${(0,utils.kC)(scale)} On ${(0,utils.kC)(step)} Alt</p>\n`,element})({scale,...args}),argTypes:{scale:{control:{type:"select"},options:utils.QL},step:{control:{type:"select"},options:utils.S6}}},Primary={args:{scale:"primary",step:"base"}},Neutral={args:{scale:"neutral",step:"base"}},Warning={args:{scale:"warning",step:"base"}},Danger={args:{scale:"danger",step:"base"}},Info={args:{scale:"info",step:"base"}},Notice={args:{scale:"notice",step:"base"}};Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"{\n  args: {\n    scale: 'primary',\n    step: 'base'\n  }\n}",...Primary.parameters?.docs?.source}}},Neutral.parameters={...Neutral.parameters,docs:{...Neutral.parameters?.docs,source:{originalSource:"{\n  args: {\n    scale: 'neutral',\n    step: 'base'\n  }\n}",...Neutral.parameters?.docs?.source}}},Warning.parameters={...Warning.parameters,docs:{...Warning.parameters?.docs,source:{originalSource:"{\n  args: {\n    scale: 'warning',\n    step: 'base'\n  }\n}",...Warning.parameters?.docs?.source}}},Danger.parameters={...Danger.parameters,docs:{...Danger.parameters?.docs,source:{originalSource:"{\n  args: {\n    scale: 'danger',\n    step: 'base'\n  }\n}",...Danger.parameters?.docs?.source}}},Info.parameters={...Info.parameters,docs:{...Info.parameters?.docs,source:{originalSource:"{\n  args: {\n    scale: 'info',\n    step: 'base'\n  }\n}",...Info.parameters?.docs?.source}}},Notice.parameters={...Notice.parameters,docs:{...Notice.parameters?.docs,source:{originalSource:"{\n  args: {\n    scale: 'notice',\n    step: 'base'\n  }\n}",...Notice.parameters?.docs?.source}}};const __namedExportsOrder=["Primary","Neutral","Warning","Danger","Info","Notice"]},"./src/stories/helpers/utils.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{QL:()=>scales,S6:()=>steps,XB:()=>parameterize,fh:()=>createChildren,jF:()=>getHSLFromVar,kC:()=>capitalize});const createChildren=(element,count)=>{Array.from(Array(count)).forEach(((_,_i)=>{const box=document.createElement("div");box.style.width="var(--op-space-x-large)",box.style.minHeight="var(--op-space-x-large)",box.style.backgroundColor="var(--op-color-primary-original)",element.appendChild(box)}))},capitalize=string=>string.charAt(0).toUpperCase()+string.slice(1),parameterize=string=>string.replace(" ","-"),steps=["plus-max","plus-eight","plus-seven","plus-six","plus-five","plus-four","plus-three","plus-two","plus-one","base","minus-one","minus-two","minus-three","minus-four","minus-five","minus-six","minus-seven","minus-eight","minus-max"],scales=["primary","neutral","alerts-warning","alerts-danger","alerts-info","alerts-notice"],getHSLFromVar=variable=>window.getComputedStyle(document.documentElement).getPropertyValue(variable).trim()}}]);