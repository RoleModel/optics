import { createLayout } from './Layout.js'

export default {
  title: 'Recipes/Layout',
  render: ({ ...args }) => {
    return createLayout({ ...args })
  },
  argTypes: {
    style: {
      control: { type: 'select' },
      options: ['basic', 'sidebar'],
    },
    rightSidebar: {
      control: { type: 'boolean' },
    },
  },
  parameters: {
    layout: 'fullscreen',
  },
}

export const Basic = {
  args: {
    style: 'basic',
  },
}

export const Sidebar = {
  args: {
    style: 'sidebar',
  },
}

export const SidebarAndRight = {
  args: {
    style: 'sidebar',
    rightSidebar: true,
  },
}
