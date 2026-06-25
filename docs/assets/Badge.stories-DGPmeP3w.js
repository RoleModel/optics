import{a as e,i as t}from"./preload-helper-xPQekRTU.js";import{n,t as r}from"./Icon-CeJg6BIF.js";var i,a=t((()=>{n(),i=({label:e,style:t=`default`,pill:n=!1,inButton:i=`no`,showPrefixIcon:a=!1,showSuffixIcon:o=!1})=>{let s=document.createElement(`div`);if(s.innerText=e,s.className=[`badge`,t==="default"?``:`badge--${t}`,n?`badge--pill`:``].filter(Boolean).join(` `),a&&s.prepend(r({name:`open_in_new`})),o&&s.appendChild(r({name:`add`})),i!==`no`){let e=document.createElement(`button`);return e.innerText=`Notifications`,e.className=`btn btn--primary btn--with-badge`,n||(s.className+=` badge--pill`),s.className+=` badge--notification-${i}`,e.appendChild(s),e}return s}})),o=e({Danger:()=>d,Default:()=>c,Info:()=>f,Notice:()=>p,NotificationButton:()=>h,Pill:()=>m,Primary:()=>l,Warning:()=>u,__namedExportsOrder:()=>g,default:()=>s}),s,c,l,u,d,f,p,m,h,g,_=t((()=>{a(),s={title:`Components/Badge`,render:({label:e,...t})=>i({label:e,...t}),argTypes:{label:{control:`text`},style:{control:{type:`select`},options:[`default`,`primary`,`warning`,`danger`,`info`,`notice`]},pill:{control:`boolean`},inButton:{control:{type:`select`},options:[`no`,`right`,`left`]},showPrefixIcon:{control:`boolean`,description:`This is not a class. It just provides an example of using icons within a badge`},showSuffixIcon:{control:`boolean`,description:`This is not a class. It just provides an example of using icons within a badge`}}},c={args:{label:`Default`,style:`default`}},l={args:{label:`Primary`,style:`primary`}},u={args:{label:`Warning`,style:`warning`}},d={args:{label:`Danger`,style:`danger`}},f={args:{label:`Info`,style:`info`}},p={args:{label:`Notice`,style:`notice`}},m={args:{label:`Pill`,style:`default`,pill:!0}},h={args:{label:`5`,style:`danger`,pill:!0,inButton:`right`}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Default',
    style: 'default'
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Primary',
    style: 'primary'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Warning',
    style: 'warning'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Danger',
    style: 'danger'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Info',
    style: 'info'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Notice',
    style: 'notice'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Pill',
    style: 'default',
    pill: true
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: '5',
    style: 'danger',
    pill: true,
    inButton: 'right'
  }
}`,...h.parameters?.docs?.source}}},g=[`Default`,`Primary`,`Warning`,`Danger`,`Info`,`Notice`,`Pill`,`NotificationButton`]}));_();export{d as Danger,c as Default,f as Info,p as Notice,h as NotificationButton,m as Pill,l as Primary,u as Warning,g as __namedExportsOrder,s as default,_ as n,o as t};