import{c as m}from"./Divider-DvyA9Bw7.js";const d=(i,s,r,o=0,c="",l=!1)=>{const e=document.createElement("div");if(e.className=`side-panel__${i}`,s!=="none"){const a=s==="all"?"":`-${s}`;e.className+=` side-panel__${i}--padded${a}`}if(o>0){for(let a=0;a<o;a++){const t=d("section",c,"This is a section");e.innerHTML+=`
      `,e.appendChild(t),l&&(e.innerHTML+=`
      `,e.appendChild(m({})))}e.innerHTML+=`
    `}else e.innerHTML=r;return e},L=({border:i="none",headerPadding:s="none",bodyPadding:r="none",footerPadding:o="none",sections:c=1,sectionPadding:l="none",showDividers:e=!1,includeDemoWrapper:a=!0})=>{const t=document.createElement("div");a&&(t.style.height="40rem");const n=document.createElement("div");n.className="side-panel",(i==="left"||i==="both")&&n.classList.add("side-panel--border-left"),(i==="right"||i==="both")&&n.classList.add("side-panel--border-right");const p=d("header",s,"This is a header");n.innerHTML+=`
    `,n.appendChild(p);const h=d("body",r,"This is a body",c,l,e);n.innerHTML+=`
    `,n.appendChild(h);const f=d("footer",o,"This is a footer");return n.innerHTML+=`
    `,n.appendChild(f),n.innerHTML+=`
  `,t.innerHTML+=`
  `,t.appendChild(n),t.innerHTML+=`
`,t};export{L as c};
