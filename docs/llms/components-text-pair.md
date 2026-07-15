# Text Pair

[Source Code](https://github.com/RoleModel/optics/blob/main/src/components/text_pair.css)

The Text Pair component is used to display a title and subtitle together. It can also be used to group other elements within it, though should generally be reserved for text.

## Playground

```html
<div class="text-pair">
  <span class="text-pair__title">This is the Title</span>
  <span class="text-pair__subtitle">This is the Subtitle</span>
</div>
```
| Arg | Default | Options | Description |
| --- | --- | --- | --- |
| `inline` |  |  |  |
| `titleText` |  |  |  |
| `titleSize` |  | `small`, `medium`, `large` |  |
| `subtitleText` |  |  |  |
| `subtitleSize` |  | `small`, `medium`, `large` |  |
| `gap` |  | `none`, `xxs`, `xs`, `sm`, `md`, `lg`, `xl` |  |

### Selective Imports

Text Pair can be used as a standalone component, however, it does have a few dependencies. To see a full dependency list, see [Dependency Graph](overview-selective-imports.md#dependencies)

```css
/* Depends on */
@import '@rolemodel/optics/dist/css/core/fonts';
@import '@rolemodel/optics/dist/css/core/tokens';
@import '@rolemodel/optics/dist/css/core/base';

/* Component */
@import '@rolemodel/optics/dist/css/components/text_pair';
```

## Variations

### Default

`.text-pair` should be used on a div. Within it, `.text-pair__title` and `.text-pair__subtitle` on spans can be used to display the title and subtitle.

```html
<div class="text-pair">
  <span class="text-pair__title">This is the Title</span>
  <span class="text-pair__subtitle">This is the Subtitle</span>
</div>
```

### Inline

`.text-pair--inline` can be added to display the title and subtitle horizontally aligned. This is useful for displaying a key, value pair.

```html
<div class="text-pair text-pair--inline">
  <span class="text-pair__title">Temperature:</span>
  <span class="text-pair__subtitle">72℉</span>
</div>
```

### Title Size

`.text-pair__title--small`, `.text-pair__title--medium`, `.text-pair__title--large`, (with medium being the default) modify the font size of the title text.

```html
<div class="text-pair text-pair--inline">
  <span class="text-pair__title text-pair__title--large">Large Title</span>
  <span class="text-pair__subtitle">This is the Subtitle</span>
</div>
```

### Subtitle Size

`.text-pair__subtitle--small`, `.text-pair__subtitle--medium`, `.text-pair__subtitle--large`, (with small being the default) modify the font size of the subtitle text.

Description of subtitle size example

```html
<div class="text-pair text-pair--inline">
  <span class="text-pair__title">This is the Title</span>
  <span class="text-pair__subtitle text-pair__subtitle--large">Large Subtitle</span>
</div>
```

## Text Pair API

Styles are built on CSS variables scoped to the Text Pair.

Here are the variables that can be customized.

```css
--_op-text-pair-font-size-small:
--_op-text-pair-font-size-medium:
--_op-text-pair-font-size-large:
```

## Customizing Text Pair styles

> **Important!:** These patterns represent how to customize the style of the Text Pair for your project.

The Text Pair classes are structured using the [BEM methodology](https://getbem.com/naming).

This allows us to define core styles on a main [block](https://getbem.com/naming/#block) class, and use [modifiers](https://getbem.com/naming/#modifier) to encapsulate variant styles. You can modify all textpair behavior by overriding the `.text-pair` selector and setting any properties:

```css
.text-pair {
  gap: var(--op-space-x-large);
}
```

## New Text Pair Variations

> **Important!:** These patterns represent how to create new variations of the Text Pair for your project.

Your application may need a variation. To add one, just follow this template. Note the double hyphen, indicating that this is a [modifier](https://getbem.com/naming/#modifier):

```css
.text-pair--{name} {
  gap:
}
```
