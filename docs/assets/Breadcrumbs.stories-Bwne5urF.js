import{n as e,r as t}from"./rolldown-runtime-DaJ6WEGw.js";import{n,t as r}from"./Icon-CRcwQQX1.js";var i,a=e((()=>{n(),i=({size:e=``,separator:t=`arrow_right`})=>{let n=document.createElement(`nav`);n.className=[`breadcrumbs`,e===``?``:`breadcrumbs--${e}`].filter(Boolean).join(` `);let i=[{type:`link`,text:`USA`},{type:`separator`,text:t},{type:`link`,text:`Mexico`},{type:`separator`,text:t},{type:`link`,text:`Canada`},{type:`separator`,text:t},{type:`text`,text:`England`}],a=e=>({link:`a`,text:`span`,separator:`div`})[e],o=e=>{let t=document.createElement(a(e.type));return t.className=`breadcrumbs__${e.type}`,t.innerText=e.text,e.type===`link`?t.href=`#`:e.type===`separator`&&(t.innerHTML=`
    `+r({name:e.text}).outerHTML+`
  `),t};return n.innerHTML+=`
  ${i.map((e,t)=>o(e).outerHTML).join(`
  `)}
`,n}})),o=t({Default:()=>c,Large:()=>u,SeparatorIcon:()=>d,Small:()=>l,__namedExportsOrder:()=>f,default:()=>s}),s,c,l,u,d,f,p=e((()=>{a(),s={title:`Components/Breadcrumbs`,render:({size:e,...t})=>i({size:e,...t}),argTypes:{size:{control:{type:`select`},options:[`small`,`large`]},separator:{control:`text`}}},c={args:{}},l={args:{size:`small`}},u={args:{size:`large`}},d={args:{separator:`folder`}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'small'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'large'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    separator: 'folder'
  }
}`,...d.parameters?.docs?.source}}},f=[`Default`,`Small`,`Large`,`SeparatorIcon`]}));p();export{c as Default,u as Large,d as SeparatorIcon,l as Small,f as __namedExportsOrder,s as default,p as n,o as t};