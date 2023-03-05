import { createChildren } from '../helpers/utils'

export const createFlex = ({
  flex = true,
  flexDirection = '',
  flexWrap = '',
  flexGrowOne = false,
  justifyContent = '',
  alignItems = '',
}) => {
  const wrapper = document.createElement('div')
  wrapper.style.height = '10rem'

  wrapper.className = [
    flex ? 'flex gap-xxs' : '',
    flexDirection ? `flex-${flexDirection}` : '',
    flexWrap ? `flex-${flexWrap}` : '',
    justifyContent ? `justify-${justifyContent}` : '',
    alignItems ? `items-${alignItems}` : '',
  ]
    .filter(Boolean)
    .join(' ')

  createChildren(wrapper, 5)

  if (flexWrap) {
    Array.from(wrapper.children).forEach((box) => {
      box.style.width = '30rem'
    })
  }

  if (flexGrowOne) {
    wrapper.children[0].className = 'flex-grow-1'
  }

  return wrapper
}
