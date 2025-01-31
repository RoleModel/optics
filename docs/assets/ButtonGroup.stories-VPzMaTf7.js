import{c as p}from"./Button-NTR86KUp.js";const F=t=>{const a=document.createElement("div");a.className="btn-group";const R=t.segmentedPreview?!0:t.active;return a.appendChild(p({...t,label:"Left"})),a.appendChild(p({...t,label:"Middle",active:R})),a.appendChild(p({...t,label:"Right"})),a},J=t=>{const a=document.createElement("div");return a.className="btn-group-toolbar gap-xs",a.innerHTML=`
    <div class="btn-group">
      <button class="btn">
        <span class="material-symbols-outlined">format_bold</span>
      </button>
      <button class="btn">
        <span class="material-symbols-outlined">format_italic</span>
      </button>
      <button class="btn">
        <span class="material-symbols-outlined">format_strikethrough</span>
      </button>
      <button class="btn">
        <span class="material-symbols-outlined">format_underlined</span>
      </button>
      <button class="btn">
        <span class="material-symbols-outlined">link</span>
      </button>
    </div>
    <div class="btn-group">
      <button class="btn">
        <span class="material-symbols-outlined">text_fields</span>
      </button>
      <button class="btn">
        <span class="material-symbols-outlined">format_quote</span>
      </button>
      <button class="btn">
        <span class="material-symbols-outlined">code</span>
      </button>
      <button class="btn">
        <span class="material-symbols-outlined">format_list_bulleted</span>
      </button>
      <button class="btn">
        <span class="material-symbols-outlined">format_list_numbered</span>
      </button>
      <button class="btn">
        <span class="material-symbols-outlined">format_align_left</span>
      </button>
      <button class="btn">
        <span class="material-symbols-outlined">format_align_center</span>
      </button>
      <button class="btn">
        <span class="material-symbols-outlined">format_align_right</span>
      </button>
    </div>
    <div class="btn-group">
      <button class="btn">
        <span class="material-symbols-outlined">attachment</span>
      </button>
    </div>
    <div class="btn-group">
      <button class="btn">
        <span class="material-symbols-outlined">undo</span>
      </button>
      <button class="btn">
        <span class="material-symbols-outlined">redo</span>
      </button>
    </div>
  `,a},K={title:"Navigation Components/ButtonGroup",render:({toolbar:t=!1,...a})=>t?J({...a}):F({...a}),argTypes:{variant:{control:{type:"select"},options:["default","primary","destructive","warning"]},noBorder:{control:"boolean"},active:{control:"boolean"},pill:{control:"boolean"},size:{control:{type:"select"},options:["small","medium","large"]},segmentedPreview:{control:"boolean",description:"This is not a class. It just provides an example of creating a segmented control showing the currently active piece."}}},s={args:{variant:"default"}},r={args:{variant:"primary"}},e={args:{variant:"destructive"}},n={args:{variant:"warning"}},o={args:{variant:"destructive",active:!0}},l={args:{variant:"primary",noBorder:!0}},i={args:{variant:"primary",disabled:!0}},c={args:{variant:"default",pill:!0}},u={args:{variant:"primary",size:"small"}},m={args:{toolbar:!0}};var d,b,g;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    variant: 'default'
  }
}`,...(g=(b=s.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var v,y,f;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    variant: 'primary'
  }
}`,...(f=(y=r.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var _,S,B;e.parameters={...e.parameters,docs:{...(_=e.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    variant: 'destructive'
  }
}`,...(B=(S=e.parameters)==null?void 0:S.docs)==null?void 0:B.source}}};var h,P,T;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    variant: 'warning'
  }
}`,...(T=(P=n.parameters)==null?void 0:P.docs)==null?void 0:T.source}}};var D,w,z;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    variant: 'destructive',
    active: true
  }
}`,...(z=(w=o.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};var N,x,G;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    noBorder: true
  }
}`,...(G=(x=l.parameters)==null?void 0:x.docs)==null?void 0:G.source}}};var C,j,A;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    disabled: true
  }
}`,...(A=(j=i.parameters)==null?void 0:j.docs)==null?void 0:A.source}}};var E,M,O;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    pill: true
  }
}`,...(O=(M=c.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};var W,k,L;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'small'
  }
}`,...(L=(k=u.parameters)==null?void 0:k.docs)==null?void 0:L.source}}};var q,H,I;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    toolbar: true
  }
}`,...(I=(H=m.parameters)==null?void 0:H.docs)==null?void 0:I.source}}};const Q=["Default","Primary","Destructive","Warning","Active","NoBorder","Disabled","Pill","Size","Toolbar"],V=Object.freeze(Object.defineProperty({__proto__:null,Active:o,Default:s,Destructive:e,Disabled:i,NoBorder:l,Pill:c,Primary:r,Size:u,Toolbar:m,Warning:n,__namedExportsOrder:Q,default:K},Symbol.toStringTag,{value:"Module"}));export{o as A,V as B,s as D,l as N,r as P,u as S,m as T,n as W,e as a,i as b,c};
