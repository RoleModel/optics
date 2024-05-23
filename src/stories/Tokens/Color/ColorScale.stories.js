import { createColorSwatch } from './ColorScale.js'
import { steps, scales } from '../../helpers/utils.js'

export default {
  title: 'Tokens/Color/Color Scale',
  render: ({ scale, ...args }) => {
    return createColorSwatch({ scale, ...args })
  },
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
}

export const Primary = {
  args: {
    scale: 'primary',
    step: 'base',
  },
}

export const Neutral = {
  args: {
    scale: 'neutral',
    step: 'base',
  },
}

export const Warning = {
  args: {
    scale: 'warning',
    step: 'base',
  },
}

export const Danger = {
  args: {
    scale: 'danger',
    step: 'base',
  },
}

export const Info = {
  args: {
    scale: 'info',
    step: 'base',
  },
}

export const Notice = {
  args: {
    scale: 'notice',
    step: 'base',
  },
}
