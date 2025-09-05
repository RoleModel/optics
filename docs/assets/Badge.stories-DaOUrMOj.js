import{c as m}from"./Icon-uqCTS4Mm.js";const y=({label:p,style:c="default",pill:g=!1,inButton:u="no",showPrefixIcon:f=!1,showSuffixIcon:b=!1})=>{const e=document.createElement("div");if(e.innerText=p,e.className=["badge",c!=="default"?`badge--${c}`:"",g?"badge--pill":""].filter(Boolean).join(" "),f&&e.prepend(m({name:"open_in_new"})),b&&e.appendChild(m({name:"add"})),u!=="no"){const d=document.createElement("button");return d.innerText="Notifications",d.className="btn btn--primary btn--with-badge",g||(e.className+=" badge--pill"),e.className+=` badge--notification-${u}`,d.appendChild(e),d}return e},h={title:"Components/Badge",render:({label:p,...c})=>y({label:p,...c}),argTypes:{label:{control:"text"},style:{control:{type:"select"},options:["default","primary","warning","danger","info","notice"]},pill:{control:"boolean"},inButton:{control:{type:"select"},options:["no","right","left"]},showPrefixIcon:{control:"boolean",description:"This is not a class. It just provides an example of using icons within a badge"},showSuffixIcon:{control:"boolean",description:"This is not a class. It just provides an example of using icons within a badge"}}},a={args:{label:"Default",style:"default"}},r={args:{label:"Primary",style:"primary"}},n={args:{label:"Warning",style:"warning"}},s={args:{label:"Danger",style:"danger"}},t={args:{label:"Info",style:"info"}},o={args:{label:"Notice",style:"notice"}},l={args:{label:"Pill",style:"default",pill:!0}},i={args:{label:"5",style:"danger",pill:!0,inButton:"right"}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Default',
    style: 'default'
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Primary',
    style: 'primary'
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Warning',
    style: 'warning'
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Danger',
    style: 'danger'
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Info',
    style: 'info'
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Notice',
    style: 'notice'
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Pill',
    style: 'default',
    pill: true
  }
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: '5',
    style: 'danger',
    pill: true,
    inButton: 'right'
  }
}`,...i.parameters?.docs?.source}}};const N=["Default","Primary","Warning","Danger","Info","Notice","Pill","NotificationButton"],P=Object.freeze(Object.defineProperty({__proto__:null,Danger:s,Default:a,Info:t,Notice:o,NotificationButton:i,Pill:l,Primary:r,Warning:n,__namedExportsOrder:N,default:h},Symbol.toStringTag,{value:"Module"}));export{P as B,a as D,t as I,o as N,r as P,n as W,s as a,l as b,i as c};
