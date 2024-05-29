import{c as E}from"./Alert-93ao7bSE.js";const P={title:"Content Components/Alert",render:({title:C,...z})=>E({title:C,...z}),argTypes:{warningLevel:{control:{type:"select"},options:["warning","danger","info","notice"]},style:{control:{type:"select"},options:["outlined","muted","filled"]},title:{control:"text"},description:{control:"text"},icon:{control:"text"},dismissible:{control:"boolean"}}},e={args:{title:"Warning",description:"This is a warning alert",warningLevel:"warning",icon:"warning"}},n={args:{title:"Danger",description:"This is a danger alert",warningLevel:"danger",icon:"error"}},r={args:{title:"Info",description:"This is an info alert",warningLevel:"info",icon:"error"}},i={args:{title:"Notice",description:"This is a notice alert",warningLevel:"notice",icon:"task_alt"}},a={args:{title:"Warning",description:"This is a muted warning alert",warningLevel:"warning",style:"muted",icon:"volume_mute"}},s={args:{title:"Warning",description:"This is a filled warning alert",warningLevel:"warning",style:"filled",icon:"check_box_outline_blank"}},t={args:{title:"Warning",description:"This is a warning alert with no icon",warningLevel:"warning"}},o={args:{description:"This is a warning alert with no title",warningLevel:"warning",icon:"check_box_outline_blank"}},c={args:{description:"This is a warning alert with a close icon",warningLevel:"warning",icon:"check_box_outline_blank",dismissible:!0}};var l,g,d;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    title: 'Warning',
    description: 'This is a warning alert',
    warningLevel: 'warning',
    icon: 'warning'
  }
}`,...(d=(g=e.parameters)==null?void 0:g.docs)==null?void 0:d.source}}};var p,m,u;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    title: 'Danger',
    description: 'This is a danger alert',
    warningLevel: 'danger',
    icon: 'error'
  }
}`,...(u=(m=n.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var w,h,_;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    title: 'Info',
    description: 'This is an info alert',
    warningLevel: 'info',
    icon: 'error'
  }
}`,...(_=(h=r.parameters)==null?void 0:h.docs)==null?void 0:_.source}}};var b,v,T;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    title: 'Notice',
    description: 'This is a notice alert',
    warningLevel: 'notice',
    icon: 'task_alt'
  }
}`,...(T=(v=i.parameters)==null?void 0:v.docs)==null?void 0:T.source}}};var L,f,k;a.parameters={...a.parameters,docs:{...(L=a.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    title: 'Warning',
    description: 'This is a muted warning alert',
    warningLevel: 'warning',
    style: 'muted',
    icon: 'volume_mute'
  }
}`,...(k=(f=a.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};var S,x,W;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    title: 'Warning',
    description: 'This is a filled warning alert',
    warningLevel: 'warning',
    style: 'filled',
    icon: 'check_box_outline_blank'
  }
}`,...(W=(x=s.parameters)==null?void 0:x.docs)==null?void 0:W.source}}};var y,N,D;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    title: 'Warning',
    description: 'This is a warning alert with no icon',
    warningLevel: 'warning'
  }
}`,...(D=(N=t.parameters)==null?void 0:N.docs)==null?void 0:D.source}}};var I,A,M;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    description: 'This is a warning alert with no title',
    warningLevel: 'warning',
    icon: 'check_box_outline_blank'
  }
}`,...(M=(A=o.parameters)==null?void 0:A.docs)==null?void 0:M.source}}};var F,O,j;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    description: 'This is a warning alert with a close icon',
    warningLevel: 'warning',
    icon: 'check_box_outline_blank',
    dismissible: true
  }
}`,...(j=(O=c.parameters)==null?void 0:O.docs)==null?void 0:j.source}}};const q=["Warning","Danger","Info","Notice","Muted","Filled","NoIcon","NoTitle","Dismissible"],G=Object.freeze(Object.defineProperty({__proto__:null,Danger:n,Dismissible:c,Filled:s,Info:r,Muted:a,NoIcon:t,NoTitle:o,Notice:i,Warning:e,__namedExportsOrder:q,default:P},Symbol.toStringTag,{value:"Module"}));export{G as A,n as D,s as F,r as I,a as M,i as N,e as W,t as a,o as b,c};
