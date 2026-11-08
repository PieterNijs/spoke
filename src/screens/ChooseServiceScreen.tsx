import { ActionBar } from '../components/ActionBar'
import { ServiceCard } from '../components/ServiceCard'
import { TopBar } from '../components/TopBar'
import { services } from '../data/services'
import './Screen.css'
import './ChooseServiceScreen.css'

// Figma: "01 Choose a service" (7:114).
type ChooseServiceScreenProps = {
  selectedServiceId: string
  onSelectService: (serviceId: string) => void
  onBack?: () => void
  onContinue?: () => void
}

export function ChooseServiceScreen({
  selectedServiceId,
  onSelectService,
  onBack,
  onContinue,
}: ChooseServiceScreenProps) {
  return (
    <div className="screen">
      <TopBar title="Book a repair" step="Step 1 of 3" onBack={onBack} />

      <main className="screen__content">
        <header className="screen__header">
          <h1 className="screen__title" id="choose-service-title">
            Choose a service
          </h1>
          <p className="screen__subtitle">What does your bike need?</p>
        </header>

        <div className="service-list" role="radiogroup" aria-labelledby="choose-service-title">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              name="service"
              value={service.id}
              title={service.title}
              price={service.price}
              description={service.description}
              tags={service.tags}
              selected={selectedServiceId === service.id}
              onSelect={onSelectService}
            />
          ))}
        </div>
      </main>

      <ActionBar label="Continue" onClick={onContinue} />
    </div>
  )
}
