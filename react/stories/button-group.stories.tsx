import type { Meta, StoryObj } from '@storybook/react-vite'

import { Button } from '@/registry/optics/ui/button'
import { ButtonGroup } from '@/registry/optics/ui/button-group'
import { Icon } from '@/registry/optics/ui/icon'

interface ButtonGroupArgs {
  variant: 'default' | 'primary' | 'destructive' | 'warning'
  size?: 'small' | 'medium' | 'large'
  active: boolean
  borderless: boolean
  pill: boolean
  disabled: boolean
  segmentedPreview: boolean
}

const meta = {
  title: 'Components/Button Group',
  args: {
    variant: 'default',
    active: false,
    borderless: false,
    pill: false,
    disabled: false,
    segmentedPreview: false,
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'primary', 'destructive', 'warning'],
      description: '`variant` on each `Button`',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: '`size` on each `Button`. Large when unset',
    },
    active: { control: 'boolean', description: '`active` on each `Button`' },
    borderless: { control: 'boolean', description: '`borderless` on each `Button`' },
    pill: { control: 'boolean', description: '`shape="pill"` on each `Button`' },
    disabled: { control: 'boolean', description: '`disabled` on each `Button`' },
    segmentedPreview: {
      control: 'boolean',
      description: 'Not a prop. Sets `active` on the middle `Button` only, like a segmented control',
    },
  },
  render: ({ variant, size, active, borderless, pill, disabled, segmentedPreview }) => {
    const buttonProps = {
      variant: variant === 'default' ? undefined : variant,
      size,
      shape: pill ? ('pill' as const) : undefined,
      active: active || undefined,
      borderless: borderless || undefined,
      disabled: disabled || undefined,
    }

    return (
      <ButtonGroup>
        <Button {...buttonProps}>Left</Button>
        <Button {...buttonProps} active={active || segmentedPreview || undefined}>
          Middle
        </Button>
        <Button {...buttonProps}>Right</Button>
      </ButtonGroup>
    )
  },
} satisfies Meta<ButtonGroupArgs>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Toolbar: Story = {
  render: () => (
    <div className="btn-group-toolbar gap-xs">
      <ButtonGroup>
        <Button aria-label="Bold">
          <Icon name="format_bold" />
        </Button>
        <Button aria-label="Italic">
          <Icon name="format_italic" />
        </Button>
        <Button aria-label="Strikethrough">
          <Icon name="format_strikethrough" />
        </Button>
        <Button aria-label="Underline">
          <Icon name="format_underlined" />
        </Button>
        <Button aria-label="Link">
          <Icon name="link" />
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button aria-label="Text style">
          <Icon name="text_fields" />
        </Button>
        <Button aria-label="Quote">
          <Icon name="format_quote" />
        </Button>
        <Button aria-label="Code">
          <Icon name="code" />
        </Button>
        <Button aria-label="Bulleted list">
          <Icon name="format_list_bulleted" />
        </Button>
        <Button aria-label="Numbered list">
          <Icon name="format_list_numbered" />
        </Button>
        <Button aria-label="Align left">
          <Icon name="format_align_left" />
        </Button>
        <Button aria-label="Align center">
          <Icon name="format_align_center" />
        </Button>
        <Button aria-label="Align right">
          <Icon name="format_align_right" />
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button aria-label="Attach">
          <Icon name="attachment" />
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button aria-label="Undo">
          <Icon name="undo" />
        </Button>
        <Button aria-label="Redo">
          <Icon name="redo" />
        </Button>
      </ButtonGroup>
    </div>
  ),
}

export const Primary: Story = {
  args: { variant: 'primary' },
}

export const Destructive: Story = {
  args: { variant: 'destructive' },
}

export const Warning: Story = {
  args: { variant: 'warning' },
}

export const Active: Story = {
  args: { variant: 'destructive', active: true },
}

export const NoBorder: Story = {
  args: { variant: 'primary', borderless: true },
}

export const Disabled: Story = {
  args: { variant: 'primary', disabled: true },
}

export const Pill: Story = {
  args: { pill: true },
}

export const Size: Story = {
  args: { variant: 'primary', size: 'small' },
}
