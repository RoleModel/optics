// import
import { createButton } from '../Button/Button.js'

export const createPagination = ({ activePage = '1', includeShowing = false }) => {
  const element = document.createElement('nav')

  element.className = 'pagination'

  const items = ['1', '2', '3', '...', '10', '11', '12']

  const createItem = (item) => {
    if (item === '...') {
      return `
  <div class="btn btn--small btn--no-border btn--icon btn--pagination-divider">
    ...
  </div>
      `
    }

    return createButton({
      useAsLink: true,
      label: item,
      priority: 'default',
      noBorder: true,
      active: activePage === item,
      size: 'small',
    }).outerHTML
  }

  if (includeShowing) {
    element.innerHTML += `
  <div class='form-group'>
    <label class='form-label' for='showing-input'>Showing</label>
    <select id='showing-input' class='form-control form-control--no-border form-control--small'>
      <option value="10">10</option>
      <option value="20">20</option>
      <option value="50">50</option>
      <option value="100">100</option>
    </select>
  </div>
`
  }

  element.innerHTML += `
  <a class="btn btn--small btn--no-border btn--icon" href="#">
    <span class="material-symbols-outlined">first_page</span>
  </a>
  <a class="btn btn--small btn--no-border" href="#">
    <span class="material-symbols-outlined">chevron_left</span>
    Prev
  </a>
  ${items.map((item) => createItem(item)).join('\n  ')}
  <a class="btn btn--small btn--no-border" href="#">
    Next
    <span class="material-symbols-outlined">chevron_right</span>
  </a>
  <a class="btn btn--small btn--no-border btn--icon" href="#">
    <span class="material-symbols-outlined">last_page</span>
  </a>
`

  return element
}
