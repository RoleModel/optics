# Optics, a RoleModel Design System

[![Linting CI](https://github.com/RoleModel/optics/actions/workflows/linting.yml/badge.svg)](https://github.com/RoleModel/optics/actions/workflows/linting.yml)

Optics is an scss package that provides base styles and components that can be integrated and customized in a variety of projects.

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

If you are using webpack to compile, you can add this import to the top of your root level `scss` file.

```scss
@import '@rolemodel/optics';
```

If you are using a different compiler such as Dart Sass, you may need to reference the scss file directly.

```scss
@import '@rolemodel/optics/dist/scss/optics';
```

## Documentation

We use [Storybook](https://storybook.js.org/docs/html/get-started/introduction) as a way to provide informative and interactive documentation.

It can be found here [Optics Documentation](https://docs.optics.rolemodel.design/)

## Tokens

Tokens are defined in `src/core/tokens`

- All core tokens are defined in `src/core/tokens/base_tokens.scss`
- Basic color tokens are defined in `src/core/tokens/example_color_tokens.scss`
- Color scale tokens are defined in `src/core/tokens/scale_color_tokens.scss`
- Alert color tokens are defined in `src/core/tokens/alert_color_tokens.scss`
- Dark mode tokens are defined in `src/core/tokens/dark_mode_tokens.scss`

There are also a few component specific tokens that are defined in their respective component file, but those are not indented to be global or used outside of that file.

There is a JSON file in `docs/token_structure.json` that lists all the current tokens in one place and shows how the names indicate organization.

## License

[MIT](LICENSE)
