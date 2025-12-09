import { createChildren } from '../../helpers/utils'

export const createStack = ({ stack = true, alignItems = '', gap = '' }) => {
  const wrapper = document.createElement('div')

  wrapper.className = [stack ? 'stack' : '', alignItems ? `items-${alignItems}` : '', gap ? `gap-${gap}` : '']
    .filter(Boolean)
    .join(' ')

  createChildren(wrapper, 5)

  return wrapper
}
