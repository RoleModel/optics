const n=({example:t="badge"})=>`
<div class='app-body' style="height: 80rem;"> <!-- This class should be on body. Height is for demo purposed -->
  <div class='app__content margin-y-lg'>
    <div class='aligned-header'>
      <span>This is a really long heading that will probably wrap at some point and that will make aligning something at the end of the text rather difficult.</span>
      <div class='aligned-header__centered-suffix'>
        ${t==="badge"?"<div class='badge'>Aligned Badge</div>":`<button class='btn btn--no-border btn--icon btn--pill btn--small'>
          <span class='material-symbols-outlined'>info</span>
        </button>`}
      </span>
    </div>
  </div>
</div>
`,s={title:"Recipes/Aligned Header",render:({...t})=>n({...t}),argTypes:{example:{control:{type:"select"},options:["badge","icon-button"]}},parameters:{layout:"fullscreen"}},e={args:{example:"badge"}},a={args:{example:"icon-button"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    example: 'badge'
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    example: 'icon-button'
  }
}`,...a.parameters?.docs?.source}}};const o=["Badge","IconButton"],d=Object.freeze(Object.defineProperty({__proto__:null,Badge:e,IconButton:a,__namedExportsOrder:o,default:s},Symbol.toStringTag,{value:"Module"}));export{d as A,e as B,a as I};
