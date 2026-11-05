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
    active: { false: null, true: 'btn--active' },
    borderless: { false: null, true: 'btn--no-border' },
    iconWithLabel: { false: null, true: 'btn--icon-with-label' },
    withBadge: { false: null, true: 'btn--with-badge' },
    disabled: { false: null, true: 'btn--disabled' },
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
