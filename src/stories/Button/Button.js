export const createButton = ({
  label,
  priority = 'primary',
  noBorder = false,
  active = false,
  pill = false,
  icon = false,
  size = 'large',
  disabled = false,
}) => {
  const element = disabled ? 'a' : 'button'
  const btn = document.createElement(element)
  btn.innerText = label

  btn.className = [
    priority === 'default' ? 'btn' : `btn-${priority}`,
    noBorder ? 'btn--no-border' : '',
    active ? 'btn--active' : '',
    pill ? 'btn--pill' : '',
    icon ? 'btn--icon' : '',
    size === 'large' ? '' : `btn--${size}`,
    disabled ? 'btn--disabled' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return btn
}
