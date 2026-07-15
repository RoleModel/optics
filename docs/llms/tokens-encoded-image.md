# Encoded Image

[Source Code](https://github.com/RoleModel/optics/blob/main/src/core/tokens/base_tokens.css)

Encoded Image tokens are primarily used to create the dropdown arrow on `<select>` elements using the `.form-control` class.

It is a data-encoded URI SVG which can be set as a background image and then positioned as needed.

```html
<select class="form-control form-control--large">
  <option>Option 1</option>
</select>
```

## Usage

These tokens can be applied as a background image and the width for position.

```css
background: var(--op-encoded-images-dropdown-arrow) center right no-repeat;
```

## Available tokens and their definitions

| Token | Value |
| --- | --- |
| `--op-encoded-images-dropdown-arrow-width` | `calc( 1.2 * var(--op-space-scale-unit) )` |
| `--op-encoded-images-dropdown-arrow` | `url('data:image/svg+xml` |
| `--op-encoded-images-dropdown-arrow` | `url('data:image/svg+xml` |
| `--op-encoded-images-dropdown-arrow` | `url('data:image/svg+xml` |
