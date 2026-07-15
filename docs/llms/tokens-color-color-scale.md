# Color Scales

[Source Code](https://github.com/RoleModel/optics/blob/main/src/core/tokens/scale_color_tokens.css)

Optics has five main color scales that provide all the color your application may need. These Consist of the `Primary` scale, the `Neutral` scale, and four Alert Color Scales, `Warning`, `Danger`, `Info`, and `Notice`.

Each scale is a set of semantically named variables that use the same hue and saturation, but change the luminosity.

We borrow from the photography concept of [Aperture f-stops](https://www.adobe.com/creativecloud/photography/discover/f-stop.html).

`Plus` indicates the addition of luminosity or getting brighter. `Minus` indicates the removal of luminosity or getting darker.

We start with a base color and include a plus one through eight and max (full luminosity a.k.a white), as well as minus one through eight and max (zero luminosity a.k.a black).

Along with this set of 19 (base, plus 1-8, plus max, minus 1-8, minus max) semantic `stops`, there are corresponding `on` colors for each.
These `on` colors are aimed to provide contrast respecting text colors for text on a background of that color. There are also `alt` colors to provide an additional text color option to add variety and more color options.

Here is an example of what these variables look like:

```css
--op-color-primary-plus-four: light-dark(
  hsl(var(--op-color-primary-h) var(--op-color-primary-s) 84%),
  hsl(var(--op-color-primary-h) var(--op-color-primary-s) 24%)
);
--op-color-primary-on-plus-four: light-dark(
  hsl(var(--op-color-primary-h) var(--op-color-primary-s) 24%),
  hsl(var(--op-color-primary-h) var(--op-color-primary-s) 84%)
);
--op-color-primary-on-plus-four-alt: light-dark(
  hsl(var(--op-color-primary-h) var(--op-color-primary-s) 4%),
  hsl(var(--op-color-primary-h) var(--op-color-primary-s) 44%)
);
```

An element using the `var(--op-color-primary-plus-four)` for the background color could use `var(--op-color-primary-on-plus-four)` or `var(--op-color-primary-on-plus-four-alt)` for the text color.

`var(--op-color-primary-original)` is included for occasions when you need to stay true to your brand color.

## Playground

```html
<div style="background-color: var(--op-color-primary-base)" class="card-padded">
  <p style="color: var(--op-color-primary-on-base)">Background: Primary Base</p>
  <p style="color: var(--op-color-primary-on-base)">Text: Primary On Base</p>
  <p style="color: var(--op-color-primary-on-base-alt)">Alt: Primary On Base Alt</p>
</div>
```
| Arg | Default | Options | Description |
| --- | --- | --- | --- |
| `scale` | `"primary"` | `primary`, `neutral`, `alerts-warning`, `alerts-danger`, `alerts-info`, `alerts-notice` |  |
| `step` | `"base"` | `plus-max`, `plus-eight`, `plus-seven`, `plus-six`, `plus-five`, `plus-four`, `plus-three`, `plus-two`, `plus-one`, `base`, `minus-one`, `minus-two`, `minus-three`, `minus-four`, `minus-five`, `minus-six`, `minus-seven`, `minus-eight`, `minus-max` |  |

## Dark Mode

Each scale supports a [Dark Mode](overview-themes.md#dark-mode)

## Reference

You can use the Light / Dark toggle control in the top left corner to show these colors in each mode.

### Base Colors

_Full scale definitions: [scale_color_tokens.css](https://github.com/RoleModel/optics/blob/main/src/core/tokens/scale_color_tokens.css)_

### Scales

_Full scale definitions: [scale_color_tokens.css](https://github.com/RoleModel/optics/blob/main/src/core/tokens/scale_color_tokens.css)_

## Overriding Color Scales

See [Color Scale Overriding](overview-scale-overriding.md#color-scale-overriding) for guidance on overriding each color scale.

## Custom Scale

Your application may need a new scale. To add one, use the following template. Keep in mind, you will also need to add dark mode values for each variable as well. See [Theming](overview-themes.md#theming)

```css
:root {
  /* {name}-color */

  --op-color-{name}-h: new-value-h;
  --op-color-{name}-s: new-value-s;
  --op-color-{name}-l: new-value-l;

  /* {name}-semantic-scale */

  --op-color-{name}-original: hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) var(--op-color-{name}-l));

  /* Main Scale */
  --op-color-{name}-plus-max: light-dark(
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 100%),
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 10%)
  );
  --op-color-{name}-plus-eight: light-dark(
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 98%),
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 18%)
  );
  --op-color-{name}-plus-seven: light-dark(
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 96%),
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 16%)
  );
  --op-color-{name}-plus-six: light-dark(
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 94%),
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 14%)
  );
  --op-color-{name}-plus-five: light-dark(
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 90%),
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 10%)
  );
  --op-color-{name}-plus-four: light-dark(
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 84%),
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 14%)
  );
  --op-color-{name}-plus-three: light-dark(
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 70%),
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 10%)
  );
  --op-color-{name}-plus-two: light-dark(
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 64%),
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 14%)
  );
  --op-color-{name}-plus-one: light-dark(
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 45%),
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 15%)
  );
  --op-color-{name}-base: light-dark(
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 40%),
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 10%)
  );
  --op-color-{name}-minus-one: light-dark(
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 36%),
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 16%)
  );
  --op-color-{name}-minus-two: light-dark(
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 32%),
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 12%)
  );
  --op-color-{name}-minus-three: light-dark(
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 28%),
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 8%)
  );
  --op-color-{name}-minus-four: light-dark(
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 24%),
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 4%)
  );
  --op-color-{name}-minus-five: light-dark(
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 20%),
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 5%)
  );
  --op-color-{name}-minus-six: light-dark(
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 16%),
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 6%)
  );
  --op-color-{name}-minus-seven: light-dark(
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 8%),
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 88%)
  );
  --op-color-{name}-minus-eight: light-dark(
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 4%),
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 84%)
  );
  --op-color-{name}-minus-max: light-dark(
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 0%),
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 80%)
  );

  /* On Scale */
  --op-color-{name}-on-plus-max: light-dark(
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 0%),
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 100%)
  );
  --op-color-{name}-on-plus-max-alt: light-dark(
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 20%),
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 80%)
  );
  --op-color-{name}-on-plus-eight: light-dark(
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 4%),
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 40%)
  );
  --op-color-{name}-on-plus-eight-alt: light-dark(
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 24%),
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 84%)
  );
  --op-color-{name}-on-plus-seven: light-dark(
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 8%),
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 88%)
  );
  --op-color-{name}-on-plus-seven-alt: light-dark(
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 28%),
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 88%)
  );
  --op-color-{name}-on-plus-six: light-dark(
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 16%),
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 76%)
  );
  --op-color-{name}-on-plus-six-alt: light-dark(
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 26%),
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 96%)
  );
  --op-color-{name}-on-plus-five: light-dark(
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 20%),
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 60%)
  );
  --op-color-{name}-on-plus-five-alt: light-dark(
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 40%),
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 90%)
  );
  --op-color-{name}-on-plus-four: light-dark(
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 24%),
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 94%)
  );
  --op-color-{name}-on-plus-four-alt: light-dark(
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 4%),
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 74%)
  );
  --op-color-{name}-on-plus-three: light-dark(
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 20%),
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 70%)
  );
  --op-color-{name}-on-plus-three-alt: light-dark(
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 10%),
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 90%)
  );
  --op-color-{name}-on-plus-two: light-dark(
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 16%),
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 46%)
  );
  --op-color-{name}-on-plus-two-alt: light-dark(
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 6%),
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 76%)
  );
  --op-color-{name}-on-plus-one: light-dark(
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 100%),
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 0%)
  );
  --op-color-{name}-on-plus-one-alt: light-dark(
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 95%),
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 5%)
  );
  --op-color-{name}-on-base: light-dark(
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 100%),
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 10%)
  );
  --op-color-{name}-on-base-alt: light-dark(
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 88%),
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 8%)
  );
  --op-color-{name}-on-minus-one: light-dark(
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 94%),
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 4%)
  );
  --op-color-{name}-on-minus-one-alt: light-dark(
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 82%),
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 2%)
  );
  --op-color-{name}-on-minus-two: light-dark(
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 90%),
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 10%)
  );
  --op-color-{name}-on-minus-two-alt: light-dark(
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 78%),
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 8%)
  );
  --op-color-{name}-on-minus-three: light-dark(
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 86%),
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 6%)
  );
  --op-color-{name}-on-minus-three-alt: light-dark(
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 74%),
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 4%)
  );
  --op-color-{name}-on-minus-four: light-dark(
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 84%),
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 4%)
  );
  --op-color-{name}-on-minus-four-alt: light-dark(
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 72%),
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 2%)
  );
  --op-color-{name}-on-minus-five: light-dark(
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 88%),
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 8%)
  );
  --op-color-{name}-on-minus-five-alt: light-dark(
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 78%),
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 8%)
  );
  --op-color-{name}-on-minus-six: light-dark(
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 94%),
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 4%)
  );
  --op-color-{name}-on-minus-six-alt: light-dark(
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 82%),
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 2%)
  );
  --op-color-{name}-on-minus-seven: light-dark(
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 96%),
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 6%)
  );
  --op-color-{name}-on-minus-seven-alt: light-dark(
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 84%),
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 4%)
  );
  --op-color-{name}-on-minus-eight: light-dark(
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 98%),
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 8%)
  );
  --op-color-{name}-on-minus-eight-alt: light-dark(
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 86%),
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 6%)
  );
  --op-color-{name}-on-minus-max: light-dark(
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 100%),
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 10%)
  );
  --op-color-{name}-on-minus-max-alt: light-dark(
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 88%),
    hsl(var(--op-color-{name}-h) var(--op-color-{name}-s) 8%)
  );
}
```
