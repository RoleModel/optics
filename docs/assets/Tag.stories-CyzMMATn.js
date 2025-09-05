import{c as p}from"./Button-B21kpIpO.js";const m=({label:c,type:l="readonly",iconLeft:d=!1,iconRight:g=!1})=>{const e=document.createElement("div"),i=document.createElement("span");return i.innerText=c,i.className="tag__label",e.append(i),d&&e.prepend(p({variant:"default",noBorder:!0,icon:"close",pill:!0})),g&&e.append(p({variant:"default",noBorder:!0,icon:"close",pill:!0})),e.className=["tag",`tag--${l}`].filter(Boolean).join(" "),e},u={title:"Components/Tag",render:({label:c,...l})=>m({label:c,...l}),argTypes:{label:{control:"text"},type:{control:{type:"select"},options:["readonly","primary","danger","warning","info","notice"]},iconLeft:{control:"boolean"},iconRight:{control:"boolean"}}},r={args:{label:"Readonly",type:"readonly"}},a={args:{label:"Primary",type:"primary"}},n={args:{label:"Danger",type:"danger"}},o={args:{label:"Warning",type:"warning"}},t={args:{label:"Info",type:"info"}},s={args:{label:"Notice",type:"notice"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Readonly',
    type: 'readonly'
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Primary',
    type: 'primary'
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Danger',
    type: 'danger'
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Warning',
    type: 'warning'
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Info',
    type: 'info'
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Notice',
    type: 'notice'
  }
}`,...s.parameters?.docs?.source}}};const y=["Readonly","Primary","Danger","Warning","Info","Notice"],f=Object.freeze(Object.defineProperty({__proto__:null,Danger:n,Info:t,Notice:s,Primary:a,Readonly:r,Warning:o,__namedExportsOrder:y,default:u},Symbol.toStringTag,{value:"Module"}));export{n as D,t as I,s as N,a as P,r as R,f as T,o as W};
