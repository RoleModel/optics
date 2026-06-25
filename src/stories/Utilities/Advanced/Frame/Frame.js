const IMAGE_SOURCE = 'https://images.unsplash.com/photo-1517849845537-4d257902454a?w=800&q=80'

export const createFrame = ({ frame = true, aspect = '', inlineSize = '' }) => {
  const style = inlineSize ? ` style="--_op-frame-inline-size: ${inlineSize};"` : ''

  // Sizing is for demo only, don't write inline styles
  return `
<div style="max-inline-size: 20rem; padding: var(--op-space-large);"> <!-- Sizing is for demo only, don't write inline styles -->
  <div class="${classlist(frame, aspect)}"${style}>
    <img src="${IMAGE_SOURCE}" alt="A dog looking at the camera" />
  </div>
</div>
`
}

const classlist = (frame, aspect) => {
  return [frame ? 'op-frame' : '', frame && aspect ? `op-frame--${aspect}` : ''].filter(Boolean).join(' ')
}
