import{n as e,r as t}from"./rolldown-runtime-DaJ6WEGw.js";import{n,t as r}from"./Button-BDOseHCb.js";var i,a=e((()=>{n(),i=({label:e,type:t=`readonly`,iconLeft:n=!1,iconRight:i=!1})=>{let a=document.createElement(`div`),o=document.createElement(`span`);return o.innerText=e,o.className=`tag__label`,a.append(o),n&&a.prepend(r({variant:`default`,noBorder:!0,icon:`close`,pill:!0})),i&&a.append(r({variant:`default`,noBorder:!0,icon:`close`,pill:!0})),a.className=[`tag`,`tag--${t}`].filter(Boolean).join(` `),a}})),o=t({Danger:()=>u,Info:()=>f,Notice:()=>p,Primary:()=>l,Readonly:()=>c,Warning:()=>d,__namedExportsOrder:()=>m,default:()=>s}),s,c,l,u,d,f,p,m,h=e((()=>{a(),s={title:`Components/Tag`,render:({label:e,...t})=>i({label:e,...t}),argTypes:{label:{control:`text`},type:{control:{type:`select`},options:[`readonly`,`primary`,`danger`,`warning`,`info`,`notice`]},iconLeft:{control:`boolean`},iconRight:{control:`boolean`}}},c={args:{label:`Readonly`,type:`readonly`}},l={args:{label:`Primary`,type:`primary`}},u={args:{label:`Danger`,type:`danger`}},d={args:{label:`Warning`,type:`warning`}},f={args:{label:`Info`,type:`info`}},p={args:{label:`Notice`,type:`notice`}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Readonly',
    type: 'readonly'
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Primary',
    type: 'primary'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Danger',
    type: 'danger'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Warning',
    type: 'warning'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Info',
    type: 'info'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Notice',
    type: 'notice'
  }
}`,...p.parameters?.docs?.source}}},m=[`Readonly`,`Primary`,`Danger`,`Warning`,`Info`,`Notice`]}));h();export{u as Danger,f as Info,p as Notice,l as Primary,c as Readonly,d as Warning,m as __namedExportsOrder,s as default,h as n,o as t};