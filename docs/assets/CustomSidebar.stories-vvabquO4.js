const b=a=>`
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
`,c=a=>`
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
`,p=({example:a="domains",style:r="drawer"})=>`
<div class='app-with-sidebar' style="height: 80rem;"> <!-- This class should be on body. Height is for demo purposed -->
  ${a==="domains"?b(r):c(r)}
  <div class='app-body'>
    <div class='app__header background-primary-plus-seven'>Header</div>
    <div class='app__content'>
      ${Array.from(Array(16)).map(_=>"<p>Some content</p>").join(`
`)}
    </div>
    <div class='app__footer background-primary-plus-seven'>Footer</div>
  </div>
</div>
`,m={title:"Recipes/Custom Sidebar",render:({...a})=>p({...a}),argTypes:{example:{control:{type:"select"},options:["domains","16six"]},style:{control:{type:"select"},options:["drawer","rail"]}},parameters:{layout:"fullscreen"}},s={args:{example:"domains",style:"drawer"}},e={args:{example:"16six",style:"drawer"}};var n,t,i;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    example: 'domains',
    style: 'drawer'
  }
}`,...(i=(t=s.parameters)==null?void 0:t.docs)==null?void 0:i.source}}};var o,l,d;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    example: '16six',
    style: 'drawer'
  }
}`,...(d=(l=e.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const u=["Domains","SixteenSix"],v=Object.freeze(Object.defineProperty({__proto__:null,Domains:s,SixteenSix:e,__namedExportsOrder:u,default:m},Symbol.toStringTag,{value:"Module"}));export{v as C,s as D,e as S};
