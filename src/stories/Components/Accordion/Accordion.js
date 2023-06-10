import { createIcon } from '../Icon/Icon'

export const createAccordion = ({
  icon = 'arrow_right',
  headerLabel = 'Header Label',
  labelBeforeIcon = false,
  content = 'Something small enough to escape casual notice.',
}) => {
  const element = document.createElement('details')
  element.className = 'accordion'

  const summary = document.createElement('summary')

  summary.innerHTML = '\n    '
  if (labelBeforeIcon) {
    summary.innerHTML += headerLabel
    summary.innerHTML += '\n    '
    summary.innerHTML += createIcon({ name: icon }).outerHTML
  } else {
    summary.innerHTML += createIcon({ name: icon }).outerHTML
    summary.innerHTML += '\n    '
    summary.innerHTML += headerLabel
  }
  summary.innerHTML += '\n  '

  element.innerHTML = '\n  '
  element.innerHTML += summary.outerHTML
  element.innerHTML += '\n  '
  element.innerHTML += content
  element.innerHTML += '\n'

  return element
}
