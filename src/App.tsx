import { useEffect, useState } from 'react'
import { getService, services } from './data/services'
import { ChooseServiceScreen } from './screens/ChooseServiceScreen'
import { PickSlotScreen } from './screens/PickSlotScreen'

type Step = 'service' | 'slot'

// The booking flow. Defaults match the selections in the Figma example screens.
function App() {
  const [step, setStep] = useState<Step>('service')
  const [serviceId, setServiceId] = useState(services[0].id)
  const [day, setDay] = useState('today')
  const [time, setTime] = useState('16:30')

  // Start each screen at the top
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [step])

  if (step === 'slot') {
    return (
      <PickSlotScreen
        service={getService(serviceId)}
        selectedDay={day}
        selectedTime={time}
        onSelectDay={setDay}
        onSelectTime={setTime}
        onBack={() => setStep('service')}
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
