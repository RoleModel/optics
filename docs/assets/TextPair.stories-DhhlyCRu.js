const y=({inline:i=!1,titleText:s="This is the Title",titleSize:c="",subtitleText:j="This is the Subtitle",subtitleSize:u=""})=>{const e=document.createElement("div");e.className=["text-pair",i?"text-pair--inline":""].filter(Boolean).join(" ");const l=document.createElement("span");l.className=["text-pair__title",c===""?"":`text-pair__title--${c}`].filter(Boolean).join(" "),l.innerText=s;const o=document.createElement("span");return o.className=["text-pair__subtitle",u===""?"":`text-pair__subtitle--${u}`].filter(Boolean).join(" "),o.innerText=j,e.append(`
  `),e.appendChild(l),e.append(`
  `),e.appendChild(o),e.append(`
`),e},P={title:"Components/Text Pair",render:({direction:i,...s})=>y({direction:i,...s}),argTypes:{inline:{control:"boolean"},titleText:{control:"text"},titleSize:{control:{type:"select"},options:["small","medium","large"]},subtitleText:{control:"text"},subtitleSize:{control:{type:"select"},options:["small","medium","large"]}}},t={args:{}},r={args:{inline:!0,titleText:"Temperature:",subtitleText:"72℉"}},a={args:{inline:!0,titleText:"Large Title",titleSize:"large"}},n={args:{inline:!0,subtitleText:"Large Subtitle",subtitleSize:"large"}};var p,m,d;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {}
}`,...(d=(m=t.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var T,x,g;r.parameters={...r.parameters,docs:{...(T=r.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    inline: true,
    titleText: 'Temperature:',
    subtitleText: '72℉'
  }
}`,...(g=(x=r.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var S,b,_;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    inline: true,
    titleText: 'Large Title',
    titleSize: 'large'
  }
}`,...(_=(b=a.parameters)==null?void 0:b.docs)==null?void 0:_.source}}};var f,z,h;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    inline: true,
    subtitleText: 'Large Subtitle',
    subtitleSize: 'large'
  }
}`,...(h=(z=n.parameters)==null?void 0:z.docs)==null?void 0:h.source}}};const E=["Default","Inline","TitleSize","SubtitleSize"],L=Object.freeze(Object.defineProperty({__proto__:null,Default:t,Inline:r,SubtitleSize:n,TitleSize:a,__namedExportsOrder:E,default:P},Symbol.toStringTag,{value:"Module"}));export{t as D,r as I,n as S,L as T,a};
