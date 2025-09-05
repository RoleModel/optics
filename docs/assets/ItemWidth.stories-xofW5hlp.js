const m=({width:u="full"})=>{const r=document.createElement("div");return r.innerText=`${u} width`,r.className=`${u}-width card`,r},f={title:"Utilities/Item Width",render:({width:u,...r})=>m({width:u,...r}),argTypes:{width:{control:{type:"select"},options:["half","full","one-fifth","two-fifths","three-fifths","four-fifths","one-quarter","three-quarters","one-third","two-thirds"]}}},e={args:{width:"half"}},s={args:{width:"full"}},t={args:{width:"one-fifth"}},a={args:{width:"two-fifths"}},o={args:{width:"three-fifths"}},n={args:{width:"four-fifths"}},i={args:{width:"one-quarter"}},c={args:{width:"three-quarters"}},d={args:{width:"one-third"}},h={args:{width:"two-thirds"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    width: 'half'
  }
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    width: 'full'
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    width: 'one-fifth'
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    width: 'two-fifths'
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    width: 'three-fifths'
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    width: 'four-fifths'
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    width: 'one-quarter'
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    width: 'three-quarters'
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    width: 'one-third'
  }
}`,...d.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    width: 'two-thirds'
  }
}`,...h.parameters?.docs?.source}}};const p=["Half","Full","OneFifth","TwoFifths","ThreeFifths","FourFifths","OneQuarter","ThreeQuarters","OneThird","TwoThirds"],l=Object.freeze(Object.defineProperty({__proto__:null,FourFifths:n,Full:s,Half:e,OneFifth:t,OneQuarter:i,OneThird:d,ThreeFifths:o,ThreeQuarters:c,TwoFifths:a,TwoThirds:h,__namedExportsOrder:p,default:f},Symbol.toStringTag,{value:"Module"}));export{s as F,e as H,l as I,t as O,a as T,o as a,n as b,i as c,c as d,d as e,h as f};
