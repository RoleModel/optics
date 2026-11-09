// How each icon pack draws a name. Material Symbols draws the text itself, as a ligature.
// The others draw ::before from a class per name, which the pack's Optics font addon defines.
//
// An app uses one pack. It imports that pack's Optics font addon, which loads the font, and
// calls setIconPack() with the same pack. This file only maps names to classes.
interface GlyphOptions {
  name: string
  filled?: boolean | null
  duotone?: boolean
}

const PACKS = {
  'material-symbols': () => ['material-symbols-outlined'],
  // Phosphor weight and fill come from the icon--weight-* and icon--filled classes.
  phosphor: ({ name, duotone }: GlyphOptions) => [duotone ? 'ph-duotone' : 'ph', `ph-${name}`],
  // Tabler has no fill axis. Its filled icons are separate names.
  tabler: ({ name, filled }: GlyphOptions) => ['ti', filled ? `ti-${name}-filled` : `ti-${name}`],
  feather: ({ name }: GlyphOptions) => ['fi', `fi-${name}`],
  lucide: ({ name }: GlyphOptions) => ['li', `li-${name}`],
}

export type IconPack = keyof typeof PACKS

let currentPack: IconPack = 'material-symbols'

// Call once at startup, before icons render. Icons already rendered keep the old pack.
function setIconPack(pack: IconPack) {
  currentPack = pack
}

// The text and classes that draw the named icon in the app's pack.
function iconGlyph(options: GlyphOptions) {
  return {
    text: currentPack === 'material-symbols' ? options.name : null,
    classes: PACKS[currentPack](options),
  }
}

export { setIconPack, iconGlyph }
