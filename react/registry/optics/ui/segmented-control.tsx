// Optics version: 2.6.1
import { createContext, useContext, useId, type ComponentPropsWithoutRef, type ReactNode } from 'react'
import { cva, cx, type VariantProps } from 'class-variance-authority'

const segmentedControlVariants = cva('segmented-control', {
  variants: {
    size: {
      small: 'segmented-control--small',
      medium: 'segmented-control--medium',
      large: 'segmented-control--large',
    },
    fullWidth: { true: 'segmented-control--full-width' },
  },
})

const SegmentedControlContext = createContext<{ name?: string }>({})

export interface SegmentedControlRootProps
  extends ComponentPropsWithoutRef<'div'>, VariantProps<typeof segmentedControlVariants> {
  name?: string
}

function SegmentedControlRoot({ name, size, fullWidth, className, children, ...props }: SegmentedControlRootProps) {
  // Radios only act as one group (exclusive selection, arrow-key movement)
  // when they share a name, so a missing name falls back to a generated one.
  const generatedName = useId()
  const classes = segmentedControlVariants({ size, fullWidth, className })

  return (
    <SegmentedControlContext.Provider value={{ name: name ?? generatedName }}>
      <div data-slot="segmented-control" role="radiogroup" className={classes} {...props}>
        {children}
      </div>
    </SegmentedControlContext.Provider>
  )
}

export interface SegmentedControlOptionProps extends Omit<ComponentPropsWithoutRef<'input'>, 'children' | 'type'> {
  children?: ReactNode
}

function SegmentedControlOption({ id, name, className, children, ...props }: SegmentedControlOptionProps) {
  const context = useContext(SegmentedControlContext)
  const generatedId = useId()
  const inputId = id ?? generatedId

  // The input is visually hidden; children and className style the label,
  // the visible segment. Optics keys the checked style on the label sitting
  // immediately after its input, so the pair renders as siblings.
  return (
    <>
      <input
        data-slot="segmented-control-input"
        type="radio"
        id={inputId}
        name={name ?? context.name}
        className="segmented-control__input"
        {...props}
      />
      <label
        data-slot="segmented-control-label"
        htmlFor={inputId}
        className={cx('segmented-control__label', className)}
      >
        {children}
      </label>
    </>
  )
}

const SegmentedControl = {
  Root: SegmentedControlRoot,
  Option: SegmentedControlOption,
}

export { SegmentedControl, segmentedControlVariants }
