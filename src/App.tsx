import { useEffect, useState } from 'react'
import { Frame47 } from './components/Frame47'
import { ComponentsPage } from './screens/ComponentsPage'
import { getService, services } from './data/services'
import { days, getSlotLabel } from './data/slots'
import { ChooseServiceScreen } from './screens/ChooseServiceScreen'
import { ConfirmScreen } from './screens/ConfirmScreen'
import { PickSlotScreen } from './screens/PickSlotScreen'

type Step = 'service' | 'slot' | 'confirm'

// Extra pages, next to the booking flow:
//   http://localhost:5173/#components  every component in each of its states
//   http://localhost:5173/#frame-47    the "sloppy" Figma card on its own
function App() {
  const [hash, setHash] = useState(window.location.hash)

  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash)
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  if (hash.startsWith('#components')) {
    return <ComponentsPage />
  }

  if (hash === '#frame-47') {
    return (
      <div className="frame-47-preview">
        <Frame47 />
      </div>
    )
  }

  return <BookingFlow />
}

// The booking flow. Defaults match the selections in the Figma example screens.
function BookingFlow() {
  const [step, setStep] = useState<Step>('service')
  const [serviceId, setServiceId] = useState(services[0].id)
  const [day, setDay] = useState('today')
  const [time, setTime] = useState('16:30')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')

  // Start each screen at the top
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [step])

  if (step === 'confirm') {
    return (
      <ConfirmScreen
        service={getService(serviceId)}
        dropOff={`${getSlotLabel(days, day)} at ${time}`}
        name={name}
        phone={phone}
        onNameChange={setName}
        onPhoneChange={setPhone}
        onBack={() => setStep('slot')}
        // No confirmation screen in the design yet
        onConfirm={() => {}}
      />
    )
  }

  if (step === 'slot') {
    return (
      <PickSlotScreen
        service={getService(serviceId)}
        selectedDay={day}
        selectedTime={time}
        onSelectDay={setDay}
        onSelectTime={setTime}
        onBack={() => setStep('service')}
        onContinue={() => setStep('confirm')}
      />
    )
  }

  return (
    <ChooseServiceScreen
      selectedServiceId={serviceId}
      onSelectService={setServiceId}
      onContinue={() => setStep('slot')}
    />
  )
}

export default App
