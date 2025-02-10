const C=({speed:d="input (120ms)"})=>{const e=document.createElement("div");return e.innerText=`${d} Hover Me!`,e.className=`transition-demo transition-demo--${d}`,e},E={title:"Tokens/Animation",render:({speed:d,...e})=>C({speed:d,...e}),argTypes:{speed:{control:{type:"select"},options:["accordion (120ms)","accordion_content (300ms)","input (120ms)","sidebar (200ms)","modal (300ms)","panel (400ms)"]}}},s={args:{speed:"input (120ms)"}},r={args:{speed:"navigation (200ms)"}},a={args:{speed:"sidebar (300ms)"}},o={args:{speed:"modal (300ms)"}},n={args:{speed:"panel (400ms)"}},t={args:{speed:"accordion (120ms)"}},c={args:{speed:"accordion content (300ms)"}};var m,i,p;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    speed: 'input (120ms)'
  }
}`,...(p=(i=s.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var u,l,g;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    speed: 'navigation (200ms)'
  }
}`,...(g=(l=r.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var S,A,b;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    speed: 'sidebar (300ms)'
  }
}`,...(b=(A=a.parameters)==null?void 0:A.docs)==null?void 0:b.source}}};var _,v,f;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    speed: 'modal (300ms)'
  }
}`,...(f=(v=o.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var y,M,T;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    speed: 'panel (400ms)'
  }
}`,...(T=(M=n.parameters)==null?void 0:M.docs)==null?void 0:T.source}}};var x,D,N;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    speed: 'accordion (120ms)'
  }
}`,...(N=(D=t.parameters)==null?void 0:D.docs)==null?void 0:N.source}}};var O,P,j;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    speed: 'accordion content (300ms)'
  }
}`,...(j=(P=c.parameters)==null?void 0:P.docs)==null?void 0:j.source}}};const R=["Default","Navigation","Sidebar","Modal","Panel","AccordionRotation","AccordionContent"],$=Object.freeze(Object.defineProperty({__proto__:null,AccordionContent:c,AccordionRotation:t,Default:s,Modal:o,Navigation:r,Panel:n,Sidebar:a,__namedExportsOrder:R,default:E},Symbol.toStringTag,{value:"Module"}));export{$ as A,s as D};
