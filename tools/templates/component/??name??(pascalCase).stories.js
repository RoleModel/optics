import { create??name??(pascalCase) } from './??name??(pascalCase).js'

export default {
  title: 'Components/??name??(pascalCase)',
  render: ({ option1, ...args }) => {
    return create??name??(pascalCase)({ option1, ...args })
  },
  argTypes: {
    option1: { control: 'text' },
    option2: { control: 'boolean' },
    option3: {
      control: { type: 'select' },
      options: ['first', 'second', 'third'],
    },
  },
}

export const Default = {
  args: {
    option1: 'Default',
    option2: false,
    option3: 'first',
  },
}

export const Alternate = {
  args: {
    option1: 'Alternate',
    option2: true,
    option3: 'second',
  },
}
