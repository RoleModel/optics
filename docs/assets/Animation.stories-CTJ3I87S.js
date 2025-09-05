const m=({speed:d="input (120ms)"})=>{const e=document.createElement("div");return e.innerText=`${d} Hover Me!`,e.className=`transition-demo transition-demo--${d}`,e},i={title:"Tokens/Animation",render:({speed:d,...e})=>m({speed:d,...e}),argTypes:{speed:{control:{type:"select"},options:["accordion (120ms)","accordion_content (300ms)","input (120ms)","sidebar (200ms)","modal (300ms)","panel (400ms)"]}}},s={args:{speed:"input (120ms)"}},r={args:{speed:"navigation (200ms)"}},a={args:{speed:"sidebar (300ms)"}},o={args:{speed:"modal (300ms)"}},n={args:{speed:"panel (400ms)"}},t={args:{speed:"accordion (120ms)"}},c={args:{speed:"accordion content (300ms)"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    speed: 'input (120ms)'
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    speed: 'navigation (200ms)'
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    speed: 'sidebar (300ms)'
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    speed: 'modal (300ms)'
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    speed: 'panel (400ms)'
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    speed: 'accordion (120ms)'
  }
}`,...t.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    speed: 'accordion content (300ms)'
  }
}`,...c.parameters?.docs?.source}}};const p=["Default","Navigation","Sidebar","Modal","Panel","AccordionRotation","AccordionContent"],u=Object.freeze(Object.defineProperty({__proto__:null,AccordionContent:c,AccordionRotation:t,Default:s,Modal:o,Navigation:r,Panel:n,Sidebar:a,__namedExportsOrder:p,default:i},Symbol.toStringTag,{value:"Module"}));export{u as A,s as D};
