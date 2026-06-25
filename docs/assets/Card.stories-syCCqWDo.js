import{a as e,i as t}from"./preload-helper-xPQekRTU.js";var n,r=t((()=>{n=({padded:e=!1,condensed:t=!1,label:n,header:r=``,body:i=``,footer:a=``,shadow:o=`none`})=>{let s=document.createElement(`div`);return s.className=[`card`,e?`card--padded`:``,t?`card--condensed`:``,o===`none`?``:`card--shadow-${o}`].filter(Boolean).join(` `),!r&&!i&&!a&&(s.innerHTML=n),r&&(s.innerHTML+=`
  <div class='card__header'>
    ${r}
  </div>
`),i&&(s.innerHTML+=`
  <div class='card__body'>
    ${i}
  </div>
`),a&&(s.innerHTML+=`
  <div class='card__footer'>
    ${a}
  </div>
`),s}})),i=e({Condensed:()=>l,Full:()=>c,Padded:()=>s,Plain:()=>o,Shadow:()=>u,__namedExportsOrder:()=>d,default:()=>a}),a,o,s,c,l,u,d,f=t((()=>{r(),a={title:`Components/Card`,render:({label:e,...t})=>n({label:e,...t}),argTypes:{label:{control:`text`},padded:{control:`boolean`},condensed:{control:`boolean`},header:{control:`text`},body:{control:`text`},footer:{control:`text`},shadow:{control:{type:`select`},options:[`none`,`x-small`,`small`,`medium`,`large`,`x-large`]}}},o={args:{label:`Plain`}},s={args:{padded:!0,label:`Padded`}},c={args:{header:`Full`,body:`Body`,footer:`Footer`}},l={args:{condensed:!0,header:`Condensed`,body:`Body`,footer:`Footer`}},u={args:{shadow:`large`,padded:!0,label:`Shadow`}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Plain'
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    padded: true,
    label: 'Padded'
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    header: 'Full',
    body: 'Body',
    footer: 'Footer'
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    condensed: true,
    header: 'Condensed',
    body: 'Body',
    footer: 'Footer'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    shadow: 'large',
    padded: true,
    label: 'Shadow'
  }
}`,...u.parameters?.docs?.source}}},d=[`Plain`,`Padded`,`Full`,`Condensed`,`Shadow`]}));f();export{l as Condensed,c as Full,s as Padded,o as Plain,u as Shadow,d as __namedExportsOrder,a as default,f as n,i as t};