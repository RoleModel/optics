const E=({size:n="",padding:c=""})=>{const i=document.createElement("div");i.style.backgroundColor="var(--op-color-alerts-warning-base)",i.style.height="30rem";const e=document.createElement("div");e.style.backgroundColor="var(--op-color-alerts-notice-base)",e.style.height="100%",e.className=["container",n?`container--${n}`:"",c?`container--${c}-padding`:""].filter(Boolean).join(" ");const d=document.createElement("div");return d.style.backgroundColor="var(--op-color-primary-base)",d.style.height="100%",e.appendChild(d),i.appendChild(e),i},P={title:"Utilities/Container",render:({size:n,...c})=>E({size:n,...c}),argTypes:{size:{control:{type:"select"},options:["","sm","xs"]},padding:{control:{type:"select"},options:["","sm","md"]}},parameters:{layout:"fullscreen"}},r={args:{}},a={args:{size:"sm"}},s={args:{size:"xs"}},o={args:{padding:"sm"}},t={args:{padding:"md"}};var l,m,p;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {}
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var g,u,S;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  }
}`,...(S=(u=a.parameters)==null?void 0:u.docs)==null?void 0:S.source}}};var y,C,b;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    size: 'xs'
  }
}`,...(b=(C=s.parameters)==null?void 0:C.docs)==null?void 0:b.source}}};var z,h,f;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    padding: 'sm'
  }
}`,...(f=(h=o.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var v,x,_;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    padding: 'md'
  }
}`,...(_=(x=t.parameters)==null?void 0:x.docs)==null?void 0:_.source}}};const j=["Default","SizeSmall","SizeExtraSmall","PaddingSmall","PaddingMedium"],k=Object.freeze(Object.defineProperty({__proto__:null,Default:r,PaddingMedium:t,PaddingSmall:o,SizeExtraSmall:s,SizeSmall:a,__namedExportsOrder:j,default:P},Symbol.toStringTag,{value:"Module"}));export{k as C,r as D,o as P,a as S,s as a,t as b};
