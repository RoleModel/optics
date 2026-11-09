# React components as a shadcn registry

Bring the components from [optics-components-react](https://github.com/RoleModel/optics-components-react) into this repo.
They are a companion to Optics, not part of the npm package. People copy them into their app with the shadcn CLI.

## Decisions

- New branch off `main`. The `next/` experiment stays separate.
- Top-level `react/` folder. It is a Yarn workspace with its own `package.json` and Storybook (`@storybook/react-vite`).
- Components only. The financial dashboard and Go Fish demos stay in the old repo.
- Keep Base UI for behavior (tabs, toasts, avatar, tooltip, field).
- Every Optics release sets all components' Optics version to the new version (`yarn set-optics-version <version>`, which also bumps `package.json` and the `.storybook/assets` example pages) and adjusts any component the release changed. `yarn test` fails until the versions match `package.json`.
- Registry items list `@rolemodel/optics` with no version pin.
- The `github-release` skill stays as is; the PR template covers the version step.

## Layout

```
react/
  registry/optics/ui/*.tsx      one file per component, kebab-case
  registry/optics/lib/*.ts(x)   shared helpers (flex utility variants, dialog trigger and close, icon pack)
  stories/*.stories.tsx         one story file per component
  stories/*.mdx                 one docs page per component
  stories/layout-helpers.tsx    shared boxes and controls for the layout stories
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
8. [x] Optics version on line 1 of each component and on its MDX page (`// Optics version: 2.6.1`). `test/react/registry.test.cjs` checks they match the root `package.json` version; `yarn set-optics-version <version>` sets them.
9. [x] PR template asks about the React component when a CSS component changes
10. [x] Simplify: boolean cva variants without `false: null`, shared layout story helpers (`stories/layout-helpers.tsx`), `lib/dialog.tsx` for the Modal and Confirm Dialog trigger and close handler (replaces `lib/invoker-commands.ts`), story args typed from component props
11. [x] Fill the variation gaps: `Pagination.Link` `shape`, `Navbar.Content` `render`, Form label/hint/error outside a group, `Form.Control` `indeterminate`, `TableContainer`, `Frame` `inlineSize`, and icon packs through `setIconPack()` in `lib/icon-pack.ts` (adapted from `experiment/restructure`). Skipped: `modal-wrapper` parts (the native `dialog` replaces them) and a `btn-group-toolbar` part (use `Cluster`).

## Status

- Branch `worktree-react-components`, in the worktree `.claude/worktrees/react-components`. Four commits on top of `main`: `67ad068` (components and registry), `e7adf02` (docs pages and layout props), `bb734bd` (handoff notes), and `5a593a0` (Optics versions, PR template, simplifications). Not pushed, no PR.
- `.claude/launch.json` in the worktree has `storybook` (6006) and `storybook-react` (6007). The preview tool reads the main checkout's `launch.json`, so from a worktree session start them with `yarn storybook` and `yarn storybook:react` instead.

## Next steps

1. Review both Storybooks: `yarn storybook` and `yarn storybook:react`, then open http://localhost:6006 (React stories are under "React").
2. Push the branch and open a PR to `main`.
3. After merge, a release redeploys the docs site. Then check that `https://docs.optics.rolemodel.design/r/button.json` and `/react` load, and test an install into a fresh app (setup steps in [Introduction.mdx](../../react/stories/Introduction.mdx)).

## Docs pages

Each component has `<name>.stories.tsx` (args-driven, one story per CSS variation) and `<name>.mdx` (same sections as the CSS docs). The code panel shows the JSX each story renders: `.storybook/preview.tsx` sets `docs.source.type: 'dynamic'` and names compound parts like `Accordion.Root`.
