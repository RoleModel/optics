import type { Meta, StoryObj } from '@storybook/react-vite'

import { Icon } from '@/registry/optics/ui/icon'
import { SegmentedControl } from '@/registry/optics/ui/segmented-control'

const meta = {
  title: 'Components/Segmented Control',
  component: SegmentedControl.Root,
  tags: ['autodocs'],
} satisfies Meta<typeof SegmentedControl.Root>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <SegmentedControl.Root aria-label="Period">
      <SegmentedControl.Option value="day" defaultChecked>
        Day
      </SegmentedControl.Option>
      <SegmentedControl.Option value="week">Week</SegmentedControl.Option>
      <SegmentedControl.Option value="month">Month</SegmentedControl.Option>
    </SegmentedControl.Root>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="op-stack gap-md items-start">
      <SegmentedControl.Root size="small" aria-label="Small">
        <SegmentedControl.Option value="1" defaultChecked>
          Small
        </SegmentedControl.Option>
        <SegmentedControl.Option value="2">Option 2</SegmentedControl.Option>
      </SegmentedControl.Root>
      <SegmentedControl.Root size="medium" aria-label="Medium">
        <SegmentedControl.Option value="1" defaultChecked>
          Medium
        </SegmentedControl.Option>
        <SegmentedControl.Option value="2">Option 2</SegmentedControl.Option>
      </SegmentedControl.Root>
      <SegmentedControl.Root size="large" aria-label="Large">
        <SegmentedControl.Option value="1" defaultChecked>
          Large
        </SegmentedControl.Option>
        <SegmentedControl.Option value="2">Option 2</SegmentedControl.Option>
      </SegmentedControl.Root>
    </div>
  ),
}

export const WithIcons: Story = {
  render: () => (
    <SegmentedControl.Root aria-label="View">
      <SegmentedControl.Option value="list" defaultChecked>
        <Icon name="list" />
        List
      </SegmentedControl.Option>
      <SegmentedControl.Option value="board">
        <Icon name="grid_view" />
        Board
      </SegmentedControl.Option>
      <SegmentedControl.Option value="timeline">
        <Icon name="timeline" />
        Timeline
      </SegmentedControl.Option>
    </SegmentedControl.Root>
  ),
}

export const FullWidth: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <SegmentedControl.Root fullWidth aria-label="Period">
      <SegmentedControl.Option value="day" defaultChecked>
        Day
      </SegmentedControl.Option>
      <SegmentedControl.Option value="week">Week</SegmentedControl.Option>
      <SegmentedControl.Option value="month">Month</SegmentedControl.Option>
    </SegmentedControl.Root>
  ),
}
