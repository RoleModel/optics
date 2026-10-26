import { createContext, use, useState } from 'react'
import { Icon } from '../icon/Icon.jsx'

// React version of alert.spec.json. Compose the parts:
//
// <Alert.Root variant="warning">
//   <Alert.Icon name="warning" />
//   <Alert.Messages>
//     <Alert.Title>Heads up</Alert.Title>
//     <Alert.Description>Your trial ends tomorrow.</Alert.Description>
//   </Alert.Messages>
//   <Alert.Close />
// </Alert.Root>

const AlertContext = createContext(null)

const cx = (...classes) => classes.filter(Boolean).join(' ')

function useAlert(part) {
  const alert = use(AlertContext)
  if (!alert) throw new Error(`<Alert.${part}> must be inside <Alert.Root>`)
  return alert
}

// Hides itself on dismiss, unless onDismiss calls event.preventDefault().
function AlertRoot({ variant, tone, flash, onDismiss, onAnimationEnd, className, ...props }) {
  const [dismissed, setDismissed] = useState(false)
  if (dismissed) return null

  function dismiss(event) {
    onDismiss?.(event)
    if (!event.defaultPrevented) setDismissed(true)
  }

  return (
    <AlertContext value={{ dismiss }}>
      <div
        data-slot="alert"
        role="alert"
        className={alertClasses({ variant, tone, flash, className })}
        onAnimationEnd={(event) => {
          onAnimationEnd?.(event)
          // animationend bubbles, so skip the ones from children.
          if (flash && event.target === event.currentTarget) dismiss(event)
        }}
        {...props}
      />
    </AlertContext>
  )
}

function AlertIcon({ size = 'large', weight = 'bold', className, ...props }) {
  return <Icon data-slot="alert-icon" size={size} weight={weight} className={cx('alert__icon', className)} {...props} />
}

function AlertMessages({ className, ...props }) {
  return <div data-slot="alert-messages" className={cx('alert__messages', className)} {...props} />
}

function AlertTitle({ className, ...props }) {
  return <div data-slot="alert-title" className={cx('alert__title', className)} {...props} />
}

function AlertDescription({ className, ...props }) {
  return <div data-slot="alert-description" className={cx('alert__description', className)} {...props} />
}

function AlertClose({ label = 'Dismiss', className, onClick, ...props }) {
  const alert = useAlert('Close')

  return (
    <button
      data-slot="alert-close"
      type="button"
      aria-label={label}
      className={cx('alert__close', className)}
      onClick={(event) => {
        onClick?.(event)
        if (!event.defaultPrevented) alert.dismiss(event)
      }}
      {...props}
    >
      <Icon name="close" />
    </button>
  )
}

export function alertClasses({ variant, tone, flash, className }) {
  return cx('alert', variant && `alert--${variant}`, tone && `alert--${tone}`, flash && 'alert--flash', className)
}

export const Alert = {
  Root: AlertRoot,
  Icon: AlertIcon,
  Messages: AlertMessages,
  Title: AlertTitle,
  Description: AlertDescription,
  Close: AlertClose,
}
