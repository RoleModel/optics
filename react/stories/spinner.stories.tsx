import type { Meta, StoryObj } from '@storybook/react-vite'

import { Spinner } from '@/registry/optics/ui/spinner'

const meta = {
  title: 'Components/Spinner',
  component: Spinner,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: [undefined, 'x-small', 'small', 'medium', 'large'] },
    label: { control: 'text' },
  },
} satisfies Meta<typeof Spinner>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Sizes: Story = {
  render: (args) => (
    <div className="op-cluster gap-lg items-center">
      <Spinner {...args} size="x-small" />
      <Spinner {...args} size="small" />
      <Spinner {...args} size="medium" />
      <Spinner {...args} size="large" />
    </div>
  ),
}
