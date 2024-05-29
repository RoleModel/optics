const $=({padded:n=!1,condensed:t=!1,label:T,header:c="",body:l="",footer:i="",shadow:p="none"})=>{const e=document.createElement("div"),B=n?"card-padded":"card",M=t?"card--condensed":"",H=p==="none"?"":`card--shadow-${p}`,L=[B,M,H].filter(Boolean).join(" ");return e.className=L,!c&&!l&&!i&&(e.innerHTML=T),c&&(e.innerHTML+=`
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
`),e},j={title:"Content Components/Card",render:({label:n,...t})=>$({label:n,...t}),argTypes:{label:{control:"text"},padded:{control:"boolean"},condensed:{control:"boolean"},header:{control:"text"},body:{control:"text"},footer:{control:"text"},shadow:{control:{type:"select"},options:["none","x-small","small","medium","large","x-large"]}}},r={args:{label:"Plain"}},a={args:{padded:!0,label:"Padded"}},o={args:{header:"Full",body:"Body",footer:"Footer"}},s={args:{condensed:!0,header:"Condensed",body:"Body",footer:"Footer"}},d={args:{shadow:"large",padded:!0,label:"Shadow"}};var u,m,g;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: 'Plain'
  }
}`,...(g=(m=r.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var b,f,C;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    padded: true,
    label: 'Padded'
  }
}`,...(C=(f=a.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var S,_,h;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    header: 'Full',
    body: 'Body',
    footer: 'Footer'
  }
}`,...(h=(_=o.parameters)==null?void 0:_.docs)==null?void 0:h.source}}};var y,P,F;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    condensed: true,
    header: 'Condensed',
    body: 'Body',
    footer: 'Footer'
  }
}`,...(F=(P=s.parameters)==null?void 0:P.docs)==null?void 0:F.source}}};var v,w,x;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    shadow: 'large',
    padded: true,
    label: 'Shadow'
  }
}`,...(x=(w=d.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};const O=["Plain","Padded","Full","Condensed","Shadow"],E=Object.freeze(Object.defineProperty({__proto__:null,Condensed:s,Full:o,Padded:a,Plain:r,Shadow:d,__namedExportsOrder:O,default:j},Symbol.toStringTag,{value:"Module"}));export{E as C,o as F,r as P,d as S,a,s as b};
