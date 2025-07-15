const j=()=>`
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
`,z=({title:i="Content Header",showContext:c=!1,contextLabel:W="Context Label",showSubline:M=!1,sublineLabel:O="Subline Label",showAside:$=!1,asideExample:G="actions",githubExample:D=!1})=>{if(D)return j();const e=document.createElement("header");e.className="content-header";let d="",p="";if(c&&(d=`<span class='content-header__context'>${W}</span>`),M&&(p+=`<span class='content-header__subline'>${O}</span>`),e.innerHTML=`
  <div class='content-header__details'>
    ${d}
    <h1 class='content-header__title'>${i}</h1>
    ${p}
  </div>
  `,$){const l=document.createElement("div");l.className="content-header__aside",l.innerHTML=`
    <p>Aside text example</p>
  `,G==="actions"&&(l.innerHTML=`
    <button class="btn">Action 1</button>
    <button class="btn">Action 2</button>
  `),e.appendChild(l)}return e.innerHTML+=`
`,e},J={title:"Content Components/Content Header",render:({title:i,...c})=>z({title:i,...c}),argTypes:{title:{control:"text"},showContext:{control:"boolean"},contextLabel:{if:{arg:"showContext"},control:"text"},showSubline:{control:"boolean"},sublineLabel:{if:{arg:"showSubline"},control:"text"},showAside:{control:"boolean"},asideExample:{if:{arg:"showAside"},control:{type:"select"},options:["actions","text"]}},parameters:{layout:"padded"}},t={args:{title:"Content Header",showContext:!0,contextLabel:"Context Label",showSubline:!0,sublineLabel:"Subline Label",showAside:!0,asideExample:"actions"}},n={args:{title:"Content Header",showContext:!0,contextLabel:"Context Label"}},a={args:{title:"Content Header",showSubline:!0,sublineLabel:"Subline Label"}},s={args:{title:"Content Header",showAside:!0,asideExample:"actions"}},o={args:{title:"Only a Title",showAside:!0,asideExample:"actions"}},r={args:{githubExample:!0}};var u,b,m;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    title: 'Content Header',
    showContext: true,
    contextLabel: 'Context Label',
    showSubline: true,
    sublineLabel: 'Subline Label',
    showAside: true,
    asideExample: 'actions'
  }
}`,...(m=(b=t.parameters)==null?void 0:b.docs)==null?void 0:m.source}}};var h,x,g;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    title: 'Content Header',
    showContext: true,
    contextLabel: 'Context Label'
  }
}`,...(g=(x=n.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var _,C,S;a.parameters={...a.parameters,docs:{...(_=a.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    title: 'Content Header',
    showSubline: true,
    sublineLabel: 'Subline Label'
  }
}`,...(S=(C=a.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var f,L,w;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    title: 'Content Header',
    showAside: true,
    asideExample: 'actions'
  }
}`,...(w=(L=s.parameters)==null?void 0:L.docs)==null?void 0:w.source}}};var H,v,y;o.parameters={...o.parameters,docs:{...(H=o.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    title: 'Only a Title',
    showAside: true,
    asideExample: 'actions'
  }
}`,...(y=(v=o.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var E,A,T;r.parameters={...r.parameters,docs:{...(E=r.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    githubExample: true
  }
}`,...(T=(A=r.parameters)==null?void 0:A.docs)==null?void 0:T.source}}};const N=["Default","WithContext","WithSubline","WithAside","Simple","GitHub"],k=Object.freeze(Object.defineProperty({__proto__:null,Default:t,GitHub:r,Simple:o,WithAside:s,WithContext:n,WithSubline:a,__namedExportsOrder:N,default:J},Symbol.toStringTag,{value:"Module"}));export{k as C,t as D,r as G,o as S,n as W,a,s as b};
