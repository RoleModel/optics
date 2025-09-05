const l=({size:n="",padding:c=""})=>{const i=document.createElement("div");i.style.backgroundColor="var(--op-color-alerts-warning-base)",i.style.height="30rem";const e=document.createElement("div");e.style.backgroundColor="var(--op-color-alerts-notice-base)",e.style.height="100%",e.className=["container",n?`container--${n}`:"",c?`container--${c}-padding`:""].filter(Boolean).join(" ");const d=document.createElement("div");return d.style.backgroundColor="var(--op-color-primary-base)",d.style.height="100%",e.appendChild(d),i.appendChild(e),i},m={title:"Utilities/Container",render:({size:n,...c})=>l({size:n,...c}),argTypes:{size:{control:{type:"select"},options:["","sm","xs"]},padding:{control:{type:"select"},options:["","sm","md"]}},parameters:{layout:"fullscreen"}},r={args:{}},a={args:{size:"sm"}},s={args:{size:"xs"}},o={args:{padding:"sm"}},t={args:{padding:"md"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'xs'
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    padding: 'sm'
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    padding: 'md'
  }
}`,...t.parameters?.docs?.source}}};const p=["Default","SizeSmall","SizeExtraSmall","PaddingSmall","PaddingMedium"],g=Object.freeze(Object.defineProperty({__proto__:null,Default:r,PaddingMedium:t,PaddingSmall:o,SizeExtraSmall:s,SizeSmall:a,__namedExportsOrder:p,default:m},Symbol.toStringTag,{value:"Module"}));export{g as C,r as D,o as P,a as S,s as a,t as b};
