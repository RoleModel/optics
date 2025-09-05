const a=({title:r,message:o,inlineDemo:n=!1})=>{const s=document.createElement("div");return s.classList=`confirm-dialog-wrapper confirm-dialog-wrapper--active ${n?"confirm-dialog-wrapper--demo":""}`,s.innerHTML=`
  <div class="confirm-dialog-wrapper__backdrop"></div>
  <div class="confirm-dialog">
    <div class='confirm-dialog__header'>${r}</div>
    <div class='confirm-dialog__body'>
      ${o}
    </div>
    <div class='confirm-dialog__footer'>
      <button class="btn">Cancel</button>
      <button class='btn btn--destructive'>Yes, I'm Sure</button>
    </div>
  </div>
`,s},i={title:"Components/Confirm Dialog",render:({title:r,...o})=>a({title:r,...o}),argTypes:{title:{control:"text"},message:{control:"text"}}},e={args:{title:"Confirm Title",message:"Are you sure you want to delete this?"}},t={args:{title:"Confirm Title",message:"Are you sure you want to delete this?",inlineDemo:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Confirm Title',
    message: 'Are you sure you want to delete this?'
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Confirm Title',
    message: 'Are you sure you want to delete this?',
    inlineDemo: true
  }
}`,...t.parameters?.docs?.source}}};const l=["Default","Inline"],c=Object.freeze(Object.defineProperty({__proto__:null,Default:e,Inline:t,__namedExportsOrder:l,default:i},Symbol.toStringTag,{value:"Module"}));export{c as C,t as I};
