import{a as e,i as t}from"./preload-helper-xPQekRTU.js";import{i as n,n as r}from"./utils-CsCgyaPt.js";var i,a=t((()=>{n(),i=({flex:e=!0,flexDirection:t=``,flexWrap:n=``,flexGrowOne:i=!1,justifyContent:a=``,alignItems:o=``,alignSelf:s=``})=>{let c=document.createElement(`div`);return c.style.height=`10rem`,c.className=[e?`flex gap-xxs`:``,t?`flex-${t}`:``,n?`flex-${n}`:``,a?`justify-${a}`:``,o?`items-${o}`:``].filter(Boolean).join(` `),r(c,5),n&&Array.from(c.children).forEach(e=>{e.style.width=`30rem`}),i&&(c.children[0].className=`flex-grow-1`),s&&(c.children[0].className=`self-${s}`),c}})),o=e({AlignBaseline:()=>w,AlignCenter:()=>S,AlignEnd:()=>C,AlignSelfAuto:()=>T,AlignSelfBaseline:()=>A,AlignSelfCenter:()=>O,AlignSelfEnd:()=>k,AlignSelfStart:()=>D,AlignSelfStretch:()=>E,AlignStart:()=>x,AlignStretch:()=>b,FlexCol:()=>d,FlexGrowOne:()=>m,FlexNoWrap:()=>p,FlexRow:()=>u,FlexWrap:()=>f,JustifyAround:()=>y,JustifyBetween:()=>v,JustifyCenter:()=>g,JustifyEnd:()=>_,JustifyStart:()=>h,With:()=>c,Without:()=>l,__namedExportsOrder:()=>j,default:()=>s}),s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M=t((()=>{a(),s={title:`Utilities/Flex`,render:({flex:e,...t})=>i({flex:e,...t}),argTypes:{flex:{control:`boolean`},flexDirection:{control:{type:`select`},options:[`row`,`col`]},flexWrap:{control:{type:`select`},options:[`no-wrap`,`wrap`]},flexGrowOne:{control:`boolean`},justifyContent:{control:{type:`select`},options:[`start`,`center`,`end`,`between`,`around`]},alignItems:{control:{type:`select`},options:[`stretch`,`start`,`center`,`end`,`baseline`]},alignSelf:{control:{type:`select`},options:[`auto`,`stretch`,`start`,`center`,`end`,`baseline`]}},parameters:{layout:`fullscreen`}},c={args:{flex:!0}},l={args:{flex:!1}},u={args:{flexDirection:`row`}},d={args:{flexDirection:`col`}},f={args:{flexWrap:`wrap`}},p={args:{flexWrap:`no-wrap`}},m={args:{flexGrowOne:!0}},h={args:{justifyContent:`start`}},g={args:{justifyContent:`center`}},_={args:{justifyContent:`end`}},v={args:{justifyContent:`between`}},y={args:{justifyContent:`around`}},b={args:{alignItems:`stretch`}},x={args:{alignItems:`start`}},S={args:{alignItems:`center`}},C={args:{alignItems:`end`}},w={args:{alignItems:`baseline`}},T={args:{alignSelf:`auto`}},E={args:{alignItems:`center`,alignSelf:`stretch`}},D={args:{alignSelf:`start`}},O={args:{alignSelf:`center`}},k={args:{alignSelf:`end`}},A={args:{alignSelf:`baseline`}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    flex: true
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    flex: false
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    flexDirection: 'row'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    flexDirection: 'col'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    flexWrap: 'wrap'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    flexWrap: 'no-wrap'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    flexGrowOne: true
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    justifyContent: 'start'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    justifyContent: 'center'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    justifyContent: 'end'
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    justifyContent: 'between'
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    justifyContent: 'around'
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    alignItems: 'stretch'
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    alignItems: 'start'
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    alignItems: 'center'
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    alignItems: 'end'
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    alignItems: 'baseline'
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    alignSelf: 'auto'
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    alignItems: 'center',
    alignSelf: 'stretch'
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    alignSelf: 'start'
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    alignSelf: 'center'
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    alignSelf: 'end'
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    alignSelf: 'baseline'
  }
}`,...A.parameters?.docs?.source}}},j=[`With`,`Without`,`FlexRow`,`FlexCol`,`FlexWrap`,`FlexNoWrap`,`FlexGrowOne`,`JustifyStart`,`JustifyCenter`,`JustifyEnd`,`JustifyBetween`,`JustifyAround`,`AlignStretch`,`AlignStart`,`AlignCenter`,`AlignEnd`,`AlignBaseline`,`AlignSelfAuto`,`AlignSelfStretch`,`AlignSelfStart`,`AlignSelfCenter`,`AlignSelfEnd`,`AlignSelfBaseline`]}));M();export{w as AlignBaseline,S as AlignCenter,C as AlignEnd,T as AlignSelfAuto,A as AlignSelfBaseline,O as AlignSelfCenter,k as AlignSelfEnd,D as AlignSelfStart,E as AlignSelfStretch,x as AlignStart,b as AlignStretch,d as FlexCol,m as FlexGrowOne,p as FlexNoWrap,u as FlexRow,f as FlexWrap,y as JustifyAround,v as JustifyBetween,g as JustifyCenter,_ as JustifyEnd,h as JustifyStart,c as With,l as Without,j as __namedExportsOrder,s as default,M as n,o as t};