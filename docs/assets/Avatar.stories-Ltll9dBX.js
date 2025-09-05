import{c}from"./Avatar-BkZ09CS-.js";const i={title:"Components/Avatar",render:({size:t,...n})=>c({size:t,...n}),argTypes:{size:{control:{type:"select"},options:["small","medium","large"]},disabled:{control:"boolean"},imageSource:{control:"text"},useLink:{control:"boolean"}}},e={args:{size:"large"}},r={args:{size:"small"}},s={args:{size:"medium"}},a={args:{disabled:!0}},o={args:{useLink:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'large'
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'small'
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'medium'
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    useLink: false
  }
}`,...o.parameters?.docs?.source}}};const l=["Default","Small","Medium","Disabled","WithoutLink"],u=Object.freeze(Object.defineProperty({__proto__:null,Default:e,Disabled:a,Medium:s,Small:r,WithoutLink:o,__namedExportsOrder:l,default:i},Symbol.toStringTag,{value:"Module"}));export{u as A,e as D,r as S,o as W,a};
