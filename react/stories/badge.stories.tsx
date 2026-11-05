import type { Meta, StoryObj } from '@storybook/react-vite'

import { Badge } from '@/registry/optics/ui/badge'
import { Button } from '@/registry/optics/ui/button'
import { Icon } from '@/registry/optics/ui/icon'

const meta = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  args: {
    children: 'Badge',
  },
  argTypes: {
    variant: { control: 'select', options: [undefined, 'primary', 'warning', 'danger', 'info', 'notice'] },
    pill: { control: 'boolean' },
    notification: { control: 'select', options: [undefined, 'left', 'right'] },
  },
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Variants: Story = {
  render: (args) => (
    <div className="op-cluster gap-md">
      <Badge {...args}>Default</Badge>
      <Badge {...args} variant="primary">
        Primary
      </Badge>
      <Badge {...args} variant="warning">
        Warning
      </Badge>
      <Badge {...args} variant="danger">
        Danger
      </Badge>
      <Badge {...args} variant="info">
        Info
      </Badge>
      <Badge {...args} variant="notice">
        Notice
      </Badge>
    </div>
  ),
}

export const Pill: Story = {
  render: (args) => (
    <div className="op-cluster gap-md">
      <Badge {...args} pill>
        Pill
      </Badge>
      <Badge {...args} variant="primary" pill>
        Primary pill
      </Badge>
    </div>
  ),
}

export const WithIcon: Story = {
  args: {
    variant: 'info',
    children: (
      <>
        <Icon name="info" />
        Info
      </>
    ),
  },
}

export const Notification: Story = {
  render: () => (
    <div className="op-cluster gap-md">
      <Button withBadge>
        Inbox
        <Badge variant="info" pill notification="left">
          12
        </Badge>
      </Button>
      <Button variant="primary" withBadge>
        Notifications
        <Badge variant="danger" pill notification="right">
          5
        </Badge>
      </Button>
    </div>
  ),
}
