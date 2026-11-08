import './SummaryRow.css'

// Figma: "Summary row" (2003:34).
// One line of the booking summary on screen 03.
// Renders a <dt>/<dd> pair, so place rows inside a <dl>.
type SummaryRowProps = {
  label: string
  value: string
}

export function SummaryRow({ label, value }: SummaryRowProps) {
  return (
    <div className="summary-row">
      <dt className="summary-row__label">{label}</dt>
      <dd className="summary-row__value">{value}</dd>
    </div>
  )
}
