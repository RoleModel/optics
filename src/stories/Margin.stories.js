import { createMargin } from './Margin/Margin.js'
import MarginDocs from './Margin/Margin.mdx'

export default {
  title: 'Utilities/Margin',
  argTypes: {
    margin: {
      control: { type: 'select' },
      options: ['', 'none', 'auto', 'xs', 'sm', 'md', 'lg', 'xl'],
    },
    marginY: {
      control: { type: 'select' },
      options: ['', 'none', 'xs', 'sm', 'md', 'lg', 'xl'],
    },
    marginX: {
      control: { type: 'select' },
      options: ['', 'none', 'xs', 'sm', 'md', 'lg', 'xl'],
    },
    marginTop: {
      control: { type: 'select' },
      options: ['', 'none', 'xs', 'sm', 'md', 'lg', 'xl'],
    },
    marginBottom: {
      control: { type: 'select' },
      options: ['', 'none', 'xs', 'sm', 'md', 'lg', 'xl'],
    },
    marginLeft: {
      control: { type: 'select' },
      options: ['', 'none', 'xs', 'sm', 'md', 'lg', 'xl'],
    },
    marginRight: {
      control: { type: 'select' },
      options: ['', 'none', 'xs', 'sm', 'md', 'lg', 'xl'],
    },
  },
  parameters: {
    docs: {
      page: MarginDocs,
    },
  },
}

const Template = ({ margin, ...args }) => {
  return createMargin({ margin, ...args })
}

export const MarginNone = Template.bind({})
MarginNone.args = {
  margin: 'none',
}

export const MarginAuto = Template.bind({})
MarginAuto.args = {
  margin: 'auto',
}

export const MarginExtraSmall = Template.bind({})
MarginExtraSmall.args = {
  margin: 'xs',
}

export const MarginSmall = Template.bind({})
MarginSmall.args = {
  margin: 'sm',
}

export const MarginMedium = Template.bind({})
MarginMedium.args = {
  margin: 'md',
}

export const MarginLarge = Template.bind({})
MarginLarge.args = {
  margin: 'lg',
}

export const MarginExtraLarge = Template.bind({})
MarginExtraLarge.args = {
  margin: 'xl',
}

export const MarginYNone = Template.bind({})
MarginYNone.args = {
  marginY: 'none',
}

export const MarginYExtraSmall = Template.bind({})
MarginYExtraSmall.args = {
  marginY: 'xs',
}

export const MarginYSmall = Template.bind({})
MarginYSmall.args = {
  marginY: 'sm',
}

export const MarginYMedium = Template.bind({})
MarginYMedium.args = {
  marginY: 'md',
}

export const MarginYLarge = Template.bind({})
MarginYLarge.args = {
  marginY: 'lg',
}

export const MarginYExtraLarge = Template.bind({})
MarginYExtraLarge.args = {
  marginY: 'xl',
}

export const MarginXNone = Template.bind({})
MarginXNone.args = {
  marginX: 'none',
}

export const MarginXExtraSmall = Template.bind({})
MarginXExtraSmall.args = {
  marginX: 'xs',
}

export const MarginXSmall = Template.bind({})
MarginXSmall.args = {
  marginX: 'sm',
}

export const MarginXMedium = Template.bind({})
MarginXMedium.args = {
  marginX: 'md',
}

export const MarginXLarge = Template.bind({})
MarginXLarge.args = {
  marginX: 'lg',
}

export const MarginXExtraLarge = Template.bind({})
MarginXExtraLarge.args = {
  marginX: 'xl',
}

export const MarginTopNone = Template.bind({})
MarginTopNone.args = {
  marginTop: 'none',
}

export const MarginTopExtraSmall = Template.bind({})
MarginTopExtraSmall.args = {
  marginTop: 'xs',
}

export const MarginTopSmall = Template.bind({})
MarginTopSmall.args = {
  marginTop: 'sm',
}

export const MarginTopMedium = Template.bind({})
MarginTopMedium.args = {
  marginTop: 'md',
}

export const MarginTopLarge = Template.bind({})
MarginTopLarge.args = {
  marginTop: 'lg',
}

export const MarginTopExtraLarge = Template.bind({})
MarginTopExtraLarge.args = {
  marginTop: 'xl',
}

export const MarginBottomNone = Template.bind({})
MarginBottomNone.args = {
  marginBottom: 'none',
}

export const MarginBottomExtraSmall = Template.bind({})
MarginBottomExtraSmall.args = {
  marginBottom: 'xs',
}

export const MarginBottomSmall = Template.bind({})
MarginBottomSmall.args = {
  marginBottom: 'sm',
}

export const MarginBottomMedium = Template.bind({})
MarginBottomMedium.args = {
  marginBottom: 'md',
}

export const MarginBottomLarge = Template.bind({})
MarginBottomLarge.args = {
  marginBottom: 'lg',
}

export const MarginBottomExtraLarge = Template.bind({})
MarginBottomExtraLarge.args = {
  marginBottom: 'xl',
}

export const MarginLeftNone = Template.bind({})
MarginLeftNone.args = {
  marginLeft: 'none',
}

export const MarginLeftExtraSmall = Template.bind({})
MarginLeftExtraSmall.args = {
  marginLeft: 'xs',
}

export const MarginLeftSmall = Template.bind({})
MarginLeftSmall.args = {
  marginLeft: 'sm',
}

export const MarginLeftMedium = Template.bind({})
MarginLeftMedium.args = {
  marginLeft: 'md',
}

export const MarginLeftLarge = Template.bind({})
MarginLeftLarge.args = {
  marginLeft: 'lg',
}

export const MarginLeftExtraLarge = Template.bind({})
MarginLeftExtraLarge.args = {
  marginLeft: 'xl',
}

export const MarginRightNone = Template.bind({})
MarginRightNone.args = {
  marginRight: 'none',
}

export const MarginRightExtraSmall = Template.bind({})
MarginRightExtraSmall.args = {
  marginRight: 'xs',
}

export const MarginRightSmall = Template.bind({})
MarginRightSmall.args = {
  marginRight: 'sm',
}

export const MarginRightMedium = Template.bind({})
MarginRightMedium.args = {
  marginRight: 'md',
}

export const MarginRightLarge = Template.bind({})
MarginRightLarge.args = {
  marginRight: 'lg',
}

export const MarginRightExtraLarge = Template.bind({})
MarginRightExtraLarge.args = {
  marginRight: 'xl',
}
