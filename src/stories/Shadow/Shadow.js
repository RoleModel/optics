export const createShadow = ({ size = 'medium' }) => {
  const shadowElement = document.createElement('div');
  shadowElement.innerText = size;
  shadowElement.className = `card-padded shadow-${size}`;

  return shadowElement;
};
