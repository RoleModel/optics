import { iconGlyph } from './glyph.js'

// React version of icon.spec.json:
//
// <Icon name="settings" size="large" />
// <Icon label="Favorite"><svg viewBox="0 0 24 24">…</svg></Icon>

const cx = (...classes) => classes.filter(Boolean).join(' ')

export function Icon({ name, label, size, weight, emphasis, filled, duotone, className, children, ...props }) {
  const glyph = iconGlyph({ name, weight, filled, duotone })

  return (
    <span
      data-slot="icon"
      className={iconClasses({ size, weight, emphasis, filled, className: cx(...glyph.classes, className) })}
      aria-hidden={label ? undefined : true}
      role={label ? 'img' : undefined}
      aria-label={label}
      {...props}
    >
      {name ? glyph.text : children}
    </span>
  )
}

export function iconClasses({ size, weight, emphasis, filled, className }) {
  return cx(
    'icon',
    size && `icon--${size}`,
    weight && `icon--weight-${weight}`,
    emphasis && `icon--${emphasis}-emphasis`,
    filled && 'icon--filled',
    className
  )
}
