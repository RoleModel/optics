# React components as a shadcn registry

Bring the components from [optics-components-react](https://github.com/RoleModel/optics-components-react) into this repo.
They are a companion to Optics, not part of the npm package. People copy them into their app with the shadcn CLI.

## Decisions

- New branch off `main`. The `next/` experiment stays separate.
- Top-level `react/` folder. It is a Yarn workspace with its own `package.json` and Storybook (`@storybook/react-vite`).
- Components only. The financial dashboard and Go Fish demos stay in the old repo.
- Keep Base UI for behavior (tabs, toasts, avatar, tooltip, field).

## Layout

```
react/
  registry/optics/ui/*.tsx      one file per component, kebab-case
  registry/optics/lib/*.ts      shared helpers (flex utility variants)
  stories/*.stories.tsx         one story file per component
  .storybook/                   React Storybook, port 6007
  registry.json                 shadcn registry index
```

Files import each other as `@/registry/optics/ui/<name>`. The shadcn CLI rewrites these to the user's own aliases on install.

## Publishing

- `yarn build-docs` builds the root Storybook, then the React Storybook into `storybook-static/react/`, then the registry JSON into `storybook-static/r/`.
- The root Storybook links to the React one with Storybook composition (`refs`).
- Users install with `npx shadcn@latest add https://docs.optics.rolemodel.design/r/button.json`.
- Each registry item lists `@rolemodel/optics` as a dependency. Users still import the Optics CSS once.

## Cleanup rules for the port

- Props match the options in the CSS docs. No new options: for example, Cluster, Split, and Stack take only `align` and `gap`, and Flank takes `end` and `gap`.
- Kebab-case file names, shadcn import paths.
- One polymorphism API: Base UI's `render` prop. Drop `Button`'s `asChild`.
- Repo Prettier config (print width 120).
- No React Compiler. It is the user's choice in their own app.

## Steps

1. [x] Scaffold `react/` workspace, TypeScript, Storybook
2. [x] Port and clean up components. Also split `Alert.Flash` from `Alert.Root` and `Tabs.Nav` from `Tabs.List`, so neither needs a union type.
3. [x] One story per component
4. [x] `registry.json` and `shadcn build`. `test/react/registry.test.cjs` checks it matches the imports. `.npmignore` keeps `react/` out of the npm package.
5. [x] Storybook composition and CI
6. [x] Verify: typecheck, `yarn sanity-check`, both Storybooks in the browser, a test install from the registry into a new Vite app

7. [x] Docs pages match the CSS docs (see [Docs pages](#docs-pages))
8. [x] Optics version on line 1 of each component and on its MDX page (`// Optics version: 2.6.1`). `test/react/registry.test.cjs` checks they match.
9. [x] PR template asks about the React component when a CSS component changes
10. [x] Simplify: boolean cva variants without `false: null`, shared layout story helpers (`stories/layout-helpers.tsx`), `lib/dialog.tsx` for the Modal and Confirm Dialog trigger and close handler (replaces `lib/invoker-commands.ts`), story args typed from component props

## Status

- Branch `worktree-react-components`, in the worktree `.claude/worktrees/react-components`. Two commits on top of `main`: `67ad068` (components and registry) and `e7adf02` (docs pages and layout props). Not pushed, no PR.
- `.claude/launch.json` in the worktree has `storybook` (6006) and `storybook-react` (6007). The preview tool reads the main checkout's `launch.json`, so from a worktree session start them with `yarn storybook` and `yarn storybook:react` instead.

## Next steps

1. Review both Storybooks: `yarn storybook` and `yarn storybook:react`, then open http://localhost:6006 (React stories are under "React").
2. Push the branch and open a PR to `main`.
3. After merge, a release redeploys the docs site. Then check that `https://docs.optics.rolemodel.design/r/button.json` and `/react` load, and test an install into a fresh app (setup steps in [Introduction.mdx](../../react/stories/Introduction.mdx)).
4. Decide on the open issues below.

## Open issues

- `breadcrumbs__separator` has no styles in `src/components/breadcrumbs.css`. The CSS-only story has the same gap.
- `IconProps` is a union (`name` or SVG `children`), so spreading generic props into `<Icon>` needs care.
- The first publish must happen before `registryDependencies` URLs resolve. Until then, test installs need a local server.
- Gaps where the React parts cannot make a CSS variation: `Pagination.Link` has no `shape`, `Navbar.Content` is always a `nav`, `Form.Label`/`Hint`/`Error` need a `Form.Group`, no `indeterminate` prop, no `modal-wrapper` parts, no `btn-group-toolbar` or table container part, no `Frame` inline-size prop, and `Icon` supports only Material Symbols and SVG.
- In dev, Copy code fails in the composed React pages because ports 6006 and 6007 are different origins. It works on the built site, where both share one origin.

## Docs pages

Each component has `<name>.stories.tsx` (args-driven, one story per CSS variation) and `<name>.mdx` (same sections as the CSS docs). The code panel shows the JSX each story renders: `.storybook/preview.tsx` sets `docs.source.type: 'dynamic'` and names compound parts like `Accordion.Root`.
