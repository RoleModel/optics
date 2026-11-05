import type { ComponentPropsWithoutRef } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { flexUtilityVariants } from '@/registry/optics/lib/flex-utilities'

const flankVariants = cva('op-flank', {
  variants: {
    end: { false: null, true: 'op-flank--end' },
    ...flexUtilityVariants,
  },
})

export interface FlankProps extends ComponentPropsWithoutRef<'div'>, VariantProps<typeof flankVariants> {}

function Flank({ end, align, justify, gap, wrap, self, grow, className, ...props }: FlankProps) {
  const classes = flankVariants({
    end,
    align,
    justify,
    gap,
    wrap,
    self,
    grow,
    className,
  })

  return <div data-slot="flank" className={classes} {...props} />
}

export { Flank, flankVariants }
