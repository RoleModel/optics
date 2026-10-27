const ICONS = { warning: 'warning', danger: 'error', alert: 'error', info: 'info', notice: 'task_alt' }

export function alertIcon(variant) {
  return ICONS[variant] ?? 'campaign'
}
