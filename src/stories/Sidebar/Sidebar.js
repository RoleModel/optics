const createSidebarItem = ({ type, icon, label }, activeLink) => {
  if (type === 'title') {
    return `<div class='sidebar__section-title'>${label}</div>`
  }

  if (type === 'divider') {
    return "<div class='sidebar__section-divider'></div>"
  }

  return `
<a class="sidebar__item ${activeLink === label ? 'active' : ''}" href="/">
  <span class="material-symbols-outlined sidebar__item-icon" title="${icon}">${icon}</span>
  ${label ? `<div class='sidebar__item-label'>${label}</div>` : ''}
</a>
`
}

export const createSidebar = ({
  size = 'drawer',
  responsive = false,
  style = 'default',
  brand = true,
  position = 'start',
  activeLink = 'Inbox',
  logout = false,
  trailingDiv = true,
}) => {
  const element = 'div'

  const body = document.createElement(element)

  body.className = 'app-wrapper'
  body.style.height = '80rem'

  const brandSection = brand
    ? `
    <a class="sidebar__brand" href="/">
      <img src="https://rolemodelsoftware.com/assets/rolemodel-logo--blue-5b7cee4303f5b115050586117bad8960640884812d1d51ee4b58817598c896da.svg">
    </a>
  `
    : ''

  const links = [
    { type: 'title', label: 'Mail' },
    { type: 'link', icon: 'inbox', label: 'Inbox' },
    { type: 'link', icon: 'send', label: 'Outbox' },
    { type: 'link', icon: 'favorite', label: 'Favorite' },
    { type: 'link', icon: 'delete', label: 'Trash' },
    { type: 'divider' },
    { type: 'title', label: 'Labels' },
    { type: 'link', icon: 'circle', label: 'Circle' },
    { type: 'link', icon: 'change_history', label: 'Triangle' },
    { type: 'link', icon: 'square', label: 'Square' },
    { type: 'divider' },
    { type: 'title', label: 'A really long section title that will overlap' },
    { type: 'link', icon: 'blur_on', label: 'A really long label that will overlap' },
  ]

  body.innerHTML += `
  <div class="${style === 'default' ? 'sidebar' : `sidebar-${style}`} sidebar--${size} ${
    responsive ? 'sidebar--responsive' : ''
  }">
    ${brandSection}
    <div class="sidebar__content sidebar__content--${position}">
      ${links.map((item) => createSidebarItem(item, activeLink)).join('')}
    </div>

    ${
      logout
        ? `
      <div class="sidebar__content sidebar__content--end">
        <a class="sidebar__item" href="/">
          <span class="material-symbols-outlined sidebar__item-icon" title="logout">logout</span>
          <div class='sidebar__item-label'>Logout</div>
        </a>
      </div>
    `
        : ''
    }
  </div>
  ${trailingDiv ? '<div></div>' : ''}
`

  return body
}
