import{a as e,i as t}from"./preload-helper-xPQekRTU.js";var n,r,i=t((()=>{n=()=>`
<style>
  .content-header.content-header--github-example {
    .content-header__subline {
      display: flex;
      align-items: center;
      gap: var(--op-space-2x-small);
      font-size: var(--op-font-x-small);
    }

    .content-header__title-number {
      color: var(--op-color-on-background-alt);
    }
  }
</style>
<header class="content-header content-header--github-example">
  <div class="content-header__details">
    <h1 class="content-header__title">
      Add details to sidebar documentation
      <span class="content-header__title-number">#265</span>
    </h1>
    <div class="content-header__subline">
      <span class="badge badge--primary badge--pill">
        <span class="material-symbols-outlined icon">graph_1</span>
        Merged
      </span>
      <strong>Jeremy-Walton</strong>
      <span>merged 1 commit into</span>
      <div class="badge">main</div>
      <span>from</span>
      <div class="badge">responsive-snippet</div>
      <a class="btn btn--no-border btn--icon btn--small" href="#">
        <span class="material-symbols-outlined icon">content_copy</span>
      </a>
      <span>on Jan 31</span>
    </div>
  </div>
  <div class="content-header__aside">
    <a class="btn btn--small" href="#">Edit</a>
    <a class="btn btn--small" href="#">
      <span class="material-symbols-outlined icon">code</span>
      Code
      <span class="material-symbols-outlined icon">arrow_drop_down</span>
    </a>
  </div>
</header>
`,r=({title:e=`Content Header`,showContext:t=!1,contextLabel:r=`Context Label`,showSubline:i=!1,sublineLabel:a=`Subline Label`,showAside:o=!1,asideExample:s=`actions`,githubExample:c=!1})=>{if(c)return n();let l=document.createElement(`header`);l.className=`content-header`;let u=``,d=``;if(t&&(u=`<span class='content-header__context'>${r}</span>`),i&&(d+=`<span class='content-header__subline'>${a}</span>`),l.innerHTML=`
  <div class='content-header__details'>
    ${u}
    <h1 class='content-header__title'>${e}</h1>
    ${d}
  </div>
  `,o){let e=document.createElement(`div`);e.className=`content-header__aside`,e.innerHTML=`
    <p>Aside text example</p>
  `,s===`actions`&&(e.innerHTML=`
    <button class="btn">Action 1</button>
    <button class="btn">Action 2</button>
  `),l.appendChild(e)}return l.innerHTML+=`
`,l}})),a=e({Default:()=>s,GitHub:()=>f,Simple:()=>d,WithAside:()=>u,WithContext:()=>c,WithSubline:()=>l,__namedExportsOrder:()=>p,default:()=>o}),o,s,c,l,u,d,f,p,m=t((()=>{i(),o={title:`Components/Content Header`,render:({title:e,...t})=>r({title:e,...t}),argTypes:{title:{control:`text`},showContext:{control:`boolean`},contextLabel:{if:{arg:`showContext`},control:`text`},showSubline:{control:`boolean`},sublineLabel:{if:{arg:`showSubline`},control:`text`},showAside:{control:`boolean`},asideExample:{if:{arg:`showAside`},control:{type:`select`},options:[`actions`,`text`]}},parameters:{layout:`padded`}},s={args:{title:`Content Header`,showContext:!0,contextLabel:`Context Label`,showSubline:!0,sublineLabel:`Subline Label`,showAside:!0,asideExample:`actions`}},c={args:{title:`Content Header`,showContext:!0,contextLabel:`Context Label`}},l={args:{title:`Content Header`,showSubline:!0,sublineLabel:`Subline Label`}},u={args:{title:`Content Header`,showAside:!0,asideExample:`actions`}},d={args:{title:`Only a Title`,showAside:!0,asideExample:`actions`}},f={args:{githubExample:!0}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Content Header',
    showContext: true,
    contextLabel: 'Context Label',
    showSubline: true,
    sublineLabel: 'Subline Label',
    showAside: true,
    asideExample: 'actions'
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Content Header',
    showContext: true,
    contextLabel: 'Context Label'
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Content Header',
    showSubline: true,
    sublineLabel: 'Subline Label'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Content Header',
    showAside: true,
    asideExample: 'actions'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Only a Title',
    showAside: true,
    asideExample: 'actions'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    githubExample: true
  }
}`,...f.parameters?.docs?.source}}},p=[`Default`,`WithContext`,`WithSubline`,`WithAside`,`Simple`,`GitHub`]}));m();export{s as Default,f as GitHub,d as Simple,u as WithAside,c as WithContext,l as WithSubline,p as __namedExportsOrder,o as default,m as n,a as t};