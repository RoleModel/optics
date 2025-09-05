const W=({margin:a="",marginY:I="",marginX:J="",marginTop:K="",marginBottom:Q="",marginLeft:U="",marginRight:V=""})=>{const e=document.createElement("div");e.style.display="flex",e.style.backgroundColor="var(--op-color-alerts-warning-base)";const r=document.createElement("div");return r.style.backgroundColor="var(--op-color-primary-base)",r.style.color="var(--op-color-primary-on-base)",r.style.width="var(--op-space-x-large)",r.style.minHeight="var(--op-space-x-large)",r.className=[a?`margin-${a}`:"",I?`margin-y-${I}`:"",J?`margin-x-${J}`:"",K?`margin-top-${K}`:"",Q?`margin-bottom-${Q}`:"",U?`margin-left-${U}`:"",V?`margin-right-${V}`:""].filter(Boolean).join(" "),a||(e.style.display="inline-flex"),e.appendChild(r),e},Z={title:"Utilities/Margin",render:({margin:a,...I})=>W({margin:a,...I}),argTypes:{margin:{control:{type:"select"},options:["","none","auto","xs","sm","md","lg","xl"]},marginY:{control:{type:"select"},options:["","none","xs","sm","md","lg","xl"]},marginX:{control:{type:"select"},options:["","none","xs","sm","md","lg","xl"]},marginTop:{control:{type:"select"},options:["","none","xs","sm","md","lg","xl"]},marginBottom:{control:{type:"select"},options:["","none","xs","sm","md","lg","xl"]},marginLeft:{control:{type:"select"},options:["","none","xs","sm","md","lg","xl"]},marginRight:{control:{type:"select"},options:["","none","xs","sm","md","lg","xl"]}}},s={args:{margin:"none"}},n={args:{margin:"auto"}},o={args:{margin:"xs"}},t={args:{margin:"sm"}},g={args:{margin:"md"}},m={args:{margin:"lg"}},i={args:{margin:"xl"}},c={args:{marginY:"none"}},p={args:{marginY:"xs"}},l={args:{marginY:"sm"}},d={args:{marginY:"md"}},u={args:{marginY:"lg"}},M={args:{marginY:"xl"}},x={args:{marginX:"none"}},S={args:{marginX:"xs"}},L={args:{marginX:"sm"}},f={args:{marginX:"md"}},E={args:{marginX:"lg"}},h={args:{marginX:"xl"}},B={args:{marginTop:"none"}},T={args:{marginTop:"xs"}},R={args:{marginTop:"sm"}},X={args:{marginTop:"md"}},Y={args:{marginTop:"lg"}},y={args:{marginTop:"xl"}},N={args:{marginBottom:"none"}},b={args:{marginBottom:"xs"}},v={args:{marginBottom:"sm"}},_={args:{marginBottom:"md"}},$={args:{marginBottom:"lg"}},j={args:{marginBottom:"xl"}},w={args:{marginLeft:"none"}},C={args:{marginLeft:"xs"}},O={args:{marginLeft:"sm"}},k={args:{marginLeft:"md"}},A={args:{marginLeft:"lg"}},z={args:{marginLeft:"xl"}},H={args:{marginRight:"none"}},P={args:{marginRight:"xs"}},q={args:{marginRight:"sm"}},D={args:{marginRight:"md"}},F={args:{marginRight:"lg"}},G={args:{marginRight:"xl"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    margin: 'none'
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    margin: 'auto'
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    margin: 'xs'
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    margin: 'sm'
  }
}`,...t.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    margin: 'md'
  }
}`,...g.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    margin: 'lg'
  }
}`,...m.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    margin: 'xl'
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    marginY: 'none'
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    marginY: 'xs'
  }
}`,...p.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    marginY: 'sm'
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    marginY: 'md'
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    marginY: 'lg'
  }
}`,...u.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    marginY: 'xl'
  }
}`,...M.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    marginX: 'none'
  }
}`,...x.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    marginX: 'xs'
  }
}`,...S.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    marginX: 'sm'
  }
}`,...L.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    marginX: 'md'
  }
}`,...f.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    marginX: 'lg'
  }
}`,...E.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    marginX: 'xl'
  }
}`,...h.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    marginTop: 'none'
  }
}`,...B.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    marginTop: 'xs'
  }
}`,...T.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    marginTop: 'sm'
  }
}`,...R.parameters?.docs?.source}}};X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    marginTop: 'md'
  }
}`,...X.parameters?.docs?.source}}};Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    marginTop: 'lg'
  }
}`,...Y.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    marginTop: 'xl'
  }
}`,...y.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    marginBottom: 'none'
  }
}`,...N.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    marginBottom: 'xs'
  }
}`,...b.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    marginBottom: 'sm'
  }
}`,...v.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    marginBottom: 'md'
  }
}`,..._.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  args: {
    marginBottom: 'lg'
  }
}`,...$.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    marginBottom: 'xl'
  }
}`,...j.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    marginLeft: 'none'
  }
}`,...w.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    marginLeft: 'xs'
  }
}`,...C.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    marginLeft: 'sm'
  }
}`,...O.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    marginLeft: 'md'
  }
}`,...k.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    marginLeft: 'lg'
  }
}`,...A.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    marginLeft: 'xl'
  }
}`,...z.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    marginRight: 'none'
  }
}`,...H.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    marginRight: 'xs'
  }
}`,...P.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    marginRight: 'sm'
  }
}`,...q.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    marginRight: 'md'
  }
}`,...D.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    marginRight: 'lg'
  }
}`,...F.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    marginRight: 'xl'
  }
}`,...G.parameters?.docs?.source}}};const rr=["MarginNone","MarginAuto","MarginExtraSmall","MarginSmall","MarginMedium","MarginLarge","MarginExtraLarge","MarginYNone","MarginYExtraSmall","MarginYSmall","MarginYMedium","MarginYLarge","MarginYExtraLarge","MarginXNone","MarginXExtraSmall","MarginXSmall","MarginXMedium","MarginXLarge","MarginXExtraLarge","MarginTopNone","MarginTopExtraSmall","MarginTopSmall","MarginTopMedium","MarginTopLarge","MarginTopExtraLarge","MarginBottomNone","MarginBottomExtraSmall","MarginBottomSmall","MarginBottomMedium","MarginBottomLarge","MarginBottomExtraLarge","MarginLeftNone","MarginLeftExtraSmall","MarginLeftSmall","MarginLeftMedium","MarginLeftLarge","MarginLeftExtraLarge","MarginRightNone","MarginRightExtraSmall","MarginRightSmall","MarginRightMedium","MarginRightLarge","MarginRightExtraLarge"],ar=Object.freeze(Object.defineProperty({__proto__:null,MarginAuto:n,MarginBottomExtraLarge:j,MarginBottomExtraSmall:b,MarginBottomLarge:$,MarginBottomMedium:_,MarginBottomNone:N,MarginBottomSmall:v,MarginExtraLarge:i,MarginExtraSmall:o,MarginLarge:m,MarginLeftExtraLarge:z,MarginLeftExtraSmall:C,MarginLeftLarge:A,MarginLeftMedium:k,MarginLeftNone:w,MarginLeftSmall:O,MarginMedium:g,MarginNone:s,MarginRightExtraLarge:G,MarginRightExtraSmall:P,MarginRightLarge:F,MarginRightMedium:D,MarginRightNone:H,MarginRightSmall:q,MarginSmall:t,MarginTopExtraLarge:y,MarginTopExtraSmall:T,MarginTopLarge:Y,MarginTopMedium:X,MarginTopNone:B,MarginTopSmall:R,MarginXExtraLarge:h,MarginXExtraSmall:S,MarginXLarge:E,MarginXMedium:f,MarginXNone:x,MarginXSmall:L,MarginYExtraLarge:M,MarginYExtraSmall:p,MarginYLarge:u,MarginYMedium:d,MarginYNone:c,MarginYSmall:l,__namedExportsOrder:rr,default:Z},Symbol.toStringTag,{value:"Module"}));export{b as A,v as B,_ as C,$ as D,j as E,w as F,C as G,O as H,k as I,A as J,z as K,H as L,ar as M,P as N,q as O,D as P,F as Q,G as R,n as a,s as b,o as c,t as d,g as e,m as f,i as g,c as h,p as i,l as j,d as k,u as l,M as m,x as n,S as o,L as p,f as q,E as r,h as s,B as t,T as u,R as v,X as w,Y as x,y,N as z};
