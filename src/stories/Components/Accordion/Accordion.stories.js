import { createAccordion } from './Accordion.js'
import { createButton } from '../Button/Button.js'

export default {
  title: 'Content Components/Accordion',
  render: ({ option1, ...args }) => {
    return createAccordion({ option1, ...args })
  },
  argTypes: {
    headerLabel: { control: 'text' },
    marker: { control: 'text' },
    additionalHeaderContent: { control: 'text' },
    flipHeaderAndMarker: { control: 'boolean' },
    disableAnimation: { control: 'boolean' },
    content: { control: 'text' },
  },
  parameters: {
    layout: 'padded',
  },
}

export const Default = {
  args: {},
}

export const FlipHeaderAndMarker = {
  args: {
    flipHeaderAndMarker: true,
  },
}

export const DisableAnimation = {
  args: {
    disableAnimation: true,
  },
}

export const AdditionalHeaderContent = {
  args: {
    additionalHeaderContent: createButton({ label: 'Button' }).outerHTML,
  },
}
