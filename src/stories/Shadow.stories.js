import { createCard } from './Card/Card.js'
import ShadowDocs from './Shadow/Shadow.mdx'

export default {
  title: 'Tokens/Shadow',
  argTypes: {
    shadow: {
      control: { type: 'select' },
      options: ['x-small', 'small', 'medium', 'large', 'x-large'],
    },
  },
  parameters: {
    docs: {
      page: ShadowDocs,
    },
  },
}

const Template = ({ shadow, ...args }) => {
  return createCard({ padded: true, shadow, ...args })
}

export const XSmall = Template.bind({})
XSmall.args = {
  shadow: 'x-small',
  label: 'X Small',
}

export const Small = Template.bind({})
Small.args = {
  shadow: 'small',
  label: 'Small',
}

export const Medium = Template.bind({})
Medium.args = {
  shadow: 'medium',
  label: 'Medium',
}

export const Large = Template.bind({})
Large.args = {
  shadow: 'large',
  label: 'Large',
}

export const XLarge = Template.bind({})
XLarge.args = {
  shadow: 'x-large',
  label: 'X Large',
}
