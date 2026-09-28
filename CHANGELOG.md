# Changelog

All notable changes to this project will be documented in this file.

This project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.4.0] - 2026-06-25

### Utility Changes

- Add New Utilities by @Jeremy-Walton in https://github.com/RoleModel/optics/pull/340
  - Several more Advanced utilities have been added for easier scaffolding and providing better semantic names around common flex / grid layout scenarios. `op-flank`, `op-grid`, and `op-frame` have been added. See [Advanced Utilities](https://docs.optics.rolemodel.design/?path=/docs/utilities-introduction--docs#advanced-utilities-vs-components) for additional details

### Addon Changes

- Update icon libraries by @Jeremy-Walton in https://github.com/RoleModel/optics/pull/338
  - Several of the icon library addons were pointing at older versions. They now point at the latest versions and will include all icons.

### Bug Fixes

- Select Only Direct Child Summary When Rotating Accordion Marker by @gavinomelia in https://github.com/RoleModel/optics/pull/330
  - There was a bug where opening an accordion with nesting accordion within it would cause the child accordion markers to also rotate even if those were not open.

### Dependencies

- Update dependencies by @Jeremy-Walton in https://github.com/RoleModel/optics/pull/339
  - Storybook (documentation site) has been updated to the latest version along with several of the documentation site dependencies. Note: none of these dependencies affect the shipped CSS.

### Documentation Changes

- Update dependencies by @Jeremy-Walton in https://github.com/RoleModel/optics/pull/339
  - Added a favicon for Optics instead of defaulting to the Storybook logo
  - Removed the table of contents background color since it is not needed
  - Fixed issue where the version number on the introduction page was not readable
  - Fixed incorrect documentation around material symbols outlined icons on the icons page
- Add New Utilities by @Jeremy-Walton in https://github.com/RoleModel/optics/pull/340
  - Fixed a bug where the playground code previews would not allow selecting

### New Contributors

- @gavinomelia made their first contribution in https://github.com/RoleModel/optics/pull/330

**Full Changelog**: https://github.com/RoleModel/optics/compare/v2.3.1...v2.4.0

## [2.3.1] - 2026-03-05

Note: There are no CSS changes in this release. It primarily improves distribution and updates some of the documentation dependencies.

### Distribution Changes

- Icon Distribution by @Jeremy-Walton in https://github.com/RoleModel/optics/pull/323
  - Optics can now be imported with one of the supported icon library addons directly instead of having to import it in addition.
  - This resolves the issue of the default material symbols library always being loaded even if you exclusively use a different icon library
- Add no icons distribution version by @Jeremy-Walton in https://github.com/RoleModel/optics/pull/325
  - If your application uses an icon library that is not directly supported by Optics, you can load Optics with no icon library. This resolves the issue of the default material symbols library always being loaded.
- Prevent color method changing when minifying css by @Jeremy-Walton in https://github.com/RoleModel/optics/pull/321
  - For better consistency, we want the minified version to still use hsl for colors instead of converting to rgb.

For more details on these distribution changes, See the following documentation sections

- [Getting Started](https://docs.optics.rolemodel.design/?path=/docs/introduction--docs#getting-started)
- [Icons](https://docs.optics.rolemodel.design/?path=/docs/components-icon--docs#additional-icon-libraries)
- [Icon Addons](https://docs.optics.rolemodel.design/?path=/docs/overview-addons--docs#additional-icon-libraries)

### Dependencies

- Update dev dependencies by @Jeremy-Walton in https://github.com/RoleModel/optics/pull/322
- Bump svgo from 4.0.0 to 4.0.1 by @dependabot[bot] in https://github.com/RoleModel/optics/pull/324

### Repository Changes

- Fix workflow permissions by @Jeremy-Walton in https://github.com/RoleModel/optics/pull/316
- Split jobs into separate actions with triggers by @Jeremy-Walton in https://github.com/RoleModel/optics/pull/317

**Full Changelog**: https://github.com/RoleModel/optics/compare/v2.3.0...v2.3.1

## [2.3.0] - 2026-01-23

### Component Changes

- Sidebar and dialog improvements by @Jeremy-Walton in https://github.com/RoleModel/optics/pull/308
  - Documentation around using the modal component with the `<dialog>` element has been modernized and simplified.
  - The navbar and sidebar components borders now will show correctly if used in the footer or right sides!

### Base Token Changes

- Sidebar and dialog improvements by @Jeremy-Walton in https://github.com/RoleModel/optics/pull/308
  - A new global token has been added `--op-transition-modal-time: 300ms;`. This can be adjusted to tweak the modal animation timing.

### Layout Changes

- Enforce logical properties by @Jeremy-Walton in https://github.com/RoleModel/optics/pull/296
  - Optics has switched to using [Logical Properties](https://developer.mozilla.org/en-US/docs/Glossary/Logical_properties). Normal properties can still be used in your project, but consider using logical properties for better language and direction support.
  - If your project uses stylelint, you can enforce usage with [stylelint-use-logical](https://github.com/csstools/stylelint-use-logical)
- New layout utilities by @Jeremy-Walton in https://github.com/RoleModel/optics/pull/297
  - Helpful utilities like `op-stack`, `op-cluster`, and `op-split` have been added for quicker scaffolding.
- New page layout by @Jeremy-Walton in https://github.com/RoleModel/optics/pull/313
  - New classes for page layout have been introduced! These better handle page scrolling and are more flexible than before. The existing classes are still supported, but new projects should use the new layout.

### Bug Fixes

- Fix the squish by @Jeremy-Walton in https://github.com/RoleModel/optics/pull/311
  - Fixed a bug with the divider that caused it to disappear when used within flex containers.

### Dependencies

- Update documentation by @Jeremy-Walton in https://github.com/RoleModel/optics/pull/298 and https://github.com/RoleModel/optics/pull/301
  - Development dependencies used for generating the documentation site have been updated.

### Documentation Changes

- Fix logos in documentation by @Jeremy-Walton in https://github.com/RoleModel/optics/pull/300
- Fix Icon documentation by @Jeremy-Walton in https://github.com/RoleModel/optics/pull/309
- Add missed description by @Jeremy-Walton in https://github.com/RoleModel/optics/pull/315
  - Fixes to the documentation to ensure logos show properly, descriptions are accurate and clear.

**Full Changelog**: https://github.com/RoleModel/optics/compare/v2.2.0...v2.3.0

## [2.2.0] - 2025-11-10

### New Components

- Add Segmented Control by @Jeremy-Walton in https://github.com/RoleModel/optics/pull/292
  - A new component for styled radio group inputs

### Documentation Changes

- Fix docs sidebar by @Jeremy-Walton in https://github.com/RoleModel/optics/pull/287
  - The sidebar was not responsive on the documentation side causing issues with content being overlapped.
- Fix documentation issues by @Jeremy-Walton in https://github.com/RoleModel/optics/pull/289
  - There was an issue with dark mode not showing correctly.
- Update sidebar organization by @Jeremy-Walton in https://github.com/RoleModel/optics/pull/288
  - Components used to be organized by purpose, but this was found to make it harder to find what users were looking for. The documentation site sidebar now has a flattened list of components.

### Repository Changes

- Add more details and instructions to PR template by @Jeremy-Walton in https://github.com/RoleModel/optics/pull/286
  - The Pull Request Template was updated to provide a better checklist of tasks before merging code.
- Fix documentation issues by @Jeremy-Walton in https://github.com/RoleModel/optics/pull/289
  - The repository did not have a node version set for building the docs

**Full Changelog**: https://github.com/RoleModel/optics/compare/v2.1.5...v2.2.0

## [2.1.5] - 2025-07-15

### New Components

- [OP-233] Add Content Header Component by @Jeremy-Walton in https://github.com/RoleModel/optics/pull/284
  - A new Content Header component for page or section specific content.

### Documentation Changes

- Update logos by @Jeremy-Walton in https://github.com/RoleModel/optics/pull/282
  - Some of the logos in the documentation were using the old RoleModel Logo.
- Update installation instructions for non-compiled projects by @theoluciano in https://github.com/RoleModel/optics/pull/283
  - Some clarifying documentation was added for projects not using a compilation step.

### New Contributors

- @theoluciano made their first contribution in https://github.com/RoleModel/optics/pull/283

**Full Changelog**: https://github.com/RoleModel/optics/compare/v2.1.4...v2.1.5

## [2.1.4] - 2025-06-26

### Component Changes

- [OP-230] Update card to not use contain paint by @Jeremy-Walton in https://github.com/RoleModel/optics/pull/281
  - `contain: paint` was being used on card to prevent an issue with setting a background color on the card header or footer and not being clipped by the card radius. That caused issues with tooltips or other contents being clipped by the card. This fix introduces a component scoped variable to define the border radius and handle those cases. See the pull request for details.
  - If your application is customizing card and changing the border radius, consider setting the component scoped variable `--_op-card-radius` rather than `border-radius: var(--my-setting)` so that the fix for the header and footer will match the overall radius.
  - If your application was setting `contain: unset` to avoid the overflow problems caused by `contain: paint`, you can remove that as it is no longer needed.

### Dependencies

- Bump vite from 5.4.14 to 5.4.19 by @dependabot in https://github.com/RoleModel/optics/pull/280

### Repository Changes

- Update README.md by @mikehale in https://github.com/RoleModel/optics/pull/279

### New Contributors

- @mikehale made their first contribution in https://github.com/RoleModel/optics/pull/279

**Full Changelog**: https://github.com/RoleModel/optics/compare/v2.1.3...v2.1.4

## [2.1.3] - 2025-04-01

### Distribution / Bug Fix Changes

- Fix File Import by @Braden-077 in https://github.com/RoleModel/optics/pull/276
  - The distribution folder was not including all the source files causing [Selective Imports](https://docs.optics.rolemodel.design/?path=/docs/overview-selective-imports--docs) to not work.

### New Contributors

- @Braden-077 made their first contribution in https://github.com/RoleModel/optics/pull/276

**Full Changelog**: https://github.com/RoleModel/optics/compare/v2.1.2...v2.1.3

## [2.1.2] - 2025-03-11

### Distribution Changes

- Minify CSS by @Jeremy-Walton in https://github.com/RoleModel/optics/pull/274
  - The distribution folder contained an `optics.min.css` file that was not actually a minified file.
  - In order to clean up the distribution, the main `optics.css` is not a single combined file and `optics.min.css` is a single combined and minified file.
  - The LICENSE, README.md, and package.json file are now included in the distribution folder.
  - No breaking changes or adjustments needed other than bumping your version number.
- Ensure distribution includes addons by @Jeremy-Walton in https://github.com/RoleModel/optics/pull/275
- Had to bump from 2.1.1 (really just skipped over as it had to be unpublished) to fix an issue in the distribution folder.

**Full Changelog**: https://github.com/RoleModel/optics/compare/v2.1.0...v2.1.2

## [2.1.0] - 2025-02-12

### Breaking Changes

- [OP-200] Move fonts to their own files by @Jeremy-Walton in https://github.com/RoleModel/optics/pull/271
  - In order to better allow customization and configuration, the CDN font imports have been moved out of the base tokens and icon files and into their own files under `src/core/fonts`. `src/core/fonts/text_fonts.css` and `src/core/fonts/icon_fonts.css` respectively.
  - If you are using selective imports or are not using the main file import, you may need to add an import for the fonts to ensure your app is still loading them correctly.

  ```css
  /* Third party Vendors */
  @import 'modern-css-reset/dist/reset';

  /* Fonts */
  @import 'core/fonts'; /* This is new! */

  /* Tokens */
  @import 'core/tokens';

  /* Base styles and utilities */
  @import 'core/base';
  @import 'core/layout';
  @import 'core/utilities';

  /* Components */
  @import 'components';
  ```

- [OP-195] Icon improvements by @Jeremy-Walton in https://github.com/RoleModel/optics/pull/272
  - The default variable icon font loaded for Material Symbols Outlined has been changed to only include the weight axis. This is to reduce load times for apps that don't need it or are using an alternate font. This can be reset back to previous behavior by including `@import '@rolemodel/optics/dist/css/addons/fonts/material_symbols_outlined_variable.css';` just like the new icon packs shown below.
  - The implementation of Icon has been reworked to allow for better customization, overriding, and extensibility. It's API of variables matches other components to allow for this.
  ```css
  /* Weight */
  --_op-icon-weight-light
  --_op-icon-weight-normal
  --_op-icon-weight-semi-bold
  --_op-icon-weight-bold

  /* Fill */
  --_op-icon-fill-outlined
  --_op-icon-fill-filled

  /* Emphasis */
  --_op-icon-emphasis-low
  --_op-icon-emphasis-normal
  --_op-icon-emphasis-high

  /* Size */
  --_op-icon-font-size-small
  --_op-icon-font-size-medium
  --_op-icon-font-size-large
  --_op-icon-font-size-x-large
  --_op-icon-optical-size-small
  --_op-icon-optical-size-medium
  --_op-icon-optical-size-large
  --_op-icon-optical-size-x-large
  ```
  - If you are customizing icons, have a look at the current implementation to see what your refactor should match.
  - Using the Icon classes has slightly changed. Your modifiers work the same, but the base class has been extracted to be `.icon` The Material Symbols specific behavior lives apart from icon generic behavior. This allows for alternative icon libraries.
  - Old usage `<span class='material-symbols-outlined icon--x-large icon--weight-bold'>settings</span>`
  - New usage `<span class='material-symbols-outlined icon icon--x-large icon--weight-bold'>settings</span>`
  - If you are using an icon helper, you will need to update it to include the `.icon` class. If you are in a Rails context, The icon generator in [RoleModel Rails](https://github.com/RoleModel/rolemodel_rails/blob/master/lib/generators/rolemodel/optics/icons/templates/app/helpers/icon_helper.rb)) has been updated to support all the new fonts

### Component Changes

- [OP-195] Icon improvements by @Jeremy-Walton in https://github.com/RoleModel/optics/pull/272
  - The Icon API has been reworked to better match other components. This means it is easier to override and customize aspects of the icon like the sizes or other modifiers and what values they have.
  - Icons now support the `.icon--small` modifier for using smaller icons

- [OP-28] Custom Icon Support by @Jeremy-Walton in https://github.com/RoleModel/optics/pull/273
  - Optics now supports four new Icon Libraries!
    - [Phosphor](https://phosphoricons.com/)
    - [Tabler](https://tabler.io/icons)
    - [Feather](https://feathericons.com/)
    - [Lucide](https://lucide.dev/icons/)
  - Simply add an import for the specific library `@import '@rolemodel/optics/dist/css/addons/fonts/phosphor_icons';`
  - Usage will look like `<i class='ph ph-smiley icon--x-large icon--weight-thin'></i>` but will vary for each Library
  - See the documentation for specifics implementation details and which icon modifiers are supported in each library.
  - If your app is built on Rails and you are using [RoleModel Rails](https://github.com/RoleModel/rolemodel_rails), the [Icon Generator](https://github.com/RoleModel/rolemodel_rails/tree/master/lib/generators/rolemodel/optics/icons) now prompts you for which icon library you are using and generates the correct helper methods for you.

**Full Changelog**: https://github.com/RoleModel/optics/compare/v2.0.1...v2.1.0

## [1.13.1] - 2025-02-11

### Breaking Changes

- [CCC-47] Tokens by @Jeremy-Walton in https://github.com/RoleModel/optics/pull/263
  - The majority of files have been converted from `scss` to `css`. This shouldn't be a major change or cause issues with how you import Optics. A potential case is if you are selectively importing specific files, you may need to change the extension. This includes Addons, Components, and Tokens.
  - Tokens are no longer organized into mixins that then get included into the `:root` element. They just live directly in `:root`. If you were doing any scale overriding and mixing the scale into a sub component, you may need to review that and adjust it or manually copy the tokens into where you need them.
  - The dark mode scale file has been removed. This is because those tokens now live inside the scale color tokens file side by side with their light mode counterparts. We are utilizing the newer [light-mode()](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/light-dark)

### Token Changes

- Color Scale Tokens now use the `light-dark()` function by @Jeremy-Walton in https://github.com/RoleModel/optics/pull/263
  - See https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/light-dark
  - This allows for easier theming. Seeing the light and dark values in one place, and being able to set theme mode at any given scope level.
  - One note to be aware of is that if you are using your variables as the `fill` option on an SVG, you may run into issues with the `light-dark()` function and the SVG not knowing how to parse it. In this case, you might consider separating out the light and dark versions of the variable and using the values directly.

**Full Changelog**: https://github.com/RoleModel/optics/compare/v1.12.0...v1.13.0

## [2.0.1] - 2025-02-10

### Base Token Changes

- [OP-198] Accordion Add Animation by @Jeremy-Walton in https://github.com/RoleModel/optics/pull/267
  - A new token `--op-transition-accordion-content` has been added. This can be used to adjust the timing of the new accordion opening and closing animation.

### Component Changes

- [OP-198] Accordion Add Animation by @Jeremy-Walton in https://github.com/RoleModel/optics/pull/267
  - Accordions now animate when opening and closing by default!
  - This can be disabled by using a new component modifier `.accordion.accordion--disable-animation`
  - Note: This animation does not currently work on Safari or Firefox, however it falls back gracefully to the existing behavior before this change of opening and closing with no animation. Support will be added in the future.

### Dependencies

- [OP-199] Documentation Improvements by @Jeremy-Walton in https://github.com/RoleModel/optics/pull/268
  - Storybook (Documentation site) has been updated to the latest version `8.5.3`

### Documentation Changes

- Spell modules correctly by @jdmcleod in https://github.com/RoleModel/optics/pull/269
  - Minor typo fix
- [OP-198] Accordion Add Animation by @Jeremy-Walton in https://github.com/RoleModel/optics/pull/267
  - Some instructions were added to the Accordion documentation for how to utilize the exclusive open feature of `<detail>` elements. See more https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details#name

### New Contributors

- @jdmcleod made their first contribution in https://github.com/RoleModel/optics/pull/269

**Full Changelog**: https://github.com/RoleModel/optics/compare/v2.0.0...v2.0.1

## [2.0.0] - 2025-01-31

### Breaking Changes

- Optics is no longer using SCSS by @Jeremy-Walton in https://github.com/RoleModel/optics/pull/266
  - All references to SCSS or SASS have been removed.
  - The import paths for files should change from `@rolemodel/optics/dist/scss/optics` to `@rolemodel/optics/dist/css/optics`
  - There is now a `@rolemodel/optics/dist/css/optics.min.css` which is one file with all of Optics in it, rather than individual files.
  - Any selective imports will need to point to the `css` dist folder instead of `scss`

**Full Changelog**: https://github.com/RoleModel/optics/compare/v1.13.0...v2.0.0

## [1.12.0] - 2025-01-31

### Breaking Changes

- [OP-193] Refactor Sidebar by @zoopmaster in https://github.com/RoleModel/optics/pull/264
  - Sidebar has been converted to be pure BEM style. This means that variants like `.sidebar-primary` is now `.sidebar--primary`.
  - If your app is using this component, you will need to use the base `.sidebar` class in addition to the modifier for the particular variant.
  - Additionally, if you are customizing the styles, you will need to replace the placeholder selector `%sidebar-global` with the base selector `.sidebar` and any variants you have customized or added will need to become modifiers. You will no longer need to extend the placeholder selector since your new class is now a modifier and meant to be used with the base class.

```css
/* Old */
%sidebar-global {
  color: red;
}

.sidebar-purple {
  background-color: purple;
}

/* Usage: .sidebar-purple */
```

```css
/* New */
.sidebar {
  color: red;

  &.sidebar--purple {
    background-color: purple;
  }
}

/* Usage: .sidebar.sidebar--purple */
```

- **`.sidebar--responsive` has been removed** The main reason is that it is not being used very much and introduces a lot of complexity to the sidebar. Most applications end up hiding the sidebar on mobile and using a drawer pattern or alternative approach. This is best done with some simple JS to change out the sidebar style (`.sidebar--drawer`, `.sidebar--compact`, `.sidebar--rail`). See https://docs.optics.rolemodel.design/?path=/docs/navigation-components-sidebar--docs for details on a javascript solution to add a responsive sidebar back.

### Component Changes

- Refactor Sidebar to not use placeholder selectors by @zoopmaster in https://github.com/RoleModel/optics/pull/264

### Documentation Changes

- Add details to sidebar documentation by @Jeremy-Walton in https://github.com/RoleModel/optics/pull/265

**Full Changelog**: https://github.com/RoleModel/optics/compare/v1.11.0...v1.12.0

## [1.11.0] - 2025-01-30

### Breaking Changes

- OP-179 Refactor Form by @dominicmacaulay in https://github.com/RoleModel/optics/pull/262
  - Form has been converted to be pure BEM style. `.form-control` did not have variants since it mainly changed look based on input type. You may want to review usage, but because of this, you shouldn't need to change much.
  - If you are customizing the styles, you will need to replace the following placeholder selectors
    - `%form-control-global` with. `.form-control`
    - `%form-control-input-global` with `.form-control:not([type='radio'], [type='checkbox'])`
    - `%form-control-inline-global` with `.form-control:is([type='radio'], [type='checkbox'])`
    - `%dropdown-arrow` with `[.form](select.form-control:not([multiple], [type='radio'], [type='checkbox']))`
    - You will no longer need to extend the placeholder selector since these styles are based on the input type.

```css
/* Old */
%form-control-global {
  color: red;
}

.form-control-purple {
  background-color: purple;
}

/* Usage: input.form-control-purple */
```

```css
/* New */
.form-control {
  color: red;

  &.form-control--purple {
    background-color: purple;
  }
}

/* Usage: input.form-control.form-control--purple */
```

NOTE: There is a know issue with `.form-group` where the padding is incorrectly set to `padding-block: var(--op-space-small) 0;` which effectively only sets `padding-block-start` instead of just `padding-block`. This was resolved in `v2.0.0` In the mean time, you can add a temporary override to your code

in `your-form.css`

```css
.form-group {
  padding-block: var(--op-space-small); /* TODO: This can be removed once using Optics v2.0.0 */
}
```

### Component Changes

- Refactor Form component to no longer use placeholder selectors by @dominicmacaulay in https://github.com/RoleModel/optics/pull/262

**Full Changelog**: https://github.com/RoleModel/optics/compare/v1.10.0...v1.11.0

## [1.10.0] - 2025-01-30

### Breaking Changes

- [OP-172] Refactor button and button-group by @zoopmaster in https://github.com/RoleModel/optics/pull/261
  - **Note:** These comments apply to both Button and Button Group, but we use Button as the example.
  - Button has been converted to be pure BEM style. This means that variants like `.btn-primary` is now `.btn--primary`.
  - If your app is using this component, you will need to use the base `.btn` class in addition to the modifier for the particular variant.
  - Additionally, if you are customizing the styles, you will need to replace the placeholder selector `%btn-global` with the base selector `.btn` and any variants you have customized or added will need to become modifiers. You will no longer need to extend the placeholder selector since your new class is now a modifier and meant to be used with the base class.

```css
/* Old */
%btn-global {
  color: red;
}

.btn-purple {
  background-color: purple;
}

/* Usage: .btn-purple */
```

```css
/* New */
.btn {
  color: red;

  &.btn--purple {
    background-color: purple;
  }
}

/* Usage: .btn.btn--purple */
```

### Components Changes

- Refactor button and button-group to not use placeholder selectors by @zoopmaster in https://github.com/RoleModel/optics/pull/261

**Full Changelog**: https://github.com/RoleModel/optics/compare/v1.9.0...v1.10.0

## [1.9.0] - 2025-01-30

### Breaking Changes

- OP-189 Refactor Table by @dominicmacaulay in https://github.com/RoleModel/optics/pull/258
  - Table has been converted to be pure BEM style. This means that `.table-primary` is now `.table--primary`.
  - If your app is using this component, you will need to use the base `.table` class in addition to the modifier for the particular variant.
  - Additionally, if you are customizing the styles, you will need to replace the placeholder selector `%table-global with the base selector `.table` and any variants you have customized or added will need to become modifiers. You will no longer need to extend the placeholder selector since your new class is now a modifier and meant to be used with the base class.

```css
/* Old */
%table-global {
  color: red;
}

.table-purple {
  background-color: purple;
}

/* Usage: .table-purple */
```

```css
/* New */
.table {
  color: red;

  &.table--purple {
    background-color: purple;
  }
}

/* Usage: .table.table--purple */
```

### Component Changes

- Refactor Table to not use a placeholder selector by @dominicmacaulay in https://github.com/RoleModel/optics/pull/258

**Full Changelog**: https://github.com/RoleModel/optics/compare/v1.8.0...v1.9.0

## [1.8.0] - 2025-01-30

### Breaking Changes

- [OP-182] Refactor Navbar by @zoopmaster in https://github.com/RoleModel/optics/pull/259
  - Navbar has been converted to be pure BEM style. This means that `.navbar-primary` is now `.navbar--primary`.
  - If your app is using this component, you will need to use the base `.navbar` class in addition to the modifier for the particular variant.
  - Additionally, if you are customizing the styles, you will need to replace the placeholder selector `%navbar-global with the base selector `.navbar` and any variants you have customized or added will need to become modifiers. You will no longer need to extend the placeholder selector since your new class is now a modifier and meant to be used with the base class.

```css
/* Old */
%navbar-global {
  color: red;
}

.navbar-purple {
  background-color: purple;
}

/* Usage: .navbar-purple */
```

```css
/* New */
.navbar {
  color: red;

  &.navbar--purple {
    background-color: purple;
  }
}

/* Usage: .navbar.navbar--purple */
```

### Component Changes

- Refactor Navbar to not use a placeholder selector by @zoopmaster in https://github.com/RoleModel/optics/pull/259

**Full Changelog**: https://github.com/RoleModel/optics/compare/v1.7.0...v1.8.0

## [1.7.0] - 2025-01-30

### Breaking Changes

- [OP-176] Refactor Card by @zoopmaster in https://github.com/RoleModel/optics/pull/260
  - Card has been converted to be pure BEM style. This means that `.card-padded` is now `.card--padded`.
  - If your app is using this component, you will need to use the base `.card` class in addition to the modifier for the particular variant.
  - Additionally, if you are customizing the styles, you will need to replace the placeholder selector `%card-global with the base selector `.card` and any variants you have customized or added will need to become modifiers. You will no longer need to extend the placeholder selector since your new class is now a modifier and meant to be used with the base class.

```css
/* Old */
%card-global {
  color: red;
}

.card-purple {
  background-color: purple;
}

/* Usage: .card-purple */
```

```css
/* New */
.card {
  color: red;

  &.card--purple {
    background-color: purple;
  }
}

/* Usage: .card.card--purple */
```

### Component Changes

- Refactor Card to not use a placeholder selector by @zoopmaster in https://github.com/RoleModel/optics/pull/260

**Full Changelog**: https://github.com/RoleModel/optics/compare/v1.6.0...v1.7.0

## [1.6.0] - 2025-01-30

### Breaking Changes

- OP-181 Refactor Modal and ConfirmDialog by @dominicmacaulay in https://github.com/RoleModel/optics/pull/257
  - Note: These comments apply to both Modal and Confirm Dialog, but we use Modal as the example.
  - Modal has been converted to be pure BEM style. This component did not have more than one variant, but if you have created one, it will need to be converted to a modifier.
  - If your app is using this component, you will need to use the base `.modal` class in addition to the modifier for the particular variant.
  - Additionally, if you are customizing the styles, you will need to replace the placeholder selector `%modal-global` and `%modal-wrapper-global` with the base selector `.modal` and `.modal-wrapper` and any variants you have customized or added will need to become modifiers. You will no longer need to extend the placeholder selector since your new class is now a modifier and meant to be used with the base class.

```css
/* Old */
%modal-global {
  color: red;
}

.modal-purple {
  background-color: purple;
}

/* Usage: .modal-purple */
```

```css
/* New */
.modal {
  color: red;

  &.modal--purple {
    background-color: purple;
  }
}

/* Usage: .modal.modal--purple */
```

### Component Changes

- Modal and ConfirmDialog are refactored to no longer use placeholder selectors by @dominicmacaulay in https://github.com/RoleModel/optics/pull/257

**Full Changelog**: https://github.com/RoleModel/optics/compare/v1.5.0...v1.6.0

## [1.5.0] - 2025-01-30

### Breaking Changes

- OP-174 Refactor Badge and Tag by @dominicmacaulay in https://github.com/RoleModel/optics/pull/256
  - Note: These comments apply to both Badge and Tag, but we use badge as the example.
  - Badge has been converted to be pure BEM style. This means that `.badge-primary` is now `.badge.badge--primary`.
  - If your app is using this component, you will need to use the base `.badge` class in addition to the modifier for the particular variant.
  - Additionally, if you are customizing the styles, you will need to replace the placeholder selector %badge-global with the base selector `.badge` and any variants you have customized or added will need to become modifiers. You will no longer need to extend the placeholder selector since your new class is now a modifier and meant to be used with the base class.

```css
/* Old */
%badge-global {
  color: red;
}

.badge-purple {
  background-color: purple;
}

/* Usage: .badge-purple */
```

```css
/* New */
.badge {
  color: red;

  &.badge--purple {
    background-color: purple;
  }
}

/* Usage: .badge.badge--purple */
```

### Component Changes

- Tag and Badge have been updated to not use placeholder selectors by @dominicmacaulay in https://github.com/RoleModel/optics/pull/256

**Full Changelog**: https://github.com/RoleModel/optics/compare/v1.4.0...v1.5.0

## [1.4.0] - 2025-01-30

### Breaking Changes

- [OP-170] Refactor Simple Components by @zoopmaster in https://github.com/RoleModel/optics/pull/255
  - **Note:** These comments apply to all of the following components, but we use Accordion as the example. `accordion`, `avatar`, `breadcrumbs`, `pagination`, `side-panel`, `spinner`, `switch`, `tab`, `text-pair`, `divider`, and `tooltip`
  - Accordion has been converted to be pure BEM style. This component did not have more than one variant, but if you had created one, it will need to be converted to a modifier.
  - If your app is using this component, you will continue to use the `.accordion` class.
  - If you are customizing the styles, you will need to replace the placeholder selector `%accordion-global` with the base selector `.accordion` and any variants you have customized or added will need to become modifiers. You will no longer need to extend the placeholder selector since your new class is now a modifier and meant to be used with the base class

```css
/* Old */
%accordion-global {
  color: red;
}

.accordion-purple {
  background-color: purple;
}

/* Usage: .accordion-purple */
```

```css
/* New */
.accordion {
  color: red;

  &.accordion--purple {
    background-color: purple;
  }
}

/* Usage: .accordion.accordion--purple */
```

### Component Changes

- [OP-170] Refactor Simple Components by @zoopmaster in https://github.com/RoleModel/optics/pull/255

**Full Changelog**: https://github.com/RoleModel/optics/compare/v1.3.0...v1.4.0

## [1.3.0] - 2025-01-29

### Breaking Changes

- There is an issue with how the SASS package compiles CSS. If the console outputs build failure messages related to `.alert--icon {`, ensure the `"sass"` package in `package.json` is set to at least `1.77`.
- OP-173 Refactor Alert by @dominicmacaulay in https://github.com/RoleModel/optics/pull/254
  - Alert variants have been converted to be pure BEM style. This means that `.alert-warning` is now `.alert.alert--warning`.
  - If your app is using this component you will need to use the base `.alert` class in addition to the modifier for the particular variant you want.
  - Additionally, if you are customizing the styles, you will need to replace the placeholder selector `%alert-global` with the base selector `.alert` and any variants you have customized or added will need to become modifiers. `.alert--danger` instead of `.alert-danger`. You will no longer need to extend the placeholder selector since your class is now a modifier and meant to be used with the base class.

```css
/* Old */
%alert-global {
  gap: var(--op-space-large);
}

.alert-purple {
  @extend %alert-global;

  background-color: purple;
}

/* Usage: .alert-purple */
```

```css
/* New */
.alert {
  gap: var(--op-space-large);
}

.alert.alert--purple {
  background-color: purple;
}

/* Usage: .alert.alert--purple */
```

### Components

- OP-173 Refactor Alert by @dominicmacaulay in https://github.com/RoleModel/optics/pull/254

**Full Changelog**: https://github.com/RoleModel/optics/compare/v1.2.0...v1.3.0

## [1.2.0] - 2025-01-29

### Breaking Changes

- Remove the `.flexible-layout-area` and `.layout-row` utility classes by @dominicmacaulay in https://github.com/RoleModel/optics/pull/253
  - These were inherited from older patterns at RoleModel, however they were never documented or really intended to be used. Since that is the case, we are removing them to simplify the code.
  - If you were using them, you may need to change your implementations or copy the code back into your project.

- CCC-44 Breakpoint Variables by @dominicmacaulay in https://github.com/RoleModel/optics/pull/252
  - In an effort to reduce dependencies on SCSS features, we want to remove the $breakpoint-... SCSS variables. Media queries cannot use CSS variables and the spec for environment variables doesn't seem like it is moving anytime soon. https://drafts.csswg.org/css-env-1/
  - A larger goal is to move away from needing SCSS entirely since pure CSS supports a large amount of the features we depended on from SCSS.
  - If your project was using these SCSS variables, you will need to copy the values and follow the [documenting guide](https://docs.optics.rolemodel.design/?path=/docs/tokens-breakpoint--docs).
    - `$breakpoint-x-small` should become: `512px` with a comment of `/* --op-breakpoint-x-small */`
    - `$breakpoint-small` should become: `768px` with a comment of `/* --op-breakpoint-small */`
    - `$breakpoint-medium` should become: `1024px` with a comment of `/* --op-breakpoint-medium */`
    - `$breakpoint-large` should become: `1280px` with a comment of `/* --op-breakpoint-large */`
    - `$breakpoint-x-large` should become: `1440px` with a comment of `/* --op-breakpoint-x-large */`

### Utilities Changes

- Remove the `.flexible-layout-area` and `.layout-row` utility classes by @dominicmacaulay in https://github.com/RoleModel/optics/pull/253
  - These features were not documented or intended to be used.

### Documentation Changes

- Update the RoleModel logo used in the documentation by @Jeremy-Walton in https://github.com/RoleModel/optics/pull/249
  - See https://rolemodelsoftware.com/blog/announcing-rolemodels-new-brand

**Full Changelog**: https://github.com/RoleModel/optics/compare/v1.1.0...v1.2.0

## [1.1.0] - 2024-12-16

### Breaking Changes

- `--op-z-index-drawer` rename by @Jeremy-Walton in https://github.com/RoleModel/optics/pull/234
  - The name of drawer was inaccurate since the token is meant to be used for the sidebar. This updates it to be clearer.
  - This should be a simple find-and-replace situation to change from `--op-z-index-drawer` to `--op-z-index-sidebar`

### Base Token Changes

- Update the font import to use newer syntax by @Jeremy-Walton in https://github.com/RoleModel/optics/pull/235
  - `--op-font-family-alt` was added to accompany the existing font options as an alternative option.
- `--op-z-index-drawer` rename by @Jeremy-Walton in https://github.com/RoleModel/optics/pull/234
  - `--op-z-index-drawer` was renamed to `--op-z-index-sidebar` (as noted in the breaking changes section)

### Component Changes

- Improve icon font initial page load state by @Jeremy-Walton in https://github.com/RoleModel/optics/pull/240
  - Added the `display=block` option to the Material Icons font import to prevent the underlying text from showing while loading.
- Use correct cursor for color input by @Jeremy-Walton in https://github.com/RoleModel/optics/pull/233
  - The color input did not have the correct cursor when hovering. This updated it to use the pointer cursor

### Documentation Changes

- Fix tab link in docs by @Jeremy-Walton in https://github.com/RoleModel/optics/pull/228
  - Clicking on one of the example tab links caused the documentation site to throw an error
- cleanup documentation on Addons.mdx ScaleOverriding.mdx and Tokens.mdx by @yawnybear in https://github.com/RoleModel/optics/pull/232
  - Minor grammatical fixes
- Fix href Link on Avatar Component by @dominicmacaulay in https://github.com/RoleModel/optics/pull/238
  - Clicking on the example avatar caused the documentation site to throw an error
- Optics documentation fixes (GH-239) by @yawnybear in https://github.com/RoleModel/optics/pull/239
  - Grammatical fixes and rewording to add clarity.
- Variable Font Instructions by @Jeremy-Walton in https://github.com/RoleModel/optics/pull/247
  - Improving the font family documentation and adding instructions on how to better utilize variable fonts.

### Dependencies (Documentation Site)

- Storybook upgrade by @Jeremy-Walton in https://github.com/RoleModel/optics/pull/230
- Bump ws from 8.17.0 to 8.17.1 by @dependabot in https://github.com/RoleModel/optics/pull/231
- Bump cross-spawn from 7.0.3 to 7.0.6 by @dependabot in https://github.com/RoleModel/optics/pull/244
- Bump vite from 5.2.11 to 5.2.14 by @dependabot in https://github.com/RoleModel/optics/pull/241
- Bump nanoid from 3.3.7 to 3.3.8 by @dependabot in https://github.com/RoleModel/optics/pull/242
- Bump express from 4.19.2 to 4.21.2 by @dependabot in https://github.com/RoleModel/optics/pull/245
- Bump micromatch from 4.0.6 to 4.0.8 by @dependabot in https://github.com/RoleModel/optics/pull/246

### New Contributors

- @yawnybear made their first contribution in https://github.com/RoleModel/optics/pull/232
- @dominicmacaulay made their first contribution in https://github.com/RoleModel/optics/pull/238

**Full Changelog**: https://github.com/RoleModel/optics/compare/v1.0.0...v1.1.0

## [1.0.0] - 2024-02-29

Check out https://optics.rolemodel.design to learn how RoleModel teams collaborate using Optics to crafting excellent design solutions.

### Breaking Changes

- `--op-border-color` rename by @Jeremy-Walton in https://github.com/RoleModel/optics/pull/212
  - The border color token did not match the token naming pattern for other colors. This updates it to be consistent
  - This should be a simple find-and-replace situation to change from `--op-border-color` to `--op-color-border`
- Compound Selector with `::file-selector-button` bug by @Jeremy-Walton in https://github.com/RoleModel/optics/pull/221
  - Due to how buttons were implemented, the styling for the input of type `file` would cause issues when trying to style all buttons.
  - I suspect most projects are not styling this specific element, but if it is, it will need to be updated. Check the Pull Request for details

### Base Token Changes

- `--op-border-color` rename by @Jeremy-Walton in https://github.com/RoleModel/optics/pull/212
  - The border color token did not match the token naming pattern for other colors. This updates it to be consistent
  - This should be a simple find-and-replace situation to change from `--op-border-color` to `--op-color-border`

### Component Changes

- Rename `btn-delete` to `btn-destructive` by @Jeremy-Walton in https://github.com/RoleModel/optics/pull/222
  - There may be a case where your application wishes to use a red "danger" button to indicate a destructive action. That may not always be Delete. The delete name was too specific and wasn't consistent with other buttons names.
  - This is a backwards compatible change. The `btn-delete` class still works so no code change is necessary. If your application customizes the delete button, you may want to update any selectors to include the new destructive name.

### Documentation Changes

- Alternate Font Pattern by @Jeremy-Walton in https://github.com/RoleModel/optics/pull/214
  - Added an example to the docs for how to utilize multiple fonts in your application
- Icon example for button by @Jeremy-Walton in https://github.com/RoleModel/optics/pull/215
  - Added an example to the docs for using icons within a button
- Component Documentation Structure by @Jeremy-Walton in https://github.com/RoleModel/optics/pull/216
  - The sidebar on the documentation has been updated to better categorize the different components available. Search can still be used to find thing as well.
- Alpha Color Documentation by @Jeremy-Walton in https://github.com/RoleModel/optics/pull/218
  - Added a new docs page to explain how to handle alpha colors and use `color-mix`
- Tooltip on disabled Button by @Jeremy-Walton in https://github.com/RoleModel/optics/pull/219
  - Due to a limitation with tooltips on disabled buttons, an example of how to work around this issue was added to the docs
- Aligned Header Recipe by @Jeremy-Walton in https://github.com/RoleModel/optics/pull/220
  - A new recipe example was added to show how to solve a challenge that may come up
- Update Logo by @Jeremy-Walton in https://github.com/RoleModel/optics/pull/225
  - Update the top left logo with the new Optics logo.
  - Add a info blurb pointing to the RoleModel Software website

### Bug Fixes

- Compound Selector with `::file-selector-button` bug by @Jeremy-Walton in https://github.com/RoleModel/optics/pull/221
  - Due to how buttons were implemented, the styling for the input of type `file` would cause issues when trying to style all buttons.
  - I suspect most projects are not styling this specific element, but if it is, it will need to be updated. Check the Pull Request for details
- Fix Avatar Squish inside a flex container by @Jeremy-Walton in https://github.com/RoleModel/optics/pull/213
  - The avatar component could get squished if used inside a flex container. This updated it to ensure it would stay the same width and height.

### Dependencies

- Dependency updates by @Jeremy-Walton in https://github.com/RoleModel/optics/pull/217
- Bump ip from 2.0.0 to 2.0.1 by @dependabot in https://github.com/RoleModel/optics/pull/223
  - Both of these changes are for the Storybook documentation. They don't affect the imported styles.

**Full Changelog**: https://github.com/RoleModel/optics/compare/v0.5.1...v1.0.0

## [0.5.1] - 2023-09-29

### Base Token Changes

- Added missing token for tooltip transition animation by @dallasbpeters in https://github.com/RoleModel/optics/pull/203
  - Tooltips were implemented with a global token in mind, but that was never added.

### New Components

- Breadcrumbs by @Jeremy-Walton in https://github.com/RoleModel/optics/pull/205
  - A new Breadcrumb navigation component for showing application route context.
- Text Pair by @Jeremy-Walton in https://github.com/RoleModel/optics/pull/209
  - A new component to show related text together such as a title and subtitle, or a label and a value.

### Component Changes

- Sensible file input styles by @Jeremy-Walton in https://github.com/RoleModel/optics/pull/207
  - The `.form-control` class now supports inputs with a type set to `file` by providing sensible default styles that match other inputs

### Bug Fixes

- Added missing token for tooltip transition animation by @dallasbpeters in https://github.com/RoleModel/optics/pull/203
  - Tooltips were implemented with a global token in mind, but that was never added.
- Safari Mobile Form Control Bug by @Jeremy-Walton in https://github.com/RoleModel/optics/pull/202
  - The box shadows on inputs using the `.form-control` class were not rendering correctly in Safari
- Hide still-visible checkbox on Firefox by @zoopmaster in https://github.com/RoleModel/optics/pull/204
  - In Firefox, the switch component was still showing the underlying checkbox input.
- Hide checkbox input when disabled by @zoopmaster in https://github.com/RoleModel/optics/pull/206
  - If the switch was disabled, the checkbox would show up underneath on Safari and Firefox. This has been resolved
- Fix accordion arrow showing in safari by @Jeremy-Walton in https://github.com/RoleModel/optics/pull/208
  - In Safari, the accordion component was not rendering correctly. The default arrow was still visible and the layout was incorrect.

**Full Changelog**: https://github.com/RoleModel/optics/compare/v0.5.0...v0.5.1

## [0.5.0] - 2023-07-27

### Breaking Changes

- Remove warning + no border state for button by @Jeremy-Walton in https://github.com/RoleModel/optics/pull/200
  - Combining the `.btn-warning` and `.btn--no-border` class no longer creates a borderless warning button, it creates a normal warning button as if you were only using `.btn-warning`. This is to match the delete button behavior
  - If a button is meant to convey warning, the unfocused un-hovered state should convey that and a borderless warning button wasn't doing that.

### Base Token Changes

- Breakpoint continuity by @Jeremy-Walton in https://github.com/RoleModel/optics/pull/181
  - Variable versions of the existing sass variables for breakpoints have been added. This allows for usage in cases of max-width or such where a calc may be desired. `@media` queries still require using the sass variables.
- Documentation improvements by @Jeremy-Walton in https://github.com/RoleModel/optics/pull/194
  - `--op-color-on-background-alt` was added to accompany the existing background color tokens.
- Add tags component by @dallasbpeters in https://github.com/RoleModel/optics/pull/186
  - input focus tokens for neutral, info, and notice were added to support focus for all color scales.
- Dropdown Encoded Image by @Jeremy-Walton in https://github.com/RoleModel/optics/pull/199
  - The encoded image token for the arrow on dropdown selects has been updated and a dark mode version was added
- Opacity Tokens by @Jeremy-Walton in https://github.com/RoleModel/optics/pull/198
  - Opacity tokens have been added to support setting various visibility settings.
- Size Scale by @Jeremy-Walton in https://github.com/RoleModel/optics/pull/197
  - A new token for size: `--op-size-unit` has been added for width and height properties to utilize. This ensures sizes are scalable at a global level and are divisible by 4.

### New Components

- Switch by @Jeremy-Walton in https://github.com/RoleModel/optics/pull/183
  - A new Switch (sometimes referred to as a toggle) component for boolean input is now available
- Navbar component by @Jeremy-Walton in https://github.com/RoleModel/optics/pull/191
  - A Header bar for building your applications navigation is now available along with some example application layouts.
- Add tab component by @Jeremy-Walton in https://github.com/RoleModel/optics/pull/195
  - A Tab component for creating tabbed navigation controls is now available.
- Side Panel by @Jeremy-Walton in https://github.com/RoleModel/optics/pull/196
  - A Side Panel component is now available along with some example application layouts.
- Add tags component by @dallasbpeters in https://github.com/RoleModel/optics/pull/186
  - A Tag component is now available. It is similar to Badge, but has a different semantic intent (that of interaction where badge is for information) and different behavior when buttons are used within it.
- Add spinner component by @dallasbpeters in https://github.com/RoleModel/optics/pull/188
  - A loading spinner component can now be used. Also includes some example application layouts.

### Component Changes

- Select control fix by @Jeremy-Walton in https://github.com/RoleModel/optics/pull/184
  - The select form control was not respecting background colors set on it. This has been fixed.
- Dropdown Encoded Image by @Jeremy-Walton in https://github.com/RoleModel/optics/pull/199
  - The arrow for the select form control has been changed

### Repository Changes

- Add rule to auto fix on save by @Jeremy-Walton in https://github.com/RoleModel/optics/pull/187
  - This is a code formatting rule for developing on this project.

### Documentation Changes

- Fix various documentation inconsistencies. by @Jeremy-Walton in https://github.com/RoleModel/optics/pull/182
  - Some components were missing instructions for selective imports
  - The customizing and extending sections of each component now show an important notice.
- Documentation improvements by @Jeremy-Walton in https://github.com/RoleModel/optics/pull/194
  - The documentation tool along with other packages for documentation have been updated.
  - A Table of Contents was added to navigate the documentation easier.
  - The introduction page was updated to show some project status indicators

### New Contributors

- @dallasbpeters made their first contribution in https://github.com/RoleModel/optics/pull/188

**Full Changelog**: https://github.com/RoleModel/optics/compare/v0.4.2...v0.5.0

## [0.4.2] - 2023-06-15

### New Components

- [TR#8] Accordion by @Jeremy-Walton in https://github.com/RoleModel/optics/pull/178
  An Accordion component built on the `details` and `summary` elements is now available!

### Base Token Changes

- [TR#8] Accordion by @Jeremy-Walton in https://github.com/RoleModel/optics/pull/178
  A transition token was added to support the new Accordion Component!

**Full Changelog**: https://github.com/RoleModel/optics/compare/v0.4.1...v0.4.2

## [0.4.1] - 2023-06-07

### Breaking Changes

- Addon change by @Jeremy-Walton in https://github.com/RoleModel/optics/pull/173
  - Only applicable if you are using the Tom Select Addon and your application does not pull in Tom Select CSS already.
  - You will need to do that now since the addon does not do that for you. Following the normal Tom Select instructions or following the Addon instructions should be straightforward.

### New Components!

- [TR#93] Tooltips by @Jeremy-Walton in https://github.com/RoleModel/optics/pull/170
  - A simple tooltip implementation using data attribute has been added. This doesn't solve clipping or edge detection. See the documentation for JS package recommendations if that is needed.
- [TR#9] Avatar by @Jeremy-Walton in https://github.com/RoleModel/optics/pull/171
  - Simple visual or navigable avatar element
- [TR#120] Divider by @Jeremy-Walton in https://github.com/RoleModel/optics/pull/172
  - An easy-to-use class for dividing content in your application. An example use-case is between button sections in a sidebar.
- [TR#20] Pagination by @Jeremy-Walton in https://github.com/RoleModel/optics/pull/175
  - Pagination styles build on the existing button classes for creating consistent navigation controls for paginated data. Also includes instruction for use within a table.

### Component Changes

- Alerts fix by @Jeremy-Walton in https://github.com/RoleModel/optics/pull/177
  - `.alert-alert` is now an alias of `.alert-danger`. This allows Rails + Devise to work out of the box with the recommended flash layout.

### Documentation Changes

- Fix Documentation Deployment by @Jeremy-Walton in https://github.com/RoleModel/optics/pull/167
  - The documentation site was not deploying correctly
- [TR#119] Import Instructions by @Jeremy-Walton in https://github.com/RoleModel/optics/pull/168
  - A graph of which components depend on others has been added to the Selective Imports documentation.
  - Each component now specifies what other components it requires and includes instructions for importing by itself if you are using selective imports.
- Fix Sidebar Recipe Documentation by @Jeremy-Walton in https://github.com/RoleModel/optics/pull/174
  - The examples for how to customize the sidebar were not working correctly. They are now fixed and using the latest sidebar version.

**Full Changelog**: https://github.com/RoleModel/optics/compare/v0.4.0...v0.4.1

## [0.4.0] - 2023-05-22

### Breaking Changes

- [T#17] Tables Revisions by @Jeremy-Walton in https://github.com/RoleModel/optics/pull/155
  - The color of the header was changed to be a more muted color
  - The density options are changed to use height instead of padding.
  - If your application is customizing this component, I recommend reviewing the PR for any changes.
- [TR#12] Button Revisions by @Jeremy-Walton in https://github.com/RoleModel/optics/pull/156
  - **The default `btn` state is now what `btn-secondary` was.**
  - `btn` will now show the primary color on hover or active state.
  - **The default button size is now large instead of medium.**
  - **`btn--outline` has been removed in favor of using the `btn` or `btn--active` styles**
  - `btn--active` was added to create active states.
  - `btn--icon-with-label` was added to create a stacked button with icon.
  - A Warning button was added.
  - All button styles have been adjusted to reflect current Figma styles.
  - I recommend reviewing the PR for any changes as this changes existing implementation as well as affects customization considerations.
- [TR#22] Flash Alert Revisions by @Jeremy-Walton in https://github.com/RoleModel/optics/pull/158
  - The Alert component has been changed to be outlined by default with an option for filled instead of the other way round.
  - The Alert component has an added option so it can be used as a flash message `alert--flash`.
  - **The Flash component has been removed in favor of using the Alert Component**
  - I recommend reviewing the PR for any changes as this changes existing implementation, removes a component as well as affects customization considerations.
- [TR#107] Sidebar Revisions by @Jeremy-Walton in https://github.com/RoleModel/optics/pull/160
  - **The Subtle Primary option has been removed.**
  - **Sidebar item styles have been removed in favor of just using the existing button styles in the sidebar.**
  - A new compact version of the sidebar has been added as an option between drawer and rail.
  - I recommend reviewing the PR for any changes as this changes existing implementation as well as affects customization considerations.
- [TR#14] Modal Revisions by @Jeremy-Walton in https://github.com/RoleModel/optics/pull/159
  - **The Modal addon has been removed.**
  - Modal Component has been added!
  - I recommend reviewing the PR for any changes If you are using the existing addon and need to switch to using the component.
- [TR#21] Form Revisions by @Jeremy-Walton in https://github.com/RoleModel/optics/pull/164
  - A no Border variation of form controls has been added.
  - Size modifiers for small, medium, and large (with large being default) have been added.
  - The focus states of form controls have been updated to match buttons in a more consistent way.
  - I recommend reviewing the PR for any changes as the placeholder selector interface for customization has changed significantly.

### Component Changes

- [TR#11] Update badge to reflect design by @Jeremy-Walton in https://github.com/RoleModel/optics/pull/152
  - A white box shadow has been added when using the badge on a button for things like a notification indicator.
  - Icons used inside of a badge will have a smaller font size.
- Add confirm dialog with documentation by @Jeremy-Walton in https://github.com/RoleModel/optics/pull/157
  - A new component for Confirm Dialogs has been created!
  - This can be used with something like https://github.com/RoleModel/turbo-confirm for a rails implementation

### Bug Fixes

- Table token bug by @Jeremy-Walton in https://github.com/RoleModel/optics/pull/163
  - There was a token being used that was incorrect. It was a rare case where using a checkbox in a table header will highlight the header when checked. The text color was using a non-existent token.
- Button Focus Fix by @Jeremy-Walton in https://github.com/RoleModel/optics/pull/162
  - Focus on Buttons was triggering on both click and keyboard navigation. This fix changes it to only trigger on keyboard or assistive device (I.E. screen reader) navigation.

### Documentation Changes

- Storybook upgrade by @Jeremy-Walton in https://github.com/RoleModel/optics/pull/161
  - Storybook has been updated to the latest version (v7)
  - As part of this update, the documentation interface has been simplified. Items with no relevance to this project have been hidden and the documentation pages live as their own items in the sidebar instead of being hidden in the docs tab
  - All the documentation has been refactored to clean up and simplify writing new or modifying it. It is also organized to reflect the sidebar organization.
- [TR#18] Card Revisions by @Jeremy-Walton in https://github.com/RoleModel/optics/pull/154
  - The Card documentation has been updated to better reflect real world usage. This mainly removed the color from the example as it was potentially misleading.
- [TR#116] Token Naming Structure Docs by @Jeremy-Walton in https://github.com/RoleModel/optics/pull/165
  - The token documentation has been updated to define and explain the structure of how we name our tokens along with a few examples.
- [TR#117] Folder Structure Documentation by @Jeremy-Walton in https://github.com/RoleModel/optics/pull/166
  - A new documentation page has been added to explain how to organize your css and the import order that is recommended.

**Full Changelog**: https://github.com/RoleModel/optics/compare/v0.3.1...v0.4.0

## [0.3.1] - 2023-03-16

### Component Changes

- Fix token usage for flash by @Jeremy-Walton in https://github.com/RoleModel/optics/pull/153
  - Minor bug fix with the flash animation token not being set properly.

**Full Changelog**: https://github.com/RoleModel/optics/compare/v0.3.0...v0.3.1

## [0.3.0] - 2023-03-09

### Breaking Changes

- [GHI #109] Button API Fix by @Jeremy-Walton in https://github.com/RoleModel/optics/pull/130
  - If you are customizing `--_rm-font-small`, `--_rm-font-medium`, or `--_rm-font-large`, you will need to rename them to `-_rm-btn-font-small`, `-_rm-btn-font-medium`, `-_rm-btn-font-large`

- [GHI #131] Rename rm prefix to op by @Jeremy-Walton in https://github.com/RoleModel/optics/pull/132
  - All token name prefixes have changed from `--rm` to `--op`
- [GHI #133] Revise Layout classes by @Jeremy-Walton in https://github.com/RoleModel/optics/pull/141
  - `.app-wrapper` is now `.app-with-sidebar`
  - `.app__main` is now `.app-body`
  - `.page__header` is now `.app__header`
  - `.page__content` is now `.app__content`
  - `.page__footer` is now `.app__footer`
- [TR#27] Revised Tokens by @Jeremy-Walton in https://github.com/RoleModel/optics/pull/150
  - Input Height tokens have been adjusted. You may want to adjust them.
    - `--op-input-height-small: 2.8rem; // 28px`
    - `--op-input-height-medium: 3.6rem; // 36px`
    - `--op-input-height-large: 4rem; // 40px`
    - `--op-input-height-x-large: 8.4rem; // 84px`
  - Transition tokens have been refactored to include the entire transition instead of just the duration. If you are customizing a component, you may need to refactor.
    - `--op-transition-input: all 120ms ease-in;`
    - `--op-transition-sidebar: all 200ms ease-in-out;`
    - `--op-transition-modal: all 300ms ease-in;`
    - `--op-transition-panel: right 400ms ease-in;`
  - The navigation transition token was adjusted.
    - `--op-transition-navigation` is removed
    - `--op-transition-sidebar` now does what `--op-transition-navigation` did
  - The flash transition token was renamed to reflect it is an animation
    - `--op-transition-flash` is now `--op-animation-flash` and it includes the full animation options instead of just the duration.

- [TR#28] Font Tokens by @Jeremy-Walton in https://github.com/RoleModel/optics/pull/149
  - Added a new stop for 2rem (20px). This is set to `--op-font-x-large` which means all steps above this have been bumped up `2x -> 3x` etc. Any token `large` and above will need to be revised.
- [GHI #125] Enhanced Color Support by @Jeremy-Walton in https://github.com/RoleModel/optics/pull/140
  - `--op-border-color` token has been changed to point to `-op-color-neutral-plus-five` (used to be three). If you want to revert it, you will need to override it back.
  - All color scale tokens (light and dark mode) luminosities have been adjusted.

### Base Token Changes

- [GHI #131] Rename rm prefix to op by @Jeremy-Walton in https://github.com/RoleModel/optics/pull/132
  - All token name prefixes have changed from `--rm` to `--op`
- [TR#27] Revised Tokens by @Jeremy-Walton in https://github.com/RoleModel/optics/pull/150
  - Input Height tokens have been adjusted.
  - Transition tokens have been refactored to include the entire transition instead of just the duration
  - The navigation transition token was remove as it was not being used.
  - The flash transition token was renamed to reflect it is an animation
  - Added new Radius stop (12px)
- [TR#28] Font Tokens by @Jeremy-Walton in https://github.com/RoleModel/optics/pull/149
  - Added a 2x-small font token set to `1rem`
  - Added a new stop for 2rem (20px). This is set to `--op-font-x-large` which means all steps above this have been bumped up `2x -> 3x` etc.
- [GHI #125] Enhanced Color Support by @Jeremy-Walton in https://github.com/RoleModel/optics/pull/140
  - `--op-border-color` token has been changed to point to `-op-color-neutral-plus-five` (used to be three)

### Theme Token Changes

- [GHI #131] Rename rm prefix to op by @Jeremy-Walton in https://github.com/RoleModel/optics/pull/132
  - All token name prefixes have changed from `--rm` to `--op`
- [GHI #125] Enhanced Color Support by @Jeremy-Walton in https://github.com/RoleModel/optics/pull/140
  - All the default scale colors have been adjusted and optimized to maintain contrast.
  - on-alt versions for each scale step have been added

### Layout Changes

- [GHI #133] Revise Layout classes by @Jeremy-Walton in https://github.com/RoleModel/optics/pull/141
  - The layout classes have been renamed to be more intention revealing and intuitive

### Component Changes

- [GHI #109] Button API Fix by @Jeremy-Walton in https://github.com/RoleModel/optics/pull/130
  - The internal size variables were not named correctly. This PR added the `btn` prefix into the variable names.

### Addon Changes

- [GHI #125] Enhanced Color Support by @Jeremy-Walton in https://github.com/RoleModel/optics/pull/140
  - The dark mode overrides for modal and panel were moved to be in their respective addons and therefore not included by default in the dark mode overrides.

### Documentation Changes

- [GHI #125] Enhanced Color Support by @Jeremy-Walton in https://github.com/RoleModel/optics/pull/140
  - Added better Color documentation. color, on-color, and on-color-alt are now grouped together for easier reference.

**Full Changelog**: https://github.com/RoleModel/optics/compare/v0.2.5...v0.3.0

## [0.2.5] - 2023-03-07

### Utility Changes

- [GHI #22] Color, Utility, and Token Documentation by @Jeremy-Walton in https://github.com/RoleModel/optics/pull/148
  - `.self-baseline` was added to round out the existing `.self-...` utilities

### Repository Changes

- [GHI #142] Release Template by @Jeremy-Walton in https://github.com/RoleModel/optics/pull/144
  - Release Notes can be auto categorized by label now.

### Documentation Changes

- [GHI #101] Font and Line Height by @Jeremy-Walton in https://github.com/RoleModel/optics/pull/145
  - Added Documentation for font tokens
- Fix the storybook building by @Jeremy-Walton in https://github.com/RoleModel/optics/pull/146
  - The documentation was not compiling correctly
- [GHI #108] Documentation Updates by @Jeremy-Walton in https://github.com/RoleModel/optics/pull/147
  - Added a note on SASS Compilers
  - Cleaned up syntax highlighting
- [GHI #22] Color, Utility, and Token Documentation by @Jeremy-Walton in https://github.com/RoleModel/optics/pull/148
  - Documentation for all colors, tokens, and utilities has been added. View it at https://docs.optics.rolemodel.design/

**Full Changelog**: https://github.com/RoleModel/optics/compare/v0.2.4...v0.2.5

## [0.2.4] - 2023-02-17

### Refining Changes

- Prevent form-error from shifting form-group [fix #138] by @OutlawAndy in https://github.com/RoleModel/optics/pull/139
  - Form groups in a form were shifting when errors displayed due to grid usage.
  - Checkboxes and Radios were not laying out correctly inside of form groups

### New Contributors

- @OutlawAndy made their first contribution in https://github.com/RoleModel/optics/pull/139

**Full Changelog**: https://github.com/RoleModel/optics/compare/v0.2.3...v0.2.4

## [0.2.3] - 2023-02-13

A couple of Minor bug fixes and a project rename!

### Repo Updates

- Rename project and update documentation https://github.com/RoleModel/optics/pull/128 by @Jeremy-Walton

### Refining Changes

- Form Group Refactor https://github.com/RoleModel/optics/pull/135 by @Jeremy-Walton
  - Form controls should not set a `grid-column` when they are not in a `form-group`
- Deployment Strategy https://github.com/RoleModel/optics/pull/134 by @Jeremy-Walton
  - In order to support projects who pull private RoleModel packages from GitHub Packages, we need to publish to both locations so organization scopes still work.
- Select Bug https://github.com/RoleModel/optics/pull/127 by @Jeremy-Walton
  - The Select dropdown had an issue where the arrow would overlap contents strangely. This has been resolved and cleaned up.
  - When using a multiple select, the dropdown arrow is hidden and the input gets a larger minimum height.

### Breaking Changes

Since the project repository and package have a new name, the project will need to be added to your `package.json` as `@rolemodel/optics`.
Additionally, all imports from the package will need to be updated.
E.G.
`@import '@rolemodel/rolemodel-design-system';` changes to `@import '@rolemodel/optics';`
`@import '@rolemodel/rolemodel-design-system/dist/scss/rolemodel-design-system';` changes to `@import '@rolemodel/optics/dist/scss/optics';`
`@import '@rolemodel/rolemodel-design-system/dist/scss/addons/...';` changes to `@import '@rolemodel/optics/dist/scss/addons/...';`

The existing package `@rolemodel/rolemodel-design-system` will still work so you won't need to update immediately. However, all versions after `v0.1.3-beta` will be published as `@rolemodel/optics`.

Another minor note is that we are now more closely following [Semantic Versioning](https://semver.org/), though we will not update the major number on breaking changes until we have reached a `v1.0.0` at which point we will follow it normally. All breaking changes will be documented in release notes.

**Full Changelog**: https://github.com/RoleModel/optics/compare/v0.1.3-beta...v0.2.3

## [0.1.3-beta] - 2023-01-12

### Repo Updates

- Version in Docs https://github.com/RoleModel/rolemodel-design-system/pull/123 by @Jeremy-Walton
  - The documentation now includes the current version of the design system on the welcome page.
- Documentation dependency updates by @dependabot
  - Bump json5 from 1.0.1 to 1.0.2 https://github.com/RoleModel/rolemodel-design-system/pull/122

### Refining Changes

- Colors and Scales https://github.com/RoleModel/rolemodel-design-system/pull/117 by @Jeremy-Walton
  - There were example colors (blue, green, yellow, etc) that existed but were not needed. They have been removed.
  - The alert colors are no longer based on those example colors. Instead they each (danger, warning, notice, info) have their own `HSL` values that can be set in your theme.
  - As we have used the color scales and needed to customize them, it was clear we needed more luminosity options. Instead of limiting ourselves to a set luminosity scale, we have removed those scales and set the semantic scales directly to luminosity values. This allows for much more flexibility in overriding as well as simplifying the number of tokens in the system. It also removes the potential for someone using one of those variables directly (which wasn't really the intention of it). You can still use an `HSL` value directly as needed but should name it so it can be handled in themes and theme modes. e.g. `--rm-my-custom-component-color: hsl(var(--rm-color-primary-h), hsl(--rm-color-primary-s), 42%);`
- Forms Revisited https://github.com/RoleModel/rolemodel-design-system/pull/118 by @Jeremy-Walton
  - All of the form classes have been refactored to simplify their usage and implementation.
  - All input elements should get the `.form-control` class and they will each be styled correctly based on their type.
  - `.form__group` is now `.form-group` since it is not an element according to BEM practices.
  - `.form__error` is now `.form-error` since it is not an element according to BEM practices.
  - `.form__label` is now `.form-label` since it is not an element according to BEM practices.
  - `.form__input--error` is now `.form-group--error` since it is intended to be used at the group level.
  - `.form__hint` is now `.form-hint` since it is not an element according to BEM practices.
  - `.form__error-summary` is now `.form-error-summary` since it is not an element according to BEM practices.
  - Form elements now have a focus style!
- Tom Select Revisited https://github.com/RoleModel/rolemodel-design-system/pull/120 by @Jeremy-Walton
  - The Tom Select Add on has been rewritten to only override and apply our scale colors in the appropriate places. It should look and feel more integrated out of the box.
- Buttons Revisited https://github.com/RoleModel/rolemodel-design-system/pull/119 by @Jeremy-Walton
  - Buttons now have a focus state!
  - The `.btn--no-border` modifier was setting the font weight to bold which was too bold as a default. This has been removed as it didn't make sense as the correct behavior.

### Breaking Changes

- Colors and Scales https://github.com/RoleModel/rolemodel-design-system/pull/117 by @Jeremy-Walton
  - With the removal of the luminosity scales, it is going to require any customization of your scales (primary, neutral, warning, danger, info, notice) to be refactored. Additionally, any usage of those luminosity values will need to be changed.
- Forms Revisited https://github.com/RoleModel/rolemodel-design-system/pull/118 by @Jeremy-Walton
  - All of the form classes have been refactored to simplify their usage and implementation. As a result, their classes are changed.
  - `.form__input` no longer exists.
  - All input elements should get the `.form-control` class and they will each be styled correctly based on their type.
  - `.form__group` is now `.form-group`
  - `.form__error` is now `.form-error`
  - `.form__label` is now `.form-label`
  - `.form__input--error` is now `.form-group--error`
  - `.form__hint` is now `.form-hint`
  - `.form__error-summary` is now `.form-error-summary`
  - If you have customized form controls, this change will require a refactor of those customizations.
- Tom Select Revisited https://github.com/RoleModel/rolemodel-design-system/pull/120 by @Jeremy-Walton
  - If you are customizing Tom Select in any way, you may need to refactor that to avoid conflict with this simplifying change.
  - It may actually reduce your need to override since it should be styling things better out of the box.
- Buttons Revisited https://github.com/RoleModel/rolemodel-design-system/pull/119 by @Jeremy-Walton
  - If you wanted the bold text on a button with no border, you will need to use the following css to add that behavior back.
  ```css
  %btn-global {
    &.btn--no-border {
      font-weight: var(--rm-font-weight-bold);
    }
  }
  ```

**Full Changelog**: https://github.com/RoleModel/rolemodel-design-system/compare/v0.1.2-beta...v0.1.3-beta

## [0.1.2-beta] - 2023-01-06

### Repo Updates

- Code Linting https://github.com/RoleModel/rolemodel-design-system/pull/116 by @Jeremy-Walton
  - There is now CSS and JS (docs) code linting to ensure code quality in the project.
  - There are also CI tests to verify linting was checked.
- PR Template https://github.com/RoleModel/rolemodel-design-system/pull/121 by @Jeremy-Walton
  - With the addition of linting, additional sanity checks have been added to the PR Template to help ensure they are run and work.
- Documentation dependency updates by @dependabot
  - Bump loader-utils from 1.4.0 to 1.4.2 https://github.com/RoleModel/rolemodel-design-system/pull/106
  - Bump decode-uri-component from 0.2.0 to 0.2.2 https://github.com/RoleModel/rolemodel-design-system/pull/110

### New Components

- Alert https://github.com/RoleModel/rolemodel-design-system/pull/121 by @Jeremy-Walton
  - Alert components that can act as highlights or banners have been added.
  - They support three styles: filled, muted, outlined.
  - They support four colors: Warning, Danger, Info, Notice
  - The can be customized to have titles, icons, and close if you want to build dismissible functionality, and any combination of using or not using those!
- Button Group https://github.com/RoleModel/rolemodel-design-system/pull/104 by @Jeremy-Walton
  - Button groups allow you to create connected buttons in a row.
  - It also introduces a button group toolbar that acts as a collection of button groups with wrapping built in. E.G. Rich text editor toolbar

### Refining Changes

- Standardize Utilities https://github.com/RoleModel/rolemodel-design-system/pull/105 by @Jeremy-Walton
  - The line we have generally drawn is that utilities should be for layout and position, not for look and feel. Therefore, the font size and weight, and shadow utilities are deprecated. This moves us more in line with that goal.
- Checkbox and Radio Simplification https://github.com/RoleModel/rolemodel-design-system/pull/107 by @Jeremy-Walton
  - The implementation of these controls has been simplified and cleaned up.
  - They no longer animate when selected, but their look is much more consistent and implementation is way simpler.
  - With a simplified implementation, the `indeterminate state` for checkboxes is now supported and documented!

### Bug Fixes

- Color Scales https://github.com/RoleModel/rolemodel-design-system/pull/121 by @Jeremy-Walton
  - Some alert scales were missing luminosity stops

### Breaking Changes

- Standardize Utilities https://github.com/RoleModel/rolemodel-design-system/pull/105 by @Jeremy-Walton
  - If you are using the font size, font weight, or shadow utilities, they no longer exist. The underlying tokens still exist are should be used, but the utility classes are removed
- Checkbox and Radio Simplification https://github.com/RoleModel/rolemodel-design-system/pull/107 by @Jeremy-Walton
  - This is less of a breaking change but if your app was customizing these controls, you may need to review and/or refactor.

**Full Changelog**: https://github.com/RoleModel/rolemodel-design-system/compare/v0.1.1-beta...v0.1.2-beta

## [0.1.1-beta] - 2022-11-04

### Refining Changes

- The default theme now uses RoleModel blue as the primary color.
- Semantic Stops https://github.com/RoleModel/rolemodel-design-system/pull/102 by @Jeremy-Walton
  - Semantic tokens now use words instead of numbers so `--rm-color-primary-plus-3` would read `--rm-color-primary-plus-three`
  - We now have plus-eight down through minus-eight
- Semantic utilities like `.background-primary-plus-3` are now deprecated as a part of trying to move away from the look and feel utilities.

### Breaking Changes

- The Semantic utilities are no longer available. `.background-primary-plus-3` etc. If you used them in places such as cards, consider making that style the default card style or making a custom card class. The tokens they used are still very much available and encouraged to be used.
- Semantic stops have more fidelity which means plus 3 doesn't mean what it used to mean. Here is a mapping reference if you want to maintain what you may have been using.
  Anything using `plus-3` should now use `plus-seven`
  Anything using `plus-2` should now use `plus-four`
  Anything using `plus-1` should now use `plus-three`
  Anything using `minus-3` should now use `minus-seven`
  Anything using `minus-2` should now use `minus-five`
  Anything using `minus-1` should now use `minus-three`
  Anything using `on-plus-3` should now use `on-plus-seven`
  Anything using `on-plus-2` should now use `on-plus-four`
  Anything using `on-plus-1` should now use `on-plus-three`
  Anything using `on-minus-3` should now use `on-minus-seven`
  Anything using `on-minus-2` should now use `on-minus-five`
  Anything using `on-minus-1` should now use `on-minus-three`

If your application is adjusting the default scales, you will need to compare the new values to what you used to determine the best mapping for your needs.

**Full Changelog**: https://github.com/RoleModel/rolemodel-design-system/compare/v0.1.0-beta...v0.1.1-beta

## [0.1.0-beta] - 2022-10-19

### Repo Updates

- Issues Templates https://github.com/RoleModel/rolemodel-design-system/pull/73 by @Jeremy-Walton
  - It is now easier to report a bug or request a new feature! Issue templates prefill the form to help you describe what you are after.
  - Take a look here: [New Issue](https://github.com/RoleModel/rolemodel-design-system/issues/new/choose)

### New Components

- Tables https://github.com/RoleModel/rolemodel-design-system/pull/75 and https://github.com/RoleModel/rolemodel-design-system/pull/91 by @Jeremy-Walton and @zoopmaster
  - Tables have been overhauled. They support multiple variations, data densities, striping, and more.
  - They also support fixed headers and footers, along with a fixed height and different combinations of those.
- Sidebar https://github.com/RoleModel/rolemodel-design-system/pull/83 and https://github.com/RoleModel/rolemodel-design-system/pull/97 by @Jeremy-Walton
  - Sidebar has been completely rewritten from the ground up. It now supports section titles, dividers, active and hover states, drawer and rail states, and responsive support to transition between the drawer and the rail on the medium breakpoint.
- Layout by @Jeremy-Walton
  - There are now Layout classes to provide support for sidebars along with sticky headers and footers in your application.

### Refining Changes

- Dark Mode Alert Scales https://github.com/RoleModel/rolemodel-design-system/pull/88 by @Jeremy-Walton
  - The alert scales now support dark mode. This means that tables and flash messages will properly switch to the correct dark version of the colors.
- Form Group and Error Messages https://github.com/RoleModel/rolemodel-design-system/pull/90 by @Jeremy-Walton
  - The `.form__group` class now uses grid to lay out the contents within it. e.g. `.form__input, .form__hint, etc.`. Errors, hints, and inputs have been refines to display more consistently. This also removes the need for using margins and other spacing techniques inside the form group. by @Jeremy-Walton
- Customization API https://github.com/RoleModel/rolemodel-design-system/pull/93 by @Jeremy-Walton
  - All the components were written in a way that allowed them to be overridden easily and flatly. After implementing this, we realized it was leading to more confusion as to how to use it. All the component implementations have been simplified to just use standard CSS and SASS patterns with a few minor exceptions that are clearly documented.
- Better Documentation by @Jeremy-Walton
  - Recipes is a new section that gives examples of how to structure the layout of your application with or without a sidebar.
  - There is now a Recipe showing examples of customized sidebars to provide a starting point if your application needs to redefine the look of its sidebar.

### Bug Fixes

- Tom Select Single https://github.com/RoleModel/rolemodel-design-system/pull/86 by @Jeremy-Walton
  - The Tom Select addon only overrides the multi-select variant properly. The single select variant now matches styles correctly!
- Button Fixes https://github.com/RoleModel/rolemodel-design-system/pull/87 and https://github.com/RoleModel/rolemodel-design-system/pull/95 by @Jeremy-Walton
  - This fixes buttons so that at mobile breakpoints, they will size up to reflect best practices on minimum button sizes on mobile.
  - Buttons inside of a flex container were not respecting width settings. They now respect it and do not squish in the container.

### Breaking Changes

- Tables
  - There shouldn't be any issues with this as the base classes didn't change, but the implementation did change so you may want to review.
- Sidebar
  - If your app was using the existing sidebar styles, it will need to be completely rewritten to match the newly expected structure.
- Alert Scales
  - The alert scale semantic variables will now change in dark mode following a similar pattern to the primary and neutral scales. If your app uses them outside of the flash component, you may want to review them and verify things still work as intended.
- Form Group and Error Messages
  - If your app uses simple form helpers to construct your form groups, you will need to ensure it places validation errors underneath the input instead of inline with the label. This was changed to prevent overlap and wrapping issues found in larger error messages.
    The output should generally look like the following:
  ```
  <div class="form__group form__input--error">
    <label class="form__label" for="random">A Label</label>
    <input type="text" placeholder="text" id="random" class="form__input">
    <span class="form__error">Can't be blank</span>
    <div class="form__hint">A Hint</div>
  </div>
  ```
- Customization API
  - If your app is customizing a base component, you will need to refactor the override implementation to change things correctly.
  - Buttons are the major component that will require refactoring work if you are overriding them. If you are just using the existing styles, you should be fine as the HTML interface is still the same `.btn, .btn-primary, etc`.

### New Contributors

- @zoopmaster made their first contribution in https://github.com/RoleModel/rolemodel-design-system/pull/91

**Full Changelog**: https://github.com/RoleModel/rolemodel-design-system/compare/v0.0.10-beta...v0.1.0-beta

## [0.0.10-beta] - 2022-09-01

- API Update and fixes by @Jeremy-Walton in https://github.com/RoleModel/rolemodel-design-system/pull/80
  - Major changes to the button, badge, and card implementation

### Breaking Changes

- From a usage perspective, no classes changed
- From a customizing or overriding perspective, how you achieve that is vastly different

**Full Changelog**: https://github.com/RoleModel/rolemodel-design-system/compare/v0.0.9-beta...v0.0.10-beta

## [0.0.9-beta] - 2022-08-31

- [GHI #77] Remove Placeholder Selectors by @Jeremy-Walton in https://github.com/RoleModel/rolemodel-design-system/pull/78

**Full Changelog**: https://github.com/RoleModel/rolemodel-design-system/compare/v0.0.8-beta...v0.0.9-beta

## [0.0.8-beta] - 2022-08-22

- [GHI #36] Improved Importing and documentation by @Jeremy-Walton in https://github.com/RoleModel/rolemodel-design-system/pull/55
  - Remove tom select, modal, and panel from being imported by default.
  - Add documentation for "Addons" explaining ^ and how to use them.
  - Add index files for tokens and components to allow for importing the whole folder instead of all files.
- [GHI #23] Theme Switching by @Jeremy-Walton in https://github.com/RoleModel/rolemodel-design-system/pull/56
  - Documentation now allows you to change light and dark mode.
  - Data Attributes for controlling which theme and what mode your app is using have been added.
  - Add documentation for how to theme, customize dark and light mode, and use the above-mentioned data attributes.
  - Deprecate `data-allow-dark-mode-preference='false'` in favor of `data-theme-mode='light'`.
- [GHI #58] Add MIT License by @Jeremy-Walton in https://github.com/RoleModel/rolemodel-design-system/pull/64
- [GHI #59] Badges by @Jeremy-Walton in https://github.com/RoleModel/rolemodel-design-system/pull/63
  - New component has been added!
  - Documentation is included.
- [GHI #62] Center modal class by @Jeremy-Walton in https://github.com/RoleModel/rolemodel-design-system/pull/67
  - The modal addon assumed utility classes were applied in the HTML instead of just defining the style.
- [GHI #61] Button Icon with Size by @Jeremy-Walton in https://github.com/RoleModel/rolemodel-design-system/pull/66
  - Buttons using the icon and size modifiers now scale correctly
- [GHI #60] Use real token and fix default icon vertical alignment by @Jeremy-Walton in https://github.com/RoleModel/rolemodel-design-system/pull/65
  - Added documentation for existing icon styles.
  - Fix potential alignment issues by standardizing line height and vertical alignment of icons.
- [GHI #22] Flash Documentation by @Jeremy-Walton in https://github.com/RoleModel/rolemodel-design-system/pull/68
  - Added documentation for existing flash alert styles.
  - Simplified HTML structure.

### Breaking Changes

- Tom Select is no longer imported automatically. See Addon Documentation for how to import it if your app needs it.
- Panel and Modal are no longer imported automatically. See Addon Documentation for how to import them if your app needs them.
- Deprecated `data-allow-dark-mode-preference='false'`. You can achieve the same effect by setting `data-theme-mode='light'`.
- Flash message HTML structure has been simplified. See new documentation on what is expected.

### Documentation

https://rolemodel.github.io/rolemodel-design-system

**Full Changelog**: https://github.com/RoleModel/rolemodel-design-system/compare/v0.0.7-beta...v0.0.8-beta

## [0.0.7-beta] - 2022-08-11

- Generate token json by @NathanSadler in https://github.com/RoleModel/rolemodel-design-system/pull/53 / https://github.com/RoleModel/rolemodel-design-system/pull/54
  - Generate the json token file automatically rather than having to manually keep it up to date.
  - This file can be ingested or read by your code for whatever purposes you may have.
- Storybook by @Jeremy-Walton in https://github.com/RoleModel/rolemodel-design-system/pull/47
  - New Documentation that can be found on https://rolemodel.github.io/rolemodel-design-system !
  - All the existing documentation has been migrated to Storybook.
  - This allows for interaction with component docs and even embedding of examples elsewhere.

### New Contributors

- @NathanSadler made their first contribution in https://github.com/RoleModel/rolemodel-design-system/pull/53 and https://github.com/RoleModel/rolemodel-design-system/pull/54

**Full Changelog**: https://github.com/RoleModel/rolemodel-design-system/compare/v0.0.6-beta...v0.0.7-beta

## [0.0.6-beta] - 2022-07-28

- Material Symbols Update by @Jeremy-Walton in https://github.com/RoleModel/rolemodel-design-system/pull/50
  - Pull from CDN instead of using a package
- [GHI #39] Install Instructions by @Jeremy-Walton in https://github.com/RoleModel/rolemodel-design-system/pull/51
  - Simple installation instructions added the the README
- [GHI #46] Shadows by @Jeremy-Walton in https://github.com/RoleModel/rolemodel-design-system/pull/52
  - Improve our shadow tokens and utilities

**Full Changelog**: https://github.com/RoleModel/rolemodel-design-system/compare/v0.0.5-beta...v0.0.6-beta

## [0.0.5-beta] - 2022-07-28

- [GHI #8] Transitions and Animations by @Jeremy-Walton in https://github.com/RoleModel/rolemodel-design-system/pull/44
  - Make tokens for transitions
  - Move flash animation to base tokens file
- Feedback updates by @Jeremy-Walton in https://github.com/RoleModel/rolemodel-design-system/pull/42
  - Add background: none and cursor: pointer properties to button in base
  - Update forms to include form__inline-group, form__color, form__textarea, and read-only versions of input, textarea, color, and dropdown
  - Update PR template to include sanIty checks
  - Add font and space scale units to allow for component-specific overriding.
  - Add plus and minus max to semantic scales
  - Update token structure docs to include all current tokens
  - Clean up card styles and add documentation
  - Add documentation for the scale overriding
- Specify scss for material symbols import by @Jeremy-Walton in https://github.com/RoleModel/rolemodel-design-system/pull/48
- Prepare package for release by @Jeremy-Walton in https://github.com/RoleModel/rolemodel-design-system/pull/49

**Full Changelog**: https://github.com/RoleModel/rolemodel-design-system/compare/v0.0.4-beta...v0.0.5-beta

## [0.0.4-beta] - 2022-07-11

- Scale simplification by @Jeremy-Walton in https://github.com/RoleModel/rolemodel-design-system/pull/32
- [GHI #11] Borders and Outlines by @Jeremy-Walton in https://github.com/RoleModel/rolemodel-design-system/pull/33
- [GHI #36] Add ability to disable dark mode by @Jeremy-Walton in https://github.com/RoleModel/rolemodel-design-system/pull/37
- [GHI #7] Forms by @Jeremy-Walton in https://github.com/RoleModel/rolemodel-design-system/pull/34
- [GHI#35] Better reset and base by @Jeremy-Walton in https://github.com/RoleModel/rolemodel-design-system/pull/38

**Full Changelog**: https://github.com/RoleModel/rolemodel-design-system/compare/v0.0.3-beta...v0.0.4-beta

## [0.0.3-beta] - 2022-06-23

- Fix bugs by @Jeremy-Walton in https://github.com/RoleModel/rolemodel-design-system/pull/28
- [GHI #10] Buttons by @Jeremy-Walton in https://github.com/RoleModel/rolemodel-design-system/pull/29
- Bump version number by @Jeremy-Walton in https://github.com/RoleModel/rolemodel-design-system/pull/31

**Full Changelog**: https://github.com/RoleModel/rolemodel-design-system/compare/v0.0.2-beta...v0.0.3-beta

## [0.0.2-beta] - 2022-06-21

- [GHI #2] Fix Class Typo by @Jeremy-Walton in https://github.com/RoleModel/rolemodel-design-system/pull/12
- [GHI #17] Breakpoint values by @Jeremy-Walton in https://github.com/RoleModel/rolemodel-design-system/pull/18
- [GHI #15] Color Scales by @Jeremy-Walton in https://github.com/RoleModel/rolemodel-design-system/pull/20
- Change luminosity scale by @Jeremy-Walton in https://github.com/RoleModel/rolemodel-design-system/pull/24
- [GHI #6] Tom Select by @Jeremy-Walton in https://github.com/RoleModel/rolemodel-design-system/pull/13
- Set breakpoints to pixel values by @Jeremy-Walton in https://github.com/RoleModel/rolemodel-design-system/pull/25
- [GHI #21] File Structure by @Jeremy-Walton in https://github.com/RoleModel/rolemodel-design-system/pull/26
- Prepare for release by @Jeremy-Walton in https://github.com/RoleModel/rolemodel-design-system/pull/27

**Full Changelog**: https://github.com/RoleModel/rolemodel-design-system/compare/v0.0.1-beta...v0.0.2-beta

## [0.0.1-beta] - 2022-06-07

- Various updates by @Jeremy-Walton in https://github.com/RoleModel/rolemodel-design-system/pull/5

**Full Changelog**: https://github.com/RoleModel/rolemodel-design-system/compare/v0.0.11-alpha...v0.0.1-beta

## [0.0.11-alpha] - 2022-06-07

- Change to NPM by @Jeremy-Walton in https://github.com/RoleModel/rolemodel-design-system/pull/9

**Full Changelog**: https://github.com/RoleModel/rolemodel-design-system/compare/v0.0.10-alpha...v0.0.11-alpha

## [0.0.10-alpha] - 2022-04-14

**Full Changelog**: https://github.com/RoleModel/rolemodel-design-system/compare/v0.0.9-alpha...v0.0.10-alpha

## [0.0.9-alpha] - 2022-03-31

**Full Changelog**: https://github.com/RoleModel/rolemodel-design-system/compare/v0.0.8-alpha...v0.0.9-alpha

## [0.0.8-alpha] - 2022-03-31

- Dist configuration by @Jeremy-Walton in https://github.com/RoleModel/rolemodel-design-system/pull/1

### New Contributors

- @Jeremy-Walton made their first contribution in https://github.com/RoleModel/rolemodel-design-system/pull/1

**Full Changelog**: https://github.com/RoleModel/rolemodel-design-system/compare/v0.0.7-alpha...v0.0.8-alpha

## [0.0.7-alpha] - 2022-03-12

**Full Changelog**: https://github.com/RoleModel/rolemodel-design-system/compare/v0.0.6-alpha...v0.0.7-alpha

## [0.0.6-alpha] - 2022-03-11

**Full Changelog**: https://github.com/RoleModel/rolemodel-design-system/compare/v0.0.5-alpha...v0.0.6-alpha

## [0.0.5-alpha] - 2022-03-11

**Full Changelog**: https://github.com/RoleModel/rolemodel-design-system/compare/v0.0.4-alpha...v0.0.5-alpha

## [0.0.4-alpha] - 2022-03-11

**Full Changelog**: https://github.com/RoleModel/rolemodel-design-system/compare/v0.0.3-alpha...v0.0.4-alpha

## [0.0.3-alpha] - 2022-03-10

**Full Changelog**: https://github.com/RoleModel/rolemodel-design-system/compare/v0.0.2-alpha...v0.0.3-alpha

## [0.0.2-alpha] - 2022-03-09

**Full Changelog**: https://github.com/RoleModel/rolemodel-design-system/compare/v0.0.1-alpha...v0.0.2-alpha

## [0.0.1-alpha] - 2022-03-09

Initial release to test Github Packages publishing
