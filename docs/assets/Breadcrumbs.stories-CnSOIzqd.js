import{c as M}from"./Icon-uqCTS4Mm.js";const z=({size:c="",separator:a="arrow_right"})=>{const p=document.createElement("nav");p.className=["breadcrumbs",c===""?"":`breadcrumbs--${c}`].filter(Boolean).join(" ");const L=[{type:"link",text:"USA"},{type:"separator",text:a},{type:"link",text:"Mexico"},{type:"separator",text:a},{type:"link",text:"Canada"},{type:"separator",text:a},{type:"text",text:"England"}],T=e=>({link:"a",text:"span",separator:"div"})[e],B=e=>{const r=document.createElement(T(e.type));return r.className=`breadcrumbs__${e.type}`,r.innerText=e.text,e.type==="link"?r.href="#":e.type==="separator"&&(r.innerHTML=`
    `+M({name:e.text}).outerHTML+`
  `),r};return p.innerHTML+=`
  ${L.map((e,r)=>B(e).outerHTML).join(`
  `)}
`,p},j={title:"Navigation Components/Breadcrumbs",render:({size:c,...a})=>z({size:c,...a}),argTypes:{size:{control:{type:"select"},options:["small","large"]},separator:{control:"text"}}},t={args:{}},s={args:{size:"small"}},o={args:{size:"large"}},n={args:{separator:"folder"}};var l,m,i;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {}
}`,...(i=(m=t.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};var d,u,g;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    size: 'small'
  }
}`,...(g=(u=s.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var x,y,b;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    size: 'large'
  }
}`,...(b=(y=o.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var S,f,_;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    separator: 'folder'
  }
}`,...(_=(f=n.parameters)==null?void 0:f.docs)==null?void 0:_.source}}};const v=["Default","Small","Large","SeparatorIcon"],H=Object.freeze(Object.defineProperty({__proto__:null,Default:t,Large:o,SeparatorIcon:n,Small:s,__namedExportsOrder:v,default:j},Symbol.toStringTag,{value:"Module"}));export{H as B,t as D,o as L,n as S};
