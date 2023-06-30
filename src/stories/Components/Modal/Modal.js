export const createModal = ({ header, body, footer = '', inlineDemo = false }) => {
  const element = document.createElement('div')

  element.classList = `modal-wrapper modal-wrapper--active ${inlineDemo ? 'modal-wrapper--demo' : ''}`

  const footerContents =
    footer !== ''
      ? footer
      : `
      <button class="btn">Cancel</button>
      <button class='btn-primary'>Save</button>
  `

  element.innerHTML = `
  <div class="modal-wrapper__backdrop"></div>
  <div class="modal">
    <div class='modal__header'>
      ${header}
      <button class='btn btn--no-border btn--icon btn--pill'>
        <span class='material-symbols-outlined icon--x-large'>close</span>
      </button>
    </div>
    <div class='modal__body'>
      ${body}
    </div>
    <div class='modal__footer'>
      ${footerContents}
    </div>
  </div>
`

  return element
}
