export const createIcon = ({ name, filled = false, size = 'medium', weight = 'normal', emphasis = 'normal' }) => {
  const icon = document.createElement('span')
  icon.innerText = name

  icon.className = [
    'material-symbols-outlined',
    filled ? 'icon--filled' : '',
    size === 'medium' ? '' : `icon--${size}`,
    weight === 'normal' ? '' : `icon--weight-${weight}`,
    emphasis === 'normal' ? '' : `icon--${emphasis}-emphasis`,
  ]
    .filter(Boolean)
    .join(' ')

  return icon
}
