import { createSidebar } from '../../Components/Sidebar/Sidebar.js'
import { createNavbar } from '../../Components/Navbar/Navbar.js'
import { createSpinner } from '../../Components/Spinner/Spinner.js'
import { createSidePanel } from '../../Components/SidePanel/SidePanel.js'

const createBasicLayout = () => {
  return `
<div class='app-body' style="height: 80rem;"> <!-- This class should be on body. Inline styles are for demo purposes -->
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
<div class='app-body items-center justify-center' style="height: 80rem;"> <!-- These classes should be on body. Inline styles are for demo purposes -->
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
<div class='app-with-sidebar' style="height: 40rem;"> <!-- This class should be on body. Inline styles are for demo purposes -->
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
<div class='app-body' style="height: 40rem;"> <!-- This class should be on body. Inline styles are for demo purposes -->
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
<div class='app-with-sidebar' style="height: 60rem;"> <!-- This class should be on body. Inline styles are for demo purposes -->
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
<div class='app-body' style="height: 80rem;"> <!-- This class should be on body. Inline styles are for demo purposes -->
  <!-- Alert Flash message here -->
  <!-- Confirm here -->
  <!-- Modal here -->
  <!-- Panel here -->
  ${createNavbar({ style: 'default', onlyBrand: true }).innerHTML}
  <div class='app__login'> <!-- See style block above -->
    <form class='card card--login'> <!-- See style block above -->
      <div class='card__header'>
        <img src="./public/rms-logo.svg" alt="RoleModel Software Logo" />
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

const createUtilityLayout = () => {
  return `
<div class='app-body' style="height: 80rem;"> <!-- This class should be on body. Inline styles are for demo purposes -->
  <!-- Alert Flash message here -->
  <!-- Confirm here -->
  <!-- Modal here -->
  <!-- Panel here -->
  <div class='app__content' style="padding: var(--op-space-large);"> <!-- Padding is for demo only, don't write inline styles -->
    <div class='op-stack'>
    <h3>Timeline with Icons</h3>
      <div class='op-stack'>
        <div class='op-split gap-sm'>
          <div class='op-flank'>
            <div class="avatar avatar--medium">
              <img src="https://images.unsplash.com/photo-1542382689-217623cad37c" alt="Squirrel">
            </div>
            <div class='text-pair gap-xxs'>
              <span class='text-pair__title'>Squirrel</span>
              <span class='text-pair__subtitle'>Animal</span>
            </div>
          </div>
          <span class='text-right'>Mar 31</span>
        </div>
        <div class='divider'></div>
        <div class='op-split gap-sm'>
          <div class='op-cluster'>
            <span class='material-symbols-outlined icon icon--x-large'>eco</span>
            <span>
              Germinated in
              <strong>nutrient-rich soil</strong>
            </span>
          </div>
          <span class='text-right'>May 28</span>
        </div>
        <div class='divider'></div>
        <div class='op-split gap-sm'>
          <div class='op-cluster'>
            <span class='material-symbols-outlined icon icon--x-large'>forest</span>
            <span>
              Matured by
              <strong>water</strong>
              and
              <strong>sunlight</strong>
            </span>
          </div>
          <span class='text-right'>Sep 14</span>
        </div>
      </div>
    </div>

    <div class='divider divider--spacing-large'></div>

    <!-- Without the stack, cluster, split, and flank utilities, this would look like: -->
    <div class='flex flex-col gap-md'>
      <h3>Timeline with Icons</h3>
      <div class='flex justify-between gap-sm'>
        <div class='flex flex-wrap gap-md'>
          <div class="avatar avatar--medium">
            <img src="https://images.unsplash.com/photo-1542382689-217623cad37c" alt="Squirrel">
          </div>
          <div class='flex-grow-1'>
            <div class='text-pair gap-xxs'>
              <span class='text-pair__title'>Squirrel</span>
              <span class='text-pair__subtitle'>Animal</span>
            </div>
          </div>
        </div>
        <span class='text-right'>Mar 31</span>
      </div>
      <div class='divider'></div>
      <div class='flex justify-between gap-sm'>
        <div class='flex flex-wrap gap-sm'>
          <span class='material-symbols-outlined icon icon--x-large'>eco</span>
          <span>
            Germinated in
            <strong>nutrient-rich soil</strong>
          </span>
        </div>
        <span class='text-right'>May 28</span>
      </div>
      <div class='divider'></div>
      <div class='flex justify-between gap-sm'>
        <div class='flex flex-wrap gap-sm'>
          <span class='material-symbols-outlined icon icon--x-large'>forest</span>
          <span>
            Matured by
            <strong>water</strong>
            and
            <strong>sunlight</strong>
          </span>
        </div>
        <span class='text-right'>Sep 14</span>
      </div>
    </div>
  </div>
</div>
`
}

const createCardGridLayout = () => {
  return `
<div class='app-body' style="height: 80rem;"> <!-- This class should be on body. Inline styles are for demo purposes -->
  <!-- Alert Flash message here -->
  <!-- Confirm here -->
  <!-- Modal here -->
  <!-- Panel here -->
  <div class='app__content' style="padding: var(--op-space-large);"> <!-- Padding is for demo only, don't write inline styles -->
    <div class='op-grid op-grid--2-column'>
      <div class='card'>
        <div class='op-frame op-frame--landscape'>
          <img src='https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9' alt='Clint' />
        </div>
        <div class='card__header'>
          <div class='text-pair'>
            <span class='text-pair__title'>Clint</span>
            <span class='text-pair__subtitle'>Dog · Male</span>
          </div>
        </div>
      </div>

      <div class='card'>
        <div class='op-frame op-frame--landscape'>
          <div class='text-pair items-center'>
            <span class='text-pair__title'>
              <span class='material-symbols-outlined icon'>photo</span>
            </span>
            <span class='text-pair__subtitle'>Coming soon</span>
          </div>
        </div>
        <div class='card__header'>
          <div class='text-pair'>
            <span class='text-pair__title'>Daisy</span>
            <span class='text-pair__subtitle'>Dog · Female</span>
          </div>
        </div>
      </div>

      <div class='card'>
        <div class='op-frame op-frame--landscape'>
          <img src='https://images.unsplash.com/photo-1510771463146-e89e6e86560e' alt='June' />
        </div>
        <div class='card__header'>
          <div class='text-pair'>
            <span class='text-pair__title'>June</span>
            <span class='text-pair__subtitle'>Dog · Female</span>
          </div>
        </div>
      </div>

      <div class='card'>
        <div class='op-frame op-frame--landscape'>
          <img src='https://images.unsplash.com/photo-1505628346881-b72b27e84530?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='Wallace' />
        </div>
        <div class='card__header'>
          <div class='text-pair'>
            <span class='text-pair__title'>Wallace</span>
            <span class='text-pair__subtitle'>Dog · Male</span>
          </div>
        </div>
      </div>
    </div>
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

  if (style === 'utility') {
    return createUtilityLayout()
  }

  if (style === 'card-grid') {
    return createCardGridLayout()
  }

  return `<div></div>`
}
