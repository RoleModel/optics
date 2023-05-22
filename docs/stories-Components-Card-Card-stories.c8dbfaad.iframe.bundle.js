"use strict";(self.webpackChunk_rolemodel_optics=self.webpackChunk_rolemodel_optics||[]).push([[5072],{"./src/stories/Components/Card/Card.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Condensed:()=>Condensed,Full:()=>Full,Padded:()=>Padded,Plain:()=>Plain,Shadow:()=>Shadow,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Card_stories});const Card_stories={title:"Components/Card",render:({label,...args})=>(({padded=!1,condensed=!1,label,header="",body="",footer="",shadow="none"})=>{const card=document.createElement("div"),classes=[padded?"card-padded":"card",condensed?"card--condensed":"","none"===shadow?"":`card--shadow-${shadow}`].filter(Boolean).join(" ");return card.className=classes,header||body||footer||(card.innerHTML=label),header&&(card.innerHTML+=`\n  <div class='card__header'>\n    ${header}\n  </div>\n`),body&&(card.innerHTML+=`\n  <div class='card__body'>\n    ${body}\n  </div>\n`),footer&&(card.innerHTML+=`\n  <div class='card__footer'>\n    ${footer}\n  </div>\n`),card})({label,...args}),argTypes:{label:{control:"text"},padded:{control:"boolean"},condensed:{control:"boolean"},header:{control:"text"},body:{control:"text"},footer:{control:"text"},shadow:{control:{type:"select"},options:["none","x-small","small","medium","large","x-large"]}}},Plain={args:{label:"Plain"}},Padded={args:{padded:!0,label:"Padded"}},Full={args:{header:"Full",body:"Body",footer:"Footer"}},Condensed={args:{condensed:!0,header:"Condensed",body:"Body",footer:"Footer"}},Shadow={args:{shadow:"large",padded:!0,label:"Shadow"}};Plain.parameters={...Plain.parameters,docs:{...Plain.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Plain'\n  }\n}",...Plain.parameters?.docs?.source}}},Padded.parameters={...Padded.parameters,docs:{...Padded.parameters?.docs,source:{originalSource:"{\n  args: {\n    padded: true,\n    label: 'Padded'\n  }\n}",...Padded.parameters?.docs?.source}}},Full.parameters={...Full.parameters,docs:{...Full.parameters?.docs,source:{originalSource:"{\n  args: {\n    header: 'Full',\n    body: 'Body',\n    footer: 'Footer'\n  }\n}",...Full.parameters?.docs?.source}}},Condensed.parameters={...Condensed.parameters,docs:{...Condensed.parameters?.docs,source:{originalSource:"{\n  args: {\n    condensed: true,\n    header: 'Condensed',\n    body: 'Body',\n    footer: 'Footer'\n  }\n}",...Condensed.parameters?.docs?.source}}},Shadow.parameters={...Shadow.parameters,docs:{...Shadow.parameters?.docs,source:{originalSource:"{\n  args: {\n    shadow: 'large',\n    padded: true,\n    label: 'Shadow'\n  }\n}",...Shadow.parameters?.docs?.source}}};const __namedExportsOrder=["Plain","Padded","Full","Condensed","Shadow"]}}]);