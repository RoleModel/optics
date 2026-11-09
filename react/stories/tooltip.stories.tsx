import type { Meta, StoryObj } from '@storybook/react-vite'

import { Button } from '@/registry/optics/ui/button'
import { Icon } from '@/registry/optics/ui/icon'
import { Tooltip, type TooltipPosition } from '@/registry/optics/ui/tooltip'

interface TooltipArgs {
  text: string
  position?: TooltipPosition
  delay?: number
  example: 'text' | 'button' | 'icon'
}

const meta = {
  title: 'Components/Tooltip',
  args: {
    text: 'A basic tooltip',
    example: 'text',
  },
  argTypes: {
    text: { control: 'text', description: '`text` of `Tooltip`, shown on hover and focus' },
    position: {
      control: 'select',
      options: ['top', 'right', 'bottom', 'left'],
      description: 'Side of the trigger the tooltip appears on. Without one it is `top`',
    },
    delay: { control: 'number', description: 'Milliseconds before the tooltip opens. Without one it is 300' },
    example: {
      control: 'select',
      options: ['text', 'button', 'icon'],
      description: 'Not a prop. The element the tooltip is on',
    },
  },
  render: ({ text, position, delay, example }) => (
    <Tooltip text={text} position={position} delay={delay}>
      {example === 'button' ? (
        <Button variant="primary">A Button Example</Button>
      ) : example === 'icon' ? (
        <Icon name="info" label="Information" tabIndex={0} />
      ) : (
        <p tabIndex={0}>A Text Example</p>
      )}
    </Tooltip>
  ),
} satisfies Meta<TooltipArgs>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Top: Story = {
  args: { text: 'A basic top tooltip', position: 'top' },
}

export const Right: Story = {
  args: { text: 'A basic right tooltip', position: 'right' },
}

export const Bottom: Story = {
  args: { text: 'A basic bottom tooltip', position: 'bottom' },
}

export const Left: Story = {
  args: { text: 'A basic left tooltip', position: 'left' },
}

export const OnButton: Story = {
  name: 'Button',
  args: { text: 'A button tooltip', example: 'button' },
}

export const OnIcon: Story = {
  name: 'Icon',
  args: { text: 'An icon tooltip', example: 'icon' },
}

export const LotsOfText: Story = {
  args: { text: 'An example of a tooltip with a lot of content that will wrap' },
}
