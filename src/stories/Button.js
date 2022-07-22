import './button.css';

export const createButton = ({
  label,
  priority = 'default',
  noBorder = false,
  outlined = false,
  pill = false,
  icon = false,
  size = 'medium',
}) => {
  const btn = document.createElement('button');
  btn.innerText = label;

  btn.className = [
    priority === 'default' ? 'btn' : `btn-${priority}`,
    noBorder ? 'btn--no-border' : '',
    outlined ? 'btn--outline' : '',
    pill ? 'btn--pill' : '',
    icon ? 'btn--icon' : '',
    size === 'medium' ? '' : `btn--${size}`,
  ].filter(Boolean).join(' ');

  return btn;
};
