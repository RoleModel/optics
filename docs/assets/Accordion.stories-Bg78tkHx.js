import{c as y}from"./Icon-uqCTS4Mm.js";import{c as C}from"./Button-B21kpIpO.js";const D=({headerLabel:c="Header Label",marker:i="arrow_right",additionalHeaderContent:_="",flipHeaderAndMarker:k=!1,disableAnimation:S=!1,content:x="Something small enough to escape casual notice."})=>{const r=document.createElement("details");r.className="accordion",S&&(r.className+=" accordion--disable-animation");const e=document.createElement("summary"),s=document.createElement("span");s.className="accordion__label",s.innerHTML=c;const d=y({name:i});return d.className+=" accordion__marker",e.innerHTML=`
    `,k?(e.innerHTML+=s.outerHTML,e.innerHTML+=`
    `,e.innerHTML+=d.outerHTML):(e.innerHTML+=d.outerHTML,e.innerHTML+=`
    `,e.innerHTML+=s.outerHTML),e.innerHTML+=`
    `,e.innerHTML+=_,e.innerHTML+=`
  `,r.innerHTML=`
  `,r.innerHTML+=e.outerHTML,r.innerHTML+=`
  `,r.innerHTML+=x,r.innerHTML+=`
`,r},h={title:"Components/Accordion",render:({option1:c,...i})=>D({option1:c,...i}),argTypes:{headerLabel:{control:"text"},marker:{control:"text"},additionalHeaderContent:{control:"text"},flipHeaderAndMarker:{control:"boolean"},disableAnimation:{control:"boolean"},content:{control:"text"}},parameters:{layout:"padded"}},n={args:{}},a={args:{flipHeaderAndMarker:!0}},o={args:{disableAnimation:!0}},t={args:{additionalHeaderContent:C({label:"Button"}).outerHTML}};var l,m,u;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {}
}`,...(u=(m=n.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var H,p,M;a.parameters={...a.parameters,docs:{...(H=a.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    flipHeaderAndMarker: true
  }
}`,...(M=(p=a.parameters)==null?void 0:p.docs)==null?void 0:M.source}}};var L,T,b;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    disableAnimation: true
  }
}`,...(b=(T=o.parameters)==null?void 0:T.docs)==null?void 0:b.source}}};var g,A,f;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    additionalHeaderContent: createButton({
      label: 'Button'
    }).outerHTML
  }
}`,...(f=(A=t.parameters)==null?void 0:A.docs)==null?void 0:f.source}}};const B=["Default","FlipHeaderAndMarker","DisableAnimation","AdditionalHeaderContent"],F=Object.freeze(Object.defineProperty({__proto__:null,AdditionalHeaderContent:t,Default:n,DisableAnimation:o,FlipHeaderAndMarker:a,__namedExportsOrder:B,default:h},Symbol.toStringTag,{value:"Module"}));export{F as A,n as D,a as F,o as a,t as b};
