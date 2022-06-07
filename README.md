# rolemodel-design-system

An experiment in breaking the styles and design system elements out of RoleModel Rails and also experiment with packages.

## Tokens

Tokens are defined in a few places

- Some colors are in `scss/theme/default_colors.scss`
- Most are in `scss/theme/base_theme.scss`
- Dynamic color scale tokens are in `scss/core/dynamic_color_engine.scss`

There are also a few component specific tokens that are defined in their respective component file, but those are not indented to be global or used outside of that file.

There is a JSON file in `docs/token_structure.json` that lists all the current tokens in one place and shows how the names indicate organization.

## Theming

RoleModel Design System comes with a default theme along with a dark mode. `scss/theme/base_theme.scss` and `scss/theme/dark_theme.scss`.

If you want to customize your application, you can provide your own theme files that serve as overrides to the existing tokens.

An example implementation in your main scss file would look like:

```scss
@import '@rolemodel/rolemodel-design-system';

@import 'stylesheets/theme/my_app_theme';
@import 'stylesheets/theme/my_app_theme_dark';
```

Within them, you can set token overrides like:

```scss
@mixin color-varieties {
  --color-primary-h: my-new-value;
  --color-primary-s: my-new-value;
  --color-primary-l: my-new-value;
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
// Most component require these three files at least since they define most of the tokens used throughout the components
@import '@rolemodel/rolemodel-design-system/scss/theme/default_colors';
@import '@rolemodel/rolemodel-design-system/scss/theme/base_theme';
@import '@rolemodel/rolemodel-design-system/scss/core/dynamic_color_engine';

@import '@rolemodel/rolemodel-design-system/scss/components/button.scss';
```
