import { useRef, useState, type FormEvent } from 'react'
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
  /** Only called when both fields are filled in */
  onConfirm?: () => void
}

const NAME_ERROR = 'Enter your name'
const PHONE_ERROR = 'Enter your phone number'

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
  // Errors only show after the first try to confirm, then update as the user types
  const [triedToConfirm, setTriedToConfirm] = useState(false)
  const nameRef = useRef<HTMLInputElement>(null)
  const phoneRef = useRef<HTMLInputElement>(null)

  const nameMissing = name.trim() === ''
  const phoneMissing = phone.trim() === ''

  // A form, so pressing Enter in a field confirms too
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setTriedToConfirm(true)

    if (nameMissing) {
      nameRef.current?.focus()
      return
    }
    if (phoneMissing) {
      phoneRef.current?.focus()
      return
    }
    onConfirm?.()
  }

  return (
    // noValidate: we show our own error state instead of the browser's popup
    <form className="screen" onSubmit={handleSubmit} noValidate>
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
          ref={nameRef}
          label="Your name"
          placeholder="First and last name"
          autoComplete="name"
          required
          value={name}
          onChange={(event) => onNameChange(event.target.value)}
          error={triedToConfirm && nameMissing ? NAME_ERROR : undefined}
        />
        <Input
          ref={phoneRef}
          label="Phone number"
          placeholder="+32 470 12 34 56"
          type="tel"
          autoComplete="tel"
          required
          value={phone}
          onChange={(event) => onPhoneChange(event.target.value)}
          error={triedToConfirm && phoneMissing ? PHONE_ERROR : undefined}
        />

        <p className="screen__note">We text you when your bike is ready. You pay when you pick it up.</p>
      </main>

      <ActionBar label="Confirm booking" type="submit" />
    </form>
  )
}
