import { Button } from './Button'
import './ActionBar.css'

// Figma: "Action bar" (2003:37).
// Bottom area of a screen with the main action. Change the label on the Button.
type ActionBarProps = {
  label: string
  onClick?: () => void
  disabled?: boolean
}

export function ActionBar({ label, onClick, disabled }: ActionBarProps) {
  return (
    <footer className="action-bar">
      <Button label={label} variant="primary" fullWidth onClick={onClick} disabled={disabled} />
    </footer>
  )
}
