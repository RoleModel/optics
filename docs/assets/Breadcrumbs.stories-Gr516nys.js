import{c as M}from"./Icon-uqCTS4Mm.js";const z=({size:c="",separator:t="arrow_right"})=>{const p=document.createElement("nav");p.className=["breadcrumbs",c===""?"":`breadcrumbs--${c}`].filter(Boolean).join(" ");const L=[{type:"link",text:"USA"},{type:"separator",text:t},{type:"link",text:"Mexico"},{type:"separator",text:t},{type:"link",text:"Canada"},{type:"separator",text:t},{type:"text",text:"England"}],T=e=>({link:"a",text:"span",separator:"div"})[e],B=e=>{const r=document.createElement(T(e.type));return r.className=`breadcrumbs__${e.type}`,r.innerText=e.text,e.type==="link"?r.href="#":e.type==="separator"&&(r.innerHTML=`
    `+M({name:e.text}).outerHTML+`
  `),r};return p.innerHTML+=`
  ${L.map((e,r)=>B(e).outerHTML).join(`
  `)}
`,p},j={title:"Components/Breadcrumbs",render:({size:c,...t})=>z({size:c,...t}),argTypes:{size:{control:{type:"select"},options:["small","large"]},separator:{control:"text"}}},a={args:{}},s={args:{size:"small"}},o={args:{size:"large"}},n={args:{separator:"folder"}};var l,m,d;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {}
}`,...(d=(m=a.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var i,u,g;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(_=(f=n.parameters)==null?void 0:f.docs)==null?void 0:_.source}}};const E=["Default","Small","Large","SeparatorIcon"],v=Object.freeze(Object.defineProperty({__proto__:null,Default:a,Large:o,SeparatorIcon:n,Small:s,__namedExportsOrder:E,default:j},Symbol.toStringTag,{value:"Module"}));export{v as B,a as D,o as L,n as S};
