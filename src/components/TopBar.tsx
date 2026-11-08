import chevronLeft from '../assets/icons/chevron-left.svg'
import './TopBar.css'

// Figma: "Top bar" (6:24).
// Screen header with a back arrow, the flow title and the step counter.
type TopBarProps = {
  title: string
  /** e.g. "Step 1 of 3" */
  step: string
  onBack?: () => void
}

export function TopBar({ title, step, onBack }: TopBarProps) {
  return (
    <header className="top-bar">
      <button type="button" className="top-bar__back" aria-label="Back" onClick={onBack}>
        <img src={chevronLeft} width="24" height="24" alt="" />
      </button>
      <span className="top-bar__title">{title}</span>
      <span className="top-bar__step">{step}</span>
    </header>
  )
}
