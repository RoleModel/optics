import type { ComponentPropsWithoutRef } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

const badgeVariants = cva('badge', {
  variants: {
    variant: {
      primary: 'badge--primary',
      warning: 'badge--warning',
      danger: 'badge--danger',
      info: 'badge--info',
      notice: 'badge--notice',
    },
    pill: { false: null, true: 'badge--pill' },
    notification: {
      left: 'badge--notification-left',
      right: 'badge--notification-right',
    },
  },
})

export interface BadgeProps extends ComponentPropsWithoutRef<'span'>, VariantProps<typeof badgeVariants> {}

function Badge({ variant, pill, notification, className, ...props }: BadgeProps) {
  const classes = badgeVariants({ variant, pill, notification, className })

  return <span data-slot="badge" className={classes} {...props} />
}

export { Badge, badgeVariants }
