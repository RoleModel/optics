import{c as m}from"./Icon-uqCTS4Mm.js";const f=o=>{const n=document.createElement("input");return n.className="segmented-control__input",n.type="radio",n.id=`option-${o}`,n.value=`value ${o}`,n.name="example-segmented-control",n},g=(o,n,c)=>{const e=document.createElement("label");return e.className="segmented-control__label",e.setAttribute("for",`option-${o}`),e.innerHTML+=`
`,n&&(e.innerHTML+="    ",e.appendChild(m({name:"bolt"})),e.innerHTML+=`
`),e.innerHTML+=`    Option ${o} 
  `,c&&(e.innerHTML+="  ",e.appendChild(m({name:"info"})),e.innerHTML+=`
  `),e},h=({size:o="large",fullWidth:n=!1,showPrefixIcon:c=!1,showSuffixIcon:e=!1,options:d=3})=>{const t=document.createElement("div");t.role="radiogroup",t.className=["segmented-control",o==="large"?"":`segmented-control--${o}`,n?"segmented-control--full-width":""].filter(Boolean).join(" ");for(let i=1;i<=d;i++){const u=f(i),p=g(i,c,e);t.innerHTML+=`
  `,t.appendChild(u),t.innerHTML+=`
  `,t.appendChild(p)}return t.innerHTML+=`
`,t},S={title:"Components/Segmented Control",render:({size:o,...n})=>h({size:o,...n}),argTypes:{size:{control:{type:"select"},options:["small","medium","large"]},options:{control:"number"},fullWidth:{control:"boolean"},showPrefixIcon:{control:"boolean",description:"This is not a class. It just provides an example of using icons within the options"},showSuffixIcon:{control:"boolean",description:"This is not a class. It just provides an example of using icons within the options"}},parameters:{layout:"padded"}},r={args:{showPrefixIcon:!1,showSuffixIcon:!1,options:3,size:"medium"}},s={args:{label:"Small",size:"small"}},a={args:{label:"Full Width",fullWidth:!0}},l={args:{showSuffixIcon:!0}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    showPrefixIcon: false,
    showSuffixIcon: false,
    options: 3,
    size: 'medium'
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Small',
    size: 'small'
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Full Width',
    fullWidth: true
  }
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    showSuffixIcon: true
  }
}`,...l.parameters?.docs?.source}}};const b=["Default","Size","FullWidth","WithIcons"],T=Object.freeze(Object.defineProperty({__proto__:null,Default:r,FullWidth:a,Size:s,WithIcons:l,__namedExportsOrder:b,default:S},Symbol.toStringTag,{value:"Module"}));export{r as D,a as F,T as S,l as W,s as a};
