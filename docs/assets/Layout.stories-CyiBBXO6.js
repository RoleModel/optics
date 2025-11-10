import{c as p}from"./Sidebar-C3e2IrBN.js";import{c as l}from"./Navbar-D2L6_8pq.js";import{c as m}from"./Spinner-ypR4bq0p.js";import{c as b}from"./SidePanel-Dk0u1Nrs.js";const y=()=>`
<div class='app-body' style="height: 80rem;"> <!-- This class should be on body. Height is for demo purposed -->
  <!-- Alert Flash message here -->
  <!-- Confirm here -->
  <!-- Modal here -->
  <!-- Panel here -->
  <div class='app__header'>Header</div>
  <div class='app__content'>Content</div>
  <div class='app__footer'>Footer</div>
</div>
`,h=()=>`
<div class='app-body items-center justify-center' style="height: 80rem;"> <!-- These classes should be on body. Height is for demo purposed -->
  ${m({size:"large"}).outerHTML}
</div>
    `,g=e=>{const d=(c,u)=>p({style:c,size:u,brand:!0,position:"start",activeLink:"Home",logout:!1,trailingDiv:!1}).innerHTML;return`
<div class='app-with-sidebar' style="height: 40rem;"> <!-- This class should be on body. Height is for demo purposed -->
  <!-- Alert Flash message here -->
  <!-- Confirm here -->
  <!-- Modal here -->
  <!-- Panel here -->
  ${d("default","drawer")}
  <div class='app-body'>
    <div class='app__header'>Header</div>
    <div class='app__content'>
      ${Array.from(Array(16)).map(c=>"<p>Some content</p>").join(`
`)}
    </div>
    <div class='app__footer'>Footer</div>
  </div>
  ${e?d("primary","rail"):""}
</div>
`},v=()=>`
<div class='app-body' style="height: 40rem;"> <!-- This class should be on body. Height is for demo purposed -->
  <!-- Alert Flash message here -->
  <!-- Confirm here -->
  <!-- Modal here -->
  <!-- Panel here -->
  ${l({style:"default"}).innerHTML}
  <div class='app__content'>Content</div>
  <div class='app__footer'>Footer</div>
</div>
`,f=()=>`
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
  ${p({style:"default",size:"drawer",brand:!0,position:"start",activeLink:"Home",logout:!1,trailingDiv:!1}).innerHTML}
  <div class='app-body'>
    ${l({style:"default"}).innerHTML}
    <div class='app__content-wrapper'> <!-- See style block above -->
      <div class='app__content-no-margin'>
        ${Array.from(Array(16)).map(e=>"<p>Some content</p>").join(`
`)}
      </div>
      ${b({border:"both",sections:20,showDividers:!0,sectionPadding:"all",includeDemoWrapper:!1}).outerHTML}
    </div>
    <div class='app__footer'>Footer</div>
  </div>
</div>
`,_=()=>`
<style>
  /* These classes are not included by Optics, but you can create them easily. */
  .app__login {
    margin: calc(2 * var(--op-space-4x-large)) auto auto;
    padding-inline: var(--op-space-large);
    width: 100%;
    max-width: calc(116 * var(--op-size-unit));
  }

  /* This could also be its own card variant */
  .card--login {
    .card__header {
      display: flex;
      justify-content: center;
    }

    .card__header img {
      width: calc(23 * var(--op-size-unit));
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
  ${l({style:"default",onlyBrand:!0}).innerHTML}
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
`,S=({style:e="basic",rightSidebar:d=!1})=>e==="basic"?y():e==="spinner"?h():e==="sidebar"?g(d):e==="navbar"?v():e==="sidepanel"?f():e==="login"?_():"<div></div>",w={title:"Recipes/Layout",render:({...e})=>S({...e}),argTypes:{style:{control:{type:"select"},options:["basic","sidebar","navbar","spinner","sidepanel","login"]},rightSidebar:{control:{type:"boolean"},if:{arg:"style",eq:"sidebar"}}},parameters:{layout:"fullscreen"}},r={args:{style:"basic"}},a={args:{style:"sidebar"}},s={args:{style:"navbar"}},o={args:{style:"sidebar",rightSidebar:!0}},t={args:{style:"spinner"}},i={args:{style:"sidepanel"}},n={args:{style:"login"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    style: 'basic'
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    style: 'sidebar'
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    style: 'navbar'
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    style: 'sidebar',
    rightSidebar: true
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    style: 'spinner'
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    style: 'sidepanel'
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    style: 'login'
  }
}`,...n.parameters?.docs?.source}}};const L=["Basic","Sidebar","Navbar","SidebarAndRight","FullScreenSpinner","SidebarWithNavbarAndSidePanel","Login"],M=Object.freeze(Object.defineProperty({__proto__:null,Basic:r,FullScreenSpinner:t,Login:n,Navbar:s,Sidebar:a,SidebarAndRight:o,SidebarWithNavbarAndSidePanel:i,__namedExportsOrder:L,default:w},Symbol.toStringTag,{value:"Module"}));export{r as B,t as F,M as L,s as N,a as S,i as a,n as b};
