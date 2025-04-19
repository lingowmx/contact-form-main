import { useFormContext } from "react-hook-form"

export const InputField = ({
  name,
  label,
  type = 'text',
  placeholder,
  validation = {},
  fullWidth = false
}) => {
  const { register, formState: { errors } } = useFormContext()
  const inputClasses = `w-72 border ${errors[name] ? 'border-red-500' : 'border-gray-border'} rounded p-2 focus:outline-green-500 
  ${fullWidth ? "w-full" : ""}`

  return (
    <section className="flex mb-4 text-gray-text">
      <div className="w-full flex flex-col justify-between">
        <div className="flex gap-1">
          <label 
            htmlFor={name}
            className="text-sm">{label}</label>
          <span>*</span>
        </div>
        <input
          className= {inputClasses}
          id={name}
          type={type}
          placeholder={placeholder}
          {...register(name, validation)}
        />
        {errors[name] && (
          <p className="text-xs text-red-error">
            {errors[name].message}
          </p>
        )}
      </div>
    </section>
  )
}
