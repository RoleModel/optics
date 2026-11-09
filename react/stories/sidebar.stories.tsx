import type { Meta, StoryObj } from '@storybook/react-vite'

import { Button } from '@/registry/optics/ui/button'
import { Icon } from '@/registry/optics/ui/icon'
import { Sidebar, type SidebarContentProps, type SidebarRootProps } from '@/registry/optics/ui/sidebar'

const links = [
  { icon: 'inbox', label: 'Inbox' },
  { icon: 'send', label: 'Outbox' },
  { icon: 'favorite', label: 'Favorite' },
  { icon: 'delete', label: 'Trash' },
  { icon: 'circle', label: 'Circle' },
  { icon: 'change_history', label: 'Triangle' },
  { icon: 'square', label: 'Square' },
  { icon: 'blur_on', label: 'Something' },
]

type SidebarArgs = Pick<SidebarRootProps, 'size' | 'variant'> &
  Pick<SidebarContentProps, 'justify'> & {
    padded: boolean
    brand: boolean
    activeLink?: string
    logout: boolean
  }

const meta = {
  title: 'Components/Sidebar',
  parameters: { layout: 'fullscreen' },
  args: {
    size: 'drawer',
    padded: false,
    brand: true,
    activeLink: 'Inbox',
    logout: false,
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['drawer', 'compact', 'rail'],
      description: '`size` of `Sidebar.Root`',
    },
    variant: { control: 'select', options: ['primary'], description: '`variant` of `Sidebar.Root`' },
    padded: { control: 'boolean', description: '`padded` on `Sidebar.Root`' },
    brand: { control: 'boolean', description: 'Add a `Sidebar.Brand` with a logo' },
    justify: {
      control: 'select',
      options: ['start', 'center', 'end'],
      description: '`justify` of `Sidebar.Content`. Without one it is `start`',
    },
    activeLink: {
      control: 'select',
      options: links.map((link) => link.label),
      description: 'The link with `active`',
    },
    logout: {
      control: 'boolean',
      description: 'Add a second `Sidebar.Content` with `justify="end"` and a logout button',
    },
  },
  render: ({ size, variant, padded, brand, justify, activeLink, logout }) => (
    <div className="app-with-sidebar" style={{ height: '80rem' }}>
      <Sidebar.Root size={size} variant={variant} padded={padded || undefined}>
        {brand && (
          <Sidebar.Brand href="#">
            <img src="https://docs.optics.rolemodel.design/public/rms-logo.svg" alt="RoleModel Software Logo" />
          </Sidebar.Brand>
        )}
        <Sidebar.Content justify={justify}>
          {links.map(({ icon, label }) => (
            <Button key={label} borderless active={label === activeLink || undefined}>
              <Icon name={icon} />
              {label}
            </Button>
          ))}
        </Sidebar.Content>
        {logout && (
          <Sidebar.Content justify="end">
            <Button borderless>
              <Icon name="logout" />
              Logout
            </Button>
          </Sidebar.Content>
        )}
      </Sidebar.Root>
    </div>
  ),
} satisfies Meta<SidebarArgs>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const DefaultDrawer: Story = {
  args: { size: 'drawer' },
}

export const PaddedDrawer: Story = {
  args: { size: 'drawer', padded: true },
}

export const PrimaryDrawer: Story = {
  args: { size: 'drawer', variant: 'primary' },
}

export const NoBrandDrawer: Story = {
  args: { size: 'drawer', brand: false },
}

export const CenteredDrawer: Story = {
  args: { size: 'drawer', justify: 'center' },
}

export const EndDrawer: Story = {
  args: { size: 'drawer', justify: 'end' },
}

export const LogoutDrawer: Story = {
  args: { size: 'drawer', logout: true },
}

export const DefaultCompact: Story = {
  args: { size: 'compact' },
}

export const PaddedCompact: Story = {
  args: { size: 'compact', padded: true },
}

export const PrimaryCompact: Story = {
  args: { size: 'compact', variant: 'primary' },
}

export const NoBrandCompact: Story = {
  args: { size: 'compact', brand: false },
}

export const CenteredCompact: Story = {
  args: { size: 'compact', justify: 'center' },
}

export const EndCompact: Story = {
  args: { size: 'compact', justify: 'end' },
}

export const LogoutCompact: Story = {
  args: { size: 'compact', logout: true },
}

export const DefaultRail: Story = {
  args: { size: 'rail' },
}

export const PaddedRail: Story = {
  args: { size: 'rail', padded: true },
}

export const PrimaryRail: Story = {
  args: { size: 'rail', variant: 'primary' },
}

export const NoBrandRail: Story = {
  args: { size: 'rail', brand: false },
}

export const CenteredRail: Story = {
  args: { size: 'rail', justify: 'center' },
}

export const EndRail: Story = {
  args: { size: 'rail', justify: 'end' },
}

export const LogoutRail: Story = {
  args: { size: 'rail', logout: true },
}
