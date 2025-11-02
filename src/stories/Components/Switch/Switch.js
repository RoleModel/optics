export const createSwitch = ({ label = 'Switch Text', size = 'large', disabled = false }) => {
  let switchClasses = 'switch'

  if (size === 'small') {
    switchClasses += ' switch--small'
  }

  return `
    <div class='form-group form-group--inline'>
      <input class="${switchClasses}" type="checkbox" role="switch" id="switch-demo" ${disabled ? 'disabled' : ''}>
      <label class="form-label" for="switch-demo">${label}</label>
    </div>
  `
}
