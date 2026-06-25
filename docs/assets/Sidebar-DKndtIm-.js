import{i as e}from"./preload-helper-xPQekRTU.js";import{n as t,t as n}from"./Button-BUsOhhs6.js";var r,i,a=e((()=>{t(),r=({type:e,icon:t,label:r},i)=>e===`title`?`<div class='sidebar__section-title'>${r}</div>`:e===`divider`?`<div class='sidebar__section-divider'></div>`:n({label:r,variant:`default`,noBorder:!0,active:i===r,icon:t,inlineIconWithLabel:!0}).outerHTML,i=({size:e=`drawer`,style:t=`default`,brand:i=!0,padded:a=!1,position:o=`start`,activeLink:s=`Inbox`,logout:c=!1,trailingDiv:l=!0})=>{let u=document.createElement(`div`);u.className=`app-with-sidebar`,u.style.height=`80rem`;let d=i?`
    <a class="sidebar__brand" href="/">
      <img src="./public/rms-logo.svg" alt="RoleModel Software Logo" />
    </a>
  `:``,f=[{type:`link`,icon:`inbox`,label:`Inbox`},{type:`link`,icon:`send`,label:`Outbox`},{type:`link`,icon:`favorite`,label:`Favorite`},{type:`link`,icon:`delete`,label:`Trash`},{type:`link`,icon:`circle`,label:`Circle`},{type:`link`,icon:`change_history`,label:`Triangle`},{type:`link`,icon:`square`,label:`Square`},{type:`link`,icon:`blur_on`,label:`Something`}],p=[`sidebar`,t==="default"?``:`sidebar--${t}`,`sidebar--${e}`,a?`sidebar--padded`:``].filter(Boolean).join(` `);return u.innerHTML+=`
  <nav class="${p}">
    ${d}
    <div class="sidebar__content sidebar__content--${o}">
      ${f.map(e=>r(e,s)).join(`
      `)}
    </div>

    ${c?`
      <div class="sidebar__content sidebar__content--end">
        ${n({label:`Logout`,variant:`default`,noBorder:!0,icon:`logout`,inlineIconWithLabel:!0}).outerHTML}
      </div>
    `:``}
  </nav>
  ${l?`<div></div>`:``}
`,u}}));export{a as n,i as t};