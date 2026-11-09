import type { Meta, StoryObj } from '@storybook/react-vite'

import { Cluster, type ClusterProps } from '@/registry/optics/ui/cluster'

type ClusterArgs = Pick<ClusterProps, 'align' | 'gap'> & { items: number }

const box = {
  minWidth: 'var(--op-space-x-large)',
  minHeight: 'var(--op-space-x-large)',
  backgroundColor: 'var(--op-color-primary-original)',
}

const boxes = (count: number) => Array.from({ length: count }, (_, index) => <div key={index} style={box} />)

const meta = {
  title: 'Layout/Cluster',
  parameters: { layout: 'padded' },
  // A tall container shows how the children fill the cross axis.
  decorators: [
    (Story) => (
      <div style={{ display: 'grid', minBlockSize: '15rem' }}>
        <Story />
      </div>
    ),
  ],
  args: { items: 35 },
  argTypes: {
    items: { control: { type: 'number', min: 0, max: 100 }, description: 'Number of child boxes' },
    align: {
      control: 'select',
      options: ['stretch', 'start', 'center', 'end', 'baseline'],
      description: 'Cross axis alignment of the children: `items-*`',
    },
    gap: {
      control: 'select',
      options: ['none', 'xxs', 'xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Space between the children: `gap-*`. Defaults to `md`',
    },
  },
  render: ({ items, ...props }) => <Cluster {...props}>{boxes(items)}</Cluster>,
} satisfies Meta<ClusterArgs>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Without: Story = {
  render: ({ items }) => <div>{boxes(items)}</div>,
}

export const AlignStretch: Story = {
  args: { align: 'stretch' },
}

export const AlignStart: Story = {
  args: { align: 'start' },
}

export const AlignCenter: Story = {
  args: { align: 'center' },
}

export const AlignEnd: Story = {
  args: { align: 'end' },
}

export const AlignBaseline: Story = {
  args: { align: 'baseline' },
}
