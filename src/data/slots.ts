// Days and drop-off times shown on screen 02, as in the Figma example screen.
// Placeholder data: the same times are fully booked on every day.
export type Slot = {
  value: string
  label: string
  /** Fully booked (Figma Time slot State=Disabled) */
  disabled?: boolean
}

export const days: Slot[] = [
  { value: 'today', label: 'Today' },
  { value: 'tomorrow', label: 'Tomorrow' },
  { value: 'mon-16', label: 'Mon 16' },
]

export const times: Slot[] = [
  { value: '09:00', label: '09:00', disabled: true },
  { value: '10:30', label: '10:30', disabled: true },
  { value: '12:00', label: '12:00' },
  { value: '14:00', label: '14:00' },
  { value: '16:30', label: '16:30' },
  { value: '17:30', label: '17:30' },
]

export function getSlotLabel(slots: Slot[], value: string): string {
  return slots.find((slot) => slot.value === value)?.label ?? value
}
