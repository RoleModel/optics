import{p as a,c as s,s as j,a as D}from"./utils-ChVC8LB4.js";const E=({scale:e="primary",step:r="base"})=>{const i=document.createElement("div"),z=`var(--op-color-${a(e)}-${a(r)})`,m=`var(--op-color-${a(e)}-on-${a(r)})`,A=`var(--op-color-${a(e)}-on-${a(r)}-alt)`;return i.style.backgroundColor=z,i.classList="card-padded",i.innerHTML=`
  <p style="color: ${m}">Background: ${s(e)} ${s(r)}</p>
  <p style="color: ${m}">Text: ${s(e)} On ${s(r)}</p>
  <p style="color: ${A}">Alt: ${s(e)} On ${s(r)} Alt</p>
`,i},I={title:"Tokens/Color/Color Scale",render:({scale:e,...r})=>E({scale:e,...r}),argTypes:{scale:{control:{type:"select"},options:j},step:{control:{type:"select"},options:D}}},o={args:{scale:"primary",step:"base"}},t={args:{scale:"neutral",step:"base"}},n={args:{scale:"warning",step:"base"}},c={args:{scale:"danger",step:"base"}},l={args:{scale:"info",step:"base"}},p={args:{scale:"notice",step:"base"}};var d,g,u;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    scale: 'primary',
    step: 'base'
  }
}`,...(u=(g=o.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var b,$,y;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    scale: 'neutral',
    step: 'base'
  }
}`,...(y=($=t.parameters)==null?void 0:$.docs)==null?void 0:y.source}}};var S,f,C;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    scale: 'warning',
    step: 'base'
  }
}`,...(C=(f=n.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var _,v,O;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    scale: 'danger',
    step: 'base'
  }
}`,...(O=(v=c.parameters)==null?void 0:v.docs)==null?void 0:O.source}}};var T,k,N;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    scale: 'info',
    step: 'base'
  }
}`,...(N=(k=l.parameters)==null?void 0:k.docs)==null?void 0:N.source}}};var P,w,x;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    scale: 'notice',
    step: 'base'
  }
}`,...(x=(w=p.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};const L=["Primary","Neutral","Warning","Danger","Info","Notice"],W=Object.freeze(Object.defineProperty({__proto__:null,Danger:c,Info:l,Neutral:t,Notice:p,Primary:o,Warning:n,__namedExportsOrder:L,default:I},Symbol.toStringTag,{value:"Module"}));export{W as C,o as P};
