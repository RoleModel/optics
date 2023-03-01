import { createFontSize } from './Font/Font.js'
import FontSizeDocs from './Font/FontSize.mdx'

export default {
  title: 'Tokens/Typography/Font Size',
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['x-small', 'small', 'medium', 'large', 'x-large', '2x-large', '3x-large', '4x-large', '5x-large'],
    },
  },
  parameters: {
    docs: {
      page: FontSizeDocs,
    },
  },
}

const Template = ({ size, ...args }) => {
  return createFontSize({ size, ...args })
}

export const Small = Template.bind({})
Small.args = {
  size: 'small',
}

export const Medium = Template.bind({})
Medium.args = {
  size: 'medium',
}

export const Large = Template.bind({})
Large.args = {
  size: 'large',
}
