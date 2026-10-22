import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{i as n,n as r}from"./utils-CqxjQWfn.js";var i;function a(){return(a=e((()=>{n(),i=({grid:e=!0,gap:t=``,columns:n=0})=>{let i=document.createElement(`div`);return i.style.height=`10rem`,i.className=[e?`op-grid`:``,t?`gap-${t}`:``,n>0?`op-grid--${n}-column`:``].filter(Boolean).join(` `),r(i,10),i}})))()}var o=t({SixColumns:()=>d,TwoColumns:()=>u,With:()=>c,Without:()=>l,__namedExportsOrder:()=>f,default:()=>s}),s,c,l,u,d,f;function p(){return(p=e((()=>{a(),s={title:`Utilities/Advanced/Grid`,render:({grid:e,...t})=>i({grid:e,...t}),argTypes:{grid:{control:`boolean`},gap:{control:{type:`select`},options:[`none`,`xxs`,`xs`,`sm`,`md`,`lg`,`xl`]},columns:{control:{type:`number`,min:2,max:6,step:1}}},parameters:{layout:`fullscreen`}},c={args:{grid:!0}},l={args:{grid:!1}},u={args:{grid:!0,columns:2}},d={args:{grid:!0,columns:6}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    grid: true
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    grid: false
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    grid: true,
    columns: 2
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    grid: true,
    columns: 6
  }
}`,...d.parameters?.docs?.source}}},f=[`With`,`Without`,`TwoColumns`,`SixColumns`]})))()}export{l as a,c as i,d as n,p as o,u as r,o as t};