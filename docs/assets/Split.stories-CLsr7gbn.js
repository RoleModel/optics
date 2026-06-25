import{a as e,i as t}from"./preload-helper-xPQekRTU.js";import{i as n,n as r}from"./utils-CsCgyaPt.js";var i,a=t((()=>{n(),i=({split:e=!0,alignItems:t=``,gap:n=``})=>{let i=document.createElement(`div`);return i.style.height=`10rem`,i.className=[e?`op-split`:``,t?`items-${t}`:``,n?`gap-${n}`:``].filter(Boolean).join(` `),r(i,2),i}})),o=e({AlignBaseline:()=>m,AlignCenter:()=>f,AlignEnd:()=>p,AlignStart:()=>d,AlignStretch:()=>u,With:()=>c,Without:()=>l,__namedExportsOrder:()=>h,default:()=>s}),s,c,l,u,d,f,p,m,h,g=t((()=>{a(),s={title:`Utilities/Advanced/Split`,render:({split:e,...t})=>i({split:e,...t}),argTypes:{split:{control:`boolean`},alignItems:{control:{type:`select`},options:[`stretch`,`start`,`center`,`end`,`baseline`]},gap:{control:{type:`select`},options:[`none`,`xxs`,`xs`,`sm`,`md`,`lg`,`xl`]}},parameters:{layout:`fullscreen`}},c={args:{split:!0}},l={args:{split:!1}},u={args:{alignItems:`stretch`}},d={args:{alignItems:`start`}},f={args:{alignItems:`center`}},p={args:{alignItems:`end`}},m={args:{alignItems:`baseline`}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    split: true
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    split: false
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    alignItems: 'stretch'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    alignItems: 'start'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    alignItems: 'center'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    alignItems: 'end'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    alignItems: 'baseline'
  }
}`,...m.parameters?.docs?.source}}},h=[`With`,`Without`,`AlignStretch`,`AlignStart`,`AlignCenter`,`AlignEnd`,`AlignBaseline`]}));g();export{m as AlignBaseline,f as AlignCenter,p as AlignEnd,d as AlignStart,u as AlignStretch,c as With,l as Without,h as __namedExportsOrder,s as default,g as n,o as t};