import { Icon } from '../icon/Icon.jsx'
import { cx } from '../../shared/cx.js'

// React version of badge.spec.json. Modeled on optics-components-react Badge:
//
// <Badge variant="notice" pill>Paid</Badge>
// <Badge variant="primary"><Badge.Icon name="add" /> New</Badge>

export function Badge({ variant, pill, notification, className, ...props }) {
  return <span data-slot="badge" className={badgeClasses({ variant, pill, notification, className })} {...props} />
}

Badge.Icon = function BadgeIcon({ className, ...props }) {
  return <Icon data-slot="badge-icon" className={cx('badge__icon', className)} {...props} />
}

export function badgeClasses({ variant, pill, notification, className }) {
  return cx(
    'badge',
    variant && `badge--${variant}`,
    pill && 'badge--pill',
    notification && `badge--notification-${notification}`,
    className
  )
}
