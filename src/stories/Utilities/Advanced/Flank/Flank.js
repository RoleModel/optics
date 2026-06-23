import { createChildren } from '../../../helpers/utils'
import { createAvatar } from '../../../Components/Avatar/Avatar'
import { createTextPair } from '../../../Components/TextPair/TextPair'

export const createFlank = ({ flank = true, end = false, gap = '', example = false }) => {
  if (example) {
    return createAvatarExample({ flank, end, gap })
  }

  const wrapper = document.createElement('div')

  wrapper.className = classlist(flank, end, gap)

  createChildren(wrapper, 2)

  return wrapper
}

const createAvatarExample = ({ flank, end, gap }) => {
  const avatar = createAvatar({ size: 'large', useLink: false, imageSource: 'https://avatars.githubusercontent.com/u/5957102?v=4' }).outerHTML
  const textPairEl = createTextPair({ titleText: 'Jeremy Walton', subtitleText: 'RoleModel Software' })
  if (end) textPairEl.classList.add('text-right')
  const textPair = textPairEl.outerHTML

  // Reverse order of elements if end is true
  const [first, second] = end ? [textPair, avatar] : [avatar, textPair]

  return `
<div style="padding: var(--op-space-large"> <!-- Padding is for demo only, don't write inline styles -->
  <div class='${classlist(flank, end, gap)}'>
    ${first}
    ${second}
  </div>
</div>
`
}

const classlist = (flank, end, gap) => {
  return [flank ? 'op-flank' : '', flank && end ? 'op-flank--end' : '', gap ? `gap-${gap}` : ''].filter(Boolean).join(' ')
}
