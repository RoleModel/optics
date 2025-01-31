import{c as o}from"./Button-NTR86KUp.js";import{c as m}from"./Icon-D9QrNi_D.js";const u=({warningLevel:s="warning",style:l="outlined",title:a="",description:c="This is a warning alert",icon:r="",dismissible:d=!1,iconDocsClassFix:i=""})=>{const e=document.createElement("div");if(e.className=["alert",`alert--${s}`,`alert--${l}`].join(" "),r){const t=m({name:r});t.classList.add("alert__icon"),i&&t.classList.add(i),e.innerHTML+=`
  `,e.appendChild(t)}const n=document.createElement("div");if(n.className="alert__messages",n.innerHTML=`
    ${a&&`<div class='alert__title'>${a}</div>`}
    <div class='alert__description'>${c}</div>
  `,e.innerHTML+=`
  `,e.appendChild(n),e.innerHTML+=`    
`,d){const t=o({variant:"default",icon:"close",pill:!0,noBorder:!0});t.classList.add("alert__icon"),e.appendChild(t)}return e};export{u as c};
