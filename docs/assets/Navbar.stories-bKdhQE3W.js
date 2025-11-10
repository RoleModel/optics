import{c as n}from"./Navbar-D2L6_8pq.js";const c={title:"Components/Navbar",render:({...o})=>n({...o}),argTypes:{style:{control:{type:"select"},options:["default","primary"]},brand:{control:"boolean"},justify:{control:{type:"select"},options:["start","center","end"]},activeLink:{control:{type:"select"},options:["Inbox","Outbox","Favorite","Something"]}},parameters:{layout:"fullscreen"}},e={args:{style:"default"}},r={args:{style:"primary"}},a={args:{size:"drawer",style:"default",brand:!1}},s={args:{style:"default",justify:"center"}},t={args:{style:"default",justify:"end"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    style: 'default'
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    style: 'primary'
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'drawer',
    style: 'default',
    brand: false
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    style: 'default',
    justify: 'center'
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    style: 'default',
    justify: 'end'
  }
}`,...t.parameters?.docs?.source}}};const l=["DefaultNavbar","PrimaryNavbar","NoBrandNavbar","CenteredNavbar","JustifyEndNavbar"],u=Object.freeze(Object.defineProperty({__proto__:null,CenteredNavbar:s,DefaultNavbar:e,JustifyEndNavbar:t,NoBrandNavbar:a,PrimaryNavbar:r,__namedExportsOrder:l,default:c},Symbol.toStringTag,{value:"Module"}));export{s as C,e as D,t as J,u as N,r as P,a};
