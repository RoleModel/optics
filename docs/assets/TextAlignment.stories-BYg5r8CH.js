const T=({alignment:a="left"})=>{const e=document.createElement("div");return e.innerText=a,e.className=`text-${a}`,e},S={title:"Utilities/Text Alignment",render:({alignment:a,...e})=>T({alignment:a,...e}),argTypes:{alignment:{control:{type:"select"},options:["left","center","right","justify"]}}},t={args:{alignment:"left"}},r={args:{alignment:"center"}},s={args:{alignment:"right"}},n={args:{alignment:"justify"}};var o,c,i;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    alignment: 'left'
  }
}`,...(i=(c=t.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var m,l,g;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    alignment: 'center'
  }
}`,...(g=(l=r.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,p,d;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    alignment: 'right'
  }
}`,...(d=(p=s.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var f,y,x;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    alignment: 'justify'
  }
}`,...(x=(y=n.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};const _=["Left","Center","Right","Justify"],h=Object.freeze(Object.defineProperty({__proto__:null,Center:r,Justify:n,Left:t,Right:s,__namedExportsOrder:_,default:S},Symbol.toStringTag,{value:"Module"}));export{r as C,n as J,t as L,s as R,h as T};
