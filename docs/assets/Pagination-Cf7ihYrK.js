import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{n as t,t as n}from"./Button-BDOseHCb.js";var r,i=e((()=>{t(),r=({activePage:e=`1`,includeShowing:t=!1})=>{let r=document.createElement(`nav`);r.className=`pagination`;let i=[`1`,`2`,`3`,`...`,`10`,`11`,`12`],a=t=>t===`...`?`
  <div class="pagination__divider">
    ...
  </div>
      `:n({useAsLink:!0,label:t,variant:`default`,noBorder:!0,active:e===t,size:`small`}).outerHTML;return t&&(r.innerHTML+=`
  <div class='form-group'>
    <label class='form-label' for='showing-input'>Showing</label>
    <select id='showing-input' class='form-control form-control--no-border form-control--small'>
      <option value="10">10</option>
      <option value="20">20</option>
      <option value="50">50</option>
      <option value="100">100</option>
    </select>
  </div>
`),r.innerHTML+=`
  <a class="btn btn--small btn--no-border btn--icon" href="#">
    <span class="material-symbols-outlined">first_page</span>
  </a>
  <a class="btn btn--small btn--no-border" href="#">
    <span class="material-symbols-outlined">chevron_left</span>
    Prev
  </a>
  ${i.map(e=>a(e)).join(`
  `)}
  <a class="btn btn--small btn--no-border" href="#">
    Next
    <span class="material-symbols-outlined">chevron_right</span>
  </a>
  <a class="btn btn--small btn--no-border btn--icon" href="#">
    <span class="material-symbols-outlined">last_page</span>
  </a>
`,r}}));export{i as n,r as t};