import { createNavbar } from './Navbar.js'

export default {
  title: 'Components/Navbar',
  render: ({ ...args }) => {
    return createNavbar({ ...args })
  },
  argTypes: {
    style: {
      control: { type: 'select' },
      options: ['default', 'primary'],
    },
    brand: { control: 'boolean' },
    spacing: {
      control: { type: 'select' },
      options: ['left', 'around', 'right'],
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
    spacing: 'around',
  },
}

export const SpacingLeftNavbar = {
  args: {
    style: 'default',
    spacing: 'left',
  },
}
