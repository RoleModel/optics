import type { Meta, StoryObj } from '@storybook/react-vite'

import { Button } from '@/registry/optics/ui/button'
import { Icon } from '@/registry/optics/ui/icon'
import { Tag } from '@/registry/optics/ui/tag'

interface TagArgs {
  label: string
  variant?: 'primary' | 'danger' | 'warning' | 'info' | 'notice'
  iconLeft: boolean
  iconRight: boolean
}

const meta = {
  title: 'Components/Tag',
  args: {
    label: 'Readonly',
    iconLeft: false,
    iconRight: false,
  },
  argTypes: {
    label: { control: 'text', description: 'Text of `Tag.Label`' },
    variant: {
      control: 'select',
      options: ['primary', 'danger', 'warning', 'info', 'notice'],
      description: '`variant` of `Tag.Root`. Without one the tag is readonly',
    },
    iconLeft: { control: 'boolean', description: 'Add a remove button before `Tag.Label`' },
    iconRight: { control: 'boolean', description: 'Add a remove button after `Tag.Label`' },
  },
  render: ({ label, variant, iconLeft, iconRight }) => (
    <Tag.Root variant={variant}>
      {iconLeft && (
        <Button shape="circle" borderless aria-label={`Remove ${label}`}>
          <Icon name="close" />
        </Button>
      )}
      <Tag.Label>{label}</Tag.Label>
      {iconRight && (
        <Button shape="circle" borderless aria-label={`Remove ${label}`}>
          <Icon name="close" />
        </Button>
      )}
    </Tag.Root>
  ),
} satisfies Meta<TagArgs>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Readonly: Story = {
  args: { label: 'Readonly' },
}

export const Primary: Story = {
  args: { label: 'Primary', variant: 'primary' },
}

export const Danger: Story = {
  args: { label: 'Danger', variant: 'danger' },
}

export const Warning: Story = {
  args: { label: 'Warning', variant: 'warning' },
}

export const Info: Story = {
  args: { label: 'Info', variant: 'info' },
}

export const Notice: Story = {
  args: { label: 'Notice', variant: 'notice' },
}
