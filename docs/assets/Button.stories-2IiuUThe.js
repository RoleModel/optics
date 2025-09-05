import{c as d}from"./Button-B21kpIpO.js";const b={title:"Components/Button",render:({label:p,...u})=>d({label:p,...u}),argTypes:{label:{control:"text"},variant:{control:{type:"select"},options:["default","primary","destructive","warning"]},noBorder:{control:"boolean"},disabled:{control:"boolean"},active:{control:"boolean"},pill:{control:"boolean"},icon:{control:"boolean"},iconWithLabel:{control:"boolean"},showPrefixIcon:{control:"boolean",description:"This is not a class. It just provides an example of using icons within a button"},showSuffixIcon:{control:"boolean",description:"This is not a class. It just provides an example of using icons within a button"},size:{control:{type:"select"},options:["small","medium","large"]}}},r={args:{label:"Primary",variant:"default"}},a={args:{label:"Primary",variant:"primary"}},e={args:{label:"Delete",variant:"destructive"}},s={args:{label:"Warning",variant:"warning"}},o={args:{label:"Active",variant:"primary",active:!0}},n={args:{label:"No Border",variant:"primary",noBorder:!0}},t={args:{label:"Disabled",variant:"primary",disabled:!0}},i={args:{label:"Pill",variant:"default",pill:!0}},l={args:{label:"👍",variant:"primary",icon:!0}},c={args:{label:"Label",variant:"primary",iconWithLabel:!0}},m={args:{label:"Small",variant:"primary",size:"small"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Primary',
    variant: 'default'
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Primary',
    variant: 'primary'
  }
}`,...a.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Delete',
    variant: 'destructive'
  }
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Warning',
    variant: 'warning'
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Active',
    variant: 'primary',
    active: true
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'No Border',
    variant: 'primary',
    noBorder: true
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled',
    variant: 'primary',
    disabled: true
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Pill',
    variant: 'default',
    pill: true
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: '👍',
    variant: 'primary',
    icon: true
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    variant: 'primary',
    iconWithLabel: true
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Small',
    variant: 'primary',
    size: 'small'
  }
}`,...m.parameters?.docs?.source}}};const g=["Default","Primary","Destructive","Warning","Active","NoBorder","Disabled","Pill","Icon","IconWithLabel","Size"],y=Object.freeze(Object.defineProperty({__proto__:null,Active:o,Default:r,Destructive:e,Disabled:t,Icon:l,IconWithLabel:c,NoBorder:n,Pill:i,Primary:a,Size:m,Warning:s,__namedExportsOrder:g,default:b},Symbol.toStringTag,{value:"Module"}));export{o as A,y as B,r as D,l as I,n as N,a as P,m as S,e as a,t as b,i as c,c as d};
