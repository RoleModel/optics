const m=({name:l,filled:c=!1,size:e="medium",weight:o="normal",emphasis:a="normal"})=>{const n=document.createElement("span");return n.innerText=l,n.className=["material-symbols-outlined",c?"icon--filled":"",e==="medium"?"":`icon--${e}`,o==="normal"?"":`icon--weight-${o}`,a==="normal"?"":`icon--${a}-emphasis`].filter(Boolean).join(" "),n};export{m as c};
