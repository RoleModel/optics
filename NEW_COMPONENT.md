# Process for Creating New Code Components

To create a new CSS component, follow these steps:

1. Start by defining a css `.{component-name}` selector for the component. This will serve as the base style for the component and all its variants.
2. Create modifiers for any all variants of the component you defined in the previous step. This ensures that the base style is shared consistently across all variations.
3. When creating variants of the component, use the following syntax: `.{component-name}--{variant}`. It can be helpful to nest these under the main class with a `&.{component-name}--{variant}` to ensure they only work with that component.
4. For stylistic tweaks that apply to all variants, use modifiers following the BEM (Block, Element, Modifier) syntax. The modifier class should be in the format: `.{component-name}--{modifier}` just like the other variants.

To illustrate these concepts, let's consider an example of a button. You can use the following template as a guide:

```css
/* Define the main component */
.btn {
  /* Base styles for the button */

  /* Hover state */
  &:hover {
    /*
      Styles for the hovered button modifier
      ...
    */
  }

  /* Modifier: Large button */
  &.btn--large {
    /* Styles for the large button modifier */
  }

  /* Modifier: Disabled button */
  &.btn--disabled,
  &:disabled {
    /* Styles for the disabled button modifier */
  }
}

/* Variant: Primary button */
.btn.btn--primary {
  /*
    Specific styles for the primary button variant
    ...
  */
}
```

By following this approach, you can easily create and manage CSS components with consistent styles and variations.

<!-- Future Instructions -->
<!-- # When and how to use a component API? -->
