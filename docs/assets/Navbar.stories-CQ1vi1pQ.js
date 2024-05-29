import{c as j}from"./Navbar-Dx18zRnn.js";const _={title:"Navigation Components/Navbar",render:({...S})=>j({...S}),argTypes:{style:{control:{type:"select"},options:["default","primary"]},brand:{control:"boolean"},justify:{control:{type:"select"},options:["start","center","end"]},activeLink:{control:{type:"select"},options:["Inbox","Outbox","Favorite","Something"]}},parameters:{layout:"fullscreen"}},e={args:{style:"default"}},r={args:{style:"primary"}},a={args:{size:"drawer",style:"default",brand:!1}},s={args:{style:"default",justify:"center"}},t={args:{style:"default",justify:"end"}};var o,n,c;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    style: 'default'
  }
}`,...(c=(n=e.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var l,d,u;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    style: 'primary'
  }
}`,...(u=(d=r.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var i,p,m;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    size: 'drawer',
    style: 'default',
    brand: false
  }
}`,...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var y,f,b;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    style: 'default',
    justify: 'center'
  }
}`,...(b=(f=s.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var g,v,N;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    style: 'default',
    justify: 'end'
  }
}`,...(N=(v=t.parameters)==null?void 0:v.docs)==null?void 0:N.source}}};const x=["DefaultNavbar","PrimaryNavbar","NoBrandNavbar","CenteredNavbar","JustifyEndNavbar"],O=Object.freeze(Object.defineProperty({__proto__:null,CenteredNavbar:s,DefaultNavbar:e,JustifyEndNavbar:t,NoBrandNavbar:a,PrimaryNavbar:r,__namedExportsOrder:x,default:_},Symbol.toStringTag,{value:"Module"}));export{s as C,e as D,t as J,O as N,r as P,a};
