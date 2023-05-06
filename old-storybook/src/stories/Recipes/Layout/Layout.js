import { createSidebar } from '../../Sidebar/Sidebar.js'

export const createLayout = ({ style = 'basic', rightSidebar = false }) => {
  if (style === 'basic') {
    return `
<div class='app-body' style="height: 80rem;"> <!-- This class should be on body. Height is for demo purposed -->
  <!-- Flash message here -->
  <!-- Confirm here -->
  <!-- Modal here -->
  <!-- Panel here -->
  <div class='app__header background-primary-plus-seven'>Header</div>
  <div class='app__content'>Content</div>
  <div class='app__footer background-primary-plus-seven'>Footer</div>
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
<div class='app-with-sidebar' style="height: 40rem;"> <!-- This class should be on body. Height is for demo purposed -->
  <!-- Flash message here -->
  <!-- Confirm here -->
  <!-- Modal here -->
  <!-- Panel here -->
  ${sidebar('default', 'drawer')}
  <div class='app-body'>
    <div class='app__header background-primary-plus-seven'>Header</div>
    <div class='app__content'>
      ${Array.from(Array(16))
        .map((_item) => '<p>Some content</p>')
        .join('\n')}
    </div>
    <div class='app__footer background-primary-plus-seven'>Footer</div>
  </div>
  ${rightSidebar ? sidebar('subtle-primary', 'rail') : ''}
</div>
`
  }

  return `<div></div>`
}
