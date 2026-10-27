// Joins class names and skips the falsy ones: cx('alert', variant && `alert--${variant}`)
export const cx = (...classes) => classes.filter(Boolean).join(' ')
