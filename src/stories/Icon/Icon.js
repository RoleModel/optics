export const createIcon = ({
  name,
  filled = false,
  size = 'medium',
  weight = 'normal',
  emphasis = 'normal',
}) => {
  const icon = document.createElement('span')
  icon.innerText = name

  icon.className = [
    'material-symbols-outlined',
    filled ? 'icon--filled' : 'icon--outlined',
    `icon--${size}`,
    `icon--weight-${weight}`,
    `icon--${emphasis}-emphasis`,
  ].filter(Boolean).join(' ');

  return icon;
};
