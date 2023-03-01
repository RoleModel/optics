import { createLineHeight } from './Font/Font.js'
import LineHeightDocs from './Font/LineHeight.mdx'

export default {
  title: 'Tokens/Typography/Line Height',
  argTypes: {
    lineHeight: {
      control: { type: 'select' },
      options: ['none', 'densest', 'denser', 'dense', 'base', 'loose', 'looser', 'loosest'],
    },
  },
  parameters: {
    docs: {
      page: LineHeightDocs,
    },
  },
}

const Template = ({ lineHeight, ...args }) => {
  return createLineHeight({ lineHeight, ...args })
}

export const Base = Template.bind({})
Base.args = {
  lineHeight: 'base',
}

export const Loosest = Template.bind({})
Loosest.args = {
  lineHeight: 'loosest',
}
