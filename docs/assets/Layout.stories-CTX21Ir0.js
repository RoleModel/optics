import{c as j}from"./Sidebar-uxEogKJ-.js";import{c as l}from"./Navbar-GL3gM_Lw.js";import{c as N}from"./Spinner-ypR4bq0p.js";import{c as k}from"./SidePanel-BzSjo7kf.js";const z=()=>`
<div class='app-body' style="height: 80rem;"> <!-- This class should be on body. Height is for demo purposed -->
  <!-- Alert Flash message here -->
  <!-- Confirm here -->
  <!-- Modal here -->
  <!-- Panel here -->
  <div class='app__header'>Header</div>
  <div class='app__content'>Content</div>
  <div class='app__footer'>Footer</div>
</div>
`,B=()=>`
<div class='app-body items-center justify-center' style="height: 80rem;"> <!-- These classes should be on body. Height is for demo purposed -->
  ${N({size:"large"}).outerHTML}
</div>
    `,O=e=>{const d=(c,C)=>j({style:c,size:C,brand:!0,position:"start",activeLink:"Home",logout:!1,trailingDiv:!1}).innerHTML;return`
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
`},D=()=>`
<div class='app-body' style="height: 40rem;"> <!-- This class should be on body. Height is for demo purposed -->
  <!-- Alert Flash message here -->
  <!-- Confirm here -->
  <!-- Modal here -->
  <!-- Panel here -->
  ${l({style:"default"}).innerHTML}
  <div class='app__content'>Content</div>
  <div class='app__footer'>Footer</div>
</div>
`,E=()=>`
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
  ${j({style:"default",size:"drawer",brand:!0,position:"start",activeLink:"Home",logout:!1,trailingDiv:!1}).innerHTML}
  <div class='app-body'>
    ${l({style:"default"}).innerHTML}
    <div class='app__content-wrapper'> <!-- See style block above -->
      <div class='app__content-no-margin'>
        ${Array.from(Array(16)).map(e=>"<p>Some content</p>").join(`
`)}
      </div>
      ${k({border:"both",sections:20,showDividers:!0,sectionPadding:"all",includeDemoWrapper:!1}).outerHTML}
    </div>
    <div class='app__footer'>Footer</div>
  </div>
</div>
`,R=()=>`
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
        <img src="https://rolemodelsoftware.com/assets/rolemodel-logo--blue-5b7cee4303f5b115050586117bad8960640884812d1d51ee4b58817598c896da.svg" />
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
        <a href='#' class='btn-primary btn--no-border'>Forgot Password?</a>
        <button type='submit' class='btn-primary'>
          <span class='material-symbols-outlined'>logout</span>
          Sign In
        </button>
      </div>
    </form>
  </div>
</div>
`,W=({style:e="basic",rightSidebar:d=!1})=>e==="basic"?z():e==="spinner"?B():e==="sidebar"?O(d):e==="navbar"?D():e==="sidepanel"?E():e==="login"?R():"<div></div>",q={title:"Recipes/Layout",render:({...e})=>W({...e}),argTypes:{style:{control:{type:"select"},options:["basic","sidebar","navbar","spinner","sidepanel","login"]},rightSidebar:{control:{type:"boolean"},if:{arg:"style",eq:"sidebar"}}},parameters:{layout:"fullscreen"}},r={args:{style:"basic"}},a={args:{style:"sidebar"}},s={args:{style:"navbar"}},o={args:{style:"sidebar",rightSidebar:!0}},t={args:{style:"spinner"}},i={args:{style:"sidepanel"}},n={args:{style:"login"}};var p,u,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    style: 'basic'
  }
}`,...(m=(u=r.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var b,y,h;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    style: 'sidebar'
  }
}`,...(h=(y=a.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var g,v,f;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    style: 'navbar'
  }
}`,...(f=(v=s.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var _,S,w;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    style: 'sidebar',
    rightSidebar: true
  }
}`,...(w=(S=o.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var L,T,H;t.parameters={...t.parameters,docs:{...(L=t.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    style: 'spinner'
  }
}`,...(H=(T=t.parameters)==null?void 0:T.docs)==null?void 0:H.source}}};var A,F,M;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    style: 'sidepanel'
  }
}`,...(M=(F=i.parameters)==null?void 0:F.docs)==null?void 0:M.source}}};var P,x,$;n.parameters={...n.parameters,docs:{...(P=n.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    style: 'login'
  }
}`,...($=(x=n.parameters)==null?void 0:x.docs)==null?void 0:$.source}}};const I=["Basic","Sidebar","Navbar","SidebarAndRight","FullScreenSpinner","SidebarWithNavbarAndSidePanel","Login"],U=Object.freeze(Object.defineProperty({__proto__:null,Basic:r,FullScreenSpinner:t,Login:n,Navbar:s,Sidebar:a,SidebarAndRight:o,SidebarWithNavbarAndSidePanel:i,__namedExportsOrder:I,default:q},Symbol.toStringTag,{value:"Module"}));export{r as B,t as F,U as L,s as N,a as S,i as a,n as b};
