import { createSidebar } from './Sidebar.js'

export default {
  title: 'Components/Sidebar',
  render: ({ ...args }) => {
    return createSidebar({ ...args })
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['drawer', 'compact', 'rail'],
    },
    padded: { control: 'boolean' },
    style: {
      control: { type: 'select' },
      options: ['default', 'primary'],
    },
    brand: { control: 'boolean' },
    position: {
      control: { type: 'select' },
      options: ['start', 'center', 'end'],
    },
    activeLink: {
      control: { type: 'select' },
      options: ['Inbox', 'Outbox', 'Favorite', 'Trash', 'Circle', 'Triangle', 'Square', 'Different'],
    },
  },
  parameters: {
    layout: 'fullscreen',
  },
}

export const DefaultDrawer = {
  args: {
    size: 'drawer',
    style: 'default',
  },
}

export const PaddedDrawer = {
  args: {
    size: 'drawer',
    padded: true,
    style: 'default',
  },
}

export const PrimaryDrawer = {
  args: {
    size: 'drawer',
    style: 'primary',
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

export const DefaultCompact = {
  args: {
    size: 'compact',
    style: 'default',
  },
}

export const PaddedCompact = {
  args: {
    size: 'compact',
    padded: true,
    style: 'default',
  },
}

export const PrimaryCompact = {
  args: {
    size: 'compact',
    style: 'primary',
  },
}

export const NoBrandCompact = {
  args: {
    size: 'compact',
    style: 'default',
    brand: false,
  },
}

export const CenteredCompact = {
  args: {
    size: 'compact',
    style: 'default',
    position: 'center',
  },
}

export const EndCompact = {
  args: {
    size: 'compact',
    style: 'default',
    position: 'end',
  },
}

export const LogoutCompact = {
  args: {
    size: 'compact',
    style: 'default',
    logout: true,
  },
}

export const AlternateActiveCompact = {
  args: {
    size: 'compact',
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

export const PaddedRail = {
  args: {
    size: 'rail',
    padded: true,
    style: 'default',
  },
}

export const PrimaryRail = {
  args: {
    size: 'rail',
    style: 'primary',
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
