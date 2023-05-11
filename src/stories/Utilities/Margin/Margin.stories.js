import { createMargin } from './Margin.js'

export default {
  title: 'Utilities/Margin',
  render: ({ margin, ...args }) => {
    return createMargin({ margin, ...args })
  },
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
}

export const MarginNone = {
  args: {
    margin: 'none',
  },
}

export const MarginAuto = {
  args: {
    margin: 'auto',
  },
}

export const MarginExtraSmall = {
  args: {
    margin: 'xs',
  },
}

export const MarginSmall = {
  args: {
    margin: 'sm',
  },
}

export const MarginMedium = {
  args: {
    margin: 'md',
  },
}

export const MarginLarge = {
  args: {
    margin: 'lg',
  },
}

export const MarginExtraLarge = {
  args: {
    margin: 'xl',
  },
}

export const MarginYNone = {
  args: {
    marginY: 'none',
  },
}

export const MarginYExtraSmall = {
  args: {
    marginY: 'xs',
  },
}

export const MarginYSmall = {
  args: {
    marginY: 'sm',
  },
}

export const MarginYMedium = {
  args: {
    marginY: 'md',
  },
}

export const MarginYLarge = {
  args: {
    marginY: 'lg',
  },
}

export const MarginYExtraLarge = {
  args: {
    marginY: 'xl',
  },
}

export const MarginXNone = {
  args: {
    marginX: 'none',
  },
}

export const MarginXExtraSmall = {
  args: {
    marginX: 'xs',
  },
}

export const MarginXSmall = {
  args: {
    marginX: 'sm',
  },
}

export const MarginXMedium = {
  args: {
    marginX: 'md',
  },
}

export const MarginXLarge = {
  args: {
    marginX: 'lg',
  },
}

export const MarginXExtraLarge = {
  args: {
    marginX: 'xl',
  },
}

export const MarginTopNone = {
  args: {
    marginTop: 'none',
  },
}

export const MarginTopExtraSmall = {
  args: {
    marginTop: 'xs',
  },
}

export const MarginTopSmall = {
  args: {
    marginTop: 'sm',
  },
}

export const MarginTopMedium = {
  args: {
    marginTop: 'md',
  },
}

export const MarginTopLarge = {
  args: {
    marginTop: 'lg',
  },
}

export const MarginTopExtraLarge = {
  args: {
    marginTop: 'xl',
  },
}

export const MarginBottomNone = {
  args: {
    marginBottom: 'none',
  },
}

export const MarginBottomExtraSmall = {
  args: {
    marginBottom: 'xs',
  },
}

export const MarginBottomSmall = {
  args: {
    marginBottom: 'sm',
  },
}

export const MarginBottomMedium = {
  args: {
    marginBottom: 'md',
  },
}

export const MarginBottomLarge = {
  args: {
    marginBottom: 'lg',
  },
}

export const MarginBottomExtraLarge = {
  args: {
    marginBottom: 'xl',
  },
}

export const MarginLeftNone = {
  args: {
    marginLeft: 'none',
  },
}

export const MarginLeftExtraSmall = {
  args: {
    marginLeft: 'xs',
  },
}

export const MarginLeftSmall = {
  args: {
    marginLeft: 'sm',
  },
}

export const MarginLeftMedium = {
  args: {
    marginLeft: 'md',
  },
}

export const MarginLeftLarge = {
  args: {
    marginLeft: 'lg',
  },
}

export const MarginLeftExtraLarge = {
  args: {
    marginLeft: 'xl',
  },
}

export const MarginRightNone = {
  args: {
    marginRight: 'none',
  },
}

export const MarginRightExtraSmall = {
  args: {
    marginRight: 'xs',
  },
}

export const MarginRightSmall = {
  args: {
    marginRight: 'sm',
  },
}

export const MarginRightMedium = {
  args: {
    marginRight: 'md',
  },
}

export const MarginRightLarge = {
  args: {
    marginRight: 'lg',
  },
}

export const MarginRightExtraLarge = {
  args: {
    marginRight: 'xl',
  },
}
