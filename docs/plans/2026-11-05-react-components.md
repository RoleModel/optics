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

## Open issues

- `breadcrumbs__separator` has no styles in `src/components/breadcrumbs.css`. The CSS-only story has the same gap.
- `IconProps` is a union (`name` or SVG `children`), so spreading generic props into `<Icon>` needs care.
- The first publish must happen before `registryDependencies` URLs resolve. Until then, test installs need a local server.
