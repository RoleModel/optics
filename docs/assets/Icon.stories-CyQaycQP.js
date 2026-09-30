import{n as e,r as t}from"./rolldown-runtime-DaJ6WEGw.js";import{n,t as r}from"./Icon-CRcwQQX1.js";var i=t({Bold:()=>l,Default:()=>o,Emphasis:()=>u,Filled:()=>s,Large:()=>c,Svg:()=>m,__namedExportsOrder:()=>h,default:()=>a}),a,o,s,c,l,u,d,f,p,m,h,g=e((()=>{n(),a={title:`Components/Icon`,render:({name:e,...t})=>r({name:e,...t}),argTypes:{iconPack:{control:{type:`select`},options:[`Material Symbols Outlined`,`Phosphor`,`Tabler`,`Feather`,`Lucide`]},name:{control:`text`},filled:{control:`boolean`},size:{control:{type:`select`},options:[`small`,`medium`,`large`,`x-large`]},weight:{control:{type:`select`},options:[`thin`,`light`,`normal`,`semi-bold`,`bold`]},emphasis:{control:{type:`select`},options:[`low`,`normal`,`high`]},duotone:{control:`boolean`,if:{arg:`iconPack`,eq:`Phosphor`}}}},o={args:{iconPack:`Material Symbols Outlined`,name:`settings`}},s={args:{iconPack:`Material Symbols Outlined`,name:`settings`,filled:!0}},c={args:{iconPack:`Material Symbols Outlined`,name:`settings`,size:`large`}},l={args:{iconPack:`Material Symbols Outlined`,name:`settings`,weight:`bold`}},u={args:{iconPack:`Material Symbols Outlined`,name:`settings`,emphasis:`high`}},d=[`<circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.5" /><path d="M8 12.5l2.5 2.5L16 9.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />`,`<path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />`,`<path d="M4 10.5L12 4l8 6.5V19a1 1 0 0 1-1 1h-4v-5h-6v5H5a1 1 0 0 1-1-1z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />`],f=(e,t=``)=>`<span class="icon icon--svg ${t}" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none">${e}</svg></span>`,p=(e,t)=>`<div style="display: flex; gap: var(--op-space-medium); align-items: center;">
    <code style="min-inline-size: 32ch;">${e}</code>
    ${d.map(e=>f(e,t)).join(``)}
  </div>`,m={render:()=>{let e=document.createElement(`div`);return e.style.display=`grid`,e.style.gap=`var(--op-space-medium)`,e.innerHTML=[[`icon icon--svg`,``],[`icon--small`,`icon--small`],[`icon--large`,`icon--large`],[`icon--x-large`,`icon--x-large`],[`icon--large icon--weight-light`,`icon--large icon--weight-light`],[`icon--large icon--weight-bold`,`icon--large icon--weight-bold`],[`icon--large icon--low-emphasis`,`icon--large icon--low-emphasis`]].map(([e,t])=>p(e,t)).join(``),e}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    iconPack: 'Material Symbols Outlined',
    name: 'settings'
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    iconPack: 'Material Symbols Outlined',
    name: 'settings',
    filled: true
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    iconPack: 'Material Symbols Outlined',
    name: 'settings',
    size: 'large'
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    iconPack: 'Material Symbols Outlined',
    name: 'settings',
    weight: 'bold'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    iconPack: 'Material Symbols Outlined',
    name: 'settings',
    emphasis: 'high'
  }
}`,...u.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const wrapper = document.createElement('div');
    wrapper.style.display = 'grid';
    wrapper.style.gap = 'var(--op-space-medium)';
    wrapper.innerHTML = [['icon icon--svg', ''], ['icon--small', 'icon--small'], ['icon--large', 'icon--large'], ['icon--x-large', 'icon--x-large'], ['icon--large icon--weight-light', 'icon--large icon--weight-light'], ['icon--large icon--weight-bold', 'icon--large icon--weight-bold'], ['icon--large icon--low-emphasis', 'icon--large icon--low-emphasis']].map(([label, classes]) => svgRow(label, classes)).join('');
    return wrapper;
  }
}`,...m.parameters?.docs?.source}}},h=[`Default`,`Filled`,`Large`,`Bold`,`Emphasis`,`Svg`]}));g();export{l as Bold,o as Default,u as Emphasis,s as Filled,c as Large,m as Svg,h as __namedExportsOrder,a as default,g as n,i as t};