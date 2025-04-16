import { useFormContext } from "react-hook-form"

export const RadioSelection = ({
  name,
  label,
  options = [],
  validation = {},

}) => {

  const { register, formState: { errors }, watch } = useFormContext()
  const selectedValue = watch(name)
  return (
    <section className="flex flex-col">
      <div className="flex gap-1 text-sm mb-1">
        <label>{label}</label>
        <span>*</span>
      </div>
      <div className="flex flex-col gap-2">
        {options.map((option) => (
          <div key={option.value} className="relative">
            <input
              type="radio"
              id={option.value}
              value={option.value}
              {...register(name, validation)}
              className="peer absolute opacity-0 w-0 h-0"
            />
            <label
              htmlFor={option.value}
              className="w-72 h-10 flex pl-4 items-center border border-gray-300 rounded-md gap-1 
                       peer-checked:bg-green-500/10  peer-checked:border-green-500
                       transition-colors duration-200 cursor-pointer">
              <span className="w-4 h-4 rounded-full border-2 border-gray-300 
                            peer-checked:border-white peer-checked:bg-white
                            flex items-center justify-center">
                <span className={`w-2 h-2 rounded-full inline-block transition-colors duration-200 
                     ${selectedValue === option.value ? "bg-green-600" : "bg-transparent"}`}></span>
              </span>
              {option.value}
            </label>
          </div>
        ))}
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