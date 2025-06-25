# Optics Design System - Training Prompt

## Overview
Optics is a comprehensive design system that follows BEM methodology and uses CSS custom properties (variables) for theming and consistency. It provides a collection of reusable components, design tokens, and patterns for building cohesive user interfaces.

## Core Principles

1. **Component-Based Architecture**: Everything is built as modular, reusable components
2. **BEM Methodology**: Block, Element, Modifier naming conventions for CSS classes
3. **Design Tokens**: Uses CSS variables with an `--op-` prefix for consistency
4. **Responsive Design**: Mobile-first approach with modern CSS techniques
5. **Accessibility**: Maintains WCAG compliance through semantic markup and proper ARIA

## CSS Architecture

### Naming Convention
- **Block**: Main component (`.card`, `.btn`, `.text-pair`)
- **Element**: Child of block (`.card__header`, `.cart__title`)
- **Modifier**: Variant (`.btn--primary`, `.card--shadow-small`)

### CSS Variable Structure
```css
:root {
  /* Color tokens */
  --op-color-primary-base: #0077cc;
  --op-color-primary-minus-four: #004477;
  --op-color-neutral-plus-max: #ffffff;
  --op-color-neutral-plus-eight: #f5f5f5;
  --op-color-neutral-on-plus-max-alt: #666666;

  /* Spacing tokens */
  --op-space-scale-unit: 8px;
  --op-space-x-small: calc(var(--op-space-scale-unit) * 1);
  --op-space-small: calc(var(--op-space-scale-unit) * 2);
  --op-space-medium: calc(var(--op-space-scale-unit) * 3);
  --op-space-large: calc(var(--op-space-scale-unit) * 4);

  /* Font tokens */
  --op-font-small: 0.875rem;
  --op-font-base: 1rem;
  --op-font-large: 1.125rem;
  --op-font-2x-large: 1.5rem;
  --op-font-weight-normal: 400;
  --op-font-weight-semi-bold: 600;
  --op-font-weight-bold: 700;

  /* Border/Radius tokens */
  --op-radius-small: 0.25rem;
  --op-radius-medium: 0.5rem;
  --op-radius-large: 0.75rem;
  --op-border-all: 1px solid;

  /* Shadow tokens */
  --op-shadow-x-small: 0 1px 2px rgba(0, 0, 0, 0.05);
  --op-shadow-small: 0 1px 3px rgba(0, 0, 0, 0.1);
  --op-shadow-medium: 0 4px 6px rgba(0, 0, 0, 0.1);
}
```

## Core Components

### Button
```slim
button.btn Primary Button
button.btn.btn--primary Primary Button
button.btn.btn--destructive Destructive Button
button.btn.btn--icon.btn--small
  span +
button.btn.btn--no-border Borderless Button
```

### Card
```slim
.card Basic Card

.card.card--padded
  | Content with padding

.card
  .card__header Header
  .card__body Body
  .card__footer Footer

.card.card--shadow-small Card with shadow
.card.card--condensed Condensed padding
```

### Text Pair
A pattern for label-value or title-subtitle combinations:
```slim
.text-pair
  span.text-pair__title Title
  span.text-pair__subtitle Subtitle

.text-pair.text-pair--inline
  span.text-pair__title.text-pair__title--medium Label:
  span.text-pair__subtitle.text-pair__subtitle--medium Value

.text-pair.text-pair--inline.text-pair--align-right
  span.text-pair__title Tax
  span.text-pair__subtitle $2.80
```

### Badge
```slim
span.badge Badge
span.badge.badge--primary.badge--pill 2 items
```

### Form Elements
```slim
.form-group
  label.form-label for="input-id" Label
  input.form-control type="text" id="input-id"
  span.form-hint Help text goes here

.form-group.form-group--inline
  label.form-label for="quantity" Qty
  input.form-control.form-control--small type="number"
```

### Divider
```slim
.divider
.divider.divider--spacing-small
.divider.divider--spacing-medium
```

## Responsive Design

### CSS Range Syntax
Optics uses modern CSS range syntax for media queries, with explicit values since variables in queries aren't universally supported:

```css
@media (width <= 768px) {
  /* Mobile styles */
}
```

### Grid System
```slim
.cart-item
  display: grid;
  grid-template-columns: auto 1fr 2fr auto;

  @media (width <= 768px) {
    grid-template-columns: auto 1fr;
    grid-template-areas:
      "image details"
      "image pricing"
      "remove pricing";
  }
```

## Layout Patterns

### App Structure
```slim
body.app-body
  .app__content
    / Content here
```

### Container with Max Width
```css
.component {
  inline-size: 100%;
  max-inline-size: 600px;
  margin: 0 auto;
}
```

### Gap containers

Optics prefers using containers with flex or grid and a gap set, rather than individual items setting their margin or padding for spacing between them.

## Best Practices

1. **Component Customization**:
   - Modify core component behavior by overriding the block class
   - Add new variants with modifier classes (`.component--variant`)
   - Use logical properties (inline-size vs width) for better RTL support

2. **CSS Variable Usage**:
   - Always use Optics variables for consistency
   - Exception: Media query breakpoints require hardcoded values
   - Define component-specific variables for reuse

3. **Component Composition**:
   - Nest components (e.g., card inside another card)
   - Use utility classes to extend component functionality
   - Maintain consistent spacing with Optics spacing variables

4. **Responsive Design**:
   - Mobile-first approach (base styles for mobile, then add desktop)
   - Use modern layouts (Flexbox/Grid) instead of floats
   - Test all components at various viewport sizes

5. **Component Bundling/Import**:
   ```css
   /* Depends on */
   @import '@rolemodel/optics/dist/css/core/fonts';
   @import '@rolemodel/optics/dist/css/core/tokens';
   @import '@rolemodel/optics/dist/css/core/base';

   /* Component */
   @import '@rolemodel/optics/dist/css/components/card';
   ```

## When Building New Components

1. Start with existing Optics components when possible
2. Follow BEM naming for new custom components
3. Use Optics tokens for colors, spacing, typography, shadows, etc.
4. Ensure responsive behavior with mobile-first approach
5. Test for accessibility (color contrast, keyboard navigation, screen readers)
6. Document component variations and customization options

This prompt serves as a guide to understanding and implementing the Optics Design System. Use it as a reference when building interfaces to ensure consistency with Optics standards and best practices.
