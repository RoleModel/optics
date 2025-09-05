const n=({family:o="Noto Sans"})=>{const e=document.createElement("p");return e.innerText=`Font Family Demo using: ${o}`,o==="Noto Serif"&&(e.className="font-family-demo--alternative"),o==="Tilt Neon"&&(e.className="font-family-demo--optional"),e},s={title:"Tokens/Typography/Font Family",render:({family:o,...e})=>n({family:o,...e}),argTypes:{family:{control:{type:"select"},options:["Noto Sans","Noto Serif","Tilt Neon"]}}},t={args:{family:"Noto Sans"}},a={args:{family:"Noto Serif"}},r={args:{family:"Tilt Neon"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    family: 'Noto Sans'
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    family: 'Noto Serif'
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    family: 'Tilt Neon'
  }
}`,...r.parameters?.docs?.source}}};const i=["Default","Alternate","Optional"],l=Object.freeze(Object.defineProperty({__proto__:null,Alternate:a,Default:t,Optional:r,__namedExportsOrder:i,default:s},Symbol.toStringTag,{value:"Module"}));export{t as D,l as F};
