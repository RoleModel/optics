import type { ComponentPropsWithoutRef } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { flexUtilityVariants } from '@/registry/optics/lib/flex-utilities'

const gridVariants = cva('op-grid', {
  variants: {
    columns: {
      2: 'op-grid--2-column',
      3: 'op-grid--3-column',
      4: 'op-grid--4-column',
      5: 'op-grid--5-column',
      6: 'op-grid--6-column',
    },
    gap: flexUtilityVariants.gap,
  },
})

export interface GridProps extends ComponentPropsWithoutRef<'div'>, VariantProps<typeof gridVariants> {}

function Grid({ columns, gap, className, ...props }: GridProps) {
  const classes = gridVariants({ columns, gap, className })
  return <div data-slot="grid" className={classes} {...props} />
}

export { Grid, gridVariants }
