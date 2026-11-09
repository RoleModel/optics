import type { Meta, StoryObj } from '@storybook/react-vite'

import { Icon } from '@/registry/optics/ui/icon'
import { SegmentedControl } from '@/registry/optics/ui/segmented-control'

interface SegmentedControlArgs {
  size: 'small' | 'medium' | 'large'
  options: number
  fullWidth: boolean
  showPrefixIcon: boolean
  showSuffixIcon: boolean
}

const meta = {
  title: 'Components/Segmented Control',
  parameters: { layout: 'padded' },
  args: {
    size: 'medium',
    options: 3,
    fullWidth: false,
    showPrefixIcon: false,
    showSuffixIcon: false,
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: '`size` on `SegmentedControl.Root`',
    },
    options: { control: { type: 'number', min: 1, max: 6 }, description: 'Number of `SegmentedControl.Option`s' },
    fullWidth: { control: 'boolean', description: '`fullWidth` on `SegmentedControl.Root`' },
    showPrefixIcon: { control: 'boolean', description: 'Add an `Icon` before each option label' },
    showSuffixIcon: { control: 'boolean', description: 'Add an `Icon` after each option label' },
  },
  render: ({ size, options, fullWidth, showPrefixIcon, showSuffixIcon }) => (
    <SegmentedControl.Root size={size} fullWidth={fullWidth || undefined}>
      {Array.from({ length: options }, (_, index) => (
        <SegmentedControl.Option key={index} value={`${index + 1}`}>
          {showPrefixIcon && <Icon name="bolt" />}
          {`Option ${index + 1}`}
          {showSuffixIcon && <Icon name="info" />}
        </SegmentedControl.Option>
      ))}
    </SegmentedControl.Root>
  ),
} satisfies Meta<SegmentedControlArgs>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Size: Story = {
  render: () => (
    <div className="op-stack gap-md items-start">
      <SegmentedControl.Root size="small">
        <SegmentedControl.Option value="1">Small</SegmentedControl.Option>
        <SegmentedControl.Option value="2">Option 2</SegmentedControl.Option>
        <SegmentedControl.Option value="3">Option 3</SegmentedControl.Option>
      </SegmentedControl.Root>
      <SegmentedControl.Root size="medium">
        <SegmentedControl.Option value="1">Medium</SegmentedControl.Option>
        <SegmentedControl.Option value="2">Option 2</SegmentedControl.Option>
        <SegmentedControl.Option value="3">Option 3</SegmentedControl.Option>
      </SegmentedControl.Root>
      <SegmentedControl.Root size="large">
        <SegmentedControl.Option value="1">Large</SegmentedControl.Option>
        <SegmentedControl.Option value="2">Option 2</SegmentedControl.Option>
        <SegmentedControl.Option value="3">Option 3</SegmentedControl.Option>
      </SegmentedControl.Root>
    </div>
  ),
}

export const FullWidth: Story = {
  args: { fullWidth: true },
}

export const WithIcons: Story = {
  args: { showSuffixIcon: true },
}
