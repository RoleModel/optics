import type { Meta, StoryObj } from '@storybook/react-vite'

import { TextPair } from '@/registry/optics/ui/text-pair'

const meta = {
  title: 'Components/Text Pair',
  component: TextPair.Root,
  tags: ['autodocs'],
} satisfies Meta<typeof TextPair.Root>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <TextPair.Root>
      <TextPair.Title>Jane Doe</TextPair.Title>
      <TextPair.Subtitle>Product Designer</TextPair.Subtitle>
    </TextPair.Root>
  ),
}

export const Inline: Story = {
  render: () => (
    <TextPair.Root inline>
      <TextPair.Title>Temperature:</TextPair.Title>
      <TextPair.Subtitle>72℉</TextPair.Subtitle>
    </TextPair.Root>
  ),
}

export const TitleSizes: Story = {
  render: () => (
    <div className="op-cluster gap-xl">
      <TextPair.Root>
        <TextPair.Title size="small">Small title</TextPair.Title>
        <TextPair.Subtitle>Subtitle</TextPair.Subtitle>
      </TextPair.Root>
      <TextPair.Root>
        <TextPair.Title size="medium">Medium title</TextPair.Title>
        <TextPair.Subtitle>Subtitle</TextPair.Subtitle>
      </TextPair.Root>
      <TextPair.Root>
        <TextPair.Title size="large">Large title</TextPair.Title>
        <TextPair.Subtitle>Subtitle</TextPair.Subtitle>
      </TextPair.Root>
    </div>
  ),
}

export const SubtitleSizes: Story = {
  render: () => (
    <div className="op-cluster gap-xl">
      <TextPair.Root>
        <TextPair.Title>Title</TextPair.Title>
        <TextPair.Subtitle size="small">Small subtitle</TextPair.Subtitle>
      </TextPair.Root>
      <TextPair.Root>
        <TextPair.Title>Title</TextPair.Title>
        <TextPair.Subtitle size="medium">Medium subtitle</TextPair.Subtitle>
      </TextPair.Root>
      <TextPair.Root>
        <TextPair.Title>Title</TextPair.Title>
        <TextPair.Subtitle size="large">Large subtitle</TextPair.Subtitle>
      </TextPair.Root>
    </div>
  ),
}
