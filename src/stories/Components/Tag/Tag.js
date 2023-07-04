import { createIcon } from '../Icon/Icon.js'

export const createTag = ({ label, type = 'default', iconLeft = false, iconRight = false }) => {
  const tag = document.createElement('div')

  tag.innerText = label

  if (iconLeft) {
    const name = iconLeft === true ? 'close' : iconLeft
    tag.prepend(createIcon({ name, size: 'large' }))
  }

  if (iconRight) {
    const name = iconRight === true ? 'close' : iconRight
    tag.append(createIcon({ name, size: 'large' }))
  }

  tag.className = [type === 'default' ? 'tag' : `tag-${type}`].filter(Boolean).join(' ')

  return tag
}
