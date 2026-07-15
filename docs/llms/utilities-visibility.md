# Visibility

[Source Code](https://github.com/RoleModel/optics/blob/main/src/core/utilities.css)

Use the '.sr-only' class to hide accessibility text that is needed for screenreaders but needs to be hidden from regular users. [Read more here.](https://snook.ca/archives/html_and_css/hiding-content-for-accessibility)

## Playground

```html
<span class="sr-only">The text</span>
```
| Arg | Default | Options | Description |
| --- | --- | --- | --- |
| `visible` | `false` |  |  |

## Visible

If no class is used the text will appear as normal.

```html
<span>The text</span>
```

## Hidden

Using the `.sr-only` class will visually hide the text but leaves it available to screenreaders.

```html
<span class="sr-only">The text</span>
```
