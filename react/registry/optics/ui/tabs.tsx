import { createContext, useContext, type ComponentPropsWithoutRef } from 'react'
import { Tabs as TabsPrimitive } from '@base-ui/react/tabs'
import { cva, cx, type VariantProps } from 'class-variance-authority'

const tabVariants = cva('tab', {
  variants: {
    size: {
      small: 'tab--small',
      large: 'tab--large',
    },
    active: { false: null, true: 'tab--active' },
    disabled: { false: null, true: 'tab--disabled' },
  },
})

type TabsSize = VariantProps<typeof tabVariants>['size']

// Size is set once on the list, so every tab in it matches.
const TabsSizeContext = createContext<TabsSize>(undefined)

function TabsRoot(props: TabsPrimitive.Root.Props) {
  return <TabsPrimitive.Root data-slot="tabs" {...props} />
}

export interface TabsListProps extends Omit<TabsPrimitive.List.Props, 'className'> {
  className?: string
  size?: TabsSize
}

function TabsList({ size, className, ...props }: TabsListProps) {
  return (
    <TabsSizeContext.Provider value={size}>
      <TabsPrimitive.List data-slot="tabs-list" className={cx('tab-group', className)} {...props} />
    </TabsSizeContext.Provider>
  )
}

export interface TabsTabProps extends Omit<TabsPrimitive.Tab.Props, 'className'> {
  className?: string
  size?: TabsSize
}

function TabsTab({ size, className, ...props }: TabsTabProps) {
  const contextSize = useContext(TabsSizeContext)

  return (
    <TabsPrimitive.Tab
      data-slot="tabs-tab"
      className={(state) =>
        tabVariants({ size: size ?? contextSize, active: state.active, disabled: state.disabled, className })
      }
      {...props}
    />
  )
}

function TabsPanel(props: TabsPrimitive.Panel.Props) {
  return <TabsPrimitive.Panel data-slot="tabs-panel" {...props} />
}

export interface TabsNavProps extends ComponentPropsWithoutRef<'nav'> {
  size?: TabsSize
}

// Tab styling for page navigation: each tab is a link, and there are no panels.
function TabsNav({ size, className, ...props }: TabsNavProps) {
  return (
    <TabsSizeContext.Provider value={size}>
      <nav data-slot="tabs-nav" className={cx('tab-group', className)} {...props} />
    </TabsSizeContext.Provider>
  )
}

export interface TabsLinkProps extends ComponentPropsWithoutRef<'a'> {
  active?: boolean
  disabled?: boolean
  size?: TabsSize
}

function TabsLink({ active, disabled, size, className, ...props }: TabsLinkProps) {
  const contextSize = useContext(TabsSizeContext)

  return (
    <a
      data-slot="tabs-link"
      className={tabVariants({ size: size ?? contextSize, active, disabled, className })}
      aria-current={active ? 'page' : undefined}
      aria-disabled={disabled || undefined}
      tabIndex={disabled ? -1 : undefined}
      {...props}
    />
  )
}

const Tabs = {
  Root: TabsRoot,
  List: TabsList,
  Tab: TabsTab,
  Panel: TabsPanel,
  Nav: TabsNav,
  Link: TabsLink,
}

export { Tabs, tabVariants }
