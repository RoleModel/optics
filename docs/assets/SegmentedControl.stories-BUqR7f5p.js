import{n as e,r as t}from"./rolldown-runtime-DaJ6WEGw.js";import{n,t as r}from"./Icon-CRcwQQX1.js";var i,a,o,s=e((()=>{n(),i=e=>{let t=document.createElement(`input`);return t.className=`segmented-control__input`,t.type=`radio`,t.id=`option-${e}`,t.value=`value ${e}`,t.name=`example-segmented-control`,t},a=(e,t,n)=>{let i=document.createElement(`label`);return i.className=`segmented-control__label`,i.setAttribute(`for`,`option-${e}`),i.innerHTML+=`
`,t&&(i.innerHTML+=`    `,i.appendChild(r({name:`bolt`})),i.innerHTML+=`
`),i.innerHTML+=`    Option ${e} \n  `,n&&(i.innerHTML+=`  `,i.appendChild(r({name:`info`})),i.innerHTML+=`
  `),i},o=({size:e=`large`,fullWidth:t=!1,showPrefixIcon:n=!1,showSuffixIcon:r=!1,options:o=3})=>{let s=document.createElement(`div`);s.role=`radiogroup`,s.className=[`segmented-control`,e===`large`?``:`segmented-control--${e}`,t?`segmented-control--full-width`:``].filter(Boolean).join(` `);for(let e=1;e<=o;e++){let t=i(e),o=a(e,n,r);s.innerHTML+=`
  `,s.appendChild(t),s.innerHTML+=`
  `,s.appendChild(o)}return s.innerHTML+=`
`,s}})),c=t({Default:()=>u,FullWidth:()=>f,Size:()=>d,WithIcons:()=>p,__namedExportsOrder:()=>m,default:()=>l}),l,u,d,f,p,m,h=e((()=>{s(),l={title:`Components/Segmented Control`,render:({size:e,...t})=>o({size:e,...t}),argTypes:{size:{control:{type:`select`},options:[`small`,`medium`,`large`]},options:{control:`number`},fullWidth:{control:`boolean`},showPrefixIcon:{control:`boolean`,description:`This is not a class. It just provides an example of using icons within the options`},showSuffixIcon:{control:`boolean`,description:`This is not a class. It just provides an example of using icons within the options`}},parameters:{layout:`padded`}},u={args:{showPrefixIcon:!1,showSuffixIcon:!1,options:3,size:`medium`}},d={args:{label:`Small`,size:`small`}},f={args:{label:`Full Width`,fullWidth:!0}},p={args:{showSuffixIcon:!0}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    showPrefixIcon: false,
    showSuffixIcon: false,
    options: 3,
    size: 'medium'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Small',
    size: 'small'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Full Width',
    fullWidth: true
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    showSuffixIcon: true
  }
}`,...p.parameters?.docs?.source}}},m=[`Default`,`Size`,`FullWidth`,`WithIcons`]}));h();export{u as Default,f as FullWidth,d as Size,p as WithIcons,m as __namedExportsOrder,l as default,h as n,c as t};