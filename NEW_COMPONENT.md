# Process for Creating New Code Components

To create a new CSS component, follow these steps:

1. Start by defining a Sass `%{component-name}-global` placeholder for the component. This placeholder will serve as the base style for the component and all its variants.
2. Extend the default class and all variants of the component with the global placeholder you defined in the previous step. This ensures that the base style is applied consistently across all variations.
3. When creating variants of the component, use the following syntax: `.{component-name}-{variant}`. Variants are top-level components that have distinct styles or functionalities.
4. For stylistic tweaks that apply to all variants, use modifiers following the BEM (Block, Element, Modifier) syntax. The modifier class should be in the format: `.{component-name}--{modifier}`.

<!-- TODO: This distintion should exist in the main docs as well, not just in the dev instructions. Understanding how to consume components in your app and know the distinctions here is a good idea. -->

## Variant vs. Modifier

A variant is a top-level component that has distinct styles or functionalities. For example, a button component can have a primary variant that has a different color and hover state than the default button. A modifier is a class that modifies the style of a component. For example, a button component can have a disabled modifier that changes the color and cursor of the button. Modifiers apply to all Variants.

To illustrate these concepts, let's consider an example of a button. You can use the following template as a guide:

```scss
// Define the global placeholder for the button component
%button-global {
  // Base styles for the button

  // Hover state
  &:hover {
    // Styles for the hovered button modifier
    // ...
  }

  // Modifier: Large button
  &.btn--large {
    // Styles for the large button modifier
  }

  // Modifier: Disabled button
  &.btn--disabled,
  &:disabled {
    // Styles for the disabled button modifier
  }
}

// Default button class extending the global styles
.btn {
  @extend %button-global;
  // Specific styles for the default button variant
  // ...
}

// Variant: Primary button
.btn-primary {
  @extend %button-global;
  // Specific styles for the primary button variant
  // ...
}
```

By following this approach, you can easily create and manage CSS components with consistent styles and variations.

<!-- Future Instructions -->
<!-- # When and how to use a component API? -->
