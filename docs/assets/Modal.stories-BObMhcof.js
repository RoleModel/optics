const m=({header:e,body:o,footer:t="",inlineDemo:l=!1,dialog:d=!1})=>{if(d)return b({header:e,body:o,footer:t});const i=document.createElement("div");i.classList=`modal-wrapper modal-wrapper--active ${l?"modal-wrapper--demo":""}`;const c=t!==""?t:`
      <button class="btn">Cancel</button>
      <button class='btn btn--primary'>Save</button>
  `;return i.innerHTML=`
  <div class="modal-wrapper__backdrop"></div>
  <div class="modal">
    <div class='modal__header'>
      ${e}
      <button class='btn btn--no-border btn--icon btn--pill'>
        <span class='material-symbols-outlined icon--x-large'>close</span>
      </button>
    </div>
    <div class='modal__body'>
      ${o}
    </div>
    <div class='modal__footer'>
      ${c}
    </div>
  </div>
`,i},b=({header:e,body:o,footer:t=""})=>{const l=document.createElement("div"),d=t!==""?t:`
        <form method="dialog">
          <button class="btn">Cancel</button>
        </form>
        <button class='btn btn--primary'>Save</button>
  `;return l.innerHTML=`
    <button class="btn" commandfor="my-dialog" command="show-modal">Show Dialog</button>
    <dialog id="my-dialog" class="modal" closedby="any">
      <div class='modal__header'>
        ${e}
        <form method="dialog">
          <button class="btn btn--no-border btn--icon btn--pill">
            <span class='material-symbols-outlined icon--x-large'>close</span>
          </button>
        </form>
      </div>
      <div class='modal__body'>
        ${o}
      </div>
      <div class='modal__footer'>
        ${d}
      </div>
    </dialog>
  `,l},u={title:"Components/Modal",render:({header:e,...o})=>m({header:e,...o}),argTypes:{header:{control:"text"},body:{control:"text"},footer:{control:"text"}}},a={args:{header:"Modal Title",body:"This is the contents of the modal!"}},n={args:{header:"Modal Title",body:"This a lot of content in the modal!".repeat(50),footer:"This a different footer"}},s={args:{header:"Modal Title",body:"This is the contents of the modal!",inlineDemo:!0}},r={args:{header:"Modal Title",body:"This is the contents of the modal!",dialog:!0}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    header: 'Modal Title',
    body: 'This is the contents of the modal!'
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    header: 'Modal Title',
    body: 'This a lot of content in the modal!'.repeat(50),
    footer: 'This a different footer'
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    header: 'Modal Title',
    body: 'This is the contents of the modal!',
    inlineDemo: true
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    header: 'Modal Title',
    body: 'This is the contents of the modal!',
    dialog: true
  }
}`,...r.parameters?.docs?.source}}};const p=["Default","LotsOfContent","Inline","Dialog"],h=Object.freeze(Object.defineProperty({__proto__:null,Default:a,Dialog:r,Inline:s,LotsOfContent:n,__namedExportsOrder:p,default:u},Symbol.toStringTag,{value:"Module"}));export{r as D,s as I,h as M};
