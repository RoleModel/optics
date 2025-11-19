import { createSidebar } from '../../Components/Sidebar/Sidebar.js'
import { createNavbar } from '../../Components/Navbar/Navbar.js'
import { createSpinner } from '../../Components/Spinner/Spinner.js'
import { createSidePanel } from '../../Components/SidePanel/SidePanel.js'

const createBasicLayout = () => {
  return `
<div class='app-body' style="height: 80rem;"> <!-- This class should be on body. Height is for demo purposed -->
  <!-- Alert Flash message here -->
  <!-- Confirm here -->
  <!-- Modal here -->
  <!-- Panel here -->
  <div class='app__header'>Header</div>
  <div class='app__content'>Content</div>
  <div class='app__footer'>Footer</div>
</div>
`
}

const createSpinnerLayout = () => {
  const spinner = createSpinner({ size: 'large' }).outerHTML
  return `
<div class='app-body items-center justify-center' style="height: 80rem;"> <!-- These classes should be on body. Height is for demo purposed -->
  ${spinner}
</div>
    `
}

const createSidebarLayout = (rightSidebar) => {
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
  <!-- Alert Flash message here -->
  <!-- Confirm here -->
  <!-- Modal here -->
  <!-- Panel here -->
  ${sidebar('default', 'drawer')}
  <div class='app-body'>
    <div class='app__header'>Header</div>
    <div class='app__content'>
      ${Array.from(Array(16))
        .map((_item) => '<p>Some content</p>')
        .join('\n')}
    </div>
    <div class='app__footer'>Footer</div>
  </div>
  ${rightSidebar ? sidebar('primary', 'rail') : ''}
</div>
`
}

const createNavbarLayout = () => {
  return `
<div class='app-body' style="height: 40rem;"> <!-- This class should be on body. Height is for demo purposed -->
  <!-- Alert Flash message here -->
  <!-- Confirm here -->
  <!-- Modal here -->
  <!-- Panel here -->
  ${createNavbar({ style: 'default' }).innerHTML}
  <div class='app__content'>Content</div>
  <div class='app__footer'>Footer</div>
</div>
`
}

const createSidePanelLayout = () => {
  return `
<style>
  /* This class is not included by Optics, but you can create it easily. */
  .app__content-wrapper {
    display: flex;
    flex-grow: 1;
    overflow: auto;
  }
</style>
<div class='app-with-sidebar' style="height: 60rem;"> <!-- This class should be on body. Height is for demo purposed -->
  <!-- Alert Flash message here -->
  <!-- Confirm here -->
  <!-- Modal here -->
  <!-- Panel here -->
  ${
    createSidebar({
      style: 'default',
      size: 'drawer',
      brand: true,
      position: 'start',
      activeLink: 'Home',
      logout: false,
      trailingDiv: false,
    }).innerHTML
  }
  <div class='app-body'>
    ${createNavbar({ style: 'default' }).innerHTML}
    <div class='app__content-wrapper'> <!-- See style block above -->
      <div class='app__content-no-margin'>
        ${Array.from(Array(16))
          .map((_item) => '<p>Some content</p>')
          .join('\n')}
      </div>
      ${
        createSidePanel({
          border: 'both',
          sections: 20,
          showDividers: true,
          sectionPadding: 'all',
          includeDemoWrapper: false,
        }).outerHTML
      }
    </div>
    <div class='app__footer'>Footer</div>
  </div>
</div>
`
}

const createLoginLayout = () => {
  return `
<style>
  /* These classes are not included by Optics, but you can create them easily. */
  .app__login {
    margin-block-start: calc(2 * var(--op-space-4x-large));
    margin-inline: auto;
    padding-inline: var(--op-space-large);
    inline-size: 100%;
    max-inline-size: calc(116 * var(--op-size-unit));
  }

  /* This could also be its own card variant */
  .card--login {
    .card__header {
      display: flex;
      justify-content: center;
    }

    .card__header img {
      inline-size: calc(23 * var(--op-size-unit));
    }

    .card__body {
      padding-block: 0;
    }

    .card__footer {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: var(--op-space-x-small);
    }
  }
</style>
<div class='app-body' style="height: 80rem;"> <!-- This class should be on body. Height is for demo purposed -->
  <!-- Alert Flash message here -->
  <!-- Confirm here -->
  <!-- Modal here -->
  <!-- Panel here -->
  ${createNavbar({ style: 'default', onlyBrand: true }).innerHTML}
  <div class='app__login'> <!-- See style block above -->
    <form class='card card--login'> <!-- See style block above -->
      <div class='card__header'>
        <img src="https://rolemodelsoftware.com/assets/rolemodel-logo--blue-29fb1367cab78181f9fb9756064de7d6f0e57e0c0280add196d3659bfa45b0fd.svg" />
      </div>
      <div class='card__body'>
        <div class='form-group'>
          <label class='form-label' for='email'>Email Address</label>
          <input type='email' class='form-control' id='email' placeholder='Enter your email address' />
        </div>
        <div class='form-group'>
          <label class='form-label' for='password'>Password</label>
          <input type='password' class='form-control' id='password' placeholder='Enter your password' />
        </div>
      </div>
      <div class='card__footer'>
        <a href='#' class='btn btn--primary btn--no-border'>Forgot Password?</a>
        <button type='submit' class='btn btn--primary'>
          <span class='material-symbols-outlined'>logout</span>
          Sign In
        </button>
      </div>
    </form>
  </div>
</div>
`
}

export const createLayout = ({ style = 'basic', rightSidebar = false }) => {
  if (style === 'basic') {
    return createBasicLayout()
  }

  if (style === 'spinner') {
    return createSpinnerLayout()
  }

  if (style === 'sidebar') {
    return createSidebarLayout(rightSidebar)
  }

  if (style === 'navbar') {
    return createNavbarLayout()
  }

  if (style === 'sidepanel') {
    return createSidePanelLayout()
  }

  if (style === 'login') {
    return createLoginLayout()
  }

  return `<div></div>`
}
