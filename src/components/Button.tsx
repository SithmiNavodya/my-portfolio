import React from 'react'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'ghost'
}

const Button: React.FC<Props> = ({ children, variant = 'primary', className = '', ...rest }) => {
  const base = 'inline-flex items-center gap-2 px-3 py-2 rounded-md font-medium'
  const styles = variant === 'primary'
    ? 'bg-slate-900 text-white'
    : 'bg-white border border-gray-200 text-slate-800'

  return (
    <button className={`${base} ${styles} ${className}`} {...rest}>
      {children}
    </button>
  )
}

export default Button
