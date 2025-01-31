import { createButton } from '../Button/Button.js'

const createSidebarItem = ({ type, icon, label }, activeLink) => {
  if (type === 'title') {
    return `<div class='sidebar__section-title'>${label}</div>`
  }

  if (type === 'divider') {
    return "<div class='sidebar__section-divider'></div>"
  }

  return createButton({
    label,
    priority: 'default',
    noBorder: true,
    active: activeLink === label,
    icon,
    inlineIconWithLabel: true,
  }).outerHTML
}

export const createSidebar = ({
  size = 'drawer',
  responsive = false,
  style = 'default',
  brand = true,
  padded = false,
  position = 'start',
  activeLink = 'Inbox',
  logout = false,
  trailingDiv = true,
}) => {
  const element = 'div'

  const body = document.createElement(element)

  body.className = 'app-with-sidebar'
  body.style.height = '80rem'

  const brandSection = brand
    ? `
    <a class="sidebar__brand" href="/">
      <img src="https://rolemodelsoftware.com/assets/rolemodel-logo--blue-5b7cee4303f5b115050586117bad8960640884812d1d51ee4b58817598c896da.svg">
    </a>
  `
    : ''

  const links = [
    { type: 'link', icon: 'inbox', label: 'Inbox' },
    { type: 'link', icon: 'send', label: 'Outbox' },
    { type: 'link', icon: 'favorite', label: 'Favorite' },
    { type: 'link', icon: 'delete', label: 'Trash' },
    { type: 'link', icon: 'circle', label: 'Circle' },
    { type: 'link', icon: 'change_history', label: 'Triangle' },
    { type: 'link', icon: 'square', label: 'Square' },
    { type: 'link', icon: 'blur_on', label: 'Something' },
  ]

  const sidebarClasses = [
    'sidebar',
    style === 'default' ? '' : `sidebar--${style}`,
    `sidebar--${size}`,
    responsive ? 'sidebar--responsive' : '',
    padded ? 'sidebar--padded' : '',
  ]
    .filter(Boolean)
    .join(' ')

  body.innerHTML += `
  <nav class="${sidebarClasses}">
    ${brandSection}
    <div class="sidebar__content sidebar__content--${position}">
      ${links.map((item) => createSidebarItem(item, activeLink)).join('\n      ')}
    </div>

    ${
      logout
        ? `
      <div class="sidebar__content sidebar__content--end">
        ${
          createButton({
            label: 'Logout',
            priority: 'default',
            noBorder: true,
            icon: 'logout',
            inlineIconWithLabel: true,
          }).outerHTML
        }
      </div>
    `
        : ''
    }
  </nav>
  ${trailingDiv ? '<div></div>' : ''}
`

  return body
}
