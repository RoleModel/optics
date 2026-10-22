import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,t as r}from"./Icon-DFZ5r5aH.js";import{n as i,t as a}from"./Button-Cl_xSiHq.js";var o;function s(){return(s=e((()=>{n(),o=({headerLabel:e=`Header Label`,marker:t=`arrow_right`,additionalHeaderContent:n=``,flipHeaderAndMarker:i=!1,disableAnimation:a=!1,content:o=`Something small enough to escape casual notice.`})=>{let s=document.createElement(`details`);s.className=`accordion`,a&&(s.className+=` accordion--disable-animation`);let c=document.createElement(`summary`),l=document.createElement(`span`);l.className=`accordion__label`,l.innerHTML=e;let u=r({name:t});return u.className+=` accordion__marker`,c.innerHTML=`
    `,i?(c.innerHTML+=l.outerHTML,c.innerHTML+=`
    `,c.innerHTML+=u.outerHTML):(c.innerHTML+=u.outerHTML,c.innerHTML+=`
    `,c.innerHTML+=l.outerHTML),c.innerHTML+=`
    `,c.innerHTML+=n,c.innerHTML+=`
  `,s.innerHTML=`
  `,s.innerHTML+=c.outerHTML,s.innerHTML+=`
  `,s.innerHTML+=o,s.innerHTML+=`
`,s}})))()}var c=t({AdditionalHeaderContent:()=>p,Default:()=>u,DisableAnimation:()=>f,FlipHeaderAndMarker:()=>d,__namedExportsOrder:()=>m,default:()=>l}),l,u,d,f,p,m;function h(){return(h=e((()=>{s(),i(),l={title:`Components/Accordion`,render:({option1:e,...t})=>o({option1:e,...t}),argTypes:{headerLabel:{control:`text`},marker:{control:`text`},additionalHeaderContent:{control:`text`},flipHeaderAndMarker:{control:`boolean`},disableAnimation:{control:`boolean`},content:{control:`text`}},parameters:{layout:`padded`}},u={args:{}},d={args:{flipHeaderAndMarker:!0}},f={args:{disableAnimation:!0}},p={args:{additionalHeaderContent:a({label:`Button`}).outerHTML}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    flipHeaderAndMarker: true
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    disableAnimation: true
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    additionalHeaderContent: createButton({
      label: 'Button'
    }).outerHTML
  }
}`,...p.parameters?.docs?.source}}},m=[`Default`,`FlipHeaderAndMarker`,`DisableAnimation`,`AdditionalHeaderContent`]})))()}export{d as a,f as i,p as n,h as o,u as r,c as t};