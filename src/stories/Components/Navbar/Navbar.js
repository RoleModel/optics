import { createButton } from '../Button/Button.js'
import { createAvatar } from '../Avatar/Avatar.js'

const createNavbarLink = ({ icon, label }, activeLink) => {
  return createButton({
    label,
    variant: 'default',
    noBorder: true,
    active: activeLink === label,
    icon,
    inlineIconWithLabel: true,
  }).outerHTML
}

export const createNavbar = ({
  style = 'default',
  brand = true,
  justify = 'start',
  activeLink = 'Inbox',
  onlyBrand = false,
}) => {
  const element = 'div'

  const body = document.createElement(element)

  body.className = 'app-body'
  body.style.height = '40rem'

  const brandSection = brand
    ? `
      <a class="navbar__brand" href="/">
        <img src="https://rolemodelsoftware.com/assets/rolemodel-logo--blue-29fb1367cab78181f9fb9756064de7d6f0e57e0c0280add196d3659bfa45b0fd.svg">
      </a>
  `
    : ''

  let links = [
    { type: 'link', icon: 'inbox', label: 'Inbox' },
    { type: 'link', icon: 'send', label: 'Outbox' },
    { type: 'link', icon: 'favorite', label: 'Favorite' },
    { type: 'link', icon: 'blur_on', label: 'Something' },
  ]

  let avatarSection = `
  <div class="navbar__content">
    ${createAvatar({ size: 'medium' }).outerHTML}
  </div>
`

  if (onlyBrand) {
    links = []
    avatarSection = ''
  }

  const navbarClasses = ['navbar', style !== 'default' ? `navbar--${style}` : ''].filter(Boolean).join(' ')

  body.innerHTML += `
  <div class="app__header">
    <div class="${navbarClasses}">
      ${brandSection}
      <nav class="navbar__content navbar__content--justify-${justify}">
        ${links.map((item) => createNavbarLink(item, activeLink)).join('\n        ')}
      </nav>
      ${avatarSection}
    </div>
  </div>
`
  return body
}
