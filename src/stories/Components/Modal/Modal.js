export const createModal = ({ header, body, footer = '', inlineDemo = false, dialog = false }) => {
  if (dialog) {
    return createDialogModal({ header, body, footer })
  }

  const element = document.createElement('div')

  element.classList = `modal-wrapper modal-wrapper--active ${inlineDemo ? 'modal-wrapper--demo' : ''}`

  const footerContents =
    footer !== ''
      ? footer
      : `
      <button class="btn">Cancel</button>
      <button class='btn btn--primary'>Save</button>
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

export const createDialogModal = ({ header, body, footer = '' }) => {
  const example = document.createElement('div')

  const footerContents =
    footer !== ''
      ? footer
      : `
        <form method="dialog">
          <button class="btn">Cancel</button>
        </form>
        <button class='btn btn--primary'>Save</button>
  `

  example.innerHTML = `
    <button class="btn" commandfor="my-dialog" command="show-modal">Show Dialog</button>
    <dialog id="my-dialog" class="modal" closedby="any">
      <div class='modal__header'>
        ${header}
        <form method="dialog">
          <button class="btn btn--no-border btn--icon btn--pill">
            <span class='material-symbols-outlined icon--x-large'>close</span>
          </button>
        </form>
      </div>
      <div class='modal__body'>
        ${body}
      </div>
      <div class='modal__footer'>
        ${footerContents}
      </div>
    </dialog>
  `

  return example
}
