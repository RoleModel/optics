import { createSidePanel } from './SidePanel.js'

export default {
  title: 'Content Components/SidePanel',
  render: ({ option1, ...args }) => {
    return createSidePanel({ option1, ...args })
  },
  argTypes: {
    border: {
      control: { type: 'select' },
      options: ['none', 'left', 'right', 'both'],
    },
    headerPadding: {
      control: { type: 'select' },
      options: ['none', 'x', 'y', 'all'],
    },
    bodyPadding: {
      control: { type: 'select' },
      options: ['none', 'x', 'y', 'all'],
    },
    footerPadding: {
      control: { type: 'select' },
      options: ['none', 'x', 'y', 'all'],
    },
    sections: { control: 'number' },
    sectionPadding: {
      control: { type: 'select' },
      options: ['none', 'x', 'y', 'all'],
    },
    showDividers: { control: 'boolean' },
  },
}

export const Default = {
  args: {},
}

export const Bordered = {
  args: {
    border: 'both',
  },
}

export const PaddedHeader = {
  args: {
    headerPadding: 'all',
  },
}

export const PaddedBody = {
  args: {
    bodyPadding: 'all',
  },
}

export const PaddedFooter = {
  args: {
    footerPadding: 'all',
  },
}

export const WithSections = {
  args: {
    sections: 20,
    showDividers: true,
  },
}

export const PaddedSection = {
  args: {
    sections: 3,
    sectionPadding: 'all',
    showDividers: true,
  },
}
