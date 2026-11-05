# Optics React

React components for Optics, published as a [shadcn registry](https://ui.shadcn.com/docs/registry). They are not part of the `@rolemodel/optics` npm package. User docs: [stories/Introduction.mdx](stories/Introduction.mdx).

## Commands

Run from the repo root:

- `yarn storybook:react` — React Storybook on port 6007. The root Storybook (`yarn storybook`) shows it under "React" while both run.
- `yarn lint:react` — typecheck
- `yarn build-docs:react` — build the Storybook into `storybook-static/react/` and the registry into `storybook-static/r/`
- `yarn test` — includes a check that `registry.json` matches the component imports

## Add a component

1. Add `registry/optics/ui/<name>.tsx`. Import other registry files as `@/registry/optics/ui/<name>`, so the shadcn CLI can rewrite the path on install.
2. Add an item to [registry.json](registry.json). List each registry file it imports in `registryDependencies` as a full `https://docs.optics.rolemodel.design/r/<name>.json` URL.
3. Add `stories/<name>.stories.tsx`.
