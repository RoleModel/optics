import type { Meta, StoryObj } from '@storybook/react-vite'

import { Button } from '@/registry/optics/ui/button'
import { Icon } from '@/registry/optics/ui/icon'
import { Sidebar, type SidebarRootProps } from '@/registry/optics/ui/sidebar'

const meta = {
  title: 'Components/Sidebar',
  component: Sidebar.Root,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
} satisfies Meta<typeof Sidebar.Root>

export default meta
type Story = StoryObj<typeof meta>

function ExampleSidebar(props: SidebarRootProps) {
  return (
    <Sidebar.Root {...props}>
      <Sidebar.Brand href="#">
        <img src="https://picsum.photos/id/1/400/400" alt="Logo" />
      </Sidebar.Brand>
      <Sidebar.Content>
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
      </Sidebar.Content>
    </Sidebar.Root>
  )
}

export const Default: Story = {
  render: () => <ExampleSidebar size="drawer" />,
}

export const Sizes: Story = {
  render: () => (
    <div className="op-cluster gap-lg items-start">
      <ExampleSidebar size="drawer" />
      <ExampleSidebar size="compact" />
      <ExampleSidebar size="rail" />
    </div>
  ),
}

export const Primary: Story = {
  render: () => <ExampleSidebar size="compact" variant="primary" />,
}

export const PaddedWithFooter: Story = {
  render: () => (
    <Sidebar.Root size="drawer" padded>
      <Sidebar.Content>
        <Button borderless active>
          <Icon name="inbox" />
          Inbox
        </Button>
        <Button borderless>
          <Icon name="send" />
          Outbox
        </Button>
      </Sidebar.Content>
      <Sidebar.Content justify="end">
        <Button borderless>
          <Icon name="logout" />
          Log out
        </Button>
      </Sidebar.Content>
    </Sidebar.Root>
  ),
}
