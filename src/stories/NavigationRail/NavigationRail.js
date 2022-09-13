export const createNavigationRail = ({
  style = 'default',
  brand = true,
  position = 'start',
  activeLink = 'Home',
  logout = false,
}) => {
  const element = 'div'

  const body = document.createElement(element);

  body.className = 'flex'
  body.style.height = '80rem'

  const brandSection = brand ? `
    <a class="navigation-rail__brand" href="/">
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
  <div class="${style === 'default' ? 'navigation-rail' : `navigation-rail-${style}`}">
    ${brandSection}
    <div class="navigation-rail__content navigation-rail__content--${position}">
      ${links.map(([icon, label]) => {
        return `
      <a class="navigation-rail__item ${activeLink === label ? 'active' : ''}" href="/">
        <span class="material-symbols-outlined navigation-rail__item-icon" title="${icon}">${icon}</span>
        ${label ? `<div class='navigation-rail__item-label'>${label}</div>` : ''}
      </a>
        `
      }).join('')}
    </div>

    ${logout ? `
      <div class="navigation-rail__content navigation-rail__content--end">
        <a class="navigation-rail__item" href="/">
          <span class="material-symbols-outlined navigation-rail__item-icon" title="logout">logout</span>
          <div class='navigation-rail__item-label'>Logout</div>
        </a>
      </div>
    ` : ''}
  </div>
  <div></div>
`

  return body;
};
