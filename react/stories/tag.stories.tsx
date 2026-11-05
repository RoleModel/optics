import type { Meta, StoryObj } from '@storybook/react-vite'

import { Button } from '@/registry/optics/ui/button'
import { Icon } from '@/registry/optics/ui/icon'
import { Tag } from '@/registry/optics/ui/tag'

const meta = {
  title: 'Components/Tag',
  component: Tag.Root,
  tags: ['autodocs'],
} satisfies Meta<typeof Tag.Root>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Tag.Root>
      <Tag.Label>Design</Tag.Label>
      <Button shape="circle" borderless aria-label="Remove Design">
        <Icon name="close" />
      </Button>
    </Tag.Root>
  ),
}

export const Readonly: Story = {
  render: () => (
    <Tag.Root>
      <Tag.Label>Readonly</Tag.Label>
    </Tag.Root>
  ),
}

export const Variants: Story = {
  render: () => (
    <div className="op-cluster gap-sm">
      <Tag.Root variant="primary">
        <Tag.Label>Primary</Tag.Label>
        <Button shape="circle" borderless aria-label="Remove Primary">
          <Icon name="close" />
        </Button>
      </Tag.Root>
      <Tag.Root variant="danger">
        <Tag.Label>Danger</Tag.Label>
        <Button shape="circle" borderless aria-label="Remove Danger">
          <Icon name="close" />
        </Button>
      </Tag.Root>
      <Tag.Root variant="warning">
        <Tag.Label>Warning</Tag.Label>
        <Button shape="circle" borderless aria-label="Remove Warning">
          <Icon name="close" />
        </Button>
      </Tag.Root>
      <Tag.Root variant="info">
        <Tag.Label>Info</Tag.Label>
        <Button shape="circle" borderless aria-label="Remove Info">
          <Icon name="close" />
        </Button>
      </Tag.Root>
      <Tag.Root variant="notice">
        <Tag.Label>Notice</Tag.Label>
        <Button shape="circle" borderless aria-label="Remove Notice">
          <Icon name="close" />
        </Button>
      </Tag.Root>
    </div>
  ),
}

export const LeadingButton: Story = {
  render: () => (
    <Tag.Root variant="info">
      <Button shape="circle" borderless aria-label="Remove Leading">
        <Icon name="close" />
      </Button>
      <Tag.Label>Leading button</Tag.Label>
    </Tag.Root>
  ),
}
