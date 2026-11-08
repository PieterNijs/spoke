import { useId, type InputHTMLAttributes } from 'react'
import './Input.css'

// Figma: "Input" (6:23), states Default / Focus.
// Text field with a label above it. Focus shows the brand border.
// The Focus state isn't a prop: the browser applies it when the field has focus.
type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string
}

export function Input({ label, id, type = 'text', className, ...rest }: InputProps) {
  const generatedId = useId()
  const inputId = id ?? generatedId

  return (
    <div className={['input', className].filter(Boolean).join(' ')}>
      <label className="input__label" htmlFor={inputId}>
        {label}
      </label>
      <input className="input__field" id={inputId} type={type} {...rest} />
    </div>
  )
}
