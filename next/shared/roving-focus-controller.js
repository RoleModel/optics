// Roving focus for a row or column of items: tabs, menus, radio groups, toolbars.
// Only the current item is in the tab order, and Arrow keys, Home, and End move focus
// between the items, wrapping at the ends.
//
// items: () => the enabled items, in order
// current: () => the item that should be in the tab order
// onMove: (item) => called after a key moves focus to item
export class RovingFocusController {
  constructor(host, { items, current, onMove }) {
    this.host = host
    this.items = items
    this.current = current
    this.onMove = onMove
    host.addController(this)
  }

  hostConnected() {
    this.host.addEventListener('keydown', this.#onKeyDown)
  }

  hostDisconnected() {
    this.host.removeEventListener('keydown', this.#onKeyDown)
  }

  hostUpdated() {
    const current = this.current()
    for (const item of this.items()) item.tabIndex = item === current ? 0 : -1
  }

  #onKeyDown = (event) => {
    const items = this.items()
    const index = items.indexOf(event.target)
    if (index === -1) return

    const next = items[(index + 1) % items.length]
    const previous = items.at(index - 1)
    const target = {
      ArrowRight: next,
      ArrowDown: next,
      ArrowLeft: previous,
      ArrowUp: previous,
      Home: items[0],
      End: items.at(-1),
    }[event.key]
    if (!target) return

    event.preventDefault()
    target.focus()
    this.onMove?.(target)
  }
}
