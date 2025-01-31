import{c as d}from"./Button-NTR86KUp.js";import{c as v}from"./Avatar-B1hinTu4.js";const m=({icon:e,label:a},n)=>d({label:a,variant:"default",noBorder:!0,active:n===a,icon:e,inlineIconWithLabel:!0}).outerHTML,_=({style:e="default",brand:a=!0,justify:n="start",activeLink:i="Inbox",onlyBrand:l=!1})=>{const t=document.createElement("div");t.className="app-body",t.style.height="40rem";const s=a?`
      <a class="navbar__brand" href="/">
        <img src="https://rolemodelsoftware.com/assets/rolemodel-logo--blue-5b7cee4303f5b115050586117bad8960640884812d1d51ee4b58817598c896da.svg">
      </a>
  `:"";let o=[{type:"link",icon:"inbox",label:"Inbox"},{type:"link",icon:"send",label:"Outbox"},{type:"link",icon:"favorite",label:"Favorite"},{type:"link",icon:"blur_on",label:"Something"}],r=`
  <div class="navbar__content">
    ${v({size:"medium"}).outerHTML}
  </div>
`;l&&(o=[],r="");const c=["navbar",e!=="default"?`navbar--${e}`:""].filter(Boolean).join(" ");return t.innerHTML+=`
  <div class="app__header">
    <div class="${c}">
      ${s}
      <nav class="navbar__content navbar__content--justify-${n}">
        ${o.map(b=>m(b,i)).join(`
        `)}
      </nav>
      ${r}
    </div>
  </div>
`,t};export{_ as c};
