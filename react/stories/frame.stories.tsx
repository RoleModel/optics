import type { Meta, StoryObj } from '@storybook/react-vite'

import { Frame, type FrameProps } from '@/registry/optics/ui/frame'

type FrameArgs = Pick<FrameProps, 'aspect' | 'inlineSize'>

const image = (
  <img
    src="https://images.unsplash.com/photo-1517849845537-4d257902454a?w=800&q=80"
    alt="A dog looking at the camera"
  />
)

const meta = {
  title: 'Layout/Frame',
  parameters: { layout: 'padded' },
  decorators: [
    (Story) => (
      <div style={{ maxInlineSize: '20rem' }}>
        <Story />
      </div>
    ),
  ],
  args: {
    inlineSize: '',
  },
  argTypes: {
    aspect: {
      control: 'select',
      options: ['square', 'landscape', 'portrait', '4-3', '3-4', '3-2', '2-3'],
      description: 'Aspect ratio of the frame: `op-frame--*`. Defaults to `square`',
    },
    inlineSize: {
      control: 'text',
      description: 'Maximum inline size of the frame: sets `--_op-frame-inline-size`. Defaults to `100%`',
    },
  },
  render: ({ aspect, inlineSize }) => (
    <Frame aspect={aspect} inlineSize={inlineSize || undefined}>
      {image}
    </Frame>
  ),
} satisfies Meta<FrameArgs>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Without: Story = {
  render: () => <div>{image}</div>,
}

export const Square: Story = {
  args: { aspect: 'square' },
}

export const Landscape: Story = {
  args: { aspect: 'landscape' },
}

export const Portrait: Story = {
  args: { aspect: 'portrait' },
}

export const FourThree: Story = {
  args: { aspect: '4-3' },
}

export const ThreeFour: Story = {
  args: { aspect: '3-4' },
}

export const ThreeTwo: Story = {
  args: { aspect: '3-2' },
}

export const TwoThree: Story = {
  args: { aspect: '2-3' },
}

export const CustomInlineSize: Story = {
  args: { aspect: 'square', inlineSize: '50%' },
}
