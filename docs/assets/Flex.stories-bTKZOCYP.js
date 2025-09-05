import{b as _}from"./utils-ChVC8LB4.js";const G=({flex:F=!0,flexDirection:j="",flexWrap:I="",flexGrowOne:O=!1,justifyContent:W="",alignItems:J="",alignSelf:E=""})=>{const e=document.createElement("div");return e.style.height="10rem",e.className=[F?"flex gap-xxs":"",j?`flex-${j}`:"",I?`flex-${I}`:"",W?`justify-${W}`:"",J?`items-${J}`:""].filter(Boolean).join(" "),_(e,5),I&&Array.from(e.children).forEach(B=>{B.style.width="30rem"}),O&&(e.children[0].className="flex-grow-1"),E&&(e.children[0].className=`self-${E}`),e},N={title:"Utilities/Flex",render:({flex:F,...j})=>G({flex:F,...j}),argTypes:{flex:{control:"boolean"},flexDirection:{control:{type:"select"},options:["row","col"]},flexWrap:{control:{type:"select"},options:["no-wrap","wrap"]},flexGrowOne:{control:"boolean"},justifyContent:{control:{type:"select"},options:["start","center","end","between","around"]},alignItems:{control:{type:"select"},options:["stretch","start","center","end","baseline"]},alignSelf:{control:{type:"select"},options:["auto","stretch","start","center","end","baseline"]}},parameters:{layout:"fullscreen"}},r={args:{flex:!0}},s={args:{flex:!1}},a={args:{flexDirection:"row"}},t={args:{flexDirection:"col"}},n={args:{flexWrap:"wrap"}},o={args:{flexWrap:"no-wrap"}},c={args:{flexGrowOne:!0}},l={args:{justifyContent:"start"}},i={args:{justifyContent:"center"}},p={args:{justifyContent:"end"}},g={args:{justifyContent:"between"}},m={args:{justifyContent:"around"}},u={args:{alignItems:"stretch"}},d={args:{alignItems:"start"}},f={args:{alignItems:"center"}},S={args:{alignItems:"end"}},x={args:{alignItems:"baseline"}},y={args:{alignSelf:"auto"}},A={args:{alignItems:"center",alignSelf:"stretch"}},w={args:{alignSelf:"start"}},h={args:{alignSelf:"center"}},C={args:{alignSelf:"end"}},b={args:{alignSelf:"baseline"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    flex: true
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    flex: false
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    flexDirection: 'row'
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    flexDirection: 'col'
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    flexWrap: 'wrap'
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    flexWrap: 'no-wrap'
  }
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    flexGrowOne: true
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    justifyContent: 'start'
  }
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    justifyContent: 'center'
  }
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    justifyContent: 'end'
  }
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    justifyContent: 'between'
  }
}`,...g.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    justifyContent: 'around'
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    alignItems: 'stretch'
  }
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    alignItems: 'start'
  }
}`,...d.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    alignItems: 'center'
  }
}`,...f.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    alignItems: 'end'
  }
}`,...S.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    alignItems: 'baseline'
  }
}`,...x.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    alignSelf: 'auto'
  }
}`,...y.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    alignItems: 'center',
    alignSelf: 'stretch'
  }
}`,...A.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    alignSelf: 'start'
  }
}`,...w.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    alignSelf: 'center'
  }
}`,...h.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    alignSelf: 'end'
  }
}`,...C.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    alignSelf: 'baseline'
  }
}`,...b.parameters?.docs?.source}}};const $=["With","Without","FlexRow","FlexCol","FlexWrap","FlexNoWrap","FlexGrowOne","JustifyStart","JustifyCenter","JustifyEnd","JustifyBetween","JustifyAround","AlignStretch","AlignStart","AlignCenter","AlignEnd","AlignBaseline","AlignSelfAuto","AlignSelfStretch","AlignSelfStart","AlignSelfCenter","AlignSelfEnd","AlignSelfBaseline"],v=Object.freeze(Object.defineProperty({__proto__:null,AlignBaseline:x,AlignCenter:f,AlignEnd:S,AlignSelfAuto:y,AlignSelfBaseline:b,AlignSelfCenter:h,AlignSelfEnd:C,AlignSelfStart:w,AlignSelfStretch:A,AlignStart:d,AlignStretch:u,FlexCol:t,FlexGrowOne:c,FlexNoWrap:o,FlexRow:a,FlexWrap:n,JustifyAround:m,JustifyBetween:g,JustifyCenter:i,JustifyEnd:p,JustifyStart:l,With:r,Without:s,__namedExportsOrder:$,default:N},Symbol.toStringTag,{value:"Module"}));export{u as A,v as F,l as J,r as W,s as a,a as b,t as c,n as d,o as e,c as f,i as g,p as h,g as i,m as j,d as k,f as l,S as m,x as n,y as o,A as p,w as q,h as r,C as s,b as t};
