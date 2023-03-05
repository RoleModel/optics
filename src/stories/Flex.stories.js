import { createFlex } from './Flex/Flex.js'
import FlexDocs from './Flex/Flex.mdx'

export default {
  title: 'Utilities/Flex',
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
    docs: {
      page: FlexDocs,
    },
  },
}

const Template = ({ flex, ...args }) => {
  return createFlex({ flex, ...args })
}

export const With = Template.bind({})
With.args = {
  flex: true,
}

export const Without = Template.bind({})
Without.args = {
  flex: false,
}

export const FlexRow = Template.bind({})
FlexRow.args = {
  flexDirection: 'row',
}

export const FlexCol = Template.bind({})
FlexCol.args = {
  flexDirection: 'col',
}

export const FlexWrap = Template.bind({})
FlexWrap.args = {
  flexWrap: 'wrap',
}

export const FlexNoWrap = Template.bind({})
FlexNoWrap.args = {
  flexWrap: 'no-wrap',
}

export const FlexGrowOne = Template.bind({})
FlexGrowOne.args = {
  flexGrowOne: true,
}

export const JustifyStart = Template.bind({})
JustifyStart.args = {
  justifyContent: 'start',
}

export const JustifyCenter = Template.bind({})
JustifyCenter.args = {
  justifyContent: 'center',
}

export const JustifyEnd = Template.bind({})
JustifyEnd.args = {
  justifyContent: 'end',
}

export const JustifyBetween = Template.bind({})
JustifyBetween.args = {
  justifyContent: 'between',
}

export const JustifyAround = Template.bind({})
JustifyAround.args = {
  justifyContent: 'around',
}

export const AlignStretch = Template.bind({})
AlignStretch.args = {
  alignItems: 'stretch',
}

export const AlignStart = Template.bind({})
AlignStart.args = {
  alignItems: 'start',
}

export const AlignCenter = Template.bind({})
AlignCenter.args = {
  alignItems: 'center',
}

export const AlignEnd = Template.bind({})
AlignEnd.args = {
  alignItems: 'end',
}

export const AlignBaseline = Template.bind({})
AlignBaseline.args = {
  alignItems: 'baseline',
}

export const AlignSelfAuto = Template.bind({})
AlignSelfAuto.args = {
  alignSelf: 'auto',
}

export const AlignSelfStretch = Template.bind({})
AlignSelfStretch.args = {
  alignItems: 'center',
  alignSelf: 'stretch',
}

export const AlignSelfStart = Template.bind({})
AlignSelfStart.args = {
  alignSelf: 'start',
}

export const AlignSelfCenter = Template.bind({})
AlignSelfCenter.args = {
  alignSelf: 'center',
}

export const AlignSelfEnd = Template.bind({})
AlignSelfEnd.args = {
  alignSelf: 'end',
}

export const AlignSelfBaseline = Template.bind({})
AlignSelfBaseline.args = {
  alignSelf: 'baseline',
}
