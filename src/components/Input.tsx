import { forwardRef, useId, type InputHTMLAttributes } from 'react'
import './Input.css'

// Figma: "Input" (6:23), states Default / Focus / Error.
// Text field with a label above it. Focus shows the brand border.
// Focus isn't a prop: the browser applies it when the field has focus.
// Error: pass an `error` message to show the error border and the message below.
type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string
  /** Figma State=Error. The message shown under the field. */
  error?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { label, error, id, type = 'text', className, ...rest },
  ref,
) {
  const generatedId = useId()
  const inputId = id ?? generatedId
  const errorId = `${inputId}-error`

  return (
    <div className={['input', className].filter(Boolean).join(' ')} data-error={Boolean(error)}>
      <label className="input__label" htmlFor={inputId}>
        {label}
      </label>
      <input
        ref={ref}
        className="input__field"
        id={inputId}
        type={type}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        {...rest}
      />
      {error && (
        <p className="input__error" id={errorId}>
          {error}
        </p>
      )}
    </div>
  )
})
