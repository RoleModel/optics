import type { Meta, StoryObj } from '@storybook/react-vite'

import { Accordion } from '@/registry/optics/ui/accordion'
import { Button } from '@/registry/optics/ui/button'

interface AccordionArgs {
  label: string
  marker: string
  content: string
  swapLabelAndMarker: boolean
  disableAnimation: boolean
  additionalHeaderContent: boolean
}

const meta = {
  title: 'Components/Accordion',
  parameters: { layout: 'padded' },
  args: {
    label: 'Header Label',
    marker: 'arrow_right',
    content: 'Something small enough to escape casual notice.',
    swapLabelAndMarker: false,
    disableAnimation: false,
    additionalHeaderContent: false,
  },
  argTypes: {
    label: { control: 'text', description: 'Text of `Accordion.Label`' },
    marker: { control: 'text', description: '`name` of `Accordion.Marker`, a Material Symbols icon' },
    content: { control: 'text', description: 'Children of `Accordion.Content`' },
    swapLabelAndMarker: { control: 'boolean', description: 'Put the marker after the label' },
    disableAnimation: { control: 'boolean', description: '`disableAnimation` on `Accordion.Item` or `Accordion.Root`' },
    additionalHeaderContent: { control: 'boolean', description: 'Add a button to `Accordion.Trigger`' },
  },
  render: ({ label, marker, content, swapLabelAndMarker, disableAnimation, additionalHeaderContent }) => {
    const markerIcon = <Accordion.Marker name={marker === 'arrow_right' ? undefined : marker} />
    const labelText = <Accordion.Label>{label}</Accordion.Label>

    return (
      <Accordion.Item disableAnimation={disableAnimation || undefined}>
        <Accordion.Trigger>
          {swapLabelAndMarker ? labelText : markerIcon}
          {swapLabelAndMarker ? markerIcon : labelText}
          {additionalHeaderContent && <Button size="small">Button</Button>}
        </Accordion.Trigger>
        <Accordion.Content>{content}</Accordion.Content>
      </Accordion.Item>
    )
  },
} satisfies Meta<AccordionArgs>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const SwapLabelAndMarker: Story = {
  args: { swapLabelAndMarker: true },
}

export const DisableAnimation: Story = {
  args: { disableAnimation: true },
}

export const AdditionalHeaderContent: Story = {
  args: { additionalHeaderContent: true },
}

export const Exclusive: Story = {
  render: () => (
    <Accordion.Root name="faq">
      <Accordion.Item>
        <Accordion.Trigger>
          <Accordion.Marker />
          <Accordion.Label>First</Accordion.Label>
        </Accordion.Trigger>
        <Accordion.Content>Opening another item closes this one.</Accordion.Content>
      </Accordion.Item>
      <Accordion.Item>
        <Accordion.Trigger>
          <Accordion.Marker />
          <Accordion.Label>Second</Accordion.Label>
        </Accordion.Trigger>
        <Accordion.Content>Items that share a name act as one group.</Accordion.Content>
      </Accordion.Item>
      <Accordion.Item>
        <Accordion.Trigger>
          <Accordion.Marker />
          <Accordion.Label>Third</Accordion.Label>
        </Accordion.Trigger>
        <Accordion.Content>Only one item is open at a time.</Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  ),
}
