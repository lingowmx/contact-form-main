import { useFormContext } from "react-hook-form"
import checkIcon from '../../../assets/images/icon-checkbox-check.svg'

export const CheckBox = ({
  name,
  label,
  validation = {},

}) => {
  const { register, watch, formState: { errors } } = useFormContext()
  const isChecked = watch(name)
  return (
    <section className="mt-2 w-72">
      <div className="w-72 mt-1 flex justify-between gap-3 cursor-pointer">
        <label
          htmlFor={name}
          className="cursor-pointer flex justify-between gap-3 items-center">
          <div className="w-5 h-4 border border-gray-300">
            {isChecked && (
              <img src={checkIcon} alt="checkIcon" />
            )}
          </div>
          <input
            type="checkbox"
            id={name}
            className="peer sr-only"
            {...register(name, validation)}

          />

          {label}
        </label>

      </div>
      <div>
        {errors[name] && (
          <p className="text-xs text-red-500">
            {errors[name].message}
          </p>
        )}
      </div>
    </section>
  )
}
