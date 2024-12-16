const d=({family:o="Noto Sans"})=>{const e=document.createElement("p");return e.innerText=`Font Family Demo using: ${o}`,o==="Noto Serif"&&(e.className="font-family-demo--alternative"),o==="Tilt Neon"&&(e.className="font-family-demo--optional"),e},y={title:"Tokens/Typography/Font Family",render:({family:o,...e})=>d({family:o,...e}),argTypes:{family:{control:{type:"select"},options:["Noto Sans","Noto Serif","Tilt Neon"]}}},t={args:{family:"Noto Sans"}},a={args:{family:"Noto Serif"}},r={args:{family:"Tilt Neon"}};var n,s,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    family: 'Noto Sans'
  }
}`,...(i=(s=t.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var l,c,m;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    family: 'Noto Serif'
  }
}`,...(m=(c=a.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var p,f,u;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    family: 'Tilt Neon'
  }
}`,...(u=(f=r.parameters)==null?void 0:f.docs)==null?void 0:u.source}}};const g=["Default","Alternate","Optional"],N=Object.freeze(Object.defineProperty({__proto__:null,Alternate:a,Default:t,Optional:r,__namedExportsOrder:g,default:y},Symbol.toStringTag,{value:"Module"}));export{t as D,N as F};
