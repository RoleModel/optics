const m=({family:a="Noto Sans"})=>{const e=document.createElement("p");return e.innerText=`Font Family Demo using: ${a}`,a==="Tilt Neon"&&(e.className="font-family-demo--alternative"),e},p={title:"Tokens/Typography/Font Family",render:({family:a,...e})=>m({family:a,...e}),argTypes:{family:{control:{type:"select"},options:["Noto Sans","Tilt Neon"]}}},t={args:{family:"Noto Sans"}},o={args:{family:"Tilt Neon"}};var r,n,s;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    family: 'Noto Sans'
  }
}`,...(s=(n=t.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var l,i,c;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    family: 'Tilt Neon'
  }
}`,...(c=(i=o.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const u=["Default","Alternate"],y=Object.freeze(Object.defineProperty({__proto__:null,Alternate:o,Default:t,__namedExportsOrder:u,default:p},Symbol.toStringTag,{value:"Module"}));export{t as D,y as F};
