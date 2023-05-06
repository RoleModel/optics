export const createConfirmDialog = ({ title, message, inlineDemo = false }) => {
  const element = document.createElement('div')

  element.classList = `confirm-dialog-wrapper confirm-dialog-wrapper--active ${
    inlineDemo ? 'confirm-dialog-wrapper--demo' : ''
  }`

  element.innerHTML = `
  <div class="confirm-dialog-wrapper__backdrop"></div>
  <div class="confirm-dialog">
    <div class='confirm-dialog__header'>${title}</div>
    <div class='confirm-dialog__body'>
      ${message}
    </div>
    <div class='confirm-dialog__footer'>
      <button class="btn">Cancel</button>
      <button class='btn-delete'>Yes, I'm Sure</button>
    </div>
  </div>
`

  return element
}
