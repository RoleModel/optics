import{c as z}from"./Button-CoyIamir.js";import{c as M}from"./Icon-D9QrNi_D.js";const N=({text:l="Tooltip Contents",position:c="none",example:x="text"})=>{const m=document.createElement("div");m.style.margin="var(--op-space-4x-large)";let t=document.createElement("p");return t.innerText="A Text Example",x==="button"&&(t=z({label:"A Button Example"})),x==="icon"&&(t=M({name:"info"})),t.dataset.tooltipText=l,c!=="none"&&(t.dataset.tooltipPosition=c),m.appendChild(t),m},k={title:"Popup Content Components/Tooltip",render:({option1:l,...c})=>N({option1:l,...c}),argTypes:{text:{control:"text",description:"Note: The wrapping div with margin is not required. It is only used to create space around the tooltip for this example."},position:{control:{type:"select"},options:["none","top","right","bottom","left"]},example:{control:{type:"select"},options:["text","button","icon"]}}},e={args:{text:"A basic tooltip",position:"none",example:"text"}},o={args:{text:"A basic top tooltip",position:"top",example:"text"}},n={args:{text:"A basic right tooltip",position:"right",example:"text"}},a={args:{text:"A basic bottom tooltip",position:"bottom",example:"text"}},r={args:{text:"A basic left tooltip",position:"left",example:"text"}},s={args:{text:"A button tooltip",position:"none",example:"button"}},i={args:{text:"An icon tooltip",position:"none",example:"icon"}},p={args:{text:"An example of a tooltip with a lot of content that will wrap",position:"none",example:"text"}};var u,d,g;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    text: 'A basic tooltip',
    position: 'none',
    example: 'text'
  }
}`,...(g=(d=e.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var b,f,A;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    text: 'A basic top tooltip',
    position: 'top',
    example: 'text'
  }
}`,...(A=(f=o.parameters)==null?void 0:f.docs)==null?void 0:A.source}}};var h,T,S;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    text: 'A basic right tooltip',
    position: 'right',
    example: 'text'
  }
}`,...(S=(T=n.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};var w,y,B;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    text: 'A basic bottom tooltip',
    position: 'bottom',
    example: 'text'
  }
}`,...(B=(y=a.parameters)==null?void 0:y.docs)==null?void 0:B.source}}};var _,E,I;r.parameters={...r.parameters,docs:{...(_=r.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    text: 'A basic left tooltip',
    position: 'left',
    example: 'text'
  }
}`,...(I=(E=r.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};var L,O,v;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    text: 'A button tooltip',
    position: 'none',
    example: 'button'
  }
}`,...(v=(O=s.parameters)==null?void 0:O.docs)==null?void 0:v.source}}};var C,D,P;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    text: 'An icon tooltip',
    position: 'none',
    example: 'icon'
  }
}`,...(P=(D=i.parameters)==null?void 0:D.docs)==null?void 0:P.source}}};var R,j,q;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    text: 'An example of a tooltip with a lot of content that will wrap',
    position: 'none',
    example: 'text'
  }
}`,...(q=(j=p.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};const F=["Default","Top","Right","Bottom","Left","Button","Icon","LotsOfText"],J=Object.freeze(Object.defineProperty({__proto__:null,Bottom:a,Button:s,Default:e,Icon:i,Left:r,LotsOfText:p,Right:n,Top:o,__namedExportsOrder:F,default:k},Symbol.toStringTag,{value:"Module"}));export{a as B,e as D,i as I,r as L,n as R,J as T,o as a,s as b,p as c};
