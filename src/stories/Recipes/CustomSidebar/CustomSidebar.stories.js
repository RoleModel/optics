import { createCustomSidebar } from './CustomSidebar.js'

export default {
  title: 'Recipes/Custom Sidebar',
  render: ({ ...args }) => {
    return createCustomSidebar({ ...args })
  },
  argTypes: {
    example: {
      control: { type: 'select' },
      options: ['domains', '16six'],
    },
    style: {
      control: { type: 'select' },
      options: ['drawer', 'rail'],
    },
  },
  parameters: {
    layout: 'fullscreen',
  },
}

export const Domains = {
  args: {
    example: 'domains',
    style: 'drawer',
  },
}

export const SixteenSix = {
  args: {
    example: '16six',
    style: 'drawer',
  },
}
