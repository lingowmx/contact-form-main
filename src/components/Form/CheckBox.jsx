import { useFormContext } from "react-hook-form"

export const CheckBox = ({
  name,
  label,
  validation = {}
}) => {
  const { register, formState: { errors } } = useFormContext()
  return (
    <section className="mt-2 w-72">  
    <div className=" w-72 flex justify-between gap-3">
      <input type="checkbox"
        {...register(name, validation)} />
      <p className="">{label}
        <span> *</span>
      </p>
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
