export const createNavigationRail = ({
  style = 'default',
  brand = true,
  position = 'start',
  activeLink = 'Home',
  logout = false,
  trailingDiv = true,
}) => {
  const element = 'div'

  const body = document.createElement(element);

  body.className = 'app-wrapper'
  body.style.height = '80rem'

  const brandSection = brand ? `
    <a class="sidebar__brand" href="/">
      <img src="https://rolemodelsoftware.com/packs/media/images/rolemodel-logo--blue-4eb2301367b75bba352fe6ca9155b154.svg">
    </a>
  ` : ''

  const links = [
    ['home', 'Home'],
    ['apps', 'Get started'],
    ['code', 'Develop'],
    ['refresh'],
    ['book', 'Foundations'],
    ['palette', 'Styles'],
    ['add_circle', 'Components'],
  ]

  body.innerHTML += `
  <div class="${style === 'default' ? 'sidebar' : `sidebar-${style}`} sidebar--rail">
    ${brandSection}
    <div class="sidebar__content sidebar__content--${position}">
      ${links.map(([icon, label]) => {
        return `
      <a class="sidebar__item ${activeLink === label ? 'active' : ''}" href="/">
        <span class="material-symbols-outlined sidebar__item-icon" title="${icon}">${icon}</span>
        ${label ? `<div class='sidebar__item-label'>${label}</div>` : ''}
      </a>
        `
      }).join('')}
    </div>

    ${logout ? `
      <div class="sidebar__content sidebar__content--end">
        <a class="sidebar__item" href="/">
          <span class="material-symbols-outlined sidebar__item-icon" title="logout">logout</span>
          <div class='sidebar__item-label'>Logout</div>
        </a>
      </div>
    ` : ''}
  </div>
  ${trailingDiv ? '<div></div>' : ''}
`

  return body;
};
