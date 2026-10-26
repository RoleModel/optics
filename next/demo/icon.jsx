import { createRoot } from 'react-dom/client'
import { Icon } from '../components/icon/Icon.jsx'
import '../components/icon/icon.js'
import '../tokens.css'
import '../components/icon/icon.css'
import '../components/icon/packs/material-symbols-variable.css'
import './demo.css'

createRoot(document.getElementById('react-icons')).render(
  <>
    <Icon name="search" size="small" />
    <Icon name="search" />
    <Icon name="search" size="large" weight="semi-bold" />
    <Icon name="star" size="x-large" filled />
    <Icon name="info" size="x-large" emphasis="low" label="Information" />
    <Icon size="x-large" label="Check">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        <path strokeWidth="2" d="M20 6 9 17l-5-5" />
      </svg>
    </Icon>
  </>
)

createRoot(document.getElementById('react-chunky')).render(
  <>
    <Icon name="bolt" />
    <Icon name="pets" />
    <Icon name="eco" />
  </>
)
