import type { Meta, StoryObj } from '@storybook/react-vite'

import { Badge } from '@/registry/optics/ui/badge'
import { Button } from '@/registry/optics/ui/button'
import { Split } from '@/registry/optics/ui/split'

const meta = {
  title: 'Layout/Split',
  component: Split,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  args: {
    children: (
      <>
        <strong>Page title</strong>
        <div className="op-cluster gap-sm">
          <Button size="small" borderless>
            Cancel
          </Button>
          <Button size="small" variant="primary">
            Save
          </Button>
        </div>
      </>
    ),
  },
  argTypes: {
    children: { control: false },
    align: { control: 'select', options: [undefined, 'stretch', 'start', 'center', 'end', 'baseline'] },
    justify: { control: 'select', options: [undefined, 'start', 'center', 'end', 'between', 'around'] },
    gap: { control: 'select', options: [undefined, 'none', 'xxs', 'xs', 'sm', 'md', 'lg', 'xl'] },
    wrap: { control: 'boolean' },
    self: { control: 'select', options: [undefined, 'auto', 'start', 'center', 'end', 'stretch', 'baseline'] },
    grow: { control: 'boolean' },
  },
} satisfies Meta<typeof Split>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const ThreeItems: Story = {
  args: {
    children: (
      <>
        <Badge variant="info">Left</Badge>
        <Badge>Middle</Badge>
        <Badge variant="info">Right</Badge>
      </>
    ),
  },
}
