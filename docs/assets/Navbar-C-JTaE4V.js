import{c as b}from"./Button-B21kpIpO.js";import{c as d}from"./Avatar-BdQSfjED.js";const u=({icon:e,label:a},n)=>b({label:a,variant:"default",noBorder:!0,active:n===a,icon:e,inlineIconWithLabel:!0}).outerHTML,_=({style:e="default",brand:a=!0,justify:n="start",activeLink:i="Inbox",onlyBrand:l=!1})=>{const t=document.createElement("div");t.className="app-body",t.style.height="40rem";const c=a?`
      <a class="navbar__brand" href="/">
        <img src="./public/rms-logo.svg" alt="RoleModel Software Logo" />
      </a>
  `:"";let o=[{type:"link",icon:"inbox",label:"Inbox"},{type:"link",icon:"send",label:"Outbox"},{type:"link",icon:"favorite",label:"Favorite"},{type:"link",icon:"blur_on",label:"Something"}],r=`
  <div class="navbar__content">
    ${d({size:"medium"}).outerHTML}
  </div>
`;l&&(o=[],r="");const s=["navbar",e!=="default"?`navbar--${e}`:""].filter(Boolean).join(" ");return t.innerHTML+=`
  <div class="app__header">
    <div class="${s}">
      ${c}
      <nav class="navbar__content navbar__content--justify-${n}">
        ${o.map(v=>u(v,i)).join(`
        `)}
      </nav>
      ${r}
    </div>
  </div>
`,t};export{_ as c};
