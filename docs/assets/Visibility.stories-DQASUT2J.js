const d=({visible:t=!1})=>{const e=document.createElement("span");return e.innerText="The text",t||(e.className="sr-only"),e},b={title:"Utilities/Visibility",render:({visible:t,...e})=>d({visible:t,...e}),argTypes:{visible:{control:{type:"boolean"}}}},s={args:{visible:!0}},r={args:{visible:!1}};var i,a,o;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    visible: true
  }
}`,...(o=(a=s.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};var n,l,c;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    visible: false
  }
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const p=["Visible","Hidden"],u=Object.freeze(Object.defineProperty({__proto__:null,Hidden:r,Visible:s,__namedExportsOrder:p,default:b},Symbol.toStringTag,{value:"Module"}));export{r as H,u as V,s as a};
