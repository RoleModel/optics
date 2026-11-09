// Optics version: 2.6.1
import { createContext, useCallback, useContext, type ComponentPropsWithoutRef } from 'react'
import { Field } from '@base-ui/react/field'
import { cva, cx, type VariantProps } from 'class-variance-authority'

const formGroupVariants = cva('form-group', {
  variants: {
    inline: { true: 'form-group--inline' },
    error: { true: 'form-group--error' },
  },
})

const formControlVariants = cva('form-control', {
  variants: {
    size: {
      small: 'form-control--small',
      medium: 'form-control--medium',
      large: 'form-control--large',
    },
    noBorder: { true: 'form-control--no-border' },
  },
})

export interface FormGroupProps extends Field.Root.Props, VariantProps<typeof formGroupVariants> {}

// The group's `error` prop, or null outside a Form.Group. Base UI only shows Field.Error for a browser validity
// error, so a server-side error comes in through here. Base UI also throws for Field parts outside Field.Root,
// so outside a group the label, hint, and error render plain elements.
const FormGroupContext = createContext<boolean | null>(null)

function FormGroup({ inline, error, className, ...props }: FormGroupProps) {
  const classes = formGroupVariants({ inline, error, className })
  return (
    <FormGroupContext.Provider value={Boolean(error)}>
      <Field.Root data-slot="form-group" className={classes} invalid={error || undefined} {...props} />
    </FormGroupContext.Provider>
  )
}

export interface FormLabelProps extends Field.Label.Props {}

function FormLabel({ className, ...props }: FormLabelProps) {
  const classes = cx('form-label', className)
  if (useContext(FormGroupContext) === null) {
    return <label data-slot="form-label" className={classes} {...(props as ComponentPropsWithoutRef<'label'>)} />
  }
  return <Field.Label data-slot="form-label" className={classes} {...props} />
}

export interface FormControlProps
  extends Omit<Field.Control.Props, 'render' | 'size'>, VariantProps<typeof formControlVariants> {
  // Field.Control's declared props omit these (it targets text-like inputs by default),
  // but they're valid native attributes for a checkbox/radio's uncontrolled/controlled state.
  defaultChecked?: boolean
  checked?: boolean
  indeterminate?: boolean
}

function FormControl({ size, noBorder, indeterminate, className, ref, ...props }: FormControlProps) {
  const classes = formControlVariants({ size, noBorder, className })

  // `indeterminate` is a DOM property with no HTML attribute, so it can only be set on the element.
  const setRef = useCallback(
    (input: HTMLInputElement | null) => {
      if (input && indeterminate !== undefined) input.indeterminate = indeterminate
      if (typeof ref === 'function') return ref(input)
      if (ref) ref.current = input
    },
    [indeterminate, ref]
  )

  return <Field.Control data-slot="form-control" className={classes} ref={setRef} {...(props as Field.Control.Props)} />
}

export interface FormTextareaProps
  extends Omit<ComponentPropsWithoutRef<'textarea'>, 'className'>, VariantProps<typeof formControlVariants> {
  className?: string
}

function FormTextarea(props: FormTextareaProps) {
  return <NativeControl element="textarea" {...props} />
}

export interface FormSelectProps
  extends Omit<ComponentPropsWithoutRef<'select'>, 'className' | 'size'>, VariantProps<typeof formControlVariants> {
  className?: string
}

function FormSelect(props: FormSelectProps) {
  return <NativeControl element="select" {...props} />
}

function NativeControl({
  element: Element,
  size,
  noBorder,
  className,
  ...props
}: (FormTextareaProps | FormSelectProps) & { element: 'textarea' | 'select' }) {
  const classes = formControlVariants({ size, noBorder, className })
  // Field.Control's props are typed for <input>. The render swap only changes the tag at runtime, so cast the props.
  return (
    <Field.Control
      data-slot="form-control"
      render={<Element />}
      className={classes}
      {...(props as Field.Control.Props)}
    />
  )
}

export interface FormHintProps extends Omit<Field.Description.Props, 'render'> {}

function FormHint({ className, ...props }: FormHintProps) {
  const classes = cx('form-hint', className)
  if (useContext(FormGroupContext) === null) {
    return <div data-slot="form-hint" className={classes} {...(props as ComponentPropsWithoutRef<'div'>)} />
  }
  return <Field.Description data-slot="form-hint" render={<div />} className={classes} {...props} />
}

export interface FormErrorProps extends Omit<Field.Error.Props, 'render'> {}

function FormError({ match, className, ...props }: FormErrorProps) {
  const groupError = useContext(FormGroupContext)
  const classes = cx('form-error', className)
  if (groupError === null) {
    return <span data-slot="form-error" className={classes} {...(props as ComponentPropsWithoutRef<'span'>)} />
  }
  return (
    <Field.Error
      data-slot="form-error"
      render={<span />}
      match={match ?? (groupError || undefined)}
      className={classes}
      {...props}
    />
  )
}

export interface FormErrorSummaryProps extends ComponentPropsWithoutRef<'div'> {}

function FormErrorSummary({ className, ...props }: FormErrorSummaryProps) {
  return <div data-slot="form-error-summary" className={cx('form-error-summary', className)} {...props} />
}

const Form = {
  Group: FormGroup,
  Label: FormLabel,
  Control: FormControl,
  Textarea: FormTextarea,
  Select: FormSelect,
  Hint: FormHint,
  Error: FormError,
  ErrorSummary: FormErrorSummary,
}

export { Form, formGroupVariants }
