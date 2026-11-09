// Optics version: 2.6.1
import type { ComponentPropsWithoutRef } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

const sidePanelVariants = cva('side-panel', {
  variants: {
    border: {
      left: 'side-panel--border-left',
      right: 'side-panel--border-right',
      both: 'side-panel--border-left side-panel--border-right',
    },
  },
})

function paddingVariants(element: 'header' | 'body' | 'footer' | 'section') {
  return {
    padding: {
      x: `side-panel__${element}--padded-x`,
      y: `side-panel__${element}--padded-y`,
      all: `side-panel__${element}--padded`,
    },
  }
}

export interface SidePanelRootProps extends ComponentPropsWithoutRef<'div'>, VariantProps<typeof sidePanelVariants> {}

function SidePanelRoot({ border, className, ...props }: SidePanelRootProps) {
  const classes = sidePanelVariants({ border, className })

  return <div data-slot="side-panel" className={classes} {...props} />
}

const sidePanelHeaderVariants = cva('side-panel__header', {
  variants: paddingVariants('header'),
})

export interface SidePanelHeaderProps
  extends ComponentPropsWithoutRef<'div'>, VariantProps<typeof sidePanelHeaderVariants> {}

function SidePanelHeader({ padding, className, ...props }: SidePanelHeaderProps) {
  const classes = sidePanelHeaderVariants({ padding, className })

  return <div data-slot="side-panel-header" className={classes} {...props} />
}

const sidePanelBodyVariants = cva('side-panel__body', {
  variants: paddingVariants('body'),
})

export interface SidePanelBodyProps
  extends ComponentPropsWithoutRef<'div'>, VariantProps<typeof sidePanelBodyVariants> {}

function SidePanelBody({ padding, className, ...props }: SidePanelBodyProps) {
  const classes = sidePanelBodyVariants({ padding, className })

  return <div data-slot="side-panel-body" className={classes} {...props} />
}

const sidePanelFooterVariants = cva('side-panel__footer', {
  variants: paddingVariants('footer'),
})

export interface SidePanelFooterProps
  extends ComponentPropsWithoutRef<'div'>, VariantProps<typeof sidePanelFooterVariants> {}

function SidePanelFooter({ padding, className, ...props }: SidePanelFooterProps) {
  const classes = sidePanelFooterVariants({ padding, className })

  return <div data-slot="side-panel-footer" className={classes} {...props} />
}

const sidePanelSectionVariants = cva('side-panel__section', {
  variants: paddingVariants('section'),
})

export interface SidePanelSectionProps
  extends ComponentPropsWithoutRef<'div'>, VariantProps<typeof sidePanelSectionVariants> {}

function SidePanelSection({ padding, className, ...props }: SidePanelSectionProps) {
  const classes = sidePanelSectionVariants({ padding, className })

  return <div data-slot="side-panel-section" className={classes} {...props} />
}

const SidePanel = {
  Root: SidePanelRoot,
  Header: SidePanelHeader,
  Body: SidePanelBody,
  Footer: SidePanelFooter,
  Section: SidePanelSection,
}

export { SidePanel, sidePanelVariants }
