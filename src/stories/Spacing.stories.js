import { createSpacing } from './Spacing/Spacing.js'
import SpacingDocs from './Spacing/Spacing.mdx'

export default {
  title: 'Tokens/Spacing',
  argTypes: {
    spacing: {
      control: { type: 'select' },
      options: [
        '3x-small',
        '2x-small',
        'x-small',
        'small',
        'medium',
        'large',
        'x-large',
        '2x-large',
        '3x-large',
        '4x-large',
      ],
    },
  },
  parameters: {
    docs: {
      page: SpacingDocs,
    },
  },
}

const Template = ({ spacing, ...args }) => {
  return createSpacing({ spacing, ...args })
}

export const Small = Template.bind({})
Small.args = {
  spacing: 'small',
}

export const Medium = Template.bind({})
Medium.args = {
  spacing: 'medium',
}

export const Large = Template.bind({})
Large.args = {
  spacing: 'large',
}
