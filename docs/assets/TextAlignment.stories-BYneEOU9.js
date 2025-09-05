const o=({alignment:a="left"})=>{const e=document.createElement("div");return e.innerText=a,e.className=`text-${a} text-alignment-demo`,e},c={title:"Utilities/Text Alignment",render:({alignment:a,...e})=>o({alignment:a,...e}),argTypes:{alignment:{control:{type:"select"},options:["left","center","right","justify"]}}},t={args:{alignment:"left"}},r={args:{alignment:"center"}},n={args:{alignment:"right"}},s={args:{alignment:"justify"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    alignment: 'left'
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    alignment: 'center'
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    alignment: 'right'
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    alignment: 'justify'
  }
}`,...s.parameters?.docs?.source}}};const i=["Left","Center","Right","Justify"],m=Object.freeze(Object.defineProperty({__proto__:null,Center:r,Justify:s,Left:t,Right:n,__namedExportsOrder:i,default:c},Symbol.toStringTag,{value:"Module"}));export{r as C,s as J,t as L,n as R,m as T};
