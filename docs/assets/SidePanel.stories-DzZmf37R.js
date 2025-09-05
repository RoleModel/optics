import{c}from"./SidePanel-Dk0u1Nrs.js";const i={title:"Components/SidePanel",render:({option1:p,...d})=>c({...d}),argTypes:{border:{control:{type:"select"},options:["none","left","right","both"]},headerPadding:{control:{type:"select"},options:["none","x","y","all"]},bodyPadding:{control:{type:"select"},options:["none","x","y","all"]},footerPadding:{control:{type:"select"},options:["none","x","y","all"]},sections:{control:"number"},sectionPadding:{control:{type:"select"},options:["none","x","y","all"]},showDividers:{control:"boolean"}}},e={args:{}},r={args:{border:"both"}},o={args:{headerPadding:"all"}},a={args:{bodyPadding:"all"}},s={args:{footerPadding:"all"}},t={args:{sections:20,showDividers:!0}},n={args:{sections:3,sectionPadding:"all",showDividers:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    border: 'both'
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    headerPadding: 'all'
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    bodyPadding: 'all'
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    footerPadding: 'all'
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    sections: 20,
    showDividers: true
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    sections: 3,
    sectionPadding: 'all',
    showDividers: true
  }
}`,...n.parameters?.docs?.source}}};const l=["Default","Bordered","PaddedHeader","PaddedBody","PaddedFooter","WithSections","PaddedSection"],m=Object.freeze(Object.defineProperty({__proto__:null,Bordered:r,Default:e,PaddedBody:a,PaddedFooter:s,PaddedHeader:o,PaddedSection:n,WithSections:t,__namedExportsOrder:l,default:i},Symbol.toStringTag,{value:"Module"}));export{r as B,e as D,o as P,m as S,t as W,a,s as b,n as c};
