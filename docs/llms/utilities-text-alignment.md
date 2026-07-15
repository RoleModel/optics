# Text Alignment

[Source Code](https://github.com/RoleModel/optics/blob/main/src/core/utilities.css)

Text Alignment utility classes can be used to align text in an element.

## Playground

```html
<div class="text-left text-alignment-demo">left</div>
```
| Arg | Default | Options | Description |
| --- | --- | --- | --- |
| `alignment` | `"left"` | `left`, `center`, `right`, `justify` |  |

## Left

`.text-left` The inline contents are aligned to the left edge of the line box. Left is the default for most text so this is primarily for overriding alternate behavior.

```html
<div class="text-left text-alignment-demo">left</div>
```

## Center

`.text-center` The inline contents are centered within the line box.

```html
<div class="text-center text-alignment-demo">center</div>
```

## Right

`.text-right` The inline contents are aligned to the right edge of the line box.

```html
<div class="text-right text-alignment-demo">right</div>
```

## Justify

`.text-justify` The inline contents are justified. Text should be spaced to line up its left and right edges to the left and right edges of the line box, except for the last line.

```html
<div class="text-justify text-alignment-demo">justify</div>
```
