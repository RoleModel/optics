import type { Meta, StoryObj } from '@storybook/react-vite'

import { Icon, type IconProps } from '@/registry/optics/ui/icon'

type IconArgs = Pick<IconProps, 'size' | 'weight' | 'emphasis' | 'label'> & {
  name: string
  svg: boolean
  filled?: boolean
  duotone?: boolean
}

// Simple stroke glyphs in the shape SVG icon sets ship: a 24x24 viewBox, currentColor, and a stroke-width on each element.
const checkCircle = (
  <svg viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M8 12.5l2.5 2.5L16 9.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const plus = (
  <svg viewBox="0 0 24 24" fill="none">
    <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

const home = (
  <svg viewBox="0 0 24 24" fill="none">
    <path
      d="M4 10.5L12 4l8 6.5V19a1 1 0 0 1-1 1h-4v-5h-6v5H5a1 1 0 0 1-1-1z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  </svg>
)

const meta = {
  title: 'Components/Icon',
  args: {
    name: 'settings',
    svg: false,
  },
  argTypes: {
    name: { control: 'text', description: 'Icon name in the icon pack. Ignored when `svg` is on' },
    svg: { control: 'boolean', description: 'Pass an inline `svg` as children instead of `name`' },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large', 'x-large'],
      description: '`size`. Unset looks like `medium`',
    },
    weight: {
      control: 'select',
      options: ['thin', 'light', 'normal', 'semi-bold', 'bold'],
      description: '`weight`. Unset looks like `normal`. `thin` is for Phosphor only',
    },
    filled: {
      control: 'boolean',
      if: { arg: 'svg', truthy: false },
      description: '`filled`: `true` adds `icon--filled`, `false` adds `icon--outlined`',
    },
    duotone: {
      control: 'boolean',
      if: { arg: 'svg', truthy: false },
      description: '`duotone`: the Phosphor duotone style',
    },
    emphasis: {
      control: 'select',
      options: ['low', 'normal', 'high'],
      description: '`emphasis`. Unset looks like `normal`',
    },
    label: {
      control: 'text',
      description: '`label`: an accessible name. Without it the icon is hidden from assistive tech',
    },
  },
  render: ({ name, svg, size, weight, filled, duotone, emphasis, label }) =>
    svg ? (
      <Icon size={size} weight={weight} emphasis={emphasis} label={label || undefined}>
        {checkCircle}
      </Icon>
    ) : (
      <Icon
        name={name}
        size={size}
        weight={weight}
        filled={filled}
        duotone={duotone || undefined}
        emphasis={emphasis}
        label={label || undefined}
      />
    ),
} satisfies Meta<IconArgs>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Filled: Story = {
  render: ({ name }) => (
    <div className="op-cluster gap-md">
      <Icon name={name} size="x-large" filled={false} />
      <Icon name={name} size="x-large" filled />
    </div>
  ),
}

export const Size: Story = {
  render: ({ name }) => (
    <div className="op-cluster gap-md items-center">
      <Icon name={name} size="small" />
      <Icon name={name} size="medium" />
      <Icon name={name} size="large" />
      <Icon name={name} size="x-large" />
    </div>
  ),
}

export const Weight: Story = {
  render: ({ name }) => (
    <div className="op-cluster gap-md">
      <Icon name={name} size="x-large" weight="light" />
      <Icon name={name} size="x-large" weight="normal" />
      <Icon name={name} size="x-large" weight="semi-bold" />
      <Icon name={name} size="x-large" weight="bold" />
    </div>
  ),
}

export const Emphasis: Story = {
  render: ({ name }) => (
    <div className="op-cluster gap-md">
      <Icon name={name} size="x-large" emphasis="low" />
      <Icon name={name} size="x-large" emphasis="normal" />
      <Icon name={name} size="x-large" emphasis="high" />
    </div>
  ),
}

export const Phosphor: Story = {
  globals: { iconPack: 'phosphor' },
  render: () => (
    <div className="op-cluster gap-md">
      <Icon name="smiley" size="x-large" />
      <Icon name="smiley" size="x-large" weight="thin" />
      <Icon name="smiley" size="x-large" weight="bold" />
      <Icon name="smiley" size="x-large" filled />
      <Icon name="smiley" size="x-large" duotone />
    </div>
  ),
}

export const Tabler: Story = {
  globals: { iconPack: 'tabler' },
  render: () => (
    <div className="op-cluster gap-md">
      <Icon name="settings" size="x-large" />
      <Icon name="settings" size="x-large" filled />
    </div>
  ),
}

export const Feather: Story = {
  globals: { iconPack: 'feather' },
  render: () => <Icon name="feather" size="x-large" />,
}

export const Lucide: Story = {
  globals: { iconPack: 'lucide' },
  render: () => <Icon name="banana" size="x-large" />,
}

export const Svg: Story = {
  render: () => (
    <div className="op-stack gap-md">
      <div className="op-cluster gap-md">
        <code>default</code>
        <Icon>{checkCircle}</Icon>
        <Icon>{plus}</Icon>
        <Icon>{home}</Icon>
      </div>
      <div className="op-cluster gap-md">
        <code>size="small"</code>
        <Icon size="small">{checkCircle}</Icon>
        <Icon size="small">{plus}</Icon>
        <Icon size="small">{home}</Icon>
      </div>
      <div className="op-cluster gap-md">
        <code>size="large"</code>
        <Icon size="large">{checkCircle}</Icon>
        <Icon size="large">{plus}</Icon>
        <Icon size="large">{home}</Icon>
      </div>
      <div className="op-cluster gap-md">
        <code>size="x-large"</code>
        <Icon size="x-large">{checkCircle}</Icon>
        <Icon size="x-large">{plus}</Icon>
        <Icon size="x-large">{home}</Icon>
      </div>
      <div className="op-cluster gap-md">
        <code>weight="light"</code>
        <Icon size="large" weight="light">
          {checkCircle}
        </Icon>
        <Icon size="large" weight="light">
          {plus}
        </Icon>
        <Icon size="large" weight="light">
          {home}
        </Icon>
      </div>
      <div className="op-cluster gap-md">
        <code>weight="bold"</code>
        <Icon size="large" weight="bold">
          {checkCircle}
        </Icon>
        <Icon size="large" weight="bold">
          {plus}
        </Icon>
        <Icon size="large" weight="bold">
          {home}
        </Icon>
      </div>
      <div className="op-cluster gap-md">
        <code>emphasis="low"</code>
        <Icon size="large" emphasis="low">
          {checkCircle}
        </Icon>
        <Icon size="large" emphasis="low">
          {plus}
        </Icon>
        <Icon size="large" emphasis="low">
          {home}
        </Icon>
      </div>
    </div>
  ),
}
