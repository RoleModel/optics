// @types/react does not include the Invoker Commands API yet. React 19 passes these lowercase attributes to the DOM.
declare module 'react' {
  interface ButtonHTMLAttributes<T> {
    command?: string
    commandfor?: string
  }
}

export {}
