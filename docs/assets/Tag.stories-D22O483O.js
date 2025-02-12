import{c as p}from"./Button-B21kpIpO.js";const w=({label:c,type:l="readonly",iconLeft:B=!1,iconRight:j=!1})=>{const e=document.createElement("div"),i=document.createElement("span");return i.innerText=c,i.className="tag__label",e.append(i),B&&e.prepend(p({variant:"default",noBorder:!0,icon:"close",pill:!0})),j&&e.append(p({variant:"default",noBorder:!0,icon:"close",pill:!0})),e.className=["tag",`tag--${l}`].filter(Boolean).join(" "),e},E={title:"Content Components/Tag",render:({label:c,...l})=>w({label:c,...l}),argTypes:{label:{control:"text"},type:{control:{type:"select"},options:["readonly","primary","danger","warning","info","notice"]},iconLeft:{control:"boolean"},iconRight:{control:"boolean"}}},r={args:{label:"Readonly",type:"readonly"}},a={args:{label:"Primary",type:"primary"}},n={args:{label:"Danger",type:"danger"}},o={args:{label:"Warning",type:"warning"}},t={args:{label:"Info",type:"info"}},s={args:{label:"Notice",type:"notice"}};var d,g,m;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: 'Readonly',
    type: 'readonly'
  }
}`,...(m=(g=r.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};var u,y,b;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: 'Primary',
    type: 'primary'
  }
}`,...(b=(y=a.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var f,S,_;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: 'Danger',
    type: 'danger'
  }
}`,...(_=(S=n.parameters)==null?void 0:S.docs)==null?void 0:_.source}}};var T,N,P;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    label: 'Warning',
    type: 'warning'
  }
}`,...(P=(N=o.parameters)==null?void 0:N.docs)==null?void 0:P.source}}};var R,x,D;t.parameters={...t.parameters,docs:{...(R=t.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    label: 'Info',
    type: 'info'
  }
}`,...(D=(x=t.parameters)==null?void 0:x.docs)==null?void 0:D.source}}};var I,W,v;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    label: 'Notice',
    type: 'notice'
  }
}`,...(v=(W=s.parameters)==null?void 0:W.docs)==null?void 0:v.source}}};const O=["Readonly","Primary","Danger","Warning","Info","Notice"],h=Object.freeze(Object.defineProperty({__proto__:null,Danger:n,Info:t,Notice:s,Primary:a,Readonly:r,Warning:o,__namedExportsOrder:O,default:E},Symbol.toStringTag,{value:"Module"}));export{n as D,t as I,s as N,a as P,r as R,h as T,o as W};
