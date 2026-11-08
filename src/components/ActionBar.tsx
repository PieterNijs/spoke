import { Button } from './Button'
import './ActionBar.css'

// Figma: "Action bar" (2003:37).
// Bottom area of a screen with the main action. Change the label on the Button.
type ActionBarProps = {
  label: string
  onClick?: () => void
  disabled?: boolean
  /** Use "submit" when the Action bar sits inside a form */
  type?: 'button' | 'submit'
}

export function ActionBar({ label, onClick, disabled, type = 'button' }: ActionBarProps) {
  return (
    <footer className="action-bar">
      <Button
        label={label}
        variant="primary"
        fullWidth
        type={type}
        onClick={onClick}
        disabled={disabled}
      />
    </footer>
  )
}
