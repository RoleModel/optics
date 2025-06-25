# Optics Design System - Training Prompt

Date: 2025-03-27
Authors: Scott Criswell, Jeremy Walton

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

### Navigation Components

#### Button
**Purpose**: Primary action element for user interaction
**Basic Structure**:
```html
<button class="btn">Default Button</button>
```

**Variations**:
- **Style**: `.btn` (default), `.btn--primary`, `.btn--danger`, `.btn--warning`, `.btn--info`, `.btn--notice`
- **Size**: `.btn--small`, `.btn--large` (default)
- **Icon Support**:
  - Icon only: `.btn--icon`
  - Icon with text: `.icon-with-label`
- **States**: `.btn--active`, `disabled` attribute, `.btn--loading`

**Customization**:
```css
.btn {
  --_op-btn-background-color: custom-color;
  --_op-btn-text-color: custom-color;
}
```

#### Navbar
**Purpose**: Navigation header for applications
**Basic Structure**:
```html
<div class="navbar">
  <div class="navbar__brand">
    <img src="logo.png" alt="Brand Logo">
  </div>
  <div class="navbar__content">
    <a href="#" class="btn">Link 1</a>
    <a href="#" class="btn">Link 2</a>
  </div>
</div>
```

**Variations**:
- **Color**: `.navbar` (default/neutral), `.navbar--primary`
- **Content Alignment**: `.navbar__content--justify-start` (default), `.navbar__content--justify-center`, `.navbar__content--justify-end`

**Customization**:
```css
.navbar {
  --_op-navbar-background-color: custom-color;
  --_op-navbar-text-color: custom-color;
  --_op-navbar-border-color: custom-color;
}
```

#### Sidebar
**Purpose**: Vertical navigation panel
**Basic Structure**:
```html
<div class="sidebar sidebar--drawer">
  <div class="sidebar__brand">
    <img src="logo.png" alt="Brand Logo">
  </div>
  <div class="sidebar__content">
    <a href="#" class="btn">Link 1</a>
    <a href="#" class="btn">Link 2</a>
  </div>
</div>
```

**Variations**:
- **Display Mode**: `.sidebar--drawer` (full-width), `.sidebar--compact` (medium), `.sidebar--rail` (icon-only)
- **Color**: `.sidebar` (default/neutral), `.sidebar--primary`
- **Spacing**: `.sidebar--padded` adds top/bottom padding
- **Content Position**: `.sidebar__content--start` (default), `.sidebar__content--center`, `.sidebar__content--end`

**Responsive Behavior**:
```javascript
// Example of responsive sidebar implementation
const sidebarStyleOptions = {
  drawer: 'sidebar--drawer',
  compact: 'sidebar--compact',
  rail: 'sidebar--rail',
}

const getSidebarStyle = (width) => {
  if (window.innerWidth <= 768) return sidebarStyleOptions['rail'];
  if (window.innerWidth <= 1024) return sidebarStyleOptions['compact'];
  return sidebarStyleOptions['drawer'];
}
```

**Customization**:
```css
.sidebar {
  --_op-sidebar-background-color: custom-color;
  --_op-sidebar-text-color: custom-color;
  --_op-sidebar-rail-width: custom-width;
}
```

#### Tab
**Purpose**: Content section navigation
**Basic Structure**:
```html
<div class="tab-group">
  <a href="#tab1" class="tab tab--active">Tab 1</a>
  <a href="#tab2" class="tab">Tab 2</a>
  <a class="tab tab--disabled" tabindex="-1">Disabled Tab</a>
</div>
```

**Variations**:
- **Size**: `.tab--small`, `.tab--large` (default)
- **States**: `.tab--active`, `.tab--disabled` (use with `tabindex="-1"`)

**Customization**:
```css
.tab {
  --_op-tab-font-small: custom-font-size;
  --_op-tab-padding-small: custom-padding;
}
```

### Form Components

#### Switch
**Purpose**: Toggle control for boolean input
**Basic Structure**:
```html
<div class="form-group form-group--inline">
  <input type="checkbox" id="switch1" class="switch">
  <label for="switch1">Toggle Feature</label>
</div>
```

**Variations**:
- **Size**: `.switch--small`, `.switch--large` (default)
- **States**: `disabled="disabled"` attribute

**Customization**:
```css
.switch {
  --_op-switch-height-small: custom-height;
  --_op-switch-width-large: custom-width;
}
```

### Content Components

#### Icon
**Purpose**: Visual symbols for actions or information
**Basic Structure**:
```html
<span class="material-symbols-outlined">icon_name</span>
```

**Variations**:
- **Style**: Material Symbols (default), phosphor, tabler, feather, lucide
- **Fill**: Add variable to change fill level
  ```html
  <span class="material-symbols-outlined" style="--op-icon-fill: 1;">icon_name</span>
  ```
- **Weight**: Control line weight
  ```html
  <span class="material-symbols-outlined" style="--op-icon-weight: 300;">icon_name</span>
  ```
- **Size**: Adjust size with CSS variables
  ```html
  <span class="material-symbols-outlined" style="--op-icon-size: 32px;">icon_name</span>
  ```

#### Tag
**Purpose**: Interactive labels for categories/metadata
**Basic Structure**:
```html
<span class="tag">
  Category Name
  <button class="tag__remove">
    <span class="material-symbols-outlined">close</span>
  </button>
</span>
```

**Variations**:
- **Interactivity**: Standard (removable), `.tag--readonly` (no remove button)
- **Color**: `.tag--primary`, `.tag--danger`, `.tag--warning`, `.tag--info`, `.tag--notice`

**Customization**:
```css
.tag--custom {
  background-color: custom-color;
  color: custom-text-color;
}
```

#### Tooltip
**Purpose**: Contextual information on hover
**Basic Structure**:
```html
<button class="btn" data-tooltip-text="Helpful information" data-tooltip-position="top">
  Button with Tooltip
</button>
```

**Variations**:
- **Position**: `data-tooltip-position="top"` (default), `"right"`, `"bottom"`, `"left"`
- **Special Case**: For disabled buttons, wrap in span with tooltip attributes
  ```html
  <span data-tooltip-text="Tooltip text">
    <button class="btn" disabled>Disabled Button</button>
  </span>
  ```

**Customization**:
```css
[data-tooltip-text] {
  --_op-tooltip-max-width: custom-width;
  --_op-tooltip-background-color: custom-color;
}
```

#### Spinner
**Purpose**: Loading indicator for asynchronous operations
**Basic Structure**:
```html
<div class="spinner" role="status">
  <span class="assistive-invisible">Loading</span>
</div>
```

**Variations**:
- **Size**: `.spinner--x-small`, `.spinner--small`, `.spinner--medium`, `.spinner--large` (default)

**Customization**:
```css
.spinner {
  --_op-spinner-indicator-color: custom-color;
  --_op-spinner-track-color: custom-color;
  --_op-spinner-animation-duration: custom-duration;
}
```

#### Table
**Purpose**: Tabular data display
**Basic Structure**:
```html
<table class="table table--auto-layout table--default-density">
  <thead>
    <tr>
      <th>Column 1</th>
      <th>Column 2</th>
      <th>Column 3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Data 1</td>
      <td>Data 2</td>
      <td>Data 3</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="2">Total Data</td>
      <td colspan="1">11</td>
    </tr>
  </tfoot>
</table>
```

**Variations**:
- **Display Mode**: `.sidebar--drawer` (full-width), `.sidebar--compact` (medium), `.sidebar--rail` (icon-only)
- **Color**: `.sidebar` (default/neutral), `.sidebar--primary`
- **Spacing**: `.sidebar--padded` adds top/bottom padding
- **Content Position**: `.sidebar__content--start` (default), `.sidebar__content--center`, `.sidebar__content--end`

**Variations**:
- **Style**: `.table` (default), `.table--primary`, `.table--danger`
- **Layout**: `.table--auto-layout` (default), `.table--fixed-layout`
- **Density**: `.table--default-density` (default), `.table--comfortable-density`, `.table--compact-density`
- **Striping**: `.table--even-striped`, `.table--odd-striped`
- **Sticky Header/Footer**: `.table--sticky-header`, `.table--sticky-footer`

**Stick Header/Footer structure**
```html
<div class="table-container">
  <table class="table">
    <!-- Table contents -->
  </table>
</div>
```

**With Pagination component structure**
```html
<div class="table table--container">
  <table class="table table--sticky-footer">
    <thead>
      <tr>
        <th>Column 1</th>
        <th>Column 2</th>
        <th>Column 3</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Data 1</td>
        <td>Data 2</td>
        <td>Data 3</td>
      </tr>
      <tr>
    </tbody>
    <tfoot>
      <tr>
        <td colspan="3">
          <div class="flex justify-end">
            <nav class="pagination">
              <a class="btn btn--small btn--no-border btn--icon" href="#">
                <span class="material-symbols-outlined">first_page</span>
              </a>
              <a class="btn btn--small btn--no-border" href="#">
                <span class="material-symbols-outlined">chevron_left</span>
                Prev
              </a>
              <a href="#" class="btn btn--no-border btn--active btn--small">1</a>
              <a href="#" class="btn btn--no-border btn--small">2</a>
              <a href="#" class="btn btn--no-border btn--small">3</a>
              <div class="pagination__divider">
                ...
              </div>
              <a href="#" class="btn btn--no-border btn--small">10</a>
              <a href="#" class="btn btn--no-border btn--small">11</a>
              <a href="#" class="btn btn--no-border btn--small">12</a>
              <a class="btn btn--small btn--no-border" href="#">
                Next
                <span class="material-symbols-outlined">chevron_right</span>
              </a>
              <a class="btn btn--small btn--no-border btn--icon" href="#">
                <span class="material-symbols-outlined">last_page</span>
              </a>
            </nav>
          </div>
        </td>
      </tr>
    </tfoot>
  </table>
</div>
```

**Customization**:
```css
.table {
  --_op-table-cell-padding-default: [different padding];
  --_op-table-cell-padding-comfortable: [different padding];
  --_op-table-cell-padding-compact: [different padding];
}
```

## Responsive Design

### CSS Range Syntax
Optics uses modern CSS range syntax for media queries, with explicit values since variables in queries aren't universally supported:

```css
@media (width <= 768px) {
  /* Mobile styles */
}
```

### Gap containers

Optics prefers using containers with flex or grid and a gap set, rather than individual items setting their margin or padding for spacing between them.

## Layout System
**Purpose**: Application structural patterns

**Key Layout Classes**:
- `.app-body`: Base container
- `.app-with-sidebar`: Container when using sidebar
- `.app__header`: Fixed header container
- `.app__content`: Main content container (width constrained)
- `.app__content-no-margin`: Content container without width constraints
- `.app__footer`: Fixed footer container

**Basic Layout**:
```html
<body class="app-body">
  <div class="app__header">
    <div class="navbar"><!-- Navbar content --></div>
  </div>
  <div class="app__content">
    <!-- Main content -->
  </div>
  <div class="app__footer">
    <!-- Footer content -->
  </div>
</body>
```

**With Sidebar**:
```html
<body class="app-with-sidebar">
  <div class="sidebar sidebar--drawer">
    <!-- Sidebar content -->
  </div>
  <div class="app-body">
    <div class="app__header"></div>
    <div class="app__content"></div>
    <div class="app__footer"></div>
  </div>
</body>
```

## Implementation Best Practices

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

### Selective Imports
```css
/* Core dependencies */
@import '@rolemodel/optics/dist/css/core/fonts';
@import '@rolemodel/optics/dist/css/core/tokens';
@import '@rolemodel/optics/dist/css/core/base';

/* Component-specific imports */
@import '@rolemodel/optics/dist/css/components/component-name';
```

## When Building New Components

1. Start with existing Optics components when possible
2. Follow BEM naming for new custom components
3. Use Optics tokens for colors, spacing, typography, shadows, etc.
4. Ensure responsive behavior with mobile-first approach
5. Test for accessibility (color contrast, keyboard navigation, screen readers)
6. Document component variations and customization options

This prompt serves as a guide to understanding and implementing the Optics Design System. Use it as a reference when building interfaces to ensure consistency with Optics standards and best practices.
