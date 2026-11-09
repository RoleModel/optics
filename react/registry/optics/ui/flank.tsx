import type { ComponentPropsWithoutRef } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { gapVariants } from '@/registry/optics/lib/flex-utilities'

const flankVariants = cva('op-flank', {
  variants: {
    end: { false: null, true: 'op-flank--end' },
    gap: gapVariants,
  },
})

export interface FlankProps extends ComponentPropsWithoutRef<'div'>, VariantProps<typeof flankVariants> {}

function Flank({ end, gap, className, ...props }: FlankProps) {
  return <div data-slot="flank" className={flankVariants({ end, gap, className })} {...props} />
}

export { Flank, flankVariants }
