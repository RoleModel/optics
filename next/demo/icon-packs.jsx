import { createRoot } from 'react-dom/client'
import { Icon } from '../components/icon/Icon.jsx'
import { setIconPack } from '../components/icon/glyph.js'
import '../components/icon/icon.js'
import '../tokens.css'
import '../components/icon/icon.css'
import './demo.css'
import './assemblies/demo-nav.js'

// An app picks its pack with one CSS import and one setIconPack() call. This page picks it
// from ?pack= and loads only that pack's CSS. Phosphor loads only the styles shown.
const PACKS = {
  'material-symbols': {
    load: () => import('../components/icon/packs/material-symbols-variable.css'),
    icons: [{ name: 'favorite' }, { name: 'favorite', weight: 'bold' }, { name: 'favorite', filled: true }],
  },
  phosphor: {
    load: () =>
      Promise.all([
        import('../components/icon/packs/phosphor.css'),
        import('../components/icon/packs/phosphor-thin.css'),
        import('../components/icon/packs/phosphor-bold.css'),
        import('../components/icon/packs/phosphor-fill.css'),
        import('../components/icon/packs/phosphor-duotone.css'),
      ]),
    icons: [
      { name: 'smiley' },
      { name: 'smiley', weight: 'thin' },
      { name: 'smiley', weight: 'bold' },
      { name: 'smiley', filled: true },
      { name: 'smiley', duotone: true },
    ],
  },
  tabler: {
    load: () => import('../components/icon/packs/tabler.css'),
    icons: [{ name: 'heart', size: 'small' }, { name: 'heart' }, { name: 'heart', filled: true }],
  },
  feather: {
    load: () => import('../components/icon/packs/feather.css'),
    icons: [{ name: 'feather', size: 'small' }, { name: 'feather' }, { name: 'github' }],
  },
  lucide: {
    load: () => import('../components/icon/packs/lucide.css'),
    icons: [{ name: 'banana', size: 'small' }, { name: 'banana' }, { name: 'apple', label: 'Apple' }],
  },
}

const requested = new URLSearchParams(location.search).get('pack')
const pack = requested in PACKS ? requested : 'material-symbols'

setIconPack(pack)
await PACKS[pack].load()

createRoot(document.getElementById('pack-links')).render(
  Object.keys(PACKS).map((name) => (
    <a key={name} href={`?pack=${name}`} aria-current={name === pack ? 'page' : undefined}>
      {name}
    </a>
  ))
)

document.getElementById('pack-name').textContent = pack

const { icons } = PACKS[pack]
createRoot(document.getElementById('pack-icons')).render(
  <>
    <div className="op-cluster">
      <strong>Web component</strong>
      {icons.map(({ filled, duotone, ...props }, index) => (
        <op-icon key={index} size="x-large" filled={filled || undefined} duotone={duotone || undefined} {...props} />
      ))}
    </div>
    <div className="op-cluster">
      <strong>React</strong>
      {icons.map((props, index) => (
        <Icon key={index} size="x-large" {...props} />
      ))}
    </div>
  </>
)
