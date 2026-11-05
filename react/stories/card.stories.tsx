import type { Meta, StoryObj } from '@storybook/react-vite'

import { Button } from '@/registry/optics/ui/button'
import { Card } from '@/registry/optics/ui/card'

const meta = {
  title: 'Components/Card',
  component: Card.Root,
  tags: ['autodocs'],
} satisfies Meta<typeof Card.Root>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Card.Root shadow="small">
      <Card.Header>
        <h3>Project update</h3>
      </Card.Header>
      <Card.Body>The design review is scheduled for Thursday afternoon.</Card.Body>
      <Card.Footer>
        <div className="op-cluster gap-sm justify-end">
          <Button size="small" borderless>
            Dismiss
          </Button>
          <Button size="small" variant="primary">
            View
          </Button>
        </div>
      </Card.Footer>
    </Card.Root>
  ),
}

export const Padded: Story = {
  render: () => <Card.Root padded>A padded card with no sections.</Card.Root>,
}

export const Condensed: Story = {
  render: () => (
    <Card.Root condensed>
      <Card.Header>
        <h3>Condensed</h3>
      </Card.Header>
      <Card.Body>Tighter padding for every section.</Card.Body>
      <Card.Footer>Footer</Card.Footer>
    </Card.Root>
  ),
}

export const Shadows: Story = {
  render: () => (
    <div className="op-cluster gap-lg">
      <Card.Root padded shadow="x-small">
        x-small
      </Card.Root>
      <Card.Root padded shadow="small">
        small
      </Card.Root>
      <Card.Root padded shadow="medium">
        medium
      </Card.Root>
      <Card.Root padded shadow="large">
        large
      </Card.Root>
      <Card.Root padded shadow="x-large">
        x-large
      </Card.Root>
    </div>
  ),
}
