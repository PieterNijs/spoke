import { useState } from 'react'
import { ActionBar } from './components/ActionBar'
import { Button } from './components/Button'
import { Input } from './components/Input'
import { ServiceCard } from './components/ServiceCard'
import { SummaryRow } from './components/SummaryRow'
import { Tag } from './components/Tag'
import { TimeSlot } from './components/TimeSlot'
import { TopBar } from './components/TopBar'
import './App.css'

// Temporary component preview, filled with content from the Figma example screens.
// Replace with the real screens later.
const services = [
  { id: 'flat-tyre', title: 'Flat tyre repair', price: '€15', description: 'Tube or tyre swap, any wheel size.', tags: ['30 min'] },
  { id: 'brakes', title: 'Brake check and adjust', price: '€25', description: 'Pads, cables and alignment.', tags: ['45 min'] },
  { id: 'gears', title: 'Gear tune-up', price: '€30', description: 'Smooth shifting on every gear.', tags: ['45 min'] },
  { id: 'full-service', title: 'Full service', price: '€89', description: 'Everything checked, cleaned and adjusted.', tags: ['2 hours'] },
]

const times = [
  { value: '09:00' },
  { value: '10:30' },
  { value: '12:00', disabled: true },
  { value: '14:00' },
  { value: '16:30' },
  { value: '17:30' },
]

function App() {
  const [service, setService] = useState('flat-tyre')
  const [time, setTime] = useState('10:30')

  return (
    <main className="gallery">
      <section className="gallery__section" aria-labelledby="h-top-bar">
        <h2 className="gallery__heading gallery__heading--padded" id="h-top-bar">Top bar</h2>
        <TopBar title="Book a repair" step="Step 1 of 3" />
      </section>

      <section className="gallery__section gallery__section--padded" aria-labelledby="h-button">
        <h2 className="gallery__heading" id="h-button">Button</h2>
        <div className="gallery__row">
          <Button label="Book this repair" variant="primary" />
          <Button label="Book this repair" variant="secondary" />
        </div>
      </section>

      <section className="gallery__section gallery__section--padded" aria-labelledby="h-tag">
        <h2 className="gallery__heading" id="h-tag">Tag</h2>
        <div className="gallery__row">
          <Tag label="30 min" />
          <Tag label="E-bike" />
        </div>
      </section>

      <section className="gallery__section gallery__section--padded" aria-labelledby="h-time-slot">
        <h2 className="gallery__heading" id="h-time-slot">Time slot</h2>
        <div className="gallery__row" role="radiogroup" aria-labelledby="h-time-slot">
          {times.map((slot) => (
            <TimeSlot
              key={slot.value}
              name="time"
              value={slot.value}
              label={slot.value}
              selected={time === slot.value}
              disabled={slot.disabled}
              onSelect={setTime}
            />
          ))}
        </div>
      </section>

      <section className="gallery__section gallery__section--padded" aria-labelledby="h-input">
        <h2 className="gallery__heading" id="h-input">Input</h2>
        <div className="gallery__stack">
          <Input label="Your name" placeholder="First and last name" autoComplete="name" />
          <Input label="Phone" placeholder="So we can text you when it's ready" type="tel" autoComplete="tel" />
        </div>
      </section>

      <section className="gallery__section gallery__section--padded" aria-labelledby="h-service-card">
        <h2 className="gallery__heading" id="h-service-card">Service card</h2>
        <div className="gallery__stack" role="radiogroup" aria-labelledby="h-service-card">
          {services.map((s) => (
            <ServiceCard
              key={s.id}
              name="service"
              value={s.id}
              title={s.title}
              price={s.price}
              description={s.description}
              tags={s.tags}
              selected={service === s.id}
              onSelect={setService}
            />
          ))}
        </div>
      </section>

      <section className="gallery__section gallery__section--padded" aria-labelledby="h-summary-row">
        <h2 className="gallery__heading" id="h-summary-row">Summary row</h2>
        <dl className="gallery__stack">
          <SummaryRow label="Service" value="Flat tyre repair" />
          <SummaryRow label="Drop-off" value="Tomorrow, 10:30" />
          <SummaryRow label="Price" value="€15" />
        </dl>
      </section>

      <section className="gallery__section" aria-labelledby="h-action-bar">
        <h2 className="gallery__heading gallery__heading--padded" id="h-action-bar">Action bar</h2>
        <ActionBar label="Book this repair" />
      </section>
    </main>
  )
}

export default App
