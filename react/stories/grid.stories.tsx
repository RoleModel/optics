import type { Meta, StoryObj } from '@storybook/react-vite'

import { Card } from '@/registry/optics/ui/card'
import { Frame } from '@/registry/optics/ui/frame'
import { Grid } from '@/registry/optics/ui/grid'
import { TextPair } from '@/registry/optics/ui/text-pair'

const cells = Array.from({ length: 6 }, (_, index) => (
  <Card.Root key={index} padded>
    Item {index + 1}
  </Card.Root>
))

const meta = {
  title: 'Layout/Grid',
  component: Grid,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  args: {
    children: cells,
  },
  argTypes: {
    children: { control: false },
    columns: { control: 'select', options: [undefined, 2, 3, 4, 5, 6] },
    gap: { control: 'select', options: [undefined, 'none', 'xxs', 'xs', 'sm', 'md', 'lg', 'xl'] },
  },
} satisfies Meta<typeof Grid>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Columns: Story = {
  render: (args) => (
    <div className="op-stack gap-lg">
      <Grid {...args} columns={2} />
      <Grid {...args} columns={3} />
      <Grid {...args} columns={6} />
    </div>
  ),
}

export const Gaps: Story = {
  render: (args) => (
    <div className="op-stack gap-lg">
      <Grid {...args} columns={6} gap="xxs" />
      <Grid {...args} columns={6} gap="md" />
      <Grid {...args} columns={6} gap="xl" />
    </div>
  ),
}

const pets = [
  { name: 'Clint', subtitle: 'Dog · Male' },
  { name: 'Daisy', subtitle: 'Dog · Female' },
  { name: 'June', subtitle: 'Dog · Female' },
  { name: 'Wallace', subtitle: 'Dog · Male' },
]

export const CardGrid: Story = {
  args: {
    columns: 2,
    children: pets.map((pet) => (
      <Card.Root key={pet.name}>
        <Frame aspect="landscape">
          <img src="https://picsum.photos/id/237/400/300" alt={pet.name} />
        </Frame>
        <Card.Header>
          <TextPair.Root>
            <TextPair.Title>{pet.name}</TextPair.Title>
            <TextPair.Subtitle>{pet.subtitle}</TextPair.Subtitle>
          </TextPair.Root>
        </Card.Header>
      </Card.Root>
    )),
  },
}
