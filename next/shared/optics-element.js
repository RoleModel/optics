import { LitElement } from 'lit'

// Base for every Optics web component. It renders into light DOM (no shadow root), so the
// BEM CSS and app CSS style everything a component renders or decorates.
export class OpticsElement extends LitElement {
  createRenderRoot() {
    return this
  }

  // Sends a bubbling event, so apps can listen on any ancestor.
  emit(name, detail) {
    return this.dispatchEvent(new CustomEvent(name, { bubbles: true, detail }))
  }
}
