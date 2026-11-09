import { Button, type ButtonProps } from '@/registry/optics/ui/button'

// @types/react does not include the Invoker Commands API yet. React 19 passes these lowercase attributes to the DOM.
declare module 'react' {
  interface ButtonHTMLAttributes<T> {
    command?: string
    commandfor?: string
  }
}

export interface DialogTriggerProps extends ButtonProps {
  for: string
}

function DialogTrigger({ for: commandfor, ...props }: DialogTriggerProps) {
  return <Button commandfor={commandfor} command="show-modal" {...props} />
}

// Runs the caller's onClick first, so it can call preventDefault() to keep the dialog open.
function closeParentDialog(onClick?: ButtonProps['onClick']): ButtonProps['onClick'] {
  return (event) => {
    onClick?.(event)
    if (!event.defaultPrevented) event.currentTarget.closest('dialog')?.close()
  }
}

export { DialogTrigger, closeParentDialog }
