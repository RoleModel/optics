import{c as M}from"./Icon-uqCTS4Mm.js";const f={title:"Visual Components/Icon",render:({name:O,...k})=>M({name:O,...k}),argTypes:{iconPack:{control:{type:"select"},options:["Material Symbols Outlined","Phosphor","Tabler","Feather","Lucide"]},name:{control:"text"},filled:{control:"boolean"},size:{control:{type:"select"},options:["small","medium","large","x-large"]},weight:{control:{type:"select"},options:["thin","light","normal","semi-bold","bold"]},emphasis:{control:{type:"select"},options:["low","normal","high"]},duotone:{control:"boolean",if:{arg:"iconPack",eq:"Phosphor"}}}},e={args:{iconPack:"Material Symbols Outlined",name:"settings"}},a={args:{iconPack:"Material Symbols Outlined",name:"settings",filled:!0}},s={args:{iconPack:"Material Symbols Outlined",name:"settings",size:"large"}},o={args:{iconPack:"Material Symbols Outlined",name:"settings",weight:"bold"}},r={args:{iconPack:"Material Symbols Outlined",name:"settings",emphasis:"high"}};var t,n,i;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    iconPack: 'Material Symbols Outlined',
    name: 'settings'
  }
}`,...(i=(n=e.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var l,c,m;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    iconPack: 'Material Symbols Outlined',
    name: 'settings',
    filled: true
  }
}`,...(m=(c=a.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var d,g,p;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    iconPack: 'Material Symbols Outlined',
    name: 'settings',
    size: 'large'
  }
}`,...(p=(g=s.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};var u,b,h;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    iconPack: 'Material Symbols Outlined',
    name: 'settings',
    weight: 'bold'
  }
}`,...(h=(b=o.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var S,y,P;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    iconPack: 'Material Symbols Outlined',
    name: 'settings',
    emphasis: 'high'
  }
}`,...(P=(y=r.parameters)==null?void 0:y.docs)==null?void 0:P.source}}};const _=["Default","Filled","Large","Bold","Emphasis"],w=Object.freeze(Object.defineProperty({__proto__:null,Bold:o,Default:e,Emphasis:r,Filled:a,Large:s,__namedExportsOrder:_,default:f},Symbol.toStringTag,{value:"Module"}));export{o as B,e as D,r as E,a as F,w as I,s as L};
