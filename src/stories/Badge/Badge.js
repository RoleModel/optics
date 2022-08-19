export const createBadge = ({
  label,
  style = 'default',
  pill = false,
  inButton = 'no',
}) => {
  const badge = document.createElement('div')
  badge.innerText = label

  badge.className = [
    style === 'default' ? 'badge' : `badge-${style}`,
    pill ? 'badge--pill' : '',
  ].filter(Boolean).join(' ')

  if (inButton !== 'no') {
    const button = document.createElement('button')
    button.innerText = 'Notifications'
    button.className = 'btn btn--with-badge'

    if (!pill) {
      badge.className += ' badge--pill'
    }
    badge.className += ` badge--notification-${inButton}`

    button.appendChild(badge)

    return button
  }

  return badge
}
