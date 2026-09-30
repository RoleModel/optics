import { createIcon } from './Icon.js'

export default {
  title: 'Components/Icon',
  render: ({ name, ...args }) => {
    return createIcon({ name, ...args })
  },
  argTypes: {
    iconPack: {
      control: { type: 'select' },
      options: ['Material Symbols Outlined', 'Phosphor', 'Tabler', 'Feather', 'Lucide'],
    },
    name: { control: 'text' },
    filled: { control: 'boolean' },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large', 'x-large'],
    },
    weight: {
      control: { type: 'select' },
      options: ['thin', 'light', 'normal', 'semi-bold', 'bold'],
    },
    emphasis: {
      control: { type: 'select' },
      options: ['low', 'normal', 'high'],
    },
    duotone: {
      control: 'boolean',
      if: { arg: 'iconPack', eq: 'Phosphor' },
    },
  },
}

export const Default = {
  args: {
    iconPack: 'Material Symbols Outlined',
    name: 'settings',
  },
}

export const Filled = {
  args: {
    iconPack: 'Material Symbols Outlined',
    name: 'settings',
    filled: true,
  },
}

export const Large = {
  args: {
    iconPack: 'Material Symbols Outlined',
    name: 'settings',
    size: 'large',
  },
}

export const Bold = {
  args: {
    iconPack: 'Material Symbols Outlined',
    name: 'settings',
    weight: 'bold',
  },
}

export const Emphasis = {
  args: {
    iconPack: 'Material Symbols Outlined',
    name: 'settings',
    emphasis: 'high',
  },
}

// Simple stroke glyphs drawn for this story, in the shape SVG icon sets ship:
// a 24x24 viewBox, currentColor, and a stroke-width on each element.
const svgGlyphs = [
  '<circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.5" /><path d="M8 12.5l2.5 2.5L16 9.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />',
  '<path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />',
  '<path d="M4 10.5L12 4l8 6.5V19a1 1 0 0 1-1 1h-4v-5h-6v5H5a1 1 0 0 1-1-1z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />',
]

const svgIcon = (glyph, classes = '') =>
  `<span class="icon icon--svg ${classes}" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none">${glyph}</svg></span>`

const svgRow = (label, classes) =>
  `<div style="display: flex; gap: var(--op-space-medium); align-items: center;">
    <code style="min-inline-size: 32ch;">${label}</code>
    ${svgGlyphs.map((glyph) => svgIcon(glyph, classes)).join('')}
  </div>`

export const Svg = {
  render: () => {
    const wrapper = document.createElement('div')
    wrapper.style.display = 'grid'
    wrapper.style.gap = 'var(--op-space-medium)'
    wrapper.innerHTML = [
      ['icon icon--svg', ''],
      ['icon--small', 'icon--small'],
      ['icon--large', 'icon--large'],
      ['icon--x-large', 'icon--x-large'],
      ['icon--large icon--weight-light', 'icon--large icon--weight-light'],
      ['icon--large icon--weight-bold', 'icon--large icon--weight-bold'],
      ['icon--large icon--low-emphasis', 'icon--large icon--low-emphasis'],
    ]
      .map(([label, classes]) => svgRow(label, classes))
      .join('')
    return wrapper
  },
}
