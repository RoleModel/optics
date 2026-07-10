import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{n as t,t as n}from"./Divider-1HoabSPj.js";var r,i,a=e((()=>{t(),r=(e,t,i,a=0,o=``,s=!1)=>{let c=document.createElement(`div`);if(c.className=`side-panel__${e}`,t!==`none`){let n=t===`all`?``:`-${t}`;c.className+=` side-panel__${e}--padded${n}`}if(a>0){for(let e=0;e<a;e++){let e=r(`section`,o,`This is a section`);c.innerHTML+=`
      `,c.appendChild(e),s&&(c.innerHTML+=`
      `,c.appendChild(n({})))}c.innerHTML+=`
    `}else c.innerHTML=i;return c},i=({border:e=`none`,headerPadding:t=`none`,bodyPadding:n=`none`,footerPadding:i=`none`,sections:a=1,sectionPadding:o=`none`,showDividers:s=!1,includeDemoWrapper:c=!0})=>{let l=document.createElement(`div`);c&&(l.style.height=`40rem`);let u=document.createElement(`div`);u.className=`side-panel`,(e===`left`||e===`both`)&&u.classList.add(`side-panel--border-left`),(e===`right`||e===`both`)&&u.classList.add(`side-panel--border-right`);let d=r(`header`,t,`This is a header`);u.innerHTML+=`
    `,u.appendChild(d);let f=r(`body`,n,`This is a body`,a,o,s);u.innerHTML+=`
    `,u.appendChild(f);let p=r(`footer`,i,`This is a footer`);return u.innerHTML+=`
    `,u.appendChild(p),u.innerHTML+=`
  `,l.innerHTML+=`
  `,l.appendChild(u),l.innerHTML+=`
`,l}}));export{a as n,i as t};