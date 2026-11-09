import type { Meta, StoryObj } from '@storybook/react-vite'

import { TextPair } from '@/registry/optics/ui/text-pair'

type Size = 'small' | 'medium' | 'large'

interface TextPairArgs {
  inline: boolean
  titleText: string
  titleSize?: Size
  subtitleText: string
  subtitleSize?: Size
}

const meta = {
  title: 'Components/Text Pair',
  args: {
    inline: false,
    titleText: 'This is the Title',
    subtitleText: 'This is the Subtitle',
  },
  argTypes: {
    inline: { control: 'boolean', description: '`inline` on `TextPair.Root`' },
    titleText: { control: 'text', description: 'Text of `TextPair.Title`' },
    titleSize: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: '`size` of `TextPair.Title`. Without one the title is medium',
    },
    subtitleText: { control: 'text', description: 'Text of `TextPair.Subtitle`' },
    subtitleSize: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: '`size` of `TextPair.Subtitle`. Without one the subtitle is small',
    },
  },
  render: ({ inline, titleText, titleSize, subtitleText, subtitleSize }) => (
    <TextPair.Root inline={inline || undefined}>
      <TextPair.Title size={titleSize}>{titleText}</TextPair.Title>
      <TextPair.Subtitle size={subtitleSize}>{subtitleText}</TextPair.Subtitle>
    </TextPair.Root>
  ),
} satisfies Meta<TextPairArgs>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Inline: Story = {
  args: { inline: true, titleText: 'Temperature:', subtitleText: '72℉' },
}

export const TitleSize: Story = {
  args: { inline: true, titleText: 'Large Title', titleSize: 'large' },
}

export const SubtitleSize: Story = {
  args: { inline: true, subtitleText: 'Large Subtitle', subtitleSize: 'large' },
}
