import{a as e,i as t}from"./preload-helper-xPQekRTU.js";var n,r=t((()=>{n=({label:e=`Switch Text`,size:t=`large`,disabled:n=!1})=>{let r=`switch`;return t===`small`&&(r+=` switch--small`),`
<div class='form-group form-group--inline'>
  <div class="${r}">
    <input type="checkbox" id="switch-demo" ${n?`disabled`:``}>
    <label for="switch-demo"></label>
  </div>
  <label class="form-label" for="switch-demo">${e}</label>
</div>
  `}})),i=e({Default:()=>o,Disabled:()=>c,Small:()=>s,__namedExportsOrder:()=>l,default:()=>a}),a,o,s,c,l,u=t((()=>{r(),a={title:`Components/Switch`,render:({...e})=>n({...e}),argTypes:{label:{control:`text`},size:{control:{type:`select`},options:[`small`,`large`]},disabled:{control:{type:`boolean`}}}},o={args:{}},s={args:{size:`small`}},c={args:{disabled:!0}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'small'
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...c.parameters?.docs?.source}}},l=[`Default`,`Small`,`Disabled`]}));u();export{o as Default,c as Disabled,s as Small,l as __namedExportsOrder,a as default,u as n,i as t};