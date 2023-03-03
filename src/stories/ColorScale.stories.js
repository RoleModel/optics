import { createColorSwatch } from './ColorScale/ColorScale.js'
import ColorScaleDocs from './ColorScale/ColorScale.mdx'
import { steps, scales } from './helpers/utils.js'

export default {
  title: 'Tokens/Color Scale',
  argTypes: {
    scale: {
      control: { type: 'select' },
      options: scales,
    },
    step: {
      control: { type: 'select' },
      options: steps,
    },
  },
  parameters: {
    docs: {
      page: ColorScaleDocs,
    },
  },
}

const Template = ({ scale, ...args }) => {
  return createColorSwatch({ scale, ...args })
}

export const Primary = Template.bind({})
Primary.args = {
  scale: 'primary',
  step: 'base',
}

export const Neutral = Template.bind({})
Neutral.args = {
  scale: 'neutral',
  step: 'base',
}

export const Warning = Template.bind({})
Warning.args = {
  scale: 'warning',
  step: 'base',
}

export const Danger = Template.bind({})
Danger.args = {
  scale: 'danger',
  step: 'base',
}

export const Info = Template.bind({})
Info.args = {
  scale: 'info',
  step: 'base',
}

export const Notice = Template.bind({})
Notice.args = {
  scale: 'notice',
  step: 'base',
}
