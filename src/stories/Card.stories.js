import { createCard } from './Card';

// More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Components/Card',
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {
    label: { control: 'text' },
    padded: { control: 'boolean' },
    condensed: { control: 'boolean' },
    header: { control: 'text' },
    body: { control: 'text' },
    footer: { control: 'text' },
  },
};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = ({ label, ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return createCard({ label, ...args });
};

export const Plain = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
Plain.args = {
  label: 'Plain',
};

export const Padded = Template.bind({});
Padded.args = {
  padded: true,
  label: 'Padded',
};

export const Full = Template.bind({});
Full.args = {
  header: 'Full',
  body: 'Body',
  footer: 'Footer',
};

export const Condensed = Template.bind({});
Condensed.args = {
  condensed: true,
  header: 'Condensed',
  body: 'Body',
  footer: 'Footer',
};
