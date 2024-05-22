import { createFlex } from './Flex.js'

export default {
  title: 'Utilities/Flex',
  render: ({ flex, ...args }) => {
    return createFlex({ flex, ...args })
  },
  argTypes: {
    flex: { control: 'boolean' },
    flexDirection: {
      control: { type: 'select' },
      options: ['row', 'col'],
    },
    flexWrap: {
      control: { type: 'select' },
      options: ['no-wrap', 'wrap'],
    },
    flexGrowOne: { control: 'boolean' },
    justifyContent: {
      control: { type: 'select' },
      options: ['start', 'center', 'end', 'between', 'around'],
    },
    alignItems: {
      control: { type: 'select' },
      options: ['stretch', 'start', 'center', 'end', 'baseline'],
    },
    alignSelf: {
      control: { type: 'select' },
      options: ['auto', 'stretch', 'start', 'center', 'end', 'baseline'],
    },
  },
  parameters: {
    layout: 'fullscreen',
  },
}

export const With = {
  args: {
    flex: true,
  },
}

export const Without = {
  args: {
    flex: false,
  },
}

export const FlexRow = {
  args: {
    flexDirection: 'row',
  },
}

export const FlexCol = {
  args: {
    flexDirection: 'col',
  },
}

export const FlexWrap = {
  args: {
    flexWrap: 'wrap',
  },
}

export const FlexNoWrap = {
  args: {
    flexWrap: 'no-wrap',
  },
}

export const FlexGrowOne = {
  args: {
    flexGrowOne: true,
  },
}

export const JustifyStart = {
  args: {
    justifyContent: 'start',
  },
}

export const JustifyCenter = {
  args: {
    justifyContent: 'center',
  },
}

export const JustifyEnd = {
  args: {
    justifyContent: 'end',
  },
}

export const JustifyBetween = {
  args: {
    justifyContent: 'between',
  },
}

export const JustifyAround = {
  args: {
    justifyContent: 'around',
  },
}

export const AlignStretch = {
  args: {
    alignItems: 'stretch',
  },
}

export const AlignStart = {
  args: {
    alignItems: 'start',
  },
}

export const AlignCenter = {
  args: {
    alignItems: 'center',
  },
}

export const AlignEnd = {
  args: {
    alignItems: 'end',
  },
}

export const AlignBaseline = {
  args: {
    alignItems: 'baseline',
  },
}

export const AlignSelfAuto = {
  args: {
    alignSelf: 'auto',
  },
}

export const AlignSelfStretch = {
  args: {
    alignItems: 'center',
    alignSelf: 'stretch',
  },
}

export const AlignSelfStart = {
  args: {
    alignSelf: 'start',
  },
}

export const AlignSelfCenter = {
  args: {
    alignSelf: 'center',
  },
}

export const AlignSelfEnd = {
  args: {
    alignSelf: 'end',
  },
}

export const AlignSelfBaseline = {
  args: {
    alignSelf: 'baseline',
  },
}
