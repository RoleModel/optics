import { createIcon } from '../Icon/Icon'

export const createAccordion = ({
  headerLabel = 'Header Label',
  marker = 'arrow_right',
  additionalHeaderContent = '',
  flipHeaderAndMarker = false,
  content = 'Something small enough to escape casual notice.',
}) => {
  const element = document.createElement('details')
  element.className = 'accordion'

  const summary = document.createElement('summary')

  const label = document.createElement('span')
  label.className = 'accordion__label'
  label.innerHTML = headerLabel

  const markerIcon = createIcon({ name: marker })
  markerIcon.className += ' accordion__marker'

  summary.innerHTML = '\n    '
  if (flipHeaderAndMarker) {
    summary.innerHTML += label.outerHTML
    summary.innerHTML += '\n    '
    summary.innerHTML += markerIcon.outerHTML
  } else {
    summary.innerHTML += markerIcon.outerHTML
    summary.innerHTML += '\n    '
    summary.innerHTML += label.outerHTML
  }
  summary.innerHTML += '\n    '
  summary.innerHTML += additionalHeaderContent
  summary.innerHTML += '\n  '

  element.innerHTML = '\n  '
  element.innerHTML += summary.outerHTML
  element.innerHTML += '\n  '
  element.innerHTML += content
  element.innerHTML += '\n'

  return element
}
