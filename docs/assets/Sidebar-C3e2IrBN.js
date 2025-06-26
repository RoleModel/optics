import{c as r}from"./Button-B21kpIpO.js";const f=({type:i,icon:t,label:e},n)=>i==="title"?`<div class='sidebar__section-title'>${e}</div>`:i==="divider"?"<div class='sidebar__section-divider'></div>":r({label:e,variant:"default",noBorder:!0,active:n===e,icon:t,inlineIconWithLabel:!0}).outerHTML,p=({size:i="drawer",style:t="default",brand:e=!0,padded:n=!1,position:o="start",activeLink:l="Inbox",logout:s=!1,trailingDiv:d=!0})=>{const a=document.createElement("div");a.className="app-with-sidebar",a.style.height="80rem";const c=e?`
    <a class="sidebar__brand" href="/">
      <img src="https://rolemodelsoftware.com/assets/rolemodel-logo--blue-29fb1367cab78181f9fb9756064de7d6f0e57e0c0280add196d3659bfa45b0fd.svg">
    </a>
  `:"",b=[{type:"link",icon:"inbox",label:"Inbox"},{type:"link",icon:"send",label:"Outbox"},{type:"link",icon:"favorite",label:"Favorite"},{type:"link",icon:"delete",label:"Trash"},{type:"link",icon:"circle",label:"Circle"},{type:"link",icon:"change_history",label:"Triangle"},{type:"link",icon:"square",label:"Square"},{type:"link",icon:"blur_on",label:"Something"}],u=["sidebar",t==="default"?"":`sidebar--${t}`,`sidebar--${i}`,n?"sidebar--padded":""].filter(Boolean).join(" ");return a.innerHTML+=`
  <nav class="${u}">
    ${c}
    <div class="sidebar__content sidebar__content--${o}">
      ${b.map(v=>f(v,l)).join(`
      `)}
    </div>

    ${s?`
      <div class="sidebar__content sidebar__content--end">
        ${r({label:"Logout",variant:"default",noBorder:!0,icon:"logout",inlineIconWithLabel:!0}).outerHTML}
      </div>
    `:""}
  </nav>
  ${d?"<div></div>":""}
`,a};export{p as c};
