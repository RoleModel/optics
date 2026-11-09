import type { Meta, StoryObj } from '@storybook/react-vite'

import { Form } from '@/registry/optics/ui/form'

const inputTypes = ['text', 'number', 'email', 'password', 'tel', 'date', 'file', 'color', 'checkbox', 'radio'] as const
const textTypes: readonly string[] = ['text', 'number', 'email', 'password', 'tel']

type FormType = (typeof inputTypes)[number] | 'textarea' | 'select'

interface FormArgs {
  label: string
  type: FormType
  size: 'small' | 'medium' | 'large'
  noBorder: boolean
  readOnly: boolean
  disabled: boolean
  indeterminate: boolean
  multiple: boolean
  inline: boolean
  error: string
  hint: string
}

const meta = {
  title: 'Components/Form',
  args: {
    label: 'A Label',
    type: 'text',
    size: 'large',
    noBorder: false,
    readOnly: false,
    disabled: false,
    indeterminate: false,
    multiple: false,
    inline: false,
    error: '',
    hint: '',
  },
  argTypes: {
    label: { control: 'text', description: 'Children of `Form.Label`' },
    type: {
      control: 'select',
      options: [...inputTypes, 'textarea', 'select'],
      description: '`type` of `Form.Control`, or `textarea` for `Form.Textarea` and `select` for `Form.Select`',
    },
    size: { control: 'select', options: ['small', 'medium', 'large'], description: '`size` on the control' },
    noBorder: { control: 'boolean', description: '`noBorder` on the control' },
    readOnly: { control: 'boolean', description: '`readOnly` on the control' },
    disabled: { control: 'boolean', description: '`disabled` on the control' },
    indeterminate: {
      control: 'boolean',
      if: { arg: 'type', eq: 'checkbox' },
      description: '`indeterminate` on a checkbox `Form.Control`',
    },
    multiple: { control: 'boolean', if: { arg: 'type', eq: 'select' }, description: '`multiple` on `Form.Select`' },
    inline: { control: 'boolean', description: '`inline` on `Form.Group`' },
    error: { control: 'text', description: 'Children of `Form.Error`. Also sets `error` on `Form.Group`' },
    hint: { control: 'text', description: 'Children of `Form.Hint`' },
  },
  render: ({ label, type, size, noBorder, readOnly, disabled, indeterminate, multiple, inline, error, hint }) => {
    const controlProps = {
      size,
      noBorder: noBorder || undefined,
      readOnly: readOnly || undefined,
      disabled: disabled || undefined,
    }
    const toggle = type === 'checkbox' || type === 'radio'
    const formLabel = <Form.Label>{label}</Form.Label>
    let control
    if (type === 'textarea') {
      control = <Form.Textarea {...controlProps} placeholder="Textarea" />
    } else if (type === 'select') {
      control = (
        <Form.Select {...controlProps} multiple={multiple || undefined}>
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </Form.Select>
      )
    } else {
      control = (
        <Form.Control
          {...controlProps}
          type={type}
          placeholder={textTypes.includes(type) ? type[0].toUpperCase() + type.slice(1) : undefined}
          indeterminate={(type === 'checkbox' && indeterminate) || undefined}
        />
      )
    }

    return (
      <Form.Group inline={inline || undefined} error={error ? true : undefined}>
        {toggle ? control : formLabel}
        {toggle ? formLabel : control}
        {error && <Form.Error>{error}</Form.Error>}
        {hint && <Form.Hint>{hint}</Form.Hint>}
      </Form.Group>
    )
  },
} satisfies Meta<FormArgs>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Label: Story = {
  render: ({ label }) => <Form.Label>{label}</Form.Label>,
}

export const Input: Story = {
  render: () => <Form.Control type="text" placeholder="Text" />,
}

export const Inline: Story = {
  args: { inline: true },
}

export const Textarea: Story = {
  args: { type: 'textarea' },
}

export const Dropdown: Story = {
  args: { type: 'select' },
}

export const Color: Story = {
  args: { type: 'color' },
}

export const Radio: Story = {
  args: { type: 'radio' },
}

export const Checkbox: Story = {
  args: { type: 'checkbox' },
}

export const ErrorSummary: Story = {
  render: () => (
    <Form.ErrorSummary>
      <h2>2 errors prohibited this from being saved</h2>
      <ul>
        <li>Tags rank is not a number</li>
        <li>Title can't be blank</li>
      </ul>
    </Form.ErrorSummary>
  ),
}

export const InputError: Story = {
  args: { error: "Can't be blank" },
}

export const InputHint: Story = {
  args: { hint: 'Very helpful hint' },
}

export const NoBorder: Story = {
  args: { noBorder: true },
}

export const Size: Story = {
  render: () => (
    <div className="op-stack gap-none">
      <Form.Group>
        <Form.Label>Small</Form.Label>
        <Form.Control size="small" placeholder="Text" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Medium</Form.Label>
        <Form.Control size="medium" placeholder="Text" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Large</Form.Label>
        <Form.Control size="large" placeholder="Text" />
      </Form.Group>
    </div>
  ),
}

export const ReadOnly: Story = {
  args: { readOnly: true },
}

export const IndeterminateCheckbox: Story = {
  args: { type: 'checkbox', indeterminate: true },
}
