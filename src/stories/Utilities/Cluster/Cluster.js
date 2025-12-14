import { createChildren } from '../../helpers/utils'

export const createCluster = ({ cluster = true, alignItems = '', gap = '' }) => {
  const wrapper = document.createElement('div')
  wrapper.style.height = '15rem'

  wrapper.className = [cluster ? 'op-cluster' : '', alignItems ? `items-${alignItems}` : '', gap ? `gap-${gap}` : '']
    .filter(Boolean)
    .join(' ')

  createChildren(wrapper, 35)

  return wrapper
}
