const S=({label:a="Switch Text",size:b="large",disabled:g=!1})=>{let t="switch";return b==="small"&&(t+=" switch--small"),`
<div class='form-group form-group--inline'>
  <div class="${t}">
    <input type="checkbox" id="switch-demo" ${g?"disabled":""}>
    <label for="switch-demo"></label>
  </div>
  <label class="form-label" for="switch-demo">${a}</label>
</div>
  `},f={title:"Content Components/Switch",render:({...a})=>S({...a}),argTypes:{label:{control:"text"},size:{control:{type:"select"},options:["small","large"]},disabled:{control:{type:"boolean"}}}},e={args:{}},s={args:{size:"small"}},r={args:{disabled:!0}};var o,l,c;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {}
}`,...(c=(l=e.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var i,n,d;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    size: 'small'
  }
}`,...(d=(n=s.parameters)==null?void 0:n.docs)==null?void 0:d.source}}};var m,p,u;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(u=(p=r.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const h=["Default","Small","Disabled"],w=Object.freeze(Object.defineProperty({__proto__:null,Default:e,Disabled:r,Small:s,__namedExportsOrder:h,default:f},Symbol.toStringTag,{value:"Module"}));export{e as D,w as S,s as a,r as b};
