import { Badge } from '../../components/badge/Badge.jsx'
import { Icon } from '../../components/icon/Icon.jsx'
import { notificationCount } from './notification-count.js'

// React version of demo-notifications.js:
//
// <DemoNotifications count={3} />
export function DemoNotifications({ count, ...props }) {
  const { badge, label } = notificationCount(count)
  return (
    <button type="button" className="notification-button" aria-label={label} {...props}>
      <Icon name="notifications" />
      {badge && (
        <Badge variant="danger" pill notification="right">
          {badge}
        </Badge>
      )}
    </button>
  )
}
