const STATUSES = {
  draft: { label: 'Draft' },
  sent: { label: 'Sent', variant: 'info' },
  paid: { label: 'Paid', variant: 'notice' },
  due: { label: 'Due soon', variant: 'warning' },
  overdue: { label: 'Overdue', variant: 'danger' },
}

// An unknown status shows as itself, with no variant.
export function invoiceStatus(status) {
  return STATUSES[status] ?? { label: status }
}
