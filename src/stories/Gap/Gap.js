import { createChildren } from '../helpers/utils'

export const createGap = ({ size = 'md' }) => {
  const wrapper = document.createElement('div')
  wrapper.className = `flex gap-${size}`

  createChildren(wrapper, 5)

  return wrapper
}
