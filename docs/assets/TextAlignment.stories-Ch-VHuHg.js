import{a as e,i as t}from"./preload-helper-xPQekRTU.js";var n,r=t((()=>{n=({alignment:e=`left`})=>{let t=document.createElement(`div`);return t.innerText=e,t.className=`text-${e} text-alignment-demo`,t}})),i=e({Center:()=>s,Justify:()=>l,Left:()=>o,Right:()=>c,__namedExportsOrder:()=>u,default:()=>a}),a,o,s,c,l,u,d=t((()=>{r(),a={title:`Utilities/Text Alignment`,render:({alignment:e,...t})=>n({alignment:e,...t}),argTypes:{alignment:{control:{type:`select`},options:[`left`,`center`,`right`,`justify`]}}},o={args:{alignment:`left`}},s={args:{alignment:`center`}},c={args:{alignment:`right`}},l={args:{alignment:`justify`}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    alignment: 'left'
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    alignment: 'center'
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    alignment: 'right'
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    alignment: 'justify'
  }
}`,...l.parameters?.docs?.source}}},u=[`Left`,`Center`,`Right`,`Justify`]}));d();export{s as Center,l as Justify,o as Left,c as Right,u as __namedExportsOrder,a as default,d as n,i as t};