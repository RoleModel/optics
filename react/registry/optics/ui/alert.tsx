// Optics version: 2.6.1
import { createContext, useContext, type ComponentPropsWithoutRef } from 'react'
import { Toast } from '@base-ui/react/toast'
import { cva, cx, type VariantProps } from 'class-variance-authority'

import { buttonVariants } from '@/registry/optics/ui/button'
import { Icon, type IconProps } from '@/registry/optics/ui/icon'
import { builtInIconName } from '@/registry/optics/lib/icon-pack'

import styles from './alert.module.css'

const alertVariants = cva('alert', {
  variants: {
    variant: {
      warning: 'alert--warning',
      danger: 'alert--danger',
      info: 'alert--info',
      notice: 'alert--notice',
    },
    tone: {
      outlined: null,
      muted: 'alert--muted',
      filled: 'alert--filled',
    },
    flash: { true: 'alert--flash' },
  },
})

type AlertVariantProps = Omit<VariantProps<typeof alertVariants>, 'flash'>

// Title, Description, and Close render Base UI toast parts inside a flash, so they need to know which root they are in.
const FlashContext = createContext(false)

export interface AlertRootProps extends ComponentPropsWithoutRef<'div'>, AlertVariantProps {}

function AlertRoot({ variant, tone, className, ...props }: AlertRootProps) {
  return (
    <FlashContext.Provider value={false}>
      <div data-slot="alert" role="alert" className={alertVariants({ variant, tone, className })} {...props} />
    </FlashContext.Provider>
  )
}

export interface AlertFlashProps extends Omit<Toast.Root.Props, 'className'>, AlertVariantProps {
  className?: string
}

function AlertFlash({ variant, tone, className, style, ...props }: AlertFlashProps) {
  return (
    <FlashContext.Provider value={true}>
      <Toast.Root
        data-slot="alert"
        className={alertVariants({ variant, tone, flash: true, className: cx(styles.flash, className) })}
        // alert--flash plays a fixed 5s slide-in-out animation that ignores the toast's timeout and
        // hover pause. Base UI times the toast, so turn the animation off and slide with a transition.
        style={{ animation: 'none', ...style }}
        {...props}
      />
    </FlashContext.Provider>
  )
}

function AlertIcon({ className, ...props }: IconProps) {
  return <Icon data-slot="alert-icon" className={cx('alert__icon', className)} {...props} />
}

export interface AlertMessagesProps extends ComponentPropsWithoutRef<'div'> {}

function AlertMessages({ className, ...props }: AlertMessagesProps) {
  return <div data-slot="alert-messages" className={cx('alert__messages', className)} {...props} />
}

export interface AlertTitleProps extends ComponentPropsWithoutRef<'div'> {}

function AlertTitle({ className, ...props }: AlertTitleProps) {
  const flash = useContext(FlashContext)
  const classes = cx('alert__title', className)

  // Toast.Title defaults to an <h2>, which brings a browser margin. A <span> keeps the Optics spacing.
  if (flash) return <Toast.Title data-slot="alert-title" render={<span />} className={classes} {...props} />

  return <div data-slot="alert-title" className={classes} {...props} />
}

export interface AlertDescriptionProps extends ComponentPropsWithoutRef<'div'> {}

function AlertDescription({ className, ...props }: AlertDescriptionProps) {
  const flash = useContext(FlashContext)
  const classes = cx('alert__description', className)

  // Toast.Description defaults to a <p>, which brings a browser margin.
  if (flash) return <Toast.Description data-slot="alert-description" render={<span />} className={classes} {...props} />

  return <div data-slot="alert-description" className={classes} {...props} />
}

export interface AlertCloseProps extends ComponentPropsWithoutRef<'button'> {
  label?: string
}

function AlertClose({ label = 'Dismiss', className, ...props }: AlertCloseProps) {
  const flash = useContext(FlashContext)
  const classes = buttonVariants({ shape: 'circle', borderless: true, className: cx('alert__icon', className) })
  const closeProps = { 'data-slot': 'alert-close', className: classes, 'aria-label': label, ...props }

  if (flash) {
    return (
      <Toast.Close {...closeProps}>
        <Icon name={builtInIconName('close')} />
      </Toast.Close>
    )
  }

  return (
    <button type="button" {...closeProps}>
      <Icon name={builtInIconName('close')} />
    </button>
  )
}

function AlertFlashProvider({ limit = 1, ...props }: Toast.Provider.Props) {
  return <Toast.Provider limit={limit} {...props} />
}

function AlertFlashViewport(props: Toast.Viewport.Props) {
  return (
    <Toast.Portal>
      <Toast.Viewport data-slot="alert-flash-viewport" {...props} />
    </Toast.Portal>
  )
}

const Alert = {
  Root: AlertRoot,
  Flash: AlertFlash,
  Icon: AlertIcon,
  Messages: AlertMessages,
  Title: AlertTitle,
  Description: AlertDescription,
  Close: AlertClose,
  FlashProvider: AlertFlashProvider,
  FlashViewport: AlertFlashViewport,
}

const useAlertManager = Toast.useToastManager
const createAlertManager = Toast.createToastManager

export { Alert, alertVariants, useAlertManager, createAlertManager }
