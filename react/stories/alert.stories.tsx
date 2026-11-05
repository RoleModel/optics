import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Alert, useAlertManager } from '@/registry/optics/ui/alert'
import { Button } from '@/registry/optics/ui/button'

const meta = {
  title: 'Components/Alert',
  component: Alert.Root,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
} satisfies Meta<typeof Alert.Root>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Alert.Root variant="info">
      <Alert.Icon name="info" />
      <Alert.Messages>
        <Alert.Title>Heads up</Alert.Title>
        <Alert.Description>Your changes will be published at midnight.</Alert.Description>
      </Alert.Messages>
    </Alert.Root>
  ),
}

export const Variants: Story = {
  render: () => (
    <div className="op-stack gap-md">
      <Alert.Root variant="warning">
        <Alert.Icon name="warning" />
        <Alert.Messages>
          <Alert.Title>Warning</Alert.Title>
          <Alert.Description>Double-check this before continuing.</Alert.Description>
        </Alert.Messages>
      </Alert.Root>
      <Alert.Root variant="danger">
        <Alert.Icon name="error" />
        <Alert.Messages>
          <Alert.Title>Danger</Alert.Title>
          <Alert.Description>Something went wrong.</Alert.Description>
        </Alert.Messages>
      </Alert.Root>
      <Alert.Root variant="info">
        <Alert.Icon name="info" />
        <Alert.Messages>
          <Alert.Title>Info</Alert.Title>
          <Alert.Description>Here's something worth knowing.</Alert.Description>
        </Alert.Messages>
      </Alert.Root>
      <Alert.Root variant="notice">
        <Alert.Icon name="check_circle" />
        <Alert.Messages>
          <Alert.Title>Notice</Alert.Title>
          <Alert.Description>Your profile was saved.</Alert.Description>
        </Alert.Messages>
      </Alert.Root>
    </div>
  ),
}

export const Tones: Story = {
  render: () => (
    <div className="op-stack gap-md">
      <Alert.Root variant="info" tone="outlined">
        <Alert.Icon name="info" />
        <Alert.Messages>
          <Alert.Title>Outlined</Alert.Title>
          <Alert.Description>The default tone.</Alert.Description>
        </Alert.Messages>
      </Alert.Root>
      <Alert.Root variant="info" tone="muted">
        <Alert.Icon name="info" />
        <Alert.Messages>
          <Alert.Title>Muted</Alert.Title>
          <Alert.Description>A softer background, no border.</Alert.Description>
        </Alert.Messages>
      </Alert.Root>
      <Alert.Root variant="info" tone="filled">
        <Alert.Icon name="info" />
        <Alert.Messages>
          <Alert.Title>Filled</Alert.Title>
          <Alert.Description>A solid background.</Alert.Description>
        </Alert.Messages>
      </Alert.Root>
    </div>
  ),
}

function DismissibleAlert() {
  const [dismissed, setDismissed] = useState(false)

  if (dismissed) return <Button onClick={() => setDismissed(false)}>Show alert again</Button>

  return (
    <Alert.Root variant="notice">
      <Alert.Icon name="check_circle" />
      <Alert.Messages>
        <Alert.Title>Dismissible</Alert.Title>
        <Alert.Description>Click the close button to dismiss this alert.</Alert.Description>
      </Alert.Messages>
      <Alert.Close onClick={() => setDismissed(true)} />
    </Alert.Root>
  )
}

export const Dismissible: Story = {
  render: () => <DismissibleAlert />,
}

type FlashVariant = 'warning' | 'danger' | 'info' | 'notice'

const flashIcons: Record<FlashVariant, string> = {
  warning: 'warning',
  danger: 'error',
  info: 'info',
  notice: 'check_circle',
}

function FlashTriggers() {
  const alertManager = useAlertManager()

  const showFlash = (variant: FlashVariant, timeout?: number) =>
    alertManager.add({
      title: variant[0].toUpperCase() + variant.slice(1),
      description: timeout === 0 ? 'This flash stays until you close it.' : `This is a ${variant} flash message.`,
      timeout,
      data: { variant },
    })

  return (
    <div className="op-cluster gap-sm">
      <Button variant="warning" onClick={() => showFlash('warning')}>
        Warning
      </Button>
      <Button variant="destructive" onClick={() => showFlash('danger')}>
        Danger
      </Button>
      <Button onClick={() => showFlash('info')}>Info</Button>
      <Button onClick={() => showFlash('notice')}>Notice</Button>
      <Button onClick={() => showFlash('info', 0)}>Persistent</Button>
    </div>
  )
}

function FlashList() {
  const { toasts } = useAlertManager()

  return toasts.map((toast) => {
    const variant = (toast.data as { variant: FlashVariant }).variant

    return (
      <Alert.Flash key={toast.id} toast={toast} variant={variant}>
        <Alert.Icon name={flashIcons[variant]} />
        <Alert.Messages>
          <Alert.Title />
          <Alert.Description />
        </Alert.Messages>
        {toast.timeout === 0 && <Alert.Close />}
      </Alert.Flash>
    )
  })
}

export const Flash: Story = {
  render: () => (
    <Alert.FlashProvider>
      <FlashTriggers />
      <Alert.FlashViewport>
        <FlashList />
      </Alert.FlashViewport>
    </Alert.FlashProvider>
  ),
}
