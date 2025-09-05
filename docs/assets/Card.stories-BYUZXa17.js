const m=({padded:n=!1,condensed:t=!1,label:u,header:c="",body:l="",footer:i="",shadow:p="none"})=>{const e=document.createElement("div");return e.className=["card",n?"card--padded":"",t?"card--condensed":"",p==="none"?"":`card--shadow-${p}`].filter(Boolean).join(" "),!c&&!l&&!i&&(e.innerHTML=u),c&&(e.innerHTML+=`
  <div class='card__header'>
    ${c}
  </div>
`),l&&(e.innerHTML+=`
  <div class='card__body'>
    ${l}
  </div>
`),i&&(e.innerHTML+=`
  <div class='card__footer'>
    ${i}
  </div>
`),e},g={title:"Components/Card",render:({label:n,...t})=>m({label:n,...t}),argTypes:{label:{control:"text"},padded:{control:"boolean"},condensed:{control:"boolean"},header:{control:"text"},body:{control:"text"},footer:{control:"text"},shadow:{control:{type:"select"},options:["none","x-small","small","medium","large","x-large"]}}},r={args:{label:"Plain"}},a={args:{padded:!0,label:"Padded"}},o={args:{header:"Full",body:"Body",footer:"Footer"}},d={args:{condensed:!0,header:"Condensed",body:"Body",footer:"Footer"}},s={args:{shadow:"large",padded:!0,label:"Shadow"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Plain'
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    padded: true,
    label: 'Padded'
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    header: 'Full',
    body: 'Body',
    footer: 'Footer'
  }
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    condensed: true,
    header: 'Condensed',
    body: 'Body',
    footer: 'Footer'
  }
}`,...d.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    shadow: 'large',
    padded: true,
    label: 'Shadow'
  }
}`,...s.parameters?.docs?.source}}};const b=["Plain","Padded","Full","Condensed","Shadow"],f=Object.freeze(Object.defineProperty({__proto__:null,Condensed:d,Full:o,Padded:a,Plain:r,Shadow:s,__namedExportsOrder:b,default:g},Symbol.toStringTag,{value:"Module"}));export{f as C,o as F,r as P,s as S,a,d as b};
