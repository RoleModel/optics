const m=({size:o="large",activeTab:s="USA",disabledTab:l="Canada"})=>{const n=document.createElement("div");n.className="tab-group";const c=a=>{const e=document.createElement("a");return e.href="/?path=/docs/navigation-components-tab--docs",e.className=["tab",o==="small"?"tab--small":"",s===a?" tab--active":"",l===a?" tab--disabled":""].filter(Boolean).join(" "),e.innerText=a,l===a&&e.setAttribute("tabindex",-1),e},i=["USA","Mexico","Canada","England","Germany","Spain","Austria","Australia"];return n.innerHTML+=`
  ${i.map(a=>c(a).outerHTML).join(`
  `)}
`,n},p={title:"Components/Tab",render:({option1:o,...s})=>m({...s}),argTypes:{size:{control:{type:"select"},options:["small","large"]},activeTab:{control:{type:"select"},options:["USA","Mexico","Canada","England","Germany","Spain","Austria","Australia"]},disabledTab:{control:{type:"select"},options:["USA","Mexico","Canada","England","Germany","Spain","Austria","Australia"]}}},t={args:{}},r={args:{size:"small"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'small'
  }
}`,...r.parameters?.docs?.source}}};const d=["Default","Small"],u=Object.freeze(Object.defineProperty({__proto__:null,Default:t,Small:r,__namedExportsOrder:d,default:p},Symbol.toStringTag,{value:"Module"}));export{t as D,r as S,u as T};
