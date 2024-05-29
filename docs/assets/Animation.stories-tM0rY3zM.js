const N=({speed:c="input (120ms)"})=>{const e=document.createElement("div");return e.innerText=`${c} Hover Me!`,e.className=`transition-demo transition-demo--${c}`,e},O={title:"Tokens/Animation",render:({speed:c,...e})=>N({speed:c,...e}),argTypes:{speed:{control:{type:"select"},options:["accordion (120ms)","input (120ms)","sidebar (200ms)","modal (300ms)","panel (400ms)"]}}},s={args:{speed:"input (120ms)"}},r={args:{speed:"navigation (200ms)"}},a={args:{speed:"sidebar (300ms)"}},o={args:{speed:"modal (300ms)"}},n={args:{speed:"panel (400ms)"}},t={args:{speed:"accordion (120ms)"}};var m,i,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    speed: 'input (120ms)'
  }
}`,...(d=(i=s.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var p,u,l;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    speed: 'navigation (200ms)'
  }
}`,...(l=(u=r.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};var g,S,b;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    speed: 'sidebar (300ms)'
  }
}`,...(b=(S=a.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var v,A,_;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    speed: 'modal (300ms)'
  }
}`,...(_=(A=o.parameters)==null?void 0:A.docs)==null?void 0:_.source}}};var f,y,M;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    speed: 'panel (400ms)'
  }
}`,...(M=(y=n.parameters)==null?void 0:y.docs)==null?void 0:M.source}}};var T,x,D;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    speed: 'accordion (120ms)'
  }
}`,...(D=(x=t.parameters)==null?void 0:x.docs)==null?void 0:D.source}}};const P=["Default","Navigation","Sidebar","Modal","Panel","AccordionRotation"],j=Object.freeze(Object.defineProperty({__proto__:null,AccordionRotation:t,Default:s,Modal:o,Navigation:r,Panel:n,Sidebar:a,__namedExportsOrder:P,default:O},Symbol.toStringTag,{value:"Module"}));export{j as A,s as D};
