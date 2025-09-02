import { createIcon } from '../Icon/Icon.js'

const createOptionInput = (index) => {
  const element = document.createElement('input')
  element.className = 'segmented-control__input'
  element.type = 'radio'
  element.id = `option-${index}`
  element.value = `value ${index}`
  element.name = 'example-segmented-control'

  return element
}

const createOptionLabel = (index, showPrefixIcon, showSuffixIcon) => {
  const element = document.createElement('label')
  element.className = 'segmented-control__label'
  element.setAttribute('for', `option-${index}`)
  element.textContent = `Option ${index}`

  if (showPrefixIcon) {
    element.prepend(createIcon({ name: 'bolt' }))
  }

  if (showSuffixIcon) {
    element.appendChild(createIcon({ name: 'info' }))
  }

  return element
}

export const createSegmentedControl = ({
  size = 'large',
  showPrefixIcon = false,
  showSuffixIcon = false,
  options = 3,
}) => {
  const element = document.createElement('div')
  element.role = 'radiogroup'

  element.className = ['segmented-control', size === 'large' ? '' : `segmented-control--${size}`]
    .filter(Boolean)
    .join(' ')

  for (let i = 1; i <= options; i++) {
    const input = createOptionInput(i)
    const label = createOptionLabel(i, showPrefixIcon, showSuffixIcon)

    element.appendChild(input)
    element.appendChild(label)
  }

  return element
}
