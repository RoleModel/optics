import type { Meta, StoryObj } from '@storybook/react-vite'

import { Avatar } from '@/registry/optics/ui/avatar'
import { Flank, type FlankProps } from '@/registry/optics/ui/flank'
import { TextPair } from '@/registry/optics/ui/text-pair'

type FlankArgs = Pick<FlankProps, 'end' | 'gap'> & { items: number }

const box = {
  minWidth: 'var(--op-space-x-large)',
  minHeight: 'var(--op-space-x-large)',
  backgroundColor: 'var(--op-color-primary-original)',
}

const boxes = (count: number) => Array.from({ length: count }, (_, index) => <div key={index} style={box} />)

const avatar = (
  <Avatar.Root size="large">
    <Avatar.Image src="https://avatars.githubusercontent.com/u/5957102?v=4" alt="Jeremy Walton" />
  </Avatar.Root>
)

const textPair = (
  <TextPair.Root>
    <TextPair.Title>Jeremy Walton</TextPair.Title>
    <TextPair.Subtitle>RoleModel Software</TextPair.Subtitle>
  </TextPair.Root>
)

const meta = {
  title: 'Layout/Flank',
  parameters: { layout: 'padded' },
  args: {
    items: 2,
  },
  argTypes: {
    items: { control: { type: 'number', min: 0, max: 10 }, description: 'Number of child boxes' },
    end: { control: 'boolean', description: 'Flank the small item to the end instead of the start: `op-flank--end`' },
    gap: {
      control: 'select',
      options: ['none', 'xxs', 'xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Space between the children: `gap-*`. Defaults to `md`',
    },
  },
  render: ({ items, end, ...props }) => (
    <Flank end={end || undefined} {...props}>
      {boxes(items)}
    </Flank>
  ),
} satisfies Meta<FlankArgs>

export default meta
type Story = StoryObj<typeof meta>

const renderExample: Story['render'] = ({ items: _items, end, ...props }) => (
  <Flank end={end || undefined} {...props}>
    {end ? textPair : avatar}
    {end ? avatar : textPair}
  </Flank>
)

export const Default: Story = {}

export const Without: Story = {
  render: ({ items }) => <div>{boxes(items)}</div>,
}

export const FlankEnd: Story = {
  args: { end: true },
}

export const AvatarExample: Story = {
  render: renderExample,
}

export const AvatarExampleEnd: Story = {
  args: { end: true },
  render: renderExample,
}
