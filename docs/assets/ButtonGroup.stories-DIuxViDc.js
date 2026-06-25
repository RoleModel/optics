import{a as e,i as t}from"./preload-helper-xPQekRTU.js";import{n,t as r}from"./Button-BUsOhhs6.js";var i,a,o=t((()=>{n(),i=e=>{let t=document.createElement(`div`);t.className=`btn-group`;let n=e.segmentedPreview?!0:e.active;return t.appendChild(r({...e,label:`Left`})),t.appendChild(r({...e,label:`Middle`,active:n})),t.appendChild(r({...e,label:`Right`})),t},a=e=>{let t=document.createElement(`div`);return t.className=`btn-group-toolbar gap-xs`,t.innerHTML=`
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
  `,t}})),s=e({Active:()=>p,Default:()=>l,Destructive:()=>d,Disabled:()=>h,NoBorder:()=>m,Pill:()=>g,Primary:()=>u,Size:()=>_,Toolbar:()=>v,Warning:()=>f,__namedExportsOrder:()=>y,default:()=>c}),c,l,u,d,f,p,m,h,g,_,v,y,b=t((()=>{o(),c={title:`Components/ButtonGroup`,render:({toolbar:e=!1,...t})=>e?a({...t}):i({...t}),argTypes:{variant:{control:{type:`select`},options:[`default`,`primary`,`destructive`,`warning`]},noBorder:{control:`boolean`},active:{control:`boolean`},pill:{control:`boolean`},size:{control:{type:`select`},options:[`small`,`medium`,`large`]},segmentedPreview:{control:`boolean`,description:`This is not a class. It just provides an example of creating a segmented control showing the currently active piece.`}}},l={args:{variant:`default`}},u={args:{variant:`primary`}},d={args:{variant:`destructive`}},f={args:{variant:`warning`}},p={args:{variant:`destructive`,active:!0}},m={args:{variant:`primary`,noBorder:!0}},h={args:{variant:`primary`,disabled:!0}},g={args:{variant:`default`,pill:!0}},_={args:{variant:`primary`,size:`small`}},v={args:{toolbar:!0}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'default'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'destructive'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'warning'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'destructive',
    active: true
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    noBorder: true
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    disabled: true
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    pill: true
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'small'
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    toolbar: true
  }
}`,...v.parameters?.docs?.source}}},y=[`Default`,`Primary`,`Destructive`,`Warning`,`Active`,`NoBorder`,`Disabled`,`Pill`,`Size`,`Toolbar`]}));b();export{p as Active,l as Default,d as Destructive,h as Disabled,m as NoBorder,g as Pill,u as Primary,_ as Size,v as Toolbar,f as Warning,y as __namedExportsOrder,c as default,b as n,s as t};