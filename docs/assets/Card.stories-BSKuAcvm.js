const B=({padded:s=!1,condensed:t=!1,label:T,header:c="",body:l="",footer:i="",shadow:p="none"})=>{const e=document.createElement("div");return e.className=["card",s?"card--padded":"",t?"card--condensed":"",p==="none"?"":`card--shadow-${p}`].filter(Boolean).join(" "),!c&&!l&&!i&&(e.innerHTML=T),c&&(e.innerHTML+=`
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
`),e},M={title:"Content Components/Card",render:({label:s,...t})=>B({label:s,...t}),argTypes:{label:{control:"text"},padded:{control:"boolean"},condensed:{control:"boolean"},header:{control:"text"},body:{control:"text"},footer:{control:"text"},shadow:{control:{type:"select"},options:["none","x-small","small","medium","large","x-large"]}}},r={args:{label:"Plain"}},a={args:{padded:!0,label:"Padded"}},o={args:{header:"Full",body:"Body",footer:"Footer"}},d={args:{condensed:!0,header:"Condensed",body:"Body",footer:"Footer"}},n={args:{shadow:"large",padded:!0,label:"Shadow"}};var u,m,g;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: 'Plain'
  }
}`,...(g=(m=r.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var b,f,S;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    padded: true,
    label: 'Padded'
  }
}`,...(S=(f=a.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var _,y,h;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    header: 'Full',
    body: 'Body',
    footer: 'Footer'
  }
}`,...(h=(y=o.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var C,P,F;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    condensed: true,
    header: 'Condensed',
    body: 'Body',
    footer: 'Footer'
  }
}`,...(F=(P=d.parameters)==null?void 0:P.docs)==null?void 0:F.source}}};var v,x,w;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    shadow: 'large',
    padded: true,
    label: 'Shadow'
  }
}`,...(w=(x=n.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};const H=["Plain","Padded","Full","Condensed","Shadow"],L=Object.freeze(Object.defineProperty({__proto__:null,Condensed:d,Full:o,Padded:a,Plain:r,Shadow:n,__namedExportsOrder:H,default:M},Symbol.toStringTag,{value:"Module"}));export{L as C,o as F,r as P,n as S,a,d as b};
