import{p as a,c as s,a as u,s as b}from"./utils-ChVC8LB4.js";const $=({scale:e="primary",step:r="base"})=>{const i=document.createElement("div"),d=`var(--op-color-${a(e)}-${a(r)})`,m=`var(--op-color-${a(e)}-on-${a(r)})`,g=`var(--op-color-${a(e)}-on-${a(r)}-alt)`;return i.style.backgroundColor=d,i.classList="card-padded",i.innerHTML=`
  <p style="color: ${m}">Background: ${s(e)} ${s(r)}</p>
  <p style="color: ${m}">Text: ${s(e)} On ${s(r)}</p>
  <p style="color: ${g}">Alt: ${s(e)} On ${s(r)} Alt</p>
`,i},y={title:"Tokens/Color/Color Scale",render:({scale:e,...r})=>$({scale:e,...r}),argTypes:{scale:{control:{type:"select"},options:b},step:{control:{type:"select"},options:u}}},o={args:{scale:"primary",step:"base"}},t={args:{scale:"neutral",step:"base"}},n={args:{scale:"warning",step:"base"}},c={args:{scale:"danger",step:"base"}},l={args:{scale:"info",step:"base"}},p={args:{scale:"notice",step:"base"}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    scale: 'primary',
    step: 'base'
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    scale: 'neutral',
    step: 'base'
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    scale: 'warning',
    step: 'base'
  }
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    scale: 'danger',
    step: 'base'
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    scale: 'info',
    step: 'base'
  }
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    scale: 'notice',
    step: 'base'
  }
}`,...p.parameters?.docs?.source}}};const S=["Primary","Neutral","Warning","Danger","Info","Notice"],C=Object.freeze(Object.defineProperty({__proto__:null,Danger:c,Info:l,Neutral:t,Notice:p,Primary:o,Warning:n,__namedExportsOrder:S,default:y},Symbol.toStringTag,{value:"Module"}));export{C,o as P};
