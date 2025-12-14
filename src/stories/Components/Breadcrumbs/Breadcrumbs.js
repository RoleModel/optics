import { createIcon } from '../Icon/Icon'

export const createBreadcrumbs = ({ size = '', separator = 'arrow_right' }) => {
  const element = document.createElement('nav')

  element.className = ['breadcrumbs', size === '' ? '' : `breadcrumbs--${size}`].filter(Boolean).join(' ')

  const links = [
    { type: 'link', text: 'USA' },
    { type: 'separator', text: separator },
    { type: 'link', text: 'Mexico' },
    { type: 'separator', text: separator },
    { type: 'link', text: 'Canada' },
    { type: 'separator', text: separator },
    { type: 'text', text: 'England' },
  ]

  const elementFor = (type) => {
    return {
      link: 'a',
      text: 'span',
      separator: 'div',
    }[type]
  }

  const createLink = (linkItem) => {
    const element = document.createElement(elementFor(linkItem.type))

    element.className = `breadcrumbs__${linkItem.type}`
    element.innerText = linkItem.text

    if (linkItem.type === 'link') {
      element.href = '#'
    } else if (linkItem.type === 'separator') {
      element.innerHTML = '\n    ' + createIcon({ name: linkItem.text }).outerHTML + '\n  '
    }

    return element
  }

  element.innerHTML += `
  ${links.map((item, _index) => createLink(item).outerHTML).join('\n  ')}
`

  return element
}
