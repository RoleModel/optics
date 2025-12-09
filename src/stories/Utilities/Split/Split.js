import { createChildren } from '../../helpers/utils'

export const createSplit = ({ split = true, alignItems = '', gap = '' }) => {
  const wrapper = document.createElement('div')
  wrapper.style.height = '10rem'

  wrapper.className = [split ? 'split' : '', alignItems ? `items-${alignItems}` : '', gap ? `gap-${gap}` : '']
    .filter(Boolean)
    .join(' ')

  createChildren(wrapper, 2)

  return wrapper
}
