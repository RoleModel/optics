import{n as e,r as t}from"./rolldown-runtime-DaJ6WEGw.js";var n,r,i=e((()=>{n=({header:e,body:t,footer:n=``,inlineDemo:i=!1,dialog:a=!1})=>{if(a)return r({header:e,body:t,footer:n});let o=document.createElement(`div`);return o.classList=`modal-wrapper modal-wrapper--active ${i?`modal-wrapper--demo`:``}`,o.innerHTML=`
  <div class="modal-wrapper__backdrop"></div>
  <div class="modal">
    <div class='modal__header'>
      ${e}
      <button class='btn btn--no-border btn--icon btn--pill'>
        <span class='material-symbols-outlined icon--x-large'>close</span>
      </button>
    </div>
    <div class='modal__body'>
      ${t}
    </div>
    <div class='modal__footer'>
      ${n===``?`
      <button class="btn">Cancel</button>
      <button class='btn btn--primary'>Save</button>
  `:n}
    </div>
  </div>
`,o},r=({header:e,body:t,footer:n=``})=>{let r=document.createElement(`div`);return r.innerHTML=`
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
        ${t}
      </div>
      <div class='modal__footer'>
        ${n===``?`
        <form method="dialog">
          <button class="btn">Cancel</button>
        </form>
        <button class='btn btn--primary'>Save</button>
  `:n}
      </div>
    </dialog>
  `,r}})),a=t({Default:()=>s,Dialog:()=>u,Inline:()=>l,LotsOfContent:()=>c,__namedExportsOrder:()=>d,default:()=>o}),o,s,c,l,u,d,f=e((()=>{i(),o={title:`Components/Modal`,render:({header:e,...t})=>n({header:e,...t}),argTypes:{header:{control:`text`},body:{control:`text`},footer:{control:`text`}}},s={args:{header:`Modal Title`,body:`This is the contents of the modal!`}},c={args:{header:`Modal Title`,body:`This a lot of content in the modal!`.repeat(50),footer:`This a different footer`}},l={args:{header:`Modal Title`,body:`This is the contents of the modal!`,inlineDemo:!0}},u={args:{header:`Modal Title`,body:`This is the contents of the modal!`,dialog:!0}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    header: 'Modal Title',
    body: 'This is the contents of the modal!'
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    header: 'Modal Title',
    body: 'This a lot of content in the modal!'.repeat(50),
    footer: 'This a different footer'
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    header: 'Modal Title',
    body: 'This is the contents of the modal!',
    inlineDemo: true
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    header: 'Modal Title',
    body: 'This is the contents of the modal!',
    dialog: true
  }
}`,...u.parameters?.docs?.source}}},d=[`Default`,`LotsOfContent`,`Inline`,`Dialog`]}));f();export{s as Default,u as Dialog,l as Inline,c as LotsOfContent,d as __namedExportsOrder,o as default,f as n,a as t};