// Optics version: 2.6.1
import { useId, type ComponentPropsWithoutRef } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

const switchVariants = cva('switch', {
  variants: {
    size: {
      small: 'switch--small',
      large: 'switch--large',
    },
  },
})

export interface SwitchProps
  extends Omit<ComponentPropsWithoutRef<'input'>, 'children' | 'type' | 'size'>, VariantProps<typeof switchVariants> {}

function Switch({ id, size, className, ...props }: SwitchProps) {
  const generatedId = useId()
  const inputId = id ?? generatedId
  const classes = switchVariants({ size, className })

  // Optics styles the empty <label> as the track/thumb and keys every state
  // on the native checkbox (:checked/:disabled/:focus-visible + label), so
  // the input-label pair is fixed markup. A visible text label lives outside
  // the block, linked by passing an explicit id.
  return (
    <div data-slot="switch" className={classes}>
      <input data-slot="switch-input" type="checkbox" id={inputId} {...props} />
      <label data-slot="switch-track" htmlFor={inputId} />
    </div>
  )
}

export { Switch, switchVariants }
