import { createButton } from '../Button/Button.js'

export const createTag = ({ label, type = 'readonly', iconLeft = false, iconRight = false }) => {
  const tag = document.createElement('div')

  const text = document.createElement('span')
  text.innerText = label
  text.className = 'tag__label'
  tag.append(text)

  if (iconLeft) {
    tag.prepend(createButton({ priority: 'default', noBorder: true, icon: 'close', pill: true }))
  }

  if (iconRight) {
    tag.append(createButton({ priority: 'default', noBorder: true, icon: 'close', pill: true }))
  }

  tag.className = ['tag', `tag--${type}`].filter(Boolean).join(' ')

  return tag
}
