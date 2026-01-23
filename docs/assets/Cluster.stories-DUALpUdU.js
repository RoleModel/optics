import{b as g}from"./utils-X3ES1otS.js";const u=({cluster:i=!0,alignItems:c="",gap:m=""})=>{const l=document.createElement("div");return l.style.height="15rem",l.className=[i?"op-cluster":"",c?`items-${c}`:"",m?`gap-${m}`:""].filter(Boolean).join(" "),g(l,35),l},p={title:"Utilities/Cluster",render:({cluster:i,...c})=>u({cluster:i,...c}),argTypes:{cluster:{control:"boolean"},alignItems:{control:{type:"select"},options:["stretch","start","center","end","baseline"]},gap:{control:{type:"select"},options:["xxs","xs","sm","md","lg","xl"]}},parameters:{layout:"fullscreen"}},e={args:{cluster:!0}},r={args:{cluster:!1}},s={args:{alignItems:"stretch"}},t={args:{alignItems:"start"}},a={args:{alignItems:"center"}},n={args:{alignItems:"end"}},o={args:{alignItems:"baseline"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    cluster: true
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    cluster: false
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
}`,...o.parameters?.docs?.source}}};const d=["With","Without","AlignStretch","AlignStart","AlignCenter","AlignEnd","AlignBaseline"],h=Object.freeze(Object.defineProperty({__proto__:null,AlignBaseline:o,AlignCenter:a,AlignEnd:n,AlignStart:t,AlignStretch:s,With:e,Without:r,__namedExportsOrder:d,default:p},Symbol.toStringTag,{value:"Module"}));export{s as A,h as C,e as W,r as a,t as b,a as c,n as d,o as e};
