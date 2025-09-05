import{c as i}from"./Icon-uqCTS4Mm.js";const u=({size:c="",separator:t="arrow_right"})=>{const p=document.createElement("nav");p.className=["breadcrumbs",c===""?"":`breadcrumbs--${c}`].filter(Boolean).join(" ");const l=[{type:"link",text:"USA"},{type:"separator",text:t},{type:"link",text:"Mexico"},{type:"separator",text:t},{type:"link",text:"Canada"},{type:"separator",text:t},{type:"text",text:"England"}],m=e=>({link:"a",text:"span",separator:"div"})[e],d=e=>{const r=document.createElement(m(e.type));return r.className=`breadcrumbs__${e.type}`,r.innerText=e.text,e.type==="link"?r.href="#":e.type==="separator"&&(r.innerHTML=`
    `+i({name:e.text}).outerHTML+`
  `),r};return p.innerHTML+=`
  ${l.map((e,r)=>d(e).outerHTML).join(`
  `)}
`,p},g={title:"Components/Breadcrumbs",render:({size:c,...t})=>u({size:c,...t}),argTypes:{size:{control:{type:"select"},options:["small","large"]},separator:{control:"text"}}},a={args:{}},s={args:{size:"small"}},o={args:{size:"large"}},n={args:{separator:"folder"}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'small'
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'large'
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    separator: 'folder'
  }
}`,...n.parameters?.docs?.source}}};const x=["Default","Small","Large","SeparatorIcon"],b=Object.freeze(Object.defineProperty({__proto__:null,Default:a,Large:o,SeparatorIcon:n,Small:s,__namedExportsOrder:x,default:g},Symbol.toStringTag,{value:"Module"}));export{b as B,a as D,o as L,n as S};
