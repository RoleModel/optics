import{a as e,i as t}from"./preload-helper-xPQekRTU.js";import{n,t as r}from"./Navbar-DR_nmPxR.js";import{n as i,t as a}from"./SidePanel-DzcqZ_yO.js";import{n as o,t as s}from"./Sidebar-DKndtIm-.js";import{n as c,t as l}from"./Spinner-B4m-cIPm.js";var u,d,f,p,m,h,g,_,v,y=t((()=>{o(),n(),c(),i(),u=()=>`
<div class='app-body' style="height: 80rem;"> <!-- This class should be on body. Inline styles are for demo purposes -->
  <!-- Alert Flash message here -->
  <!-- Confirm here -->
  <!-- Modal here -->
  <!-- Panel here -->
  <div class='app__header'>Header</div>
  <div class='app__content'>Content</div>
  <div class='app__footer'>Footer</div>
</div>
`,d=()=>`
<div class='app-body items-center justify-center' style="height: 80rem;"> <!-- These classes should be on body. Inline styles are for demo purposes -->
  ${l({size:`large`}).outerHTML}
</div>
    `,f=e=>{let t=(e,t)=>s({style:e,size:t,brand:!0,position:`start`,activeLink:`Home`,logout:!1,trailingDiv:!1}).innerHTML;return`
<div class='app-with-sidebar' style="height: 40rem;"> <!-- This class should be on body. Inline styles are for demo purposes -->
  <!-- Alert Flash message here -->
  <!-- Confirm here -->
  <!-- Modal here -->
  <!-- Panel here -->
  ${t(`default`,`drawer`)}
  <div class='app-body'>
    <div class='app__header'>Header</div>
    <div class='app__content'>
      ${Array.from(Array(16)).map(e=>`<p>Some content</p>`).join(`
`)}
    </div>
    <div class='app__footer'>Footer</div>
  </div>
  ${e?t(`primary`,`rail`):``}
</div>
`},p=()=>`
<div class='app-body' style="height: 40rem;"> <!-- This class should be on body. Inline styles are for demo purposes -->
  <!-- Alert Flash message here -->
  <!-- Confirm here -->
  <!-- Modal here -->
  <!-- Panel here -->
  ${r({style:`default`}).innerHTML}
  <div class='app__content'>Content</div>
  <div class='app__footer'>Footer</div>
</div>
`,m=()=>`
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
  ${s({style:`default`,size:`drawer`,brand:!0,position:`start`,activeLink:`Home`,logout:!1,trailingDiv:!1}).innerHTML}
  <div class='app-body'>
    ${r({style:`default`}).innerHTML}
    <div class='app__content-wrapper'> <!-- See style block above -->
      <div class='app__content-no-margin'>
        ${Array.from(Array(16)).map(e=>`<p>Some content</p>`).join(`
`)}
      </div>
      ${a({border:`both`,sections:20,showDividers:!0,sectionPadding:`all`,includeDemoWrapper:!1}).outerHTML}
    </div>
    <div class='app__footer'>Footer</div>
  </div>
</div>
`,h=()=>`
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
  ${r({style:`default`,onlyBrand:!0}).innerHTML}
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
`,g=()=>`
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
`,_=()=>`
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
`,v=({style:e=`basic`,rightSidebar:t=!1})=>e===`basic`?u():e===`spinner`?d():e===`sidebar`?f(t):e===`navbar`?p():e===`sidepanel`?m():e===`login`?h():e===`utility`?g():e===`card-grid`?_():`<div></div>`})),b=e({Basic:()=>S,CardGrid:()=>A,FullScreenSpinner:()=>E,Login:()=>O,Navbar:()=>w,Sidebar:()=>C,SidebarAndRight:()=>T,SidebarWithNavbarAndSidePanel:()=>D,Utility:()=>k,__namedExportsOrder:()=>j,default:()=>x}),x,S,C,w,T,E,D,O,k,A,j,M=t((()=>{y(),x={title:`Recipes/Layout`,render:({...e})=>v({...e}),argTypes:{style:{control:{type:`select`},options:[`basic`,`sidebar`,`navbar`,`spinner`,`sidepanel`,`login`,`utility`,`card-grid`]},rightSidebar:{control:{type:`boolean`},if:{arg:`style`,eq:`sidebar`}}},parameters:{layout:`fullscreen`}},S={args:{style:`basic`}},C={args:{style:`sidebar`}},w={args:{style:`navbar`}},T={args:{style:`sidebar`,rightSidebar:!0}},E={args:{style:`spinner`}},D={args:{style:`sidepanel`}},O={args:{style:`login`}},k={args:{style:`utility`}},A={args:{style:`card-grid`}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    style: 'basic'
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    style: 'sidebar'
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    style: 'navbar'
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    style: 'sidebar',
    rightSidebar: true
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    style: 'spinner'
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    style: 'sidepanel'
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    style: 'login'
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    style: 'utility'
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    style: 'card-grid'
  }
}`,...A.parameters?.docs?.source}}},j=[`Basic`,`Sidebar`,`Navbar`,`SidebarAndRight`,`FullScreenSpinner`,`SidebarWithNavbarAndSidePanel`,`Login`,`Utility`,`CardGrid`]}));M();export{S as Basic,A as CardGrid,E as FullScreenSpinner,O as Login,w as Navbar,C as Sidebar,T as SidebarAndRight,D as SidebarWithNavbarAndSidePanel,k as Utility,j as __namedExportsOrder,x as default,M as n,b as t};