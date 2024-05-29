import{c as _}from"./Icon-D9QrNi_D.js";import{c as b}from"./Button-CoyIamir.js";const k=({headerLabel:s="Header Label",marker:c="arrow_right",additionalHeaderContent:g="",flipHeaderAndMarker:f=!1,content:A="Something small enough to escape casual notice."})=>{const r=document.createElement("details");r.className="accordion";const e=document.createElement("summary"),o=document.createElement("span");o.className="accordion__label",o.innerHTML=s;const d=_({name:c});return d.className+=" accordion__marker",e.innerHTML=`
    `,f?(e.innerHTML+=o.outerHTML,e.innerHTML+=`
    `,e.innerHTML+=d.outerHTML):(e.innerHTML+=d.outerHTML,e.innerHTML+=`
    `,e.innerHTML+=o.outerHTML),e.innerHTML+=`
    `,e.innerHTML+=g,e.innerHTML+=`
  `,r.innerHTML=`
  `,r.innerHTML+=e.outerHTML,r.innerHTML+=`
  `,r.innerHTML+=A,r.innerHTML+=`
`,r},C={title:"Content Components/Accordion",render:({option1:s,...c})=>k({option1:s,...c}),argTypes:{headerLabel:{control:"text"},marker:{control:"text"},additionalHeaderContent:{control:"text"},flipHeaderAndMarker:{control:"boolean"},content:{control:"text"}},parameters:{layout:"padded"}},n={args:{}},a={args:{flipHeaderAndMarker:!0}},t={args:{additionalHeaderContent:b({label:"Button"}).outerHTML}};var i,l,m;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {}
}`,...(m=(l=n.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var u,H,p;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    flipHeaderAndMarker: true
  }
}`,...(p=(H=a.parameters)==null?void 0:H.docs)==null?void 0:p.source}}};var M,L,T;t.parameters={...t.parameters,docs:{...(M=t.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    additionalHeaderContent: createButton({
      label: 'Button'
    }).outerHTML
  }
}`,...(T=(L=t.parameters)==null?void 0:L.docs)==null?void 0:T.source}}};const S=["Default","FlipHeaderAndMarker","AdditionalHeaderContent"],h=Object.freeze(Object.defineProperty({__proto__:null,AdditionalHeaderContent:t,Default:n,FlipHeaderAndMarker:a,__namedExportsOrder:S,default:C},Symbol.toStringTag,{value:"Module"}));export{h as A,n as D,a as F,t as a};
