import { createContext, useContext, type ComponentPropsWithoutRef } from 'react'
import { Field } from '@base-ui/react/field'
import { cva, cx, type VariantProps } from 'class-variance-authority'

const formGroupVariants = cva('form-group', {
  variants: {
    inline: { false: null, true: 'form-group--inline' },
    error: { false: null, true: 'form-group--error' },
  },
})

const formControlVariants = cva('form-control', {
  variants: {
    size: {
      small: 'form-control--small',
      medium: 'form-control--medium',
      large: 'form-control--large',
    },
    noBorder: { false: null, true: 'form-control--no-border' },
  },
})

export interface FormGroupProps extends Field.Root.Props, VariantProps<typeof formGroupVariants> {}

// Base UI only shows Field.Error for a browser validity error. A server-side error comes in as the group's `error` prop.
const FormGroupErrorContext = createContext(false)

function FormGroup({ inline, error, className, ...props }: FormGroupProps) {
  const classes = formGroupVariants({ inline, error, className })
  return (
    <FormGroupErrorContext.Provider value={Boolean(error)}>
      <Field.Root data-slot="form-group" className={classes} invalid={error || undefined} {...props} />
    </FormGroupErrorContext.Provider>
  )
}

export interface FormLabelProps extends Field.Label.Props {}

function FormLabel({ className, ...props }: FormLabelProps) {
  return <Field.Label data-slot="form-label" className={cx('form-label', className)} {...props} />
}

export interface FormControlProps
  extends Omit<Field.Control.Props, 'render' | 'size'>, VariantProps<typeof formControlVariants> {
  // Field.Control's declared props omit these (it targets text-like inputs by default),
  // but they're valid native attributes for a checkbox/radio's uncontrolled/controlled state.
  defaultChecked?: boolean
  checked?: boolean
}

function FormControl({ size, noBorder, className, ...props }: FormControlProps) {
  const classes = formControlVariants({ size, noBorder, className })
  return <Field.Control data-slot="form-control" className={classes} {...(props as Field.Control.Props)} />
}

export interface FormTextareaProps
  extends Omit<ComponentPropsWithoutRef<'textarea'>, 'className'>, VariantProps<typeof formControlVariants> {
  className?: string
}

function FormTextarea({ size, noBorder, className, ...props }: FormTextareaProps) {
  const classes = formControlVariants({ size, noBorder, className })
  // Field.Control's props are typed for <input>. The render swap only changes the tag at runtime, so cast the props.
  return (
    <Field.Control
      data-slot="form-control"
      render={<textarea />}
      className={classes}
      {...(props as Field.Control.Props)}
    />
  )
}

export interface FormSelectProps
  extends Omit<ComponentPropsWithoutRef<'select'>, 'className' | 'size'>, VariantProps<typeof formControlVariants> {
  className?: string
}

function FormSelect({ size, noBorder, className, ...props }: FormSelectProps) {
  const classes = formControlVariants({ size, noBorder, className })
  return (
    <Field.Control
      data-slot="form-control"
      render={<select />}
      className={classes}
      {...(props as Field.Control.Props)}
    />
  )
}

export interface FormHintProps extends Omit<Field.Description.Props, 'render'> {}

function FormHint({ className, ...props }: FormHintProps) {
  return <Field.Description data-slot="form-hint" render={<div />} className={cx('form-hint', className)} {...props} />
}

export interface FormErrorProps extends Omit<Field.Error.Props, 'render'> {}

function FormError({ match, className, ...props }: FormErrorProps) {
  const groupError = useContext(FormGroupErrorContext)
  return (
    <Field.Error
      data-slot="form-error"
      render={<span />}
      match={match ?? (groupError || undefined)}
      className={cx('form-error', className)}
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

export { Form, formGroupVariants, formControlVariants }
