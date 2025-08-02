import { createErrorSummary } from './Form.js'

export default {
  title: 'Components/Form/ErrorSummary',
  render: ({ label, ...args }) => {
    return createErrorSummary({ label, ...args })
  },
  argTypes: {
    label: { control: 'text' },
  },
}

export const Default = {
  args: {
    label: '2 errors prohibited this from being saved',
  },
}
