import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";var n,r,i;function a(){return(a=e((()=>{n=`https://images.unsplash.com/photo-1517849845537-4d257902454a?w=800&q=80`,r=({frame:e=!0,aspect:t=``,inlineSize:r=``})=>{let a=r?` style="--_op-frame-inline-size: ${r};"`:``;return`
<div style="max-inline-size: 20rem; padding: var(--op-space-large);"> <!-- Sizing is for demo only, don't write inline styles -->
  <div class="${i(e,t)}"${a}>
    <img src="${n}" alt="A dog looking at the camera" />
  </div>
</div>
`},i=(e,t)=>[e?`op-frame`:``,e&&t?`op-frame--${t}`:``].filter(Boolean).join(` `)})))()}var o=t({CustomInlineSize:()=>_,FourThree:()=>p,Landscape:()=>d,Portrait:()=>f,Square:()=>u,ThreeFour:()=>m,ThreeTwo:()=>h,TwoThree:()=>g,With:()=>c,Without:()=>l,__namedExportsOrder:()=>v,default:()=>s}),s,c,l,u,d,f,p,m,h,g,_,v;function y(){return(y=e((()=>{a(),s={title:`Utilities/Advanced/Frame`,render:({frame:e,...t})=>r({frame:e,...t}),argTypes:{frame:{control:`boolean`},aspect:{control:{type:`select`},options:[`square`,`landscape`,`portrait`,`4-3`,`3-4`,`3-2`,`2-3`]},inlineSize:{control:{type:`text`}}},parameters:{layout:`fullscreen`}},c={args:{frame:!0}},l={args:{frame:!1}},u={args:{frame:!0,aspect:`square`}},d={args:{frame:!0,aspect:`landscape`}},f={args:{frame:!0,aspect:`portrait`}},p={args:{frame:!0,aspect:`4-3`}},m={args:{frame:!0,aspect:`3-4`}},h={args:{frame:!0,aspect:`3-2`}},g={args:{frame:!0,aspect:`2-3`}},_={args:{frame:!0,aspect:`square`,inlineSize:`50%`}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    frame: true
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    frame: false
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    frame: true,
    aspect: 'square'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    frame: true,
    aspect: 'landscape'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    frame: true,
    aspect: 'portrait'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    frame: true,
    aspect: '4-3'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    frame: true,
    aspect: '3-4'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    frame: true,
    aspect: '3-2'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    frame: true,
    aspect: '2-3'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    frame: true,
    aspect: 'square',
    inlineSize: '50%'
  }
}`,..._.parameters?.docs?.source}}},v=[`With`,`Without`,`Square`,`Landscape`,`Portrait`,`FourThree`,`ThreeFour`,`ThreeTwo`,`TwoThree`,`CustomInlineSize`]})))()}export{f as a,h as c,l as d,y as f,d as i,g as l,p as n,u as o,o as r,m as s,_ as t,c as u};