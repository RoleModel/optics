import { createTextAlignment } from './TextAlignment/TextAlignment.js'
import TextAlignmentDocs from './TextAlignment/TextAlignment.mdx'

export default {
  title: 'Utilities/Text Alignment',
  argTypes: {
    alignment: {
      control: { type: 'select' },
      options: ['left', 'center', 'right', 'justify'],
    },
  },
  parameters: {
    docs: {
      page: TextAlignmentDocs,
    },
  },
}

const Template = ({ alignment, ...args }) => {
  return createTextAlignment({ alignment, ...args })
}

export const Left = Template.bind({})
Left.args = {
  alignment: 'left',
}

export const Center = Template.bind({})
Center.args = {
  alignment: 'center',
}

export const Right = Template.bind({})
Right.args = {
  alignment: 'right',
}

export const Justify = Template.bind({})
Justify.args = {
  alignment: 'justify',
}
