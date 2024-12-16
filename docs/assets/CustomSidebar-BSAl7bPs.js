import{j as n}from"./jsx-runtime-BdapKA9s.js";import{u as t}from"./index-BH2hn5My.js";import{M as d,C as r,d as l}from"./index-DAHsoxhJ.js";import{C as p,S as o,D as c}from"./CustomSidebar.stories-vVNJPrbB.js";import{c as s}from"./sourceCodeLink-Chh3FteF.js";import"./iframe-DA9UFRIg.js";import"../sb-preview/runtime.js";import"./index-B5rfWaSj.js";import"./index-DrFu-skq.js";function i(a){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...t(),...a.components};return n.jsxs(n.Fragment,{children:[n.jsx(d,{of:p}),`
`,n.jsx(e.h1,{id:"custom-sidebar",children:"Custom Sidebar"}),`
`,n.jsx("div",{dangerouslySetInnerHTML:{__html:s({link:"recipes/16six-sidebar.scss"}).outerHTML}}),`
`,n.jsx("div",{dangerouslySetInnerHTML:{__html:s({link:"recipes/domains-sidebar.scss"}).outerHTML}}),`
`,n.jsx(e.p,{children:"Your app may want to customize the sidebar to change the look and feel. Here are a few examples to help you get started:"}),`
`,n.jsx(e.h2,{id:"playground",children:"Playground"}),`
`,n.jsx(r,{of:o}),`
`,n.jsx(l,{of:o}),`
`,n.jsx(e.h2,{id:"domain-registrar-example",children:"Domain Registrar Example"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`// Domains Sidebar Example
%btn-global {
  &.btn--pill-right {
    border-radius: 0 var(--op-radius-pill) var(--op-radius-pill) 0;
  }
}

.sidebar-domains {
  @extend %sidebar-global;

  --_op-sidebar-drawer-width: 28rem;
  --_op-sidebar-content-spacing: 0;
  --_op-sidebar-content-item-spacing: 0;

  box-shadow: none;

  .btn {
    &.btn--no-border {
      box-shadow: none;

      &.btn--active {
        background-color: var(--op-color-primary-plus-five);
        color: var(--op-color-primary-on-plus-five);
      }

      &:hover:not(.btn--active) {
        background-color: var(--op-color-neutral-plus-six);
        box-shadow: none;
        color: var(--op-color-neutral-on-plus-six);
      }
    }
  }

  .sidebar__footer {
    display: flex;
    align-items: center;
    padding-left: var(--op-space-large);
    gap: var(--op-space-small);
  }
}
`})}),`
`,n.jsx(r,{of:c}),`
`,n.jsx(e.h2,{id:"performance-management-software-example",children:"Performance Management Software Example"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`// 16Six Sidebar Example
.icon--rotated-135 {
  rotate: 135deg;
}

.icon--rotated-90 {
  rotate: 90deg;
}

@mixin sidebar-rail-global {
  .sidebar__brand {
    justify-content: center;

    .sidebar__brand-label {
      display: none;
    }
  }
}

.sidebar-16six {
  @extend %sidebar-global;

  --_op-sidebar-background-color: hsl(256deg 66% 15%);
  --_op-sidebar-text-color: hsl(26deg 100% 95%);
  --_op-sidebar-border-color: hsl(26deg 100% 95%);
  --_op-sidebar-rail-width: 6.4rem;
  --_op-sidebar-drawer-width: 22.4rem;
  --_op-sidebar-drawer-brand-width: calc(var(--op-space-3x-large) + (2 * var(--op-space-medium)));
  --_op-sidebar-brand-spacing: var(--op-space-medium) var(--op-space-x-small);
  --_op-sidebar-content-item-spacing: var(--op-space-x-small);
  --_op-sidebar-spacing: 0 0 var(--op-space-x-small);

  .sidebar__brand {
    display: flex;
    margin: 0;
    color: inherit;
    gap: var(--op-space-medium);
    text-decoration: none;

    svg {
      width: var(--op-space-3x-large);
      height: var(--op-space-3x-large);
    }

    .sidebar__brand-label {
      display: flex;
      flex-direction: column;
      font-size: var(--op-font-small);
    }
  }

  .btn {
    &.btn--no-border {
      background-color: transparent;
      box-shadow: none;
      color: var(--_op-sidebar-text-color);

      &.btn--active,
      &:hover {
        background-color: hsl(256deg 23% 32%);
      }
    }
  }

  &.sidebar--rail {
    @include sidebar-rail-global;
  }
}
`})}),`
`,n.jsx(r,{of:o})]})}function j(a={}){const{wrapper:e}={...t(),...a.components};return e?n.jsx(e,{...a,children:n.jsx(i,{...a})}):i(a)}export{j as default};