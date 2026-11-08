import type { ButtonHTMLAttributes } from 'react'
import './Button.css'

// Figma: "Button" (3:33), variants Primary / Secondary.
// Primary for the main action on a card, Secondary for anything else.
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string
  variant?: 'primary' | 'secondary'
  /** Stretch to the width of the parent, as in the Action bar */
  fullWidth?: boolean
}

export function Button({
  label,
  variant = 'primary',
  fullWidth = false,
  type = 'button',
  className,
  ...rest
}: ButtonProps) {
  const classes = ['button', `button--${variant}`, fullWidth && 'button--full-width', className]
    .filter(Boolean)
    .join(' ')

  return (
    <button type={type} className={classes} {...rest}>
      {label}
    </button>
  )
}
