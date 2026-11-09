# Optics React

React components for Optics, published as a [shadcn registry](https://ui.shadcn.com/docs/registry). They are not part of the `@rolemodel/optics` npm package. User docs: [stories/Introduction.mdx](stories/Introduction.mdx).

## Commands

Run from the repo root:

- `yarn storybook:react` — React Storybook on port 6007. The root Storybook (`yarn storybook`) shows it under "React" while both run.
- `yarn lint:react` — typecheck
- `yarn build-docs:react` — build the Storybook into `storybook-static/react/` and the registry into `storybook-static/r/`
- `yarn test` — includes a check that `registry.json` matches the component imports

## Add a component

1. Add `registry/optics/ui/<name>.tsx`. Line 1 is `// Optics version: X.Y.Z`, the Optics version you checked it against. Its MDX page says the same version (`yarn test` checks this). Import other registry files as `@/registry/optics/ui/<name>`, so the shadcn CLI can rewrite the path on install. Give it only the options its CSS docs page offers; don't add new ones.
2. Add an item to [registry.json](registry.json). List each registry file it imports in `registryDependencies` as a full `https://docs.optics.rolemodel.design/r/<name>.json` URL.
3. Add `stories/<name>.stories.tsx` and `stories/<name>.mdx`. Copy the pattern in [accordion.stories.tsx](stories/accordion.stories.tsx) and [accordion.mdx](stories/accordion.mdx): one args-driven `render`, one story per variation on the CSS docs page, and an MDX page with the same sections as the CSS docs.
   - The code panel shows the JSX each story returns. Return library components directly, not through local helper components, and pass `undefined` instead of `false` so only real props show.
