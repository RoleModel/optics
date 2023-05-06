export const createLabel = ({ label, htmlFor = 'random' }) => {
  const labelElement = document.createElement('label')
  labelElement.innerText = label
  labelElement.className = 'form-label'
  labelElement.htmlFor = htmlFor

  return labelElement
}

const createRadioInput = ({ readonly, id }) => {
  const input = document.createElement('input')
  input.type = 'radio'
  input.id = id
  input.className = 'form-control'

  if (readonly) {
    input.disabled = true
  }

  return input
}

const createCheckboxInput = ({ readonly, id, indeterminate }) => {
  const input = document.createElement('input')
  input.type = 'checkbox'
  input.id = id
  input.className = 'form-control'
  input.indeterminate = indeterminate

  if (readonly) {
    input.disabled = true
  }

  return input
}

const createColorInput = ({ readonly, id }) => {
  const element = readonly ? 'div' : 'input'
  const input = document.createElement(element)
  input.type = 'color'
  input.id = id
  input.className = 'form-control'

  if (readonly) {
    input.className += ' form-control--read-only'
  }

  return input
}

export const createInput = ({ type, readonly, id = 'random', indeterminate = false }) => {
  if (type === 'radio') {
    return createRadioInput({ readonly, id })
  }
  if (type === 'checkbox') {
    return createCheckboxInput({ readonly, id, indeterminate })
  }
  if (type === 'color') {
    return createColorInput({ readonly, id })
  }

  const element = readonly ? 'div' : 'input'
  const input = document.createElement(element)
  input.type = type
  input.placeholder = type
  input.id = id

  input.className = 'form-control'

  if (readonly) {
    input.className += ' form-control--read-only'
    input.innerHTML = type
  }

  return input
}

export const createTextarea = ({ readonly }) => {
  const element = readonly ? 'div' : 'textarea'
  const input = document.createElement(element)
  input.placeholder = 'Textarea'
  input.className = 'form-control'

  if (readonly) {
    input.className += ' form-control--read-only'
    input.innerHTML = 'Textarea'
  }

  return input
}

export const createSelect = ({ options, readonly, multiple }) => {
  const element = readonly ? 'div' : 'select'
  const input = document.createElement(element)
  input.className = 'form-control'

  if (multiple) {
    input.setAttribute('multiple', true)
  }

  if (readonly) {
    input.className += ' form-control--read-only'
    input.innerHTML = 'Option 1'
  } else {
    const optionStrings = Array.from(Array(options)).map((_, i) => {
      return `<option>Option ${i + 1}</option>`
    })

    input.innerHTML = `
    ${optionStrings.join('\n  ')}
  `
  }

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

export const createFormGroup = ({ label, type, error, hint, readonly, indeterminate }) => {
  const element = document.createElement('div')
  element.className = 'form-group'

  if (error) {
    element.className += ' form-group--error'
  }

  const errorElement = document.createElement('span')
  errorElement.className = 'form-error'
  errorElement.innerText = error

  if (type === 'checkbox' || type === 'radio') {
    element.appendChild(createInput({ type, readonly, indeterminate }))
    element.appendChild(createLabel({ label }))
    if (error) {
      element.appendChild(errorElement)
    }
  } else {
    element.appendChild(createLabel({ label }))
    element.appendChild(createInput({ type, readonly }))
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
