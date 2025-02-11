const createPhosphorElement = (name, duotone) => {
  const icon = document.createElement('i')
  icon.className = [duotone ? 'ph-duotone' : 'ph', `ph-${name} `].filter(Boolean).join(' ')
  return icon
}

const createMaterialElement = (name) => {
  const icon = document.createElement('span')
  icon.innerText = name
  icon.className = 'material-symbols-outlined '
  return icon
}

export const createIcon = ({
  iconPack = 'Material Symbols Outlined',
  name,
  filled = false,
  size = 'medium',
  weight = 'normal',
  emphasis = 'normal',
  duotone = false,
}) => {
  let icon

  if (iconPack === 'Phosphor') {
    icon = createPhosphorElement(name, duotone)
  }

  if (iconPack === 'Material Symbols Outlined') {
    icon = createMaterialElement(name)
  }

  icon.className += [
    'icon',
    filled ? 'icon--filled' : '',
    size === 'medium' ? '' : `icon--${size}`,
    weight === 'normal' ? '' : `icon--weight-${weight}`,
    emphasis === 'normal' ? '' : `icon--${emphasis}-emphasis`,
  ]
    .filter(Boolean)
    .join(' ')

  return icon
}
