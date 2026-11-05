import type { Meta, StoryObj } from '@storybook/react-vite'

import { Frame } from '@/registry/optics/ui/frame'

const aspects = ['square', 'landscape', 'portrait', '4-3', '3-4', '3-2', '2-3'] as const

const meta = {
  title: 'Layout/Frame',
  component: Frame,
  tags: ['autodocs'],
  args: {
    children: <img src="https://picsum.photos/id/1/400/400" alt="Laptop on a desk" />,
  },
  argTypes: {
    children: { control: false },
    aspect: { control: 'select', options: [undefined, ...aspects] },
  },
  render: (args) => (
    <div style={{ inlineSize: '16rem' }}>
      <Frame {...args} />
    </div>
  ),
} satisfies Meta<typeof Frame>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Landscape: Story = {
  args: { aspect: 'landscape' },
}

export const Portrait: Story = {
  args: { aspect: 'portrait' },
}

export const AspectRatios: Story = {
  render: (args) => (
    <div className="op-cluster gap-md items-start">
      {aspects.map((aspect) => (
        <div key={aspect} className="op-stack gap-xs" style={{ inlineSize: '8rem' }}>
          <Frame {...args} aspect={aspect} />
          <span>{aspect}</span>
        </div>
      ))}
    </div>
  ),
}
