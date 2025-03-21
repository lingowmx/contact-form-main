interface InputFieldProps {
  label: string;
  type: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  value?: string;
  labelText?: string;
}

export const InputField = ({
  label,
  type,
  name,
  placeholder,
  required,
  value,
  labelText,
}: InputFieldProps) => {
  return (
    <fieldset className="flex flex-col mb-4">
      <label htmlFor={name} className="text-sm pl-2 mb-1">
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      <div
        className={`flex items-center ${
          type === "radio"
            ? "gap-1 pl-2 w-72 h-10 border border-gray-500 rounded-md"
            : ""
        }`}
      >
        {type === "textarea" ? (
          <textarea
            id={name}
            name={name}
            placeholder="bibibi"
            required
            className="w-72 h-20 pl-2 border border-gray-500 rounded-md"
          />
        ) : (
          <input
            id={name}
            type={type}
            name={name}
            placeholder={placeholder}
            required={required}
            value={value}
            className={`${
              type === "radio"
                ? ""
                : "w-72 h-10 pl-2 border border-gray-500 rounded-md"
            }`}
          />
        )}
        {type === "radio" && labelText && (
          <label className="pl-1">{labelText}</label>
        )}
      </div>
    </fieldset>
  );
};
