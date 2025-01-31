const _=({header:a,body:r,footer:s="",inlineDemo:f=!1})=>{const n=document.createElement("div");n.classList=`modal-wrapper modal-wrapper--active ${f?"modal-wrapper--demo":""}`;const T=s!==""?s:`
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
      ${T}
    </div>
  </div>
`,n},v={title:"Popup Content Components/Modal",render:({header:a,...r})=>_({header:a,...r}),argTypes:{header:{control:"text"},body:{control:"text"},footer:{control:"text"}}},e={args:{header:"Modal Title",body:"This is the contents of the modal!"}},o={args:{header:"Modal Title",body:"This a lot of content in the modal!".repeat(50),footer:"This a different footer"}},t={args:{header:"Modal Title",body:"This is the contents of the modal!",inlineDemo:!0}};var d,l,i;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    header: 'Modal Title',
    body: 'This is the contents of the modal!'
  }
}`,...(i=(l=e.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var c,m,p;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    header: 'Modal Title',
    body: 'This a lot of content in the modal!'.repeat(50),
    footer: 'This a different footer'
  }
}`,...(p=(m=o.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var u,b,h;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    header: 'Modal Title',
    body: 'This is the contents of the modal!',
    inlineDemo: true
  }
}`,...(h=(b=t.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};const g=["Default","LotsOfContent","Inline"],y=Object.freeze(Object.defineProperty({__proto__:null,Default:e,Inline:t,LotsOfContent:o,__namedExportsOrder:g,default:v},Symbol.toStringTag,{value:"Module"}));export{t as I,y as M};
