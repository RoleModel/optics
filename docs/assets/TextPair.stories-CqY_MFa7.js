const m=({inline:o=!1,titleText:n="This is the Title",titleSize:c="",subtitleText:p="This is the Subtitle",subtitleSize:u=""})=>{const e=document.createElement("div");e.className=["text-pair",o?"text-pair--inline":""].filter(Boolean).join(" ");const s=document.createElement("span");s.className=["text-pair__title",c===""?"":`text-pair__title--${c}`].filter(Boolean).join(" "),s.innerText=n;const l=document.createElement("span");return l.className=["text-pair__subtitle",u===""?"":`text-pair__subtitle--${u}`].filter(Boolean).join(" "),l.innerText=p,e.append(`
  `),e.appendChild(s),e.append(`
  `),e.appendChild(l),e.append(`
`),e},d={title:"Components/Text Pair",render:({direction:o,...n})=>m({...n}),argTypes:{inline:{control:"boolean"},titleText:{control:"text"},titleSize:{control:{type:"select"},options:["small","medium","large"]},subtitleText:{control:"text"},subtitleSize:{control:{type:"select"},options:["small","medium","large"]}}},t={args:{}},r={args:{inline:!0,titleText:"Temperature:",subtitleText:"72℉"}},a={args:{inline:!0,titleText:"Large Title",titleSize:"large"}},i={args:{inline:!0,subtitleText:"Large Subtitle",subtitleSize:"large"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    inline: true,
    titleText: 'Temperature:',
    subtitleText: '72℉'
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    inline: true,
    titleText: 'Large Title',
    titleSize: 'large'
  }
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    inline: true,
    subtitleText: 'Large Subtitle',
    subtitleSize: 'large'
  }
}`,...i.parameters?.docs?.source}}};const T=["Default","Inline","TitleSize","SubtitleSize"],x=Object.freeze(Object.defineProperty({__proto__:null,Default:t,Inline:r,SubtitleSize:i,TitleSize:a,__namedExportsOrder:T,default:d},Symbol.toStringTag,{value:"Module"}));export{t as D,r as I,i as S,x as T,a};
