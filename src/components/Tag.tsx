import './Tag.css'

// Figma: "Tag" (3:27). Small label for service facts such as duration or bike type.
type TagProps = {
  label: string
}

export function Tag({ label }: TagProps) {
  return <span className="tag">{label}</span>
}
