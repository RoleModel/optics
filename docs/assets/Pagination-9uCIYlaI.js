import{c as l}from"./Button-u0TojoPW.js";const i=({activePage:o="1",includeShowing:t=!1})=>{const a=document.createElement("nav");a.className="pagination";const e=["1","2","3","...","10","11","12"],s=n=>n==="..."?`
  <div class="pagination__divider">
    ...
  </div>
      `:l({useAsLink:!0,label:n,variant:"default",noBorder:!0,active:o===n,size:"small"}).outerHTML;return t&&(a.innerHTML+=`
  <div class='form-group'>
    <label class='form-label' for='showing-input'>Showing</label>
    <select id='showing-input' class='form-control form-control--no-border form-control--small'>
      <option value="10">10</option>
      <option value="20">20</option>
      <option value="50">50</option>
      <option value="100">100</option>
    </select>
  </div>
`),a.innerHTML+=`
  <a class="btn btn--small btn--no-border btn--icon" href="#">
    <span class="material-symbols-outlined">first_page</span>
  </a>
  <a class="btn btn--small btn--no-border" href="#">
    <span class="material-symbols-outlined">chevron_left</span>
    Prev
  </a>
  ${e.map(n=>s(n)).join(`
  `)}
  <a class="btn btn--small btn--no-border" href="#">
    Next
    <span class="material-symbols-outlined">chevron_right</span>
  </a>
  <a class="btn btn--small btn--no-border btn--icon" href="#">
    <span class="material-symbols-outlined">last_page</span>
  </a>
`,a};export{i as c};
