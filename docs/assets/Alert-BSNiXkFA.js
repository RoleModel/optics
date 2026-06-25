import{i as e}from"./preload-helper-xPQekRTU.js";import{n as t,t as n}from"./Icon-CeJg6BIF.js";import{n as r,t as i}from"./Button-BUsOhhs6.js";var a,o=e((()=>{r(),t(),a=({warningLevel:e=`warning`,style:t=`outlined`,title:r=``,description:a=`This is a warning alert`,icon:o=``,dismissible:s=!1,iconDocsClassFix:c=``})=>{let l=document.createElement(`div`);if(l.className=[`alert`,`alert--${e}`,`alert--${t}`].join(` `),o){let e=n({name:o});e.classList.add(`alert__icon`),c&&e.classList.add(c),l.innerHTML+=`
  `,l.appendChild(e)}let u=document.createElement(`div`);if(u.className=`alert__messages`,u.innerHTML=`
    ${r&&`<div class='alert__title'>${r}</div>`}
    <div class='alert__description'>${a}</div>
  `,l.innerHTML+=`
  `,l.appendChild(u),l.innerHTML+=`    
`,s){let e=i({variant:`default`,icon:`close`,pill:!0,noBorder:!0});e.classList.add(`alert__icon`),l.appendChild(e)}return l}}));export{o as n,a as t};