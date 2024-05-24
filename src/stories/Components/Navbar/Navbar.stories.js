import { createNavbar } from './Navbar.js'

export default {
  title: 'Navigation Components/Navbar',
  render: ({ ...args }) => {
    return createNavbar({ ...args })
  },
  argTypes: {
    style: {
      control: { type: 'select' },
      options: ['default', 'primary'],
    },
    brand: { control: 'boolean' },
    justify: {
      control: { type: 'select' },
      options: ['start', 'center', 'end'],
    },
    activeLink: {
      control: { type: 'select' },
      options: ['Inbox', 'Outbox', 'Favorite', 'Something'],
    },
  },
  parameters: {
    layout: 'fullscreen',
  },
}

export const DefaultNavbar = {
  args: {
    style: 'default',
  },
}

export const PrimaryNavbar = {
  args: {
    style: 'primary',
  },
}

export const NoBrandNavbar = {
  args: {
    size: 'drawer',
    style: 'default',
    brand: false,
  },
}

export const CenteredNavbar = {
  args: {
    style: 'default',
    justify: 'center',
  },
}

export const JustifyEndNavbar = {
  args: {
    style: 'default',
    justify: 'end',
  },
}
