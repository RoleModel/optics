# OKLCH Colors

[Source Code](https://github.com/RoleModel/optics/blob/main/src/core/tokens/oklch)

Optics ships an optional build where every color token uses [oklch()](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/oklch) instead of `hsl()`.
The token names are the same, so components and your own styles don't change. Only the theme variables you override are different.

OKLCH lightness matches how light a color looks, and its hue stays the same from light to dark. In HSL, yellow and blue at the same lightness look very different. In OKLCH, a step at 70% looks about as light in any hue, which makes your own colors and scale steps easier to pick.
Each scale is converted from its HSL scale, so the default colors look nearly the same in both builds.

The HSL build stays the default for now. OKLCH is planned to become the default in the next major version.

Use the **Color space** menu in the Storybook toolbar to compare any story in HSL and OKLCH.

## Importing

Replace `optics` with `optics-oklch` in your import. Every icon variant has an OKLCH version too.

```css
@import '@rolemodel/optics/dist/css/optics-oklch';
/* Or */
@import '@rolemodel/optics/dist/css/optics-oklch.min.css';
/* Or, with an icon set */
@import '@rolemodel/optics/dist/css/optics-oklch+lucide_icons';
```

With [selective imports](overview-selective-imports.md), import `core/tokens/oklch` instead of `core/tokens`.

## Theme Variables

Each color is set by three variables, in `oklch()` order:

<table>
  <thead>
    <tr>
      <th>HSL build</th>
      <th>OKLCH build</th>
      <th>Meaning</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code>--op-color-primary-l</code>
      </td>
      <td>
        <code>--op-color-primary-l</code>
      </td>
      <td>
        Lightness of <code>-original</code> (0% to 100%)
      </td>
    </tr>
    <tr>
      <td>
        <code>--op-color-primary-s</code>
      </td>
      <td>
        <code>--op-color-primary-c</code>
      </td>
      <td>Saturation (HSL) or chroma (OKLCH, 0 to 0.4)</td>
    </tr>
    <tr>
      <td>
        <code>--op-color-primary-h</code>
      </td>
      <td>
        <code>--op-color-primary-h</code>
      </td>
      <td>Hue (0 to 360), but on a different color map</td>
    </tr>
  </tbody>
</table>

```css
:root {
  --op-color-primary-l: 53.9%;
  --op-color-primary-c: 0.146;
  --op-color-primary-h: 258.5;
}
```

Like in HSL, the scale steps set their own lightness, so `-l` only changes `--op-color-primary-original`.
Each step multiplies `-c` by a factor taken from the HSL scale, so tints and shades get less colorful toward the light and dark ends, as they do in HSL.

## Migrating Your Theme

HSL and OKLCH numbers don't match. For example, HSL hue `216` is about OKLCH hue `258`. Convert your brand colors with a tool like [oklch.com](https://oklch.com), then set `-l`, `-c`, and `-h`.

These are the Optics defaults in both builds:

<table>
  <thead>
    <tr>
      <th>Color</th>
      <th>
        HSL (<code>h s l</code>)
      </th>
      <th>
        OKLCH (<code>l c h</code>)
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Primary</td>
      <td>
        <code>216 58% 48%</code>
      </td>
      <td>
        <code>53.9% 0.146 258.5</code>
      </td>
    </tr>
    <tr>
      <td>Neutral</td>
      <td>
        primary hue and l, <code>s: 4%</code>
      </td>
      <td>
        primary hue and l, <code>c: 0.01</code>
      </td>
    </tr>
    <tr>
      <td>Alerts Warning</td>
      <td>
        <code>47 100% 61%</code>
      </td>
      <td>
        <code>88.2% 0.166 92.3</code>
      </td>
    </tr>
    <tr>
      <td>Alerts Danger</td>
      <td>
        <code>0 99% 76%</code>
      </td>
      <td>
        <code>75.2% 0.148 21.2</code>
      </td>
    </tr>
    <tr>
      <td>Alerts Info</td>
      <td>
        <code>216 58% 48%</code>
      </td>
      <td>
        <code>53.9% 0.146 258.5</code>
      </td>
    </tr>
    <tr>
      <td>Alerts Notice</td>
      <td>
        <code>130 61% 64%</code>
      </td>
      <td>
        <code>80.4% 0.166 147.4</code>
      </td>
    </tr>
  </tbody>
</table>

If you [override scale steps](overview-scale-overriding.md), rewrite each `hsl()` as `oklch()`. Lightness values are not the same in both builds, so copy them from `core/tokens/oklch/scale_color_tokens.css`.

After you change your theme, run the [contrast checker](tools-contrast-checker.md) to find any text that no longer passes.
