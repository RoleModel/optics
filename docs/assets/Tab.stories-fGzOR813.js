const S=({size:s="large",activeTab:n="USA",disabledTab:l="Canada"})=>{const o=document.createElement("div");o.className="tab-group";const b=a=>{const e=document.createElement("a");return e.href="/?path=/docs/navigation-components-tab--docs",e.className=["tab",s==="small"?"tab--small":"",n===a?" tab--active":"",l===a?" tab--disabled":""].filter(Boolean).join(" "),e.innerText=a,l===a&&e.setAttribute("tabindex",-1),e},g=["USA","Mexico","Canada","England","Germany","Spain","Austria","Australia"];return o.innerHTML+=`
  ${g.map(a=>b(a).outerHTML).join(`
  `)}
`,o},T={title:"Navigation Components/Tab",render:({option1:s,...n})=>S({option1:s,...n}),argTypes:{size:{control:{type:"select"},options:["small","large"]},activeTab:{control:{type:"select"},options:["USA","Mexico","Canada","England","Germany","Spain","Austria","Australia"]},disabledTab:{control:{type:"select"},options:["USA","Mexico","Canada","England","Germany","Spain","Austria","Australia"]}}},t={args:{}},r={args:{size:"small"}};var c,i,m;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {}
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var d,p,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    size: 'small'
  }
}`,...(u=(p=r.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const A=["Default","Small"],y=Object.freeze(Object.defineProperty({__proto__:null,Default:t,Small:r,__namedExportsOrder:A,default:T},Symbol.toStringTag,{value:"Module"}));export{t as D,r as S,y as T};
