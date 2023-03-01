import { createFontFamily } from './Font/Font.js'
import FontFamilyDocs from './Font/FontFamily.mdx'

export default {
  title: 'Tokens/Typography/Font Family',
  argTypes: {
    family: {
      control: { type: 'select' },
      options: ['Noto Sans', 'Tilt Neon'],
    },
  },
  parameters: {
    docs: {
      page: FontFamilyDocs,
    },
  },
}

const Template = ({ family, ...args }) => {
  return createFontFamily({ family, ...args })
}

export const Default = Template.bind({})
Default.args = {
  family: 'Noto Sans',
}

export const Alternate = Template.bind({})
Alternate.args = {
  family: 'Tilt Neon',
}
