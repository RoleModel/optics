const l=({example:t="badge"})=>`
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
`,c={title:"Recipes/Aligned Header",render:({...t})=>l({...t}),argTypes:{example:{control:{type:"select"},options:["badge","icon-button"]}},parameters:{layout:"fullscreen"}},e={args:{example:"badge"}},a={args:{example:"icon-button"}};var n,s,o;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    example: 'badge'
  }
}`,...(o=(s=e.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};var r,i,d;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    example: 'icon-button'
  }
}`,...(d=(i=a.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};const p=["Badge","IconButton"],b=Object.freeze(Object.defineProperty({__proto__:null,Badge:e,IconButton:a,__namedExportsOrder:p,default:c},Symbol.toStringTag,{value:"Module"}));export{b as A,e as B,a as I};
