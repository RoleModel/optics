import{n as e,r as t}from"./rolldown-runtime-DaJ6WEGw.js";import{n,t as r}from"./Avatar-BTjGEK1r.js";import{n as i,t as a}from"./TextPair-q3xbGmNv.js";import{i as o,n as s}from"./utils-C40NYCFI.js";var c,l,u,d=e((()=>{o(),n(),i(),c=({flank:e=!0,end:t=!1,gap:n=``,example:r=!1})=>{if(r)return l({flank:e,end:t,gap:n});let i=document.createElement(`div`);return i.className=u(e,t,n),s(i,2),i},l=({flank:e,end:t,gap:n})=>{let i=r({size:`large`,useLink:!1,imageSource:`https://avatars.githubusercontent.com/u/5957102?v=4`}).outerHTML,o=a({titleText:`Jeremy Walton`,subtitleText:`RoleModel Software`});t&&o.classList.add(`text-right`);let s=o.outerHTML,[c,l]=t?[s,i]:[i,s];return`
<div style="padding: var(--op-space-large"> <!-- Padding is for demo only, don't write inline styles -->
  <div class='${u(e,t,n)}'>
    ${c}
    ${l}
  </div>
</div>
`},u=(e,t,n)=>[e?`op-flank`:``,e&&t?`op-flank--end`:``,n?`gap-${n}`:``].filter(Boolean).join(` `)})),f=t({AvatarExample:()=>_,AvatarExampleEnd:()=>v,FlankEnd:()=>g,With:()=>m,Without:()=>h,__namedExportsOrder:()=>y,default:()=>p}),p,m,h,g,_,v,y,b=e((()=>{d(),p={title:`Utilities/Advanced/Flank`,render:({flank:e,end:t,...n})=>c({flank:e,end:t,...n}),argTypes:{flank:{control:`boolean`},end:{control:`boolean`},gap:{control:{type:`select`},options:[`none`,`xxs`,`xs`,`sm`,`md`,`lg`,`xl`]},example:{control:`boolean`}},parameters:{layout:`fullscreen`}},m={args:{flank:!0}},h={args:{flank:!1}},g={args:{flank:!0,end:!0}},_={args:{flank:!0,example:!0}},v={args:{flank:!0,example:!0,end:!0}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    flank: true
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    flank: false
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    flank: true,
    end: true
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    flank: true,
    example: true
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    flank: true,
    example: true,
    end: true
  }
}`,...v.parameters?.docs?.source}}},y=[`With`,`Without`,`FlankEnd`,`AvatarExample`,`AvatarExampleEnd`]}));b();export{_ as AvatarExample,v as AvatarExampleEnd,g as FlankEnd,m as With,h as Without,y as __namedExportsOrder,p as default,b as n,f as t};