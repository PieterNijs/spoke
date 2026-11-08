import type { FormEvent } from 'react'
import { ActionBar } from '../components/ActionBar'
import { Input } from '../components/Input'
import { SummaryRow } from '../components/SummaryRow'
import { TopBar } from '../components/TopBar'
import type { Service } from '../data/services'
import './Screen.css'
import './ConfirmScreen.css'

// Figma: "03 Confirm" (7:128).
type ConfirmScreenProps = {
  service: Service
  /** e.g. "Today at 16:30" */
  dropOff: string
  name: string
  phone: string
  onNameChange: (name: string) => void
  onPhoneChange: (phone: string) => void
  onBack?: () => void
  onConfirm?: () => void
}

export function ConfirmScreen({
  service,
  dropOff,
  name,
  phone,
  onNameChange,
  onPhoneChange,
  onBack,
  onConfirm,
}: ConfirmScreenProps) {
  // A form, so pressing Enter in a field confirms too
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    onConfirm?.()
  }

  return (
    <form className="screen" onSubmit={handleSubmit}>
      <TopBar title="Book a repair" step="Step 3 of 3" onBack={onBack} />

      <main className="screen__content">
        <header className="screen__header">
          <h1 className="screen__title">Check and confirm</h1>
        </header>

        <dl className="booking-summary">
          <SummaryRow label="Service" value={service.title} />
          <SummaryRow label="Drop-off" value={dropOff} />
          <SummaryRow label="Price" value={`${service.price}, pay at pick-up`} />
        </dl>

        <Input
          label="Your name"
          placeholder="First and last name"
          autoComplete="name"
          value={name}
          onChange={(event) => onNameChange(event.target.value)}
        />
        <Input
          label="Phone number"
          placeholder="+32 470 12 34 56"
          type="tel"
          autoComplete="tel"
          value={phone}
          onChange={(event) => onPhoneChange(event.target.value)}
        />

        <p className="screen__note">We text you when your bike is ready. You pay when you pick it up.</p>
      </main>

      <ActionBar label="Confirm booking" type="submit" />
    </form>
  )
}
