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
    position: {
      control: { type: 'select' },
      options: ['right', 'around', 'left'],
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

