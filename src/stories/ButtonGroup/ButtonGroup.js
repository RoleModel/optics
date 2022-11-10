import { createButton } from '../Button/Button.js'

export const createButtonGroup = (props) => {
  const group = document.createElement('div')
  group.className = 'btn-group'

  group.appendChild(createButton({ ...props, label: 'Left' }))
  group.appendChild(createButton({ ...props, label: 'Middle' }))
  group.appendChild(createButton({ ...props, label: 'Right' }))

  return group
}

export const createButtonGroupToolbar = (props) => {
  const group = document.createElement('div')
  group.className = 'btn-group-toolbar gap-xs'

  group.innerHTML = `
    <div class="btn-group">
      <button class="btn">
        <span class="material-symbols-outlined">format_bold</span>
      </button>
      <button class="btn">
        <span class="material-symbols-outlined">format_italic</span>
      </button>
      <button class="btn">
        <span class="material-symbols-outlined">format_strikethrough</span>
      </button>
      <button class="btn">
        <span class="material-symbols-outlined">format_underlined</span>
      </button>
      <button class="btn">
        <span class="material-symbols-outlined">link</span>
      </button>
    </div>
    <div class="btn-group">
      <button class="btn">
        <span class="material-symbols-outlined">text_fields</span>
      </button>
      <button class="btn">
        <span class="material-symbols-outlined">format_quote</span>
      </button>
      <button class="btn">
        <span class="material-symbols-outlined">code</span>
      </button>
      <button class="btn">
        <span class="material-symbols-outlined">format_list_bulleted</span>
      </button>
      <button class="btn">
        <span class="material-symbols-outlined">format_list_numbered</span>
      </button>
      <button class="btn">
        <span class="material-symbols-outlined">format_align_left</span>
      </button>
      <button class="btn">
        <span class="material-symbols-outlined">format_align_center</span>
      </button>
      <button class="btn">
        <span class="material-symbols-outlined">format_align_right</span>
      </button>
    </div>
    <div class="btn-group">
      <button class="btn">
        <span class="material-symbols-outlined">attachment</span>
      </button>
    </div>
    <div class="btn-group">
      <button class="btn">
        <span class="material-symbols-outlined">undo</span>
      </button>
      <button class="btn">
        <span class="material-symbols-outlined">redo</span>
      </button>
    </div>
  `

  return group
}
