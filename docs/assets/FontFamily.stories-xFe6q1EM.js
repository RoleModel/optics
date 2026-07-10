import{n as e,r as t}from"./rolldown-runtime-DaJ6WEGw.js";var n,r=e((()=>{n=({family:e=`Noto Sans`})=>{let t=document.createElement(`p`);return t.innerText=`Font Family Demo using: ${e}`,e===`Noto Serif`&&(t.className=`font-family-demo--alternative`),e===`Tilt Neon`&&(t.className=`font-family-demo--optional`),t}})),i=t({Alternate:()=>s,Default:()=>o,Optional:()=>c,__namedExportsOrder:()=>l,default:()=>a}),a,o,s,c,l,u=e((()=>{r(),a={title:`Tokens/Typography/Font Family`,render:({family:e,...t})=>n({family:e,...t}),argTypes:{family:{control:{type:`select`},options:[`Noto Sans`,`Noto Serif`,`Tilt Neon`]}}},o={args:{family:`Noto Sans`}},s={args:{family:`Noto Serif`}},c={args:{family:`Tilt Neon`}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    family: 'Noto Sans'
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    family: 'Noto Serif'
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    family: 'Tilt Neon'
  }
}`,...c.parameters?.docs?.source}}},l=[`Default`,`Alternate`,`Optional`]}));u();export{s as Alternate,o as Default,c as Optional,l as __namedExportsOrder,a as default,u as n,i as t};