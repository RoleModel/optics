import { createDivider } from '../Divider/Divider'

const createSection = (section, padding, contents, sectionsCount = 0, sectionPadding = '', showDividers = false) => {
  const element = document.createElement('div')
  element.className = `side-panel__${section}`

  if (padding !== 'none') {
    const paddingSuffix = padding === 'all' ? '' : `-${padding}`
    element.className += ` side-panel__${section}--padded${paddingSuffix}`
  }

  if (sectionsCount > 0) {
    for (let i = 0; i < sectionsCount; i++) {
      const section = createSection('section', sectionPadding, 'This is a section')

      element.innerHTML += '\n      '
      element.appendChild(section)

      if (showDividers) {
        element.innerHTML += '\n      '
        element.appendChild(createDivider({}))
      }
    }
    element.innerHTML += '\n    '
  } else {
    element.innerHTML = contents
  }

  return element
}

export const createSidePanel = ({
  border = 'none',
  headerPadding = 'none',
  bodyPadding = 'none',
  footerPadding = 'none',
  sections = 1,
  sectionPadding = 'none',
  showDividers = false,
  includeDemoWrapper = true,
}) => {
  const wrapper = document.createElement('div')
  if (includeDemoWrapper) {
    wrapper.style.height = '40rem'
  }

  const element = document.createElement('div')

  element.className = 'side-panel'

  if (border === 'left' || border === 'both') {
    element.classList.add('side-panel--border-left')
  }

  if (border === 'right' || border === 'both') {
    element.classList.add('side-panel--border-right')
  }

  const headerSection = createSection('header', headerPadding, 'This is a header')
  element.innerHTML += '\n    '
  element.appendChild(headerSection)

  const bodySection = createSection('body', bodyPadding, 'This is a body', sections, sectionPadding, showDividers)
  element.innerHTML += '\n    '
  element.appendChild(bodySection)

  const footerSection = createSection('footer', footerPadding, 'This is a footer')
  element.innerHTML += '\n    '
  element.appendChild(footerSection)

  element.innerHTML += '\n  '

  wrapper.innerHTML += '\n  '
  wrapper.appendChild(element)
  wrapper.innerHTML += '\n'

  return wrapper
}
