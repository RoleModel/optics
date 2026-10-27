import { createContext, use, useId, useState } from 'react'
import { cx } from '../../shared/cx.js'

// React version of tabs.spec.json. Compose the parts:
//
// <Tabs.Root defaultValue="orders">
//   <Tabs.List size="small">
//     <Tabs.Tab value="orders">Orders</Tabs.Tab>
//   </Tabs.List>
//   <Tabs.Panel value="orders">…</Tabs.Panel>
// </Tabs.Root>

const TabsContext = createContext(null)

function useTabs(part) {
  const tabs = use(TabsContext)
  if (!tabs) throw new Error(`<Tabs.${part}> must be inside <Tabs.Root>`)
  return tabs
}

function TabsRoot({ value, defaultValue, onValueChange, className, ...props }) {
  const id = useId()
  const [ownValue, setOwnValue] = useState(defaultValue)
  const current = value ?? ownValue

  function select(next) {
    if (next === current) return
    setOwnValue(next)
    onValueChange?.(next)
  }

  return (
    <TabsContext value={{ id, value: current, select }}>
      <div data-slot="tabs" className={cx('tabs', className)} {...props} />
    </TabsContext>
  )
}

// Moves between the enabled tabs in this list and selects the one it lands on.
function handleArrowKeys(event, select) {
  const tabs = [...event.currentTarget.querySelectorAll('[role="tab"]:not(:disabled)')]
  const index = tabs.indexOf(event.target)
  if (index === -1) return

  const next = tabs[(index + 1) % tabs.length]
  const previous = tabs.at(index - 1)
  const target = {
    ArrowRight: next,
    ArrowDown: next,
    ArrowLeft: previous,
    ArrowUp: previous,
    Home: tabs[0],
    End: tabs.at(-1),
  }[event.key]
  if (!target) return

  event.preventDefault()
  target.focus()
  select(target.value)
}

// asNav renders a <nav> of Tabs.Link for page navigation. It needs no Tabs.Root: the
// <nav> is the .tabs block, since .tabs__list only styles inside a .tabs.
function TabsList({ size, asNav = false, className, children, ...props }) {
  const tabs = use(TabsContext)
  const classes = cx('tabs__list', size && `tabs__list--${size}`, className)

  if (asNav) {
    return (
      <nav data-slot="tabs" className="tabs" {...props}>
        <div data-slot="tabs-list" className={classes}>
          {children}
        </div>
      </nav>
    )
  }

  return (
    <div
      data-slot="tabs-list"
      role="tablist"
      className={classes}
      onKeyDown={(event) => handleArrowKeys(event, tabs.select)}
      {...props}
    >
      {children}
    </div>
  )
}

function TabsTab({ value, disabled, className, onClick, ...props }) {
  const tabs = useTabs('Tab')
  const active = value === tabs.value

  return (
    <button
      data-slot="tabs-tab"
      type="button"
      role="tab"
      value={value}
      id={`${tabs.id}-tab-${value}`}
      aria-controls={`${tabs.id}-panel-${value}`}
      aria-selected={active}
      tabIndex={active ? 0 : -1}
      disabled={disabled}
      className={tabClasses({ active, disabled, className })}
      onClick={(event) => {
        onClick?.(event)
        if (!event.defaultPrevented) tabs.select(value)
      }}
      {...props}
    />
  )
}

function TabsLink({ active, disabled, className, ...props }) {
  return (
    <a
      data-slot="tabs-link"
      aria-current={active ? 'page' : undefined}
      tabIndex={disabled ? -1 : undefined}
      className={tabClasses({ active, disabled, className })}
      {...props}
    />
  )
}

function TabsPanel({ value, className, ...props }) {
  const tabs = useTabs('Panel')

  return (
    <div
      data-slot="tabs-panel"
      role="tabpanel"
      id={`${tabs.id}-panel-${value}`}
      aria-labelledby={`${tabs.id}-tab-${value}`}
      tabIndex={0}
      hidden={value !== tabs.value}
      className={cx('tabs__panel', className)}
      {...props}
    />
  )
}

export function tabClasses({ active, disabled, className }) {
  return cx('tabs__tab', active && 'tabs__tab--active', disabled && 'tabs__tab--disabled', className)
}

export const Tabs = {
  Root: TabsRoot,
  List: TabsList,
  Tab: TabsTab,
  Link: TabsLink,
  Panel: TabsPanel,
}
