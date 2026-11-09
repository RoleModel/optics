import type { Meta, StoryObj } from '@storybook/react-vite'

import { Avatar } from '@/registry/optics/ui/avatar'
import { Button } from '@/registry/optics/ui/button'
import { Icon } from '@/registry/optics/ui/icon'
import { Navbar } from '@/registry/optics/ui/navbar'

const imageUrl = 'https://picsum.photos/id/1/400/400'

const links = [
  { icon: 'inbox', label: 'Inbox' },
  { icon: 'send', label: 'Outbox' },
  { icon: 'favorite', label: 'Favorite' },
  { icon: 'blur_on', label: 'Something' },
]

interface NavbarArgs {
  variant: 'default' | 'primary'
  brand: boolean
  justify: 'start' | 'center' | 'end'
  activeLink: string
}

const meta = {
  title: 'Components/Navbar',
  parameters: { layout: 'fullscreen' },
  args: {
    variant: 'default',
    brand: true,
    justify: 'start',
    activeLink: 'Inbox',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'primary'],
      description: '`variant` on `Navbar.Root`. `default` leaves it unset',
    },
    brand: { control: 'boolean', description: 'Add `Navbar.Brand` with a logo' },
    justify: {
      control: 'select',
      options: ['start', 'center', 'end'],
      description: '`justify` on the `Navbar.Content` that holds the links',
    },
    activeLink: {
      control: 'select',
      options: links.map(({ label }) => label),
      description: 'The link button with `active`',
    },
  },
  render: ({ variant, brand, justify, activeLink }) => (
    <Navbar.Root variant={variant === 'default' ? undefined : variant}>
      {brand && (
        <Navbar.Brand href="#">
          <img src={imageUrl} alt="Logo" />
        </Navbar.Brand>
      )}
      <Navbar.Content justify={justify}>
        {links.map(({ icon, label }) => (
          <Button key={label} borderless active={activeLink === label || undefined}>
            <Icon name={icon} />
            {label}
          </Button>
        ))}
      </Navbar.Content>
      <Navbar.Content>
        <Avatar.Root size="medium">
          <Avatar.Image src={imageUrl} alt="Avatar" />
        </Avatar.Root>
      </Navbar.Content>
    </Navbar.Root>
  ),
} satisfies Meta<NavbarArgs>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Primary: Story = {
  args: { variant: 'primary' },
}

export const NoBrand: Story = {
  args: { brand: false },
}

export const Centered: Story = {
  args: { justify: 'center' },
}

export const JustifyEnd: Story = {
  args: { justify: 'end' },
}
