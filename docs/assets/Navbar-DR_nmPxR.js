import{i as e}from"./preload-helper-xPQekRTU.js";import{n as t,t as n}from"./Button-BUsOhhs6.js";import{n as r,t as i}from"./Avatar-B_hWKnHZ.js";var a,o,s=e((()=>{t(),r(),a=({icon:e,label:t},r)=>n({label:t,variant:`default`,noBorder:!0,active:r===t,icon:e,inlineIconWithLabel:!0}).outerHTML,o=({style:e=`default`,brand:t=!0,justify:n=`start`,activeLink:r=`Inbox`,onlyBrand:o=!1})=>{let s=document.createElement(`div`);s.className=`app-body`,s.style.height=`40rem`;let c=t?`
      <a class="navbar__brand" href="/">
        <img src="./public/rms-logo.svg" alt="RoleModel Software Logo" />
      </a>
  `:``,l=[{type:`link`,icon:`inbox`,label:`Inbox`},{type:`link`,icon:`send`,label:`Outbox`},{type:`link`,icon:`favorite`,label:`Favorite`},{type:`link`,icon:`blur_on`,label:`Something`}],u=`
  <div class="navbar__content">
    ${i({size:`medium`}).outerHTML}
  </div>
`;o&&(l=[],u=``);let d=[`navbar`,e==="default"?``:`navbar--${e}`].filter(Boolean).join(` `);return s.innerHTML+=`
  <div class="app__header">
    <div class="${d}">
      ${c}
      <nav class="navbar__content navbar__content--justify-${n}">
        ${l.map(e=>a(e,r)).join(`
        `)}
      </nav>
      ${u}
    </div>
  </div>
`,s}}));export{s as n,o as t};