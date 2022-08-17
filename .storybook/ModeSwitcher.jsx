import React, { useState } from 'react';
import { Button } from '@storybook/components';

import { useGlobals } from '@storybook/api';

// Destructuring like:
// const [globals, setGlobals] = useGlobals()
// or
// setGlobals({ ...globals, themeMode: mode })
// is not working so I had to work around it.

const ModeButton = ({ children, mode, currentThemeMode, updateThemeMode }) => {
  const hoverState = useState(false);
  const hover = hoverState[0];
  const setHover = hoverState[1];

  const backgroundColor = () => {
    if (hover) { return 'rgba(30, 167, 253, 0.12)' }
    return currentThemeMode === mode ? 'rgba(30,167,253,0.07)' : 'transparent'
  }

  const textColor = () => {
    if (hover) { return '#1EA7FD' }
    return currentThemeMode === mode ? '#1EA7FD' : '#999'
  }

  const buttonStyles = (mode) => {
    return {
      borderRadius: 0,
      padding: 8,
      color: textColor(),
      backgroundColor: backgroundColor()
    }
  }

  return (
    <Button
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={buttonStyles(mode)}
      onClick={() => updateThemeMode(mode)}
      title={`Set canvas to ${mode} mode`}
    >
      {children}
    </Button>
  )
}

const ModeSwitcher = () => {
  const globalState = useGlobals()
  const globals = globalState[0]
  const setGlobals = globalState[1]

  const setCanvasDocumentThemeMode = (mode) => {
    const frame = document.getElementById('storybook-preview-iframe')

    if (frame) {
      const frameDocument = frame.contentWindow.document
      frameDocument.children[0].dataset.themeMode = mode
    }
  }

  const updateThemeMode = (mode) => {
    setCanvasDocumentThemeMode(mode)
    globals.themeMode = mode
    setGlobals(globals)
  }

  if (!globals.themeMode) {
    updateThemeMode('light')
  }

  const containerStyles = () => {
    return {
      border: '1px solid rgb(0 0 0 / 10%)',
      margin: 5,
      borderRadius: '3em',
      overflow: 'hidden'
    }
  }

  return (
    <div style={containerStyles()}>
      <ModeButton
        mode='light'
        currentThemeMode={globals.themeMode}
        updateThemeMode={updateThemeMode}
      >Light</ModeButton>
      <ModeButton
        mode='dark'
        currentThemeMode={globals.themeMode}
        updateThemeMode={updateThemeMode}
      >Dark</ModeButton>
    </div>
  )
}

export default ModeSwitcher
