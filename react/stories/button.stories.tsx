import type { Meta, StoryObj } from '@storybook/react-vite'

import { Badge } from '@/registry/optics/ui/badge'
import { Button } from '@/registry/optics/ui/button'
import { Icon } from '@/registry/optics/ui/icon'

interface ButtonArgs {
  label: string
  variant: 'default' | 'primary' | 'destructive' | 'warning'
  size?: 'small' | 'medium' | 'large'
  shape?: 'pill' | 'circle' | 'square'
  active: boolean
  borderless: boolean
  iconWithLabel: boolean
  withBadge: boolean
  disabled: boolean
  asLink: boolean
  showPrefixIcon: boolean
  showSuffixIcon: boolean
}

const meta = {
  title: 'Components/Button',
  args: {
    label: 'Default',
    variant: 'default',
    active: false,
    borderless: false,
    iconWithLabel: false,
    withBadge: false,
    disabled: false,
    asLink: false,
    showPrefixIcon: false,
    showSuffixIcon: false,
  },
  argTypes: {
    label: { control: 'text', description: 'Text of the `Button`, or its `aria-label` for an icon button' },
    variant: {
      control: 'select',
      options: ['default', 'primary', 'destructive', 'warning'],
      description: '`variant` on `Button`',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: '`size` on `Button`. Large when unset',
    },
    shape: {
      control: 'select',
      options: ['pill', 'circle', 'square'],
      description: '`shape` on `Button`. `circle` and `square` show an icon in place of the label',
    },
    active: { control: 'boolean', description: '`active` on `Button`' },
    borderless: { control: 'boolean', description: '`borderless` on `Button`' },
    iconWithLabel: { control: 'boolean', description: '`iconWithLabel` on `Button`, with an `Icon` above the label' },
    withBadge: { control: 'boolean', description: '`withBadge` on `Button`, with a notification `Badge` inside' },
    disabled: { control: 'boolean', description: '`disabled` on `Button`' },
    asLink: { control: 'boolean', description: 'Render an `a` with `render` and `nativeButton={false}`' },
    showPrefixIcon: { control: 'boolean', description: 'Not a prop. Shows an `Icon` before the label' },
    showSuffixIcon: { control: 'boolean', description: 'Not a prop. Shows an `Icon` after the label' },
  },
  render: ({
    label,
    variant,
    size,
    shape,
    active,
    borderless,
    iconWithLabel,
    withBadge,
    disabled,
    asLink,
    showPrefixIcon,
    showSuffixIcon,
  }) => {
    const iconOnly = shape === 'circle' || shape === 'square'

    return (
      <Button
        variant={variant === 'default' ? undefined : variant}
        size={size}
        shape={shape}
        active={active || undefined}
        borderless={borderless || undefined}
        iconWithLabel={iconWithLabel || undefined}
        withBadge={withBadge || undefined}
        disabled={disabled || undefined}
        nativeButton={asLink ? false : undefined}
        render={asLink ? <a href="#" /> : undefined}
        aria-label={iconOnly ? label : undefined}
      >
        {showPrefixIcon ? <Icon name="open_in_new" /> : null}
        {iconWithLabel || iconOnly ? <Icon name="add" size={iconWithLabel ? 'large' : undefined} /> : null}
        {iconOnly ? null : label}
        {showSuffixIcon ? <Icon name="add" /> : null}
        {withBadge ? (
          <Badge variant="danger" pill notification="right">
            5
          </Badge>
        ) : null}
      </Button>
    )
  },
} satisfies Meta<ButtonArgs>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Primary: Story = {
  args: { label: 'Primary', variant: 'primary' },
}

export const Destructive: Story = {
  args: { label: 'Delete', variant: 'destructive' },
}

export const Warning: Story = {
  args: { label: 'Warning', variant: 'warning' },
}

export const Active: Story = {
  args: { label: 'Active', variant: 'primary', active: true },
}

export const NoBorder: Story = {
  args: { label: 'No Border', variant: 'primary', borderless: true },
}

export const Disabled: Story = {
  args: { label: 'Disabled', variant: 'primary', disabled: true },
}

export const Pill: Story = {
  args: { label: 'Pill', shape: 'pill' },
}

export const IconButton: Story = {
  name: 'Icon',
  args: { label: 'Add', variant: 'primary', shape: 'square' },
}

export const IconWithLabel: Story = {
  args: { label: 'Label', variant: 'primary', iconWithLabel: true },
}

export const Size: Story = {
  args: { label: 'Small', variant: 'primary', size: 'small' },
}

export const WithBadge: Story = {
  args: { label: 'Notifications', variant: 'primary', withBadge: true },
}

export const AsLink: Story = {
  args: { label: 'Link', asLink: true },
}
