const n=a=>`
<nav class="sidebar sidebar--domains sidebar--padded sidebar--${a}">
  <a class="sidebar__brand" href="/">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Globe_icon.svg/2048px-Globe_icon.svg.png">
  </a>
  <div class="sidebar__content sidebar__content--start">
    <a class="btn btn--no-border btn--pill-right btn--active" href="/">
      <span class="material-symbols-outlined">search</span>
      Get a new Domain
    </a>
    <a class="btn btn--no-border btn--pill-right" href="/">
      <span class="material-symbols-outlined">list</span>
      My domains
    </a>
    <a class="btn btn--no-border btn--pill-right" href="/">
      <span class="material-symbols-outlined">swap_horizontal_circle</span>
      Transfer
    </a>
    <a class="btn btn--no-border btn--pill-right" href="/">
      <span class="material-symbols-outlined">credit_card</span>
      Billing
    </a>
    <a class="btn btn--no-border btn--pill-right" href="/">
      <span class="material-symbols-outlined">perm_identity</span>
      Account
    </a>

    <div class='divider divider--spacing-medium'></div>

    <a class="btn btn--no-border" href="/">
      <span class="material-symbols-outlined">feedback</span>
      Send Feedback
    </a>
    <a class="btn btn--no-border" href="/">
      <span class="material-symbols-outlined">help</span>
      Help and Support
    </a>
    <a class="btn btn--no-border" href="/">
      <span class="material-symbols-outlined">flag</span>
      United States (US $)
    </a>
  </div>

  <div class="sidebar__content sidebar__content--end">
    <div class="sidebar__footer">
      <a href="/">Privacy</a>
      <a href="/">Terms</a>
    </div>
  </div>
</nav>
`,t=a=>`
<nav class="sidebar sidebar--16six sidebar--padded sidebar--${a}">
  <a class="sidebar__brand" href="/">
    <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" rx="8" fill="#FFFFFF"/></rect>
    </svg>
    <div class='sidebar__brand-label'>
      <span>16Six</span>
      <span>RoleModel Software</span>
    </div>
  </a>
  <div class="sidebar__content sidebar__content--start">
    <a class="btn btn--no-border btn--active" href="/">
      <span class="material-symbols-outlined">home</span>
      Home
    </a>
    <a class="btn btn--no-border" href="/">
      <span class="material-symbols-outlined">edit_document</span>
      Check-ins
    </a>
    <a class="btn btn--no-border" href="/">
      <span class="material-symbols-outlined">chat</span>
      1-on-1s
    </a>
    <a class="btn btn--no-border" href="/">
      <span class="material-symbols-outlined">hand_gesture</span>
      High Fives
    </a>
    <a class="btn btn--no-border" href="/">
      <span class="material-symbols-outlined">track_changes</span>
      Objectives
    </a>
    <a class="btn btn--no-border" href="/">
      <span class="material-symbols-outlined">explore</span>
      Career Hub
    </a>
    <a class="btn btn--no-border" href="/">
      <span class="material-symbols-outlined">summarize</span>
      Mentoring Reviews
    </a>
    <a class="btn btn--no-border" href="/">
      <span class="material-symbols-outlined icon--rotated-135">join</span>
      Engagement
    </a>
    <a class="btn btn--no-border" href="/">
      <span class="material-symbols-outlined">insert_chart</span>
      Reporting
    </a>
  </div>

  <div class="sidebar__content sidebar__content--end">
    <a class="btn btn--no-border" href="/">
      <span class="material-symbols-outlined icon--rotated-90">expand_circle_down</span>
      Collapse
    </a>
  </div>
</nav>
`,i=({example:a="domains",style:r="drawer"})=>`
<div class='app-with-sidebar' style="height: 80rem;"> <!-- This class should be on body. Height is for demo purposed -->
  ${a==="domains"?n(r):t(r)}
  <div class='app-body'>
    <div class='app__header background-primary-plus-seven'>Header</div>
    <div class='app__content'>
      ${Array.from(Array(16)).map(b=>"<p>Some content</p>").join(`
`)}
    </div>
    <div class='app__footer background-primary-plus-seven'>Footer</div>
  </div>
</div>
`,o={title:"Recipes/Custom Sidebar",render:({...a})=>i({...a}),argTypes:{example:{control:{type:"select"},options:["domains","16six"]},style:{control:{type:"select"},options:["drawer","rail"]}},parameters:{layout:"fullscreen"}},s={args:{example:"domains",style:"drawer"}},e={args:{example:"16six",style:"drawer"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    example: 'domains',
    style: 'drawer'
  }
}`,...s.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    example: '16six',
    style: 'drawer'
  }
}`,...e.parameters?.docs?.source}}};const l=["Domains","SixteenSix"],c=Object.freeze(Object.defineProperty({__proto__:null,Domains:s,SixteenSix:e,__namedExportsOrder:l,default:o},Symbol.toStringTag,{value:"Module"}));export{c as C,s as D,e as S};
