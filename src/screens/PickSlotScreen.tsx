import { ActionBar } from '../components/ActionBar'
import { TimeSlot } from '../components/TimeSlot'
import { TopBar } from '../components/TopBar'
import type { Service } from '../data/services'
import { days, times, type Slot } from '../data/slots'
import './Screen.css'
import './PickSlotScreen.css'

// Figma: "02 Pick a slot" (7:121).
type PickSlotScreenProps = {
  service: Service
  selectedDay: string
  selectedTime: string
  onSelectDay: (day: string) => void
  onSelectTime: (time: string) => void
  onBack?: () => void
  onContinue?: () => void
}

export function PickSlotScreen({
  service,
  selectedDay,
  selectedTime,
  onSelectDay,
  onSelectTime,
  onBack,
  onContinue,
}: PickSlotScreenProps) {
  return (
    <div className="screen">
      <TopBar title="Book a repair" step="Step 2 of 3" onBack={onBack} />

      <main className="screen__content">
        <header className="screen__header">
          <h1 className="screen__title">Pick a drop-off time</h1>
          <p className="screen__subtitle">
            {service.title}, {service.duration}
          </p>
        </header>

        <SlotGroup
          id="slot-day"
          label="Day"
          name="day"
          slots={days}
          selected={selectedDay}
          onSelect={onSelectDay}
        />
        <SlotGroup
          id="slot-time"
          label="Drop-off time"
          name="time"
          slots={times}
          selected={selectedTime}
          onSelect={onSelectTime}
        />

        <p className="screen__note">Ready the same day. We text you when your bike is done.</p>
      </main>

      <ActionBar label="Continue" onClick={onContinue} />
    </div>
  )
}

// A label with a wrapping row of Time slots (Figma frames "Day" and "Drop-off time").
type SlotGroupProps = {
  id: string
  label: string
  name: string
  slots: Slot[]
  selected: string
  onSelect: (value: string) => void
}

function SlotGroup({ id, label, name, slots, selected, onSelect }: SlotGroupProps) {
  return (
    <div className="slot-group">
      <span className="slot-group__label" id={id}>
        {label}
      </span>
      <div className="slot-group__options" role="radiogroup" aria-labelledby={id}>
        {slots.map((slot) => (
          <TimeSlot
            key={slot.value}
            name={name}
            value={slot.value}
            label={slot.label}
            selected={selected === slot.value}
            disabled={slot.disabled}
            onSelect={onSelect}
          />
        ))}
      </div>
    </div>
  )
}
