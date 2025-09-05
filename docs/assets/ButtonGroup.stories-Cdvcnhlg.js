import{c as p}from"./Button-B21kpIpO.js";const b=t=>{const a=document.createElement("div");a.className="btn-group";const d=t.segmentedPreview?!0:t.active;return a.appendChild(p({...t,label:"Left"})),a.appendChild(p({...t,label:"Middle",active:d})),a.appendChild(p({...t,label:"Right"})),a},g=t=>{const a=document.createElement("div");return a.className="btn-group-toolbar gap-xs",a.innerHTML=`
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
  `,a},v={title:"Components/ButtonGroup",render:({toolbar:t=!1,...a})=>t?g({...a}):b({...a}),argTypes:{variant:{control:{type:"select"},options:["default","primary","destructive","warning"]},noBorder:{control:"boolean"},active:{control:"boolean"},pill:{control:"boolean"},size:{control:{type:"select"},options:["small","medium","large"]},segmentedPreview:{control:"boolean",description:"This is not a class. It just provides an example of creating a segmented control showing the currently active piece."}}},s={args:{variant:"default"}},r={args:{variant:"primary"}},e={args:{variant:"destructive"}},n={args:{variant:"warning"}},o={args:{variant:"destructive",active:!0}},l={args:{variant:"primary",noBorder:!0}},i={args:{variant:"primary",disabled:!0}},c={args:{variant:"default",pill:!0}},u={args:{variant:"primary",size:"small"}},m={args:{toolbar:!0}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'default'
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary'
  }
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'destructive'
  }
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'warning'
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'destructive',
    active: true
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    noBorder: true
  }
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    disabled: true
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    pill: true
  }
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'small'
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    toolbar: true
  }
}`,...m.parameters?.docs?.source}}};const y=["Default","Primary","Destructive","Warning","Active","NoBorder","Disabled","Pill","Size","Toolbar"],_=Object.freeze(Object.defineProperty({__proto__:null,Active:o,Default:s,Destructive:e,Disabled:i,NoBorder:l,Pill:c,Primary:r,Size:u,Toolbar:m,Warning:n,__namedExportsOrder:y,default:v},Symbol.toStringTag,{value:"Module"}));export{o as A,_ as B,s as D,l as N,r as P,u as S,m as T,n as W,e as a,i as b,c};
