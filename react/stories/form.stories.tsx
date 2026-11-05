import type { Meta, StoryObj } from '@storybook/react-vite'

import { Form } from '@/registry/optics/ui/form'

const meta = {
  title: 'Components/Form',
  component: Form.Group,
  tags: ['autodocs'],
} satisfies Meta<typeof Form.Group>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Form.Group>
      <Form.Label>Name</Form.Label>
      <Form.Control placeholder="Jane Doe" />
      <Form.Hint>As it should appear on your profile.</Form.Hint>
    </Form.Group>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="op-stack gap-md">
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

export const Inline: Story = {
  render: () => (
    <Form.Group inline>
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="you@example.com" />
    </Form.Group>
  ),
}

export const Textarea: Story = {
  render: () => (
    <Form.Group>
      <Form.Label>Bio</Form.Label>
      <Form.Textarea placeholder="Tell us about yourself" />
    </Form.Group>
  ),
}

export const Select: Story = {
  render: () => (
    <Form.Group>
      <Form.Label>Favorite planet</Form.Label>
      <Form.Select defaultValue="earth">
        <option value="mercury">Mercury</option>
        <option value="venus">Venus</option>
        <option value="earth">Earth</option>
        <option value="mars">Mars</option>
      </Form.Select>
    </Form.Group>
  ),
}

export const CheckboxAndRadio: Story = {
  render: () => (
    <div className="op-stack gap-xxs">
      <Form.Group>
        <Form.Control type="checkbox" defaultChecked />
        <Form.Label>Subscribe to updates</Form.Label>
      </Form.Group>
      <Form.Group>
        <Form.Control type="radio" name="form-plan" value="monthly" defaultChecked />
        <Form.Label>Monthly plan</Form.Label>
      </Form.Group>
      <Form.Group>
        <Form.Control type="radio" name="form-plan" value="annual" />
        <Form.Label>Annual plan</Form.Label>
      </Form.Group>
    </div>
  ),
}

export const WithError: Story = {
  render: () => (
    <Form.Group error>
      <Form.Label>Title</Form.Label>
      <Form.Control defaultValue="" />
      <Form.Error>Can't be blank</Form.Error>
    </Form.Group>
  ),
}

export const NoBorder: Story = {
  render: () => (
    <Form.Group>
      <Form.Label>Notes</Form.Label>
      <Form.Control noBorder placeholder="Text" />
    </Form.Group>
  ),
}

export const DisabledAndReadOnly: Story = {
  render: () => (
    <div className="op-stack gap-md">
      <Form.Group>
        <Form.Label>Disabled</Form.Label>
        <Form.Control disabled placeholder="Text" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Read-only</Form.Label>
        <Form.Control readOnly defaultValue="Read-only value" />
      </Form.Group>
    </div>
  ),
}

export const ErrorSummary: Story = {
  render: () => (
    <Form.ErrorSummary>
      <h2>2 errors prohibited this from being saved</h2>
      <ul>
        <li>Rank is not a number</li>
        <li>Title can't be blank</li>
      </ul>
    </Form.ErrorSummary>
  ),
}
