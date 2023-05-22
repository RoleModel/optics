"use strict";(self.webpackChunk_rolemodel_optics=self.webpackChunk_rolemodel_optics||[]).push([[9529],{"./src/stories/Components/Badge/Badge.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Danger:()=>Danger,Default:()=>Default,Info:()=>Info,Notice:()=>Notice,NotificationButton:()=>NotificationButton,Pill:()=>Pill,Primary:()=>Primary,Warning:()=>Warning,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Badge_stories});var Icon=__webpack_require__("./src/stories/Components/Icon/Icon.js");const Badge_stories={title:"Components/Badge",render:({label,...args})=>(({label,style="default",pill=!1,inButton="no",showIcons=!1})=>{const badge=document.createElement("div");if(badge.innerText=label,badge.className=["default"===style?"badge":`badge-${style}`,pill?"badge--pill":""].filter(Boolean).join(" "),showIcons&&(badge.prepend((0,Icon.I)({name:"open_in_new"})),badge.appendChild((0,Icon.I)({name:"add"}))),"no"!==inButton){const button=document.createElement("button");return button.innerText="Notifications",button.className="btn-primary btn--with-badge",pill||(badge.className+=" badge--pill"),badge.className+=` badge--notification-${inButton}`,button.appendChild(badge),button}return badge})({label,...args}),argTypes:{label:{control:"text"},style:{control:{type:"select"},options:["default","primary","warning","danger","info","notice"]},pill:{control:"boolean"},inButton:{control:{type:"select"},options:["no","right","left"]},showIcons:{control:"boolean",description:"This is not a class. It just provides an example of using icons within a badge"}}},Default={args:{label:"Default",style:"default"}},Primary={args:{label:"Primary",style:"primary"}},Warning={args:{label:"Warning",style:"warning"}},Danger={args:{label:"Danger",style:"danger"}},Info={args:{label:"Info",style:"info"}},Notice={args:{label:"Notice",style:"notice"}},Pill={args:{label:"Pill",style:"default",pill:!0}},NotificationButton={args:{label:"5",style:"danger",pill:!0,inButton:"right"}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Default',\n    style: 'default'\n  }\n}",...Default.parameters?.docs?.source}}},Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Primary',\n    style: 'primary'\n  }\n}",...Primary.parameters?.docs?.source}}},Warning.parameters={...Warning.parameters,docs:{...Warning.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Warning',\n    style: 'warning'\n  }\n}",...Warning.parameters?.docs?.source}}},Danger.parameters={...Danger.parameters,docs:{...Danger.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Danger',\n    style: 'danger'\n  }\n}",...Danger.parameters?.docs?.source}}},Info.parameters={...Info.parameters,docs:{...Info.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Info',\n    style: 'info'\n  }\n}",...Info.parameters?.docs?.source}}},Notice.parameters={...Notice.parameters,docs:{...Notice.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Notice',\n    style: 'notice'\n  }\n}",...Notice.parameters?.docs?.source}}},Pill.parameters={...Pill.parameters,docs:{...Pill.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Pill',\n    style: 'default',\n    pill: true\n  }\n}",...Pill.parameters?.docs?.source}}},NotificationButton.parameters={...NotificationButton.parameters,docs:{...NotificationButton.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: '5',\n    style: 'danger',\n    pill: true,\n    inButton: 'right'\n  }\n}",...NotificationButton.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Primary","Warning","Danger","Info","Notice","Pill","NotificationButton"]},"./src/stories/Components/Icon/Icon.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>createIcon});const createIcon=({name,filled=!1,size="medium",weight="normal",emphasis="normal"})=>{const icon=document.createElement("span");return icon.innerText=name,icon.className=["material-symbols-outlined",filled?"icon--filled":"icon--outlined",`icon--${size}`,`icon--weight-${weight}`,`icon--${emphasis}-emphasis`].filter(Boolean).join(" "),icon}}}]);