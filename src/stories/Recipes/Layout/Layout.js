import { createSidebar } from '../../Sidebar/Sidebar.js';

export const createLayout = ({
  style = 'basic',
  rightSidebar = false,
}) => {
  if (style === 'basic') {
    return `
<div class='app__main' style="height: 80rem;"> <!-- This class should be on body. Height is for demo purposed -->
  <!-- Flash message here -->
  <!-- Confirm here -->
  <!-- Modal here -->
  <!-- Panel here -->
  <div class='page__header background-primary-plus-3'>Header</div>
  <div class='page__content'>Content</div>
  <div class='page__footer background-primary-plus-3'>Footer</div>
</div>
`
  }

  if (style === 'sidebar') {
    const sidebar = (style, size) => {
      return createSidebar({
        style,
        size,
        brand: true,
        position: 'start',
        activeLink: 'Home',
        logout: false,
        trailingDiv: false,
      }).innerHTML
    }

    return `
<div class='app-wrapper' style="height: 40rem;"> <!-- This class should be on body. Height is for demo purposed -->
  <!-- Flash message here -->
  <!-- Confirm here -->
  <!-- Modal here -->
  <!-- Panel here -->
  ${sidebar('default', 'drawer')}
  <div class='app__main'>
    <div class='page__header background-primary-plus-3'>Header</div>
    <div class='page__content'>
      ${Array.from(Array(16)).map(_item => '<p>Some content</p>').join("\n") }
    </div>
    <div class='page__footer background-primary-plus-3'>Footer</div>
  </div>
  ${rightSidebar ? sidebar('subtle-primary', 'rail') : ''}
</div>
`
  }

  return `<div></div>`
};
