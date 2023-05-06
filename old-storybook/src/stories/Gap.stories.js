import { createGap } from './Gap/Gap.js'
import GapDocs from './Gap/Gap.mdx'

export default {
  title: 'Utilities/Gap',
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl'],
    },
  },
  parameters: {
    docs: {
      page: GapDocs,
    },
  },
}

const Template = ({ size, ...args }) => {
  return createGap({ size, ...args })
}

export const ExtraExtraSmall = Template.bind({})
ExtraExtraSmall.args = {
  size: 'xxs',
}

export const ExtraSmall = Template.bind({})
ExtraSmall.args = {
  size: 'xs',
}

export const Small = Template.bind({})
Small.args = {
  size: 'sm',
}

export const Medium = Template.bind({})
Medium.args = {
  size: 'md',
}

export const Large = Template.bind({})
Large.args = {
  size: 'lg',
}
export const ExtraLarge = Template.bind({})
ExtraLarge.args = {
  size: 'xl',
}
