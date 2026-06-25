import{a as e,i as t}from"./preload-helper-xPQekRTU.js";var n,r=t((()=>{n=({example:e=`badge`})=>`
<div class='app-body' style="height: 80rem;"> <!-- This class should be on body. Height is for demo purposed -->
  <div class='app__content margin-y-lg'>
    <div class='aligned-header'>
      <span>This is a really long heading that will probably wrap at some point and that will make aligning something at the end of the text rather difficult.</span>
      <div class='aligned-header__centered-suffix'>
        ${e===`badge`?`<div class='badge'>Aligned Badge</div>`:`<button class='btn btn--no-border btn--icon btn--pill btn--small'>
          <span class='material-symbols-outlined'>info</span>
        </button>`}
      </span>
    </div>
  </div>
</div>
`})),i=e({Badge:()=>o,IconButton:()=>s,__namedExportsOrder:()=>c,default:()=>a}),a,o,s,c,l=t((()=>{r(),a={title:`Recipes/Aligned Header`,render:({...e})=>n({...e}),argTypes:{example:{control:{type:`select`},options:[`badge`,`icon-button`]}},parameters:{layout:`fullscreen`}},o={args:{example:`badge`}},s={args:{example:`icon-button`}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    example: 'badge'
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    example: 'icon-button'
  }
}`,...s.parameters?.docs?.source}}},c=[`Badge`,`IconButton`]}));l();export{o as Badge,s as IconButton,c as __namedExportsOrder,a as default,l as n,i as t};