import { createSidebar } from './Sidebar.js'

export default {
  title: 'Components/Sidebar',
  render: ({ ...args }) => {
    return createSidebar({ ...args })
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['drawer', 'rail'],
    },
    responsive: { control: 'boolean' },
    style: {
      control: { type: 'select' },
      options: ['default', 'primary', 'subtle-primary'],
    },
    brand: { control: 'boolean' },
    position: {
      control: { type: 'select' },
      options: ['start', 'center', 'end'],
    },
    activeLink: {
      control: { type: 'select' },
      options: [
        'Inbox',
        'Outbox',
        'Favorite',
        'Trash',
        'Circle',
        'Triangle',
        'Square',
        'A really long label that will overlap',
      ],
    },
  },
}

export const DefaultDrawer = {
  args: {
    size: 'drawer',
    style: 'default',
  },
}

export const PrimaryDrawer = {
  args: {
    size: 'drawer',
    style: 'primary',
  },
}

export const SubtlePrimaryDrawer = {
  args: {
    size: 'drawer',
    style: 'subtle-primary',
  },
}

export const NoBrandDrawer = {
  args: {
    size: 'drawer',
    style: 'default',
    brand: false,
  },
}

export const CenteredDrawer = {
  args: {
    size: 'drawer',
    style: 'default',
    position: 'center',
  },
}

export const EndDrawer = {
  args: {
    size: 'drawer',
    style: 'default',
    position: 'end',
  },
}

export const LogoutDrawer = {
  args: {
    size: 'drawer',
    style: 'default',
    logout: true,
  },
}

export const AlternateActiveDrawer = {
  args: {
    size: 'drawer',
    style: 'default',
    activeLink: 'Components',
  },
}

export const DefaultRail = {
  args: {
    size: 'rail',
    style: 'default',
  },
}

export const PrimaryRail = {
  args: {
    size: 'rail',
    style: 'primary',
  },
}

export const SubtlePrimaryRail = {
  args: {
    size: 'rail',
    style: 'subtle-primary',
  },
}

export const NoBrandRail = {
  args: {
    size: 'rail',
    style: 'default',
    brand: false,
  },
}

export const CenteredRail = {
  args: {
    size: 'rail',
    style: 'default',
    position: 'center',
  },
}

export const EndRail = {
  args: {
    size: 'rail',
    style: 'default',
    position: 'end',
  },
}

export const LogoutRail = {
  args: {
    size: 'rail',
    style: 'default',
    logout: true,
  },
}

export const AlternateActiveRail = {
  args: {
    size: 'rail',
    style: 'default',
    activeLink: 'Components',
  },
}
