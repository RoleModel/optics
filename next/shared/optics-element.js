import { LitElement } from 'lit'

// Base for every Optics web component. It renders into light DOM (no shadow root), so the
// BEM CSS and app CSS style everything a component renders or decorates.
//
// With a static block, it adds the block class, and each property with a modifier option
// adds a modifier class for its value:
//
//   static block = 'badge'
//   static properties = {
//     variant: { modifier: true },                                    variant="info": badge--info
//     pill: { type: Boolean, modifier: true },                        pill: badge--pill
//     notification: { modifier: (side) => `notification-${side}` },  badge--notification-left
//   }
//
// Any value gets a class, so an app's own variant works: variant="brand" adds badge--brand.
export class OpticsElement extends LitElement {
  createRenderRoot() {
    return this
  }

  // Sends a bubbling event, so apps can listen on any ancestor. Returns false when a
  // listener cancels a cancelable event.
  emit(name, detail, { cancelable = false } = {}) {
    return this.dispatchEvent(new CustomEvent(name, { bubbles: true, cancelable, detail }))
  }

  // Before the update, so a subclass's updated() sees the classes. It removes only the class
  // for the old value, so classes the author wrote stay.
  willUpdate(changed) {
    const { block, elementProperties } = this.constructor
    if (!block) return

    this.classList.add(block)
    for (const [name, { modifier }] of elementProperties) {
      if (!modifier || !changed.has(name)) continue

      const before = modifierClass(block, name, modifier, changed.get(name))
      const after = modifierClass(block, name, modifier, this[name])
      if (before) this.classList.remove(before)
      if (after) this.classList.add(after)
    }
  }
}

function modifierClass(block, name, modifier, value) {
  if (value == null || value === false || value === '') return null
  if (typeof modifier === 'function') return `${block}--${modifier(value)}`
  return `${block}--${value === true ? name : value}`
}
