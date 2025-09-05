import{c as H}from"./Icon-uqCTS4Mm.js";import{c as M}from"./Button-B21kpIpO.js";const L=({headerLabel:d="Header Label",marker:c="arrow_right",additionalHeaderContent:l="",flipHeaderAndMarker:m=!1,disableAnimation:u=!1,content:p="Something small enough to escape casual notice."})=>{const r=document.createElement("details");r.className="accordion",u&&(r.className+=" accordion--disable-animation");const e=document.createElement("summary"),s=document.createElement("span");s.className="accordion__label",s.innerHTML=d;const i=H({name:c});return i.className+=" accordion__marker",e.innerHTML=`
    `,m?(e.innerHTML+=s.outerHTML,e.innerHTML+=`
    `,e.innerHTML+=i.outerHTML):(e.innerHTML+=i.outerHTML,e.innerHTML+=`
    `,e.innerHTML+=s.outerHTML),e.innerHTML+=`
    `,e.innerHTML+=l,e.innerHTML+=`
  `,r.innerHTML=`
  `,r.innerHTML+=e.outerHTML,r.innerHTML+=`
  `,r.innerHTML+=p,r.innerHTML+=`
`,r},T={title:"Components/Accordion",render:({option1:d,...c})=>L({...c}),argTypes:{headerLabel:{control:"text"},marker:{control:"text"},additionalHeaderContent:{control:"text"},flipHeaderAndMarker:{control:"boolean"},disableAnimation:{control:"boolean"},content:{control:"text"}},parameters:{layout:"padded"}},n={args:{}},a={args:{flipHeaderAndMarker:!0}},o={args:{disableAnimation:!0}},t={args:{additionalHeaderContent:M({label:"Button"}).outerHTML}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    flipHeaderAndMarker: true
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    disableAnimation: true
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    additionalHeaderContent: createButton({
      label: 'Button'
    }).outerHTML
  }
}`,...t.parameters?.docs?.source}}};const b=["Default","FlipHeaderAndMarker","DisableAnimation","AdditionalHeaderContent"],f=Object.freeze(Object.defineProperty({__proto__:null,AdditionalHeaderContent:t,Default:n,DisableAnimation:o,FlipHeaderAndMarker:a,__namedExportsOrder:b,default:T},Symbol.toStringTag,{value:"Module"}));export{f as A,n as D,a as F,o as a,t as b};
