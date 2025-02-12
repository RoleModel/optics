class IconPackType {
  constructor(packName, options = {}) {
    this.packName = packName
    this.options = options
  }

  static fromNameAndOptions(packName, options) {
    const typeMapping = {
      'Material Symbols Outlined': MaterialIconPack,
      Phosphor: PhosphorIconPack,
    }

    return new typeMapping[packName](packName, options)
  }

  createIcon() {
    const icon = document.createElement(this.iconElement())
    icon.innerText = this.innerText()
    icon.className = this.iconClasses().filter(Boolean).join(' ')
    return icon
  }

  iconElement() {
    // Subclasses should override this method
    return 'div'
  }

  innerText() {
    // Subclasses may wish to override this method
    return ''
  }

  iconClasses() {
    return ['icon', this.options.size === 'medium' ? '' : `icon--${this.options.size}`]
  }
}

class MaterialIconPack extends IconPackType {
  iconElement() {
    return 'span'
  }

  innerText() {
    return this.options.iconName
  }

  iconClasses() {
    return [
      'material-symbols-outlined',
      this.options.filled ? 'icon--filled' : '',
      this.options.weight === 'normal' ? '' : `icon--weight-${this.options.weight}`,
      this.options.emphasis === 'normal' ? '' : `icon--${this.options.emphasis}-emphasis`,
    ].concat(super.iconClasses())
  }
}

class PhosphorIconPack extends IconPackType {
  iconElement() {
    return 'i'
  }

  iconClasses() {
    return [
      this.options.duotone ? 'ph-duotone' : 'ph',
      `ph-${this.options.iconName}`,
      this.options.filled ? 'icon--filled' : '',
      this.options.weight === 'normal' ? '' : `icon--weight-${this.options.weight}`,
    ].concat(super.iconClasses())
  }
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
  const iconPackType = IconPackType.fromNameAndOptions(iconPack, {
    iconName: name,
    filled,
    duotone,
    weight,
    size,
    emphasis,
  })

  return iconPackType.createIcon()
}
