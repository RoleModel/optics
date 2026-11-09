import type { Meta, StoryObj } from '@storybook/react-vite'

import { Divider } from '@/registry/optics/ui/divider'
import { SidePanel, type SidePanelHeaderProps, type SidePanelRootProps } from '@/registry/optics/ui/side-panel'

type Padding = SidePanelHeaderProps['padding']

type SidePanelArgs = Pick<SidePanelRootProps, 'border'> & {
  headerPadding?: Padding
  bodyPadding?: Padding
  footerPadding?: Padding
  sections: number
  sectionPadding?: Padding
  showDividers: boolean
}

const paddingControl = (part: string) => ({
  control: 'select' as const,
  options: ['x', 'y', 'all'],
  description: `\`padding\` of \`SidePanel.${part}\``,
})

const meta = {
  title: 'Components/Side Panel',
  args: {
    sections: 1,
    showDividers: false,
  },
  argTypes: {
    border: {
      control: 'select',
      options: ['left', 'right', 'both'],
      description: '`border` of `SidePanel.Root`',
    },
    headerPadding: paddingControl('Header'),
    bodyPadding: paddingControl('Body'),
    footerPadding: paddingControl('Footer'),
    sections: {
      control: { type: 'number', min: 0 },
      description: 'Number of `SidePanel.Section`s in the body. With 0 the body holds plain text',
    },
    sectionPadding: paddingControl('Section'),
    showDividers: { control: 'boolean', description: 'Add a `Divider` after each section' },
  },
  render: ({ border, headerPadding, bodyPadding, footerPadding, sections, sectionPadding, showDividers }) => (
    <div style={{ height: '40rem' }}>
      <SidePanel.Root border={border}>
        <SidePanel.Header padding={headerPadding}>This is a header</SidePanel.Header>
        <SidePanel.Body padding={bodyPadding}>
          {sections > 0
            ? Array.from({ length: sections }).flatMap((_, index) => [
                <SidePanel.Section key={`section-${index}`} padding={sectionPadding}>
                  This is a section
                </SidePanel.Section>,
                showDividers && <Divider key={`divider-${index}`} />,
              ])
            : 'This is a body'}
        </SidePanel.Body>
        <SidePanel.Footer padding={footerPadding}>This is a footer</SidePanel.Footer>
      </SidePanel.Root>
    </div>
  ),
} satisfies Meta<SidePanelArgs>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Bordered: Story = {
  args: { border: 'both' },
}

export const PaddedHeader: Story = {
  args: { headerPadding: 'all' },
}

export const PaddedBody: Story = {
  args: { bodyPadding: 'all' },
}

export const PaddedFooter: Story = {
  args: { footerPadding: 'all' },
}

export const WithSections: Story = {
  args: { sections: 20, showDividers: true },
}

export const PaddedSection: Story = {
  args: { sections: 3, sectionPadding: 'all', showDividers: true },
}
