import{a as e,i as t}from"./preload-helper-xPQekRTU.js";import{n,t as r}from"./Icon-CeJg6BIF.js";import{n as i,t as a}from"./Button-BUsOhhs6.js";var o,s=t((()=>{i(),n(),o=({text:e=`Tooltip Contents`,position:t=`none`,example:n=`text`})=>{let i=document.createElement(`div`);i.style.margin=`var(--op-space-4x-large)`;let o=document.createElement(`p`);return o.innerText=`A Text Example`,n===`button`&&(o=a({label:`A Button Example`})),n===`icon`&&(o=r({name:`info`})),o.dataset.tooltipText=e,t!==`none`&&(o.dataset.tooltipPosition=t),i.appendChild(o),i}})),c=e({Bottom:()=>p,Button:()=>h,Default:()=>u,Icon:()=>g,Left:()=>m,LotsOfText:()=>_,Right:()=>f,Top:()=>d,__namedExportsOrder:()=>v,default:()=>l}),l,u,d,f,p,m,h,g,_,v,y=t((()=>{s(),l={title:`Components/Tooltip`,render:({option1:e,...t})=>o({option1:e,...t}),argTypes:{text:{control:`text`,description:`Note: The wrapping div with margin is not required. It is only used to create space around the tooltip for this example.`},position:{control:{type:`select`},options:[`none`,`top`,`right`,`bottom`,`left`]},example:{control:{type:`select`},options:[`text`,`button`,`icon`]}}},u={args:{text:`A basic tooltip`,position:`none`,example:`text`}},d={args:{text:`A basic top tooltip`,position:`top`,example:`text`}},f={args:{text:`A basic right tooltip`,position:`right`,example:`text`}},p={args:{text:`A basic bottom tooltip`,position:`bottom`,example:`text`}},m={args:{text:`A basic left tooltip`,position:`left`,example:`text`}},h={args:{text:`A button tooltip`,position:`none`,example:`button`}},g={args:{text:`An icon tooltip`,position:`none`,example:`icon`}},_={args:{text:`An example of a tooltip with a lot of content that will wrap`,position:`none`,example:`text`}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'A basic tooltip',
    position: 'none',
    example: 'text'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'A basic top tooltip',
    position: 'top',
    example: 'text'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'A basic right tooltip',
    position: 'right',
    example: 'text'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'A basic bottom tooltip',
    position: 'bottom',
    example: 'text'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'A basic left tooltip',
    position: 'left',
    example: 'text'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'A button tooltip',
    position: 'none',
    example: 'button'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'An icon tooltip',
    position: 'none',
    example: 'icon'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'An example of a tooltip with a lot of content that will wrap',
    position: 'none',
    example: 'text'
  }
}`,..._.parameters?.docs?.source}}},v=[`Default`,`Top`,`Right`,`Bottom`,`Left`,`Button`,`Icon`,`LotsOfText`]}));y();export{p as Bottom,h as Button,u as Default,g as Icon,m as Left,_ as LotsOfText,f as Right,d as Top,v as __namedExportsOrder,l as default,y as n,c as t};