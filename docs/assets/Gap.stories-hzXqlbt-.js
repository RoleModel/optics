import{b as m}from"./utils-ChVC8LB4.js";const i=({size:n="md"})=>{const e=document.createElement("div");return e.className=`flex gap-${n}`,m(e,5),e},p={title:"Utilities/Gap",render:({size:n,...e})=>i({size:n,...e}),argTypes:{size:{control:{type:"select"},options:["xxs","xs","sm","md","lg","xl"]}}},r={args:{size:"xxs"}},s={args:{size:"xs"}},a={args:{size:"sm"}},o={args:{size:"md"}},t={args:{size:"lg"}},c={args:{size:"xl"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'xxs'
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'xs'
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md'
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'lg'
  }
}`,...t.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'xl'
  }
}`,...c.parameters?.docs?.source}}};const l=["ExtraExtraSmall","ExtraSmall","Small","Medium","Large","ExtraLarge"],g=Object.freeze(Object.defineProperty({__proto__:null,ExtraExtraSmall:r,ExtraLarge:c,ExtraSmall:s,Large:t,Medium:o,Small:a,__namedExportsOrder:l,default:p},Symbol.toStringTag,{value:"Module"}));export{r as E,g as G,t as L,o as M,a as S,s as a,c as b};
