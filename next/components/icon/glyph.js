// How each icon pack draws a name. Material Symbols draws the text itself, as a ligature.
// The others draw ::before from a class per name that the pack's CSS defines.
//
// An app uses one pack. It imports that pack's packs/*.css file, which loads the font, and
// calls setIconPack() with the same pack. This file only maps names to classes.
const PACKS = {
  'material-symbols': () => [],
  // Each Phosphor style is its own font and base class, from its own packs/phosphor-*.css.
  phosphor: ({ name, weight, filled, duotone }) => [phosphorStyle({ weight, filled, duotone }), `ph-${name}`],
  // Tabler has no fill axis. Its filled icons are separate names.
  tabler: ({ name, filled }) => ['ti', filled ? `ti-${name}-filled` : `ti-${name}`],
  feather: ({ name }) => ['fi', `fi-${name}`],
  lucide: ({ name }) => ['li', `li-${name}`],
}

const PHOSPHOR_WEIGHTS = ['thin', 'light', 'bold']

function phosphorStyle({ weight, filled, duotone }) {
  if (duotone) return 'ph-duotone'
  if (filled) return 'ph-fill'
  return PHOSPHOR_WEIGHTS.includes(weight) ? `ph-${weight}` : 'ph'
}

export const ICON_PACKS = Object.keys(PACKS)

let currentPack = 'material-symbols'

// Call once at startup, before icons render. Icons already rendered keep the old pack.
export function setIconPack(pack) {
  if (!PACKS[pack]) throw new Error(`Unknown icon pack "${pack}". Use one of: ${ICON_PACKS.join(', ')}`)
  currentPack = pack
}

export function iconPack() {
  return currentPack
}

// Returns the text and classes that draw the named icon in the app's pack. With no name,
// both are empty, so an SVG child shows instead.
export function iconGlyph({ name, weight, filled, duotone }) {
  if (!name) return { text: null, classes: [] }

  return {
    text: currentPack === 'material-symbols' ? name : null,
    classes: PACKS[currentPack]({ name, weight, filled, duotone }),
  }
}
