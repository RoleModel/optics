const B=({width:u="full"})=>{const r=document.createElement("div");return r.innerText=`${u} width`,r.className=`${u}-width card`,r},C={title:"Utilities/Item Width",render:({width:u,...r})=>B({width:u,...r}),argTypes:{width:{control:{type:"select"},options:["half","full","one-fifth","two-fifths","three-fifths","four-fifths","one-quarter","three-quarters","one-third","two-thirds"]}}},e={args:{width:"half"}},s={args:{width:"full"}},t={args:{width:"one-fifth"}},a={args:{width:"two-fifths"}},o={args:{width:"three-fifths"}},n={args:{width:"four-fifths"}},i={args:{width:"one-quarter"}},c={args:{width:"three-quarters"}},d={args:{width:"one-third"}},h={args:{width:"two-thirds"}};var m,f,p;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    width: 'half'
  }
}`,...(p=(f=e.parameters)==null?void 0:f.docs)==null?void 0:p.source}}};var l,g,w;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    width: 'full'
  }
}`,...(w=(g=s.parameters)==null?void 0:g.docs)==null?void 0:w.source}}};var T,F,S;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    width: 'one-fifth'
  }
}`,...(S=(F=t.parameters)==null?void 0:F.docs)==null?void 0:S.source}}};var O,_,q;a.parameters={...a.parameters,docs:{...(O=a.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    width: 'two-fifths'
  }
}`,...(q=(_=a.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var I,b,y;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    width: 'three-fifths'
  }
}`,...(y=(b=o.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var Q,W,x;n.parameters={...n.parameters,docs:{...(Q=n.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    width: 'four-fifths'
  }
}`,...(x=(W=n.parameters)==null?void 0:W.docs)==null?void 0:x.source}}};var H,j,v;i.parameters={...i.parameters,docs:{...(H=i.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    width: 'one-quarter'
  }
}`,...(v=(j=i.parameters)==null?void 0:j.docs)==null?void 0:v.source}}};var E,$,z;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    width: 'three-quarters'
  }
}`,...(z=($=c.parameters)==null?void 0:$.docs)==null?void 0:z.source}}};var M,N,P;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    width: 'one-third'
  }
}`,...(P=(N=d.parameters)==null?void 0:N.docs)==null?void 0:P.source}}};var U,k,A;h.parameters={...h.parameters,docs:{...(U=h.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    width: 'two-thirds'
  }
}`,...(A=(k=h.parameters)==null?void 0:k.docs)==null?void 0:A.source}}};const D=["Half","Full","OneFifth","TwoFifths","ThreeFifths","FourFifths","OneQuarter","ThreeQuarters","OneThird","TwoThirds"],G=Object.freeze(Object.defineProperty({__proto__:null,FourFifths:n,Full:s,Half:e,OneFifth:t,OneQuarter:i,OneThird:d,ThreeFifths:o,ThreeQuarters:c,TwoFifths:a,TwoThirds:h,__namedExportsOrder:D,default:C},Symbol.toStringTag,{value:"Module"}));export{s as F,e as H,G as I,t as O,a as T,o as a,n as b,i as c,c as d,d as e,h as f};
