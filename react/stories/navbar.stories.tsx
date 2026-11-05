import type { Meta, StoryObj } from '@storybook/react-vite'

import { Avatar } from '@/registry/optics/ui/avatar'
import { Button } from '@/registry/optics/ui/button'
import { Icon } from '@/registry/optics/ui/icon'
import { Navbar } from '@/registry/optics/ui/navbar'

const logoUrl = 'https://picsum.photos/id/1/400/400'

const meta = {
  title: 'Components/Navbar',
  component: Navbar.Root,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof Navbar.Root>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Navbar.Root>
      <Navbar.Brand href="#">
        <img src={logoUrl} alt="Logo" />
      </Navbar.Brand>
      <Navbar.Content justify="start">
        <Button borderless active>
          <Icon name="inbox" />
          Inbox
        </Button>
        <Button borderless>
          <Icon name="send" />
          Outbox
        </Button>
        <Button borderless>
          <Icon name="favorite" />
          Favorites
        </Button>
      </Navbar.Content>
      <Navbar.Content>
        <Avatar.Root size="small">
          <Avatar.Fallback>JD</Avatar.Fallback>
        </Avatar.Root>
      </Navbar.Content>
    </Navbar.Root>
  ),
}

export const Primary: Story = {
  render: () => (
    <Navbar.Root variant="primary">
      <Navbar.Brand href="#">
        <img src={logoUrl} alt="Logo" />
      </Navbar.Brand>
      <Navbar.Content justify="start">
        <Button borderless active>
          <Icon name="inbox" />
          Inbox
        </Button>
        <Button borderless>
          <Icon name="send" />
          Outbox
        </Button>
      </Navbar.Content>
    </Navbar.Root>
  ),
}

export const CenteredLinks: Story = {
  render: () => (
    <Navbar.Root>
      <Navbar.Content justify="center">
        <Button borderless active>
          Home
        </Button>
        <Button borderless>About</Button>
        <Button borderless>Contact</Button>
      </Navbar.Content>
    </Navbar.Root>
  ),
}
