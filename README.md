# Optics, a RoleModel Design System

<div style='display: flex; gap: 10px;'>

[![Code](https://img.shields.io/badge/GitHub-Code-232323.svg?logo=github&logoColor=white)](https://github.com/RoleModel/optics)

[![License](https://img.shields.io/badge/license-MIT-232323.svg)](https://github.com/RoleModel/optics/blob/main/LICENSE)

[![npm](https://img.shields.io/npm/dw/@rolemodel/optics?label=npm)](https://www.npmjs.com/package/@rolemodel/optics)

[![Linting CI](https://github.com/RoleModel/optics/actions/workflows/linting.yml/badge.svg)](https://github.com/RoleModel/optics/actions/workflows/linting.yml)

</div>

Optics is an css package that provides base styles and components that can be integrated and customized in a variety of projects.

## Installation

### NPM

```sh
npm install @rolemodel/optics
```

### Yarn

```sh
yarn add @rolemodel/optics
```

### Import

You can add this import to the top of your root level `css` file.

```css
@import '@rolemodel/optics'; /* Using webpack to compile */
/* Or */
@import '@rolemodel/optics/dist/css/optics'; /* Using a different compiler or no compiler */
/* Or */
@import '@rolemodel/optics/dist/css/optics.min.css'; /* If you want a single file with all the styles in it. */
```

## Documentation

We use [Storybook](https://storybook.js.org/docs/html/get-started/introduction) as a way to provide informative and interactive documentation.

It can be found here [Optics Documentation](https://docs.optics.rolemodel.design/)

### Token Documentation

We use the Storybook Design Token for showing design tokens in the documentation. This allows us to tag groups of tokens with a category and a presenter.

[Available Presenters](https://github.com/UX-and-I/storybook-design-token#available-presenters)

Add the following above a group to categorize the tokens.

```css
/**
* @tokens Basic Colors
* @presenter Color
*/
```

### Component Documentation

For instructions on how to create a new component, see [Process for Creating New Components](./NEW_COMPONENT.md)

Additional stories can be added using the following command, or copying an existing story.

```sh
npm run generate
```

The visual graphic found on the Selective Imports page in the documentation is generated from the `tools/generate-graph.dot` file. You can preview and export a newer svg version of the graphic by using the `tintinweb.graphviz-interactive-preview` VSCode extension.

## License

[MIT](LICENSE)
