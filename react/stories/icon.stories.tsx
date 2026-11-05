import type { Meta, StoryObj } from '@storybook/react-vite'

import { Icon } from '@/registry/optics/ui/icon'

const meta = {
  title: 'Components/Icon',
  component: Icon,
  tags: ['autodocs'],
  args: {
    name: 'skull',
  },
  argTypes: {
    name: { control: 'text' },
    size: { control: 'select', options: [undefined, 'small', 'medium', 'large', 'x-large'] },
    weight: { control: 'select', options: [undefined, 'light', 'normal', 'semi-bold', 'bold'] },
    filled: { control: 'boolean' },
    emphasis: { control: 'select', options: [undefined, 'low', 'normal', 'high'] },
    label: { control: 'text' },
  },
} satisfies Meta<typeof Icon>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Sizes: Story = {
  render: (args) => (
    <div className="op-cluster gap-md items-center">
      <Icon {...args} size="small" />
      <Icon {...args} size="medium" />
      <Icon {...args} size="large" />
      <Icon {...args} size="x-large" />
    </div>
  ),
}

export const Weights: Story = {
  args: { size: 'large' },
  render: (args) => (
    <div className="op-cluster gap-md">
      <Icon {...args} weight="light" />
      <Icon {...args} weight="normal" />
      <Icon {...args} weight="semi-bold" />
      <Icon {...args} weight="bold" />
    </div>
  ),
}

export const Filled: Story = {
  // Icon's props are a union (font icon or inline SVG), and only the font branch takes `filled`.
  render: () => (
    <div className="op-cluster gap-md">
      <Icon name="star" size="x-large" filled={false} />
      <Icon name="star" size="x-large" filled />
    </div>
  ),
}

export const Emphasis: Story = {
  args: { size: 'x-large' },
  render: (args) => (
    <div className="op-cluster gap-md">
      <Icon {...args} emphasis="low" />
      <Icon {...args} emphasis="normal" />
      <Icon {...args} emphasis="high" />
    </div>
  ),
}

const checkCircle = (
  <svg viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M8 12.5l2.5 2.5L16 9.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export const InlineSvg: Story = {
  render: () => (
    <div className="op-cluster gap-md items-center">
      <Icon size="small">{checkCircle}</Icon>
      <Icon size="medium">{checkCircle}</Icon>
      <Icon size="large">{checkCircle}</Icon>
      <Icon size="x-large">{checkCircle}</Icon>
    </div>
  ),
}
