import{b as m}from"./Form-Bc6eV-nO.js";const i={title:"Content Components/Form/Input",render:({type:p,...c})=>m({type:p,...c}),argTypes:{type:{control:{type:"select"},options:["Text","Number","Email","Password","Tel","Checkbox","Radio","Color","Date","File"]},size:{control:{type:"select"},options:["small","medium","large"]},noBorder:{control:{type:"boolean"}},readonly:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},indeterminate:{control:{type:"boolean"},if:{arg:"type",eq:"Checkbox"}}}},e={args:{type:"Text"}},o={args:{type:"color"}};var r,t,a;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    type: 'Text'
  }
}`,...(a=(t=e.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};var s,n,l;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    type: 'color'
  }
}`,...(l=(n=o.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};const u=["Default","Color"];export{o as Color,e as Default,u as __namedExportsOrder,i as default};
