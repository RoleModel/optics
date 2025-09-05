import{b as a}from"./Form-DW9OsOtr.js";const n={title:"Components/Form/Input",render:({type:r,...t})=>a({type:r,...t}),argTypes:{type:{control:{type:"select"},options:["Text","Number","Email","Password","Tel","Checkbox","Radio","Color","Date","File"]},size:{control:{type:"select"},options:["small","medium","large"]},noBorder:{control:{type:"boolean"}},readonly:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},indeterminate:{control:{type:"boolean"},if:{arg:"type",eq:"Checkbox"}}}},e={args:{type:"Text"}},o={args:{type:"color"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'Text'
  }
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'color'
  }
}`,...o.parameters?.docs?.source}}};const l=["Default","Color"];export{o as Color,e as Default,l as __namedExportsOrder,n as default};
