import { createLetterSpacing } from './LetterSpacing/LetterSpacing.js'
import LetterSpacingDocs from './LetterSpacing/LetterSpacing.mdx'

export default {
  title: 'Tokens/Typography/Letter Spacing',
  argTypes: {
    spacing: {
      control: { type: 'select' },
      options: ['label', 'navigation'],
    },
  },
  parameters: {
    docs: {
      page: LetterSpacingDocs,
    },
  },
}

const Template = ({ spacing, ...args }) => {
  return createLetterSpacing({ spacing, ...args })
}

export const Default = Template.bind({})
Default.args = {
  spacing: 'label',
}

export const Navigation = Template.bind({})
Navigation.args = {
  spacing: 'navigation',
}
