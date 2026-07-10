import{n as e,r as t}from"./rolldown-runtime-DaJ6WEGw.js";var n,r=e((()=>{n=({size:e=`large`,activeTab:t=`USA`,disabledTab:n=`Canada`})=>{let r=document.createElement(`div`);r.className=`tab-group`;let i=r=>{let i=document.createElement(`a`);return i.href=`/?path=/docs/components-tab--docs`,i.className=[`tab`,e===`small`?`tab--small`:``,t===r?` tab--active`:``,n===r?` tab--disabled`:``].filter(Boolean).join(` `),i.innerText=r,n===r&&i.setAttribute(`tabindex`,-1),i};return r.innerHTML+=`
  ${[`USA`,`Mexico`,`Canada`,`England`,`Germany`,`Spain`,`Austria`,`Australia`].map(e=>i(e).outerHTML).join(`
  `)}
`,r}})),i=t({Default:()=>o,Small:()=>s,__namedExportsOrder:()=>c,default:()=>a}),a,o,s,c,l=e((()=>{r(),a={title:`Components/Tab`,render:({option1:e,...t})=>n({option1:e,...t}),argTypes:{size:{control:{type:`select`},options:[`small`,`large`]},activeTab:{control:{type:`select`},options:[`USA`,`Mexico`,`Canada`,`England`,`Germany`,`Spain`,`Austria`,`Australia`]},disabledTab:{control:{type:`select`},options:[`USA`,`Mexico`,`Canada`,`England`,`Germany`,`Spain`,`Austria`,`Australia`]}}},o={args:{}},s={args:{size:`small`}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'small'
  }
}`,...s.parameters?.docs?.source}}},c=[`Default`,`Small`]}));l();export{o as Default,s as Small,c as __namedExportsOrder,a as default,l as n,i as t};