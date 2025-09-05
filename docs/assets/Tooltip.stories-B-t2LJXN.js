import{c as u}from"./Button-B21kpIpO.js";import{c as d}from"./Icon-uqCTS4Mm.js";const g=({text:m="Tooltip Contents",position:c="none",example:x="text"})=>{const l=document.createElement("div");l.style.margin="var(--op-space-4x-large)";let t=document.createElement("p");return t.innerText="A Text Example",x==="button"&&(t=u({label:"A Button Example"})),x==="icon"&&(t=d({name:"info"})),t.dataset.tooltipText=m,c!=="none"&&(t.dataset.tooltipPosition=c),l.appendChild(t),l},b={title:"Components/Tooltip",render:({option1:m,...c})=>g({...c}),argTypes:{text:{control:"text",description:"Note: The wrapping div with margin is not required. It is only used to create space around the tooltip for this example."},position:{control:{type:"select"},options:["none","top","right","bottom","left"]},example:{control:{type:"select"},options:["text","button","icon"]}}},e={args:{text:"A basic tooltip",position:"none",example:"text"}},o={args:{text:"A basic top tooltip",position:"top",example:"text"}},n={args:{text:"A basic right tooltip",position:"right",example:"text"}},a={args:{text:"A basic bottom tooltip",position:"bottom",example:"text"}},r={args:{text:"A basic left tooltip",position:"left",example:"text"}},s={args:{text:"A button tooltip",position:"none",example:"button"}},i={args:{text:"An icon tooltip",position:"none",example:"icon"}},p={args:{text:"An example of a tooltip with a lot of content that will wrap",position:"none",example:"text"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'A basic tooltip',
    position: 'none',
    example: 'text'
  }
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'A basic top tooltip',
    position: 'top',
    example: 'text'
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'A basic right tooltip',
    position: 'right',
    example: 'text'
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'A basic bottom tooltip',
    position: 'bottom',
    example: 'text'
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'A basic left tooltip',
    position: 'left',
    example: 'text'
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'A button tooltip',
    position: 'none',
    example: 'button'
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'An icon tooltip',
    position: 'none',
    example: 'icon'
  }
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'An example of a tooltip with a lot of content that will wrap',
    position: 'none',
    example: 'text'
  }
}`,...p.parameters?.docs?.source}}};const f=["Default","Top","Right","Bottom","Left","Button","Icon","LotsOfText"],T=Object.freeze(Object.defineProperty({__proto__:null,Bottom:a,Button:s,Default:e,Icon:i,Left:r,LotsOfText:p,Right:n,Top:o,__namedExportsOrder:f,default:b},Symbol.toStringTag,{value:"Module"}));export{a as B,e as D,i as I,r as L,n as R,T,o as a,s as b,p as c};
