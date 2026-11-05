import type { ComponentPropsWithoutRef } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

const spinnerVariants = cva('spinner', {
  variants: {
    size: {
      'x-small': 'spinner--x-small',
      small: 'spinner--small',
      medium: 'spinner--medium',
      large: 'spinner--large',
    },
  },
})

export interface SpinnerProps
  extends Omit<ComponentPropsWithoutRef<'div'>, 'children'>, VariantProps<typeof spinnerVariants> {
  label?: string
}

function Spinner({ size, label = 'Loading', className, ...props }: SpinnerProps) {
  const classes = spinnerVariants({ size, className })

  return (
    <div data-slot="spinner" className={classes} role="status" {...props}>
      <span className="sr-only">{label}</span>
    </div>
  )
}

export { Spinner, spinnerVariants }
