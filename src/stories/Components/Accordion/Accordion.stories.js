import { createAccordion } from './Accordion.js'

export default {
  title: 'Components/Accordion',
  render: ({ option1, ...args }) => {
    return createAccordion({ option1, ...args })
  },
  argTypes: {
    icon: { control: 'text' },
    headerLabel: { control: 'text' },
    labelBeforeIcon: { control: 'boolean' },
    content: { control: 'text' },
  },
  parameters: {
    layout: 'padded',
  },
}

export const Default = {
  args: {},
}

export const LabelBeforeIcon = {
  args: {
    labelBeforeIcon: true,
  },
}
