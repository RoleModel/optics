import{c as a}from"./Button-NTR86KUp.js";const _=({type:i,icon:n,label:e},r)=>i==="title"?`<div class='sidebar__section-title'>${e}</div>`:i==="divider"?"<div class='sidebar__section-divider'></div>":a({label:e,priority:"default",noBorder:!0,active:r===e,icon:n,inlineIconWithLabel:!0}).outerHTML,h=({size:i="drawer",responsive:n=!1,style:e="default",brand:r=!0,padded:o=!1,position:l="start",activeLink:s="Inbox",logout:d=!1,trailingDiv:c=!0})=>{const t=document.createElement("div");t.className="app-with-sidebar",t.style.height="80rem";const b=r?`
    <a class="sidebar__brand" href="/">
      <img src="https://rolemodelsoftware.com/assets/rolemodel-logo--blue-5b7cee4303f5b115050586117bad8960640884812d1d51ee4b58817598c896da.svg">
    </a>
  `:"",u=[{type:"link",icon:"inbox",label:"Inbox"},{type:"link",icon:"send",label:"Outbox"},{type:"link",icon:"favorite",label:"Favorite"},{type:"link",icon:"delete",label:"Trash"},{type:"link",icon:"circle",label:"Circle"},{type:"link",icon:"change_history",label:"Triangle"},{type:"link",icon:"square",label:"Square"},{type:"link",icon:"blur_on",label:"Something"}],v=[e==="default"?"sidebar":`sidebar-${e}`,`sidebar--${i}`,n?"sidebar--responsive":"",o?"sidebar--padded":""].filter(Boolean).join(" ");return t.innerHTML+=`
  <nav class="${v}">
    ${b}
    <div class="sidebar__content sidebar__content--${l}">
      ${u.map(p=>_(p,s)).join(`
      `)}
    </div>

    ${d?`
      <div class="sidebar__content sidebar__content--end">
        ${a({label:"Logout",priority:"default",noBorder:!0,icon:"logout",inlineIconWithLabel:!0}).outerHTML}
      </div>
    `:""}
  </nav>
  ${c?"<div></div>":""}
`,t};export{h as c};
