import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{i as t}from"./react-CaHZDgIm.js";import{s as n}from"./chunk-LITCR56V-BxXRPQK8.js";import{l as r,n as i,o as a,u as o}from"./blocks-nNA0HiVS.js";import{t as s}from"./mdx-react-shim-DIeO1dVO.js";import{n as c,t as l}from"./sourceCodeLink-C1o55bv0.js";import{Domains as u,SixteenSix as d,n as f,t as p}from"./CustomSidebar.stories-BIprx2Cu.js";function m(e){let n={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...t(),...e.components};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(r,{of:p}),`
`,(0,g.jsx)(n.h1,{id:`custom-sidebar`,children:`Custom Sidebar`}),`
`,(0,g.jsx)(`div`,{dangerouslySetInnerHTML:{__html:l({link:`recipes/16six-sidebar.css`}).outerHTML}}),`
`,(0,g.jsx)(`div`,{dangerouslySetInnerHTML:{__html:l({link:`recipes/domains-sidebar.css`}).outerHTML}}),`
`,(0,g.jsx)(n.p,{children:`Your app may want to customize the sidebar to change the look and feel. Here are a few examples to help you get started:`}),`
`,(0,g.jsx)(n.h2,{id:`playground`,children:`Playground`}),`
`,(0,g.jsx)(i,{of:d}),`
`,(0,g.jsx)(a,{of:d}),`
`,(0,g.jsx)(n.h2,{id:`domain-registrar-example`,children:`Domain Registrar Example`}),`
`,(0,g.jsx)(n.pre,{children:(0,g.jsx)(n.code,{className:`language-css`,children:`/* Domains Sidebar Example */
.sidebar {
  &.sidebar--domains {
    --_op-sidebar-drawer-width: 28rem;
    --_op-sidebar-content-spacing: 0;
    --_op-sidebar-content-item-spacing: 0;

    box-shadow: none;

    .btn {
      border-radius: 0;

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

      &.btn--pill-right {
        border-radius: 0 var(--op-radius-pill) var(--op-radius-pill) 0;
      }
    }

    .sidebar__footer {
      display: flex;
      align-items: center;
      gap: var(--op-space-small);
      padding-inline-start: var(--op-space-large);
    }
  }
}
`})}),`
`,(0,g.jsx)(i,{of:u}),`
`,(0,g.jsx)(n.h2,{id:`performance-management-software-example`,children:`Performance Management Software Example`}),`
`,(0,g.jsx)(n.pre,{children:(0,g.jsx)(n.code,{className:`language-css`,children:`/* 16Six Sidebar Example */

.icon--rotated-135 {
  rotate: 135deg;
}

.icon--rotated-90 {
  rotate: 90deg;
}

.sidebar {
  .sidebar__brand {
    justify-content: center;

    .sidebar__brand-label {
      display: none;
    }
  }

  &.sidebar--16six {
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
        inline-size: var(--op-space-3x-large);
        block-size: var(--op-space-3x-large);
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
  }
}
`})}),`
`,(0,g.jsx)(i,{of:d})]})}function h(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,g.jsx)(n,{...e,children:(0,g.jsx)(m,{...e})}):m(e)}var g;e((()=>{g=n(),s(),o(),f(),c()}))();export{h as default};