const fe=({margin:a="",marginY:I="",marginX:J="",marginTop:K="",marginBottom:Q="",marginLeft:U="",marginRight:V=""})=>{const e=document.createElement("div");e.style.display="flex",e.style.backgroundColor="var(--op-color-alerts-warning-base)";const r=document.createElement("div");return r.style.backgroundColor="var(--op-color-primary-base)",r.style.color="var(--op-color-primary-on-base)",r.style.width="var(--op-space-x-large)",r.style.minHeight="var(--op-space-x-large)",r.className=[a?`margin-${a}`:"",I?`margin-y-${I}`:"",J?`margin-x-${J}`:"",K?`margin-top-${K}`:"",Q?`margin-bottom-${Q}`:"",U?`margin-left-${U}`:"",V?`margin-right-${V}`:""].filter(Boolean).join(" "),a||(e.style.display="inline-flex"),e.appendChild(r),e},Ee={title:"Utilities/Margin",render:({margin:a,...I})=>fe({margin:a,...I}),argTypes:{margin:{control:{type:"select"},options:["","none","auto","xs","sm","md","lg","xl"]},marginY:{control:{type:"select"},options:["","none","xs","sm","md","lg","xl"]},marginX:{control:{type:"select"},options:["","none","xs","sm","md","lg","xl"]},marginTop:{control:{type:"select"},options:["","none","xs","sm","md","lg","xl"]},marginBottom:{control:{type:"select"},options:["","none","xs","sm","md","lg","xl"]},marginLeft:{control:{type:"select"},options:["","none","xs","sm","md","lg","xl"]},marginRight:{control:{type:"select"},options:["","none","xs","sm","md","lg","xl"]}}},s={args:{margin:"none"}},n={args:{margin:"auto"}},o={args:{margin:"xs"}},t={args:{margin:"sm"}},g={args:{margin:"md"}},m={args:{margin:"lg"}},i={args:{margin:"xl"}},c={args:{marginY:"none"}},p={args:{marginY:"xs"}},l={args:{marginY:"sm"}},d={args:{marginY:"md"}},u={args:{marginY:"lg"}},M={args:{marginY:"xl"}},x={args:{marginX:"none"}},S={args:{marginX:"xs"}},L={args:{marginX:"sm"}},f={args:{marginX:"md"}},E={args:{marginX:"lg"}},h={args:{marginX:"xl"}},B={args:{marginTop:"none"}},T={args:{marginTop:"xs"}},R={args:{marginTop:"sm"}},X={args:{marginTop:"md"}},Y={args:{marginTop:"lg"}},y={args:{marginTop:"xl"}},N={args:{marginBottom:"none"}},b={args:{marginBottom:"xs"}},v={args:{marginBottom:"sm"}},_={args:{marginBottom:"md"}},$={args:{marginBottom:"lg"}},j={args:{marginBottom:"xl"}},w={args:{marginLeft:"none"}},C={args:{marginLeft:"xs"}},O={args:{marginLeft:"sm"}},k={args:{marginLeft:"md"}},A={args:{marginLeft:"lg"}},z={args:{marginLeft:"xl"}},H={args:{marginRight:"none"}},P={args:{marginRight:"xs"}},q={args:{marginRight:"sm"}},D={args:{marginRight:"md"}},F={args:{marginRight:"lg"}},G={args:{marginRight:"xl"}};var W,Z,rr;s.parameters={...s.parameters,docs:{...(W=s.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    margin: 'none'
  }
}`,...(rr=(Z=s.parameters)==null?void 0:Z.docs)==null?void 0:rr.source}}};var ar,er,sr;n.parameters={...n.parameters,docs:{...(ar=n.parameters)==null?void 0:ar.docs,source:{originalSource:`{
  args: {
    margin: 'auto'
  }
}`,...(sr=(er=n.parameters)==null?void 0:er.docs)==null?void 0:sr.source}}};var nr,or,tr;o.parameters={...o.parameters,docs:{...(nr=o.parameters)==null?void 0:nr.docs,source:{originalSource:`{
  args: {
    margin: 'xs'
  }
}`,...(tr=(or=o.parameters)==null?void 0:or.docs)==null?void 0:tr.source}}};var gr,mr,ir;t.parameters={...t.parameters,docs:{...(gr=t.parameters)==null?void 0:gr.docs,source:{originalSource:`{
  args: {
    margin: 'sm'
  }
}`,...(ir=(mr=t.parameters)==null?void 0:mr.docs)==null?void 0:ir.source}}};var cr,pr,lr;g.parameters={...g.parameters,docs:{...(cr=g.parameters)==null?void 0:cr.docs,source:{originalSource:`{
  args: {
    margin: 'md'
  }
}`,...(lr=(pr=g.parameters)==null?void 0:pr.docs)==null?void 0:lr.source}}};var dr,ur,Mr;m.parameters={...m.parameters,docs:{...(dr=m.parameters)==null?void 0:dr.docs,source:{originalSource:`{
  args: {
    margin: 'lg'
  }
}`,...(Mr=(ur=m.parameters)==null?void 0:ur.docs)==null?void 0:Mr.source}}};var xr,Sr,Lr;i.parameters={...i.parameters,docs:{...(xr=i.parameters)==null?void 0:xr.docs,source:{originalSource:`{
  args: {
    margin: 'xl'
  }
}`,...(Lr=(Sr=i.parameters)==null?void 0:Sr.docs)==null?void 0:Lr.source}}};var fr,Er,hr;c.parameters={...c.parameters,docs:{...(fr=c.parameters)==null?void 0:fr.docs,source:{originalSource:`{
  args: {
    marginY: 'none'
  }
}`,...(hr=(Er=c.parameters)==null?void 0:Er.docs)==null?void 0:hr.source}}};var Br,Tr,Rr;p.parameters={...p.parameters,docs:{...(Br=p.parameters)==null?void 0:Br.docs,source:{originalSource:`{
  args: {
    marginY: 'xs'
  }
}`,...(Rr=(Tr=p.parameters)==null?void 0:Tr.docs)==null?void 0:Rr.source}}};var Xr,Yr,yr;l.parameters={...l.parameters,docs:{...(Xr=l.parameters)==null?void 0:Xr.docs,source:{originalSource:`{
  args: {
    marginY: 'sm'
  }
}`,...(yr=(Yr=l.parameters)==null?void 0:Yr.docs)==null?void 0:yr.source}}};var Nr,br,vr;d.parameters={...d.parameters,docs:{...(Nr=d.parameters)==null?void 0:Nr.docs,source:{originalSource:`{
  args: {
    marginY: 'md'
  }
}`,...(vr=(br=d.parameters)==null?void 0:br.docs)==null?void 0:vr.source}}};var _r,$r,jr;u.parameters={...u.parameters,docs:{...(_r=u.parameters)==null?void 0:_r.docs,source:{originalSource:`{
  args: {
    marginY: 'lg'
  }
}`,...(jr=($r=u.parameters)==null?void 0:$r.docs)==null?void 0:jr.source}}};var wr,Cr,Or;M.parameters={...M.parameters,docs:{...(wr=M.parameters)==null?void 0:wr.docs,source:{originalSource:`{
  args: {
    marginY: 'xl'
  }
}`,...(Or=(Cr=M.parameters)==null?void 0:Cr.docs)==null?void 0:Or.source}}};var kr,Ar,zr;x.parameters={...x.parameters,docs:{...(kr=x.parameters)==null?void 0:kr.docs,source:{originalSource:`{
  args: {
    marginX: 'none'
  }
}`,...(zr=(Ar=x.parameters)==null?void 0:Ar.docs)==null?void 0:zr.source}}};var Hr,Pr,qr;S.parameters={...S.parameters,docs:{...(Hr=S.parameters)==null?void 0:Hr.docs,source:{originalSource:`{
  args: {
    marginX: 'xs'
  }
}`,...(qr=(Pr=S.parameters)==null?void 0:Pr.docs)==null?void 0:qr.source}}};var Dr,Fr,Gr;L.parameters={...L.parameters,docs:{...(Dr=L.parameters)==null?void 0:Dr.docs,source:{originalSource:`{
  args: {
    marginX: 'sm'
  }
}`,...(Gr=(Fr=L.parameters)==null?void 0:Fr.docs)==null?void 0:Gr.source}}};var Ir,Jr,Kr;f.parameters={...f.parameters,docs:{...(Ir=f.parameters)==null?void 0:Ir.docs,source:{originalSource:`{
  args: {
    marginX: 'md'
  }
}`,...(Kr=(Jr=f.parameters)==null?void 0:Jr.docs)==null?void 0:Kr.source}}};var Qr,Ur,Vr;E.parameters={...E.parameters,docs:{...(Qr=E.parameters)==null?void 0:Qr.docs,source:{originalSource:`{
  args: {
    marginX: 'lg'
  }
}`,...(Vr=(Ur=E.parameters)==null?void 0:Ur.docs)==null?void 0:Vr.source}}};var Wr,Zr,ra;h.parameters={...h.parameters,docs:{...(Wr=h.parameters)==null?void 0:Wr.docs,source:{originalSource:`{
  args: {
    marginX: 'xl'
  }
}`,...(ra=(Zr=h.parameters)==null?void 0:Zr.docs)==null?void 0:ra.source}}};var aa,ea,sa;B.parameters={...B.parameters,docs:{...(aa=B.parameters)==null?void 0:aa.docs,source:{originalSource:`{
  args: {
    marginTop: 'none'
  }
}`,...(sa=(ea=B.parameters)==null?void 0:ea.docs)==null?void 0:sa.source}}};var na,oa,ta;T.parameters={...T.parameters,docs:{...(na=T.parameters)==null?void 0:na.docs,source:{originalSource:`{
  args: {
    marginTop: 'xs'
  }
}`,...(ta=(oa=T.parameters)==null?void 0:oa.docs)==null?void 0:ta.source}}};var ga,ma,ia;R.parameters={...R.parameters,docs:{...(ga=R.parameters)==null?void 0:ga.docs,source:{originalSource:`{
  args: {
    marginTop: 'sm'
  }
}`,...(ia=(ma=R.parameters)==null?void 0:ma.docs)==null?void 0:ia.source}}};var ca,pa,la;X.parameters={...X.parameters,docs:{...(ca=X.parameters)==null?void 0:ca.docs,source:{originalSource:`{
  args: {
    marginTop: 'md'
  }
}`,...(la=(pa=X.parameters)==null?void 0:pa.docs)==null?void 0:la.source}}};var da,ua,Ma;Y.parameters={...Y.parameters,docs:{...(da=Y.parameters)==null?void 0:da.docs,source:{originalSource:`{
  args: {
    marginTop: 'lg'
  }
}`,...(Ma=(ua=Y.parameters)==null?void 0:ua.docs)==null?void 0:Ma.source}}};var xa,Sa,La;y.parameters={...y.parameters,docs:{...(xa=y.parameters)==null?void 0:xa.docs,source:{originalSource:`{
  args: {
    marginTop: 'xl'
  }
}`,...(La=(Sa=y.parameters)==null?void 0:Sa.docs)==null?void 0:La.source}}};var fa,Ea,ha;N.parameters={...N.parameters,docs:{...(fa=N.parameters)==null?void 0:fa.docs,source:{originalSource:`{
  args: {
    marginBottom: 'none'
  }
}`,...(ha=(Ea=N.parameters)==null?void 0:Ea.docs)==null?void 0:ha.source}}};var Ba,Ta,Ra;b.parameters={...b.parameters,docs:{...(Ba=b.parameters)==null?void 0:Ba.docs,source:{originalSource:`{
  args: {
    marginBottom: 'xs'
  }
}`,...(Ra=(Ta=b.parameters)==null?void 0:Ta.docs)==null?void 0:Ra.source}}};var Xa,Ya,ya;v.parameters={...v.parameters,docs:{...(Xa=v.parameters)==null?void 0:Xa.docs,source:{originalSource:`{
  args: {
    marginBottom: 'sm'
  }
}`,...(ya=(Ya=v.parameters)==null?void 0:Ya.docs)==null?void 0:ya.source}}};var Na,ba,va;_.parameters={..._.parameters,docs:{...(Na=_.parameters)==null?void 0:Na.docs,source:{originalSource:`{
  args: {
    marginBottom: 'md'
  }
}`,...(va=(ba=_.parameters)==null?void 0:ba.docs)==null?void 0:va.source}}};var _a,$a,ja;$.parameters={...$.parameters,docs:{...(_a=$.parameters)==null?void 0:_a.docs,source:{originalSource:`{
  args: {
    marginBottom: 'lg'
  }
}`,...(ja=($a=$.parameters)==null?void 0:$a.docs)==null?void 0:ja.source}}};var wa,Ca,Oa;j.parameters={...j.parameters,docs:{...(wa=j.parameters)==null?void 0:wa.docs,source:{originalSource:`{
  args: {
    marginBottom: 'xl'
  }
}`,...(Oa=(Ca=j.parameters)==null?void 0:Ca.docs)==null?void 0:Oa.source}}};var ka,Aa,za;w.parameters={...w.parameters,docs:{...(ka=w.parameters)==null?void 0:ka.docs,source:{originalSource:`{
  args: {
    marginLeft: 'none'
  }
}`,...(za=(Aa=w.parameters)==null?void 0:Aa.docs)==null?void 0:za.source}}};var Ha,Pa,qa;C.parameters={...C.parameters,docs:{...(Ha=C.parameters)==null?void 0:Ha.docs,source:{originalSource:`{
  args: {
    marginLeft: 'xs'
  }
}`,...(qa=(Pa=C.parameters)==null?void 0:Pa.docs)==null?void 0:qa.source}}};var Da,Fa,Ga;O.parameters={...O.parameters,docs:{...(Da=O.parameters)==null?void 0:Da.docs,source:{originalSource:`{
  args: {
    marginLeft: 'sm'
  }
}`,...(Ga=(Fa=O.parameters)==null?void 0:Fa.docs)==null?void 0:Ga.source}}};var Ia,Ja,Ka;k.parameters={...k.parameters,docs:{...(Ia=k.parameters)==null?void 0:Ia.docs,source:{originalSource:`{
  args: {
    marginLeft: 'md'
  }
}`,...(Ka=(Ja=k.parameters)==null?void 0:Ja.docs)==null?void 0:Ka.source}}};var Qa,Ua,Va;A.parameters={...A.parameters,docs:{...(Qa=A.parameters)==null?void 0:Qa.docs,source:{originalSource:`{
  args: {
    marginLeft: 'lg'
  }
}`,...(Va=(Ua=A.parameters)==null?void 0:Ua.docs)==null?void 0:Va.source}}};var Wa,Za,re;z.parameters={...z.parameters,docs:{...(Wa=z.parameters)==null?void 0:Wa.docs,source:{originalSource:`{
  args: {
    marginLeft: 'xl'
  }
}`,...(re=(Za=z.parameters)==null?void 0:Za.docs)==null?void 0:re.source}}};var ae,ee,se;H.parameters={...H.parameters,docs:{...(ae=H.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    marginRight: 'none'
  }
}`,...(se=(ee=H.parameters)==null?void 0:ee.docs)==null?void 0:se.source}}};var ne,oe,te;P.parameters={...P.parameters,docs:{...(ne=P.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    marginRight: 'xs'
  }
}`,...(te=(oe=P.parameters)==null?void 0:oe.docs)==null?void 0:te.source}}};var ge,me,ie;q.parameters={...q.parameters,docs:{...(ge=q.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  args: {
    marginRight: 'sm'
  }
}`,...(ie=(me=q.parameters)==null?void 0:me.docs)==null?void 0:ie.source}}};var ce,pe,le;D.parameters={...D.parameters,docs:{...(ce=D.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    marginRight: 'md'
  }
}`,...(le=(pe=D.parameters)==null?void 0:pe.docs)==null?void 0:le.source}}};var de,ue,Me;F.parameters={...F.parameters,docs:{...(de=F.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    marginRight: 'lg'
  }
}`,...(Me=(ue=F.parameters)==null?void 0:ue.docs)==null?void 0:Me.source}}};var xe,Se,Le;G.parameters={...G.parameters,docs:{...(xe=G.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  args: {
    marginRight: 'xl'
  }
}`,...(Le=(Se=G.parameters)==null?void 0:Se.docs)==null?void 0:Le.source}}};const he=["MarginNone","MarginAuto","MarginExtraSmall","MarginSmall","MarginMedium","MarginLarge","MarginExtraLarge","MarginYNone","MarginYExtraSmall","MarginYSmall","MarginYMedium","MarginYLarge","MarginYExtraLarge","MarginXNone","MarginXExtraSmall","MarginXSmall","MarginXMedium","MarginXLarge","MarginXExtraLarge","MarginTopNone","MarginTopExtraSmall","MarginTopSmall","MarginTopMedium","MarginTopLarge","MarginTopExtraLarge","MarginBottomNone","MarginBottomExtraSmall","MarginBottomSmall","MarginBottomMedium","MarginBottomLarge","MarginBottomExtraLarge","MarginLeftNone","MarginLeftExtraSmall","MarginLeftSmall","MarginLeftMedium","MarginLeftLarge","MarginLeftExtraLarge","MarginRightNone","MarginRightExtraSmall","MarginRightSmall","MarginRightMedium","MarginRightLarge","MarginRightExtraLarge"],Be=Object.freeze(Object.defineProperty({__proto__:null,MarginAuto:n,MarginBottomExtraLarge:j,MarginBottomExtraSmall:b,MarginBottomLarge:$,MarginBottomMedium:_,MarginBottomNone:N,MarginBottomSmall:v,MarginExtraLarge:i,MarginExtraSmall:o,MarginLarge:m,MarginLeftExtraLarge:z,MarginLeftExtraSmall:C,MarginLeftLarge:A,MarginLeftMedium:k,MarginLeftNone:w,MarginLeftSmall:O,MarginMedium:g,MarginNone:s,MarginRightExtraLarge:G,MarginRightExtraSmall:P,MarginRightLarge:F,MarginRightMedium:D,MarginRightNone:H,MarginRightSmall:q,MarginSmall:t,MarginTopExtraLarge:y,MarginTopExtraSmall:T,MarginTopLarge:Y,MarginTopMedium:X,MarginTopNone:B,MarginTopSmall:R,MarginXExtraLarge:h,MarginXExtraSmall:S,MarginXLarge:E,MarginXMedium:f,MarginXNone:x,MarginXSmall:L,MarginYExtraLarge:M,MarginYExtraSmall:p,MarginYLarge:u,MarginYMedium:d,MarginYNone:c,MarginYSmall:l,__namedExportsOrder:he,default:Ee},Symbol.toStringTag,{value:"Module"}));export{b as A,v as B,_ as C,$ as D,j as E,w as F,C as G,O as H,k as I,A as J,z as K,H as L,Be as M,P as N,q as O,D as P,F as Q,G as R,n as a,s as b,o as c,t as d,g as e,m as f,i as g,c as h,p as i,l as j,d as k,u as l,M as m,x as n,S as o,L as p,f as q,E as r,h as s,B as t,T as u,R as v,X as w,Y as x,y,N as z};
