import * as prompts from '@clack/prompts'

// #region Helpers
const promptOptionsFromOptions = (options) => {
  return Object.entries(options).map(([key, option]) => ({
    value: key,
    label: option.label,
    hint: option.hint ?? '',
  }))
}

const componentOption = (name) => {
  return {
    label: name.charAt(0).toUpperCase() + name.slice(1),
    value: `@import '@rolemodel/optics/dist/css/components/${name}.css';`,
  }
}

// #endregion Helpers

// #region Options
const presets = {
  'azure-sky': {
    label: 'Azure Sky',
    value: "@import '@rolemodel/optics/dist/css/optics-azure-sky.css';",
    hint: 'recommended',
  },
  legacy: {
    label: 'Legacy',
    value: "@import '@rolemodel/optics/dist/css/optics.css';",
    hint: 'default option v2.1.5 and earlier',
  },
  custom: {
    label: 'Custom',
    hint: 'build your own configuration',
  },
}

const fonts = {
  noto: {
    label: 'Noto',
    value: "@import '@rolemodel/optics/dist/css/fonts/text/noto.css';",
    hint: 'default option v2.1.5 and earlier',
  },
  inter: {
    label: 'Inter',
    value: "@import '@rolemodel/optics/dist/css/fonts/text/inter.css';",
  },
  custom: {
    label: 'Custom',
    value: "@import 'fonts/text/{your_font_here}.css';",
    hint: 'Google fonts has a wide selection of fonts.',
  },
}

const icons = {
  phosphor: {
    label: 'Phosphor',
    value: "@import '@rolemodel/optics/dist/css/fonts/icons/phosphor.css';",
    hint: 'recommended',
  },
  material_symbols: {
    label: 'Material Symbols',
    value: "@import '@rolemodel/optics/dist/css/fonts/icons/material-symbols.css';",
    hint: 'default option v2.1.5 and earlier',
  },
  feather: {
    label: 'Feather',
    value: "@import '@rolemodel/optics/dist/css/fonts/icons/feather.css';",
  },
  lucide: {
    label: 'Lucide',
    value: "@import '@rolemodel/optics/dist/css/fonts/icons/lucide.css';",
  },
  custom: {
    label: 'Custom',
    value: "@import 'fonts/icons/{your_icon_set_here}.css';",
  },
}

const components = {
  all: {
    label: 'All Components',
    value: "@import '@rolemodel/optics/dist/css/components.css';",
    hint: 'bring everything in',
  },
  selective: {
    label: 'Choose Components',
    hint: 'only import what you need',
  },
}

const availableComponents = {
  accordion: componentOption('accordion'),
  alert: componentOption('alert'),
  avatar: componentOption('avatar'),
  badge: componentOption('badge'),
  breadcrumbs: componentOption('breadcrumbs'),
  button: componentOption('button'),
  button_group: componentOption('button_group'),
  card: componentOption('card'),
  confirm_dialog: componentOption('confirm_dialog'),
  content_header: componentOption('content_header'),
  divider: componentOption('divider'),
  form: componentOption('form'),
  icon: componentOption('icon'),
  modal: componentOption('modal'),
  navbar: componentOption('navbar'),
  pagination: componentOption('pagination'),
  sidebar: componentOption('sidebar'),
  side_panel: componentOption('side_panel'),
  spinner: componentOption('spinner'),
  switch: componentOption('switch'),
  tab: componentOption('tab'),
  table: componentOption('table'),
  tag: componentOption('tag'),
  text_pair: componentOption('text_pair'),
  tooltip: componentOption('tooltip'),
}
// #endregion Options

prompts.intro(`Install Optics`)

// #region Preset Selection
const presetType = await prompts.select({
  message: 'Select a preset.',
  options: promptOptionsFromOptions(presets),
})

if (prompts.isCancel(presetType)) {
  prompts.cancel('Installation cancelled.')
  process.exit(0)
}

if (presetType !== 'custom') {
  prompts.log.success(`
You selected the ${presetType} preset.
Add the following import to your CSS file:

/* Optics Library */
${presets[presetType].value}
  `)

  prompts.outro(`You're all set!`)
  process.exit(0)
}
// #endregion Preset Selection

// #region Font Selection
const fontType = await prompts.select({
  message: 'Select a font.',
  options: promptOptionsFromOptions(fonts),
})

if (prompts.isCancel(fontType)) {
  prompts.cancel('Installation cancelled.')
  process.exit(0)
}
// #endregion Font Selection

// #region Icon Selection
const iconType = await prompts.select({
  message: 'Select an icon set.',
  options: promptOptionsFromOptions(icons),
})

if (prompts.isCancel(iconType)) {
  prompts.cancel('Installation cancelled.')
  process.exit(0)
}
// #endregion Icon Selection

// #region Component Selection
const componentType = await prompts.select({
  message: 'Select components.',
  options: promptOptionsFromOptions(components),
})

if (prompts.isCancel(componentType)) {
  prompts.cancel('Installation cancelled.')
  process.exit(0)
}
// #endregion Component Selection

let componentSelectionValue = components[componentType].value

// #region Selective Component Selection
if (componentType === 'selective') {
  const selectedComponents = await prompts.multiselect({
    message: 'Select all components you would like to include.',
    options: promptOptionsFromOptions(availableComponents),
    required: false,
  })

  componentSelectionValue = selectedComponents.map((component) => availableComponents[component].value).join('\n')
}
// #endregion Selective Component Selection

prompts.log.success(`
You selected a custom configuration of Optics.
Add the following imports to your CSS file:

/* Optics Fonts, Theme, and Core */
@import '@rolemodel/optics/dist/css/reset.css';
${fonts[fontType].value}
${icons[iconType].value}
@import '@rolemodel/optics/dist/css/themes/default.css';
@import 'themes/{your_theme_here}.css'; /* Optional */
@import '@rolemodel/optics/dist/css/core.css';

/* Optics Components */
${componentSelectionValue}
`)

prompts.outro(`You're all set!`)
process.exit(0)
