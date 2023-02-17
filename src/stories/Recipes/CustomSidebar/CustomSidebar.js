const domainsSidebar = (style) => {
  return `
<div class="sidebar-domains sidebar--${style}">
  <a class="sidebar__brand" href="/">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Globe_icon.svg/2048px-Globe_icon.svg.png">
  </a>
  <div class="sidebar__content">
    <a class="sidebar__item" href="/">
      <span class="material-symbols-outlined sidebar__item-icon" title="search">search</span>
      <div class='sidebar__item-label'>Get a new domain</div>
    </a>
    <a class="sidebar__item active" href="/">
      <span class="material-symbols-outlined sidebar__item-icon" title="list">list</span>
      <div class='sidebar__item-label'>My domains</div>
    </a>
    <a class="sidebar__item" href="/">
      <span class="material-symbols-outlined sidebar__item-icon" title="swap_horizontal_circle">swap_horizontal_circle</span>
      <div class='sidebar__item-label'>Transfer</div>
    </a>
    <a class="sidebar__item" href="/">
      <span class="material-symbols-outlined sidebar__item-icon" title="credit_card">credit_card</span>
      <div class='sidebar__item-label'>Billing</div>
    </a>
    <a class="sidebar__item" href="/">
      <span class="material-symbols-outlined sidebar__item-icon" title="perm_identity">perm_identity</span>
      <div class='sidebar__item-label'>Account</div>
    </a>

    <div class="sidebar__section-divider"></div>

    <a class="sidebar__item" href="/">
      <span class="material-symbols-outlined sidebar__item-icon" title="feedback">feedback</span>
      <div class='sidebar__item-label'>Send feedback</div>
    </a>
    <a class="sidebar__item" href="/">
      <span class="material-symbols-outlined sidebar__item-icon" title="help">help</span>
      <div class='sidebar__item-label'>Help and support</div>
    </a>
    <a class="sidebar__item" href="/">
      <span class="material-symbols-outlined sidebar__item-icon" title="flag">flag</span>
      <div class='sidebar__item-label'>United States (US $)</div>
    </a>
  </div>

  <div class="sidebar__content sidebar__content--end">
    <div class="flex justify-around items-center flex-wrap">
      <a href="/">Privacy</a>
      <a href="/">Terms</a>
    </div>
  </div>
</div>
`
}

const fifteenFiveSidebar = (style) => {
  return `
<div class="sidebar-16six sidebar--${style}">
  <a class="sidebar__brand" href="/">
    <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" rx="8" fill="#FFFFFF"/></rect>
    </svg>
    <div class='sidebar__brand-label'>
      <span>16Six</span>
      <span>RoleModel Software</span>
    </div>
  </a>
  <div class="sidebar__content">
    <a class="sidebar__item active" href="/">
      <span class="material-symbols-outlined sidebar__item-icon" title="home">home</span>
      <div class='sidebar__item-label'>Home</div>
    </a>
    <a class="sidebar__item" href="/">
      <span class="material-symbols-outlined sidebar__item-icon" title="edit_document">edit_document</span>
      <div class='sidebar__item-label'>Check-ins</div>
    </a>
    <a class="sidebar__item" href="/">
      <span class="material-symbols-outlined sidebar__item-icon" title="chat">chat</span>
      <div class='sidebar__item-label'>1-on-1s</div>
    </a>
    <a class="sidebar__item" href="/">
      <span class="material-symbols-outlined sidebar__item-icon" title="hand_gesture">hand_gesture</span>
      <div class='sidebar__item-label'>High Fives</div>
    </a>
    <a class="sidebar__item" href="/">
      <span class="material-symbols-outlined sidebar__item-icon" title="track_changes">track_changes</span>
      <div class='sidebar__item-label'>Objectives</div>
    </a>
    <a class="sidebar__item" href="/">
      <span class="material-symbols-outlined sidebar__item-icon" title="explore">explore</span>
      <div class='sidebar__item-label'>Career Hub</div>
    </a>
    <a class="sidebar__item" href="/">
      <span class="material-symbols-outlined sidebar__item-icon" title="summarize">summarize</span>
      <div class='sidebar__item-label'>Mentoring Reviews</div>
    </a>
    <a class="sidebar__item" href="/">
      <span class="material-symbols-outlined sidebar__item-icon" title="insert_chart">insert_chart</span>
      <div class='sidebar__item-label'>Reporting</div>
    </a>
  </div>

  <div class="sidebar__content sidebar__content--end">
    <a class="sidebar__item" href="/">
      <span class="material-symbols-outlined sidebar__item-icon sidebar__item-icon--rotated" title="expand_circle_down">expand_circle_down</span>
      <div class='sidebar__item-label'>Collapse</div>
    </a>
  </div>
</div>
`
}

export const createCustomSidebar = ({ example = 'domains', style = 'drawer' }) => {
  const sidebar = () => {
    return example === 'domains' ? domainsSidebar(style) : fifteenFiveSidebar(style)
  }

  return `
<div class='app-with-sidebar' style="height: 80rem;"> <!-- This class should be on body. Height is for demo purposed -->
  ${sidebar()}
  <div class='app-body'>
    <div class='app__header background-primary-plus-seven'>Header</div>
    <div class='app__content'>
      ${Array.from(Array(16))
        .map((_item) => '<p>Some content</p>')
        .join('\n')}
    </div>
    <div class='app__footer background-primary-plus-seven'>Footer</div>
  </div>
</div>
`
}
