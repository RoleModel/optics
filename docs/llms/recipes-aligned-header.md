# Aligned Header

[Source Code](https://github.com/RoleModel/optics/blob/main/src/recipes/aligned-header.css)

There are cases when you want to vertically center something on a line of text that wraps. Like a badge or edit button at the end of a text header.
Achieving this can be tricky as a simple flex or grid solution would result in the badge or button coming after the wrapped text in another block instead of inline with the wrapped text at the end of it.

Here is a solution that manually calculates the height of the suffix section based on the overall font size and line height. In this case, we need to explicity set those in order to calculate the height of the suffix section.
This is not a common problem and your particular use-case may need to tweak the implementation. Ultimately, this is not general enough to warrant being a full component in the library, but it is a good example of how to solve this specific problem.

## Playground

```html

<div class='app-body' style="height: 80rem;"> <!-- This class should be on body. Height is for demo purposed -->
  <div class='app__content margin-y-lg'>
    <div class='aligned-header'>
      <span>This is a really long heading that will probably wrap at some point and that will make aligning something at the end of the text rather difficult.</span>
      <div class='aligned-header__centered-suffix'>
        <div class='badge'>Aligned Badge</div>
      </span>
    </div>
  </div>
</div>

```
| Arg | Default | Options | Description |
| --- | --- | --- | --- |
| `example` | `"badge"` | `badge`, `icon-button` |  |

## Badge Example

```css
/* Badge Example */
.aligned-header {
  /* Public API (allowed to be overridden) */
  --_op-line-height: var(--op-line-height-base);
  --_op-font-size: var(--op-font-4x-large);

  font-size: var(--_op-font-size);
  font-weight: var(--op-font-weight-semi-bold);
  line-height: var(--_op-line-height);

  .aligned-header__centered-suffix {
    display: inline-flex;
    block-size: calc(var(--_op-line-height) * var(--_op-font-size));
    align-items: center;
    vertical-align: top;
  }
}
```

```html

<div class='app-body' style="height: 80rem;"> <!-- This class should be on body. Height is for demo purposed -->
  <div class='app__content margin-y-lg'>
    <div class='aligned-header'>
      <span>This is a really long heading that will probably wrap at some point and that will make aligning something at the end of the text rather difficult.</span>
      <div class='aligned-header__centered-suffix'>
        <div class='badge'>Aligned Badge</div>
      </span>
    </div>
  </div>
</div>

```

## Icon Button Example

The CSS is the same as the previous example, but the markup is different.

```html

<div class='app-body' style="height: 80rem;"> <!-- This class should be on body. Height is for demo purposed -->
  <div class='app__content margin-y-lg'>
    <div class='aligned-header'>
      <span>This is a really long heading that will probably wrap at some point and that will make aligning something at the end of the text rather difficult.</span>
      <div class='aligned-header__centered-suffix'>
        <button class='btn btn--no-border btn--icon btn--pill btn--small'>
          <span class='material-symbols-outlined'>info</span>
        </button>
      </span>
    </div>
  </div>
</div>

```
