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

Take a look at `src/theme/rolemodel_theme.scss` for an idea of how to structure your custom theme. It can change the colors, even redefine the luminosity and semantic scales. It generally will look like:

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

## Documentation

### Base Layout

The basic layout that this design system expects looks like the following:
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Sample Layout</title>
    <meta content='width=device-width, initial-scale=1' name='viewport' />
  </head>
  <body>
    <!-- Flash message here -->
    <!-- Confirm here -->
    <!-- Modal here -->
    <!-- Panel here -->
    <div class='container'>
      <!-- Page Contents -->
    </div>
  </body>
</html>
```

### Dark Mode

Dark mode is enabled by default and will dynamically flip your semantic tokens to a dark version of it based on your system setting.
If your application does not use or need dark mode, it can be disabled by adding a data attribute to your root `html` tag.

```html
<!DOCTYPE html>
<html data-allow-dark-mode-preference='false'>
  ...
</html>
```

### Components

[Buttons](./docs/components/button/button.md)

[Card](./docs/components/card/card.md)

[Forms](./docs/components/form/form.md)
