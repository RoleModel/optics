import { createChildren } from '../../../helpers/utils'

export const createGrid = ({ grid = true, gap = '', columns = 0 }) => {
  const wrapper = document.createElement('div')
  wrapper.style.height = '10rem'

  wrapper.className = [
    grid ? 'op-grid' : '',
    gap ? `gap-${gap}` : '',
    columns > 0 ? `op-grid--${columns}-column` : '',
  ]
    .filter(Boolean)
    .join(' ')

  createChildren(wrapper, 10)

  return wrapper
}
