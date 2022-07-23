export const createLabel = ({ label }) => {
  const labelElement = document.createElement('label');
  labelElement.innerText = label;
  labelElement.className = 'form__label';

  return labelElement;
};

export const createInput = ({ type }) => {
  const input = document.createElement('input');
  input.type = type
  input.placeholder = type

  input.className = 'form__input'

  if (type === 'color') { input.className = 'form__color' }
  if (type === 'radio') { input.className = 'form__radio' }
  if (type === 'checkbox') { input.className = 'form__checkbox' }

  return input;
};

export const createTextarea = () => {
  const input = document.createElement('textarea');
  input.placeholder = 'Textarea'
  input.className = 'form__textarea'

  return input;
};

export const createSelect = ({ options }) => {
  const input = document.createElement('select');
  input.className = 'form__dropdown';

  const optionStrings = Array.from(Array(options)).map((_, i) => {
    return `<option>Option ${i + 1}</option>`;
  });

  input.innerHTML = `
  ${optionStrings.join("\n  ")}
`;

  return input;
};
