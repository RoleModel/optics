export const createButton = ({
  label,
  priority = 'default',
  noBorder = false,
  outlined = false,
  pill = false,
  icon = false,
  size = 'medium',
  disabled = false
}) => {
  const element = disabled ? 'a' : 'button'
  const btn = document.createElement(element);
  btn.innerText = label;

  btn.className = [
    priority === 'default' ? 'btn' : `btn-${priority}`,
    noBorder ? 'btn--no-border' : '',
    outlined ? 'btn--outline' : '',
    pill ? 'btn--pill' : '',
    icon ? 'btn--icon' : '',
    size === 'medium' ? '' : `btn--${size}`,
    disabled ? 'btn--disabled' : '',
  ].filter(Boolean).join(' ');

  return btn;
};
