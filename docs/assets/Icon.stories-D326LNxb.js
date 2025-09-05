import{c as i}from"./Icon-uqCTS4Mm.js";const l={title:"Components/Icon",render:({name:t,...n})=>i({name:t,...n}),argTypes:{iconPack:{control:{type:"select"},options:["Material Symbols Outlined","Phosphor","Tabler","Feather","Lucide"]},name:{control:"text"},filled:{control:"boolean"},size:{control:{type:"select"},options:["small","medium","large","x-large"]},weight:{control:{type:"select"},options:["thin","light","normal","semi-bold","bold"]},emphasis:{control:{type:"select"},options:["low","normal","high"]},duotone:{control:"boolean",if:{arg:"iconPack",eq:"Phosphor"}}}},e={args:{iconPack:"Material Symbols Outlined",name:"settings"}},a={args:{iconPack:"Material Symbols Outlined",name:"settings",filled:!0}},s={args:{iconPack:"Material Symbols Outlined",name:"settings",size:"large"}},o={args:{iconPack:"Material Symbols Outlined",name:"settings",weight:"bold"}},r={args:{iconPack:"Material Symbols Outlined",name:"settings",emphasis:"high"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    iconPack: 'Material Symbols Outlined',
    name: 'settings'
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    iconPack: 'Material Symbols Outlined',
    name: 'settings',
    filled: true
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    iconPack: 'Material Symbols Outlined',
    name: 'settings',
    size: 'large'
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    iconPack: 'Material Symbols Outlined',
    name: 'settings',
    weight: 'bold'
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    iconPack: 'Material Symbols Outlined',
    name: 'settings',
    emphasis: 'high'
  }
}`,...r.parameters?.docs?.source}}};const c=["Default","Filled","Large","Bold","Emphasis"],d=Object.freeze(Object.defineProperty({__proto__:null,Bold:o,Default:e,Emphasis:r,Filled:a,Large:s,__namedExportsOrder:c,default:l},Symbol.toStringTag,{value:"Module"}));export{o as B,e as D,r as E,a as F,d as I,s as L};
