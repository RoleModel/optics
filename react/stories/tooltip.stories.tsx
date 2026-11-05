import type { Meta, StoryObj } from '@storybook/react-vite'

import { Button } from '@/registry/optics/ui/button'
import { Icon } from '@/registry/optics/ui/icon'
import { Tooltip } from '@/registry/optics/ui/tooltip'

const meta = {
  title: 'Components/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  args: {
    text: 'Saves your changes',
    children: <Button variant="primary">Save</Button>,
  },
  argTypes: {
    children: { control: false },
    text: { control: 'text' },
    position: { control: 'select', options: ['top', 'right', 'bottom', 'left'] },
    delay: { control: 'number' },
  },
} satisfies Meta<typeof Tooltip>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Positions: Story = {
  render: (args) => (
    <div className="op-cluster gap-md">
      <Tooltip {...args} text="Top" position="top">
        <Button>Top</Button>
      </Tooltip>
      <Tooltip {...args} text="Right" position="right">
        <Button>Right</Button>
      </Tooltip>
      <Tooltip {...args} text="Bottom" position="bottom">
        <Button>Bottom</Button>
      </Tooltip>
      <Tooltip {...args} text="Left" position="left">
        <Button>Left</Button>
      </Tooltip>
    </div>
  ),
}

export const OnIcon: Story = {
  args: {
    text: 'More information',
    children: <Icon name="info" label="Information" tabIndex={0} />,
  },
}

export const DisabledButton: Story = {
  args: {
    text: 'You need edit access',
    children: (
      <span tabIndex={0}>
        <Button disabled>Edit</Button>
      </span>
    ),
  },
}
