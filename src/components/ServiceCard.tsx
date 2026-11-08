import { Tag } from './Tag'
import './ServiceCard.css'

// Figma: "Service card" (2003:33), variants State=Default / State=Selected.
// One service in the list on screen 01. Selected marks the user's choice.
//
// The user picks exactly one service, so each card is a radio option:
// give all cards in a list the same `name`, and arrow keys move between them.
type ServiceCardProps = {
  title: string
  price: string
  description: string
  tags?: string[]
  /** Figma State=Selected */
  selected?: boolean
  /** Shared by every card in the same list */
  name: string
  value: string
  onSelect?: (value: string) => void
}

export function ServiceCard({
  title,
  price,
  description,
  tags = [],
  selected = false,
  name,
  value,
  onSelect,
}: ServiceCardProps) {
  return (
    <label className="service-card" data-selected={selected}>
      <input
        className="service-card__input"
        type="radio"
        name={name}
        value={value}
        checked={selected}
        onChange={() => onSelect?.(value)}
      />
      <span className="service-card__header">
        <span className="service-card__title">{title}</span>
        <span className="service-card__price">{price}</span>
      </span>
      <span className="service-card__description">{description}</span>
      {tags.length > 0 && (
        <span className="service-card__tags">
          {tags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </span>
      )}
    </label>
  )
}
