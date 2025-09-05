const i=({visible:t=!1})=>{const e=document.createElement("span");return e.innerText="The text",t||(e.className="sr-only"),e},a={title:"Utilities/Visibility",render:({visible:t,...e})=>i({visible:t,...e}),argTypes:{visible:{control:{type:"boolean"}}}},s={args:{visible:!0}},r={args:{visible:!1}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    visible: true
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    visible: false
  }
}`,...r.parameters?.docs?.source}}};const o=["Visible","Hidden"],n=Object.freeze(Object.defineProperty({__proto__:null,Hidden:r,Visible:s,__namedExportsOrder:o,default:a},Symbol.toStringTag,{value:"Module"}));export{r as H,n as V,s as a};
