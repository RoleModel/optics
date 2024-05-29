import{c as Q}from"./Button-CoyIamir.js";const R={title:"Navigation Components/Button",render:({label:J,...K})=>Q({label:J,...K}),argTypes:{label:{control:"text"},priority:{control:{type:"select"},options:["default","primary","destructive","warning"]},noBorder:{control:"boolean"},disabled:{control:"boolean"},active:{control:"boolean"},pill:{control:"boolean"},icon:{control:"boolean"},iconWithLabel:{control:"boolean"},showPrefixIcon:{control:"boolean",description:"This is not a class. It just provides an example of using icons within a button"},showSuffixIcon:{control:"boolean",description:"This is not a class. It just provides an example of using icons within a button"},size:{control:{type:"select"},options:["small","medium","large"]}}},r={args:{label:"Primary",priority:"default"}},e={args:{label:"Primary",priority:"primary"}},a={args:{label:"Delete",priority:"destructive"}},o={args:{label:"Warning",priority:"warning"}},s={args:{label:"Active",priority:"primary",active:!0}},t={args:{label:"No Border",priority:"primary",noBorder:!0}},i={args:{label:"Disabled",priority:"primary",disabled:!0}},n={args:{label:"Pill",priority:"default",pill:!0}},l={args:{label:"👍",priority:"primary",icon:!0}},c={args:{label:"Label",priority:"primary",iconWithLabel:!0}},p={args:{label:"Small",priority:"primary",size:"small"}};var m,u,d;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: 'Primary',
    priority: 'default'
  }
}`,...(d=(u=r.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var b,y,g;e.parameters={...e.parameters,docs:{...(b=e.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: 'Primary',
    priority: 'primary'
  }
}`,...(g=(y=e.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var S,f,v;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    label: 'Delete',
    priority: 'destructive'
  }
}`,...(v=(f=a.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var D,P,B;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    label: 'Warning',
    priority: 'warning'
  }
}`,...(B=(P=o.parameters)==null?void 0:P.docs)==null?void 0:B.source}}};var h,I,W;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    label: 'Active',
    priority: 'primary',
    active: true
  }
}`,...(W=(I=s.parameters)==null?void 0:I.docs)==null?void 0:W.source}}};var w,x,L;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    label: 'No Border',
    priority: 'primary',
    noBorder: true
  }
}`,...(L=(x=t.parameters)==null?void 0:x.docs)==null?void 0:L.source}}};var _,z,N;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    label: 'Disabled',
    priority: 'primary',
    disabled: true
  }
}`,...(N=(z=i.parameters)==null?void 0:z.docs)==null?void 0:N.source}}};var A,j,T;n.parameters={...n.parameters,docs:{...(A=n.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    label: 'Pill',
    priority: 'default',
    pill: true
  }
}`,...(T=(j=n.parameters)==null?void 0:j.docs)==null?void 0:T.source}}};var O,C,E;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    label: '👍',
    priority: 'primary',
    icon: true
  }
}`,...(E=(C=l.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var M,k,q;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    priority: 'primary',
    iconWithLabel: true
  }
}`,...(q=(k=c.parameters)==null?void 0:k.docs)==null?void 0:q.source}}};var F,G,H;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    label: 'Small',
    priority: 'primary',
    size: 'small'
  }
}`,...(H=(G=p.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};const U=["Default","Primary","Destructive","Warning","Active","NoBorder","Disabled","Pill","Icon","IconWithLabel","Size"],X=Object.freeze(Object.defineProperty({__proto__:null,Active:s,Default:r,Destructive:a,Disabled:i,Icon:l,IconWithLabel:c,NoBorder:t,Pill:n,Primary:e,Size:p,Warning:o,__namedExportsOrder:U,default:R},Symbol.toStringTag,{value:"Module"}));export{s as A,X as B,r as D,l as I,t as N,e as P,p as S,a,i as b,n as c,c as d};
