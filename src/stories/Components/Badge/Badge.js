import { createIcon } from '../Icon/Icon.js'

export const createBadge = ({
  label,
  style = 'default',
  pill = false,
  inButton = 'no',
  showPrefixIcon = false,
  showSuffixIcon = false,
}) => {
  const badge = document.createElement('div')
  badge.innerText = label

  badge.className = [style === 'default' ? 'badge' : `badge-${style}`, pill ? 'badge--pill' : '']
    .filter(Boolean)
    .join(' ')

  if (showPrefixIcon) {
    badge.prepend(createIcon({ name: 'open_in_new' }))
  }

  if (showSuffixIcon) {
    badge.appendChild(createIcon({ name: 'add' }))
  }

  if (inButton !== 'no') {
    const button = document.createElement('button')
    button.innerText = 'Notifications'
    button.className = 'btn-primary btn--with-badge'

    if (!pill) {
      badge.className += ' badge--pill'
    }
    badge.className += ` badge--notification-${inButton}`

    button.appendChild(badge)

    return button
  }

  return badge
}
