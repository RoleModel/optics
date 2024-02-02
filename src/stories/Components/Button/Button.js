import { createIcon } from '../Icon/Icon.js'

export const createButton = ({
  label,
  priority = 'primary',
  noBorder = false,
  active = false,
  pill = false,
  icon = false,
  iconWithLabel = false,
  size = 'large',
  disabled = false,
  inlineIconWithLabel = false,
  useAsLink = false,
  showPrefixIcon = false,
  showSuffixIcon = false
}) => {
  const element = useAsLink || disabled ? 'a' : 'button'
  const btn = document.createElement(element)
  btn.innerText = label

  if (useAsLink) {
    btn.href = '#'
  }

  if (icon) {
    if (!inlineIconWithLabel) {
      btn.innerText = ''
    }
    const name = icon === true ? 'add' : icon
    btn.prepend(createIcon({ name }))
  }

  if (iconWithLabel) {
    btn.prepend(createIcon({ name: 'add', size: 'large' }))
  }

  if (showPrefixIcon) {
    btn.prepend(createIcon({ name: 'open_in_new' }))
  }

  if (showSuffixIcon) {
    btn.appendChild(createIcon({ name: 'add' }))
  }

  btn.className = [
    priority === 'default' ? 'btn' : `btn-${priority}`,
    noBorder ? 'btn--no-border' : '',
    active ? 'btn--active' : '',
    pill ? 'btn--pill' : '',
    icon && !inlineIconWithLabel ? 'btn--icon' : '',
    iconWithLabel ? 'btn--icon-with-label' : '',
    size === 'large' ? '' : `btn--${size}`,
    disabled ? 'btn--disabled' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return btn
}
