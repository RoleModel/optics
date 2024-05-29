const u=({title:o,message:r,inlineDemo:m=!1})=>{const s=document.createElement("div");return s.classList=`confirm-dialog-wrapper confirm-dialog-wrapper--active ${m?"confirm-dialog-wrapper--demo":""}`,s.innerHTML=`
  <div class="confirm-dialog-wrapper__backdrop"></div>
  <div class="confirm-dialog">
    <div class='confirm-dialog__header'>${o}</div>
    <div class='confirm-dialog__body'>
      ${r}
    </div>
    <div class='confirm-dialog__footer'>
      <button class="btn">Cancel</button>
      <button class='btn-destructive'>Yes, I'm Sure</button>
    </div>
  </div>
`,s},g={title:"Popup Content Components/Confirm Dialog",render:({title:o,...r})=>u({title:o,...r}),argTypes:{title:{control:"text"},message:{control:"text"}}},e={args:{title:"Confirm Title",message:"Are you sure you want to delete this?"}},t={args:{title:"Confirm Title",message:"Are you sure you want to delete this?",inlineDemo:!0}};var n,a,i;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    title: 'Confirm Title',
    message: 'Are you sure you want to delete this?'
  }
}`,...(i=(a=e.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};var l,c,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    title: 'Confirm Title',
    message: 'Are you sure you want to delete this?',
    inlineDemo: true
  }
}`,...(d=(c=t.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const p=["Default","Inline"],f=Object.freeze(Object.defineProperty({__proto__:null,Default:e,Inline:t,__namedExportsOrder:p,default:g},Symbol.toStringTag,{value:"Module"}));export{f as C,t as I};
