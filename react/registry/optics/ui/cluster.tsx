import type { ComponentPropsWithoutRef } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { alignVariants, gapVariants } from '@/registry/optics/lib/flex-utilities'

const clusterVariants = cva('op-cluster', {
  variants: { align: alignVariants, gap: gapVariants },
})

export interface ClusterProps extends ComponentPropsWithoutRef<'div'>, VariantProps<typeof clusterVariants> {}

function Cluster({ align, gap, className, ...props }: ClusterProps) {
  return <div data-slot="cluster" className={clusterVariants({ align, gap, className })} {...props} />
}

export { Cluster, clusterVariants }
