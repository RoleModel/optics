const MAX = 99

// The badge text, or null for no badge, and the button's name for a screen reader.
export function notificationCount(count = 0) {
  return {
    badge: count > 0 ? (count > MAX ? `${MAX}+` : String(count)) : null,
    label: count > 0 ? `Notifications, ${count} unread` : 'Notifications',
  }
}
