export const createLabel = ({ label, htmlFor = 'random' }) => {
  const labelElement = document.createElement('label')
  labelElement.innerText = label
  labelElement.className = 'form-label'
  labelElement.htmlFor = htmlFor

  return labelElement
}

const createRadioInput = ({ readonly, size, id, disabled = false }) => {
  const input = document.createElement('input')
  input.type = 'radio'
  input.id = id
  input.className = 'form-control'
  input.className += ` form-control--${size}`
  input.disabled = disabled
  if (readonly) {
    input.setAttribute('readonly', readonly)
  }

  return input
}

const createCheckboxInput = ({ readonly, size, id, indeterminate, disabled = false }) => {
  const input = document.createElement('input')
  input.type = 'checkbox'
  input.id = id
  input.className = 'form-control'
  input.className += ` form-control--${size}`
  input.indeterminate = indeterminate
  input.disabled = disabled
  if (readonly) {
    input.setAttribute('readonly', readonly)
  }

  return input
}

const createColorInput = ({ readonly, size, id, disabled = false }) => {
  const input = document.createElement('input')
  input.type = 'color'
  input.id = id
  input.className = 'form-control'
  input.className += ` form-control--${size}`
  input.disabled = disabled
  if (readonly) {
    input.setAttribute('readonly', readonly)
  }

  return input
}

export const createInput = ({
  type,
  size,
  noBorder,
  readonly,
  id = 'random',
  indeterminate = false,
  disabled = false,
}) => {
  if (type === 'Radio') {
    return createRadioInput({ readonly, size, id, disabled })
  }
  if (type === 'Checkbox') {
    return createCheckboxInput({ readonly, size, id, indeterminate, disabled })
  }
  if (type === 'Color') {
    return createColorInput({ readonly, id, disabled })
  }

  const input = document.createElement('input')
  input.type = type
  input.placeholder = type
  input.id = id
  input.disabled = disabled
  if (readonly) {
    input.setAttribute('readonly', readonly)
  }

  input.className = 'form-control'
  input.className += ` form-control--${size}`

  if (noBorder) {
    input.className += ' form-control--no-border'
  }

  return input
}

export const createTextarea = ({ readonly, size, disabled = false }) => {
  const input = document.createElement('textarea')
  input.placeholder = 'Textarea'
  input.className = 'form-control'
  input.className += ` form-control--${size}`
  input.disabled = disabled
  if (readonly) {
    input.setAttribute('readonly', readonly)
  }

  return input
}

export const createSelect = ({ options, size = 'large', readonly, multiple, disabled = false }) => {
  const input = document.createElement('select')
  input.className = 'form-control'
  input.className += ` form-control--${size}`
  input.disabled = disabled
  if (readonly) {
    input.setAttribute('readonly', readonly)
  }

  if (multiple) {
    input.setAttribute('multiple', true)
  }

  const optionStrings = Array.from(Array(options)).map((_, i) => {
    return `<option>Option ${i + 1}</option>`
  })

  input.innerHTML = `
  ${optionStrings.join('\n  ')}
`

  return input
}

export const createErrorSummary = ({ label }) => {
  const element = document.createElement('div')
  element.className = 'form-error-summary'

  element.innerHTML = `
  <h2>${label}</h2>
  <ul>
    <li>Tags rank is not a number</li>
    <li>Title can't be blank</li>
  </ul>
`

  return element
}

export const createFormGroup = ({
  label,
  type,
  size = 'large',
  error,
  hint,
  noBorder,
  readonly,
  indeterminate,
  disabled,
  inline = false,
}) => {
  const element = document.createElement('div')
  element.className = 'form-group'

  if (error) {
    element.className += ' form-group--error'
  }

  if (inline) {
    element.className += ' form-group--inline'
  }

  const errorElement = document.createElement('span')
  errorElement.className = 'form-error'
  errorElement.innerText = error

  if (type === 'Checkbox' || type === 'Radio') {
    element.appendChild(createInput({ type, size, readonly, indeterminate, noBorder, disabled }))
    element.appendChild(createLabel({ label }))
    if (error) {
      element.appendChild(errorElement)
    }
  } else {
    element.appendChild(createLabel({ label }))
    element.appendChild(createInput({ type, size, readonly, noBorder, disabled }))
    if (error) {
      element.appendChild(errorElement)
    }
  }

  if (hint) {
    const hintElement = document.createElement('div')
    hintElement.className = 'form-hint'
    hintElement.innerText = hint
    element.appendChild(hintElement)
  }

  return element
}
