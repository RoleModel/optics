// Optics version: 2.6.1
import { Button as ButtonPrimitive } from '@base-ui/react/button'
import { cva, type VariantProps } from 'class-variance-authority'

const buttonVariants = cva('btn', {
  variants: {
    variant: {
      primary: 'btn--primary',
      destructive: 'btn--destructive',
      warning: 'btn--warning',
    },
    size: {
      small: 'btn--small',
      medium: 'btn--medium',
      large: 'btn--large',
    },
    shape: {
      pill: 'btn--pill',
      circle: 'btn--pill btn--icon',
      square: 'btn--icon',
    },
    active: { true: 'btn--active' },
    borderless: { true: 'btn--no-border' },
    iconWithLabel: { true: 'btn--icon-with-label' },
    withBadge: { true: 'btn--with-badge' },
    disabled: { true: 'btn--disabled' },
  },
})

export type ButtonProps = Omit<ButtonPrimitive.Props, 'className'> &
  VariantProps<typeof buttonVariants> & { className?: string }

// Pass `render={<a href="..." />}` with `nativeButton={false}` to render a link that looks like a button.
function Button({
  variant,
  size,
  shape,
  active,
  borderless,
  iconWithLabel,
  withBadge,
  disabled,
  className,
  ...props
}: ButtonProps) {
  const classes = buttonVariants({
    variant,
    size,
    shape,
    active,
    borderless,
    iconWithLabel,
    withBadge,
    disabled,
    className,
  })

  return <ButtonPrimitive data-slot="button" className={classes} disabled={disabled ?? undefined} {...props} />
}

export { Button, buttonVariants }
