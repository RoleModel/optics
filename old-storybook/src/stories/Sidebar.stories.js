import { createSidebar } from './Sidebar/Sidebar.js'
import SidebarDocs from './Sidebar/Sidebar.mdx'

export default {
  title: 'Components/Sidebar',
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
  parameters: {
    docs: {
      page: SidebarDocs,
    },
  },
}

const Template = ({ ...args }) => {
  return createSidebar({ ...args })
}

export const DefaultDrawer = Template.bind({})
DefaultDrawer.args = {
  size: 'drawer',
  style: 'default',
}

export const PrimaryDrawer = Template.bind({})
PrimaryDrawer.args = {
  size: 'drawer',
  style: 'primary',
}

export const SubtlePrimaryDrawer = Template.bind({})
SubtlePrimaryDrawer.args = {
  size: 'drawer',
  style: 'subtle-primary',
}

export const NoBrandDrawer = Template.bind({})
NoBrandDrawer.args = {
  size: 'drawer',
  style: 'default',
  brand: false,
}

export const CenteredDrawer = Template.bind({})
CenteredDrawer.args = {
  size: 'drawer',
  style: 'default',
  position: 'center',
}

export const EndDrawer = Template.bind({})
EndDrawer.args = {
  size: 'drawer',
  style: 'default',
  position: 'end',
}

export const LogoutDrawer = Template.bind({})
LogoutDrawer.args = {
  size: 'drawer',
  style: 'default',
  logout: true,
}

export const AlternateActiveDrawer = Template.bind({})
AlternateActiveDrawer.args = {
  size: 'drawer',
  style: 'default',
  activeLink: 'Components',
}

export const DefaultRail = Template.bind({})
DefaultRail.args = {
  size: 'rail',
  style: 'default',
}

export const PrimaryRail = Template.bind({})
PrimaryRail.args = {
  size: 'rail',
  style: 'primary',
}

export const SubtlePrimaryRail = Template.bind({})
SubtlePrimaryRail.args = {
  size: 'rail',
  style: 'subtle-primary',
}

export const NoBrandRail = Template.bind({})
NoBrandRail.args = {
  size: 'rail',
  style: 'default',
  brand: false,
}

export const CenteredRail = Template.bind({})
CenteredRail.args = {
  size: 'rail',
  style: 'default',
  position: 'center',
}

export const EndRail = Template.bind({})
EndRail.args = {
  size: 'rail',
  style: 'default',
  position: 'end',
}

export const LogoutRail = Template.bind({})
LogoutRail.args = {
  size: 'rail',
  style: 'default',
  logout: true,
}

export const AlternateActiveRail = Template.bind({})
AlternateActiveRail.args = {
  size: 'rail',
  style: 'default',
  activeLink: 'Components',
}
