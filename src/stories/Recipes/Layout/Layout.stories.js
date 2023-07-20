import { createLayout } from './Layout.js'

export default {
  title: 'Recipes/Layout',
  render: ({ ...args }) => {
    return createLayout({ ...args })
  },
  argTypes: {
    style: {
      control: { type: 'select' },
      options: ['basic', 'sidebar', 'navbar', 'spinner'],
    },
    rightSidebar: {
      control: { type: 'boolean' },
      if: { arg: 'style', eq: 'sidebar' },
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

export const Navbar = {
  args: {
    style: 'navbar',
  },
}

export const SidebarAndRight = {
  args: {
    style: 'sidebar',
    rightSidebar: true,
  },
}

export const FullScreenSpinner = {
  args: {
    style: 'spinner',
  },
}
