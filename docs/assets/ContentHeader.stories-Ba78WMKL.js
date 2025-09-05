const _=()=>`
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
`,C=({title:i="Content Header",showContext:c=!1,contextLabel:u="Context Label",showSubline:b=!1,sublineLabel:m="Subline Label",showAside:h=!1,asideExample:x="actions",githubExample:g=!1})=>{if(g)return _();const e=document.createElement("header");e.className="content-header";let d="",p="";if(c&&(d=`<span class='content-header__context'>${u}</span>`),b&&(p+=`<span class='content-header__subline'>${m}</span>`),e.innerHTML=`
  <div class='content-header__details'>
    ${d}
    <h1 class='content-header__title'>${i}</h1>
    ${p}
  </div>
  `,h){const l=document.createElement("div");l.className="content-header__aside",l.innerHTML=`
    <p>Aside text example</p>
  `,x==="actions"&&(l.innerHTML=`
    <button class="btn">Action 1</button>
    <button class="btn">Action 2</button>
  `),e.appendChild(l)}return e.innerHTML+=`
`,e},S={title:"Components/Content Header",render:({title:i,...c})=>C({title:i,...c}),argTypes:{title:{control:"text"},showContext:{control:"boolean"},contextLabel:{if:{arg:"showContext"},control:"text"},showSubline:{control:"boolean"},sublineLabel:{if:{arg:"showSubline"},control:"text"},showAside:{control:"boolean"},asideExample:{if:{arg:"showAside"},control:{type:"select"},options:["actions","text"]}},parameters:{layout:"padded"}},t={args:{title:"Content Header",showContext:!0,contextLabel:"Context Label",showSubline:!0,sublineLabel:"Subline Label",showAside:!0,asideExample:"actions"}},n={args:{title:"Content Header",showContext:!0,contextLabel:"Context Label"}},a={args:{title:"Content Header",showSubline:!0,sublineLabel:"Subline Label"}},s={args:{title:"Content Header",showAside:!0,asideExample:"actions"}},o={args:{title:"Only a Title",showAside:!0,asideExample:"actions"}},r={args:{githubExample:!0}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Content Header',
    showContext: true,
    contextLabel: 'Context Label',
    showSubline: true,
    sublineLabel: 'Subline Label',
    showAside: true,
    asideExample: 'actions'
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Content Header',
    showContext: true,
    contextLabel: 'Context Label'
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Content Header',
    showSubline: true,
    sublineLabel: 'Subline Label'
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Content Header',
    showAside: true,
    asideExample: 'actions'
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Only a Title',
    showAside: true,
    asideExample: 'actions'
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    githubExample: true
  }
}`,...r.parameters?.docs?.source}}};const f=["Default","WithContext","WithSubline","WithAside","Simple","GitHub"],L=Object.freeze(Object.defineProperty({__proto__:null,Default:t,GitHub:r,Simple:o,WithAside:s,WithContext:n,WithSubline:a,__namedExportsOrder:f,default:S},Symbol.toStringTag,{value:"Module"}));export{L as C,t as D,r as G,o as S,n as W,a,s as b};
