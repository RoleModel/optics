import { createContext, useContext, type ComponentPropsWithoutRef } from 'react'
import { cva, cx, type VariantProps } from 'class-variance-authority'
import { Icon, type IconProps } from '@/registry/optics/ui/icon'

interface AccordionRootProps extends ComponentPropsWithoutRef<'div'> {
  name?: string
  disableAnimation?: boolean
}

type AccordionContextValue = Pick<AccordionRootProps, 'name' | 'disableAnimation'>

const AccordionContext = createContext<AccordionContextValue>({})

function AccordionRoot({ name, disableAnimation, children, ...props }: AccordionRootProps) {
  return (
    <AccordionContext.Provider value={{ name, disableAnimation }}>
      <div data-slot="accordion" {...props}>
        {children}
      </div>
    </AccordionContext.Provider>
  )
}

const accordionItemVariants = cva('accordion', {
  variants: {
    disableAnimation: { false: null, true: 'accordion--disable-animation' },
  },
})

interface AccordionItemProps
  extends Omit<ComponentPropsWithoutRef<'details'>, 'name'>, VariantProps<typeof accordionItemVariants> {
  name?: string
}

function AccordionItem({ name, disableAnimation, className, children, ...props }: AccordionItemProps) {
  const context = useContext(AccordionContext)
  const classes = accordionItemVariants({
    disableAnimation: disableAnimation ?? context.disableAnimation,
    className,
  })

  return (
    <details data-slot="accordion-item" className={classes} name={name ?? context.name} {...props}>
      {children}
    </details>
  )
}

type AccordionTriggerProps = ComponentPropsWithoutRef<'summary'>

function AccordionTrigger({ children, ...props }: AccordionTriggerProps) {
  return (
    <summary data-slot="accordion-trigger" {...props}>
      {children}
    </summary>
  )
}

interface AccordionMarkerProps extends Omit<Extract<IconProps, { name: string }>, 'name'> {
  name?: string
}

function AccordionMarker({ name = 'arrow_right', className, ...props }: AccordionMarkerProps) {
  return <Icon data-slot="accordion-marker" name={name} className={cx('accordion__marker', className)} {...props} />
}

type AccordionLabelProps = ComponentPropsWithoutRef<'span'>

function AccordionLabel({ className, children, ...props }: AccordionLabelProps) {
  return (
    <span data-slot="accordion-label" className={cx('accordion__label', className)} {...props}>
      {children}
    </span>
  )
}

type AccordionContentProps = ComponentPropsWithoutRef<'div'>

function AccordionContent({ children, ...props }: AccordionContentProps) {
  return (
    <div data-slot="accordion-content" {...props}>
      {children}
    </div>
  )
}

const Accordion = {
  Root: AccordionRoot,
  Item: AccordionItem,
  Trigger: AccordionTrigger,
  Marker: AccordionMarker,
  Label: AccordionLabel,
  Content: AccordionContent,
}

export { Accordion, accordionItemVariants }
