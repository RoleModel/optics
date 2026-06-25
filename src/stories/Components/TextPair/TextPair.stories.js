import { createTextPair } from './TextPair.js'

export default {
  title: 'Components/Text Pair',
  render: ({ direction, ...args }) => {
    return createTextPair({ direction, ...args })
  },
  argTypes: {
    inline: { control: 'boolean' },
    titleText: { control: 'text' },
    titleSize: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    subtitleText: { control: 'text' },
    subtitleSize: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    gap: {
      control: { type: 'select' },
      options: ['none', 'xxs', 'xs', 'sm', 'md', 'lg', 'xl'],
    },
  },
}

export const Default = {
  args: {},
}

export const Inline = {
  args: {
    inline: true,
    titleText: 'Temperature:',
    subtitleText: '72℉',
  },
}

export const TitleSize = {
  args: {
    inline: true,
    titleText: 'Large Title',
    titleSize: 'large',
  },
}

export const SubtitleSize = {
  args: {
    inline: true,
    subtitleText: 'Large Subtitle',
    subtitleSize: 'large',
  },
}
