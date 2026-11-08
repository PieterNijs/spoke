import { useEffect, useState } from 'react'
import { getService, services } from './data/services'
import { days, getSlotLabel } from './data/slots'
import { ChooseServiceScreen } from './screens/ChooseServiceScreen'
import { ConfirmScreen } from './screens/ConfirmScreen'
import { PickSlotScreen } from './screens/PickSlotScreen'

type Step = 'service' | 'slot' | 'confirm'

// The booking flow. Defaults match the selections in the Figma example screens.
function App() {
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
