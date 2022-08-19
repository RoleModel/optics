export const createBadge = ({
  label,
  style = 'default',
  pill = false,
}) => {
  const badge = document.createElement('div');
  badge.innerText = label;

  badge.className = [
    style === 'default' ? 'badge' : `badge-${style}`,
    pill ? 'badge--pill' : '',
  ].filter(Boolean).join(' ');

  return badge;
};
