import { createItemWidth } from './ItemWidth/ItemWidth.js'
import ItemWidthDocs from './ItemWidth/ItemWidth.mdx'

export default {
  title: 'Utilities/Item Width',
  argTypes: {
    width: {
      control: { type: 'select' },
      options: [
        'half',
        'full',
        'one-fifth',
        'two-fifths',
        'three-fifths',
        'four-fifths',
        'one-quarter',
        'three-quarters',
        'one-third',
        'two-thirds',
      ],
    },
  },
  parameters: {
    docs: {
      page: ItemWidthDocs,
    },
  },
}

const Template = ({ width, ...args }) => {
  return createItemWidth({ width, ...args })
}

export const Half = Template.bind({})
Half.args = {
  width: 'half',
}

export const Full = Template.bind({})
Full.args = {
  width: 'full',
}

export const OneFifth = Template.bind({})
OneFifth.args = {
  width: 'one-fifth',
}

export const TwoFifths = Template.bind({})
TwoFifths.args = {
  width: 'two-fifths',
}

export const ThreeFifths = Template.bind({})
ThreeFifths.args = {
  width: 'three-fifths',
}

export const FourFifths = Template.bind({})
FourFifths.args = {
  width: 'four-fifths',
}

export const OneQuarter = Template.bind({})
OneQuarter.args = {
  width: 'one-quarter',
}

export const ThreeQuarters = Template.bind({})
ThreeQuarters.args = {
  width: 'three-quarters',
}

export const OneThird = Template.bind({})
OneThird.args = {
  width: 'one-third',
}

export const TwoThirds = Template.bind({})
TwoThirds.args = {
  width: 'two-thirds',
}
