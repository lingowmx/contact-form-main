import { useFormContext } from "react-hook-form"

export const CheckBox = ({
  name,
  label,
  validation = {},

}) => {
  const { register, formState: { errors } } = useFormContext()
  return (
    <section className="mt-2 w-72">
      <div className="w-72 mt-1 flex justify-between gap-3 cursor-pointer">
        <input
          type="checkbox"
          id={name}
          className="peer sr-only"
          {...register(name, validation)}

        />
        <span className="w-4 h-4 border rounded flex items-center justify-center 
                   peer-checked:bg-green-500 transition-colors">✔
          {/* <span className="text-black text-xs hidden peer-checked:block peer-checked:bg-green-300">✔</span> */}
        </span>
        <label
          htmlFor={name}
          className="cursor-pointer">
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
