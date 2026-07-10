import{n as e,r as t}from"./rolldown-runtime-DaJ6WEGw.js";import{a as n,i as r,o as i,s as a,t as o}from"./utils-C40NYCFI.js";var s,c=e((()=>{r(),s=({scale:e=`primary`,step:t=`base`})=>{let r=document.createElement(`div`),i=`var(--op-color-${n(e)}-${n(t)})`,a=`var(--op-color-${n(e)}-on-${n(t)})`,s=`var(--op-color-${n(e)}-on-${n(t)}-alt)`;return r.style.backgroundColor=i,r.classList=`card-padded`,r.innerHTML=`
  <p style="color: ${a}">Background: ${o(e)} ${o(t)}</p>
  <p style="color: ${a}">Text: ${o(e)} On ${o(t)}</p>
  <p style="color: ${s}">Alt: ${o(e)} On ${o(t)} Alt</p>
`,r}})),l=t({Danger:()=>m,Info:()=>h,Neutral:()=>f,Notice:()=>g,Primary:()=>d,Warning:()=>p,__namedExportsOrder:()=>_,default:()=>u}),u,d,f,p,m,h,g,_,v=e((()=>{c(),r(),u={title:`Tokens/Color/Color Scale`,render:({scale:e,...t})=>s({scale:e,...t}),argTypes:{scale:{control:{type:`select`},options:i},step:{control:{type:`select`},options:a}}},d={args:{scale:`primary`,step:`base`}},f={args:{scale:`neutral`,step:`base`}},p={args:{scale:`warning`,step:`base`}},m={args:{scale:`danger`,step:`base`}},h={args:{scale:`info`,step:`base`}},g={args:{scale:`notice`,step:`base`}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    scale: 'primary',
    step: 'base'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    scale: 'neutral',
    step: 'base'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    scale: 'warning',
    step: 'base'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    scale: 'danger',
    step: 'base'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    scale: 'info',
    step: 'base'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    scale: 'notice',
    step: 'base'
  }
}`,...g.parameters?.docs?.source}}},_=[`Primary`,`Neutral`,`Warning`,`Danger`,`Info`,`Notice`]}));v();export{m as Danger,h as Info,f as Neutral,g as Notice,d as Primary,p as Warning,_ as __namedExportsOrder,u as default,v as n,l as t};