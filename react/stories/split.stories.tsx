import type { Meta, StoryObj } from '@storybook/react-vite'

import { Split, type SplitProps } from '@/registry/optics/ui/split'
import { alignArgType, boxes, gapArgType, itemsArgType, tallContainer } from './layout-helpers'

type SplitArgs = Pick<SplitProps, 'align' | 'gap'> & { items: number }

const meta = {
  title: 'Layout/Split',
  parameters: { layout: 'padded' },
  decorators: [tallContainer('10rem')],
  args: { items: 2 },
  argTypes: { items: itemsArgType(100), align: alignArgType, gap: gapArgType },
  render: ({ items, ...props }) => <Split {...props}>{boxes(items)}</Split>,
} satisfies Meta<SplitArgs>

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
