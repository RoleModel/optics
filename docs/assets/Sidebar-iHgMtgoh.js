import{c as a}from"./Button-NTR86KUp.js";const p=({type:i,icon:t,label:e},r)=>i==="title"?`<div class='sidebar__section-title'>${e}</div>`:i==="divider"?"<div class='sidebar__section-divider'></div>":a({label:e,priority:"default",noBorder:!0,active:r===e,icon:t,inlineIconWithLabel:!0}).outerHTML,f=({size:i="drawer",style:t="default",brand:e=!0,padded:r=!1,position:o="start",activeLink:l="Inbox",logout:s=!1,trailingDiv:d=!0})=>{const n=document.createElement("div");n.className="app-with-sidebar",n.style.height="80rem";const c=e?`
    <a class="sidebar__brand" href="/">
      <img src="https://rolemodelsoftware.com/assets/rolemodel-logo--blue-5b7cee4303f5b115050586117bad8960640884812d1d51ee4b58817598c896da.svg">
    </a>
  `:"",b=[{type:"link",icon:"inbox",label:"Inbox"},{type:"link",icon:"send",label:"Outbox"},{type:"link",icon:"favorite",label:"Favorite"},{type:"link",icon:"delete",label:"Trash"},{type:"link",icon:"circle",label:"Circle"},{type:"link",icon:"change_history",label:"Triangle"},{type:"link",icon:"square",label:"Square"},{type:"link",icon:"blur_on",label:"Something"}],u=["sidebar",t==="default"?"":`sidebar--${t}`,`sidebar--${i}`,r?"sidebar--padded":""].filter(Boolean).join(" ");return n.innerHTML+=`
  <nav class="${u}">
    ${c}
    <div class="sidebar__content sidebar__content--${o}">
      ${b.map(v=>p(v,l)).join(`
      `)}
    </div>

    ${s?`
      <div class="sidebar__content sidebar__content--end">
        ${a({label:"Logout",priority:"default",noBorder:!0,icon:"logout",inlineIconWithLabel:!0}).outerHTML}
      </div>
    `:""}
  </nav>
  ${d?"<div></div>":""}
`,n};export{f as c};
