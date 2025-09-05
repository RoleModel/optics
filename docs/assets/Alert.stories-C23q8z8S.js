import{c as d}from"./Alert-CAEs4394.js";const p={title:"Components/Alert",render:({title:l,...g})=>d({title:l,...g}),argTypes:{warningLevel:{control:{type:"select"},options:["warning","danger","info","notice"]},style:{control:{type:"select"},options:["outlined","muted","filled"]},title:{control:"text"},description:{control:"text"},icon:{control:"text"},dismissible:{control:"boolean"}}},e={args:{title:"Warning",description:"This is a warning alert",warningLevel:"warning",icon:"warning"}},n={args:{title:"Danger",description:"This is a danger alert",warningLevel:"danger",icon:"error"}},r={args:{title:"Info",description:"This is an info alert",warningLevel:"info",icon:"error"}},i={args:{title:"Notice",description:"This is a notice alert",warningLevel:"notice",icon:"task_alt"}},a={args:{title:"Warning",description:"This is a muted warning alert",warningLevel:"warning",style:"muted",icon:"volume_mute"}},s={args:{title:"Warning",description:"This is a filled warning alert",warningLevel:"warning",style:"filled",icon:"check_box_outline_blank"}},t={args:{title:"Warning",description:"This is a warning alert with no icon",warningLevel:"warning"}},o={args:{description:"This is a warning alert with no title",warningLevel:"warning",icon:"check_box_outline_blank"}},c={args:{description:"This is a warning alert with a close icon",warningLevel:"warning",icon:"check_box_outline_blank",dismissible:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Warning',
    description: 'This is a warning alert',
    warningLevel: 'warning',
    icon: 'warning'
  }
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Danger',
    description: 'This is a danger alert',
    warningLevel: 'danger',
    icon: 'error'
  }
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Info',
    description: 'This is an info alert',
    warningLevel: 'info',
    icon: 'error'
  }
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Notice',
    description: 'This is a notice alert',
    warningLevel: 'notice',
    icon: 'task_alt'
  }
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Warning',
    description: 'This is a muted warning alert',
    warningLevel: 'warning',
    style: 'muted',
    icon: 'volume_mute'
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Warning',
    description: 'This is a filled warning alert',
    warningLevel: 'warning',
    style: 'filled',
    icon: 'check_box_outline_blank'
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Warning',
    description: 'This is a warning alert with no icon',
    warningLevel: 'warning'
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    description: 'This is a warning alert with no title',
    warningLevel: 'warning',
    icon: 'check_box_outline_blank'
  }
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    description: 'This is a warning alert with a close icon',
    warningLevel: 'warning',
    icon: 'check_box_outline_blank',
    dismissible: true
  }
}`,...c.parameters?.docs?.source}}};const m=["Warning","Danger","Info","Notice","Muted","Filled","NoIcon","NoTitle","Dismissible"],w=Object.freeze(Object.defineProperty({__proto__:null,Danger:n,Dismissible:c,Filled:s,Info:r,Muted:a,NoIcon:t,NoTitle:o,Notice:i,Warning:e,__namedExportsOrder:m,default:p},Symbol.toStringTag,{value:"Module"}));export{w as A,n as D,s as F,r as I,a as M,i as N,e as W,t as a,o as b,c};
