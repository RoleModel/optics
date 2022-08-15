import React from 'react';
import { addons, types } from '@storybook/addons';
import rolemodelTheme from './rolemodelTheme';

import { useGlobals } from '@storybook/api'; // For some reason this is needed here. ModeSwitcher won't work without it.

import ModeSwitcher from './ModeSwitcher';

addons.register("rolemodel/toolbar", () => {
  addons.add("rolemodel-toolbar-addon/toolbar", {
    title: "Control to switch theme mode",
    //👇 Sets the type of UI element in Storybook
    type: types.TOOL,
    //👇 Shows the Toolbar UI element if either the Canvas or Docs tab is active
    match: ({ viewMode }) => !!(viewMode && viewMode.match(/^(story|docs)$/)),
    render: () => <ModeSwitcher />,
  });
});

addons.setConfig({
  theme: rolemodelTheme,
});
