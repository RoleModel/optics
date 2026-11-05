import type { Meta, StoryObj } from '@storybook/react-vite'

import { Button } from '@/registry/optics/ui/button'
import { ButtonGroup } from '@/registry/optics/ui/button-group'
import { Icon } from '@/registry/optics/ui/icon'

const meta = {
  title: 'Components/Button Group',
  component: ButtonGroup,
  tags: ['autodocs'],
} satisfies Meta<typeof ButtonGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <ButtonGroup>
      <Button>Left</Button>
      <Button>Middle</Button>
      <Button>Right</Button>
    </ButtonGroup>
  ),
}

export const Variants: Story = {
  render: () => (
    <div className="op-stack gap-md">
      <ButtonGroup>
        <Button variant="primary">Left</Button>
        <Button variant="primary">Middle</Button>
        <Button variant="primary">Right</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="destructive">Left</Button>
        <Button variant="destructive">Middle</Button>
        <Button variant="destructive">Right</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="warning">Left</Button>
        <Button variant="warning">Middle</Button>
        <Button variant="warning">Right</Button>
      </ButtonGroup>
    </div>
  ),
}

export const ActiveButton: Story = {
  render: () => (
    <ButtonGroup>
      <Button>Day</Button>
      <Button active>Week</Button>
      <Button>Month</Button>
    </ButtonGroup>
  ),
}

export const Pill: Story = {
  render: () => (
    <ButtonGroup>
      <Button shape="pill">Left</Button>
      <Button shape="pill">Middle</Button>
      <Button shape="pill">Right</Button>
    </ButtonGroup>
  ),
}

export const IconButtons: Story = {
  render: () => (
    <ButtonGroup aria-label="Text formatting">
      <Button aria-label="Bold">
        <Icon name="format_bold" />
      </Button>
      <Button aria-label="Italic">
        <Icon name="format_italic" />
      </Button>
      <Button aria-label="Underline">
        <Icon name="format_underlined" />
      </Button>
    </ButtonGroup>
  ),
}
