import type { Meta, StoryContext, StoryObj } from '@storybook/react-vite'

import { Alert, useAlertManager } from '@/registry/optics/ui/alert'
import { Button } from '@/registry/optics/ui/button'

interface AlertArgs {
  variant: 'warning' | 'danger' | 'info' | 'notice'
  tone: 'outlined' | 'muted' | 'filled'
  title: string
  description: string
  icon: string
  dismissible: boolean
}

const meta = {
  title: 'Components/Alert',
  parameters: { layout: 'padded' },
  args: {
    variant: 'warning',
    tone: 'outlined',
    title: 'Warning',
    description: 'This is a warning alert',
    icon: 'warning',
    dismissible: false,
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['warning', 'danger', 'info', 'notice'],
      description: '`variant` on `Alert.Root`',
    },
    tone: {
      control: 'select',
      options: ['outlined', 'muted', 'filled'],
      description: '`tone` on `Alert.Root`. `outlined` is the default',
    },
    title: { control: 'text', description: 'Children of `Alert.Title`. Leave empty to omit it' },
    description: { control: 'text', description: 'Children of `Alert.Description`' },
    icon: { control: 'text', description: '`name` of `Alert.Icon`, a Material Symbols icon. Leave empty to omit it' },
    dismissible: { control: 'boolean', description: 'Add an `Alert.Close` button after the messages' },
  },
  render: ({ variant, tone, title, description, icon, dismissible }) => (
    <Alert.Root variant={variant} tone={tone === 'outlined' ? undefined : tone}>
      {icon ? <Alert.Icon name={icon} /> : null}
      <Alert.Messages>
        {title ? <Alert.Title>{title}</Alert.Title> : null}
        <Alert.Description>{description}</Alert.Description>
      </Alert.Messages>
      {dismissible ? <Alert.Close /> : null}
    </Alert.Root>
  ),
} satisfies Meta<AlertArgs>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Danger: Story = {
  args: { variant: 'danger', title: 'Danger', description: 'This is a danger alert', icon: 'error' },
}

export const Info: Story = {
  args: { variant: 'info', title: 'Info', description: 'This is an info alert', icon: 'info' },
}

export const Notice: Story = {
  args: { variant: 'notice', title: 'Notice', description: 'This is a notice alert', icon: 'task_alt' },
}

export const Muted: Story = {
  args: { tone: 'muted', description: 'This is a muted warning alert' },
}

export const Filled: Story = {
  args: { tone: 'filled', description: 'This is a filled warning alert' },
}

export const NoIcon: Story = {
  args: { icon: '', description: 'This is a warning alert with no icon' },
}

export const NoTitle: Story = {
  args: { title: '', description: 'This is a warning alert with no title' },
}

export const Dismissible: Story = {
  args: { title: '', description: 'This is a warning alert with a close icon', dismissible: true },
}

// A flash needs a toast manager and a list of toasts, so the code panel shows the app wiring instead of the
// story's JSX, built from the current args.
const flashSource = ({ variant, tone, title, description, icon, dismissible }: AlertArgs) => {
  const toneProp = tone === 'outlined' ? '' : ` tone="${tone}"`
  const lines = [
    '// Render once, inside <Alert.FlashProvider>',
    'const { toasts } = useAlertManager()',
    '',
    '<Alert.FlashViewport>',
    '  {toasts.map((toast) => (',
    `    <Alert.Flash key={toast.id} toast={toast} variant="${variant}"${toneProp}>`,
    icon ? `      <Alert.Icon name="${icon}" />` : null,
    '      <Alert.Messages>',
    title ? '        <Alert.Title />' : null,
    '        <Alert.Description />',
    '      </Alert.Messages>',
    dismissible ? '      <Alert.Close />' : null,
    '    </Alert.Flash>',
    '  ))}',
    '</Alert.FlashViewport>',
    '',
    '// Show a flash from anywhere inside the provider',
    `useAlertManager().add({ ${title ? `title: '${title}', ` : ''}description: '${description}' })`,
  ]

  return lines.filter((line) => line !== null).join('\n')
}

export const Flash: Story = {
  args: { description: 'This is a warning flash' },
  decorators: [
    (Story) => (
      <Alert.FlashProvider>
        <Story />
      </Alert.FlashProvider>
    ),
  ],
  parameters: {
    docs: {
      source: { transform: (_code: string, { args }: StoryContext<AlertArgs>) => flashSource(args) },
    },
  },
  render: function FlashStory({ variant, tone, title, description, icon, dismissible }) {
    const alertManager = useAlertManager()

    return (
      <>
        <Button onClick={() => alertManager.add({ title: title || undefined, description })}>Show flash</Button>
        <Alert.FlashViewport>
          {alertManager.toasts.map((toast) => (
            <Alert.Flash key={toast.id} toast={toast} variant={variant} tone={tone === 'outlined' ? undefined : tone}>
              {icon ? <Alert.Icon name={icon} /> : null}
              <Alert.Messages>
                {toast.title ? <Alert.Title /> : null}
                <Alert.Description />
              </Alert.Messages>
              {dismissible ? <Alert.Close /> : null}
            </Alert.Flash>
          ))}
        </Alert.FlashViewport>
      </>
    )
  },
}
