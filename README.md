# rolemodel-design-system

An experiment in breaking the styles and design system elements out of RoleModel Rails and also experiment with packages.

## Tokens

Tokens are defined in `src/core/tokens`

- All core tokens are defined in `src/core/tokens/base_tokens.scss`
- Basic color tokens are defined in `src/core/tokens/example_color_tokens.scss`
- Color scale tokens are defined in `src/core/tokens/scale_color_tokens.scss`
- Dark mode tokens are defined in `src/core/tokens/dark_mode_tokens.scss`

There are also a few component specific tokens that are defined in their respective component file, but those are not indented to be global or used outside of that file.

There is a JSON file in `docs/token_structure.json` that lists all the current tokens in one place and shows how the names indicate organization.

## Theming

RoleModel Design System defines the default theme along with it's dark mode.

If you want to customize your application, you can provide your own theme files that serve as overrides to the existing tokens.

An example implementation your main scss file would look like:

```scss
@import '@rolemodel/rolemodel-design-system';

@import 'stylesheets/theme/my_app_theme';
```

Take a look at `src/theme/example_theme.scss` for an idea of how to structure your custom theme. It generally will look like:

```scss
@mixin color-varieties {
  --rm-color-primary-h: my-new-value;
  --rm-color-primary-s: my-new-value;
  --rm-color-primary-l: my-new-value;
}

@mixin fonts {
  --rm-font-family: 'Noto Sans', 'Noto Serif', sans-serif;
}

:root {
  @include color-varieties;
  @include fonts;
}
```

## Selective Imports

If you do not want all the styles RoleModel Design System provides, you can import only the components your app needs like:

```scss
// Most components require the token files at least since they are used throughout the system.
@import '@rolemodel/rolemodel-design-system/scss/core/tokens/base_tokens';
@import '@rolemodel/rolemodel-design-system/scss/core/tokens/example_color_tokens';
@import '@rolemodel/rolemodel-design-system/scss/core/tokens/scale_color_tokens';
@import '@rolemodel/rolemodel-design-system/scss/core/tokens/dark_mode_tokens';

@import '@rolemodel/rolemodel-design-system/scss/components/button.scss';
```

## Component Documentation

[Buttons](./docs/components/button/button.md)
