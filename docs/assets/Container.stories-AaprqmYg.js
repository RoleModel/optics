import{n as e,r as t}from"./rolldown-runtime-DaJ6WEGw.js";var n,r=e((()=>{n=({size:e=``,padding:t=``})=>{let n=document.createElement(`div`);n.style.backgroundColor=`var(--op-color-alerts-warning-base)`,n.style.height=`30rem`;let r=document.createElement(`div`);r.style.backgroundColor=`var(--op-color-alerts-notice-base)`,r.style.height=`100%`,r.className=[`container`,e?`container--${e}`:``,t?`container--${t}-padding`:``].filter(Boolean).join(` `);let i=document.createElement(`div`);return i.style.backgroundColor=`var(--op-color-primary-base)`,i.style.height=`100%`,r.appendChild(i),n.appendChild(r),n}})),i=t({Default:()=>o,PaddingMedium:()=>u,PaddingSmall:()=>l,SizeExtraSmall:()=>c,SizeSmall:()=>s,__namedExportsOrder:()=>d,default:()=>a}),a,o,s,c,l,u,d,f=e((()=>{r(),a={title:`Utilities/Container`,render:({size:e,...t})=>n({size:e,...t}),argTypes:{size:{control:{type:`select`},options:[``,`sm`,`xs`]},padding:{control:{type:`select`},options:[``,`sm`,`md`]}},parameters:{layout:`fullscreen`}},o={args:{}},s={args:{size:`sm`}},c={args:{size:`xs`}},l={args:{padding:`sm`}},u={args:{padding:`md`}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'xs'
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    padding: 'sm'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    padding: 'md'
  }
}`,...u.parameters?.docs?.source}}},d=[`Default`,`SizeSmall`,`SizeExtraSmall`,`PaddingSmall`,`PaddingMedium`]}));f();export{o as Default,u as PaddingMedium,l as PaddingSmall,c as SizeExtraSmall,s as SizeSmall,d as __namedExportsOrder,a as default,f as n,i as t};