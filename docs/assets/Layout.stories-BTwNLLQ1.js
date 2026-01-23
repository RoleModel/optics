import{c as u}from"./Sidebar-DUbgHgd7.js";import{c}from"./Navbar-C-JTaE4V.js";import{c as g}from"./Spinner-ypR4bq0p.js";import{c as v}from"./SidePanel-Dk0u1Nrs.js";const b=()=>`
<div class='app-body' style="height: 80rem;"> <!-- This class should be on body. Height is for demo purposed -->
  <!-- Alert Flash message here -->
  <!-- Confirm here -->
  <!-- Modal here -->
  <!-- Panel here -->
  <div class='app__header'>Header</div>
  <div class='app__content'>Content</div>
  <div class='app__footer'>Footer</div>
</div>
`,y=()=>`
<div class='app-body items-center justify-center' style="height: 80rem;"> <!-- These classes should be on body. Height is for demo purposed -->
  ${g({size:"large"}).outerHTML}
</div>
    `,h=e=>{const d=(p,m)=>u({style:p,size:m,brand:!0,position:"start",activeLink:"Home",logout:!1,trailingDiv:!1}).innerHTML;return`
<div class='app-with-sidebar' style="height: 40rem;"> <!-- This class should be on body. Height is for demo purposed -->
  <!-- Alert Flash message here -->
  <!-- Confirm here -->
  <!-- Modal here -->
  <!-- Panel here -->
  ${d("default","drawer")}
  <div class='app-body'>
    <div class='app__header'>Header</div>
    <div class='app__content'>
      ${Array.from(Array(16)).map(p=>"<p>Some content</p>").join(`
`)}
    </div>
    <div class='app__footer'>Footer</div>
  </div>
  ${e?d("primary","rail"):""}
</div>
`},f=()=>`
<div class='app-body' style="height: 40rem;"> <!-- This class should be on body. Height is for demo purposed -->
  <!-- Alert Flash message here -->
  <!-- Confirm here -->
  <!-- Modal here -->
  <!-- Panel here -->
  ${c({style:"default"}).innerHTML}
  <div class='app__content'>Content</div>
  <div class='app__footer'>Footer</div>
</div>
`,_=()=>`
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
  ${u({style:"default",size:"drawer",brand:!0,position:"start",activeLink:"Home",logout:!1,trailingDiv:!1}).innerHTML}
  <div class='app-body'>
    ${c({style:"default"}).innerHTML}
    <div class='app__content-wrapper'> <!-- See style block above -->
      <div class='app__content-no-margin'>
        ${Array.from(Array(16)).map(e=>"<p>Some content</p>").join(`
`)}
      </div>
      ${v({border:"both",sections:20,showDividers:!0,sectionPadding:"all",includeDemoWrapper:!1}).outerHTML}
    </div>
    <div class='app__footer'>Footer</div>
  </div>
</div>
`,S=()=>`
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
  ${c({style:"default",onlyBrand:!0}).innerHTML}
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
`,x=()=>`
<div class='app-body' style="height: 80rem;"> <!-- This class should be on body. Height is for demo purposed -->
  <!-- Alert Flash message here -->
  <!-- Confirm here -->
  <!-- Modal here -->
  <!-- Panel here -->
  <div class='app__content'>
    <div class='op-stack'>
      <h3>Timeline with Icons</h3>
      <div class='op-stack'>
        <div class='op-split gap-sm'>
          <div class='op-cluster'>
            <span class='material-symbols-outlined icon icon--x-large'>nature</span>
            <span>
              Buried by
              <strong>Squirrel</strong>
            </span>
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

    <!-- Without the stack, cluster, and split utilities, this would look like: -->
    <div class='flex flex-col gap-md'>
      <h3>Timeline with Icons</h3>
      <div class='flex justify-between gap-sm'>
        <div class='flex flex-wrap gap-sm'>
          <span class='material-symbols-outlined icon icon--x-large'>nature</span>
          <span>
            Buried by
            <strong>squirrel</strong>
          </span>
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
`,w=({style:e="basic",rightSidebar:d=!1})=>e==="basic"?b():e==="spinner"?y():e==="sidebar"?h(d):e==="navbar"?f():e==="sidepanel"?_():e==="login"?S():e==="utility"?x():"<div></div>",L={title:"Recipes/Layout",render:({...e})=>w({...e}),argTypes:{style:{control:{type:"select"},options:["basic","sidebar","navbar","spinner","sidepanel","login","utility"]},rightSidebar:{control:{type:"boolean"},if:{arg:"style",eq:"sidebar"}}},parameters:{layout:"fullscreen"}},s={args:{style:"basic"}},a={args:{style:"sidebar"}},r={args:{style:"navbar"}},i={args:{style:"sidebar",rightSidebar:!0}},t={args:{style:"spinner"}},o={args:{style:"sidepanel"}},n={args:{style:"login"}},l={args:{style:"utility"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    style: 'basic'
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    style: 'sidebar'
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    style: 'navbar'
  }
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    style: 'sidebar',
    rightSidebar: true
  }
}`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    style: 'spinner'
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    style: 'sidepanel'
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    style: 'login'
  }
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    style: 'utility'
  }
}`,...l.parameters?.docs?.source}}};const M=["Basic","Sidebar","Navbar","SidebarAndRight","FullScreenSpinner","SidebarWithNavbarAndSidePanel","Login","Utility"],P=Object.freeze(Object.defineProperty({__proto__:null,Basic:s,FullScreenSpinner:t,Login:n,Navbar:r,Sidebar:a,SidebarAndRight:i,SidebarWithNavbarAndSidePanel:o,Utility:l,__namedExportsOrder:M,default:L},Symbol.toStringTag,{value:"Module"}));export{s as B,t as F,P as L,r as N,a as S,l as U,o as a,n as b};
