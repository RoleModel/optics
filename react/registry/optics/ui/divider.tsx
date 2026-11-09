// Optics version: 2.6.1
import type { ComponentPropsWithoutRef } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

const dividerVariants = cva('divider', {
  variants: {
    vertical: { true: 'divider--vertical' },
    size: {
      small: 'divider--small',
      medium: 'divider--medium',
      large: 'divider--large',
    },
    spacing: {
      small: 'divider--spacing-small',
      medium: 'divider--spacing-medium',
      large: 'divider--spacing-large',
    },
  },
})

export interface DividerProps
  extends Omit<ComponentPropsWithoutRef<'div'>, 'children'>, VariantProps<typeof dividerVariants> {}

function Divider({ vertical, size, spacing, className, ...props }: DividerProps) {
  const classes = dividerVariants({ vertical, size, spacing, className })

  return (
    <div
      data-slot="divider"
      className={classes}
      role="separator"
      aria-orientation={vertical ? 'vertical' : undefined}
      {...props}
    />
  )
}

export { Divider, dividerVariants }
