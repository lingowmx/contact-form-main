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
  const renderInput = () => {
    switch (type) {
      case "textarea":
        return (
          <textarea
            id={name}
            name={name}
            placeholder={placeholder}
            required={required}
            className="w-72 h-20 pl-2 border border-gray-500 rounded-md focus:outline-green-600 cursor-pointer"
          />
        );
      case "radio":
        return (
          <>
            <input
              id={name}
              type="radio"
              name={name}
              value={value}
              required={required}
              className="appearance-none w-3 h-3 cursor-pointer border-1 border-gray-500 rounded-full checked:border-white checked:bg-green-600 checked:outline-2 checked:outline-green-600"
            />
            {labelText && <label className="pl-1">{labelText}</label>}
          </>
        );
      case "checkbox":
        return (
          <>
            <input id={name} type="checkbox" name={name} required={required} />
            {labelText && <label>{labelText}{required && <span className="text-red-500">*</span>}</label>}
          </>
        );
      default:
        return (
          <>
            <input
              id={name}
              type={type}
              name={name}
              placeholder={placeholder}
              required={required}
              value={value}
              className="w-72 h-10 pl-2 border border-gray-500 rounded-md focus:outline-green-600 cursor-pointer"
            />
          </>
        );
    }
  };
  return (
    <fieldset className="flex flex-col mb-4">
      <label htmlFor="name" className="text-xs pl-2 mb-1">
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      <div
        className={`flex items-center ${
          type === "radio" || type === "checkbox"
            ? "gap-1 pl-2 w-72 h-10 border border-gray-500 rounded-md"
            : ""
        }`}
      >
        {renderInput()}
      </div>
    </fieldset>
  );
  //   return (
  //     <fieldset className="flex flex-col mb-4">
  //       <label htmlFor={name} className="text-sm pl-2 mb-1">
  //         {label}
  //         {required && <span className="text-red-500">*</span>}
  //       </label>
  //       <div
  //         className={`flex items-center ${
  //           type === "radio"
  //             ? "gap-1 pl-2 w-72 h-10 border border-gray-500 rounded-md"
  //             : ""
  //         }`}
  //       >
  //         {type === "textarea" ? (
  // <textarea
  //   id={name}
  //   name={name}
  //   placeholder="bibibi"
  //   required
  //   className="w-72 h-20 pl-2 border border-gray-500 rounded-md"
  // />
  //         ) : (
  //           <input
  //             id={name}
  //             type={type}
  //             name={name}
  //             placeholder={placeholder}
  //             required={required}
  //             value={value}
  //             className={`${
  //               type === "radio"
  //                 ? ""
  //                 : "w-72 h-10 pl-2 border border-gray-500 rounded-md"
  //             }`}
  //           />
  //         )}
  //         {type === "radio" && labelText && (
  //           <label className="pl-1">{labelText}</label>
  //         )}
  //       </div>
  //     </fieldset>
  //   );
  // };
};
