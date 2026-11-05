import type { ReactElement } from 'react'
import { Tooltip as TooltipPrimitive } from '@base-ui/react/tooltip'

import styles from './tooltip.module.css'

export type TooltipPosition = 'top' | 'right' | 'bottom' | 'left'

export interface TooltipProps extends Omit<TooltipPrimitive.Root.Props, 'children'> {
  text: string
  position?: TooltipPosition
  delay?: number
  children: ReactElement
}

// The 300ms delay and 22px side offset (arrow + gap) mirror Optics'
// hover-intent transition delay and pseudo-element spacing.
function Tooltip({ text, position = 'top', delay = 300, children, ...props }: TooltipProps) {
  return (
    <TooltipPrimitive.Root {...props}>
      <TooltipPrimitive.Trigger delay={delay} render={children} />
      <TooltipPrimitive.Portal>
        <TooltipPrimitive.Positioner side={position} sideOffset={22}>
          <TooltipPrimitive.Popup data-slot="tooltip" className={styles.popup}>
            <TooltipPrimitive.Arrow data-slot="tooltip-arrow" className={styles.arrow} />
            {text}
          </TooltipPrimitive.Popup>
        </TooltipPrimitive.Positioner>
      </TooltipPrimitive.Portal>
    </TooltipPrimitive.Root>
  )
}

export { Tooltip }
