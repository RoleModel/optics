import type { ArgTypes, Decorator } from '@storybook/react-vite'

import { alignVariants, gapVariants } from '@/registry/optics/lib/flex-utilities'

const box = {
  minWidth: 'var(--op-space-x-large)',
  minHeight: 'var(--op-space-x-large)',
  backgroundColor: 'var(--op-color-primary-original)',
}

export const boxes = (count: number) => Array.from({ length: count }, (_, index) => <div key={index} style={box} />)

export const itemsArgType = (max: number): ArgTypes[string] => ({
  control: { type: 'number', min: 0, max },
  description: 'Number of child boxes',
})

export const gapArgType: ArgTypes[string] = {
  control: 'select',
  options: Object.keys(gapVariants),
  description: 'Space between the children: `gap-*`. Defaults to `md`',
}

export const alignArgType: ArgTypes[string] = {
  control: 'select',
  options: Object.keys(alignVariants),
  description: 'Cross axis alignment of the children: `items-*`',
}

// A tall container shows how the children fill the cross axis.
export const tallContainer =
  (minBlockSize: string): Decorator =>
  (Story) => (
    <div style={{ display: 'grid', minBlockSize }}>
      <Story />
    </div>
  )
