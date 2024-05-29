import{b as Ke}from"./utils-ChVC8LB4.js";const Le=({flex:F=!0,flexDirection:j="",flexWrap:I="",flexGrowOne:Ue=!1,justifyContent:W="",alignItems:J="",alignSelf:E=""})=>{const e=document.createElement("div");return e.style.height="10rem",e.className=[F?"flex gap-xxs":"",j?`flex-${j}`:"",I?`flex-${I}`:"",W?`justify-${W}`:"",J?`items-${J}`:""].filter(Boolean).join(" "),Ke(e,5),I&&Array.from(e.children).forEach(He=>{He.style.width="30rem"}),Ue&&(e.children[0].className="flex-grow-1"),E&&(e.children[0].className=`self-${E}`),e},Qe={title:"Utilities/Flex",render:({flex:F,...j})=>Le({flex:F,...j}),argTypes:{flex:{control:"boolean"},flexDirection:{control:{type:"select"},options:["row","col"]},flexWrap:{control:{type:"select"},options:["no-wrap","wrap"]},flexGrowOne:{control:"boolean"},justifyContent:{control:{type:"select"},options:["start","center","end","between","around"]},alignItems:{control:{type:"select"},options:["stretch","start","center","end","baseline"]},alignSelf:{control:{type:"select"},options:["auto","stretch","start","center","end","baseline"]}},parameters:{layout:"fullscreen"}},r={args:{flex:!0}},s={args:{flex:!1}},a={args:{flexDirection:"row"}},t={args:{flexDirection:"col"}},n={args:{flexWrap:"wrap"}},o={args:{flexWrap:"no-wrap"}},c={args:{flexGrowOne:!0}},l={args:{justifyContent:"start"}},i={args:{justifyContent:"center"}},p={args:{justifyContent:"end"}},g={args:{justifyContent:"between"}},m={args:{justifyContent:"around"}},u={args:{alignItems:"stretch"}},d={args:{alignItems:"start"}},f={args:{alignItems:"center"}},S={args:{alignItems:"end"}},x={args:{alignItems:"baseline"}},y={args:{alignSelf:"auto"}},A={args:{alignItems:"center",alignSelf:"stretch"}},w={args:{alignSelf:"start"}},h={args:{alignSelf:"center"}},C={args:{alignSelf:"end"}},b={args:{alignSelf:"baseline"}};var O,B,_;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    flex: true
  }
}`,...(_=(B=r.parameters)==null?void 0:B.docs)==null?void 0:_.source}}};var G,N,$;s.parameters={...s.parameters,docs:{...(G=s.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    flex: false
  }
}`,...($=(N=s.parameters)==null?void 0:N.docs)==null?void 0:$.source}}};var D,v,R;a.parameters={...a.parameters,docs:{...(D=a.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    flexDirection: 'row'
  }
}`,...(R=(v=a.parameters)==null?void 0:v.docs)==null?void 0:R.source}}};var T,k,q;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    flexDirection: 'col'
  }
}`,...(q=(k=t.parameters)==null?void 0:k.docs)==null?void 0:q.source}}};var z,M,P;n.parameters={...n.parameters,docs:{...(z=n.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    flexWrap: 'wrap'
  }
}`,...(P=(M=n.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};var U,H,K;o.parameters={...o.parameters,docs:{...(U=o.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    flexWrap: 'no-wrap'
  }
}`,...(K=(H=o.parameters)==null?void 0:H.docs)==null?void 0:K.source}}};var L,Q,V;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    flexGrowOne: true
  }
}`,...(V=(Q=c.parameters)==null?void 0:Q.docs)==null?void 0:V.source}}};var X,Y,Z;l.parameters={...l.parameters,docs:{...(X=l.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    justifyContent: 'start'
  }
}`,...(Z=(Y=l.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,re,se;i.parameters={...i.parameters,docs:{...(ee=i.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    justifyContent: 'center'
  }
}`,...(se=(re=i.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var ae,te,ne;p.parameters={...p.parameters,docs:{...(ae=p.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    justifyContent: 'end'
  }
}`,...(ne=(te=p.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var oe,ce,le;g.parameters={...g.parameters,docs:{...(oe=g.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    justifyContent: 'between'
  }
}`,...(le=(ce=g.parameters)==null?void 0:ce.docs)==null?void 0:le.source}}};var ie,pe,ge;m.parameters={...m.parameters,docs:{...(ie=m.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    justifyContent: 'around'
  }
}`,...(ge=(pe=m.parameters)==null?void 0:pe.docs)==null?void 0:ge.source}}};var me,ue,de;u.parameters={...u.parameters,docs:{...(me=u.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    alignItems: 'stretch'
  }
}`,...(de=(ue=u.parameters)==null?void 0:ue.docs)==null?void 0:de.source}}};var fe,Se,xe;d.parameters={...d.parameters,docs:{...(fe=d.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  args: {
    alignItems: 'start'
  }
}`,...(xe=(Se=d.parameters)==null?void 0:Se.docs)==null?void 0:xe.source}}};var ye,Ae,we;f.parameters={...f.parameters,docs:{...(ye=f.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  args: {
    alignItems: 'center'
  }
}`,...(we=(Ae=f.parameters)==null?void 0:Ae.docs)==null?void 0:we.source}}};var he,Ce,be;S.parameters={...S.parameters,docs:{...(he=S.parameters)==null?void 0:he.docs,source:{originalSource:`{
  args: {
    alignItems: 'end'
  }
}`,...(be=(Ce=S.parameters)==null?void 0:Ce.docs)==null?void 0:be.source}}};var je,Fe,Ie;x.parameters={...x.parameters,docs:{...(je=x.parameters)==null?void 0:je.docs,source:{originalSource:`{
  args: {
    alignItems: 'baseline'
  }
}`,...(Ie=(Fe=x.parameters)==null?void 0:Fe.docs)==null?void 0:Ie.source}}};var We,Je,Ee;y.parameters={...y.parameters,docs:{...(We=y.parameters)==null?void 0:We.docs,source:{originalSource:`{
  args: {
    alignSelf: 'auto'
  }
}`,...(Ee=(Je=y.parameters)==null?void 0:Je.docs)==null?void 0:Ee.source}}};var Oe,Be,_e;A.parameters={...A.parameters,docs:{...(Oe=A.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
  args: {
    alignItems: 'center',
    alignSelf: 'stretch'
  }
}`,...(_e=(Be=A.parameters)==null?void 0:Be.docs)==null?void 0:_e.source}}};var Ge,Ne,$e;w.parameters={...w.parameters,docs:{...(Ge=w.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
  args: {
    alignSelf: 'start'
  }
}`,...($e=(Ne=w.parameters)==null?void 0:Ne.docs)==null?void 0:$e.source}}};var De,ve,Re;h.parameters={...h.parameters,docs:{...(De=h.parameters)==null?void 0:De.docs,source:{originalSource:`{
  args: {
    alignSelf: 'center'
  }
}`,...(Re=(ve=h.parameters)==null?void 0:ve.docs)==null?void 0:Re.source}}};var Te,ke,qe;C.parameters={...C.parameters,docs:{...(Te=C.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  args: {
    alignSelf: 'end'
  }
}`,...(qe=(ke=C.parameters)==null?void 0:ke.docs)==null?void 0:qe.source}}};var ze,Me,Pe;b.parameters={...b.parameters,docs:{...(ze=b.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  args: {
    alignSelf: 'baseline'
  }
}`,...(Pe=(Me=b.parameters)==null?void 0:Me.docs)==null?void 0:Pe.source}}};const Ve=["With","Without","FlexRow","FlexCol","FlexWrap","FlexNoWrap","FlexGrowOne","JustifyStart","JustifyCenter","JustifyEnd","JustifyBetween","JustifyAround","AlignStretch","AlignStart","AlignCenter","AlignEnd","AlignBaseline","AlignSelfAuto","AlignSelfStretch","AlignSelfStart","AlignSelfCenter","AlignSelfEnd","AlignSelfBaseline"],Ye=Object.freeze(Object.defineProperty({__proto__:null,AlignBaseline:x,AlignCenter:f,AlignEnd:S,AlignSelfAuto:y,AlignSelfBaseline:b,AlignSelfCenter:h,AlignSelfEnd:C,AlignSelfStart:w,AlignSelfStretch:A,AlignStart:d,AlignStretch:u,FlexCol:t,FlexGrowOne:c,FlexNoWrap:o,FlexRow:a,FlexWrap:n,JustifyAround:m,JustifyBetween:g,JustifyCenter:i,JustifyEnd:p,JustifyStart:l,With:r,Without:s,__namedExportsOrder:Ve,default:Qe},Symbol.toStringTag,{value:"Module"}));export{u as A,Ye as F,l as J,r as W,s as a,a as b,t as c,n as d,o as e,c as f,i as g,p as h,g as i,m as j,d as k,f as l,S as m,x as n,y as o,A as p,w as q,h as r,C as s,b as t};
