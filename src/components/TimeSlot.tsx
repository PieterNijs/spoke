import './TimeSlot.css'

// Figma: "Time slot" (6:14), states Default / Selected / Disabled.
// A pickable day or drop-off time. Selected is the user's choice, Disabled is fully booked.
//
// Each slot is a radio option: give all slots in one group the same `name`.
type TimeSlotProps = {
  label: string
  name: string
  value: string
  /** Figma State=Selected */
  selected?: boolean
  /** Figma State=Disabled (fully booked) */
  disabled?: boolean
  onSelect?: (value: string) => void
}

export function TimeSlot({
  label,
  name,
  value,
  selected = false,
  disabled = false,
  onSelect,
}: TimeSlotProps) {
  return (
    <label className="time-slot" data-selected={selected} data-disabled={disabled}>
      <input
        className="time-slot__input"
        type="radio"
        name={name}
        value={value}
        checked={selected}
        disabled={disabled}
        onChange={() => onSelect?.(value)}
      />
      {label}
    </label>
  )
}
