import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";var n;function r(){return(r=e((()=>{n=({label:e=`Switch Text`,size:t=`large`,disabled:n=!1})=>{let r=`switch`;return t===`small`&&(r+=` switch--small`),`
<div class='form-group form-group--inline'>
  <div class="${r}">
    <input type="checkbox" id="switch-demo" ${n?`disabled`:``}>
    <label for="switch-demo"></label>
  </div>
  <label class="form-label" for="switch-demo">${e}</label>
</div>
  `}})))()}var i=t({Default:()=>o,Disabled:()=>c,Small:()=>s,__namedExportsOrder:()=>l,default:()=>a}),a,o,s,c,l;function u(){return(u=e((()=>{r(),a={title:`Components/Switch`,render:({...e})=>n({...e}),argTypes:{label:{control:`text`},size:{control:{type:`select`},options:[`small`,`large`]},disabled:{control:{type:`boolean`}}}},o={args:{}},s={args:{size:`small`}},c={args:{disabled:!0}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'small'
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...c.parameters?.docs?.source}}},l=[`Default`,`Small`,`Disabled`]})))()}export{u as a,i,c as n,s as r,o as t};