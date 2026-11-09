import type { Meta, StoryObj } from '@storybook/react-vite'

import { Divider } from '@/registry/optics/ui/divider'

const meta = {
  title: 'Components/Divider',
  component: Divider,
  parameters: { layout: 'padded' },
  argTypes: {
    vertical: { control: 'boolean', description: 'Divide content side by side instead of stacked' },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Thickness of the line. Unset looks like `small`',
    },
    spacing: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Margin on each side of the line. Unset is none',
    },
  },
  render: (args) =>
    args.vertical ? (
      <div className="op-cluster gap-xs">
        <span>Left</span>
        <Divider {...args} />
        <span>Right</span>
      </div>
    ) : (
      <div className="op-stack gap-xs">
        <span>Above</span>
        <Divider {...args} />
        <span>Below</span>
      </div>
    ),
} satisfies Meta<typeof Divider>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Vertical: Story = {
  args: { vertical: true },
}

export const Size: Story = {
  render: () => (
    <div className="op-stack gap-md">
      <Divider size="small" />
      <Divider size="medium" />
      <Divider size="large" />
    </div>
  ),
}

export const Spacing: Story = {
  render: () => (
    <div className="op-stack gap-none">
      <span>Small spacing</span>
      <Divider spacing="small" />
      <span>Medium spacing</span>
      <Divider spacing="medium" />
      <span>Large spacing</span>
      <Divider spacing="large" />
      <span>End</span>
    </div>
  ),
}
