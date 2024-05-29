import{c as o}from"./Button-CoyIamir.js";import{c as m}from"./Icon-D9QrNi_D.js";const u=({warningLevel:s="warning",style:l="outlined",title:a="",description:c="This is a warning alert",icon:i="",dismissible:d=!1,iconDocsClassFix:r=""})=>{const e=document.createElement("div");if(e.className=[`alert-${s}`,`alert--${l}`].join(" "),i){const t=m({name:i});t.classList.add("alert__icon"),r&&t.classList.add(r),e.innerHTML+=`
  `,e.appendChild(t)}const n=document.createElement("div");if(n.className="alert__messages",n.innerHTML=`
    ${a&&`<div class='alert__title'>${a}</div>`}
    <div class='alert__description'>${c}</div>
  `,e.innerHTML+=`
  `,e.appendChild(n),e.innerHTML+=`    
`,d){const t=o({priority:"default",icon:"close",pill:!0,noBorder:!0});t.classList.add("alert__icon"),e.appendChild(t)}return e};export{u as c};
