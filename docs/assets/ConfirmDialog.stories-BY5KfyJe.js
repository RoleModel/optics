import{a as e,i as t}from"./preload-helper-xPQekRTU.js";var n,r=t((()=>{n=({title:e,message:t,inlineDemo:n=!1})=>{let r=document.createElement(`div`);return r.classList=`confirm-dialog-wrapper confirm-dialog-wrapper--active ${n?`confirm-dialog-wrapper--demo`:``}`,r.innerHTML=`
  <div class="confirm-dialog-wrapper__backdrop"></div>
  <div class="confirm-dialog">
    <div class='confirm-dialog__header'>${e}</div>
    <div class='confirm-dialog__body'>
      ${t}
    </div>
    <div class='confirm-dialog__footer'>
      <button class="btn">Cancel</button>
      <button class='btn btn--destructive'>Yes, I'm Sure</button>
    </div>
  </div>
`,r}})),i=e({Default:()=>o,Inline:()=>s,__namedExportsOrder:()=>c,default:()=>a}),a,o,s,c,l=t((()=>{r(),a={title:`Components/Confirm Dialog`,render:({title:e,...t})=>n({title:e,...t}),argTypes:{title:{control:`text`},message:{control:`text`}}},o={args:{title:`Confirm Title`,message:`Are you sure you want to delete this?`}},s={args:{title:`Confirm Title`,message:`Are you sure you want to delete this?`,inlineDemo:!0}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Confirm Title',
    message: 'Are you sure you want to delete this?'
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Confirm Title',
    message: 'Are you sure you want to delete this?',
    inlineDemo: true
  }
}`,...s.parameters?.docs?.source}}},c=[`Default`,`Inline`]}));l();export{o as Default,s as Inline,c as __namedExportsOrder,a as default,l as n,i as t};