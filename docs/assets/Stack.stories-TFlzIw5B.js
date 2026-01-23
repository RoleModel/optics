import{b as g}from"./utils-X3ES1otS.js";const p=({stack:i=!0,alignItems:c="",gap:m=""})=>{const l=document.createElement("div");return l.className=[i?"op-stack":"",c?`items-${c}`:"",m?`gap-${m}`:""].filter(Boolean).join(" "),g(l,5),l},d={title:"Utilities/Stack",render:({stack:i,...c})=>p({stack:i,...c}),argTypes:{stack:{control:"boolean"},alignItems:{control:{type:"select"},options:["stretch","start","center","end","baseline"]},gap:{control:{type:"select"},options:["xxs","xs","sm","md","lg","xl"]}},parameters:{layout:"fullscreen"}},e={args:{stack:!0}},r={args:{stack:!1}},s={args:{alignItems:"stretch"}},a={args:{alignItems:"start"}},t={args:{alignItems:"center"}},n={args:{alignItems:"end"}},o={args:{alignItems:"baseline"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    stack: true
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    stack: false
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    alignItems: 'stretch'
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    alignItems: 'start'
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    alignItems: 'center'
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    alignItems: 'end'
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    alignItems: 'baseline'
  }
}`,...o.parameters?.docs?.source}}};const u=["With","Without","AlignStretch","AlignStart","AlignCenter","AlignEnd","AlignBaseline"],A=Object.freeze(Object.defineProperty({__proto__:null,AlignBaseline:o,AlignCenter:t,AlignEnd:n,AlignStart:a,AlignStretch:s,With:e,Without:r,__namedExportsOrder:u,default:d},Symbol.toStringTag,{value:"Module"}));export{s as A,A as S,e as W,r as a,a as b,t as c,n as d,o as e};
