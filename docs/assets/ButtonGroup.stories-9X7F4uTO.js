import{c as m}from"./Button-CoyIamir.js";const F=r=>{const t=document.createElement("div");t.className="btn-group";const R=r.segmentedPreview?!0:r.active;return t.appendChild(m({...r,label:"Left"})),t.appendChild(m({...r,label:"Middle",active:R})),t.appendChild(m({...r,label:"Right"})),t},J=r=>{const t=document.createElement("div");return t.className="btn-group-toolbar gap-xs",t.innerHTML=`
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
  `,t},K={title:"Navigation Components/ButtonGroup",render:({toolbar:r=!1,...t})=>r?J({...t}):F({...t}),argTypes:{priority:{control:{type:"select"},options:["default","primary","destructive","warning"]},noBorder:{control:"boolean"},active:{control:"boolean"},pill:{control:"boolean"},size:{control:{type:"select"},options:["small","medium","large"]},segmentedPreview:{control:"boolean",description:"This is not a class. It just provides an example of creating a segmented control showing the currently active piece."}}},s={args:{priority:"default"}},a={args:{priority:"primary"}},e={args:{priority:"destructive"}},o={args:{priority:"warning"}},n={args:{priority:"destructive",active:!0}},i={args:{priority:"primary",noBorder:!0}},l={args:{priority:"primary",disabled:!0}},c={args:{priority:"default",pill:!0}},u={args:{priority:"primary",size:"small"}},p={args:{toolbar:!0}};var d,b,g;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    priority: 'default'
  }
}`,...(g=(b=s.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var y,v,f;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    priority: 'primary'
  }
}`,...(f=(v=a.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var _,S,B;e.parameters={...e.parameters,docs:{...(_=e.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    priority: 'destructive'
  }
}`,...(B=(S=e.parameters)==null?void 0:S.docs)==null?void 0:B.source}}};var h,P,T;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    priority: 'warning'
  }
}`,...(T=(P=o.parameters)==null?void 0:P.docs)==null?void 0:T.source}}};var D,w,z;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    priority: 'destructive',
    active: true
  }
}`,...(z=(w=n.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};var N,x,G;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    priority: 'primary',
    noBorder: true
  }
}`,...(G=(x=i.parameters)==null?void 0:x.docs)==null?void 0:G.source}}};var C,j,A;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    priority: 'primary',
    disabled: true
  }
}`,...(A=(j=l.parameters)==null?void 0:j.docs)==null?void 0:A.source}}};var E,M,O;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    priority: 'default',
    pill: true
  }
}`,...(O=(M=c.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};var W,k,L;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    priority: 'primary',
    size: 'small'
  }
}`,...(L=(k=u.parameters)==null?void 0:k.docs)==null?void 0:L.source}}};var q,H,I;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    toolbar: true
  }
}`,...(I=(H=p.parameters)==null?void 0:H.docs)==null?void 0:I.source}}};const Q=["Default","Primary","Destructive","Warning","Active","NoBorder","Disabled","Pill","Size","Toolbar"],V=Object.freeze(Object.defineProperty({__proto__:null,Active:n,Default:s,Destructive:e,Disabled:l,NoBorder:i,Pill:c,Primary:a,Size:u,Toolbar:p,Warning:o,__namedExportsOrder:Q,default:K},Symbol.toStringTag,{value:"Module"}));export{n as A,V as B,s as D,i as N,a as P,u as S,p as T,o as W,e as a,l as b,c};
