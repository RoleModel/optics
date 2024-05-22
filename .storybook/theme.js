import { ThemeVars, create } from '@storybook/theming'

const theme = create({
  base: 'light',
  brandTitle: 'Optics, a RoleModel Design System',
  brandUrl: 'https://docs.optics.rolemodel.design/',
  brandImage: './public/optics-logo.svg',
  brandTarget: '_self',
  // UI
  colorSecondary: 'hsl(216 48% 40%)', // --op-color-primary-base
  appBg: 'hsl(216 48% 90%)', // --op-color-primary-plus-five
  appContentBg: 'hsl(216 48% 90%)', // --op-color-primary-plus-five
  appBorderColor: 'hsl(216 4% 90%)', // --op-color-border a.k.a --op-color-neutral-plus-five

  // Typography
  fontBase: "'Noto Sans', 'Noto Serif', sans-serif",
  fontCode: 'monospace',

  // Text colors
  textColor: 'hsl(216 48% 20%)', // --op-color-primary-on-plus-five

  // Toolbar default and active colors
  barBg: 'hsl(216 4% 98%)', // --op-color-neutral-plus-eight
  barTextColor: 'hsl(216 4% 4%)', // --op-color-neutral-on-plus-eight
})

export default theme
