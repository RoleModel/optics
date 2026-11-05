import type { Meta, StoryObj } from '@storybook/react-vite'

import { Divider } from '@/registry/optics/ui/divider'

const meta = {
  title: 'Components/Divider',
  component: Divider,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  argTypes: {
    vertical: { control: 'boolean' },
    size: { control: 'select', options: [undefined, 'small', 'medium', 'large'] },
    spacing: { control: 'select', options: [undefined, 'small', 'medium', 'large'] },
  },
} satisfies Meta<typeof Divider>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <div>
      <p>Above the divider</p>
      <Divider {...args} />
      <p>Below the divider</p>
    </div>
  ),
}

export const Sizes: Story = {
  render: (args) => (
    <div className="op-stack gap-lg">
      <Divider {...args} size="small" />
      <Divider {...args} size="medium" />
      <Divider {...args} size="large" />
    </div>
  ),
}

export const Spacing: Story = {
  render: (args) => (
    <div>
      <p>Small spacing</p>
      <Divider {...args} spacing="small" />
      <p>Medium spacing</p>
      <Divider {...args} spacing="medium" />
      <p>Large spacing</p>
      <Divider {...args} spacing="large" />
      <p>End</p>
    </div>
  ),
}

export const Vertical: Story = {
  args: { vertical: true },
  render: (args) => (
    <div className="op-cluster gap-md">
      <span>Left</span>
      <Divider {...args} />
      <span>Middle</span>
      <Divider {...args} />
      <span>Right</span>
    </div>
  ),
}
