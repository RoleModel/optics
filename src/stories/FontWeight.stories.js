import { createFontWeight } from './Font/Font.js'
import FontWeightDocs from './Font/FontWeight.mdx'

export default {
  title: 'Tokens/Typography/Font Weight',
  argTypes: {
    weight: {
      control: { type: 'select' },
      options: ['thin', 'extra-light', 'light', 'normal', 'semi-bold', 'bold', 'extra-bold', 'black'],
    },
  },
  parameters: {
    docs: {
      page: FontWeightDocs,
    },
  },
}

const Template = ({ weight, ...args }) => {
  return createFontWeight({ weight, ...args })
}

export const Normal = Template.bind({})
Normal.args = {
  weight: 'normal',
}

export const Bold = Template.bind({})
Bold.args = {
  weight: 'bold',
}
