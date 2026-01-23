import{c as r}from"./Button-B21kpIpO.js";const _=({type:i,icon:t,label:e},a)=>i==="title"?`<div class='sidebar__section-title'>${e}</div>`:i==="divider"?"<div class='sidebar__section-divider'></div>":r({label:e,variant:"default",noBorder:!0,active:a===e,icon:t,inlineIconWithLabel:!0}).outerHTML,m=({size:i="drawer",style:t="default",brand:e=!0,padded:a=!1,position:o="start",activeLink:l="Inbox",logout:s=!1,trailingDiv:d=!0})=>{const n=document.createElement("div");n.className="app-with-sidebar",n.style.height="80rem";const c=e?`
    <a class="sidebar__brand" href="/">
      <img src="./public/rms-logo.svg" alt="RoleModel Software Logo" />
    </a>
  `:"",b=[{type:"link",icon:"inbox",label:"Inbox"},{type:"link",icon:"send",label:"Outbox"},{type:"link",icon:"favorite",label:"Favorite"},{type:"link",icon:"delete",label:"Trash"},{type:"link",icon:"circle",label:"Circle"},{type:"link",icon:"change_history",label:"Triangle"},{type:"link",icon:"square",label:"Square"},{type:"link",icon:"blur_on",label:"Something"}],u=["sidebar",t==="default"?"":`sidebar--${t}`,`sidebar--${i}`,a?"sidebar--padded":""].filter(Boolean).join(" ");return n.innerHTML+=`
  <nav class="${u}">
    ${c}
    <div class="sidebar__content sidebar__content--${o}">
      ${b.map(v=>_(v,l)).join(`
      `)}
    </div>

    ${s?`
      <div class="sidebar__content sidebar__content--end">
        ${r({label:"Logout",variant:"default",noBorder:!0,icon:"logout",inlineIconWithLabel:!0}).outerHTML}
      </div>
    `:""}
  </nav>
  ${d?"<div></div>":""}
`,n};export{m as c};
