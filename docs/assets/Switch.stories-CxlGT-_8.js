const c=({label:a="Switch Text",size:o="large",disabled:l=!1})=>{let t="switch";return o==="small"&&(t+=" switch--small"),`
<div class='form-group form-group--inline'>
  <div class="${t}">
    <input type="checkbox" id="switch-demo" ${l?"disabled":""}>
    <label for="switch-demo"></label>
  </div>
  <label class="form-label" for="switch-demo">${a}</label>
</div>
  `},i={title:"Components/Switch",render:({...a})=>c({...a}),argTypes:{label:{control:"text"},size:{control:{type:"select"},options:["small","large"]},disabled:{control:{type:"boolean"}}}},e={args:{}},s={args:{size:"small"}},r={args:{disabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'small'
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...r.parameters?.docs?.source}}};const n=["Default","Small","Disabled"],d=Object.freeze(Object.defineProperty({__proto__:null,Default:e,Disabled:r,Small:s,__namedExportsOrder:n,default:i},Symbol.toStringTag,{value:"Module"}));export{e as D,d as S,s as a,r as b};
