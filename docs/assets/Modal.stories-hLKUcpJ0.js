const i=({header:a,body:r,footer:s="",inlineDemo:d=!1})=>{const n=document.createElement("div");n.classList=`modal-wrapper modal-wrapper--active ${d?"modal-wrapper--demo":""}`;const l=s!==""?s:`
      <button class="btn">Cancel</button>
      <button class='btn btn--primary'>Save</button>
  `;return n.innerHTML=`
  <div class="modal-wrapper__backdrop"></div>
  <div class="modal">
    <div class='modal__header'>
      ${a}
      <button class='btn btn--no-border btn--icon btn--pill'>
        <span class='material-symbols-outlined icon--x-large'>close</span>
      </button>
    </div>
    <div class='modal__body'>
      ${r}
    </div>
    <div class='modal__footer'>
      ${l}
    </div>
  </div>
`,n},c={title:"Components/Modal",render:({header:a,...r})=>i({header:a,...r}),argTypes:{header:{control:"text"},body:{control:"text"},footer:{control:"text"}}},e={args:{header:"Modal Title",body:"This is the contents of the modal!"}},o={args:{header:"Modal Title",body:"This a lot of content in the modal!".repeat(50),footer:"This a different footer"}},t={args:{header:"Modal Title",body:"This is the contents of the modal!",inlineDemo:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    header: 'Modal Title',
    body: 'This is the contents of the modal!'
  }
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    header: 'Modal Title',
    body: 'This a lot of content in the modal!'.repeat(50),
    footer: 'This a different footer'
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    header: 'Modal Title',
    body: 'This is the contents of the modal!',
    inlineDemo: true
  }
}`,...t.parameters?.docs?.source}}};const m=["Default","LotsOfContent","Inline"],p=Object.freeze(Object.defineProperty({__proto__:null,Default:e,Inline:t,LotsOfContent:o,__namedExportsOrder:m,default:c},Symbol.toStringTag,{value:"Module"}));export{t as I,p as M};
