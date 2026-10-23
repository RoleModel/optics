# Tabs spike

Build one component (tabs) as plain BEM CSS, a web component, and React, and keep it easy to understand, easy to customize, and composable.

The spike lives in `next/`. It does not touch `src/` or the published package.

## The idea

`tabs.css` is one BEM block that works on its own:

```slim
.tabs
  .tabs__list.tabs__list--small
    .tabs__tab.tabs__tab--active
    .tabs__tab
  .tabs__panel
  .tabs__panel
```

`tabs.spec.json` describes the parts once: Root, List, Tab, Link, and Panel. Each part maps to one of those classes. React and the web component are two separate implementations of the same parts. They share the spec and `tabs.css`, not code.

| File                                                                       | What it is                                                                                              |
| -------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| [tokens.css](../../next/tokens.css)                                        | Imports the real Optics tokens from `src/core/tokens` (1rem = 10px scale)                               |
| [tabs.spec.json](../../next/components/tabs/tabs.spec.json)                | Parts, their classes, roles, and props in each version; modifiers; variables                            |
| [tabs.css](../../next/components/tabs/tabs.css)                            | The `.tabs` BEM block, nested. State is a modifier class                                                |
| [tabs.js](../../next/components/tabs/tabs.js)                              | Web component (Lit): `<op-tabs>`, `<op-tabs-list>`, `<op-tabs-tab>`, `<op-tabs-panel>`                  |
| [optics-element.js](../../next/shared/optics-element.js)                   | Lit base class for every web component: light DOM, and `emit()` for `op-*` events                       |
| [roving-focus-controller.js](../../next/shared/roving-focus-controller.js) | Shared Lit controller: roving tabindex and Arrow/Home/End keys, for tabs, menus, radio groups, toolbars |
| [Tabs.jsx](../../next/components/tabs/Tabs.jsx)                            | React: `Tabs.Root`, `Tabs.List`, `Tabs.Tab`, `Tabs.Link`, `Tabs.Panel`                                  |
| [tabs.test.js](../../next/components/tabs/tabs.test.js)                    | Web component behavior, and checks that the CSS matches the spec                                        |

Modeled on [optics-components-react Tabs](https://github.com/RoleModel/optics-components-react/blob/main/src/components/ui/Tabs.tsx), without Base UI.

## Customizing

- Elements nest inside `.tabs` (stylelint-bem `require-nesting`, strict), so every element needs a `.tabs` ancestor. Each element declares its own variables. Customize an element by setting its variables on it: `.my-app .tabs__tab { --op-tabs-tab-indicator-color: hotpink; }`
- Every element has variables for padding, radius, border, shadow, and background. `.tabs__list` and `.tabs__tab` also have gap, and `.tabs__tab` has height. Border and shadow are box-shadow values, drawn as `box-shadow: <border>, <shadow>`, and `var(--op-border-none)` draws nothing
- To hide a line, set its color to `transparent`, not its size to `0`: a unitless `0` inside `calc()` makes the whole box-shadow invalid
- Size goes on the list, so every tab matches: `tabs__list--small`, `tabs__list--large`
- Add your own class: every React part takes `className`, and the web component parts keep any class you give them
- Link tabs for navigation need no JS: `<nav class="tabs"><div class="tabs__list"><a class="tabs__tab tabs__tab--active" aria-current="page">`

## Web components and CSS

The web components use light DOM (no shadow DOM). They put the same BEM classes on themselves that React puts on its elements, so `tabs.css` and app CSS style both the same way.

With shadow DOM, page CSS would not reach inside. Each component would have to load `tabs.css` into its shadow root, and apps could customize only through CSS variables (which do pass into shadow DOM) and `::part()`.

## Web components and Lit

Every web component extends `OpticsElement`, a `LitElement` whose `createRenderRoot()` returns the element itself, so nothing uses shadow DOM. Lit still gives reactive properties, batched updates, and reactive controllers.

Each component is one of two kinds, never both, because light DOM has no `<slot>` to mix author children into a template:

- **Decorator** (tabs, accordion): the author or Rails writes the parts. No `render()`. It sets classes, ARIA, and behavior in `updated()`.
- **Renderer** (combobox, date picker): takes data through properties and builds all of its internals in `render()`. No author children.

Shared behavior goes in reactive controllers (`RovingFocusController`), not a deeper class tree. The base class holds only what every component needs.

## Run it

- `yarn test:next`
- `yarn next:demo`

## Phases

- [x] 1. First pass: tokens build, state machine, prop getters, three adapters, conformance suite. Too complex.
- [x] 2. Simplify: keep the spec, plain CSS, one element
- [x] 3. Make React its own implementation instead of a wrapper around `<op-tabs>`
- [x] 4. Box shadows and border-width tokens instead of borders
- [x] 5. Composition: Root, List, Tab, Link, Panel in both React and the web component
- [x] 6. Local variables for every attribute, no magic numbers, and the real Optics tokens
- [x] 7. One BEM block (`.tabs`, `__list`, `__tab`, `__panel`) that works without a component. Size moves to the list
- [x] 8. Nest elements inside `.tabs` to follow [stylelint-bem](https://github.com/Jeremy-Walton/stylelint-bem) (`tabs.css` passes strict; `demo.css` passes weak)
- [x] 9. Lit with light DOM: an `OpticsElement` base class and a shared `RovingFocusController`. Connecting 11 parts now runs one batched update instead of about 12

## Trade-offs

- React and the web component each have their own key handling (about 20 lines each). Only the web component has automated tests.
- Lit updates after a microtask. Code and tests that check the DOM after a change must `await element.updateComplete`.
- Lit is a dev dependency in this spike. A published package would list it as a dependency (about 5 KB gzipped, shared by every component).
- The web component parts get their classes when JS runs. To avoid a flash of unstyled tabs, a server can write the classes on them up front.
- Arrow keys go both ways (Left/Right and Up/Down), so there is no orientation option.
- A variable set on `.tabs` or a wrapper does not reach the elements, because each element declares its own. Set it on the element.
- Nesting raises specificity: `.tabs .tabs__tab` is (0,2,0), so `.my-app .tabs__tab` only wins if it loads after `tabs.css`. The size modifiers (`.tabs .tabs__list.tabs__list--small .tabs__tab`, (0,4,0)) beat an app's element override of height, padding, or font size.
- Pill and vertical styles were dropped. They can come back as `tabs__list--*` modifiers.
