import{b as m}from"./utils-X3ES1otS.js";const g=({split:l=!0,alignItems:c="",gap:p=""})=>{const i=document.createElement("div");return i.style.height="10rem",i.className=[l?"op-split":"",c?`items-${c}`:"",p?`gap-${p}`:""].filter(Boolean).join(" "),m(i,2),i},d={title:"Utilities/Split",render:({split:l,...c})=>g({split:l,...c}),argTypes:{split:{control:"boolean"},alignItems:{control:{type:"select"},options:["stretch","start","center","end","baseline"]},gap:{control:{type:"select"},options:["xxs","xs","sm","md","lg","xl"]}},parameters:{layout:"fullscreen"}},e={args:{split:!0}},r={args:{split:!1}},s={args:{alignItems:"stretch"}},t={args:{alignItems:"start"}},a={args:{alignItems:"center"}},n={args:{alignItems:"end"}},o={args:{alignItems:"baseline"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    split: true
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    split: false
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    alignItems: 'stretch'
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    alignItems: 'start'
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    alignItems: 'center'
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    alignItems: 'end'
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    alignItems: 'baseline'
  }
}`,...o.parameters?.docs?.source}}};const u=["With","Without","AlignStretch","AlignStart","AlignCenter","AlignEnd","AlignBaseline"],h=Object.freeze(Object.defineProperty({__proto__:null,AlignBaseline:o,AlignCenter:a,AlignEnd:n,AlignStart:t,AlignStretch:s,With:e,Without:r,__namedExportsOrder:u,default:d},Symbol.toStringTag,{value:"Module"}));export{s as A,h as S,e as W,r as a,t as b,a as c,n as d,o as e};
