import type { Meta, StoryObj } from '@storybook/react-vite'

import { Badge } from '@/registry/optics/ui/badge'
import { Button } from '@/registry/optics/ui/button'
import { Icon } from '@/registry/optics/ui/icon'

interface BadgeArgs {
  label: string
  variant: 'default' | 'primary' | 'warning' | 'danger' | 'info' | 'notice'
  pill: boolean
  notification: 'none' | 'left' | 'right'
  showPrefixIcon: boolean
  showSuffixIcon: boolean
}

const meta = {
  title: 'Components/Badge',
  args: {
    label: 'Default',
    variant: 'default',
    pill: false,
    notification: 'none',
    showPrefixIcon: false,
    showSuffixIcon: false,
  },
  argTypes: {
    label: { control: 'text', description: 'Text of the `Badge`' },
    variant: {
      control: 'select',
      options: ['default', 'primary', 'warning', 'danger', 'info', 'notice'],
      description: '`variant` on `Badge`',
    },
    pill: { control: 'boolean', description: '`pill` on `Badge`' },
    notification: {
      control: 'select',
      options: ['none', 'left', 'right'],
      description: '`notification` on `Badge`, inside a `Button` with `withBadge`',
    },
    showPrefixIcon: { control: 'boolean', description: 'Not a prop. Shows an `Icon` before the label' },
    showSuffixIcon: { control: 'boolean', description: 'Not a prop. Shows an `Icon` after the label' },
  },
  render: ({ label, variant, pill, notification, showPrefixIcon, showSuffixIcon }) => {
    const badge = (
      <Badge
        variant={variant === 'default' ? undefined : variant}
        pill={pill || undefined}
        notification={notification === 'none' ? undefined : notification}
      >
        {showPrefixIcon ? <Icon name="open_in_new" /> : null}
        {label}
        {showSuffixIcon ? <Icon name="add" /> : null}
      </Badge>
    )

    if (notification === 'none') return badge

    return (
      <Button variant="primary" withBadge>
        Notifications
        {badge}
      </Button>
    )
  },
} satisfies Meta<BadgeArgs>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Primary: Story = {
  args: { label: 'Primary', variant: 'primary' },
}

export const Warning: Story = {
  args: { label: 'Warning', variant: 'warning' },
}

export const Danger: Story = {
  args: { label: 'Danger', variant: 'danger' },
}

export const Info: Story = {
  args: { label: 'Info', variant: 'info' },
}

export const Notice: Story = {
  args: { label: 'Notice', variant: 'notice' },
}

export const Pill: Story = {
  args: { label: 'Pill', pill: true },
}

export const NotificationButton: Story = {
  args: { label: '5', variant: 'danger', pill: true, notification: 'right' },
}
