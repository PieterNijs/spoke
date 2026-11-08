// The repair services shown on screen 01, as in the Figma example screens.
export type Service = {
  id: string
  title: string
  price: string
  description: string
  tags: string[]
  /** Used in sentences, e.g. "Flat tyre repair, about 30 minutes" on screen 02 */
  duration: string
}

export const services: Service[] = [
  { id: 'flat-tyre', title: 'Flat tyre repair', price: '€15', description: 'Tube or tyre swap, any wheel size.', tags: ['30 min'], duration: 'about 30 minutes' },
  { id: 'brakes', title: 'Brake check and adjust', price: '€25', description: 'Pads, cables and alignment.', tags: ['45 min'], duration: 'about 45 minutes' },
  { id: 'gears', title: 'Gear tune-up', price: '€30', description: 'Smooth shifting on every gear.', tags: ['45 min'], duration: 'about 45 minutes' },
  { id: 'full-service', title: 'Full service', price: '€89', description: 'Everything checked, cleaned and adjusted.', tags: ['2 hours'], duration: 'about 2 hours' },
]

export function getService(id: string): Service {
  return services.find((service) => service.id === id) ?? services[0]
}
