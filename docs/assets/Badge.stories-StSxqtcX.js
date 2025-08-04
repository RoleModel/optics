import{c as m}from"./Icon-uqCTS4Mm.js";const F=({label:p,style:c="default",pill:g=!1,inButton:u="no",showPrefixIcon:q=!1,showSuffixIcon:A=!1})=>{const e=document.createElement("div");if(e.innerText=p,e.className=["badge",c!=="default"?`badge--${c}`:"",g?"badge--pill":""].filter(Boolean).join(" "),q&&e.prepend(m({name:"open_in_new"})),A&&e.appendChild(m({name:"add"})),u!=="no"){const d=document.createElement("button");return d.innerText="Notifications",d.className="btn btn--primary btn--with-badge",g||(e.className+=" badge--pill"),e.className+=` badge--notification-${u}`,d.appendChild(e),d}return e},G={title:"Components/Badge",render:({label:p,...c})=>F({label:p,...c}),argTypes:{label:{control:"text"},style:{control:{type:"select"},options:["default","primary","warning","danger","info","notice"]},pill:{control:"boolean"},inButton:{control:{type:"select"},options:["no","right","left"]},showPrefixIcon:{control:"boolean",description:"This is not a class. It just provides an example of using icons within a badge"},showSuffixIcon:{control:"boolean",description:"This is not a class. It just provides an example of using icons within a badge"}}},a={args:{label:"Default",style:"default"}},r={args:{label:"Primary",style:"primary"}},n={args:{label:"Warning",style:"warning"}},s={args:{label:"Danger",style:"danger"}},t={args:{label:"Info",style:"info"}},o={args:{label:"Notice",style:"notice"}},l={args:{label:"Pill",style:"default",pill:!0}},i={args:{label:"5",style:"danger",pill:!0,inButton:"right"}};var f,b,y;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: 'Default',
    style: 'default'
  }
}`,...(y=(b=a.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var h,N,S;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    label: 'Primary',
    style: 'primary'
  }
}`,...(S=(N=r.parameters)==null?void 0:N.docs)==null?void 0:S.source}}};var P,B,I;n.parameters={...n.parameters,docs:{...(P=n.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    label: 'Warning',
    style: 'warning'
  }
}`,...(I=(B=n.parameters)==null?void 0:B.docs)==null?void 0:I.source}}};var w,x,D;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    label: 'Danger',
    style: 'danger'
  }
}`,...(D=(x=s.parameters)==null?void 0:x.docs)==null?void 0:D.source}}};var _,T,j;t.parameters={...t.parameters,docs:{...(_=t.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    label: 'Info',
    style: 'info'
  }
}`,...(j=(T=t.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};var W,v,C;o.parameters={...o.parameters,docs:{...(W=o.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    label: 'Notice',
    style: 'notice'
  }
}`,...(C=(v=o.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};var E,O,$;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    label: 'Pill',
    style: 'default',
    pill: true
  }
}`,...($=(O=l.parameters)==null?void 0:O.docs)==null?void 0:$.source}}};var z,M,k;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    label: '5',
    style: 'danger',
    pill: true,
    inButton: 'right'
  }
}`,...(k=(M=i.parameters)==null?void 0:M.docs)==null?void 0:k.source}}};const H=["Default","Primary","Warning","Danger","Info","Notice","Pill","NotificationButton"],K=Object.freeze(Object.defineProperty({__proto__:null,Danger:s,Default:a,Info:t,Notice:o,NotificationButton:i,Pill:l,Primary:r,Warning:n,__namedExportsOrder:H,default:G},Symbol.toStringTag,{value:"Module"}));export{K as B,a as D,t as I,o as N,r as P,n as W,s as a,l as b,i as c};
